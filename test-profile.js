const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const payload = {
      name: 'Zydane',
      role: 'Asisten Laboratorium',
      email: '',
      groupOrYear: '2024',
      order: 0,
      origin: 'Yogyakarta',
      birthDate: '18 Januari 2006',
      favoriteBlock: 'Kardorespirasi',
      hobby: 'Ngetawain MU',
      quotes: 'menyemenyemenye',
      eduSD: '',
      eduSMP: '',
      eduSMA: '',
      eduS1: '',
      eduS2: '',
      eduS3: '',
      linkScopus: '',
      linkSinta: '',
      linkScholar: '',
      linkResearch: '',
      description: '',
      organizations: '',
      intellectualProp: '',
      address: '',
      type: 'ASLAB',
      slug: 'zydane',
      image: 'https://ltyaaqkrxhvqknrrxzgm.supabase.co/storage/v1/object/public/anatomy-assets/profiles/test.png'
    };

    const profile = await prisma.profile.create({
      data: payload
    });
    console.log("Success:", profile);
  } catch (e) {
    console.error("Error:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}
main();
