import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get('category');
    
    let whereClause = {};
    if (categorySlug) {
      whereClause = { categorySlug };
    }
    
    const packages = await db.quizPackage.findMany({
      where: whereClause,
      include: {
        _count: {
          select: { questions: true }
        },
        category: {
          select: { name: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(packages);
  } catch (error) {
    console.error('Error fetching quiz packages:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Creating a new package with questions
    const { name, categorySlug, questions } = body;
    
    if (!name || !categorySlug || !questions || !Array.isArray(questions)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    
    const quizPackage = await db.quizPackage.create({
      data: {
        name,
        categorySlug
      }
    });
    
    // Process questions mapping format
    const results = [];
    for (const item of questions) {
      // Multiple Choice
      if (item.pertanyaan && item.pilihan) {
        const questionData = await db.quizQuestion.create({
          data: {
            packageId: quizPackage.id,
            type: "MULTIPLE_CHOICE",
            question: item.pertanyaan,
            imageUrl: item.imageUrl || null,
            explanation: item.pembahasan || null,
          }
        });
        
        for (const pil of item.pilihan) {
          const isCorrect = pil === item.jawaban;
          const matchingElimination = item.eliminasi?.find((e: any) => e.opsi === pil);
          
          await db.quizOption.create({
            data: {
              questionId: questionData.id,
              text: pil,
              isCorrect: isCorrect,
              explanation: matchingElimination ? matchingElimination.alasan : null
            }
          });
        }
        results.push(questionData);
      }
      // Flashcard
      else if (item.clue && item.answer) {
        const flashcardData = await db.quizQuestion.create({
          data: {
            packageId: quizPackage.id,
            type: "FLASHCARD",
            question: JSON.stringify(item.clue), // Store hints as JSON array
            correctAnswer: item.answer,
            explanation: item.explanation || null,
          }
        });
        results.push(flashcardData);
      }
    }
    
    return NextResponse.json({ success: true, package: quizPackage, count: results.length });
  } catch (error) {
    console.error('Error creating quiz package:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
