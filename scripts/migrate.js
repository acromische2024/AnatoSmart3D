const { PrismaClient } = require('@prisma/client');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

async function main() {
  console.log('Connecting to PostgreSQL via Prisma...');
  const prisma = new PrismaClient();
  
  console.log('Connecting to local SQLite database...');
  const dbPath = path.join(__dirname, '..', 'prisma', 'dev.db');
  
  const db = await new Promise((resolve, reject) => {
    const database = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
      if (err) reject(err);
      else resolve(database);
    });
  });

  // Helper function to read all rows from a SQLite table
  const getTable = (tableName) => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  };

  try {
    // 1. SystemCategory
    const categories = await getTable('SystemCategory');
    console.log(`Found ${categories.length} SystemCategories.`);
    for (const cat of categories) {
      // Create or update to handle rerun
      await prisma.systemCategory.upsert({
        where: { id: cat.id },
        update: {},
        create: {
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          imageUrl: cat.imageUrl,
          youtubeUrl: cat.youtubeUrl,
          extraVideoUrl: cat.extraVideoUrl,
          order: cat.order,
          createdAt: new Date(cat.createdAt),
          updatedAt: new Date(cat.updatedAt),
        }
      });
    }

    // 2. QuizPackage
    const packages = await getTable('QuizPackage');
    console.log(`Found ${packages.length} QuizPackages.`);
    for (const pkg of packages) {
      await prisma.quizPackage.upsert({
        where: { id: pkg.id },
        update: {},
        create: {
          id: pkg.id,
          name: pkg.name,
          categorySlug: pkg.categorySlug,
          createdAt: new Date(pkg.createdAt),
          updatedAt: new Date(pkg.updatedAt),
        }
      });
    }

    // 3. QuizQuestion
    const questions = await getTable('QuizQuestion');
    console.log(`Found ${questions.length} QuizQuestions.`);
    for (const q of questions) {
      await prisma.quizQuestion.upsert({
        where: { id: q.id },
        update: {},
        create: {
          id: q.id,
          packageId: q.packageId,
          type: q.type,
          question: q.question,
          imageUrl: q.imageUrl,
          explanation: q.explanation,
          correctAnswer: q.correctAnswer,
          createdAt: new Date(q.createdAt),
          updatedAt: new Date(q.updatedAt),
        }
      });
    }

    // 4. QuizOption
    const options = await getTable('QuizOption');
    console.log(`Found ${options.length} QuizOptions.`);
    for (const opt of options) {
      await prisma.quizOption.upsert({
        where: { id: opt.id },
        update: {},
        create: {
          id: opt.id,
          questionId: opt.questionId,
          text: opt.text,
          isCorrect: opt.isCorrect === 1, // SQLite stores boolean as 1/0
          explanation: opt.explanation,
        }
      });
    }

    // 5. Preparation
    const preparations = await getTable('Preparation');
    console.log(`Found ${preparations.length} Preparations.`);
    for (const prep of preparations) {
      await prisma.preparation.upsert({
        where: { id: prep.id },
        update: {},
        create: {
          id: prep.id,
          title: prep.title,
          description: prep.description,
          category: prep.category,
          imageUrl: prep.imageUrl,
          modelUrl: prep.modelUrl,
          thumbnailUrl: prep.thumbnailUrl,
          youtubeUrl: prep.youtubeUrl,
          documentUrl: prep.documentUrl,
          createdAt: new Date(prep.createdAt),
          updatedAt: new Date(prep.updatedAt),
        }
      });
    }

    // 6. Marker
    const markers = await getTable('Marker');
    console.log(`Found ${markers.length} Markers.`);
    for (const marker of markers) {
      await prisma.marker.upsert({
        where: { id: marker.id },
        update: {},
        create: {
          id: marker.id,
          preparationId: marker.preparationId,
          label: marker.label,
          description: marker.description,
          positionX: marker.positionX,
          positionY: marker.positionY,
          positionZ: marker.positionZ,
          color: marker.color,
          order: marker.order,
          createdAt: new Date(marker.createdAt),
          updatedAt: new Date(marker.updatedAt),
        }
      });
    }

    console.log('🎉 Migration successful!');
  } catch (e) {
    console.error('Migration failed:', e);
  } finally {
    db.close();
    await prisma.$disconnect();
  }
}

main().catch(console.error);
