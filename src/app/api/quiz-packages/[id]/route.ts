import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pkg = await db.quizPackage.findUnique({
      where: { id },
      include: {
        category: true,
        questions: {
          include: { options: true },
          orderBy: { createdAt: 'asc' },
        },
        _count: {
          select: { questions: true },
        },
      },
    });

    if (!pkg) {
      return NextResponse.json({ error: 'Paket kuis tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error('Error fetching quiz package:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if package exists
    const pkg = await db.quizPackage.findUnique({
      where: { id },
    });

    if (!pkg) {
      return NextResponse.json({ error: 'Paket kuis tidak ditemukan' }, { status: 404 });
    }

    // Cascade delete in transaction to guarantee data integrity
    await db.$transaction(async (tx) => {
      const questions = await tx.quizQuestion.findMany({
        where: { packageId: id },
        select: { id: true },
      });
      const questionIds = questions.map((q) => q.id);

      if (questionIds.length > 0) {
        await tx.quizOption.deleteMany({
          where: { questionId: { in: questionIds } },
        });
        await tx.quizQuestion.deleteMany({
          where: { id: { in: questionIds } },
        });
      }

      await tx.quizPackage.delete({
        where: { id },
      });
    });

    return NextResponse.json({ success: true, message: 'Paket kuis berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting quiz package:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
