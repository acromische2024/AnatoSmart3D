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
    const results: any[] = [];
    for (const item of questions) {
      // Find image from multiple possible keys
      let imageCandidate =
        item.imageUrl ||
        item.image ||
        item.gambar ||
        item.urlGambar ||
        item.linkGambar ||
        item.link_gambar ||
        item.foto ||
        null;

      // Extract question text and choices
      const rawQuestionText = item.pertanyaan || item.question || item.soal;
      const choices = item.pilihan || item.options || item.choices;

      // Also extract image from question text if imageCandidate is not yet found
      if (!imageCandidate && rawQuestionText && typeof rawQuestionText === 'string') {
        const imgMatch = rawQuestionText.match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*\/?>/i);
        if (imgMatch && imgMatch[1] && (imgMatch[1].startsWith('http') || imgMatch[1].startsWith('/'))) {
          imageCandidate = imgMatch[1].trim();
        }
      }

      // Multiple Choice
      if (rawQuestionText && Array.isArray(choices) && choices.length > 0) {
        const questionData = await db.quizQuestion.create({
          data: {
            packageId: quizPackage.id,
            type: "MULTIPLE_CHOICE",
            question: rawQuestionText,
            imageUrl: imageCandidate,
            explanation: item.pembahasan || item.explanation || item.rasionalisasi || null,
          }
        });

        const targetAnswer = (
          item.jawaban ||
          item.jawaban_benar ||
          item.jawabanBenar ||
          item.correctAnswer ||
          item.answer ||
          ''
        ).toString().trim();

        const targetKey = (
          item.kunci ||
          item.kunci_jawaban ||
          item.kunciJawaban ||
          ''
        ).toString().trim().toUpperCase();

        for (let idx = 0; idx < choices.length; idx++) {
          const rawPil = choices[idx];
          const pilText = (typeof rawPil === 'object' && rawPil !== null ? rawPil.text : rawPil).toString();
          const optionLetter = String.fromCharCode(65 + idx); // "A", "B", "C", ...

          // Check if option is correct
          let isCorrect = false;
          if (typeof rawPil === 'object' && rawPil !== null && typeof rawPil.isCorrect === 'boolean') {
            isCorrect = rawPil.isCorrect;
          } else {
            // Clean text comparison (strip leading "A. " or "A) ")
            const cleanPil = pilText.replace(/^[A-E][.)]\s*/i, '').trim().toLowerCase();
            const cleanTarget = targetAnswer.replace(/^[A-E][.)]\s*/i, '').trim().toLowerCase();

            const isTextMatch = Boolean(targetAnswer && (pilText.trim().toLowerCase() === targetAnswer.toLowerCase() || cleanPil === cleanTarget));
            const isKeyMatch = Boolean(
              (targetKey && (targetKey === optionLetter || targetKey.startsWith(optionLetter + '.') || targetKey.startsWith(optionLetter + ')'))) ||
              (targetAnswer.toUpperCase() === optionLetter || targetAnswer.toUpperCase().startsWith(optionLetter + '.') || targetAnswer.toUpperCase().startsWith(optionLetter + ')'))
            );

            isCorrect = isTextMatch || isKeyMatch;
          }

          // Extract option elimination explanation if available
          let optExplanation: string | null = null;
          if (typeof rawPil === 'object' && rawPil !== null && rawPil.explanation) {
            optExplanation = rawPil.explanation;
          } else if (item.eliminasi_opsi && typeof item.eliminasi_opsi === 'object') {
            optExplanation = item.eliminasi_opsi[optionLetter] || item.eliminasi_opsi[optionLetter.toLowerCase()] || item.eliminasi_opsi[pilText] || null;
          } else if (item.eliminasiOpsi && typeof item.eliminasiOpsi === 'object') {
            optExplanation = item.eliminasiOpsi[optionLetter] || item.eliminasiOpsi[optionLetter.toLowerCase()] || item.eliminasiOpsi[pilText] || null;
          } else if (Array.isArray(item.eliminasi)) {
            const matching = item.eliminasi.find((e: any) =>
              e.opsi === pilText ||
              e.opsi === optionLetter ||
              e.opsi?.toString().trim().toUpperCase() === optionLetter
            );
            optExplanation = matching?.alasan || matching?.penjelasan || null;
          }

          await db.quizOption.create({
            data: {
              questionId: questionData.id,
              text: pilText,
              isCorrect: isCorrect,
              explanation: optExplanation,
            }
          });
        }
        results.push(questionData);
      }
      // Flashcard
      else if ((item.clue || item.hints || item.petunjuk) && (item.answer || item.jawaban || item.jawaban_benar)) {
        const answer = (item.answer || item.jawaban || item.jawaban_benar).toString();
        let cluesArray: string[] = [];

        if (Array.isArray(item.hints)) {
          cluesArray = item.hints;
        } else if (Array.isArray(item.clue)) {
          cluesArray = item.clue;
        } else if (typeof item.clue === 'string') {
          cluesArray = [item.clue];
        } else if (typeof item.petunjuk === 'string') {
          cluesArray = [item.petunjuk];
        }

        const flashcardData = await db.quizQuestion.create({
          data: {
            packageId: quizPackage.id,
            type: "FLASHCARD",
            question: JSON.stringify(cluesArray.length > 0 ? cluesArray : [item.clue || '']),
            imageUrl: imageCandidate,
            correctAnswer: answer,
            explanation: item.explanation || item.pembahasan || null,
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

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get('id');

    if (!id) {
      try {
        const body = await request.json();
        id = body?.id;
      } catch {
        // body not provided or invalid json
      }
    }

    if (!id) {
      return NextResponse.json({ error: 'Package id is required' }, { status: 400 });
    }

    const pkg = await db.quizPackage.findUnique({
      where: { id },
    });

    if (!pkg) {
      return NextResponse.json({ error: 'Paket kuis tidak ditemukan' }, { status: 404 });
    }

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
