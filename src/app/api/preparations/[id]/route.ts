import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const preparation = await db.preparation.findUnique({
      where: { id },
      include: { markers: { orderBy: { order: 'asc' } } },
    });
    if (!preparation) {
      return NextResponse.json(
        { error: "Preparation not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(preparation);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch preparation" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await db.preparation.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete preparation" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const preparation = await db.preparation.update({
      where: { id },
      data: {
        ...(body.title !== undefined && { title: body.title }),
        ...(body.description !== undefined && { description: body.description }),
        ...(body.category !== undefined && { category: body.category }),
        ...(body.imageUrl !== undefined && { imageUrl: body.imageUrl }),
        ...(body.modelUrl !== undefined && { modelUrl: body.modelUrl }),
        ...(body.thumbnailUrl !== undefined && { thumbnailUrl: body.thumbnailUrl }),
        ...(body.youtubeUrl !== undefined && { youtubeUrl: body.youtubeUrl }),
        ...(body.documentUrl !== undefined && { documentUrl: body.documentUrl }),
      },
    });
    return NextResponse.json(preparation);
  } catch {
    return NextResponse.json(
      { error: "Failed to update preparation" },
      { status: 500 }
    );
  }
}
