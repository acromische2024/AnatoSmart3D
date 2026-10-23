#!/usr/bin/env python3
"""
Utility script to extract any organ or concept from BodyParts3D atlas into a standard .glb (glTF binary) file.
Usage:
    python3 scripts/extract_organ_to_glb.py --name "heart" --output public/models/heart.glb
    python3 scripts/extract_organ_to_glb.py --system "cardiac" --output public/models/cardiac_system.glb
"""

import sys
import os
import json
import struct
import argparse
from pathlib import Path

def main():
    parser = argparse.ArgumentParser(description="Extract organs from BodyParts3D atlas into standard GLB")
    parser.add_argument("--name", type=str, help="Search by concept name (e.g. 'heart', 'femur', 'brain')")
    parser.add_argument("--system", type=str, help="Extract all parts of a system (e.g. 'cardiac', 'respiratory')")
    parser.add_argument("--id", type=str, help="Extract specific concept ID (e.g. 'FMA7088') or part ID (e.g. 'FJ1252')")
    parser.add_argument("--output", type=str, required=True, help="Output .glb file path")
    parser.add_argument("--atlas", type=str, default="public/models/atlas/atlas.json", help="Path to atlas.json")

    args = parser.parse_args()

    atlas_path = Path(args.atlas)
    if not atlas_path.exists():
        print(f"Error: atlas.json not found at {atlas_path}", file=sys.stderr)
        sys.exit(1)

    with open(atlas_path, "r") as f:
        atlas = json.load(f)

    target_part_ids = set()
    found_name = "Organ"

    if args.name:
        query = args.name.lower().strip()
        matching_concepts = [c for c in atlas["concepts"] if query in c["name"].lower()]
        if not matching_concepts:
            # Fallback to part names
            matching_parts = [p for p in atlas["parts"] if query in p["name"].lower()]
            for p in matching_parts:
                target_part_ids.add(p["id"])
            if matching_parts:
                found_name = matching_parts[0]["name"]
        else:
            for c in matching_concepts:
                for el in c["elements"]:
                    target_part_ids.add(el)
            found_name = matching_concepts[0]["name"]

    elif args.system:
        sys_query = args.system.lower().strip()
        matching_parts = [p for p in atlas["parts"] if p["system"].lower() == sys_query]
        for p in matching_parts:
            target_part_ids.add(p["id"])
        found_name = f"System {args.system.capitalize()}"

    elif args.id:
        id_query = args.id.strip()
        # Check concepts
        for c in atlas["concepts"]:
            if c["id"].lower() == id_query.lower():
                for el in c["elements"]:
                    target_part_ids.add(el)
                found_name = c["name"]
                break
        if not target_part_ids:
            # Check part id
            for p in atlas["parts"]:
                if p["id"].lower() == id_query.lower():
                    target_part_ids.add(p["id"])
                    found_name = p["name"]
                    break

    if not target_part_ids:
        print("No matching parts found in atlas.", file=sys.stderr)
        sys.exit(1)

    parts_to_extract = [p for p in atlas["parts"] if p["id"] in target_part_ids]
    print(f"Found {len(parts_to_extract)} mesh part(s) for '{found_name}'.")

    # Load required chunks from disk
    atlas_dir = atlas_path.parent
    chunks_cache = {}
    
    for p in parts_to_extract:
        ci = p["chunk"]
        if ci not in chunks_cache:
            chunk_info = atlas["chunks"][ci]
            # Resolve url to disk file
            chunk_filename = os.path.basename(chunk_info["url"])
            chunk_path = atlas_dir / chunk_filename
            if not chunk_path.exists():
                print(f"Error: Chunk file {chunk_path} not found.", file=sys.stderr)
                sys.exit(1)
            with open(chunk_path, "rb") as cf:
                chunks_cache[ci] = cf.read()

    # Combine geometry
    all_positions = []
    all_normals = []
    all_indices = []
    vertex_offset = 0

    min_pos = [float('inf'), float('inf'), float('inf')]
    max_pos = [float('-inf'), float('-inf'), float('-inf')]

    for p in parts_to_extract:
        raw_chunk = chunks_cache[p["chunk"]]
        vc = p["vertexCount"]
        ic = p["indexCount"]

        # Read positions (Float32, vc * 3)
        pos_bytes = raw_chunk[p["positions"] : p["positions"] + vc * 12]
        pos_floats = struct.unpack(f"<{vc * 3}f", pos_bytes)

        # Read normals (Int16 normalized, vc * 3)
        norm_bytes = raw_chunk[p["normals"] : p["normals"] + vc * 6]
        norm_shorts = struct.unpack(f"<{vc * 3}h", norm_bytes)
        # Convert shorts to float (-32767 to 32767 -> -1.0 to 1.0)
        norm_floats = [s / 32767.0 for s in norm_shorts]

        # Read indices (Uint32, ic)
        idx_bytes = raw_chunk[p["indices"] : p["indices"] + ic * 4]
        idx_ints = struct.unpack(f"<{ic}I", idx_bytes)

        for i in range(0, len(pos_floats), 3):
            x, y, z = pos_floats[i], pos_floats[i+1], pos_floats[i+2]
            min_pos[0] = min(min_pos[0], x)
            min_pos[1] = min(min_pos[1], y)
            min_pos[2] = min(min_pos[2], z)
            max_pos[0] = max(max_pos[0], x)
            max_pos[1] = max(max_pos[1], y)
            max_pos[2] = max(max_pos[2], z)

        all_positions.extend(pos_floats)
        all_normals.extend(norm_floats)
        all_indices.extend([idx + vertex_offset for idx in idx_ints])
        vertex_offset += vc

    total_vertices = len(all_positions) // 3
    total_indices = len(all_indices)
    total_triangles = total_indices // 3

    print(f"Total vertices: {total_vertices:,}, triangles: {total_triangles:,}")

    # Center model at origin
    center_x = (min_pos[0] + max_pos[0]) / 2.0
    center_y = (min_pos[1] + max_pos[1]) / 2.0
    center_z = (min_pos[2] + max_pos[2]) / 2.0

    centered_positions = []
    min_adj = [min_pos[0] - center_x, min_pos[1] - center_y, min_pos[2] - center_z]
    max_adj = [max_pos[0] - center_x, max_pos[1] - center_y, max_pos[2] - center_z]

    for i in range(0, len(all_positions), 3):
        centered_positions.extend([
            all_positions[i] - center_x,
            all_positions[i+1] - center_y,
            all_positions[i+2] - center_z
        ])

    # Build binary buffer
    bin_pos = struct.pack(f"<{len(centered_positions)}f", *centered_positions)
    bin_norm = struct.pack(f"<{len(all_normals)}f", *all_normals)
    bin_idx = struct.pack(f"<{len(all_indices)}I", *all_indices)

    # Align each buffer to 4 bytes
    def pad4(b):
        pad = (4 - (len(b) % 4)) % 4
        return b + b'\x00' * pad

    offset_pos = 0
    len_pos = len(bin_pos)
    bin_pos_padded = pad4(bin_pos)

    offset_norm = len(bin_pos_padded)
    len_norm = len(bin_norm)
    bin_norm_padded = pad4(bin_norm)

    offset_idx = offset_norm + len(bin_norm_padded)
    len_idx = len(bin_idx)
    bin_idx_padded = pad4(bin_idx)

    binary_data = bin_pos_padded + bin_norm_padded + bin_idx_padded

    # glTF JSON structure
    gltf = {
        "asset": {
            "version": "2.0",
            "generator": "AnatoSmart BodyParts3D GLB Extractor"
        },
        "scene": 0,
        "scenes": [
            { "nodes": [0] }
        ],
        "nodes": [
            {
                "mesh": 0,
                "name": found_name
            }
        ],
        "meshes": [
            {
                "name": found_name,
                "primitives": [
                    {
                        "attributes": {
                            "POSITION": 0,
                            "NORMAL": 1
                        },
                        "indices": 2,
                        "material": 0
                    }
                ]
            }
        ],
        "materials": [
            {
                "name": "AnatomyMaterial",
                "pbrMetallicRoughness": {
                    "baseColorFactor": [0.85, 0.35, 0.35, 1.0],
                    "metallicFactor": 0.1,
                    "roughnessFactor": 0.5
                },
                "doubleSided": True
            }
        ],
        "accessors": [
            {
                "bufferView": 0,
                "byteOffset": 0,
                "componentType": 5126, # FLOAT
                "count": total_vertices,
                "type": "VEC3",
                "min": min_adj,
                "max": max_adj
            },
            {
                "bufferView": 1,
                "byteOffset": 0,
                "componentType": 5126, # FLOAT
                "count": total_vertices,
                "type": "VEC3"
            },
            {
                "bufferView": 2,
                "byteOffset": 0,
                "componentType": 5125, # UNSIGNED_INT
                "count": total_indices,
                "type": "SCALAR",
                "min": [0],
                "max": [total_vertices - 1]
            }
        ],
        "bufferViews": [
            {
                "buffer": 0,
                "byteOffset": offset_pos,
                "byteLength": len_pos,
                "target": 34962 # ARRAY_BUFFER
            },
            {
                "buffer": 0,
                "byteOffset": offset_norm,
                "byteLength": len_norm,
                "target": 34962 # ARRAY_BUFFER
            },
            {
                "buffer": 0,
                "byteOffset": offset_idx,
                "byteLength": len_idx,
                "target": 34963 # ELEMENT_ARRAY_BUFFER
            }
        ],
        "buffers": [
            {
                "byteLength": len(binary_data)
            }
        ]
    }

    # Format GLB container
    json_bytes = json.dumps(gltf, separators=(',', ':')).encode('utf-8')
    json_padding = (4 - (len(json_bytes) % 4)) % 4
    json_bytes += b' ' * json_padding # pad with spaces

    bin_padding = (4 - (len(binary_data) % 4)) % 4
    binary_data += b'\x00' * bin_padding

    total_glb_len = 12 + 8 + len(json_bytes) + 8 + len(binary_data)

    glb_header = struct.pack("<4sII", b"glTF", 2, total_glb_len)
    json_chunk_header = struct.pack("<II", len(json_bytes), 0x4E4F534A) # "JSON"
    bin_chunk_header = struct.pack("<II", len(binary_data), 0x004E4942) # "BIN\0"

    out_file = Path(args.output)
    out_file.parent.mkdir(parents=True, exist_ok=True)

    with open(out_file, "wb") as f:
        f.write(glb_header)
        f.write(json_chunk_header)
        f.write(json_bytes)
        f.write(bin_chunk_header)
        f.write(binary_data)

    file_size_kb = os.path.getsize(out_file) / 1024
    print(f"Successfully generated GLB: {out_file} ({file_size_kb:.1f} KB)")

if __name__ == "__main__":
    main()
