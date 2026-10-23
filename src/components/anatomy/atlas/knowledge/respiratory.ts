import { OrganDetails } from '../medical-knowledge';

/**
 * Basis Pengetahuan Medis Komprehensif: Sistem Respirasi (Pernapasan)
 * AnatoSmart 3D - Respiratory System Medical Knowledge Base
 *
 * Mencakup saluran pernapasan atas, saluran pernapasan bawah,
 * paru-paru (pulmo), pleura, mediastinum, dan struktur neurovaskular terkait.
 */
export const RESPIRATORY_KNOWLEDGE: Record<string, OrganDetails> = {
  // ==========================================
  // PARU-PARU (LUNGS / PULMONES)
  // ==========================================
  'lung': {
    type: 'organ',
    nameLatin: 'Pulmo',
    nameId: 'Paru-Paru',
    deskripsi: 'Sepasang organ respirasi utama di cavitas thoracis yang mengapit mediastinum dan cor. Berfungsi vital dalam pertukaran gas respirasi (oksigenasi darah vena dan eliminasi karbon dioksida) melalui difusi pasif melintasi membran alveolokapiler. Dilapisi oleh pleura visceralis dan dilindungi oleh rangka sangkar toraks.',
    arteri: 'Sirkulasi fungsional: Truncus pulmonalis bercabang menjadi Arteria pulmonalis dextra et sinistra yang menghantarkan darah terdeoksigenasi bertekanan rendah dari ventrikel kanan ke anyaman kapiler alveolar. Sirkulasi nutrisional: Arteriae bronchiales (1 cabang dextra dari A. intercostalis posterior III/aorta, dan 2 cabang sinistra langsung dari Aorta thoracica descendens) yang memperfusi stroma parenkim, bronkus, dan pleura visceralis.',
    vena: 'Sirkulasi fungsional: Venae pulmonales (4 pembuluh: 2 superior dan 2 inferior) mengalirkan darah teroksigenasi penuh dari kapiler alveolar langsung ke atrium sinistrum. Sirkulasi nutrisional: Venae bronchiales bermuara ke Vena azygos di sisi kanan dan Vena hemiazygos accessoria / Vena intercostalis superior di sisi kiri.',
    inervasi: 'Plexus pulmonalis (anterior dan posterior hilum): Serabut parasimpatis presinaptik dari Nervus vagus (CN X) melalui pelepasan asetilkolin pada reseptor muskarinik M3 memicu bronkokonstriksi otot polos jalan napas, vasodilatasi vaskular pulmonal, dan stimulasi sekresi glandula mukosa bronkial. Serabut simpatis pascasinaptik dari ganglion truncus sympathicus thoracicus T2-T5 via reseptor beta-2 adrenergik menginduksi bronkodilatasi kuat dan vasokonstriksi arteriol pulmonal.',
    limfatik: 'Anyaman limfatik superfisial (subpleural) dan profundus mengalirkan cairan limfe ke Nodi lymphatici intrapulmonales -> Nodi bronchopulmonales (kelenjar hilum) -> Nodi tracheobronchiales inferiores (subcarinal) dan superiores -> Truncus bronchomediastinalis dexter et sinister -> Ductus thoracicus (kiri) dan Ductus lymphaticus dexter (kanan).',
    korelasiKlinis: 'Pneumonia (konsolidasi parenkim paru akibat eksudat infeksius bakterial/viral), Penyakit Paru Obstruktif Kronis (PPOK: kombinasi bronkitis kronis obstruktif dan emfisema destruktif), Asma Bronkiale, Emboli Paru (thromboembolism pulmonal akibat DVT yang memicu mismatch ventilasi-perfusi V/Q akut dan henti jantung obstruktif), Tuberkulosis Paru (kavitasi apikal Mycobacterium tuberculosis), Edema Paru kardiogenik/non-kardiogenik, ARDS, dan Karsinoma Bronkogenik (karsinoma sel kecil dan non-sel kecil).'
  },
  'pulmo': {
    type: 'organ',
    nameLatin: 'Pulmo',
    nameId: 'Paru-Paru',
    deskripsi: 'Sepasang organ respirasi utama di cavitas thoracis yang mengapit mediastinum dan cor. Berfungsi vital dalam pertukaran gas respirasi (oksigenasi darah vena dan eliminasi karbon dioksida) melalui difusi pasif melintasi membran alveolokapiler. Dilapisi oleh pleura visceralis dan dilindungi oleh rangka sangkar toraks.',
    arteri: 'Sirkulasi fungsional: Truncus pulmonalis bercabang menjadi Arteria pulmonalis dextra et sinistra yang menghantarkan darah terdeoksigenasi bertekanan rendah dari ventrikel kanan ke anyaman kapiler alveolar. Sirkulasi nutrisional: Arteriae bronchiales (1 cabang dextra dari A. intercostalis posterior III/aorta, dan 2 cabang sinistra langsung dari Aorta thoracica descendens) yang memperfusi stroma parenkim, bronkus, dan pleura visceralis.',
    vena: 'Sirkulasi fungsional: Venae pulmonales (4 pembuluh: 2 superior dan 2 inferior) mengalirkan darah teroksigenasi penuh dari kapiler alveolar langsung ke atrium sinistrum. Sirkulasi nutrisional: Venae bronchiales bermuara ke Vena azygos di sisi kanan dan Vena hemiazygos accessoria / Vena intercostalis superior di sisi kiri.',
    inervasi: 'Plexus pulmonalis (anterior dan posterior hilum): Serabut parasimpatis presinaptik dari Nervus vagus (CN X) melalui pelepasan asetilkolin pada reseptor muskarinik M3 memicu bronkokonstriksi otot polos jalan napas, vasodilatasi vaskular pulmonal, dan stimulasi sekresi glandula mukosa bronkial. Serabut simpatis pascasinaptik dari ganglion truncus sympathicus thoracicus T2-T5 via reseptor beta-2 adrenergik menginduksi bronkodilatasi kuat dan vasokonstriksi arteriol pulmonal.',
    limfatik: 'Anyaman limfatik superfisial (subpleural) dan profundus mengalirkan cairan limfe ke Nodi lymphatici intrapulmonales -> Nodi bronchopulmonales (kelenjar hilum) -> Nodi tracheobronchiales inferiores (subcarinal) dan superiores -> Truncus bronchomediastinalis dexter et sinister -> Ductus thoracicus (kiri) dan Ductus lymphaticus dexter (kanan).',
    korelasiKlinis: 'Pneumonia (konsolidasi parenkim paru akibat eksudat infeksius bakterial/viral), Penyakit Paru Obstruktif Kronis (PPOK: kombinasi bronkitis kronis obstruktif dan emfisema destruktif), Asma Bronkiale, Emboli Paru (thromboembolism pulmonal akibat DVT yang memicu mismatch ventilasi-perfusi V/Q akut dan henti jantung obstruktif), Tuberkulosis Paru (kavitasi apikal Mycobacterium tuberculosis), Edema Paru kardiogenik/non-kardiogenik, ARDS, dan Karsinoma Bronkogenik (karsinoma sel kecil dan non-sel kecil).'
  },

  // ==========================================
  // PARU KANAN DAN LOBUS-LOBUSNYA
  // ==========================================
  'pulmo dexter': {
    type: 'organ',
    nameLatin: 'Pulmo Dexter',
    nameId: 'Paru Kanan',
    deskripsi: 'Paru-paru kanan berukuran lebih besar, lebih berat, dan bervolume lebih tinggi dibandingkan paru kiri, namun lebih pendek karena terdorong ke kranial oleh kubah hepar di bawah hemidiafragma kanan. Terbagi menjadi 3 lobus fungsional: Lobus Superior, Lobus Medius, dan Lobus Inferior yang dipisahkan oleh Fissura Obliqua dan Fissura Horizontalis. Memiliki 10 segmen bronkopulmonal independen (B1-B10).',
    arteri: 'Arteria pulmonalis dextra (berjalan melintang di bawah arcus aorta dan di posterior vena cava superior menuju hilum paru kanan, bercabang menjadi Truncus anterior untuk lobus superior dan rami interlobares untuk lobus medius dan inferior) dan 1 Arteria bronchialis dextra.',
    vena: 'Vena pulmonalis dextra superior (mendrainase lobus superior dan lobus medius) dan Vena pulmonalis dextra inferior (mendrainase lobus inferior), bermuara langsung ke atrium kiri. Vena bronchialis dextra bermuara ke Vena azygos.',
    inervasi: 'Plexus pulmonalis dexter: Cabang parasimpatis N. vagus kanan (bronkokonstriksi dan sekretomotor) dan serabut simpatis pascaganglionik truncus sympathicus torakal T2-T5 (bronkodilatasi dan vasokonstriksi).',
    limfatik: 'Nodi lymphatici bronchopulmonales dexter (hilum) -> Nodi tracheobronchiales inferiores (subcarinal) dan superiores dextri -> Nodi paratracheales dextri -> Truncus bronchomediastinalis dexter -> Ductus lymphaticus dexter.',
    korelasiKlinis: 'Aspirasi benda asing paling sering terperangkap di bronkus utama kanan dan lobus inferior kanan karena orientasi anatomis bronkus kanan yang lebih vertikal, lebar, dan pendek; Middle Lobe Syndrome (atelektasis kronis lobus medius akibat kompresi limfonodi peribronkial).'
  },
  'pulmo dexter lobus superior': {
    type: 'organ',
    nameLatin: 'Lobus Superior Pulmonis Dextri',
    nameId: 'Lobus Superior Paru Kanan',
    deskripsi: 'Lobus paling kranial dari paru kanan, dibatasi di sebelah inferior oleh fissura horizontalis di sisi anterior dan fissura obliqua di sisi posterior. Terdiri atas 3 segmen bronkopulmonal: Segmentum apicale (B1), Segmentum posterius (B2), dan Segmentum anterius (B3). Apeksnya meluas ke atas melalui apertura thoracis superior hingga 2-3 cm di atas sepertiga medial clavicula.',
    arteri: 'Truncus anterior dari Arteria pulmonalis dextra mempercabangkan rami apicalis, posterior, dan anterior; rami bronchiales dari A. bronchialis dextra.',
    vena: 'Rami venosi lobi superioris yang berkonfluensi membentuk Vena pulmonalis dextra superior.',
    inervasi: 'Rami pulmonales dari plexus pulmonalis dexter.',
    limfatik: 'Nodi lymphatici bronchopulmonales hilum kanan berlanjut ke Nodi tracheobronchiales superiores dextri dan Nodi paratracheales dextri.',
    korelasiKlinis: 'Predileksi tersering reaktivasi Tuberkulosis Paru sekunder (fokus apikal/infiltrat kavitasi subapikal) akibat tingginya rasio ventilasi-perfusi (V/Q ratio tinggi) yang menyediakan tekanan parsial oksigen (PO2) jaringan optimal bagi bakteri aerob M. tuberculosis; Tumor Pancoast (sulcus superior tumor) di apeks lobus superior yang menginfiltrasi pleksus brakialis C8-T1 (nyeri lengan bawah dan tangan) dan ganglion stellatum simpatis leher (Sindrom Horner: ptosis, miosis, anhidrosis, enoftalmus ipsilateral).'
  },
  'lobus superior pulmo dexter': {
    type: 'organ',
    nameLatin: 'Lobus Superior Pulmonis Dextri',
    nameId: 'Lobus Superior Paru Kanan',
    deskripsi: 'Lobus paling kranial dari paru kanan, dibatasi di sebelah inferior oleh fissura horizontalis di sisi anterior dan fissura obliqua di sisi posterior. Terdiri atas 3 segmen bronkopulmonal: Segmentum apicale (B1), Segmentum posterius (B2), dan Segmentum anterius (B3). Apeksnya meluas ke atas melalui apertura thoracis superior hingga 2-3 cm di atas sepertiga medial clavicula.',
    arteri: 'Truncus anterior dari Arteria pulmonalis dextra mempercabangkan rami apicalis, posterior, dan anterior; rami bronchiales dari A. bronchialis dextra.',
    vena: 'Rami venosi lobi superioris yang berkonfluensi membentuk Vena pulmonalis dextra superior.',
    inervasi: 'Rami pulmonales dari plexus pulmonalis dexter.',
    limfatik: 'Nodi lymphatici bronchopulmonales hilum kanan berlanjut ke Nodi tracheobronchiales superiores dextri dan Nodi paratracheales dextri.',
    korelasiKlinis: 'Predileksi tersering reaktivasi Tuberkulosis Paru sekunder (fokus apikal/infiltrat kavitasi subapikal) akibat tingginya rasio ventilasi-perfusi (V/Q ratio tinggi) yang menyediakan tekanan parsial oksigen (PO2) jaringan optimal bagi bakteri aerob M. tuberculosis; Tumor Pancoast (sulcus superior tumor) di apeks lobus superior yang menginfiltrasi pleksus brakialis C8-T1 (nyeri lengan bawah dan tangan) dan ganglion stellatum simpatis leher (Sindrom Horner: ptosis, miosis, anhidrosis, enoftalmus ipsilateral).'
  },
  'pulmo dexter lobus medius': {
    type: 'organ',
    nameLatin: 'Lobus Medius Pulmonis Dextri',
    nameId: 'Lobus Medius Paru Kanan',
    deskripsi: 'Lobus terkecil berbentuk baji (wedge-shaped) pada paru kanan, dibatasi di superior oleh fissura horizontalis dan di posteroinferior oleh fissura obliqua. Menempati dinding dada anterior setinggi spatium intercostale IV-VI. Terdiri atas 2 segmen bronkopulmonal fungsional: Segmentum laterale (B4) dan Segmentum mediale (B5).',
    arteri: 'Ramus lobi medii dari Arteria pulmonalis dextra (bercabang dari pars interlobaris di kedalaman fissura obliqua).',
    vena: 'Vena lobi medii yang bergabung ke dalam Vena pulmonalis dextra superior.',
    inervasi: 'Rami pulmonales dari plexus pulmonalis dexter.',
    limfatik: 'Nodi lymphatici bronchopulmonales medii dexter menuju Nodi tracheobronchiales.',
    korelasiKlinis: 'Sindrom Lobus Medius (Middle Lobe Syndrome): atelektasis rekuren, kolaps kronis, dan bronkiektasis pada lobus medius akibat kaliber bronkus lobaris medius yang kecil dan panjang, sudut percabangannya yang tajam, serta dikelilingi oleh cincin limfonodi peribronkial yang mudah membengkak pada infeksi tuberkulosis, histoplasmosis, atau sarkoidosis.'
  },
  'lobus medius pulmo dexter': {
    type: 'organ',
    nameLatin: 'Lobus Medius Pulmonis Dextri',
    nameId: 'Lobus Medius Paru Kanan',
    deskripsi: 'Lobus terkecil berbentuk baji (wedge-shaped) pada paru kanan, dibatasi di superior oleh fissura horizontalis dan di posteroinferior oleh fissura obliqua. Menempati dinding dada anterior setinggi spatium intercostale IV-VI. Terdiri atas 2 segmen bronkopulmonal fungsional: Segmentum laterale (B4) dan Segmentum mediale (B5).',
    arteri: 'Ramus lobi medii dari Arteria pulmonalis dextra (bercabang dari pars interlobaris di kedalaman fissura obliqua).',
    vena: 'Vena lobi medii yang bergabung ke dalam Vena pulmonalis dextra superior.',
    inervasi: 'Rami pulmonales dari plexus pulmonalis dexter.',
    limfatik: 'Nodi lymphatici bronchopulmonales medii dexter menuju Nodi tracheobronchiales.',
    korelasiKlinis: 'Sindrom Lobus Medius (Middle Lobe Syndrome): atelektasis rekuren, kolaps kronis, dan bronkiektasis pada lobus medius akibat kaliber bronkus lobaris medius yang kecil dan panjang, sudut percabangannya yang tajam, serta dikelilingi oleh cincin limfonodi peribronkial yang mudah membengkak pada infeksi tuberkulosis, histoplasmosis, atau sarkoidosis.'
  },
  'pulmo dexter lobus inferior': {
    type: 'organ',
    nameLatin: 'Lobus Inferior Pulmonis Dextri',
    nameId: 'Lobus Inferior Paru Kanan',
    deskripsi: 'Lobus terbesar dan paling bervolume pada paru kanan, terletak di posteroinferior terhadap fissura obliqua. Basisnya membentuk permukaan konkaf yang luas (facies diaphragmatica) yang bertumpu pada hemidiafragma kanan. Terdiri atas 5 segmen bronkopulmonal: Segmentum superius (B6), Segmentum basale mediale (B7), Segmentum basale anterius (B8), Segmentum basale laterale (B9), dan Segmentum basale posterius (B10).',
    arteri: 'Rami basales dari Arteria pulmonalis dextra (mempercabangkan rami segmentales basales untuk masing-masing segmen B6-B10).',
    vena: 'Vena pulmonalis dextra inferior (terbentuk dari penyatuan Vena basalis communis dan Vena apicalis lobi inferioris).',
    inervasi: 'Plexus pulmonalis dexter.',
    limfatik: 'Nodi lymphatici bronchopulmonales inferiores menuju Nodi tracheobronchiales inferiores (subcarinales).',
    korelasiKlinis: 'Pneumonia aspirasi pada pasien dengan posisi supinasi/telentang (misal pada pasien tidak sadar atau stroke) paling sering melokalisasi diri pada Segmentum superius lobi inferioris (B6) karena ostium bronkus segmen ini mengarah langsung ke posterior. Sering menjadi lokasi efusi pleura parapneumonik dan abses paru anaerob.'
  },
  'lobus inferior pulmo dexter': {
    type: 'organ',
    nameLatin: 'Lobus Inferior Pulmonis Dextri',
    nameId: 'Lobus Inferior Paru Kanan',
    deskripsi: 'Lobus terbesar dan paling bervolume pada paru kanan, terletak di posteroinferior terhadap fissura obliqua. Basisnya membentuk permukaan konkaf yang luas (facies diaphragmatica) yang bertumpu pada hemidiafragma kanan. Terdiri atas 5 segmen bronkopulmonal: Segmentum superius (B6), Segmentum basale mediale (B7), Segmentum basale anterius (B8), Segmentum basale laterale (B9), dan Segmentum basale posterius (B10).',
    arteri: 'Rami basales dari Arteria pulmonalis dextra (mempercabangkan rami segmentales basales untuk masing-masing segmen B6-B10).',
    vena: 'Vena pulmonalis dextra inferior (terbentuk dari penyatuan Vena basalis communis dan Vena apicalis lobi inferioris).',
    inervasi: 'Plexus pulmonalis dexter.',
    limfatik: 'Nodi lymphatici bronchopulmonales inferiores menuju Nodi tracheobronchiales inferiores (subcarinales).',
    korelasiKlinis: 'Pneumonia aspirasi pada pasien dengan posisi supinasi/telentang (misal pada pasien tidak sadar atau stroke) paling sering melokalisasi diri pada Segmentum superius lobi inferioris (B6) karena ostium bronkus segmen ini mengarah langsung ke posterior. Sering menjadi lokasi efusi pleura parapneumonik dan abses paru anaerob.'
  },

  // ==========================================
  // PARU KIRI DAN LOBUS-LOBUSNYA
  // ==========================================
  'pulmo sinister': {
    type: 'organ',
    nameLatin: 'Pulmo Sinister',
    nameId: 'Paru Kiri',
    deskripsi: 'Paru-paru kiri berdimensi lebih sempit, lebih ringan, dan lebih panjang dibandingkan paru kanan untuk mengakomodasi deviasi jantung dan apeks kordis ke hemitoraks kiri. Terbagi menjadi 2 lobus fungsional: Lobus Superior dan Lobus Inferior yang dipisahkan secara miring oleh Fissura Obliqua. Tepi anterior lobus superior memiliki lekukan Incisura Cardiaca dan tonjolan berbentuk lidah yang disebut Lingula Pulmonis Sinistri. Memiliki 8-10 segmen bronkopulmonal.',
    arteri: 'Arteria pulmonalis sinistra (melengkung di atas bronkus utama kiri di anterior aorta descendens sebelum memasuki hilum paru) dan 2 Arteriae bronchiales sinistri (superior dan inferior, berasal langsung dari facies anterior Aorta thoracica descendens).',
    vena: 'Vena pulmonalis sinistra superior (menerima drainase lobus superior dan lingula) dan Vena pulmonalis sinistra inferior (menerima drainase lobus inferior), bermuara langsung ke atrium kiri. Vena bronchialis sinistra bermuara ke Vena hemiazygos accessoria atau Vena intercostalis superior sinistra.',
    inervasi: 'Plexus pulmonalis sinister: Serabut parasimpatis N. vagus kiri (berdekatan dengan lintasan N. laryngeus recurrens sinister yang melingkari arcus aorta di dekat ligamentum arteriosum) dan simpatis segmen T2-T5.',
    limfatik: 'Nodi lymphatici intrapulmonales -> Nodi bronchopulmonales sinister -> Nodi tracheobronchiales superiores sinistri dan inferiores. Sebagian limfe lobus superior kiri mengalir ke Nodi mediastinales anteriores (jendela aortopulmonal / AP window) -> Truncus bronchomediastinalis sinister -> Ductus thoracicus.',
    korelasiKlinis: 'Sindrom Ortner (Cardiovocal Syndrome): karsinoma bronkogenik hilum kiri atau limfadenopati AP window menekan Nervus laryngeus recurrens sinister di bawah arcus aorta, menyebabkan kelumpuhan pita suara kiri unilateral dengan manifestasi suara serak (hoarseness); Efusi pleura eksudatif kiri pada pankreatitis atau ruptur esofagus (Boerhaave syndrome).'
  },
  'pulmo sinister lobus superior': {
    type: 'organ',
    nameLatin: 'Lobus Superior Pulmonis Sinistri',
    nameId: 'Lobus Superior Paru Kiri',
    deskripsi: 'Lobus anterosuperior paru kiri, terletak di atas dan di depan fissura obliqua. Mencakup kubah apeks paru kiri, impressio cardiaca yang dalam, incisura cardiaca, dan berakhir di inferior sebagai lingula pulmonis. Terdiri atas segmen apikoposterior (B1+B2), segmen anterior (B3), segmen lingularis superior (B4), dan segmen lingularis inferior (B5).',
    arteri: 'Rami lobi superioris dari Arteria pulmonalis sinistra (serangkaian 4-8 cabang arteri kecil bertingkat yang keluar dari permukaan anterior dan superior arteri pulmonalis).',
    vena: 'Vena pulmonalis sinistra superior (menerima darah beroksigen dari cabang apikoposterior, anterior, dan lingular).',
    inervasi: 'Plexus pulmonalis sinister.',
    limfatik: 'Nodi lymphatici bronchopulmonales sinister menuju nodi subaortici (AP window) dan nodi tracheobronchiales superiores.',
    korelasiKlinis: 'Kavitasi tuberkulosis paru segmen apikoposterior; Adenokarsinoma perifer paru pada perokok pasif/non-perokok sering berlokasi di zona subpleural lobus superior kiri.'
  },
  'lobus superior pulmo sinister': {
    type: 'organ',
    nameLatin: 'Lobus Superior Pulmonis Sinistri',
    nameId: 'Lobus Superior Paru Kiri',
    deskripsi: 'Lobus anterosuperior paru kiri, terletak di atas dan di depan fissura obliqua. Mencakup kubah apeks paru kiri, impressio cardiaca yang dalam, incisura cardiaca, dan berakhir di inferior sebagai lingula pulmonis. Terdiri atas segmen apikoposterior (B1+B2), segmen anterior (B3), segmen lingularis superior (B4), dan segmen lingularis inferior (B5).',
    arteri: 'Rami lobi superioris dari Arteria pulmonalis sinistra (serangkaian 4-8 cabang arteri kecil bertingkat yang keluar dari permukaan anterior dan superior arteri pulmonalis).',
    vena: 'Vena pulmonalis sinistra superior (menerima darah beroksigen dari cabang apikoposterior, anterior, dan lingular).',
    inervasi: 'Plexus pulmonalis sinister.',
    limfatik: 'Nodi lymphatici bronchopulmonales sinister menuju nodi subaortici (AP window) dan nodi tracheobronchiales superiores.',
    korelasiKlinis: 'Kavitasi tuberkulosis paru segmen apikoposterior; Adenokarsinoma perifer paru pada perokok pasif/non-perokok sering berlokasi di zona subpleural lobus superior kiri.'
  },
  'pulmo sinister lobus inferior': {
    type: 'organ',
    nameLatin: 'Lobus Inferior Pulmonis Sinistri',
    nameId: 'Lobus Inferior Paru Kiri',
    deskripsi: 'Lobus posteroinferior paru kiri yang bervolume masif, menempati sebagian besar ruang hemitoraks posterior di bawah fissura obliqua. Berkontak inferior dengan hemidiafragma kiri (menutupi fundus gaster dan limpa di cavitas abdominalis) dan medial dengan aorta thoracica descendens. Terdiri atas segmen superior (B6), segmen anteromedial basal (B7+B8), segmen lateral basal (B9), dan segmen posterior basal (B10).',
    arteri: 'Pars basalis dari Arteria pulmonalis sinistra yang bercabang menjadi rami segmentales basales.',
    vena: 'Vena pulmonalis sinistra inferior (bermuara langsung ke atrium kiri).',
    inervasi: 'Plexus pulmonalis sinister.',
    limfatik: 'Nodi lymphatici bronchopulmonales inferiores menuju Nodi tracheobronchiales inferiores (subcarinales).',
    korelasiKlinis: 'Pneumonia lobaris lobus inferior kiri dengan konsolidasi yang menutupi hemidiafragma kiri pada foto toraks (hilangnya siluet diafragma / positive silhouette sign); Emboli paru segmental pada arteri basalis.'
  },
  'lobus inferior pulmo sinister': {
    type: 'organ',
    nameLatin: 'Lobus Inferior Pulmonis Sinistri',
    nameId: 'Lobus Inferior Paru Kiri',
    deskripsi: 'Lobus posteroinferior paru kiri yang bervolume masif, menempati sebagian besar ruang hemitoraks posterior di bawah fissura obliqua. Berkontak inferior dengan hemidiafragma kiri (menutupi fundus gaster dan limpa di cavitas abdominalis) dan medial dengan aorta thoracica descendens. Terdiri atas segmen superior (B6), segmen anteromedial basal (B7+B8), segmen lateral basal (B9), dan segmen posterior basal (B10).',
    arteri: 'Pars basalis dari Arteria pulmonalis sinistra yang bercabang menjadi rami segmentales basales.',
    vena: 'Vena pulmonalis sinistra inferior (bermuara langsung ke atrium kiri).',
    inervasi: 'Plexus pulmonalis sinister.',
    limfatik: 'Nodi lymphatici bronchopulmonales inferiores menuju Nodi tracheobronchiales inferiores (subcarinales).',
    korelasiKlinis: 'Pneumonia lobaris lobus inferior kiri dengan konsolidasi yang menutupi hemidiafragma kiri pada foto toraks (hilangnya siluet diafragma / positive silhouette sign); Emboli paru segmental pada arteri basalis.'
  },
  'lingula': {
    type: 'organ',
    nameLatin: 'Lingula Pulmonis Sinistri',
    nameId: 'Lingula Paru Kiri',
    deskripsi: 'Proyeksi lidah jaringan parenkim paru pada tepi anteroinferior lobus superior paru kiri, tepat di bawah incisura cardiaca. Secara morfologis, filogenetis, dan embriologis merupakan padanan (homolog) dari Lobus Medius paru kanan. Terbagi menjadi 2 segmen bronkopulmonal: Segmentum lingulare superius (B4) dan Segmentum lingulare inferius (B5).',
    arteri: 'Ramus lingularis dari Arteria pulmonalis sinistra (bercabang dari pars interlobaris di dalam fissura obliqua).',
    vena: 'Vena lingularis yang mengalirkan darah teroksigenasi ke Vena pulmonalis sinistra superior.',
    inervasi: 'Rami pulmonales dari plexus pulmonalis sinister.',
    limfatik: 'Nodi lymphatici bronchopulmonales sinistri menuju nodi tracheobronchiales.',
    korelasiKlinis: 'Infiltrat atau pneumonia lingula menghasilkan tanda siluet positif (positive silhouette sign) dengan mengaburkan batas kontur jantung kiri (left heart border) pada foto toraks PA; Lady Windermere Syndrome (bronkiektasis dan infeksi Mycobacterium avium complex [MAC] non-tuberkulosis pada wanita lanjut usia yang sering melibatkan lingula dan lobus medius kanan).'
  },
  'lingula pulmonis': {
    type: 'organ',
    nameLatin: 'Lingula Pulmonis Sinistri',
    nameId: 'Lingula Paru Kiri',
    deskripsi: 'Proyeksi lidah jaringan parenkim paru pada tepi anteroinferior lobus superior paru kiri, tepat di bawah incisura cardiaca. Secara morfologis, filogenetis, dan embriologis merupakan padanan (homolog) dari Lobus Medius paru kanan. Terbagi menjadi 2 segmen bronkopulmonal: Segmentum lingulare superius (B4) dan Segmentum lingulare inferius (B5).',
    arteri: 'Ramus lingularis dari Arteria pulmonalis sinistra (bercabang dari pars interlobaris di dalam fissura obliqua).',
    vena: 'Vena lingularis yang mengalirkan darah teroksigenasi ke Vena pulmonalis sinistra superior.',
    inervasi: 'Rami pulmonales dari plexus pulmonalis sinister.',
    limfatik: 'Nodi lymphatici bronchopulmonales sinistri menuju nodi tracheobronchiales.',
    korelasiKlinis: 'Infiltrat atau pneumonia lingula menghasilkan tanda siluet positif (positive silhouette sign) dengan mengaburkan batas kontur jantung kiri (left heart border) pada foto toraks PA; Lady Windermere Syndrome (bronkiektasis dan infeksi Mycobacterium avium complex [MAC] non-tuberkulosis pada wanita lanjut usia yang sering melibatkan lingula dan lobus medius kanan).'
  },

  // ==========================================
  // TRAKEA DAN POHON TRAKEOBRONKIAL
  // ==========================================
  'trachea': {
    type: 'organ',
    nameLatin: 'Trachea',
    nameId: 'Batang Tenggorok / Trakea',
    deskripsi: 'Saluran konduksi udara fibro-kartilaginosa fleksibel berbentuk pipa silindris sepanjang 10-12 cm dengan diameter luar ~2-2.5 cm. Membentang di garis tengah dari batas inferior kartilago cricoidea laring setinggi vertebra servikalis C6 hingga mengalami bifurkasio di carina setinggi diskus intervertebralis T4-T5 (angulus sternalis Ludovici). Lumen trakea dijaga kepatenannya oleh 16-20 cincin kartilago hialin berbentuk huruf "C" yang terbuka di sisi posterior; celah posterior ini dijembatani oleh Musculus trachealis (otot polos) dan membran fibroelastis yang berbatasan langsung dengan permukaan anterior esofagus.',
    arteri: 'Pars cervicalis: Rami tracheales dari Arteria thyroidea inferior (cabang truncus thyrocervicalis dari A. subclavia). Pars thoracica: Rami bronchiales dari Aorta thoracica descendens dan cabang anastomotik dari Arteria thoracica interna.',
    vena: 'Plexus venosus trachealis mengalirkan darah vena ke Vena thyroidea inferior yang kemudian bermuara ke Vena brachiocephalica sinistra.',
    inervasi: 'Inervasi parasimpatis dan sensorik mukosa diperantarai oleh Nervus laryngeus recurrens (cabang Nervus vagus, CN X) yang memediasi refleks batuk dan sekresi lendir; Inervasi simpatis vasomotor dan relaksasi musculus trachealis berasal dari truncus sympathicus (ganglion cervicale medium, inferius, dan thoracica superior T1-T4).',
    limfatik: 'Pars cervicalis dialirkan ke Nodi lymphatici pretracheales dan paratracheales servikalis profunda; Pars thoracica dialirkan ke Nodi paratracheales thoracici dan Nodi tracheobronchiales.',
    korelasiKlinis: 'Trakeostomi elektif atau darurat (kanulasi bedah pada cincin trakea ke-2 dan ke-3 untuk bypass obstruksi jalan napas atas kronis atau toilet bronkial jangka panjang); Stenosis trakea iatrogenik akibat iskemia nekrosis mukosa karena tekanan balon (cuff pressure) pipa endotrakeal yang berlebihan (>30 cmH2O); Fistula Trakeoesofageal (TEF karsinoma invasif atau trauma); Trakeomalasia (kelemahan cincin kartilago memicu kolaps dinamis saat ekspirasi).'
  },
  'carina tracheae': {
    type: 'organ',
    nameLatin: 'Carina Tracheae',
    nameId: 'Karina Trakea',
    deskripsi: 'Punggung tulang rawan internal berbentuk sabit (ridge anteroposterior) yang menonjol ke dalam lumen pada titik bifurkasio trakea menjadi bronkus utama kanan dan kiri, terletak setinggi angulus sternalis (diskus T4-T5). Dilapisi oleh epitel kolumnar pseudokompleks bersilia yang sangat kaya akan korpuskel mekanoreseptor sensorik aferen, menjadikannya zona pemicu refleks batuk (cough reflex) paling sensitif di seluruh sistem pernapasan manusia.',
    arteri: 'Rami bronchiales dari Aorta thoracica descendens dan anastomosis cabang terminal Arteria thyroidea inferior.',
    vena: 'Venae bronchiales yang mengalirkan darah balik ke sistem Vena azygos dan Vena hemiazygos.',
    inervasi: 'Serabut aferen sensorik somatoviserik yang sangat peka melalui Nervus vagus (CN X) menuju nukleus traktus solitarius di medula oblongata batang otak, memicu refleks batuk ekspulsif eksplosif saat terpapar partikel asing, aspirasi cairan, atau sentuhan instrumen endoskopi.',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores (limfonodi subkarinal) yang terletak tepat di sudut bawah bifurkasio karina.',
    korelasiKlinis: 'Penilaian sudut karina pada bronkoskopi fleksibel/kaku: pembesaran limfonodi subkarinal akibat metastasis Karsinoma Bronkogenik stadium lanjut atau Limfoma Maligna menyebabkan sudut karina melebar (>90°), tumpul, terfiksasi, dan kehilangan mobilitas fisiologis; Deviasi karina pada aneurisma aorta torakalis atau massa mediastinum subkarinal.'
  },
  'carina': {
    type: 'organ',
    nameLatin: 'Carina Tracheae',
    nameId: 'Karina Trakea',
    deskripsi: 'Punggung tulang rawan internal berbentuk sabit (ridge anteroposterior) yang menonjol ke dalam lumen pada titik bifurkasio trakea menjadi bronkus utama kanan dan kiri, terletak setinggi angulus sternalis (diskus T4-T5). Dilapisi oleh epitel kolumnar pseudokompleks bersilia yang sangat kaya akan korpuskel mekanoreseptor sensorik aferen, menjadikannya zona pemicu refleks batuk (cough reflex) paling sensitif di seluruh sistem pernapasan manusia.',
    arteri: 'Rami bronchiales dari Aorta thoracica descendens dan anastomosis cabang terminal Arteria thyroidea inferior.',
    vena: 'Venae bronchiales yang mengalirkan darah balik ke sistem Vena azygos dan Vena hemiazygos.',
    inervasi: 'Serabut aferen sensorik somatoviserik yang sangat peka melalui Nervus vagus (CN X) menuju nukleus traktus solitarius di medula oblongata batang otak, memicu refleks batuk ekspulsif eksplosif saat terpapar partikel asing, aspirasi cairan, atau sentuhan instrumen endoskopi.',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores (limfonodi subkarinal) yang terletak tepat di sudut bawah bifurkasio karina.',
    korelasiKlinis: 'Penilaian sudut karina pada bronkoskopi fleksibel/kaku: pembesaran limfonodi subkarinal akibat metastasis Karsinoma Bronkogenik stadium lanjut atau Limfoma Maligna menyebabkan sudut karina melebar (>90°), tumpul, terfiksasi, dan kehilangan mobilitas fisiologis; Deviasi karina pada aneurisma aorta torakalis atau massa mediastinum subkarinal.'
  },
  'bronchus principalis dexter': {
    type: 'organ',
    nameLatin: 'Bronchus Principalis Dexter',
    nameId: 'Bronkus Utama Kanan',
    deskripsi: 'Saluran konduksi udara primer percabangan pertama trakea menuju hilum paru kanan. Berukuran lebih lebar (diameter lebih besar ~15 mm), lebih pendek (panjang hanya ~2.5 cm), dan berorientasi lebih vertikal (membentuk sudut curam ~25° terhadap aksis vertikal trakea) dibandingkan bronkus utama kiri. Berjalan ke inferolateral di posterior Vena cava superior dan di bawah Vena azygos yang melengkung di atasnya. Sebelum masuk parenkim hilum, mempercabangkan bronchus lobaris superior (bronchus eparterialis).',
    arteri: 'Arteria bronchialis dextra (bercabang dari A. intercostalis posterior dextra III atau aorta thoracica).',
    vena: 'Vena bronchialis dextra bermuara langsung ke Vena azygos.',
    inervasi: 'Plexus pulmonalis dexter (Nervus vagus parasimpatis dan truncus sympathicus T2-T5).',
    limfatik: 'Nodi lymphatici tracheobronchiales superiores dextri dan nodi bronchopulmonales hilum kanan.',
    korelasiKlinis: 'Aspirasi corpus alienum (benda asing jalan napas seperti kelereng, kacang, kancing baju) jauh lebih sering masuk ke dalam bronkus utama kanan karena jalurnya yang lurus, lebar, dan vertikal sejalan dengan lumen trakea; Komplikasi intubasi endotrakeal dalam (Right Mainstem Bronchial Intubation) memicu hiperinflasi paru kanan disertai atelektasis total paru kiri yang kolaps.'
  },
  'bronchus principalis sinister': {
    type: 'organ',
    nameLatin: 'Bronchus Principalis Sinister',
    nameId: 'Bronkus Utama Kiri',
    deskripsi: 'Saluran konduksi udara primer percabangan trakea menuju hilum paru kiri. Berukuran lebih sempit (diameter ~10-12 mm), lebih panjang (~5 cm), dan berorientasi lebih horizontal/miring (membentuk sudut tajam ~45° terhadap aksis vertikal trakea). Berjalan ke inferolateral di inferior dari Arcus Aorta, menyilang anterior terhadap esofagus, ductus thoracicus, dan Aorta thoracica descendens. Seluruh percabangannya berada di bawah arteria pulmonalis (bronchus hyparterialis).',
    arteri: 'Dua Arteriae bronchiales sinistri (superior dan inferior) yang berasal langsung dari permukaan ventral Aorta thoracica descendens.',
    vena: 'Vena bronchialis sinistra bermuara ke Vena hemiazygos accessoria atau Vena intercostalis superior sinistra.',
    inervasi: 'Plexus pulmonalis sinister (komponen parasimpatis N. vagus dan simpatis torakal).',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores (subcarinales) dan nodi tracheobronchiales superiores sinistri.',
    korelasiKlinis: 'Penekanan ekstrinsik bronkus utama kiri oleh pembesaran Atrium Sinistrum (pada stenosis mitral berat) atau Aneurisma Arcus Aorta dapat memicu batuk kering kronis, mengi unilateral, dan atelektasis kompresif paru kiri; Reseksi bedah sleeve bronchoplasty pada karsinoma bronkogenik sentral kiri lebih kompleks karena letaknya yang terlindung di bawah arkus aorta.'
  },
  'bronchi lobares': {
    type: 'organ',
    nameLatin: 'Bronchi Lobares (Bronchi Secundarii)',
    nameId: 'Bronkus Lobaris (Bronkus Sekunder)',
    deskripsi: 'Percabangan saluran napas generasi kedua yang mengalirkan udara masuk dan keluar dari setiap lobus paru secara individual. Terdapat 3 bronkus lobaris di paru kanan (Bronchus lobaris superior/eparterialis, Bronchus lobaris medius, dan Bronchus lobaris inferior) serta 2 bronkus lobaris di paru kiri (Bronchus lobaris superior dan Bronchus lobaris inferior). Dindingnya masih memiliki lempeng kartilago hialin irregular dan anyaman otot polos yang mengontrol diameter lumen.',
    arteri: 'Rami bronchiales dari sistem Arteriae bronchiales sistemik.',
    vena: 'Venae bronchiales yang bermuara ke Vena azygos dan Vena hemiazygos.',
    inervasi: 'Plexus pulmonalis (Nervus vagus untuk bronkokonstriksi dan kelenjar lendir; Serabut simpatis T2-T5 untuk relaksasi bronkus).',
    limfatik: 'Nodi lymphatici intrapulmonales dan bronchopulmonales (hilar lymph nodes).',
    korelasiKlinis: 'Karsinoma bronkogenik tipe Squamous Cell Carcinoma (SCC) paling sering berpredileksi secara sentral pada mukosa bronkus lobaris, menimbulkan gejala trias klinis: hemoptisis (batuk darah akibat nekrosis neovaskular), batuk persisten, dan atelektasis lobaris distal akibat oklusi lumen intrabronkial.'
  },
  'bronchus lobaris': {
    type: 'organ',
    nameLatin: 'Bronchi Lobares (Bronchi Secundarii)',
    nameId: 'Bronkus Lobaris (Bronkus Sekunder)',
    deskripsi: 'Percabangan saluran napas generasi kedua yang mengalirkan udara masuk dan keluar dari setiap lobus paru secara individual. Terdapat 3 bronkus lobaris di paru kanan (Bronchus lobaris superior/eparterialis, Bronchus lobaris medius, dan Bronchus lobaris inferior) serta 2 bronkus lobaris di paru kiri (Bronchus lobaris superior dan Bronchus lobaris inferior). Dindingnya masih memiliki lempeng kartilago hialin irregular dan anyaman otot polos yang mengontrol diameter lumen.',
    arteri: 'Rami bronchiales dari sistem Arteriae bronchiales sistemik.',
    vena: 'Venae bronchiales yang bermuara ke Vena azygos dan Vena hemiazygos.',
    inervasi: 'Plexus pulmonalis (Nervus vagus untuk bronkokonstriksi dan kelenjar lendir; Serabut simpatis T2-T5 untuk relaksasi bronkus).',
    limfatik: 'Nodi lymphatici intrapulmonales dan bronchopulmonales (hilar lymph nodes).',
    korelasiKlinis: 'Karsinoma bronkogenik tipe Squamous Cell Carcinoma (SCC) paling sering berpredileksi secara sentral pada mukosa bronkus lobaris, menimbulkan gejala trias klinis: hemoptisis (batuk darah akibat nekrosis neovaskular), batuk persisten, dan atelektasis lobaris distal akibat oklusi lumen intrabronkial.'
  },
  'bronchioli': {
    type: 'organ',
    nameLatin: 'Bronchioli',
    nameId: 'Bronkiolus',
    deskripsi: 'Saluran konduksi udara generasi percabangan ke-12 hingga ke-16 dengan diameter kurang dari 1 mm yang menghubungkan bronkus segmental dengan zona pertukaran gas alveolar. Secara histologis tidak lagi memiliki lempeng kartilago dan kelenjar submukosa, melainkan ditunjang oleh lapisan tebal otot polos heliks sirkular serta epitel kolumnar rendah/kuboid bersilia yang kaya akan Sel Clara (Club Cells). Terbagi menjadi Bronkiolus Terminalis (ujung akhir zona konduksi anatomis) dan Bronkiolus Respiratorius (awal zona transisi pernapasan dengan alveoli yang mulai tersebar di dindingnya).',
    arteri: 'Mikrovaskular percabangan terminal arteriae bronchiales yang membentuk pleksus peribronkiolar, beranastomosis langsung dengan mikrosirkulasi arteria pulmonalis pada tingkat bronkiolus respiratorius.',
    vena: 'Kapiler pascabronkiolar sebagian mengalir ke venae bronchiales dan sebagian besar bermuara ke dalam venae pulmonales (membentuk physiological right-to-left shunt).',
    inervasi: 'Plexus pulmonalis otonom: Sistem parasimpatis kolinergik (N. vagus via reseptor M3) menginduksi kontraksi tonus otot polos (spasme bronkiolus) dan hipersekresi lendir; Sistem simpatis adrenergik (reseptor beta-2) memediasi relaksasi otot polos yang kuat (bronkodilatasi terapeutik sasaran obat agonis beta-2 seperti salbutamol).',
    limfatik: 'Pleksus limfatik peribronkiolar yang mengalir sentripetal menuju nodi lymphatici intrapulmonales dan bronchopulmonales.',
    korelasiKlinis: 'Asma Bronkiale (inflamasi kronis jalan napas dengan hiperreaktivitas bronkiolus reversibel, spasme otot polos sirkular, edema lamina propria, dan sumbatan lendir kental eosinofilik / Charcot-Leyden crystals); Bronkiolitis Akut pada bayi (infeksi virus RSV memicu nekrosis epitel silia dan obstruksi bronkiolus kecil); Bronkiolitis Obliterans; Emfisema Sentriasinar pada perokok kronis (destruksi selektif bronkiolus respiratorius).'
  },
  'bronkiolus': {
    type: 'organ',
    nameLatin: 'Bronchioli',
    nameId: 'Bronkiolus',
    deskripsi: 'Saluran konduksi udara generasi percabangan ke-12 hingga ke-16 dengan diameter kurang dari 1 mm yang menghubungkan bronkus segmental dengan zona pertukaran gas alveolar. Secara histologis tidak lagi memiliki lempeng kartilago dan kelenjar submukosa, melainkan ditunjang oleh lapisan tebal otot polos heliks sirkular serta epitel kolumnar rendah/kuboid bersilia yang kaya akan Sel Clara (Club Cells). Terbagi menjadi Bronkiolus Terminalis (ujung akhir zona konduksi anatomis) dan Bronkiolus Respiratorius (awal zona transisi pernapasan dengan alveoli yang mulai tersebar di dindingnya).',
    arteri: 'Mikrovaskular percabangan terminal arteriae bronchiales yang membentuk pleksus peribronkiolar, beranastomosis langsung dengan mikrosirkulasi arteria pulmonalis pada tingkat bronkiolus respiratorius.',
    vena: 'Kapiler pascabronkiolar sebagian mengalir ke venae bronchiales dan sebagian besar bermuara ke dalam venae pulmonales (membentuk physiological right-to-left shunt).',
    inervasi: 'Plexus pulmonalis otonom: Sistem parasimpatis kolinergik (N. vagus via reseptor M3) menginduksi kontraksi tonus otot polos (spasme bronkiolus) dan hipersekresi lendir; Sistem simpatis adrenergik (reseptor beta-2) memediasi relaksasi otot polos yang kuat (bronkodilatasi terapeutik sasaran obat agonis beta-2 seperti salbutamol).',
    limfatik: 'Pleksus limfatik peribronkiolar yang mengalir sentripetal menuju nodi lymphatici intrapulmonales dan bronchopulmonales.',
    korelasiKlinis: 'Asma Bronkiale (inflamasi kronis jalan napas dengan hiperreaktivitas bronkiolus reversibel, spasme otot polos sirkular, edema lamina propria, dan sumbatan lendir kental eosinofilik / Charcot-Leyden crystals); Bronkiolitis Akut pada bayi (infeksi virus RSV memicu nekrosis epitel silia dan obstruksi bronkiolus kecil); Bronkiolitis Obliterans; Emfisema Sentriasinar pada perokok kronis (destruksi selektif bronkiolus respiratorius).'
  },
  'alveolus': {
    type: 'organ',
    nameLatin: 'Alveolus Pulmonis',
    nameId: 'Alveolus Paru',
    deskripsi: 'Kantung mikroskopis poligonal berdinding sangat tipis (diameter rata-rata 200-300 mikron) yang tersusun mengelompok membentuk saccus alveolaris. Merupakan unit anatomis dan fungsional terminal respirasi tempat terjadinya pertukaran O2 dan CO2 antara udara atmosfer dan eritrosit kapiler. Diperkirakan terdapat 300-500 juta alveoli pada kedua paru manusia dewasa dengan luas permukaan total 70-100 m². Dinding alveolar terdiri dari: Pneumosit Tipe I (sel epitel skuamosa sangat tipis yang menutupi 95% permukaan barier darah-udara), Pneumosit Tipe II (sel sekretori kuboid yang memproduksi surfaktan pulmonal dipalmitoilfosfatidilkolin [DPPC] penurun tegangan permukaan Laplace), Makrofag Alveolar (sel pembersih fagositik debu/partikel asing), serta Pori Kohn (lubang interalveolar penyeimbang tekanan udara kolateral).',
    arteri: 'Jala anyaman kapiler alveolar padat yang disuplai oleh percabangan arteriola terminalis Arteria pulmonalis. Ketebalan barier alveolokapiler (membran darah-udara) hanya sekitar 0.2 hingga 0.5 mikron, memungkinkan difusi gas sangat efisien sesuai Hukum Fick.',
    vena: 'Darah teroksigenasi dari kapiler alveolar dikumpulkan oleh venula pasca-kapiler yang berkonvergensi ke dalam sistem Venae pulmonales.',
    inervasi: 'Inervasi sensorik khusus dari Reseptor J (Juxtacapillary receptors) di dinding septum interalveolar yang disarafi serabut C non-mielin N. vagus; peregangan alveolar direspons oleh reseptor regang mekanis Hering-Breuer reflex.',
    limfatik: 'Septum alveolar sejati tidak memiliki pembuluh limfatik (untuk menjaga membran difusi tetap kering); kelebihan cairan transudat dialirkan ke kapiler limfatik awal di ruang interstisial peribronkovaskular.',
    korelasiKlinis: 'Acute Respiratory Distress Syndrome (ARDS: kerusakan endotel kapiler dan pneumosit tipe I difus yang menyebabkan kebocoran eksudat kaya fibrin protein membentuk membran hialin dan edema alveolar masif); Respiratory Distress Syndrome (RDS) pada bayi prematur akibat defisiensi sintesis surfaktan pneumosit tipe II memicu kolaps alveolus (atelektasis mikro difus); Emfisema Panacinar (destruksi septum elastin alveolar pada defisiensi alfa-1-antitripsin); Pneumonia Lobaris (rongga alveolus terisi penuh oleh eksudat purulen, leukosit PMN, dan fibrin).'
  },
  'alveoli': {
    type: 'organ',
    nameLatin: 'Alveolus Pulmonis',
    nameId: 'Alveolus Paru',
    deskripsi: 'Kantung mikroskopis poligonal berdinding sangat tipis (diameter rata-rata 200-300 mikron) yang tersusun mengelompok membentuk saccus alveolaris. Merupakan unit anatomis dan fungsional terminal respirasi tempat terjadinya pertukaran O2 dan CO2 antara udara atmosfer dan eritrosit kapiler. Diperkirakan terdapat 300-500 juta alveoli pada kedua paru manusia dewasa dengan luas permukaan total 70-100 m². Dinding alveolar terdiri dari: Pneumosit Tipe I (sel epitel skuamosa sangat tipis yang menutupi 95% permukaan barier darah-udara), Pneumosit Tipe II (sel sekretori kuboid yang memproduksi surfaktan pulmonal dipalmitoilfosfatidilkolin [DPPC] penurun tegangan permukaan Laplace), Makrofag Alveolar (sel pembersih fagositik debu/partikel asing), serta Pori Kohn (lubang interalveolar penyeimbang tekanan udara kolateral).',
    arteri: 'Jala anyaman kapiler alveolar padat yang disuplai oleh percabangan arteriola terminalis Arteria pulmonalis. Ketebalan barier alveolokapiler (membran darah-udara) hanya sekitar 0.2 hingga 0.5 mikron, memungkinkan difusi gas sangat efisien sesuai Hukum Fick.',
    vena: 'Darah teroksigenasi dari kapiler alveolar dikumpulkan oleh venula pasca-kapiler yang berkonvergensi ke dalam sistem Venae pulmonales.',
    inervasi: 'Inervasi sensorik khusus dari Reseptor J (Juxtacapillary receptors) di dinding septum interalveolar yang disarafi serabut C non-mielin N. vagus; peregangan alveolar direspons oleh reseptor regang mekanis Hering-Breuer reflex.',
    limfatik: 'Septum alveolar sejati tidak memiliki pembuluh limfatik (untuk menjaga membran difusi tetap kering); kelebihan cairan transudat dialirkan ke kapiler limfatik awal di ruang interstisial peribronkovaskular.',
    korelasiKlinis: 'Acute Respiratory Distress Syndrome (ARDS: kerusakan endotel kapiler dan pneumosit tipe I difus yang menyebabkan kebocoran eksudat kaya fibrin protein membentuk membran hialin dan edema alveolar masif); Respiratory Distress Syndrome (RDS) pada bayi prematur akibat defisiensi sintesis surfaktan pneumosit tipe II memicu kolaps alveolus (atelektasis mikro difus); Emfisema Panacinar (destruksi septum elastin alveolar pada defisiensi alfa-1-antitripsin); Pneumonia Lobaris (rongga alveolus terisi penuh oleh eksudat purulen, leukosit PMN, dan fibrin).'
  },

  // ==========================================
  // LARING DAN STRUKTUR KARTILAGONYA
  // ==========================================
  'larynx': {
    type: 'organ',
    nameLatin: 'Larynx',
    nameId: 'Laring / Kotak Suara',
    deskripsi: 'Organ muskulo-kartilaginosa kompleks yang terletak di garis tengah anterior leher setinggi corpus vertebra C3 hingga C6, menghubungkan orofaring dan laringofaring di sebelah kranial dengan trakea di sebelah kaudal. Menjalankan 3 fungsi vital: proteksi jalan napas bawah dari aspirasi saat deglutisi (menelan) melalui penutupan sfingter aditus laringis dan glotis, fonasi (modulasi aliran udara untuk produksi suara bicara oleh plica vocalis), serta fiksasi tekanan intratorakal pada manuver Valsalva. Rangka laring dibentuk oleh 9 kartilago: 3 kartilago tunggal (Cartilago thyroidea, Cartilago cricoidea, Epiglottis) dan 3 pasang kartilago genap (Cartilago arytenoidea, Cartilago corniculata, Cartilago cuneiformis).',
    arteri: 'Arteria laryngea superior (cabang dari Arteria thyroidea superior dari sistem A. carotis externa, menembus membrana thyrohyoidea bersama ramus internus N. laryngeus superior) dan Arteria laryngea inferior (cabang dari Arteria thyroidea inferior dari truncus thyrocervicalis).',
    vena: 'Vena laryngea superior (bermuara ke Vena thyroidea superior -> Vena jugularis interna) dan Vena laryngea inferior (bermuara ke Vena thyroidea inferior -> Vena brachiocephalica sinistra).',
    inervasi: 'Seluruh inervasi laring berasal dari cabang Nervus vagus (CN X): 1) Nervus laryngeus superior terbagi menjadi Ramus internus (serabut sensorik murni untuk mukosa laring supraglotis di atas plica vocalis) dan Ramus externus (motorik khusus untuk M. cricothyroideus yang menegangkan pita suara); 2) Nervus laryngeus recurrens (motorik untuk SELURUH otot intrinsik laring lainnya dan sensorik untuk mukosa subglotis di bawah plica vocalis).',
    limfatik: 'Regio supraglotis (di atas rima glottidis) mengalir menembus membrana thyrohyoidea menuju Nodi lymphatici cervicales profundi superiores (rantai jugularis interna); Regio subglotis mengalir ke Nodi lymphatici prelaryngeales (Delphian node), pretracheales, dan paratracheales.',
    korelasiKlinis: 'Laringitis akut (inflamasi kataral dengan afonia/suara parau); Krup / Laringotrakeobronkitis akut pada anak (infeksi parainfluenza memicu batuk menggonggong "barking cough" dan stridor inspiratoar dengan gambaran radiologis steeple sign); Angioedema laring anafilaktik (pembengkakan cepat jaringan submukosa longgar supraglotis yang memicu asfiksia total dalam hitungan menit); Karsinoma Laring sel skuamosa; Paresis/paralisis pita suara iatrogenik akibat cedera Nervus laryngeus recurrens saat operasi tiroidektomi.'
  },
  'cartilago thyroidea': {
    type: 'organ',
    nameLatin: 'Cartilago Thyroidea',
    nameId: 'Tulang Rawan Tiroid / Jakun',
    deskripsi: 'Tulang rawan hialin terbesar yang menyusun dinding anterior dan lateral laring. Terdiri atas dua lempeng lamina lateral quadrangularis yang berfusi di garis tengah anterior membentuk Prominentia Laryngea ("jakun" / Adam\'s apple, bersudut ~90° pada pria dewasa dan ~120° pada wanita). Tepi superior lamina membentuk Incisura thyroidea superior berbentuk huruf V. Tepi posterior tiap lamina memanjang ke kranial sebagai Cornu superius (berhubungan dengan os hyoideum via ligamentum thyrohyoideum laterale) dan ke kaudal sebagai Cornu inferius (berartikulasi dengan cartilago cricoidea membentuk articulatio cricothyroidea sinovial).',
    arteri: 'Arteria laryngea superior dan Ramus cricothyroideus dari Arteria thyroidea superior.',
    vena: 'Vena laryngea superior yang bermuara ke Vena thyroidea superior.',
    inervasi: 'Ramus externus nervi laryngei superioris dan cabang simpatis servikalis.',
    limfatik: 'Nodi lymphatici cervicales profundi dan prelaryngeales.',
    korelasiKlinis: 'Fraktur kartilago tiroid akibat trauma tumpul kompresi leher (benturan kemudi mobil, pencekikan, atau pukulan bela diri) menyebabkan hematoma intralaringeal, obstruksi jalan napas akut, hilangnya krepitus laring normal saat digerakkan melintang (loss of laryngeal click), dan emfisema subkutan servikalis.'
  },
  'cartilago cricoidea': {
    type: 'organ',
    nameLatin: 'Cartilago Cricoidea',
    nameId: 'Tulang Rawan Krikoid',
    deskripsi: 'Tulang rawan hialin tebal berbentuk cincin stempel (signet ring) yang terletak tepat di kaudal cartilago thyroidea setinggi corpus vertebra servikalis C6. Merupakan satu-satunya tulang rawan pada seluruh lintasan pohon respirasi yang membentuk cincin melingkar utuh dan rigid 360 derajat tanpa defek membran. Terdiri atas Lamina posterior yang tinggi dan lebar di bagian belakang serta Arcus anterior yang sempit dan melengkung di bagian depan. Menandai batas anatomis penting transisi antara laring dengan trakea serta faring dengan esofagus.',
    arteri: 'Ramus cricothyroideus dari Arteria thyroidea superior dan cabang-cabang halus dari Arteria thyroidea inferior.',
    vena: 'Plexus venosus laryngeus inferior dan Vena thyroidea inferior.',
    inervasi: 'Nervus laryngeus recurrens (berjalan tepat di posterior articulatio cricothyroidea di celah antara trakea dan esofagus saat hendak menembus masuk ke laring).',
    limfatik: 'Nodi lymphatici prelaryngeales (Delphian node) di atas membrana cricothyroidea dan Nodi paratracheales.',
    korelasiKlinis: 'Penekanan kartilago krikoid ke posterior ke arah korpus vertebra C6 (Manuver Sellick / Cricoid Pressure) digunakan saat intubasi cepat anestesi (RSI) untuk mengoklusi lumen esofagus dan mencegah regurgitasi cairan lambung ke paru; Ligamentum cricothyroideum (conus elasticus) di antara arcus kartilago krikoid dan lamina kartilago tiroid merupakan lokasi tindakan darurat Krikotiroidotomi (Surgical/Needle Cricothyroidotomy) saat skenario henti napas darurat "cannot intubate, cannot ventilate" karena relatif bebas dari pembuluh darah besar.'
  },
  'epiglottis': {
    type: 'organ',
    nameLatin: 'Epiglottis',
    nameId: 'Epiglotis',
    deskripsi: 'Katup tulang rawan fibroelastis berbentuk daun tipis dan lentur yang menonjol oblik ke atas di posterior pangkal lidah (radix linguae) dan os hyoideum. Pangkal tangkainya (Petiolus epiglottidis) melekat pada sudut dalam lamina tiroid melalui Ligamentum thyroepiglotticum, sedangkan permukaan anteriornya dihubungkan dengan korpus os hyoideum via Ligamentum hyoepiglotticum. Berperan krusial sebagai katup protektif otomatis: selama proses menelan makanan/minuman, kontraksi otot suprahyoid mengangkat laring ke anterosuperior sehingga petiolus dan daun epiglotis terdorong ke posterior menutupi aditus laringis, mengarahkan bolus meluncur ke lateral melalui sinus piriformis menuju esofagus.',
    arteri: 'Rami epiglottici dari Arteria laryngea superior dan rami dorsales linguae dari Arteria lingualis.',
    vena: 'Vena laryngea superior yang bermuara ke Vena jugularis interna.',
    inervasi: 'Ramus internus nervi laryngei superioris (cabang N. vagus, CN X) menyediakan persarafan sensorik umum mukosa epiglotis dan serabut pengecap khusus (taste buds) pada permukaan posterior/laringeal.',
    limfatik: 'Nodi lymphatici cervicales profundi superiores.',
    korelasiKlinis: 'Epiglotitis Akut (infeksi invasif fulminan yang mengancam jiwa, secara historis disebabkan oleh Haemophilus influenzae tipe b [Hib] atau Streptococcus pyogenes) dengan tanda klinis khas: demam tinggi, odinofagia berat, disfagia, drooling (liur menetes), stridor inspiratoar, posisi "tripod", dan gambaran klasik "thumbprint sign" pada foto rontgen lateral leher; pemeriksaan visual laring langsung dengan spatula lidah dilarang keras tanpa kesiapan jalan napas bedah karena dapat memicu laringospasme fatal mendadak.'
  },
  'plica vocalis': {
    type: 'organ',
    nameLatin: 'Plica Vocalis',
    nameId: 'Pita Suara Asli (True Vocal Fold)',
    deskripsi: 'Sepasang lipatan mukosa elastis avaskular berwarna putih mutiara mengilap yang membentang horisontal di dalam kavitas laring dari angulus internus cartilago thyroidea ke processus vocalis cartilago arytenoidea. Struktur intinya terdiri dari Ligamentum vocale (tepi bebas kranial yang menebal dari conus elasticus) dan Musculus vocalis (serabut otot lurik terdalam dari M. thyroarytenoideus). Celah di antara kedua tepi bebas plica vocalis disebut Rima Glottidis (bagian tersempit saluran napas laring pada orang dewasa). Getaran tepi bebas plica vocalis oleh aliran udara ekspirasi menghasilkan gelombang suara dasar fonasi yang kemudian dimodulasi oleh ruang resonansi faring, cavitas oris, dan bibir.',
    arteri: 'Mikroanastomosis batas avaskular antara Arteria laryngea superior dan Arteria laryngea inferior.',
    vena: 'Vena laryngea superior dan inferior.',
    inervasi: 'Motorik: Nervus laryngeus recurrens (CN X) mempersarafi Musculus vocalis dan seluruh otot adduktor/abduktor pita suara, kecuali Musculus cricothyroideus yang dipersarafi oleh Ramus externus nervi laryngei superioris (berperan meregangkan dan menegangkan pita suara untuk menghasilkan nada tinggi); Sensorik: Ramus internus N. laryngeus superior (permukaan superior) dan N. laryngeus recurrens (permukaan inferior).',
    limfatik: 'Ruang subepitel Reinke (lamina propria superfisial) praktis tidak memiliki saluran limfatik; batas drainase limfe terbagi tegas antara supraglotis dan subglotis.',
    korelasiKlinis: 'Nodul Pita Suara ("Singer\'s nodules": penebalan jinak bilateral pada perbatasan sepertiga anterior dan dua pertiga posterior akibat trauma fonasi dan hiperfungsi vokal); Polip Pita Suara unilateral; Edema Reinke (akumulasi cairan gelatinosa kronis pada lamina propria superfisial akibat pajanan asap rokok berkepanjangan menghasilkan suara berat parau); Karsinoma Sel Skuamosa Glotis; Kelumpuhan pita suara bilateral pada posisi paramedian pasca cedera n. laryngeus recurrens bilateral menyebabkan dispnea stridor berat dan memerlukan trakeostomi darurat.'
  },
  'pita suara': {
    type: 'organ',
    nameLatin: 'Plica Vocalis',
    nameId: 'Pita Suara Asli (True Vocal Fold)',
    deskripsi: 'Sepasang lipatan mukosa elastis avaskular berwarna putih mutiara mengilap yang membentang horisontal di dalam kavitas laring dari angulus internus cartilago thyroidea ke processus vocalis cartilago arytenoidea. Struktur intinya terdiri dari Ligamentum vocale (tepi bebas kranial yang menebal dari conus elasticus) dan Musculus vocalis (serabut otot lurik terdalam dari M. thyroarytenoideus). Celah di antara kedua tepi bebas plica vocalis disebut Rima Glottidis (bagian tersempit saluran napas laring pada orang dewasa). Getaran tepi bebas plica vocalis oleh aliran udara ekspirasi menghasilkan gelombang suara dasar fonasi yang kemudian dimodulasi oleh ruang resonansi faring, cavitas oris, dan bibir.',
    arteri: 'Mikroanastomosis batas avaskular antara Arteria laryngea superior dan Arteria laryngea inferior.',
    vena: 'Vena laryngea superior dan inferior.',
    inervasi: 'Motorik: Nervus laryngeus recurrens (CN X) mempersarafi Musculus vocalis dan seluruh otot adduktor/abduktor pita suara, kecuali Musculus cricothyroideus yang dipersarafi oleh Ramus externus nervi laryngei superioris (berperan meregangkan dan menegangkan pita suara untuk menghasilkan nada tinggi); Sensorik: Ramus internus N. laryngeus superior (permukaan superior) dan N. laryngeus recurrens (permukaan inferior).',
    limfatik: 'Ruang subepitel Reinke (lamina propria superfisial) praktis tidak memiliki saluran limfatik; batas drainase limfe terbagi tegas antara supraglotis dan subglotis.',
    korelasiKlinis: 'Nodul Pita Suara ("Singer\'s nodules": penebalan jinak bilateral pada perbatasan sepertiga anterior dan dua pertiga posterior akibat trauma fonasi dan hiperfungsi vokal); Polip Pita Suara unilateral; Edema Reinke (akumulasi cairan gelatinosa kronis pada lamina propria superfisial akibat pajanan asap rokok berkepanjangan menghasilkan suara berat parau); Karsinoma Sel Skuamosa Glotis; Kelumpuhan pita suara bilateral pada posisi paramedian pasca cedera n. laryngeus recurrens bilateral menyebabkan dispnea stridor berat dan memerlukan trakeostomi darurat.'
  },

  // ==========================================
  // PLEURA DAN KAVITAS PLEURALIS
  // ==========================================
  'pleura parietalis': {
    type: 'organ',
    nameLatin: 'Pleura Parietalis',
    nameId: 'Pleura Parietal',
    deskripsi: 'Lapisan serosa luar yang membungkus dinding cavitas thoracis bagian dalam, membatasi mediastinum, dan menutupi facies superior diafragma. Terbagi secara topografis menjadi 4 kompartemen berkesinambungan: 1) Pleura Costalis (melapisi permukaan dalam sternum, costae, spatium intercostale, dan musculus transversus thoracis), 2) Pleura Diaphragmatica (melapisi kubah atas diafragma kecuali centrum tendineum), 3) Pleura Mediastinalis (membungkus lateral kompartemen mediastinum), dan 4) Cupula Pleurae / Pleura Cervicalis (kubah pleura yang menonjol ke apeks leher melalui apertura thoracis superior diperkuat oleh membran suprapleural / fascia Sibson).',
    arteri: 'Arteriae intercostales posteriores (cabang aorta), Arteria thoracica interna (mammaria interna), dan Arteriae phrenicae superiores et musculophrenicae.',
    vena: 'Venae intercostales yang bermuara ke sistem Vena azygos, Vena hemiazygos, dan Vena thoracica interna.',
    inervasi: 'Menerima inervasi somatosensorik bermielin tebal yang sangat sensitif terhadap rangsang nyeri tajam terlokalisir: Pleura costalis dan bagian perifer pleura diafragmatika dipersarafi oleh Nervi intercostales (nyeri dirasakan tepat pada dermatom dinding dada terkait); Pleura mediastinalis dan bagian sentral pleura diafragmatika dipersarafi oleh serabut somatik Nervus phrenicus (radiks C3-C5), sehingga iritasi di area ini menimbulkan nyeri alih (referred pain) ke pundak dan pangkal leher (dermatom C3-C5).',
    limfatik: 'Mengalir langsung ke nodi lymphatici dinding dada: Nodi intercostales, Nodi parasternales (mammaria interna), dan Nodi phrenici.',
    korelasiKlinis: 'Pleuritis / Pleurisi (inflamasi pleura dengan friction rub dan keluhan nyeri dada pleuritik tajam menusuk yang diperberat oleh inspirasi dalam atau batuk); Mesotelioma Maligna (keganasan agresif sel mesotelial pleura parietalis yang berkorelasi kuat dengan pajanan debu asbes industri); Plak pleura fibrokalsifikasi.'
  },
  'pleura visceralis': {
    type: 'organ',
    nameLatin: 'Pleura Visceralis (Pleura Pulmonalis)',
    nameId: 'Pleura Viseral',
    deskripsi: 'Lapisan serosa tipis, transparan, dan licin yang melekat kuat secara tak terpisahkan pada seluruh permukaan luar parenkim paru, meluas masuk jauh ke dalam dasar fissura interlobaris (fissura obliqua dan horizontalis). Pada hilum paru (radix pulmonis), pleura viseralis melipat ke luar membentuk refleksi peralihan menjadi pleura parietalis mediastinalis, serta menjulur ke kaudal di bawah hilum sebagai lipatan ganda vertikal yang disebut Ligamentum Pulmonale.',
    arteri: 'Disuplai oleh percabangan halus sirkulasi sistemik bertekanan tinggi dari Arteriae bronchiales.',
    vena: 'Bermuara langsung ke sistem kapiler dan Venae pulmonales yang mengalirkan darah ke atrium kiri.',
    inervasi: 'Diproyeksikan oleh serabut saraf otonom viseral melalui Plexus pulmonalis; tidak memiliki reseptor nosiseptif somatik sehingga sama sekali insensitif terhadap nyeri sayatan, suhu, atau tusukan jarum (nyeri pleura baru muncul jika patologi menginfiltrasi pleura parietalis).',
    limfatik: 'Pleksus limfatik superfisial subpleural yang menyusuri permukaan paru menuju Nodi lymphatici bronchopulmonales di hilum.',
    korelasiKlinis: 'Ruptur bleb subpleural apeks atau bula emfisematosa pada pleura viseralis menyebabkan Pneumothorax Spontan Primer (kebocoran mendadak udara alveolar ke dalam cavitas pleuralis pada pria muda jangkung kurus); Efusi pleura eksudatif maligna akibat metastasis tumor karsinoma ke permukaan pleura viseral.'
  },
  'cavitas pleuralis': {
    type: 'organ',
    nameLatin: 'Cavitas Pleuralis',
    nameId: 'Rongga Pleura',
    deskripsi: 'Ruang potensial tertutup hampa udara yang terletak di antara pleura viseralis dan pleura parietalis pada kedua hemitoraks (rongga pleura kanan dan kiri terpisah sempurna oleh septum mediastinum). Normalnya hanya berisi selapis tipis cairan serosa fisiologis (~10-20 mL atau 0.1-0.2 mL/kgBB) yang disekresi oleh kapiler pleura parietal. Cairan ini berfungsi sebagai pelumas yang meminimalkan gesekan antarpermukaan pleura saat siklus ventilasi, sekaligus menciptakan kohesi tegangan permukaan bertekanan subatmosfer/negatif (antara -3 hingga -8 cmH2O) yang mempertahankan paru tetap mengembang mengikuti pergerakan ekspansi sangkar toraks. Memiliki resesus penting: Recessus Costodiaphragmaticus (sudut tajam terbawah antara dinding dada dan diafragma) dan Recessus Costomediastinalis.',
    arteri: 'Ditentukan oleh keseimbangan mikrovaskular gradien tekanan hidrostatik dan onkotik kapiler pleura parietal (Hukum Starling).',
    vena: 'Reabsorpsi cairan pleura sebagian kecil melalui kapiler vena pleura viseralis dan parietal.',
    inervasi: 'Dibatasi oleh dinding pleura somatosensorik (N. intercostales & N. phrenicus).',
    limfatik: 'Jalur klirens cairan dan partikel protein utama melalui pembukaan pori mikroskopis khusus bernama Stomata Limfatik pada pleura parietalis diafragmatika dan costalis yang menyedot cairan ke kelenjar limfe mediastinum.',
    korelasiKlinis: 'Efusi Pleura (akumulasi cairan abnormal transudat pada gagal jantung/sirosis atau eksudat pada infeksi pneumonia/keganasan); Empiema Torakis (akumulasi pus nanah kental di rongga pleura); Hemothorax (darah di rongga pleura akibat ruptur pembuluh interkostal); Chylothorax (cairan kilus kaya kilomikron akibat cedera ductus thoracicus); Tension Pneumothorax (penumpukan udara bertekanan positif dengan fenomena katup satu arah "one-way valve" yang mendesak mediastinum ke kontralateral, menekan vena cava, dan memicu henti sirkulasi obstruktif mendadak, membutuhkan dekompresi jarum segera / needle thoracostomy pada sela iga ke-2 linea midklavikularis atau sela iga ke-4/5 linea aksilaris anterior dilanjutkan pemasangan Chest Tube / WSD).'
  },

  // ==========================================
  // FARING DAN KOMPARTEMENNYA
  // ==========================================
  'pharynx': {
    type: 'organ',
    nameLatin: 'Pharynx',
    nameId: 'Faring / Tekak',
    deskripsi: 'Saluran fibromuskular berbentuk cerobong setengah tabung sepanjang 12-14 cm yang terletak di garis tengah posterior terhadap cavitas nasi, cavitas oris, dan larynx, membentang dari basis cranii (pars basilaris ossis occipitalis) hingga setinggi batas bawah kartilago cricoidea (vertebra C6) di mana lumennya berlanjut menjadi esofagus. Berfungsi krusial sebagai persimpangan anatomis saluran respirasi (konduksi udara inspirasi-ekspirasi) dan sistem digestivus (mendorong bolus makanan saat fase faringeal menelan). Terbagi secara struktural menjadi 3 regio: Nasopharynx, Oropharynx, dan Laryngopharynx (Hypopharynx). Dinding muskularnya dibentuk oleh 3 otot konstriktor sirkular (M. constrictor pharyngis superior, medius, inferior) dan 3 otot longitudinal internal (M. stylopharyngeus, salpingopharyngeus, palatopharyngeus).',
    arteri: 'Arteria pharyngea ascendens (cabang sistem A. carotis externa), Rami tonsillares dan Arteria palatina ascendens (cabang A. facialis), Rami pharyngeales dari Arteria maxillaris, serta cabang Arteria lingualis.',
    vena: 'Plexus venosus pharyngeus pada permukaan luar dinding faring yang bermuara ke Vena jugularis interna.',
    inervasi: 'Plexus pharyngeus pada fascia buccopharyngea: Serabut motorik untuk seluruh otot faring disuplai oleh Nervus vagus (CN X via ramus pharyngeus), KECUALI Musculus stylopharyngeus yang dipersarafi secara khusus oleh Nervus glossopharyngeus (CN IX). Persarafan sensorik mukosa terdistribusi regional: nasofaring oleh CN V2, orofaring oleh CN IX (memediasi lengan aferen refleks muntah / gag reflex), dan laringofaring oleh CN X.',
    limfatik: 'Tersusun membentuk cincin jaringan limfoid protektif Cincin Waldeyer (Tonsilla pharyngealis, Tonsilla tubaria, Tonsilla palatina, dan Tonsilla lingualis) yang mengalirkan limfe ke Nodi lymphatici retropharyngeales dan Nodi cervicales profundi.',
    korelasiKlinis: 'Faringitis Akut (infeksi virus respirasi atau Streptococcus beta-hemolyticus grup A yang berisiko demam reumatik); Abses Retrofaringeal (penumpukan nanah di spatium retrofaryngeum yang dapat meluas ke mediastinum posterior menyebabkan mediastinitis fatal); Obstructive Sleep Apnea (OSA: kolapsnya tonus otot-otot dinding faring saat tidur memicu episode hipopnea/apnea berulang); Disfagia transfer orofaringeal.'
  },
  'nasopharynx': {
    type: 'organ',
    nameLatin: 'Nasopharynx',
    nameId: 'Nasofaring',
    deskripsi: 'Kompartemen paling superior dari faring yang terletak tepat di belakang cavitas nasi dan di atas palatum molle, membentang dari basis cranii hingga bidang datar posterior uvula palatina. Bersifat murni respiratorik (tidak pernah dilewati bolus makanan) dan dilapisi oleh epitel kolumnar pseudokompleks bersilia dengan sel goblet. Struktur anatomis khas pada dindingnya meliputi: Tonsilla Pharyngealis / Adenoid pada atap fornix dinding posterior; Ostium Pharyngeum Tubae Auditivae (muara saluran tuba Eustachius yang menghubungkan nasofaring dengan telinga tengah) pada dinding lateral; Torus Tubarius (tonjolan tulang rawan tuba); dan Recessus Pharyngeus (Fossa Rosenmüller) yang merupakan cekungan dalam di posterior torus tubarius.',
    arteri: 'Arteria pharyngea ascendens, Ramus pharyngeus dari Arteria maxillaris, dan Arteria canalis pterygoidei.',
    vena: 'Plexus venosus pharyngeus yang berkomunikasi dengan plexus venosus pterygoideus dan bermuara ke Vena jugularis interna.',
    inervasi: 'Nervus pharyngeus dari Ganglion pterygopalatinum yang membawa serabut sensorik dari divisi maxillaris Nervus trigeminus (CN V2).',
    limfatik: 'Nodi lymphatici retropharyngeales (termasuk nodus Rouviere) dan rantai Nodi cervicales profundi superiores.',
    korelasiKlinis: 'Karsinoma Nasofaring (NPC: tumor ganas epitelial yang sangat endemik di Asia Tenggara, berkaitan erat dengan onkogenesis infeksi virus Epstein-Barr [EBV] dan konsumsi nitrosamin, dengan predileksi tersering timbul di Fossa Rosenmüller; gejala trias klasik meliputi epistaksis berulang, tinnitus/otitis media unilateral, dan pembesaran limfonodi leher kolum); Hipertrofi Adenoid pada anak-anak yang memicu obstruksi nasal kronis, pernapasan mulut terus-menerus, deformitas wajah "facies adenoid", dan otitis media efusi berulang akibat disfungsi tuba Eustachius.'
  },
  'oropharynx': {
    type: 'organ',
    nameLatin: 'Oropharynx',
    nameId: 'Orofaring',
    deskripsi: 'Kompartemen tengah faring yang terletak di posterior cavitas oris, membentang dari tepi bebas palatum molle hingga tepi superior epiglottis (setinggi vertebra C2-C3). Menjalankan fungsi ganda saluran udara dan jalur digestivus makanan, sehingga dilapisi oleh epitel skuamosa berlapis tanpa keratin (non-keratinized stratified squamous epithelium) yang tahan terhadap abrasi bolus. Memuat struktur penting: Isthmus faucium, Radix linguae (sepertiga posterior lidah) dengan Tonsilla Lingualis, Vallecula Epiglottica (cekungan di antara plica glossoepiglottica mediana dan lateralis), serta Fossa Tonsillaris di dinding lateral di antara Arcus Palatoglossus dan Arcus Palatopharyngeus yang menampung Tonsilla Palatina (amandel).',
    arteri: 'Arteria facialis (melalui Ramus tonsillaris dan Arteria palatina ascendens), Arteria lingualis, Arteria pharyngea ascendens, dan Arteria palatina descendens.',
    vena: 'Vena lingualis dan plexus pharyngeus menuju Vena jugularis interna.',
    inervasi: 'Sensorik mukosa dipersarafi oleh Nervus glossopharyngeus (CN IX, yang memediasi lengan aferen stimulasi refleks muntah / gag reflex); Serabut motorik otot konstriktor berasal dari ramus pharyngeus Nervus vagus (CN X).',
    limfatik: 'Nodi lymphatici jugulodigastrici (kelenjar limfe Wood di bawah angulus mandibulae) dari kelompok cervicales profundi superiores.',
    korelasiKlinis: 'Tonsilitis Akut bakterial (eksudat folikular purulen pada kripta tonsil); Abses Peritonsilar (Quinsy: komplikasi supuratif pembentukan abses di spatium peritonsilar antara kapsul tonsil dan m. constrictor yang menyebabkan trismus hebat, suara "hot potato voice", dan deviasi uvula ke sisi kontralateral sehat); Karsinoma Sel Skuamosa Orofaring (kini meningkat drastis akibat infeksi Human Papillomavirus / HPV onkogenik strain 16 dan 18 pada tonsil dan pangkal lidah).'
  },
  'laryngopharynx': {
    type: 'organ',
    nameLatin: 'Laryngopharynx (Hypopharynx)',
    nameId: 'Laringofaring / Hipofaring',
    deskripsi: 'Kompartemen faring paling kaudal yang terletak di belakang laring, membentang dari tepi superior epiglottis hingga batas inferior kartilago cricoidea (setinggi vertebra servikalis C6), di mana lumennya menyempit dan bertransisi menjadi esofagus servikalis. Di sebelah anterolateral aditus laringis terdapat dua saluran alur resesus bilateral yang disebut Recessus Piriformis (Fossa Piriformis) yang berfungsi menyalurkan bolus cairan dan makanan di kedua sisi laring menuju ke sfingter esofagus atas (M. cricopharyngeus).',
    arteri: 'Arteria laryngea superior, Arteria pharyngea ascendens, dan rami pharyngeales dari Arteria thyroidea inferior.',
    vena: 'Plexus venosus pharyngeus menuju Vena jugularis interna.',
    inervasi: 'Plexus pharyngeus (serabut vagal motorik CN X) dan Nervus laryngeus internus (cabang N. vagus) yang melintasi submukosa dasar recessus piriformis.',
    limfatik: 'Nodi lymphatici cervicales profundi medii et inferiores (sepanjang vena jugularis interna).',
    korelasiKlinis: 'Corpus alienum jalan cerna (seperti duri ikan atau serpihan tulang) paling sering tersangkut di Recessus Piriformis; ekstraksi endoskopi yang tidak hati-hati berisiko merobek mukosa dan merusak Nervus laryngeus internus di dasar fosa, menyebabkan anestesi supraglotis dan hilangnya sensasi refleks batuk protektif; Divertikulum Zenker (pulsion diverticulum melalui defek anatomis Trigonum Killian di antara serabut oblik M. thyropharyngeus dan serabut sirkular M. cricopharyngeus); Karsinoma Hipofaring (sering terdiagnosis terlambat pada stadium lanjut).'
  },

  // ==========================================
  // RONGGA HIDUNG DAN SINUS PARANASAL
  // ==========================================
  'cavitas nasi': {
    type: 'organ',
    nameLatin: 'Cavitas Nasi',
    nameId: 'Rongga Hidung',
    deskripsi: 'Rongga saluran napas paling proksimal yang membentang dari nares anteriores di depan hingga choanae di posterior yang membuka ke nasofaring. Dibagi dua oleh Septum Nasi di garis tengah (tersusun atas Cartilago septi nasi di anterior, Lamina perpendicularis ossis ethmoidalis di posterosuperior, dan Vomer di posteroinferior). Dinding lateralnya memiliki 3 tonjolan tulang konka berlekuk yang dilapisi mukosa vaskular erektil: Concha Nasalis Superior, Concha Nasalis Media, dan Concha Nasalis Inferior (tulang independen), yang membagi lumen menjadi Meatus Nasi Superior, Medius, dan Inferior. Berfungsi membersihkan udara melalui silia dan mukus, menghangatkan udara melalui pleksus venosus konka, melembapkan udara (humidifikasi 100% uap air), serta olfaksi (penciuman) melalui epitel olfaktorius di atap rongga hidung.',
    arteri: 'Anastomosis kaya antara sistem A. carotis interna dan externa: Arteria sphenopalatina dan Arteria palatina major (cabang A. maxillaris), Arteria labialis superior (cabang A. facialis), serta Arteria ethmoidalis anterior dan Arteria ethmoidalis posterior (cabang A. ophthalmica dari ICA). Pada septum anterior-inferior terdapat anyaman vaskular Plexus Kiesselbach (Little\'s area). Pada dinding posterolateral bawah terdapat Plexus Woodruff.',
    vena: 'Vena sphenopalatina bermuara ke plexus venosus pterygoideus; Venae ethmoidales bermuara ke Vena ophthalmica superior (yang berhubungan langsung dengan Sinus Cavernosus di intrakranial); Vena labialis superior mengalir ke Vena facialis.',
    inervasi: 'Olfaktori khusus: Nervus olfactorius (CN I) yang aksonnya menembus lamina cribrosa ethmoidalis; Sensorik somatik: Nervus ethmoidalis anterior (cabang CN V1) mempersarafi regio anterosuperior, sedangkan rami nasales posteriores dan Nervus nasopalatinus (cabang Ganglion pterygopalatinum / CN V2) mempersarafi regio posterior dan septum; Inervasi sekretomotor parasimpatis glandula mukosa via Nervus petrosus major (CN VII).',
    limfatik: 'Regio anterior cavitas nasi dialirkan ke Nodi lymphatici submandibulares; Regio posterior dialirkan ke Nodi lymphatici retropharyngeales dan Nodi cervicales profundi superiores.',
    korelasiKlinis: 'Epistaksis Anterior (paling lazim, perdarahan berasal dari Plexus Kiesselbach pada Little\'s area akibat trauma mekanik mengorek hidung atau udara kering); Epistaksis Posterior (perdarahan arteri masif dari Arteria sphenopalatina / Plexus Woodruff pada lansia hipertensif yang membutuhkan tampon Bellocq atau ligasi endoskopi); Rinitis Alergika (inflamasi diperantarai IgE dengan konka edematosa pucat dan rinorea serosa); Deviasi Septum Nasi obstruktif; Trombosis Sinus Kavernosus akibat penyebaran infeksi furunkel hidung di "danger area of the face" melalui vena angularis dan vena oftalmika tanpa katup.'
  },
  'sinus paranasales': {
    type: 'organ',
    nameLatin: 'Sinus Paranasales',
    nameId: 'Sinus Paranasal',
    deskripsi: 'Empat pasang rongga pneumatis berisi udara di dalam tulang-tulang kraniofasial di sekeliling cavitas nasi: Sinus Frontalis (di os frontale), Sinus Maxillaris (di corpus maxillae, sinus terbesar), Sinus Sphenoidalis (di corpus ossis sphenoidalis), dan Sinus Ethmoidalis / Labirin Etmoid (di massa lateralis os ethmoidale). Seluruh sinus dilapisi oleh epitel kolumnar pseudokompleks bersilia yang tipis dan terus-menerus mengalirkan lapisan lendir mukus melalui ostium alamiahnya menuju cavitas nasi. Berfungsi meringankan bobot kerangka kranium, memberikan resonansi vokal pada pembentukan suara, memproduksi mukus pembersih berimunoglobulin, serta bertindak sebagai zona peredam kinetik benturan kranioservikal.',
    arteri: 'Cabang-cabang Arteria maxillaris, Arteria facialis, dan Arteria ophthalmica (Aa. ethmoidales anterior dan posterior).',
    vena: 'Drainase vena menuju Plexus pterygoideus, Vena facialis, dan Venae ophthalmicae.',
    inervasi: 'Cabang-cabang sensorik Nervus trigeminus: Sinus frontalis dan ethmoidalis anterior oleh Nervus ophthalmicus (CN V1); Sinus maxillaris oleh Nervus maxillaris (CN V2); Sinus sphenoidalis dan ethmoidalis posterior oleh cabang CN V1 dan CN V2.',
    limfatik: 'Nodi lymphatici submandibulares, retropharyngeales, dan cervicales profundi.',
    korelasiKlinis: 'Rhinosinusitis Akut dan Kronis (obstruksi kompleks osteomeatal memicu gangguan klirens mukosiliar, stasis sekret, dan superinfeksi bakteri Streptococcus pneumoniae / Haemophilus influenzae); Nyeri kepala sinus (sinus headache); Mukokel sinus; Komplikasi orbitalis selulitis/abses periorbita; Komplikasi intrakranial (abses epidural, meningitis purulenta, trombosis sinus venosus duraematris).'
  },
  'sinus frontalis': {
    type: 'organ',
    nameLatin: 'Sinus Frontalis',
    nameId: 'Sinus Frontal',
    deskripsi: 'Sepasang rongga udara berbentuk piramidal di dalam os frontale di posterior arcus superciliaris dan glabella dahi. Keduanya dipisahkan oleh septum intersinuale frontale yang tipis dan sering asimetris. Saluran drainasenya melintas ke inferior melalui Ductus Frontonasalis atau infundibulum ethmoidale untuk bermuara ke ujung anterior Hiatus Semilunaris di Meatus Nasi Medius.',
    arteri: 'Arteria supraorbitalis dan Arteria ethmoidalis anterior (cabang Arteria ophthalmica dari sistem A. carotis interna).',
    vena: 'Vena supraorbitalis dan Vena ophthalmica superior.',
    inervasi: 'Nervus supraorbitalis (cabang dari divisi ophthalmicus Nervus trigeminus, CN V1).',
    limfatik: 'Nodi lymphatici submandibulares.',
    korelasiKlinis: 'Sinusitis Frontalis Akut ditandai dengan nyeri kepala frontal berdenyut dan nyeri tekan hebat di atas alis mata yang memuncak saat pasien membungkuk ke depan; Erosi infeksius menembus dinding anterior memicu Pott\'s Puffy Tumor (osteomielitis tulang frontal dengan abses subperiosteal dahi yang berfluktuasi); Erosi dinding posterior dapat memicu abses lobus frontalis otak dan meningitis.'
  },
  'sinus maxillaris': {
    type: 'organ',
    nameLatin: 'Sinus Maxillaris (Antrum of Highmore)',
    nameId: 'Sinus Maksilaris (Antrum Highmore)',
    deskripsi: 'Sinus paranasal bervolume paling besar (rata-rata 15 mL) yang menempati hampir seluruh corpus maxillae. Berbentuk piramida dengan basis menghadap ke dinding lateral cavitas nasi, apeks mengarah lateral ke processus zygomaticus, atap membentuk dasar orbita, dan lantainya dibentuk oleh processus alveolaris maxillae yang berkontak sangat erat dengan apeks akar gigi molar 1, molar 2, dan premolar 2 atas. Ostium drainasenya terletak sangat tinggi pada dinding medial sinus dan membuka ke Hiatus Semilunaris di Meatus Nasi Medius, sehingga pengosongan lendir melawan gravitasi dan sangat bergantung pada transpor mukosiliar aktif.',
    arteri: 'Arteria alveolaris superior anterior, Arteria alveolaris superior posterior, dan Arteria infraorbitalis (percabangan dari Arteria maxillaris).',
    vena: 'Vena facialis anterior dan Plexus venosus pterygoideus.',
    inervasi: 'Nervi alveolares superiores (anterior, medius, posterior) dan Nervus infraorbitalis (seluruhnya cabang dari Nervus maxillaris, CN V2).',
    limfatik: 'Nodi lymphatici submandibulares.',
    korelasiKlinis: 'Sinusitis Maksilaris merupakan tipe sinusitis paling umum karena posisi ostium drainase yang tinggi pada dinding medial (drainase tidak spontan saat posisi tegak); Sinusitis Maksilaris Odontogenik (infeksi periapikal abses akar gigi rahang atas menembus lantai tipis sinus); Fraktur "Blowout" dasar orbita menyebabkan herniasi isi orbita ke dalam antrum maksilaris; Karsinoma Antrum Maksilaris menekan nervus infraorbitalis menimbulkan parestesia/kebas pada pipi dan bibir atas.'
  },
  'sinus sphenoidalis': {
    type: 'organ',
    nameLatin: 'Sinus Sphenoidalis',
    nameId: 'Sinus Sfenoid',
    deskripsi: 'Sepasang rongga udara yang terletak jauh di posterior di dalam corpus ossis sphenoidalis. Berada tepat di bawah Fossa Hypophysealis / Sella Turcica yang memuat kelenjar hipofisis kranium. Berbatasan sangat erat di lateral dengan Sinus Cavernosus, Arteria carotis interna, dan Nervus cranialis III, IV, V1, V2, VI; serta di superior dengan Chiasma Opticum dan Nervus opticus (CN II). Mengalirkan mukusnya ke anterior melalui apertura sinus sphenoidalis menuju ke Recessus Sphenoethmoidalis di atap cavitas nasi di atas concha nasalis superior.',
    arteri: 'Arteria ethmoidalis posterior (cabang A. ophthalmica) dan rami nasales posteriores dari Arteria sphenopalatina.',
    vena: 'Venae ethmoidales posteriores yang bermuara ke Sinus Cavernosus dan plexus venosus pterygoideus.',
    inervasi: 'Nervus ethmoidalis posterior (cabang CN V1) dan rami orbitales dari Ganglion pterygopalatinum (CN V2).',
    limfatik: 'Nodi lymphatici retropharyngeales.',
    korelasiKlinis: 'Sinusitis Sfenoidalis sering bermanifestasi tersamar berupa nyeri kepala tumpul yang dalam di puncak kepala (vertex) atau retro-orbita; Merupakan koridor bedah endoskopi minimal invasif terpenting (Transsphenoidal Hypophysectomy) untuk mengakses dan mengeksisi adenoma hipofisis melalui rongga hidung dan sinus sfenoid tanpa kraniotomi terbuka.'
  },
  'sinus ethmoidalis': {
    type: 'organ',
    nameLatin: 'Sinus Ethmoidalis (Cellulae Ethmoidales)',
    nameId: 'Sinus Etmoid (Sel-Sel Etmoid)',
    deskripsi: 'Kompleks labirin pneumatis yang terdiri atas 3 hingga 18 rongga udara berdinding tipis di dalam massa lateralis os ethmoidale, diapit di antara dinding lateral cavitas nasi dan dinding medial cavitas orbitalis (Lamina Papyracea yang setipis kertas). Terbagi secara fungsional menjadi 3 kelompok: 1) Cellulae ethmoidales anteriores (bermuara ke infundibulum ethmoidale di meatus nasi medius), 2) Cellulae ethmoidales mediae yang membentuk tonjolan Bulla Ethmoidalis (bermuara ke meatus medius), dan 3) Cellulae ethmoidales posteriores (bermuara ke meatus nasi superior).',
    arteri: 'Arteria ethmoidalis anterior dan Arteria ethmoidalis posterior (cabang dari Arteria ophthalmica).',
    vena: 'Vena ethmoidalis anterior dan posterior yang mengalir ke Vena ophthalmica dan plexus pterygoideus.',
    inervasi: 'Nervus ethmoidalis anterior dan posterior (cabang Nervus nasociliaris dari CN V1) serta rami nasales dari CN V2.',
    limfatik: 'Kelompok anterior dan media dialirkan ke Nodi submandibulares; Kelompok posterior dialirkan ke Nodi retropharyngeales.',
    korelasiKlinis: 'Etmoiditis Akut pada anak-anak dapat dengan mudah mengalami erosi menembus Lamina Papyracea yang sangat tipis menuju rongga mata, menimbulkan komplikasi berat berupa Selulitis Preseptal/Orbitalis, Abses Subperiosteal Orbita, kemosis, proptosis, hingga kebutaan kompresif N. optikus; Polip Nasi etmoidalis kronis yang menonjol ke meatus medius.'
  }
};
