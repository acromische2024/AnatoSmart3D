/**
 * Comprehensive Medical Anatomy Knowledge Base for AnatoSmart 3D
 * Contains clinical data: Origo, Insersio, Kinesiologi, Inervasi, Vaskularisasi, dan Korelasi Klinis.
 */

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
  // ==========================================
  // OTOT EKSTREMITAS ATAS (UPPER LIMB MUSCLES)
  // ==========================================
  'biceps': {
    type: 'muscle',
    nameLatin: 'Musculus Biceps Brachii',
    nameId: 'Otot Bisep Lengan Atas',
    origo: 'Caput longum: Tuberculum supraglenoidale scapulae & labrum glenoidale. Caput breve: Apex processus coracoideus scapulae.',
    insersio: 'Tuberositas radii dan Aponeurosis bicipitalis (lacertus fibrosus) ke fascia profunda antebrachii.',
    kinesiologi: 'Supinator kuat lengan bawah saat fleksi; Fleksor sendi siku (art. cubiti); Membantu fleksi lemah pada sendi bahu (art. humeri).',
    inervasi: 'Nervus musculocutaneus (radiks C5, C6).',
    vaskularisasi: 'Rami musculares dari Arteria brachialis.',
    korelasiKlinis: 'Ruptur tendo caput longum bicipitis ("Popeye deformity") dan uji refleks bisep untuk evaluasi integritas radiks servikal C5-C6.'
  },
  'triceps': {
    type: 'muscle',
    nameLatin: 'Musculus Triceps Brachii',
    nameId: 'Otot Trisep Lengan Atas',
    origo: 'Caput longum: Tuberculum infraglenoidale scapulae. Caput laterale: Permukaan posterior corpus humeri di atas sulcus n. radialis. Caput mediale: Permukaan posterior humerus di bawah sulcus n. radialis.',
    insersio: 'Permukaan posterior olecranon ulnae.',
    kinesiologi: 'Ekstensor utama sendi siku (art. cubiti); Caput longum membantu adduksi dan ekstensi sendi bahu.',
    inervasi: 'Nervus radialis (radiks C6, C7, C8).',
    vaskularisasi: 'Arteria profunda brachii dan rami collaterales dari Arteria brachialis.',
    korelasiKlinis: 'Refleks trisep mengevaluasi integritas radiks spinalis servikal C7.'
  },
  'deltoid': {
    type: 'muscle',
    nameLatin: 'Musculus Deltoideus',
    nameId: 'Otot Deltoid (Bahu)',
    origo: 'Pars clavicularis: 1/3 lateral clavicula. Pars acromialis: Acromion scapulae. Pars spinalis: Spina scapulae.',
    insersio: 'Tuberositas deltoidea pada pertengahan lateral corpus humeri.',
    kinesiologi: 'Pars acromialis: Abduksi lengan atas setelah 15° pertama (hingga 90° horizontal). Pars clavicularis: Fleksi dan endorotasi bahu. Pars spinalis: Ekstensi dan eksorotasi bahu.',
    inervasi: 'Nervus axillaris (radiks C5, C6).',
    vaskularisasi: 'Arteria circumflexa humeri posterior, Arteria circumflexa humeri anterior, dan ramus deltoideus dari Arteria thoracoacromialis.',
    korelasiKlinis: 'Cedera N. axillaris sering terjadi pada fraktur collum chirurgicum humeri atau dislokasi anterior sendi bahu, menyebabkan atrofi bahu.'
  },
  'pectoralis major': {
    type: 'muscle',
    nameLatin: 'Musculus Pectoralis Major',
    nameId: 'Otot Dada Besar',
    origo: 'Pars clavicularis: Permukaan anterior 1/2 medial clavicula. Pars sternocostalis: Manubrium dan corpus sterni, cartilago costalis I-VI.',
    insersio: 'Crista tuberculi majoris humeri (bibir lateral sulcus intertubercularis).',
    kinesiologi: 'Adduksi kuat dan rotasi medial (endorotasi) lengan atas; Pars clavicularis membantu fleksi lengan atas; Otot bantu inspirasi saat lengan terfiksasi.',
    inervasi: 'Nervus pectoralis medialis dan Nervus pectoralis lateralis (radiks C5, C6, C7, C8, T1).',
    vaskularisasi: 'Ramus pectoralis Arteria thoracoacromialis dan Arteria thoracica interna.',
    korelasiKlinis: 'Sering digunakan dalam rekonstruksi bedah flap miokutan.'
  },
  'latissimus dorsi': {
    type: 'muscle',
    nameLatin: 'Musculus Latissimus Dorsi',
    nameId: 'Otot Punggung Lebar',
    origo: 'Processus spinosus vertebra T7-T12, fascia thoracolumbalis, crista iliaca, costa IX-XII, dan angulus inferior scapulae.',
    insersio: 'Dasar sulcus intertubercularis humeri (antara M. pectoralis major dan M. teres major).',
    kinesiologi: 'Ekstensi, adduksi, dan rotasi medial (endorotasi) humerus pada sendi bahu; "Otot memanjat" (menarik tubuh ke atas).',
    inervasi: 'Nervus thoracodorsalis (radiks C6, C7, C8).',
    vaskularisasi: 'Arteria thoracodorsalis (cabang dari A. subscapularis).',
    korelasiKlinis: 'Pemeriksaan latissimus dorsi penting pada bedah rekonstruksi mammae (latissimus dorsi flap).'
  },
  'trapezius': {
    type: 'muscle',
    nameLatin: 'Musculus Trapezius',
    nameId: 'Otot Trapesius',
    origo: 'Linea nuchalis superior, protuberantia occipitalis externa, ligamentum nuchae, dan processus spinosus C7-T12.',
    insersio: '1/3 lateral clavicula, acromion, dan spina scapulae.',
    kinesiologi: 'Serabut superior: Elevasi scapula. Serabut medial: Retraksi (adduksi) scapula. Serabut inferior: Depresi scapula. Rotasi cavitas glenoidalis ke arah kranial saat abduksi lengan di atas 90°.',
    inervasi: 'Motorik: Nervus accessorius (Nervus Cranialis XI); Sensorik/Proprioseptif: Ramus anterior saraf spinal C3 dan C4.',
    vaskularisasi: 'Arteria transversa colli (cervicalis superficialis).',
    korelasiKlinis: 'Cedera N. accessorius menyebabkan kelemahan mengangkat bahu dan gambaran "winged scapula".'
  },
  'brachialis': {
    type: 'muscle',
    nameLatin: 'Musculus Brachialis',
    nameId: 'Otot Brakialis',
    origo: '1/2 distal permukaan anterior corpus humeri.',
    insersio: 'Processus coronoideus dan tuberositas ulnae.',
    kinesiologi: 'Fleksor murni sendi siku (art. cubiti) terkuat pada semua posisi lengan bawah (pronasi maupun supinasi).',
    inervasi: 'Nervus musculocutaneus (radiks C5, C6); sebagian kecil lateral oleh N. radialis (C7).',
    vaskularisasi: 'Arteria brachialis dan Arteria recurrens radialis.',
    korelasiKlinis: 'Workhorse fleksor siku utama tanpa terpengaruh rotasi pronasi/supinasi.'
  },

  // ==========================================
  // OTOT EKSTREMITAS BAWAH (LOWER LIMB MUSCLES)
  // ==========================================
  'rectus femoris': {
    type: 'muscle',
    nameLatin: 'Musculus Rectus Femoris (Komponen M. Quadriceps)',
    nameId: 'Otot Rektus Femoris (Paha Depan)',
    origo: 'Caput rectum: Spina iliaca anterior inferior (SIAI). Caput reflexum: Sulcus di atas tepi superior acetabulum.',
    insersio: 'Basis patellae melalui tendo quadriceps, lalu berlanjut via ligamentum patellae ke tuberositas tibiae.',
    kinesiologi: 'Ekstensi sendi lutut (art. genus) dan fleksi sendi panggul (art. coxae).',
    inervasi: 'Nervus femoralis (radiks L2, L3, L4).',
    vaskularisasi: 'Arteria circumflexa femoris lateralis dan Arteria profunda femoris.',
    korelasiKlinis: 'Penting dalam gerakan menendang (kicking muscle) dan uji refleks patela (L3-L4).'
  },
  'quadriceps': {
    type: 'muscle',
    nameLatin: 'Musculus Quadriceps Femoris',
    nameId: 'Otot Kuadrisep Femoris',
    origo: 'M. Rectus femoris (SIAI), M. Vastus lateralis (linea aspera lateral), M. Vastus medialis (linea aspera medial), M. Vastus intermedius (anterior femur).',
    insersio: 'Tuberositas tibiae melalui tendo quadriceps dan ligamentum patellae.',
    kinesiologi: 'Ekstensor utama tungkai bawah pada sendi lutut; Menstabilkan sendi lutut saat berjalan dan menuruni tangga.',
    inervasi: 'Nervus femoralis (radiks L2, L3, L4).',
    vaskularisasi: 'Arteria circumflexa femoris lateralis dan Arteria femoralis profunda.',
    korelasiKlinis: 'Refleks tendo patela (L3-L4) menguji jaras lengkung refleks medula spinalis.'
  },
  'biceps femoris': {
    type: 'muscle',
    nameLatin: 'Musculus Biceps Femoris (Hamstring)',
    nameId: 'Otot Bisep Femoris (Paha Belakang)',
    origo: 'Caput longum: Tuber ischiadicum. Caput breve: Labium laterale linea aspera dan crista supracondylaris lateralis femoris.',
    insersio: 'Caput fibulae sisi lateral dan condylus lateralis tibiae.',
    kinesiologi: 'Fleksi sendi lutut dan eksorotasi (rotasi lateral) tungkai bawah saat lutut semi-fleksi; Caput longum membantu ekstensi sendi panggul.',
    inervasi: 'Caput longum: Pars tibialis dari Nervus ischiadicus (L5, S1, S2); Caput breve: Pars fibularis/peroneus communis (L5, S1).',
    vaskularisasi: 'Rami perforantes Arteria profunda femoris dan Arteria poplitea.',
    korelasiKlinis: 'Cedera regangan hamstring (hamstring strain/pull) sangat lazim pada pelari cepat dan atlet sepak bola.'
  },
  'gastrocnemius': {
    type: 'muscle',
    nameLatin: 'Musculus Gastrocnemius',
    nameId: 'Otot Gastronemius (Betis)',
    origo: 'Caput mediale: Condylus medialis femoris (facies poplitea). Caput laterale: Condylus lateralis femoris.',
    insersio: 'Tuber calcanei melalui Tendo Calcaneus (Tendo Achilles).',
    kinesiologi: 'Plantar fleksi kuat pada pergelangan kaki (art. talocruralis); Membantu fleksi pada sendi lutut.',
    inervasi: 'Nervus tibialis (radiks S1, S2).',
    vaskularisasi: 'Arteriae surales dari Arteria poplitea dan Arteria tibialis posterior.',
    korelasiKlinis: 'Ruptur tendo Achilles didiagnosis dengan Thompson test (tes kompresi betis).'
  },
  'soleus': {
    type: 'muscle',
    nameLatin: 'Musculus Soleus',
    nameId: 'Otot Soleus',
    origo: 'Facies posterior caput fibulae, 1/4 proksimal corpus fibulae, linea musculi solei tibiae, dan arcus tendineus m. solei.',
    insersio: 'Tuber calcanei via Tendo Achilles bersama M. gastrocnemius.',
    kinesiologi: 'Plantar fleksi kaki saat berjalan; Pompa otot vena tungkai ("jantung perifer") untuk mencegah stasis vena.',
    inervasi: 'Nervus tibialis (radiks S1, S2).',
    vaskularisasi: 'Arteria poplitea, Arteria tibialis posterior, dan Arteria fibularis (peronea).',
    korelasiKlinis: 'Mencegah deep vein thrombosis (DVT) dengan memompa darah vena ke proksimal.'
  },
  'tibialis anterior': {
    type: 'muscle',
    nameLatin: 'Musculus Tibialis Anterior',
    nameId: 'Otot Tibialis Anterior',
    origo: 'Condylus lateralis tibiae dan 2/3 proksimal permukaan lateral corpus tibiae serta membrana interossea.',
    insersio: 'Permukaan medial dan plantar os cuneiforme mediale serta basis os metatarsale I.',
    kinesiologi: 'Dorsofleksi sendi pergelangan kaki dan inversi (supinasi) kaki.',
    inervasi: 'Nervus fibularis profundus (N. peroneus profundus, radiks L4, L5).',
    vaskularisasi: 'Arteria tibialis anterior.',
    korelasiKlinis: 'Lesi Nervus fibularis communis menyebabkan kelumpuhan otot ini, bermanifestasi klinis sebagai "Foot Drop" (steppage gait).'
  },
  'gluteus maximus': {
    type: 'muscle',
    nameLatin: 'Musculus Gluteus Maximus',
    nameId: 'Otot Gluteus Maksimus (Bokong)',
    origo: 'Facies glutea posterior ilium di belakang linea glutea posterior, fascia thoracolumbalis, facies dorsalis sacrum dan coccygis, ligamentum sacrotuberale.',
    insersio: 'Tractus iliotibialis (3/4 bagian atas) dan tuberositas glutea femoris (1/4 bagian bawah).',
    kinesiologi: 'Ekstensor terkuat sendi panggul (terutama saat bangkit dari duduk atau menaiki tangga); Eksorotasi panggul.',
    inervasi: 'Nervus gluteus inferior (radiks L5, S1, S2).',
    vaskularisasi: 'Arteria glutea superior dan Arteria glutea inferior.',
    korelasiKlinis: 'Situs injeksi intramuskular di kuadran superolateral (ventrogluteal) untuk menghindari cedera Nervus ischiadicus.'
  },

  // ==========================================
  // OTOT DINDING TUBUH & LEHER (TRUNK & NECK)
  // ==========================================
  'sternocleidomastoid': {
    type: 'muscle',
    nameLatin: 'Musculus Sternocleidomastoideus (SCM)',
    nameId: 'Otot Sternokleidomastoideus',
    origo: 'Caput sternale: Facies anterior manubrium sterni. Caput claviculare: 1/3 medial facies superior clavicula.',
    insersio: 'Processus mastoideus ossis temporalis dan 1/2 lateral linea nuchalis superior ossis occipitalis.',
    kinesiologi: 'Kontraksi unilateral: Laterofleksi kepala ke sisi ipsilateral dan rotasi wajah ke sisi kontralateral. Kontraksi bilateral: Fleksi leher; Otot bantu inspirasi paksa.',
    inervasi: 'Motorik: Nervus accessorius (CN XI); Sensorik/Propriosepsi: Plexus cervicalis (C2, C3).',
    vaskularisasi: 'Ramus sternocleidomastoideus dari Arteria occipitalis dan Arteria thyroidea superior.',
    korelasiKlinis: 'Spasme atau pemendekan kongenital menyebabkan tortikolis (wry neck).'
  },
  'diaphragm': {
    type: 'muscle',
    nameLatin: 'Diaphragma',
    nameId: 'Otot Diafragma',
    origo: 'Pars sternalis (processus xiphoideus), Pars costalis (cartilago costalis VII-XII), Pars lumbalis (crus dextrum et sinistrum serta ligamentum arcuatum).',
    insersio: 'Centrum tendineum (tendo sentralis diafragma).',
    kinesiologi: 'Otot inspirasi utama: berkontraksi mendatar ke arah kaudal, meningkatkan volume intratorakal dan menurunkan tekanan pleura.',
    inervasi: 'Motorik dan sebagian besar sensorik oleh Nervus phrenicus (radiks C3, C4, C5: "C3, 4, 5 keep the diaphragm alive").',
    vaskularisasi: 'Arteria pericardiacophrenica, Arteria musculophrenica, Arteriae phrenicae superiores et inferiores.',
    korelasiKlinis: 'Hernia diafragmatika (misal: hernia hiatus) dan singultus (cegukan akibat iritasi N. phrenicus).'
  },
  'rectus abdominis': {
    type: 'muscle',
    nameLatin: 'Musculus Rectus Abdominis',
    nameId: 'Otot Rektus Abdominis',
    origo: 'Crista pubica, tuberculum pubicum, dan symphysis pubica.',
    insersio: 'Cartilago costalis costa V, VI, VII dan processus xiphoideus.',
    kinesiologi: 'Fleksi columna vertebralis lumbalis; Kompresi visera abdomen untuk ekspirasi aktif, defekasi, miksi, dan partus.',
    inervasi: 'Rami anteriores nervorum spinalium thorasicorum distal (N. intercostalis VII-XI dan N. subcostalis T12).',
    vaskularisasi: 'Arteria epigastrica superior (cabang A. thoracica interna) dan Arteria epigastrica inferior (cabang A. iliaca externa).',
    korelasiKlinis: 'Dipisahkan di linea alba; pelemahan linea alba dapat menyebabkan diastasis recti atau hernia ventralis.'
  },

  // ==========================================
  // ORGAN VISERAL (VISCERAL ORGANS)
  // ==========================================
  'heart': {
    type: 'organ',
    nameLatin: 'Cor',
    nameId: 'Jantung',
    deskripsi: 'Organ berotot berongga yang berfungsi memompa darah ke seluruh tubuh melalui sirkulasi pulmonal (menuju paru) dan sirkulasi sistemik (menuju seluruh jaringan). Terdiri dari atrium dextrum, ventrikel dextrum, atrium sinistrum, dan ventrikel sinistrum.',
    arteri: 'Arteria coronaria dextra (RCA) dan Arteria coronaria sinistra (LCA, bercabang menjadi LAD dan LCx) yang berasal dari sinus aortae.',
    vena: 'Sinus coronarius (menampung V. cardiaca magna, V. cardiaca media, dan V. cardiaca parva) yang bermuara langsung ke atrium dextrum.',
    inervasi: 'Plexus cardiacus: Serabut simpatis dari truncus sympathicus segmen T1-T4 (meningkatkan frekuensi dan kontraktilitas); Parasimpatis dari Nervus vagus (CN X) (menurunkan frekuensi denyut); Nyeri alih viseral melalui dermatom T1-T4.',
    limfatik: 'Nodi lymphatici tracheobronchiales dan nodi mediastinales anteriores.',
    korelasiKlinis: 'Oklusi cabang arteri koronaria (terutama LAD - "widow maker") memicu Infark Miokard Akut (serangan jantung). Nyeri alih menjalar ke lengan kiri dan leher.'
  },
  'brain': {
    type: 'organ',
    nameLatin: 'Encephalon',
    nameId: 'Otak',
    deskripsi: 'Pusat integrasi sistem saraf pusat yang mengontrol fungsi motorik, kognisi, sensorik, otonom, dan kesadaran. Terdiri atas Cerebrum (telencephalon & diencephalon), Cerebellum, dan Truncus Encephali (mesencephalon, pons, medulla oblongata).',
    arteri: 'Sirkulus Arteriosus Willisi: Anastomosis antara sirkulasi anterior (Arteria carotis interna melalui A. cerebri anterior dan A. cerebri media) dan sirkulasi posterior (Arteria vertebralis membentuk A. basilaris dan A. cerebri posterior).',
    vena: 'Sinus duraematris (Sinus sagittalis superior, transversus, sigmoideus) yang bermuara ke Vena jugularis interna.',
    inervasi: 'Parenkim otak tidak memiliki nosiseptor somatik; Meningen diinervasi oleh cabang Nervus trigeminus (CN V) dan saraf servikal atas (C1-C3).',
    limfatik: 'Sistem glimfatik (drainase cairan serebrospinal ke nodus limfe servikalis profunda).',
    korelasiKlinis: 'Stroke iskemik vs hemoragik (terutama pada A. cerebri media); Peningkatan tekanan intrakranial (Trias Cushing).'
  },
  'liver': {
    type: 'organ',
    nameLatin: 'Hepar',
    nameId: 'Hati / Hepar',
    deskripsi: 'Kelenjar terbesar di tubuh di kuadran kanan atas abdomen (hipokondrium dextra). Berperan krusial dalam metabolisme karbohidrat, protein, lipid, produksi empedu, detoksifikasi racun, dan sintesis protein plasma.',
    arteri: 'Arteria hepatica propria (cabang Truncus coeliacus) menyuplai 20-25% darah kaya oksigen.',
    vena: 'Vena portae hepatis membawa 75-80% darah kaya nutrisi dari traktus gastrointestinal; Drainase vena hepatica (Vv. hepaticae) bermuara langsung ke Vena cava inferior (IVC).',
    inervasi: 'Plexus hepaticus (cabang dari Plexus coeliacus): serabut simpatis dari N. splanchnicus major dan parasimpatis dari Nervus vagus (CN X). Kapsula Glisson diinervasi N. phrenicus (nyeri alih ke bahu kanan).',
    limfatik: 'Nodi lymphatici hepatici sepanjang arteria hepatica menuju nodi lymphatici coeliaci.',
    korelasiKlinis: 'Sirosis hepatis menyebabkan hipertensi porta, varises esofagus, caput medusae, dan asites.'
  },
  'lung': {
    type: 'organ',
    nameLatin: 'Pulmo',
    nameId: 'Paru-Paru',
    deskripsi: 'Organ respirasi utama di cavitas thoracis. Pulmo dexter memiliki 3 lobus (superior, medius, inferior) dengan fisura horizontal dan oblik; Pulmo sinister memiliki 2 lobus dan incisura cardiaca.',
    arteri: 'Arteria pulmonalis (membawa darah terdeoksigenasi dari ventrikel kanan untuk difusi alveolus) dan Arteriae bronchiales (berasal dari aorta thoracica untuk nutrisi parenkim paru).',
    vena: 'Venae pulmonales (4 pembuluh, membawa darah beroksigen ke atrium kiri) dan Venae bronchiales (bermuara ke V. azygos dan V. hemiazygos).',
    inervasi: 'Plexus pulmonalis: Parasimpatis dari N. vagus (bronkokonstriksi, vasodilatasi, sekresi mukus); Simpatis dari truncus sympathicus T2-T5 (bronkodilatasi, vasokonstriksi).',
    limfatik: 'Nodi lymphatici bronchopulmonales (Hilar nodes) menuju nodi tracheobronchiales.',
    korelasiKlinis: 'Emboli paru (thromboembolism pulmonal), PPOK, asma bronkiale, dan karsinoma bronkogenik.'
  },
  'kidney': {
    type: 'organ',
    nameLatin: 'Ren',
    nameId: 'Ginjal',
    deskripsi: 'Organ retroperitoneal berbentuk kacang setinggi vertebra T12-L3. Memfilter plasma darah, meregulasi osmolaritas, volume cairan ekstraseluler, asam-basa, serta memproduksi hormon eritropoietin dan renin.',
    arteri: 'Arteria renalis dextra dan sinistra (cabang langsung Aorta abdominalis setinggi diskus L1-L2).',
    vena: 'Vena renalis dextra dan sinistra yang bermuara langsung ke Vena cava inferior (V. renalis sinistra lebih panjang dan melintasi aorta).',
    inervasi: 'Plexus renalis: Saraf simpatis dari N. splanchnicus minor dan ima (segmen T10-L1) untuk vasokonstriksi arteriol renalis; Sensorik nyeri alih ke dermatom T10-L1 (pinggang hingga selangkangan/groin).',
    limfatik: 'Nodi lymphatici lumbales (aortici laterales dan cavales laterales).',
    korelasiKlinis: 'Nefrolitiasis (batu ginjal) menimbulkan kolik renal yang menjalar dari pinggang ke skrotum/labium majus (sesuai dermatom T10-L1).'
  },
  'stomach': {
    type: 'organ',
    nameLatin: 'Gaster',
    nameId: 'Lambung',
    deskripsi: 'Bagian traktus digestivus yang berdilatasi di kuadran kiri atas abdomen antara esofagus dan duodenum. Berfungsi melakukan pencernaan mekanik (peristaltik) dan kimiawi (asam klorida [HCl] dan enzim pepsinogen).',
    arteri: 'Arteria gastrica sinistra (Truncus coeliacus), A. gastrica dextra (A. hepatica propria), A. gastroomentalis dextra (A. gastroduodenalis), A. gastroomentalis sinistra dan Aa. gastricae breves (A. splenica).',
    vena: 'Vena gastrica dextra et sinistra (bermuara ke V. portae), V. gastroomentalis sinistra dan breves (ke V. splenica), V. gastroomentalis dextra (ke V. mesenterica superior).',
    inervasi: 'Parasimpatis: Truncus vagalis anterior dan posterior dari Nervus vagus (meningkatkan motilitas dan sekresi HCl); Simpatis: Plexus coeliacus (T6-T9) menghambat motilitas.',
    limfatik: 'Nodi lymphatici gastrici dan nodi gastroomentales menuju nodi coeliaci.',
    korelasiKlinis: 'Ulkus peptikum (sering berkaitan dengan H. pylori atau NSAID) dan perdarahan saluran cerna atas (hematemesis/melena).'
  },
  'spleen': {
    type: 'organ',
    nameLatin: 'Lien / Splen',
    nameId: 'Limpa',
    deskripsi: 'Organ limfoid sekunder terbesar di hipokondrium kiri, terlindung oleh costa IX-XI. Berfungsi memfilter eritrosit senesen (tua), menyimpan trombosit, dan memfasilitasi respon imun seluler dan humoral.',
    arteri: 'Arteria splenica / lienalis (cabang terpanjang dan berliku-liku dari Truncus coeliacus).',
    vena: 'Vena splenica / lienalis (bergabung dengan V. mesenterica superior membentuk Vena portae hepatis).',
    inervasi: 'Plexus splenicus yang berasal dari Plexus coeliacus (inervasi vasomotor simpatis).',
    limfatik: 'Nodi lymphatici pancreaticosplenici menuju nodi coeliaci.',
    korelasiKlinis: 'Ruptur lienalis pada trauma tumpul abdomen (fraktur costa IX-XI kiri) menimbulkan hemoperitoneum masif (Tanda Kehr: nyeri alih bahu kiri).'
  },
  'pancreas': {
    type: 'organ',
    nameLatin: 'Pancreas',
    nameId: 'Pankreas',
    deskripsi: 'Kelenjar retroperitoneal memanjang melintang di dinding posterior abdomen. Memiliki fungsi eksokrin (asini memproduksi enzim amilase, lipase, tripsinogen ke duodenum) dan endokrin (pulau Langerhans menyekresi insulin dan glukagon).',
    arteri: 'Arteria pancreaticoduodenalis superior (cabang A. gastroduodenalis) dan A. pancreaticoduodenalis inferior (cabang SMA); Rami pancreatici dari Arteria splenica.',
    vena: 'Vena pancreaticoduodenalis bermuara ke V. mesenterica superior dan V. portae hepatis.',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) merangsang sekresi eksokrin; Simpatis: Plexus coeliacus dan mesentericus superior (T6-T10) mengontrol tonus vaskular.',
    limfatik: 'Nodi lymphatici pancreaticosplenici dan nodi mesenterici superiores.',
    korelasiKlinis: 'Pankreatitis akut (nyeri epigastrium tembus ke punggung) dan adenokarsinoma kaput pankreas (ikterus obstruktif tanpa nyeri / painless jaundice).'
  },
  'urinary bladder': {
    type: 'organ',
    nameLatin: 'Vesica Urinaria',
    nameId: 'Kandung Kemih / Vesika Urinaria',
    deskripsi: 'Organ berotot polos (M. detrusor) di dasar cavitas pelvis anterior. Berfungsi sebagai reservoir elastis penampung urine yang dialirkan dari kedua ren via ureter sebelum dikeluarkan melalui uretra.',
    arteri: 'Arteria vesicalis superior (cabang A. umbilicalis paten) dan Arteria vesicalis inferior (pada pria) atau A. vaginalis (pada wanita).',
    vena: 'Plexus venosus vesicalis yang bermuara ke Vena iliaca interna.',
    inervasi: 'Plexus vesicalis: Parasimpatis via Nervi splanchnici pelvici (S2-S4) memicu kontraksi M. detrusor dan relaksasi sfingter uretra interna (miksi); Simpatis via Plexus hypogastricus (T11-L2) untuk kontinensia urine.',
    limfatik: 'Nodi lymphatici iliaci interni dan externi.',
    korelasiKlinis: 'Retensi urine akut pada hiperplasia prostat jinak (BPH) dan inkontinensia urine akibat gangguan saraf otonom.'
  },
  'trachea': {
    type: 'organ',
    nameLatin: 'Trachea',
    nameId: 'Batang Tenggorok / Trakea',
    deskripsi: 'Tabung fibro-kartilaginosa sepanjang ~10-12 cm yang menghubungkan laring (setinggi C6) ke carina (bifurkasio setinggi T4-T5). Memiliki 16-20 cincin kartilago hialin berbentuk huruf "C" untuk menjaga kepatenan lumen jalan napas.',
    arteri: 'Rami tracheales dari Arteria thyroidea inferior (bagian servikal) dan Arteriae bronchiales (bagian torakal).',
    vena: 'Plexus venosus thyroideus inferior yang bermuara ke Vena brachiocephalica sinistra.',
    inervasi: 'Nervus laryngeus recurrens (cabang N. vagus) dan serabut simpatis dari truncus sympathicus.',
    limfatik: 'Nodi lymphatici pretracheales dan paratracheales.',
    korelasiKlinis: 'Lokasi trakeostomi pada cincin trakea ke-2 dan ke-3 pada kasus obstruksi jalan napas atas darurat.'
  },

  // ==========================================
  // TULANG UTAMA (MAJOR BONES)
  // ==========================================
  'femur': {
    type: 'bone',
    nameLatin: 'Os Femoris',
    nameId: 'Tulang Paha (Femur)',
    deskripsi: 'Tulang terpanjang, terberat, dan terkuat pada kerangka tubuh manusia. Menghantarkan seluruh beban tubuh bagian atas dari cingulum pelvicum menuju tibia.',
    artikulasi: 'Proksimal: Berartikulasi dengan acetabulum os coxae (Art. Coxae / Hip joint); Distal: Berartikulasi dengan tibia dan patella (Art. Genus / Knee joint).',
    landmark: 'Caput femoris, Fovea capitis, Collum femoris, Trochanter major, Trochanter minor, Linea aspera, Condylus medialis et lateralis, Epicondylus medialis et lateralis.',
    korelasiKlinis: 'Fraktur collum femoris (terutama pada lansia dengan osteoporosis) berisiko nekrosis avaskular caput femoris akibat robeknya rami retinaculares A. circumflexa femoris medialis.'
  },
  'skull': {
    type: 'bone',
    nameLatin: 'Cranium',
    nameId: 'Tengkorak (Kranium)',
    deskripsi: 'Rangka kepala pelindung ensefalon dan organ sensorik indera. Terbagi menjadi Neurocranium (pelindung otak: os frontale, parietale, temporale, occipitale, sphenoidale, ethmoidale) dan Viscerocranium (rangka wajah: maxilla, mandibula, os zygomaticum, dll.).',
    artikulasi: 'Sendi sutura (fibrosa immotil) antar tulang kranium, kecuali Articulatio Temporomandibularis (TMJ) yang merupakan sendi sinovial bergerak bebas.',
    landmark: 'Foramen magnum (lintasan medulla oblongata), Pterion (titik temu 4 tulang kranium), Sella turcica (pelindung hipofisis), Foramina cranii.',
    korelasiKlinis: 'Fraktur di area pterion dapat merobek Arteria meningea media, menyebabkan perdarahan epidural (Hematoma Epidural / EDH) dengan interval lusid (lucid interval).'
  }
};

/**
 * Smart lookup function: Matches concept or part name against clinical knowledge base.
 * Guarantees rich structured medical data (Origo/Insersio/Kinesiologi or Inervasi/Vaskularisasi)
 * for all structures in the 3D atlas.
 */
export function getAnatomyMedicalDetails(name: string, system: string): AnatomyMedicalInfo {
  const query = name.toLowerCase().trim();

  // 1. Direct or partial match on dictionary keys
  for (const [key, data] of Object.entries(MEDICAL_KNOWLEDGE_BASE)) {
    if (query === key || query.includes(key) || key.includes(query)) {
      return data;
    }
  }

  // 2. Specific matching for common anatomical roots & organs
  if (query.includes('biceps') && !query.includes('femoris')) return MEDICAL_KNOWLEDGE_BASE['biceps'];
  if (query.includes('biceps') && query.includes('femoris')) return MEDICAL_KNOWLEDGE_BASE['biceps femoris'];
  if (query.includes('triceps')) return MEDICAL_KNOWLEDGE_BASE['triceps'];
  if (query.includes('deltoid')) return MEDICAL_KNOWLEDGE_BASE['deltoid'];
  if (query.includes('pectoralis')) return MEDICAL_KNOWLEDGE_BASE['pectoralis major'];
  if (query.includes('latissimus')) return MEDICAL_KNOWLEDGE_BASE['latissimus dorsi'];
  if (query.includes('trapezius')) return MEDICAL_KNOWLEDGE_BASE['trapezius'];
  if (query.includes('gastrocnemius')) return MEDICAL_KNOWLEDGE_BASE['gastrocnemius'];
  if (query.includes('soleus')) return MEDICAL_KNOWLEDGE_BASE['soleus'];
  if (query.includes('tibialis')) return MEDICAL_KNOWLEDGE_BASE['tibialis anterior'];
  if (query.includes('gluteus')) return MEDICAL_KNOWLEDGE_BASE['gluteus maximus'];
  if (query.includes('brachialis')) return MEDICAL_KNOWLEDGE_BASE['brachialis'];
  if (query.includes('sternocleido')) return MEDICAL_KNOWLEDGE_BASE['sternocleidomastoid'];
  if (query.includes('diaphragm')) return MEDICAL_KNOWLEDGE_BASE['diaphragm'];
  if (query.includes('rectus abdominis')) return MEDICAL_KNOWLEDGE_BASE['rectus abdominis'];

  if (query.includes('cor') || query.includes('heart') || query.includes('cardiac') || query.includes('ventricle') || query.includes('atrium') || query.includes('aorta')) return MEDICAL_KNOWLEDGE_BASE['heart'];
  if (query.includes('brain') || query.includes('cerebrum') || query.includes('cerebellum') || query.includes('encephalon')) return MEDICAL_KNOWLEDGE_BASE['brain'];
  if (query.includes('hepar') || query.includes('liver')) return MEDICAL_KNOWLEDGE_BASE['liver'];
  if (query.includes('lung') || query.includes('pulmo') || query.includes('bronch')) return MEDICAL_KNOWLEDGE_BASE['lung'];
  if (query.includes('kidney') || query.includes('ren')) return MEDICAL_KNOWLEDGE_BASE['kidney'];
  if (query.includes('stomach') || query.includes('gaster')) return MEDICAL_KNOWLEDGE_BASE['stomach'];
  if (query.includes('spleen') || query.includes('lien')) return MEDICAL_KNOWLEDGE_BASE['spleen'];
  if (query.includes('pancreas')) return MEDICAL_KNOWLEDGE_BASE['pancreas'];
  if (query.includes('bladder') || query.includes('vesica')) return MEDICAL_KNOWLEDGE_BASE['urinary bladder'];
  if (query.includes('trachea')) return MEDICAL_KNOWLEDGE_BASE['trachea'];
  if (query.includes('femur')) return MEDICAL_KNOWLEDGE_BASE['femur'];
  if (query.includes('skull') || query.includes('cranium')) return MEDICAL_KNOWLEDGE_BASE['skull'];

  // 3. Fallback: Generate clinical structure based on anatomical classification
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
