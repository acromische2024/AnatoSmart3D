import { NextResponse } from 'next/server';
import { db as prisma } from '@/lib/db';

export async function GET() {
  try {
    const profiles = await prisma.profile.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(profiles);
  } catch (error) {
    console.error('Failed to fetch profiles:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to fetch profiles' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const profile = await prisma.profile.create({
      data
    });
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Failed to create profile:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to create profile' }, { status: 500 });
  }
}
