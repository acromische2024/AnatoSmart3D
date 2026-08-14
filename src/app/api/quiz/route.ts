import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const packageId = searchParams.get('packageId');
    const categorySlug = searchParams.get('categorySlug');

    if (!packageId && !categorySlug) {
      return NextResponse.json({ error: 'packageId or categorySlug is required' }, { status: 400 });
    }

    let questions;

    if (packageId) {
      questions = await db.quizQuestion.findMany({
        where: { packageId },
        include: {
          options: true,
        },
        orderBy: { createdAt: 'desc' }
      });
    } else if (categorySlug) {
      const packages = await db.quizPackage.findMany({
        where: { categorySlug },
        select: { id: true }
      });
      const packageIds = packages.map(p => p.id);

      questions = await db.quizQuestion.findMany({
        where: { packageId: { in: packageIds } },
        include: { options: true },
        orderBy: { createdAt: 'desc' }
      });
    }

    return NextResponse.json(questions);
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
