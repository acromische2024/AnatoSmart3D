import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const markers = await db.marker.findMany({
      where: { preparationId: id },
      orderBy: { order: "asc" },
    });
    return NextResponse.json(markers);
  } catch (error) {
    console.error("Error fetching markers:", error);
    return NextResponse.json(
      { error: "Failed to fetch markers" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { label, description, positionX, positionY, positionZ, color, order } = body;

    if (!label || positionX === undefined || positionY === undefined || positionZ === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const marker = await db.marker.create({
      data: {
        preparationId: id,
        label,
        description,
        positionX,
        positionY,
        positionZ,
        color: color || "#38bdf8",
        order: order || 0,
      },
    });

    return NextResponse.json(marker, { status: 201 });
  } catch (error) {
    console.error("Error creating marker:", error);
    return NextResponse.json(
      { error: "Failed to create marker" },
      { status: 500 }
    );
  }
}
