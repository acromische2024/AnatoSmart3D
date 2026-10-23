# Petunjuk Ekstraksi Organ 3D ke Format Standar GLB

Skrip `extract_organ_to_glb.py` digunakan untuk mengekstrak struktur anatomi apa pun dari repositori **BodyParts3D 4.0** (`public/models/atlas/atlas.json`) menjadi format file biner glTF 2.0 (`.glb`) standar industri yang siap dipakai di web, blender, atau diunggah ke storage preparat AnatoSmart.

---

## 🚀 Cara Penggunaan

### 1. Ekstraksi Berdasarkan Nama Organ (Konsep FMA)
```bash
python3 scripts/extract_organ_to_glb.py --name "heart" --output public/models/heart.glb
python3 scripts/extract_organ_to_glb.py --name "brain" --output public/models/brain.glb
python3 scripts/extract_organ_to_glb.py --name "femur" --output public/models/femur.glb
python3 scripts/extract_organ_to_glb.py --name "skull" --output public/models/skull.glb
python3 scripts/extract_organ_to_glb.py --name "liver" --output public/models/liver.glb
```

### 2. Ekstraksi Berdasarkan Sistem Organ Utuh
```bash
python3 scripts/extract_organ_to_glb.py --system "skeletal" --output public/models/full_skeleton.glb
python3 scripts/extract_organ_to_glb.py --system "cardiac" --output public/models/full_cardiac.glb
python3 scripts/extract_organ_to_glb.py --system "urinary" --output public/models/full_urinary.glb
```

### 3. Ekstraksi Berdasarkan ID Konsep FMA atau ID Mesh
```bash
# Contoh ID FMA untuk Jantung: FMA7088
python3 scripts/extract_organ_to_glb.py --id "FMA7088" --output public/models/fma7088.glb

# Contoh ID Mesh Bagian: FJ1252
python3 scripts/extract_organ_to_glb.py --id "FJ1252" --output public/models/fj1252.glb
```

---

## 📌 Fitur Unggulan Script
1. **Otomatis Melakukan Centering**: Geometri langsung digeser ke titik tengah origin `(0, 0, 0)` sehingga kamera 3D Three.js langsung fokus pada objek tanpa melenceng.
2. **Konversi Normal Presisi Tinggi**: Normals 16-bit terkuantisasi diubah kembali menjadi float 32-bit yang mulus.
3. **Penyatuan Multi-Part**: Jika sebuah organ tersusun dari puluhan bagian kecil (misal: dinding ventrikel, atrium, katup), skrip otomatis menggabungkan seluruh geometri menjadi satu mesh tunggal yang solid dan hemat memori.
