/**
 * Comprehensive Medical Anatomy Knowledge Base for AnatoSmart 3D
 * Contains clinical data: Origo, Insersio, Kinesiologi, Inervasi, Vaskularisasi, dan Korelasi Klinis.
 * Modularized across 7 specialized anatomical systems:
 * - Muscular
 * - Cardiovascular
 * - Respiratory
 * - Digestive
 * - Urinary & Pelvic
 * - Nervous
 * - Skeletal
 */

import { MUSCULAR_KNOWLEDGE } from './knowledge/muscular';
import { CARDIOVASCULAR_KNOWLEDGE } from './knowledge/cardiovascular';
import { RESPIRATORY_KNOWLEDGE } from './knowledge/respiratory';
import { DIGESTIVE_KNOWLEDGE } from './knowledge/digestive';
import { URINARY_KNOWLEDGE } from './knowledge/urinary';
import { NERVOUS_KNOWLEDGE } from './knowledge/nervous';
import { SKELETAL_KNOWLEDGE } from './knowledge/skeletal';

export interface MuscleDetails {
  type: 'muscle';
  nameLatin: string;
  nameId: string;
  origo: string;
  insersio: string;
  kinesiologi: string; // Gerakan / Aksi motorik
  inervasi: string;   // Saraf & segmen spinalis
  vaskularisasi: string; // Arteri penyuplai
  korelasiKlinis?: string;
}

export interface OrganDetails {
  type: 'organ';
  nameLatin: string;
  nameId: string;
  deskripsi: string;
  arteri: string;      // Vaskularisasi Arteri
  vena: string;        // Vaskularisasi Vena / Drainase
  inervasi: string;    // Inervasi Otonom (Simpatis & Parasimpatis) / Somatik
  limfatik?: string;   // Aliran getah bening
  korelasiKlinis?: string; // Catatan klinis / penyakit relevan
}

export interface BoneDetails {
  type: 'bone';
  nameLatin: string;
  nameId: string;
  deskripsi: string;
  artikulasi: string;  // Sendi & hubungan tulang
  landmark: string;    // Struktur anatomis penting
  korelasiKlinis?: string;
}

export type AnatomyMedicalInfo = MuscleDetails | OrganDetails | BoneDetails;

export const MEDICAL_KNOWLEDGE_BASE: Record<string, AnatomyMedicalInfo> = {
  ...MUSCULAR_KNOWLEDGE,
  ...CARDIOVASCULAR_KNOWLEDGE,
  ...RESPIRATORY_KNOWLEDGE,
  ...DIGESTIVE_KNOWLEDGE,
  ...URINARY_KNOWLEDGE,
  ...NERVOUS_KNOWLEDGE,
  ...SKELETAL_KNOWLEDGE
};

/**
 * Smart lookup function: Matches concept or part name against clinical knowledge base.
 * Guarantees rich structured medical data (Origo/Insersio/Kinesiologi or Inervasi/Vaskularisasi)
 * for all structures in the 3D atlas.
 */
export function getAnatomyMedicalDetails(name: string, system: string): AnatomyMedicalInfo {
  const query = name.toLowerCase().trim();

  // 1. Direct key match in dictionary
  if (MEDICAL_KNOWLEDGE_BASE[query]) {
    return MEDICAL_KNOWLEDGE_BASE[query];
  }

  // 2. Substring matching in dictionary keys
  for (const [key, data] of Object.entries(MEDICAL_KNOWLEDGE_BASE)) {
    if (query === key || query.includes(key) || key.includes(query)) {
      return data;
    }
  }

  // 3. Normalized root word matching
  const words = query.split(/[\s,._-]+/).filter(w => w.length > 3);
  for (const word of words) {
    if (MEDICAL_KNOWLEDGE_BASE[word]) {
      return MEDICAL_KNOWLEDGE_BASE[word];
    }
  }

  // 4. Fallback: Generate clinical structure based on anatomical classification
  if (
    system === 'muscular' ||
    query.includes('muscle') ||
    query.includes('musculus') ||
    query.includes('oblique') ||
    query.includes('intercostal') ||
    query.includes('flexor') ||
    query.includes('extensor') ||
    query.includes('pronator') ||
    query.includes('supinator') ||
    query.includes('abductor') ||
    query.includes('adductor')
  ) {
    return {
      type: 'muscle',
      nameLatin: name,
      nameId: `Struktur Muskular (${name})`,
      origo: `Perlekatan proksimal (origo) pada skeleton/aponeurosis dinding regional terkait.`,
      insersio: `Perlekatan distal (insersio) pada tendo atau tulang tuas penggerak persendian.`,
      kinesiologi: `Menghasilkan gaya kontraksi, stabilisasi persendian regional, dan koordinasi gerak kinetik.`,
      inervasi: `Dipersarafi oleh cabang-cabang saraf spinal atau kranial regional sesuai segmen miotom.`,
      vaskularisasi: `Mendapatkan perfusi oksigen dan metabolit dari rami musculares arteria regional terdekat.`,
      korelasiKlinis: `Pemeriksaan kekuatan motorik (skala MMT 0-5), refleks regang tendo, dan evaluasi cedera strain/spasme muskular.`
    };
  }

  if (
    system === 'skeletal' ||
    query.includes('bone') ||
    query.includes('os ') ||
    query.includes('costa') ||
    query.includes('vertebra') ||
    query.includes('clavicula') ||
    query.includes('scapula') ||
    query.includes('humerus') ||
    query.includes('radius') ||
    query.includes('ulna') ||
    query.includes('tibia') ||
    query.includes('fibula')
  ) {
    return {
      type: 'bone',
      nameLatin: name,
      nameId: `Struktur Kerangka Tulang (${name})`,
      deskripsi: `Elemen kerangka osteologis yang berperan menyokong mekanik tubuh, melindungi organ visera internal, dan menjadi tuas pengungkit gerakan muskuloskeletal.`,
      artikulasi: `Berartikulasi melalui persendian sinovial, simfisis kartilaginosa, atau sutura fibrosa dengan elemen skeletal di sekitarnya.`,
      landmark: `Memiliki processus, foramen, sulcus, atau facies artikular untuk insersio ligamentum, tendo, dan lintasan neurovaskular.`,
      korelasiKlinis: `Pemeriksaan radiologis foto rontgen atau CT scan untuk evaluasi fraktur, densitas massa tulang, dan dislokasi artikular.`
    };
  }

  // Visceral Organ / Regional System fallback
  return {
    type: 'organ',
    nameLatin: name,
    nameId: `Struktur Viseral / Jaringan (${name})`,
    deskripsi: `Struktur anatomis fungsional pada ${system ? `sistem ${system}` : 'tubuh manusia'} yang mendukung regulasi homeostasis fisiologis.`,
    arteri: `Disuplai oleh percabangan cabang vaskular arterial regional (arteria nutricia / percabangan sirkulasi sistemik).`,
    vena: `Drainase vena dialirkan melalui vena commitantes menuju sistem vena kava superior/inferior atau sistem porta hepatis.`,
    inervasi: `Inervasi otonom melalui pleksus viseralis (komponen simpatis torakolumbal & parasimpatis kraniosakral/nervus vagus) untuk regulasi tonus vaskular dan sekresi.`,
    limfatik: `Saluran getah bening mengalir menuju limfonodi regional terdekat untuk surveilans sistem imunologis.`,
    korelasiKlinis: `Evaluasi fungsi organ melalui pemeriksaan klinis, laboratorium biokimiawi, dan pencitraan medis diagnostik (USG, CT Scan, atau MRI).`
  };
}
