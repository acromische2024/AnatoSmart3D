import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const question = await db.quizQuestion.findUnique({
      where: { id },
    });

    if (!question) {
      return NextResponse.json({ error: 'Soal tidak ditemukan' }, { status: 404 });
    }

    await db.$transaction(async (tx) => {
      await tx.quizOption.deleteMany({
        where: { questionId: id },
      });
      await tx.quizQuestion.delete({
        where: { id },
      });
    });

    return NextResponse.json({ success: true, message: 'Soal berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting quiz question:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
