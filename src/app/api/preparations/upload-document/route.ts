import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".pdf";
    const filename = `${randomUUID()}${ext}`;
    const filepath = path.join(process.cwd(), "public", "uploads", "documents", filename);

    await writeFile(filepath, buffer);

    return NextResponse.json({
      url: `/uploads/documents/${filename}`,
      filename,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to upload document" },
      { status: 500 }
    );
  }
}
