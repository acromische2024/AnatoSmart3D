import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string; markerId: string } }
) {
  try {
    const { markerId } = await params;
    const body = await request.json();
    const { label, description, color, order } = body;

    const marker = await db.marker.update({
      where: { id: markerId },
      data: {
        label,
        description,
        color,
        order,
      },
    });

    return NextResponse.json(marker);
  } catch (error) {
    console.error("Error updating marker:", error);
    return NextResponse.json(
      { error: "Failed to update marker" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string; markerId: string } }
) {
  try {
    const { markerId } = await params;

    await db.marker.delete({
      where: { id: markerId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting marker:", error);
    return NextResponse.json(
      { error: "Failed to delete marker" },
      { status: 500 }
    );
  }
}
