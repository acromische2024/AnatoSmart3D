export type SystemId = 
  | 'skeletal'
  | 'muscular'
  | 'arterial'
  | 'venous'
  | 'nervous'
  | 'digestive'
  | 'respiratory'
  | 'urinary'
  | 'reproductive'
  | 'lymphatic'
  | 'endocrine'
  | 'integumentary'
  | 'connective'
  | 'sensory'
  | 'cardiac';

export interface SystemInfo {
  id: SystemId;
  name: string;
  nameId: string; // Indonesian medical term
  color: string;
  description: string;
  slugMatch?: string; // Matching AnatoSmart category slug
}

export const SYSTEMS: SystemInfo[] = [
  {
    id: 'cardiac',
    name: 'Heart',
    nameId: 'Jantung (Cor)',
    color: '#e11d48',
    description: 'Jantung adalah pompa muskular dengan empat ruang (atrium dan ventrikel) yang mengalirkan darah ke sirkulasi pulmonal dan sistemik.',
    slugMatch: 'sistem-kardiovaskular'
  },
  {
    id: 'arterial',
    name: 'Arteries',
    nameId: 'Pembuluh Arteri',
    color: '#f43f5e',
    description: 'Arteri membawa darah kaya oksigen dari jantung menuju ke seluruh jaringan tubuh, serta arteri pulmonalis yang menuju paru-paru.',
    slugMatch: 'sistem-kardiovaskular'
  },
  {
    id: 'venous',
    name: 'Veins',
    nameId: 'Pembuluh Vena',
    color: '#38bdf8',
    description: 'Vena mengembalikan darah dari jaringan perifer kembali menuju atrium kanan jantung dan vena pulmonalis ke atrium kiri.',
    slugMatch: 'sistem-kardiovaskular'
  },
  {
    id: 'skeletal',
    name: 'Skeleton',
    nameId: 'Sistem Rangka (Skeleton)',
    color: '#fef08a',
    description: 'Tulang dan persendian membentuk kerangka penyangga tubuh, melindungi organ vital, menjadi tempat perlekatan otot, dan tempat hematopoiesis.',
    slugMatch: 'sistem-muskuloskeletal'
  },
  {
    id: 'muscular',
    name: 'Muscles',
    nameId: 'Sistem Otot (Muskular)',
    color: '#fb7185',
    description: 'Otot rangka menghasilkan gerakan aktif dengan kontraksi, mempertahankan postur, menstabilkan sendi, dan memproduksi panas tubuh.',
    slugMatch: 'sistem-muskuloskeletal'
  },
  {
    id: 'nervous',
    name: 'Nervous system',
    nameId: 'Sistem Saraf (Nervosum)',
    color: '#facc15',
    description: 'Otak (ensefalon), medula spinalis, dan saraf perifer mengoordinasikan sinyal motorik, sensorik, otonom, dan fungsi kognitif luhur.',
    slugMatch: 'sistem-saraf'
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    nameId: 'Sistem Respirasi',
    color: '#a78bfa',
    description: 'Saluran napas, laring, trakea, bronkus, dan pulmo tempat pertukaran gas oksigen dan karbon dioksida antara udara luar dan darah.',
    slugMatch: 'sistem-respirasi'
  },
  {
    id: 'digestive',
    name: 'Digestive',
    nameId: 'Sistem Pencernaan (Digestif)',
    color: '#fb923c',
    description: 'Traktus gastrointestinal dari esofagus, gaster, intestinum tenue, kolon, hingga organ kelenjar pencernaan (hepar, pankreas).',
    slugMatch: 'sistem-digesetif'
  },
  {
    id: 'urinary',
    name: 'Urinary',
    nameId: 'Sistem Uropoetika',
    color: '#f97316',
    description: 'Ren (ginjal), ureter, vesika urinaria, dan uretra yang memfiltrasi darah, menjaga keseimbangan cairan-elektrolit, dan membuang sisa metabolit.',
    slugMatch: 'sistem-uropoetika'
  },
  {
    id: 'lymphatic',
    name: 'Lymphatic',
    nameId: 'Sistem Limfatik & Imun',
    color: '#4ade80',
    description: 'Pembuluh limfa, nodus limfatikus, dan lien (limpa) yang mengembalikan cairan interstitium ke sirkulasi serta pengawasan imunologis.'
  },
  {
    id: 'endocrine',
    name: 'Endocrine',
    nameId: 'Sistem Endokrin',
    color: '#e879f9',
    description: 'Kelenjar penghasil hormon (tiroid, paratiroid, adrenal, hipofisis) yang meregulasi metabolisme, pertumbuhan, dan homeostasis.'
  },
  {
    id: 'reproductive',
    name: 'Reproductive',
    nameId: 'Sistem Reproduksi',
    color: '#fda4af',
    description: 'Organ reproduksi yang memproduksi gamet, maturasi sel benih, dan sekresi hormon reproduksi.'
  },
  {
    id: 'sensory',
    name: 'Sensory organs',
    nameId: 'Organ Panca Indera',
    color: '#2dd4bf',
    description: 'Struktur indera khusus meliputi mata (penglihatan), telinga (pendengaran & vestibular/keseimbangan), serta reseptor sensorik.'
  },
  {
    id: 'connective',
    name: 'Connective tissue',
    nameId: 'Jaringan Ikat & Kartilago',
    color: '#94a3b8',
    description: 'Tulang rawan (kartilago), ligamen, kapsul sendi, dan jaringan ikat penunjang struktur anatomi tubuh.'
  },
  {
    id: 'integumentary',
    name: 'Body surface',
    nameId: 'Permukaan Tubuh / Integumen',
    color: '#cbd5e1',
    description: 'Lapisan kutis dan subkutis sebagai pembungkus dan pelindung luar tubuh manusia.'
  }
];

export interface Part {
  id: string;
  name: string;
  conceptId: string;
  system: SystemId;
  chunk: number;
  positions: number;
  normals: number;
  indices: number;
  vertexCount: number;
  indexCount: number;
  bounds: [number[], number[]];
}

export interface Concept {
  id: string;
  name: string;
  elements: string[];
}

export interface Atlas {
  version: string;
  sex?: 'male';
  source?: string;
  scope?: string;
  parts: Part[];
  concepts: Concept[];
  chunks: { url: string; bytes: number; gzip?: string; gzipBytes?: number }[];
  triangles: number;
}

export type View = 'three-quarter' | 'front' | 'back' | 'side';

export interface SceneState {
  inspectorOpen?: boolean;
  explode: number;
  visible: SystemId[];
  selected: string[];
  isolate: boolean;
  view: View;
  rotate: boolean;
  reset: number;
}

export const DEFAULT_VISIBLE: SystemId[] = [
  'cardiac',
  'sensory',
  'skeletal',
  'muscular',
  'arterial',
  'venous',
  'nervous',
  'respiratory',
  'digestive',
  'urinary',
  'lymphatic',
  'endocrine',
  'reproductive',
  'connective'
];

export const EXPLANATIONS: Record<string, string> = {
  'heart': 'Jantung adalah pompa muskular rongga dada dengan 4 ruang: atrium kanan-kiri dan ventrikel kanan-kiri. Menggerakkan sirkulasi darah ke paru dan seluruh tubuh.',
  'liver': 'Hepar (hati) adalah organ viseral terbesar di hipokondrium kanan. Berfungsi memproses nutrien, detoksifikasi zat racun, dan memproduksi empedu.',
  'brain': 'Ensefalon (otak) adalah pusat integrasi sistem saraf, mencakup serebrum, serebelum, dan batang otak.',
  'stomach': 'Gaster (lambung) adalah ruang penampung dan pencernaan mekanik-kimiawi makanan antara esofagus dan duodenum.',
  'spleen': 'Lien (limpa) adalah organ limfoid di kuadran kiri atas abdomen yang memfilter eritrosit tua dan berperan pada respon imun.',
  'pancreas': 'Pankreas adalah kelenjar eksokrin (enzim pencernaan) dan endokrin (insulin, glukagon) yang terletak retroperitoneal.',
  'urinary bladder': 'Vesika urinaria adalah kantung reservoir penampung urine sebelum diekskresikan melalui uretra.',
  'trachea': 'Trakea adalah saluran pernapasan utama dengan cincin kartilago yang menghubungkan laring ke percabangan bronkus.',
  'diaphragm': 'Diafragma adalah septum muskular kubah pembatas antara cavitas thoracis dan cavitas abdominis, sekaligus otot inspirasi utama.',
  'kidney': 'Ren (ginjal) memfilter plasma darah, memproduksi urine, serta meregulasi tekanan darah dan eritropoiesis.'
};

export function getExplanation(name: string, system: SystemId): string {
  const lower = name.toLowerCase();
  for (const [key, val] of Object.entries(EXPLANATIONS)) {
    if (lower.includes(key)) return val;
  }
  const s = SYSTEMS.find(item => item.id === system);
  return s?.description || '';
}
