import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const preparations = await db.preparation.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(preparations);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch preparations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, category, imageUrl, modelUrl, thumbnailUrl, youtubeUrl, documentUrl } = body;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const preparation = await db.preparation.create({
      data: {
        title,
        description: description || null,
        category: category || null,
        imageUrl: imageUrl || null,
        modelUrl: modelUrl || null,
        thumbnailUrl: thumbnailUrl || null,
        youtubeUrl: youtubeUrl || null,
        documentUrl: documentUrl || null,
      },
    });

    return NextResponse.json(preparation, { status: 201 });
  } catch (error) {
    console.error("Error creating preparation:", error);
    return NextResponse.json(
      { error: "Failed to create preparation" },
      { status: 500 }
    );
  }
}
