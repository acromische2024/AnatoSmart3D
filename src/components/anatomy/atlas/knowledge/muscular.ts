/**
 * Muscular System Clinical Knowledge Base for AnatoSmart 3D
 * Standardized Terminologia Anatomica with comprehensive Origo, Insersio,
 * Kinesiologi, Inervasi, Vaskularisasi, and Korelasi Klinis.
 */

import { MuscleDetails } from '../medical-knowledge';

export const MUSCULAR_KNOWLEDGE: Record<string, MuscleDetails> = {
  // =========================================================================
  // EKSTREMITAS ATAS (UPPER LIMB)
  // =========================================================================
  'biceps': {
    type: 'muscle',
    nameLatin: 'Musculus Biceps Brachii',
    nameId: 'Otot Bisep Lengan Atas',
    origo: 'Caput longum: Tuberculum supraglenoidale scapulae & labrum glenoidale. Caput breve: Apex processus coracoideus scapulae.',
    insersio: 'Tuberositas radii dan Aponeurosis bicipitalis (lacertus fibrosus) ke fascia profunda antebrachii.',
    kinesiologi: 'Supinator terkuat lengan bawah saat sendi siku fleksi; Fleksor kuat sendi siku (articulatio cubiti); Membantu fleksi anterior sendi bahu (articulatio humeri); Caput longum membantu stabilisasi caput humeri dalam cavitas glenoidalis.',
    inervasi: 'Nervus musculocutaneus (segmen radiks C5, C6).',
    vaskularisasi: 'Rami musculares dari Arteria brachialis dan cabang dari Arteria circumflexa humeri anterior.',
    korelasiKlinis: 'Ruptur tendo caput longum bicipitis ("Popeye deformity"), tendinitis bicipitalis, dan pemeriksaan refleks bisep (Biceps reflex / C5-C6 jerk).'
  },
  'triceps': {
    type: 'muscle',
    nameLatin: 'Musculus Triceps Brachii',
    nameId: 'Otot Trisep Lengan Atas',
    origo: 'Caput longum: Tuberculum infraglenoidale scapulae. Caput laterale: Facies posterior corpus humeri (superior terhadap sulcus nervi radialis). Caput mediale: Facies posterior corpus humeri (inferior terhadap sulcus nervi radialis).',
    insersio: 'Permukaan posterior olecranon ulnae dan fascia antebrachii.',
    kinesiologi: 'Ekstensor utama sendi siku (articulatio cubiti); Caput longum membantu adduksi dan ekstensi sendi bahu serta menstabilkan articulatio humeri saat adduksi.',
    inervasi: 'Nervus radialis (segmen radiks C6, C7, C8).',
    vaskularisasi: 'Arteria profunda brachii (cabang A. brachialis) dan arteria collateralis ulnaris superior.',
    korelasiKlinis: 'Refleks tendo trisep mengevaluasi integritas radiks servikal C7; avulsi tendon trisep pada olecranon akibat trauma jatuh berdaya kejut tinggi.'
  },
  'deltoid': {
    type: 'muscle',
    nameLatin: 'Musculus Deltoideus',
    nameId: 'Otot Deltoid (Bahu)',
    origo: 'Pars clavicularis: 1/3 lateral permukaan anterior clavicula. Pars acromialis: Margo lateralis acromion. Pars spinalis: Margo inferior spina scapulae.',
    insersio: 'Tuberositas deltoidea pada pertengahan facies anterolateralis corpus humeri.',
    kinesiologi: 'Pars acromialis: Abduksi lengan atas utama pada bidang frontal dari 15° hingga 90° (diinisiasi oleh supraspinatus). Pars clavicularis: Fleksi dan endorotasi sendi bahu. Pars spinalis: Ekstensi dan eksorotasi sendi bahu.',
    inervasi: 'Nervus axillaris (segmen radiks C5, C6).',
    vaskularisasi: 'Arteria circumflexa humeri posterior, ramus deltoideus arteriae thoracoacromialis, dan cabang dari Arteria circumflexa humeri anterior.',
    korelasiKlinis: 'Cedera N. axillaris sering terjadi pada dislokasi anterior bahu atau fraktur collum chirurgicum humeri (hilangnya kontur bahu bulat & hipestesia area cutaneous badge); Lokasi standar injeksi intramuskular vaksin.'
  },
  'brachialis': {
    type: 'muscle',
    nameLatin: 'Musculus Brachialis',
    nameId: 'Otot Brakialis (Workhorse Fleksor Siku)',
    origo: '1/2 distal facies anterior corpus humeri (inferior terhadap tuberositas deltoidea).',
    insersio: 'Processus coronoideus ulnae dan tuberositas ulnae.',
    kinesiologi: 'Fleksor murni sendi siku (articulatio cubiti) terkuat dalam segala posisi lengan bawah (baik pronasi penuh, supinasi, maupun posisi netral).',
    inervasi: 'Nervus musculocutaneus (segmen C5, C6); sebagian kecil aspek inferolateral menerima serabut proprioseptif dari Nervus radialis (C7).',
    vaskularisasi: 'Rami musculares arteriae brachialis dan arteria recurrens radialis.',
    korelasiKlinis: 'Avulsi tuberositas ulnae pada dislokasi siku posterior; miositis osifikans pascatrauma pada fossa cubiti.'
  },
  'brachioradialis': {
    type: 'muscle',
    nameLatin: 'Musculus Brachioradialis',
    nameId: 'Otot Brakioradialis',
    origo: '2/3 proksimal crista supracondylaris lateralis humeri dan septum intermusculare laterale brachii.',
    insersio: 'Facies lateralis ujung distal radius tepat di proksimal processus styloideus radii.',
    kinesiologi: 'Fleksi sendi siku tercepat dan terkuat saat lengan bawah berada pada posisi mid-pronasi/posisi netral; Membantu supinasi dari pronasi ekstrem dan pronasi dari supinasi ekstrem.',
    inervasi: 'Nervus radialis (segmen radiks C5, C6).',
    vaskularisasi: 'Arteria recurrens radialis dan cabang dari arteria radialis.',
    korelasiKlinis: 'Uji refleks brakioradialis (supinator jerk / refleks C6); sering terkena pada sindrom Wartenberg akibat jepitan cabang superfisial N. radialis.'
  },
  'coracobrachialis': {
    type: 'muscle',
    nameLatin: 'Musculus Coracobrachialis',
    nameId: 'Otot Korakobrakialis',
    origo: 'Apex processus coracoideus scapulae (bersama tendo caput breve m. bicipitis).',
    insersio: '1/3 pertengahan margo medialis dan facies anterior corpus humeri.',
    kinesiologi: 'Fleksi dan adduksi lengan atas pada articulatio humeri; Membantu mempertahankan caput humeri dalam cavitas glenoidalis.',
    inervasi: 'Nervus musculocutaneus (segmen C5, C6, C7) yang menembus langsung venter otot ini.',
    vaskularisasi: 'Rami musculares dari Arteria brachialis dan cabang arteria axillaris.',
    korelasiKlinis: 'Landmark anatomis penting bagi ahli bedah untuk mengidentifikasi Nervus musculocutaneus dan cabang terminal fasciculus lateralis plexus brachialis.'
  },
  'pronator teres': {
    type: 'muscle',
    nameLatin: 'Musculus Pronator Teres',
    nameId: 'Otot Pronator Teres',
    origo: 'Caput humerale: Epicondylus medialis humeri (tendo fleksor komunis). Caput ulnare: Margo medialis processus coronoideus ulnae.',
    insersio: 'Tuberositas pronatoria pada pertengahan facies lateralis corpus radii.',
    kinesiologi: 'Pronasi lengan bawah pada sendi radioulnaris proksimalis dan distalis; Membantu fleksi sendi siku (articulatio cubiti).',
    inervasi: 'Nervus medianus (segmen C6, C7) yang melintas di antara caput humerale dan caput ulnare.',
    vaskularisasi: 'Arteria recurrens ulnaris anterior, arteria radialis, dan rami arteriae ulnaris.',
    korelasiKlinis: 'Pronator Teres Syndrome (kompresi N. medianus di antara kedua caput otot, menyerupai CTS namun dengan keterlibatan sensorik eminensia tenar).'
  },
  'supinator': {
    type: 'muscle',
    nameLatin: 'Musculus Supinator',
    nameId: 'Otot Supinator',
    origo: 'Epicondylus lateralis humeri, ligamentum collaterale radiale, ligamentum anulare radii, dan crista musculi supinatoris ulnae.',
    insersio: 'Facies lateralis, posterior, dan anterior dari 1/3 proksimal corpus radii.',
    kinesiologi: 'Supinasi lengan bawah secara murni tanpa hambatan fleksi siku (bekerja pada gerakan supinasi perlahan tanpa beban atau saat siku ekstensi).',
    inervasi: 'Ramus profundus nervi radialis / Nervus interosseus posterior (segmen C7, C8) yang melintas menembus Arcade of Frohse.',
    vaskularisasi: 'Arteria recurrens radialis dan arteria interossea posterior.',
    korelasiKlinis: 'Sindrom Arkus Frohse (Supinator Syndrome / PIN entrapment) menyebabkan paresis ekstensor jari tangan tanpa defisit sensorik kutan.'
  },
  'flexor carpi radialis': {
    type: 'muscle',
    nameLatin: 'Musculus Flexor Carpi Radialis',
    nameId: 'Otot Fleksor Karpi Radialis',
    origo: 'Epicondylus medialis humeri melalui tendo fleksor komunis dan fascia antebrachii profunda.',
    insersio: 'Basis os metacarpale II (dan slip kecil ke basis os metacarpale III).',
    kinesiologi: 'Fleksi sendi pergelangan tangan (articulatio radiocarpalis) dan deviasi radial (abduksi pergelangan tangan); Membantu fleksi sendi siku.',
    inervasi: 'Nervus medianus (segmen C6, C7).',
    vaskularisasi: 'Arteria radialis dan ramus muscularis arteriae ulnaris.',
    korelasiKlinis: 'Tendonnya merupakan penanda anatomis (landmark) utama di pergelangan tangan ventral: pulsasi arteria radialis dipalpasi tepat di sisi lateral tendon ini.'
  },
  'flexor carpi ulnaris': {
    type: 'muscle',
    nameLatin: 'Musculus Flexor Carpi Ulnaris',
    nameId: 'Otot Fleksor Karpi Ulnaris',
    origo: 'Caput humerale: Epicondylus medialis humeri. Caput ulnare: Olecranon dan 2/3 proksimal margo posterior ulnae.',
    insersio: 'Os pisiforme, hamulus ossis hamati, dan basis os metacarpale V (via ligamentum pisohamatum dan ligamentum pisometacarpale).',
    kinesiologi: 'Fleksi sendi pergelangan tangan dan deviasi ulnar (adduksi pergelangan tangan) yang kuat saat bekerja sinergis dengan extensor carpi ulnaris.',
    inervasi: 'Nervus ulnaris (segmen C7, C8, T1).',
    vaskularisasi: 'Arteria collateralis ulnaris inferior dan arteria recurrens ulnaris posterior.',
    korelasiKlinis: 'Nervus ulnaris melintas di antara kedua caput origo otot ini pada cubital tunnel; Tendonnya memayungi N. ulnaris dan A. ulnaris di distal pergelangan tangan.'
  },
  'extensor carpi radialis': {
    type: 'muscle',
    nameLatin: 'Musculus Extensor Carpi Radialis (Longus et Brevis)',
    nameId: 'Otot Ekstensor Karpi Radialis',
    origo: 'Longus: 1/3 distal crista supracondylaris lateralis humeri. Brevis: Epicondylus lateralis humeri via tendo ekstensor komunis.',
    insersio: 'Longus: Permukaan dorsal basis os metacarpale II. Brevis: Permukaan dorsal basis os metacarpale III.',
    kinesiologi: 'Ekstensi pergelangan tangan dan deviasi radial (abduksi tangan); Berperan krusial menstabilkan sendi pergelangan tangan dalam dorsofleksi saat mengepalkan jari tangan (grip strength).',
    inervasi: 'Longus: Nervus radialis langsung (segmen C6, C7). Brevis: Ramus profundus nervi radialis (C7, C8).',
    vaskularisasi: 'Arteria radialis dan arteria collateralis radialis.',
    korelasiKlinis: 'Epikondilitis lateralis (Tennis Elbow) akibat mikrotrauma repetitif regangan tendo ekstensor (terutama origo ECRB pada epikondilus lateral humeri).'
  },
  'extensor digitorum': {
    type: 'muscle',
    nameLatin: 'Musculus Extensor Digitorum',
    nameId: 'Otot Ekstensor Jari Tangan',
    origo: 'Epicondylus lateralis humeri melalui tendo ekstensor komunis dan septum intermusculare.',
    insersio: 'Ekspansi ekstensor (dorsal aponeurosis / extensor hood) phalanx medialis dan distalis digit II-V.',
    kinesiologi: 'Ekstensi sendi metakarpofalangeal (MCP) jari II-V; Membantu ekstensi sendi interfalangeal (PIP dan DIP) serta ekstensi pergelangan tangan.',
    inervasi: 'Nervus interosseus posterior (cabang ramus profundus nervi radialis, C7, C8).',
    vaskularisasi: 'Arteria interossea posterior dan cabang arteria recurrens radialis.',
    korelasiKlinis: 'Deformitas Mallet Finger (avulsi insersio tendo ekstensor pada phalanx distal) dan Boutonniere deformity.'
  },
  'opponens pollicis': {
    type: 'muscle',
    nameLatin: 'Musculus Opponens Pollicis',
    nameId: 'Otot Oponens Ibu Jari (Eminensia Tenar)',
    origo: 'Retinaculum musculorum flexorum (transverse carpal ligament) dan tuberculum ossis trapezii.',
    insersio: 'Seluruh panjang margo radialis dan facies anterior corpus os metacarpale I.',
    kinesiologi: 'Oposisi ibu jari (gerakan fleksi dan rotasi medialis metacarpal I yang mempertemukan pulpa ibu jari dengan pulpa ujung jari lainnya); Kunci evolusi genggaman presisi (precision grip).',
    inervasi: 'Ramus recurrens nervi mediani (segmen C8, T1).',
    vaskularisasi: 'Ramus palmaris superficialis arteriae radialis.',
    korelasiKlinis: 'Atrofi eminensia tenar ("ape hand deformity") pada Carpal Tunnel Syndrome kronis derajat berat akibat kompresi berkepanjangan N. medianus.'
  },
  'supraspinatus': {
    type: 'muscle',
    nameLatin: 'Musculus Supraspinatus (Rotator Cuff)',
    nameId: 'Otot Supraspinatus',
    origo: 'Fossa supraspinata scapulae dan fascia supraspinata.',
    insersio: 'Facies superior tuberculum majus humeri dan kapsul sendi glenohumeralis.',
    kinesiologi: 'Inisiasi 0°-15° abduksi lengan atas sebelum dilanjutkan oleh m. deltoideus; Menstabilkan caput humeri dengan menekan dan menahannya erat ke dalam cavitas glenoidalis.',
    inervasi: 'Nervus suprascapularis (segmen C5, C6).',
    vaskularisasi: 'Arteria suprascapularis dan arteria circumflexa scapulae.',
    korelasiKlinis: 'Tendon rotator cuff yang paling sering mengalami tendinopati dan robekan (rotator cuff tear); Dievaluasi dengan Jobe Test (Empty Can Test) dan Drop Arm Sign.'
  },
  'infraspinatus': {
    type: 'muscle',
    nameLatin: 'Musculus Infraspinatus (Rotator Cuff)',
    nameId: 'Otot Infraspinatus',
    origo: 'Fossa infraspinata scapulae dan fascia infraspinata.',
    insersio: 'Facies media tuberculum majus humeri dan kapsul sendi bahu posterior.',
    kinesiologi: 'Eksorotasi utama (rotasi lateral) lengan atas pada sendi bahu; Membantu mempertahankan caput humeri terpusat di cavitas glenoidalis saat abduksi dan elevasi.',
    inervasi: 'Nervus suprascapularis (segmen radiks C5, C6).',
    vaskularisasi: 'Arteria suprascapularis dan arteria circumflexa scapulae.',
    korelasiKlinis: 'Evaluasi klinis dengan External Rotation Lag Sign dan Hornblower test; Kelemahan memutar bahu keluar menandakan ruptur tendon infraspinatus.'
  },
  'subscapularis': {
    type: 'muscle',
    nameLatin: 'Musculus Subscapularis (Rotator Cuff)',
    nameId: 'Otot Subskapularis',
    origo: 'Fossa subscapularis pada facies costalis (anterior) scapulae.',
    insersio: 'Tuberculum minus humeri dan bagian anterior kapsul sendi glenohumeralis.',
    kinesiologi: 'Endorotasi (rotasi medial) kuat pada sendi bahu; Menstabilkan dinding anterior cavitas glenoidalis untuk mencegah dislokasi/subluksasi anterior caput humeri.',
    inervasi: 'Nervus subscapularis superior dan inferior (segmen C5, C6, C7).',
    vaskularisasi: 'Arteria subscapularis dan arteria thoracica lateralis.',
    korelasiKlinis: 'Tes klinis Gerber Lift-off Test dan Belly-press Test untuk mendeteksi ruptur atau robekan terisolasi tendon subskapularis.'
  },
  'teres major': {
    type: 'muscle',
    nameLatin: 'Musculus Teres Major',
    nameId: 'Otot Teres Mayor',
    origo: 'Facies dorsalis angulus inferior scapulae dan sepertiga bawah margo lateralis scapulae.',
    insersio: 'Crista tuberculi minoris humeri (bibir medial sulcus intertubercularis).',
    kinesiologi: 'Adduksi, ekstensi, dan endorotasi lengan atas pada sendi bahu (bekerja sinergis sebagai "little helper" dari m. latissimus dorsi).',
    inervasi: 'Nervus subscapularis inferior (segmen radiks C5, C6, C7).',
    vaskularisasi: 'Arteria circumflexa scapulae dan arteria thoracodorsalis.',
    korelasiKlinis: 'Membentuk batas inferior dari Spatium Axillare Mediale (triangular space), Spatium Axillare Laterale (quadrangular space), dan celah humerotriseps.'
  },
  'teres minor': {
    type: 'muscle',
    nameLatin: 'Musculus Teres Minor (Rotator Cuff)',
    nameId: 'Otot Teres Minor',
    origo: '2/3 proksimal margo lateralis scapulae facies dorsalis.',
    insersio: 'Facies inferior tuberculum majus humeri dan kapsul posterior sendi glenohumeralis.',
    kinesiologi: 'Eksorotasi (rotasi lateral) lengan atas dan adduksi lemah; Berperan sebagai penstabil posterior caput humeri bersama m. infraspinatus.',
    inervasi: 'Nervus axillaris (segmen radiks C5, C6).',
    vaskularisasi: 'Arteria circumflexa scapulae dan arteria circumflexa humeri posterior.',
    korelasiKlinis: 'Pemeriksaan Patte Test; dapat mengalami neuropati kompresi pada Quadrangular Space Syndrome bersama arteria circumflexa humeri posterior.'
  },

  // =========================================================================
  // BATANG TUBUH & DADA (TRUNK & THORAX)
  // =========================================================================
  'pectoralis major': {
    type: 'muscle',
    nameLatin: 'Musculus Pectoralis Major',
    nameId: 'Otot Dada Besar (Pektoralis Mayor)',
    origo: 'Pars clavicularis: Permukaan anterior 1/2 medial clavicula. Pars sternocostalis: Manubrium & corpus sterni, cartilago costalis I-VI, dan aponeurosis m. obliquus externus abdominis.',
    insersio: 'Crista tuberculi majoris humeri (bibir lateral sulcus intertubercularis).',
    kinesiologi: 'Adduksi kuat dan endorotasi humerus; Pars clavicularis memfleksikan lengan atas; Pars sternocostalis mengekstensikan lengan dari posisi fleksi penuh; Otot bantu inspirasi saat lengan terfiksasi.',
    inervasi: 'Nervus pectoralis lateralis (C5, C6, C7) dan Nervus pectoralis medialis (C8, T1).',
    vaskularisasi: 'Ramus pectoralis arteriae thoracoacromialis, cabang perforantes arteriae thoracica interna, dan arteria thoracica lateralis.',
    korelasiKlinis: 'Ruptur tendo pektoralis mayor saat latihan beban berat (bench press); Flap miokutan rekonstruksi kepala-leher; Sindrom Poland (agenesis kongenital unilateral).'
  },
  'pectoralis minor': {
    type: 'muscle',
    nameLatin: 'Musculus Pectoralis Minor',
    nameId: 'Otot Dada Kecil (Pektoralis Minor)',
    origo: 'Permukaan anterior dan margo superior costa III, IV, dan V dekat cartilago costalis.',
    insersio: 'Margo medialis dan facies superior processus coracoideus scapulae.',
    kinesiologi: 'Depresi dan protraksi scapula (menarik bahu ke arah anteroinferior); Menstabilkan scapula menempel pada dinding toraks; Otot bantu inspirasi paksa.',
    inervasi: 'Nervus pectoralis medialis (segmen C8, T1).',
    vaskularisasi: 'Ramus pectoralis arteriae thoracoacromialis dan cabang arteria thoracica lateralis.',
    korelasiKlinis: 'Pectoralis Minor Syndrome (salah satu varian neurovaskular Thoracic Outlet Syndrome akibat kompresi plexus brachialis dan vasa axillaris di bawah tendo otot ini).'
  },
  'latissimus dorsi': {
    type: 'muscle',
    nameLatin: 'Musculus Latissimus Dorsi',
    nameId: 'Otot Punggung Lebar',
    origo: 'Processus spinosus vertebra T7-T12, fascia thoracolumbalis, crista iliaca, costa IX-XII, dan angulus inferior scapulae.',
    insersio: 'Dasar sulcus intertubercularis humeri (sulcus bicipitalis).',
    kinesiologi: 'Ekstensi kuat, adduksi, dan endorotasi lengan atas pada artikulatio humeri; Menarik tubuh ke atas saat memanjat (climbing muscle); Otot ekspirasi paksa saat batuk kuat ("cough muscle").',
    inervasi: 'Nervus thoracodorsalis (segmen radiks C6, C7, C8).',
    vaskularisasi: 'Arteria thoracodorsalis (cabang utama arteria subscapularis).',
    korelasiKlinis: 'Evaluasi fungsi latissimus dorsi penting pada bedah flap rekonstruksi payudara pascamastektomi (latissimus dorsi flap).'
  },
  'trapezius': {
    type: 'muscle',
    nameLatin: 'Musculus Trapezius',
    nameId: 'Otot Trapesius',
    origo: 'Linea nuchalis superior, protuberantia occipitalis externa, ligamentum nuchae, dan processus spinosus vertebra C7-T12.',
    insersio: '1/3 lateral clavicula posterior, acromion, dan spina scapulae.',
    kinesiologi: 'Pars descendens (superior): Elevasi scapula dan ekstensi/laterofleksi leher. Pars transversa (media): Retraksi (adduksi) scapula. Pars ascendens (inferior): Depresi scapula. Sinergi pars superior dan inferior merotasi cavitas glenoidalis ke kranial untuk abduksi lengan >90°.',
    inervasi: 'Motorik: Nervus accessorius (Nervus Cranialis XI); Sensorik/Proprioseptif: Rami anteriores saraf spinalis C3, C4.',
    vaskularisasi: 'Arteria transversa colli (arteria cervicalis superficialis), cabang ramus dorsalis arteriae intercostales posteriores.',
    korelasiKlinis: 'Cedera iatrogenik N. accessorius pada diseksi leher radikal (neck dissection) menyebabkan paralisis trapezius, bahu lunglai, dan deformitas winged scapula.'
  },
  'serratus anterior': {
    type: 'muscle',
    nameLatin: 'Musculus Serratus Anterior',
    nameId: 'Otot Seratus Anterior (Boxer Muscle)',
    origo: 'Permukaan luar facies lateralis costa I-VIII (atau IX) berupa berkas mirip gigi gergaji.',
    insersio: 'Facies costalis margo medialis scapulae dari angulus superior hingga angulus inferior.',
    kinesiologi: 'Protraksi scapula (menjulurkan lengan ke depan saat meninju); Menjaga margo medialis scapula tetap melekat erat pada dinding toraks; Merotasi scapula ke kranial untuk elevasi lengan melampaui bidang horizontal.',
    inervasi: 'Nervus thoracicus longus / Saraf Bell (radiks C5, C6, C7: "C5, 6, 7 raise your wings to heaven").',
    vaskularisasi: 'Arteria thoracica lateralis dan arteria thoracodorsalis.',
    korelasiKlinis: 'Cedera N. thoracicus longus (pasca mastektomi/diseksi aksila atau trauma olahraga) menyebabkan deformitas klasik "Winged Scapula" (scapula alata).'
  },
  'rectus abdominis': {
    type: 'muscle',
    nameLatin: 'Musculus Rectus Abdominis',
    nameId: 'Otot Rektus Abdominis',
    origo: 'Crista pubica, tuberculum pubicum, dan symphysis pubica.',
    insersio: 'Cartilago costalis costa V, VI, VII dan processus xiphoideus.',
    kinesiologi: 'Fleksi columna vertebralis lumbalis; Kompresi visera abdomen untuk meningkatkan tekanan intraabdomen (pada ekspirasi paksa, miksi, defekasi, dan persalinan); Menstabilkan pelvis saat berjalan.',
    inervasi: 'Nervi intercostales thoracoabdominales (T7-T11) dan Nervus subcostalis (T12).',
    vaskularisasi: 'Arteria epigastrica superior (cabang A. thoracica interna) dan Arteria epigastrica inferior (cabang A. iliaca externa).',
    korelasiKlinis: 'Diastasis recti (pemisahan linea alba pasca kehamilan); insisi bedah laparotomi midline/paramedian; uji refleks dinding perut superfisial (T8-T12).'
  },
  'obliquus externus abdominis': {
    type: 'muscle',
    nameLatin: 'Musculus Obliquus Externus Abdominis',
    nameId: 'Otot Oblik Eksternus Abdomen',
    origo: 'Facies externa costa V-XII (delapan kosta terbawah), berselang-seling dengan digitasi serratus anterior dan latissimus dorsi.',
    insersio: 'Linea alba, tuberculum pubicum, labium externum crista iliaca, dan membentuk ligamentum inguinale (Poupart ligament).',
    kinesiologi: 'Kontraksi bilateral: Fleksi columna vertebralis dan kompresi dinding abdomen. Kontraksi unilateral: Laterofleksi tubuh ke sisi ipsilateral dan rotasi tubuh ke sisi kontralateral.',
    inervasi: 'Nervi intercostales inferiores (T7-T11) dan Nervus subcostalis (T12).',
    vaskularisasi: 'Arteriae intercostales posteriores inferiores, arteria subcostalis, dan arteria circumflexa ilium profunda.',
    korelasiKlinis: 'Aponeurosisnya membentuk anulus inguinalis superficialis; kelemahan aponeurosis ini mendasari timbulnya Hernia Inguinalis Direct atau Indirect.'
  },
  'obliquus internus abdominis': {
    type: 'muscle',
    nameLatin: 'Musculus Obliquus Internus Abdominis',
    nameId: 'Otot Oblik Internus Abdomen',
    origo: 'Fascia thoracolumbalis, 2/3 anterior linea intermedia crista iliaca, dan 1/2 lateral ligamentum inguinale.',
    insersio: 'Margo inferior costa X-XII, linea alba via aponeurosis rekturnya, pecten pubis via tendo conjunctivus (falx inguinalis).',
    kinesiologi: 'Kontraksi bilateral: Fleksi columna vertebralis dan kompresi intraabdomen. Kontraksi unilateral: Laterofleksi dan rotasi tubuh ke sisi ipsilateral (searah).',
    inervasi: 'Nervi intercostales inferiores (T7-T11), Nervus subcostalis (T12), serta Nervus iliohypogastricus dan Nervus ilioinguinalis (L1).',
    vaskularisasi: 'Arteria epigastrica inferior, arteria circumflexa ilium profunda, dan arteriae lumbales.',
    korelasiKlinis: 'Serabut kaudalnya melanjut menjadi Musculus Cremaster yang membungkus funiculus spermaticus; mendasari Refleks Kremaster (L1-L2).'
  },
  'transversus abdominis': {
    type: 'muscle',
    nameLatin: 'Musculus Transversus Abdominis',
    nameId: 'Otot Transversus Abdominis (Korset Alami Tubuh)',
    origo: 'Cartilago costalis VII-XII sisi dalam, fascia thoracolumbalis, labium internum crista iliaca, dan 1/3 lateral ligamentum inguinale.',
    insersio: 'Linea alba melalui aponeurosis anterior, crista pubica, dan pecten pubis via tendo conjunctivus.',
    kinesiologi: 'Kompresi visera abdomen secara melingkar konsentris; Berperan sebagai stabilisator utama columna vertebralis lumbalis dan pelvis selama beban dinamis tubuh.',
    inervasi: 'Nervi intercostales inferiores (T7-T11), Nervus subcostalis (T12), Nervus iliohypogastricus (L1), dan Nervus ilioinguinalis (L1).',
    vaskularisasi: 'Arteria epigastrica inferior, arteria circumflexa ilium profunda, dan arteriae musculophrenicae.',
    korelasiKlinis: 'Aktivasi transversus abdominis merupakan fondasi latihan core stability dalam tatalaksana konservatif nyeri punggung bawah kronis (chronic LBP).'
  },
  'erector spinae': {
    type: 'muscle',
    nameLatin: 'Musculus Erector Spinae (Iliocostalis, Longissimus, Spinalis)',
    nameId: 'Otot Erektor Spina (Kelompok Ekstensor Tulang Belakang)',
    origo: 'Massa tendo komunis tebal pada facies dorsalis os sacrum, crista iliaca, ligamentum supraspinale, dan processus spinosus vertebra lumbalis.',
    insersio: 'Iliocostalis: Angulus costae dan processus transversus servikal. Longissimus: Processus transversus vertebra torakal/servikal dan processus mastoideus. Spinalis: Processus spinosus vertebra torakal dan servikal.',
    kinesiologi: 'Ekstensor utama columna vertebralis dan kepala; Mengontrol fleksi batang tubuh secara eksentrik saat membungkuk ke depan; Mempertahankan postur tubuh tegak melawan gravitasi.',
    inervasi: 'Rami posteriores (dorsales) nervorum spinalium sesuai segmen servikal, torakal, dan lumbal.',
    vaskularisasi: 'Rami dorsales arteriae intercostales posteriores, arteriae subcostales, dan arteriae lumbales.',
    korelasiKlinis: 'Spasme akut erector spinae merupakan etiologi paling umum mechanical low back pain (lumbago); titik pemicu sindrom nyeri miofasial.'
  },
  'diaphragma': {
    type: 'muscle',
    nameLatin: 'Diaphragma',
    nameId: 'Otot Diafragma',
    origo: 'Pars sternalis: Permukaan dorsal processus xiphoideus. Pars costalis: Facies interna cartilago costalis dan costa VII-XII. Pars lumbalis: Crus dextrum (L1-L3), Crus sinistrum (L1-L2), dan ligamenta arcuata (mediale et laterale).',
    insersio: 'Centrum tendineum diaphragmatis (tendon sentral berbentuk trifolium).',
    kinesiologi: 'Otot inspirasi utama (menyumbang ~75% volume tidal istirahat): Saat kontraksi, kubah mendatar ke kaudal, menurunkan tekanan intratorakal sehingga udara tertarik masuk ke pulmo; Meningkatkan tekanan intraabdomen saat manuver Valsalva.',
    inervasi: 'Motorik murni dan sensorik sentral: Nervus phrenicus (segmen radiks C3, C4, C5: "C3, 4, 5 keep the diaphragm alive"); Sensorik tepi kubah: Nervi intercostales VI-XI dan N. subcostalis.',
    vaskularisasi: 'Arteria pericardiacophrenica, arteria musculophrenica (cabang A. thoracica interna), arteria phrenica superior, dan arteria phrenica inferior.',
    korelasiKlinis: 'Hernia diafragmatika (hernia hiatus, hernia Bochdalek, hernia Morgagni); Singultus (cegukan akibat iritasi N. phrenicus); Paralisis diafragma pasca trauma servikal tinggi.'
  },
  'intercostales externi': {
    type: 'muscle',
    nameLatin: 'Musculi Intercostales Externi',
    nameId: 'Otot Antartulang Rusuk Luar (Interkostal Eksternus)',
    origo: 'Margo inferior costae superior (dari tuberculum costae di posterior hingga articulatio costochondralis di anterior).',
    insersio: 'Margo superior costae tepat di bawahnya (arah serat miring ke anteroinferior: seperti memasukkan tangan ke saku).',
    kinesiologi: 'Elevasi kosta ke arah kranial dan lateral ("bucket-handle" & "pump-handle mechanism"), memperbesar diameter rongga toraks selama inspirasi aktif.',
    inervasi: 'Nervi intercostales segmen torakal I hingga XI (T1-T11).',
    vaskularisasi: 'Arteriae intercostales posteriores dan rami intercostales anteriores arteriae thoracicae internae.',
    korelasiKlinis: 'Retraksi interkostal tampak pada distres napas berat; Blok nervus interkostalis untuk manajemen analgesia pasca torakotomi.'
  },
  'intercostales interni': {
    type: 'muscle',
    nameLatin: 'Musculi Intercostales Interni',
    nameId: 'Otot Antartulang Rusuk Dalam (Interkostal Internus)',
    origo: 'Margo inferior costae dan sulcus costae dari sternum hingga angulus costae (arah serat berjalan miring ke posteroinferior).',
    insersio: 'Margo superior costae inferior.',
    kinesiologi: 'Depresi kosta selama ekspirasi aktif/paksa (mengecilkan dimensi rongga toraks saat batuk atau olahraga); Menstabilkan spatium intercostale agar tidak kolaps akibat fluktuasi tekanan pleura.',
    inervasi: 'Nervi intercostales segmen torakal I hingga XI (T1-T11).',
    vaskularisasi: 'Arteriae intercostales posteriores dan rami intercostales anteriores.',
    korelasiKlinis: 'Tindakan torakosentesis atau pemasangan chest tube (WSD) harus menyusuri margo superior kosta bawah untuk menghindari bundel neurovaskular (VAN) di sulcus costae.'
  },

  // =========================================================================
  // LEHER & WAJAH (NECK & FACE)
  // =========================================================================
  'sternocleidomastoid': {
    type: 'muscle',
    nameLatin: 'Musculus Sternocleidomastoideus (SCM)',
    nameId: 'Otot Sternokleidomastoideus',
    origo: 'Caput sternale: Facies anterior manubrium sterni. Caput claviculare: 1/3 medial facies superior clavicula.',
    insersio: 'Permukaan lateral processus mastoideus ossis temporalis dan 1/2 lateral linea nuchalis superior ossis occipitalis.',
    kinesiologi: 'Kontraksi unilateral: Laterofleksi leher ke sisi ipsilateral dan rotasi wajah/dagu ke sisi kontralateral. Kontraksi bilateral: Fleksi columna vertebralis servikalis; Otot bantu inspirasi pada sesak napas berat.',
    inervasi: 'Motorik: Nervus accessorius (Nervus Cranialis XI); Sensorik/Proprioseptif: Plexus cervicalis (segmen C2, C3).',
    vaskularisasi: 'Arteria occipitalis, arteria thyroidea superior, dan arteria transversa colli.',
    korelasiKlinis: 'Tortikolis kongenital (fibromatosis colli) atau spasmodik (wry neck); Landmark pemisah trigonum servikalis anterior dan posterior; Lokasi palpasi denyut arteri karotis komunis.'
  },
  'scalenus anterior': {
    type: 'muscle',
    nameLatin: 'Musculus Scalenus Anterior',
    nameId: 'Otot Skalenus Anterior',
    origo: 'Tubercula anteriora processus transversus vertebra C3-C6.',
    insersio: 'Tuberculum musculi scaleni anterioris (Lisfranc tubercle) pada costa I.',
    kinesiologi: 'Elevasi costa I saat inspirasi paksa; Fleksi anterior dan laterofleksi leher ke arah ipsilateral; Rotasi leher ke sisi kontralateral.',
    inervasi: 'Rami anteriores nervorum cervicalium C4, C5, C6.',
    vaskularisasi: 'Arteria cervicalis ascendens (cabang truncus thyrocervicalis).',
    korelasiKlinis: 'Thoracic Outlet Syndrome (kompresi plexus brachialis dan A. subclavia di celah segitiga skalenus: Uji Adson positif); Landmark penting anestesi blok interskalenus.'
  },
  'scalenus medius': {
    type: 'muscle',
    nameLatin: 'Musculus Scalenus Medius',
    nameId: 'Otot Skalenus Medius',
    origo: 'Tubercula posteriora processus transversus vertebra C2-C7.',
    insersio: 'Facies superior costa I (posterior terhadap sulcus arteriae subclaviae).',
    kinesiologi: 'Elevasi costa I saat inspirasi dalam; Laterofleksi columna vertebralis servikalis ke arah ipsilateral.',
    inervasi: 'Rami anteriores nervorum spinalium servikal C3-C8.',
    vaskularisasi: 'Arteria cervicalis profunda dan arteria vertebralis.',
    korelasiKlinis: 'Ditembus langsung oleh Nervus dorsalis scapulae dan Nervus thoracicus longus; spatium scalenum anterior-medius menjadi lokasi insersi jarum blok pleksus brakialis.'
  },
  'scalenus posterior': {
    type: 'muscle',
    nameLatin: 'Musculus Scalenus Posterior',
    nameId: 'Otot Skalenus Posterior',
    origo: 'Tubercula posteriora processus transversus vertebra C5-C7.',
    insersio: 'Permukaan luar facies externa costa II.',
    kinesiologi: 'Elevasi costa II saat inspirasi dalam; Laterofleksi columna vertebralis servikalis ke sisi ipsilateral.',
    inervasi: 'Rami anteriores nervorum spinalium servikal C6, C7, C8.',
    vaskularisasi: 'Arteria transversa colli dan cabang arteria cervicalis profunda.',
    korelasiKlinis: 'Merupakan komponen terdalam otot skalenus; spasme miofasial sering menimbulkan nyeri alih ke daerah skapula dan dinding dada posterolateral.'
  },
  'masseter': {
    type: 'muscle',
    nameLatin: 'Musculus Masseter',
    nameId: 'Otot Maseter (Otot Pengunyah Utama)',
    origo: 'Pars superficialis: 2/3 anterior margo inferior arcus zygomaticus. Pars profunda: 1/3 posterior margo inferior dan seluruh facies medialis arcus zygomaticus.',
    insersio: 'Facies lateralis ramus mandibulae dan angulus mandibulae (tuberositas masseterica).',
    kinesiologi: 'Elevasi kuat mandibula (menutup rahang dengan daya oklusi gigi maksimal); Pars superficialis membantu protraksi mandibula.',
    inervasi: 'Nervus massetericus (cabang divisi mandibularis nervi trigemini / CN V3).',
    vaskularisasi: 'Arteria masseterica (cabang dari arteria maxillaris).',
    korelasiKlinis: 'Bruxism (kebiasaan menggemertakkan gigi malam hari); Trismus (kejang rahang/lockjaw pada tetanus atau abses gigi/peritonsil); Injeksi toksin botulinum (Botox) untuk estetika wajah.'
  },
  'temporalis': {
    type: 'muscle',
    nameLatin: 'Musculus Temporalis',
    nameId: 'Otot Temporalis',
    origo: 'Seluruh dasar fossa temporalis (hingga linea temporalis inferior) dan lamina profunda fascia temporalis.',
    insersio: 'Processus coronoideus mandibulae dan margo anterior ramus mandibulae.',
    kinesiologi: 'Elevasi mandibula (menutup mulut dengan cepat); Serabut posterior yang berjalan horizontal berfungsi meretraksi (menarik mundur) mandibula.',
    inervasi: 'Nervi temporales profundi (cabang anterior divisi mandibularis nervi trigemini / CN V3).',
    vaskularisasi: 'Arteriae temporales profundae (cabang A. maxillaris) dan arteria temporalis media.',
    korelasiKlinis: 'Sakit kepala tegang (tension-type headache) dan gangguan disfungsi artikulasio temporomandibularis (TMD).'
  },
  'orbicularis oculi': {
    type: 'muscle',
    nameLatin: 'Musculus Orbicularis Oculi',
    nameId: 'Otot Orbikularis Okuli (Penutup Kelopak Mata)',
    origo: 'Pars orbitalis: Pars nasalis ossis frontalis, processus frontalis maxillae, ligamentum palpebrale mediale. Pars palpebralis: Ligamentum palpebrale mediale. Pars lacrimalis: Crista lacrimalis posterior.',
    insersio: 'Serat melingkar mengelilingi rima palpebrarum membentuk cincin konsentris dan menyatu di raphe palpebralis lateralis.',
    kinesiologi: 'Pars palpebralis: Menutup kelopak mata dengan lembut saat berkedip spontan atau tidur. Pars orbitalis: Menutup kelopak mata dengan kuat/merem erat (saat silau). Pars lacrimalis: Memompa dan mengalirkan air mata ke saccus lacrimalis.',
    inervasi: 'Rami temporales dan rami zygomatici dari Nervus facialis (CN VII).',
    vaskularisasi: 'Arteria ophthalmica, arteria facialis, dan arteria temporalis superficialis.',
    korelasiKlinis: 'Paralisis Bell (Bell\'s Palsy): kelumpuhan N. facialis menyebabkan lagophthalmos (mata tidak dapat menutup), berisiko keratitis eksposur; Uji refleks kornea (aferen CN V1, eferen CN VII).'
  },
  'orbicularis oris': {
    type: 'muscle',
    nameLatin: 'Musculus Orbicularis Oris',
    nameId: 'Otot Orbikularis Oris (Sfingter Bibir)',
    origo: 'Berasal dari serabut otot-otot fasial sekitar mulut (buccinator, levator, depressor) serta pars labialis maxillae dan mandibulae.',
    insersio: 'Mukosa dan dermis bibir, menyatu di modiolus anguli oris.',
    kinesiologi: 'Menutup rima oris, menyempitkan lubang mulut, memoncongkan bibir ke depan (puckering / kissing / whistling muscle), dan memegang bolus makanan saat mengunyah.',
    inervasi: 'Rami buccales dan ramus marginalis mandibularis dari Nervus facialis (CN VII).',
    vaskularisasi: 'Arteria labialis superior dan arteria labialis inferior (cabang langsung dari arteria facialis).',
    korelasiKlinis: 'Pada stroke motorik atau Bell\'s palsy, kelemahan orbicularis oris menyebabkan mulut mencong, ngiler (drooling), dan ketidakmampuan bersiul atau meniup lilin.'
  },
  'buccinator': {
    type: 'muscle',
    nameLatin: 'Musculus Buccinator',
    nameId: 'Otot Buksinator (Dinding Pipi / Trumpeter Muscle)',
    origo: 'Permukaan alveolar maxillae dan mandibulae tepat di seberang molar tiga, serta raphe pterygomandibularis.',
    insersio: 'Menyatu ke modiolus anguli oris dan serabut musculus orbicularis oris.',
    kinesiologi: 'Menekan pipi ke arah gigi geligi (mencegah akumulasi makanan di sulkus bukal saat mengunyah); Mengeluarkan udara bertekanan dari rongga mulut (meniup alat musik tiup atau balon).',
    inervasi: 'Rami buccales dari Nervus facialis (CN VII) untuk motorik; Saraf sensoriknya adalah N. buccalis cabang CN V3.',
    vaskularisasi: 'Arteria buccalis (cabang A. maxillaris) dan cabang dari arteria facialis.',
    korelasiKlinis: 'Ditembus oleh ductus parotideus (Stensen\'s duct) setinggi molar 2 atas; Paresis buksinator pada Bell\'s palsy menyebabkan makanan sering terselip di antara pipi dan gusi.'
  },

  // =========================================================================
  // EKSTREMITAS BAWAH (LOWER LIMB)
  // =========================================================================
  'gluteus maximus': {
    type: 'muscle',
    nameLatin: 'Musculus Gluteus Maximus',
    nameId: 'Otot Gluteus Maksimus (Bokong Terbesar)',
    origo: 'Facies glutea ilium di belakang linea glutea posterior, facies dorsalis sacrum dan coccygis, aponeurosis thoracolumbalis, serta ligamentum sacrotuberale.',
    insersio: 'Tractus iliotibialis (3/4 proksimal superfisial) dan tuberositas glutea ossis femoris (1/4 distal profunda).',
    kinesiologi: 'Ekstensor terkuat panggul (terutama saat bangkit dari duduk, melompat, atau menaiki anak tangga); Eksorotasi panggul; Serabut atas membantu abduksi, serabut bawah membantu adduksi panggul.',
    inervasi: 'Nervus gluteus inferior (segmen radiks lumbal L5, S1, S2).',
    vaskularisasi: 'Arteria glutea superior dan arteria glutea inferior.',
    korelasiKlinis: 'Situs injeksi intramuskular aman di kuadran superolateral (ventrogluteal) guna mencegah cedera Nervus ischiadicus; Gluteus maximus lurch gait (tubuh doyong ke belakang saat fase heel-strike akibat paralisis otot).'
  },
  'gluteus medius': {
    type: 'muscle',
    nameLatin: 'Musculus Gluteus Medius',
    nameId: 'Otot Gluteus Medius',
    origo: 'Facies glutea ossis ilii di antara linea glutea anterior dan linea glutea posterior.',
    insersio: 'Facies lateralis trochanter major femoris.',
    kinesiologi: 'Abduktor utama panggul pada articulatio coxae; Menjaga stabilitas pelvis pada bidang frontal agar panggul kontralateral tidak jatuh saat berdiri satu kaki (single-leg stance); Bagian anterior melakukan fleksi dan endorotasi panggul.',
    inervasi: 'Nervus gluteus superior (segmen radiks L4, L5, S1).',
    vaskularisasi: 'Arteria glutea superior (ramus profundus).',
    korelasiKlinis: 'Tanda Trendelenburg positif (pelvis kontralateral turun saat berdiri satu kaki) akibat kelemahan atau lesi N. gluteus superior; Trendelenburg / Waddling gait.'
  },
  'gluteus minimus': {
    type: 'muscle',
    nameLatin: 'Musculus Gluteus Minimus',
    nameId: 'Otot Gluteus Minimus',
    origo: 'Facies glutea ossis ilii di antara linea glutea anterior dan linea glutea inferior.',
    insersio: 'Margo anterior trochanter major femoris dan kapsul articulatio coxae.',
    kinesiologi: 'Abduksi panggul dan rotasi medial (endorotasi) paha yang kuat bersama serabut anterior m. gluteus medius; Sinergis aktif menopang stabilitas pelvis horizontal.',
    inervasi: 'Nervus gluteus superior (segmen radiks L4, L5, S1).',
    vaskularisasi: 'Ramus profundus arteriae gluteae superioris.',
    korelasiKlinis: 'Sering mengalami tendinopati gluteal dan bursitis trokanterika (Greater Trochanteric Pain Syndrome / GTPS).'
  },
  'tensor fasciae latae': {
    type: 'muscle',
    nameLatin: 'Musculus Tensor Fasciae Latae (TFL)',
    nameId: 'Otot Tensor Fascia Lata',
    origo: 'Spina Iliaca Anterior Superior (SIAS) dan labium externum crista iliaca anterior.',
    insersio: 'Tractus iliotibialis (ITB) yang berinsersio ke tuberculum Gerdy pada condylus lateralis tibiae.',
    kinesiologi: 'Menegangkan fascia lata dan tractus iliotibialis; Membantu abduksi, fleksi, dan endorotasi sendi panggul; Menstabilkan sendi lutut saat posisi ekstensi penuh.',
    inervasi: 'Nervus gluteus superior (segmen radiks L4, L5, S1).',
    vaskularisasi: 'Ramus ascendens arteriae circumflexae femoris lateralis.',
    korelasiKlinis: 'Iliotibial Band Syndrome (ITBS / Runner\'s Knee): friksi berulang ITB pada epikondilus lateral femur; Pemeriksaan Ober\'s Test untuk menilai kontraktur/kekakuan TFL.'
  },
  'piriformis': {
    type: 'muscle',
    nameLatin: 'Musculus Piriformis',
    nameId: 'Otot Piriformis',
    origo: 'Facies pelvica anterior os sacrum (antara foramen sacrale II-IV), margo superior incisura ischiadica major, dan ligamentum sacrotuberale.',
    insersio: 'Apex trochanter major femoris sisi medial.',
    kinesiologi: 'Eksorotasi paha saat articulatio coxae dalam posisi ekstensi; Abduksi paha saat panggul dalam fleksi 90°; Menstabilkan caput femoris di dalam acetabulum.',
    inervasi: 'Rami directi plexus sacralis (Nervus musculi piriformis, segmen S1, S2).',
    vaskularisasi: 'Arteria glutea superior, arteria glutea inferior, dan arteria pudenda interna.',
    korelasiKlinis: 'Sindrom Piriformis (Piriformis Syndrome): spasme atau hipertrofi otot ini menjepit Nervus ischiadicus di foramen infrapiriforme, menimbulkan gejala skiatika; Uji FAIR (Flexion, Adduction, Internal Rotation) positif.'
  },
  'iliopsoas': {
    type: 'muscle',
    nameLatin: 'Musculus Iliopsoas (Psoas Major et Iliacus)',
    nameId: 'Otot Iliopsoas (Psoas Mayor dan Iliakus)',
    origo: 'Psoas Major: Corpus dan processus transversus vertebra T12-L5 serta discus intervertebralis. Iliacus: Fossa iliaca sisi dalam dan ala ossis sacri.',
    insersio: 'Trochanter minor femoris melalui tendo konfluens iliopsoas.',
    kinesiologi: 'Fleksor terkuat sendi panggul (articulatio coxae); Mengangkat paha saat melangkah atau menaiki tangga; Membantu fleksi anterior kolumna lumbalis saat bangkit dari berbaring ke duduk (sit-up).',
    inervasi: 'Psoas major: Rami anteriores saraf spinalis lumbal (L1, L2, L3). Iliacus: Nervus femoralis (segmen L2, L3, L4).',
    vaskularisasi: 'Arteria iliolumbalis, arteria circumflexa ilium profunda, dan rami arteriae circumflexae femoris medialis.',
    korelasiKlinis: 'Tanda Psoas (Psoas Sign) positif pada apendisitis retrosekal akut; Abses psoas (sering sekunder akibat spondilitis tuberkulosa / Pott\'s disease); Uji Thomas (Thomas Test) untuk menilai kontraktur fleksi sendi panggul.'
  },
  'sartorius': {
    type: 'muscle',
    nameLatin: 'Musculus Sartorius',
    nameId: 'Otot Sartorius (Otot Penjahit / Otot Terpanjang Tubuh)',
    origo: 'Spina Iliaca Anterior Superior (SIAS).',
    insersio: 'Permukaan medial proksimal corpus tibiae sebagai komponen Pes Anserinus (bersama gracilis dan semitendinosus).',
    kinesiologi: 'Fleksi, abduksi, dan eksorotasi pada sendi panggul serta fleksi dan endorotasi pada sendi lutut (memfasilitasi postur duduk bersila penjahit tradisional).',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3).',
    vaskularisasi: 'Arteria circumflexa femoris lateralis dan rami musculares arteriae femoralis.',
    korelasiKlinis: 'Bursitis pes anserinus (nyeri terlokalisir di anteromedial proksimal tibia); Batas lateral dari Trigonum Femorale (Scarpa triangle).'
  },
  'rectus femoris': {
    type: 'muscle',
    nameLatin: 'Musculus Rectus Femoris (Komponen M. Quadriceps)',
    nameId: 'Otot Rektus Femoris (Paha Depan)',
    origo: 'Caput rectum: Spina Iliaca Anterior Inferior (SIAI). Caput reflexum: Sulcus di atas margo superior acetabulum.',
    insersio: 'Basis patellae melalui tendo quadriceps, berlanjut via ligamentum patellae ke tuberositas tibiae.',
    kinesiologi: 'Ekstensi sendi lutut (articulatio genus) dan fleksi sendi panggul (articulatio coxae); Satu-satunya komponen kuadrisep yang melintasi dua sendi (biartikular).',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3, L4).',
    vaskularisasi: 'Ramus descendens arteriae circumflexae femoris lateralis.',
    korelasiKlinis: 'Avulsi SIAI pada atlet muda saat menendang bola; Uji refleks tendo patela (Knee-jerk reflex / L3-L4); Uji Ely (Ely\'s Test) untuk mengevaluasi ketegangan rectus femoris.'
  },
  'vastus lateralis': {
    type: 'muscle',
    nameLatin: 'Musculus Vastus Lateralis',
    nameId: 'Otot Vastus Lateralis',
    origo: 'Pars superior linea intertrochanterica, margo trochanter major, labium laterale tuberositas glutea, dan labium laterale linea aspera femoris.',
    insersio: 'Margo lateralis patellae dan condylus lateralis tibiae via retinaculum patellae laterale.',
    kinesiologi: 'Ekstensi murni sendi lutut; Menstabilkan patella dari sisi lateral selama gerakan ekstensi.',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3, L4).',
    vaskularisasi: 'Ramus descendens arteriae circumflexae femoris lateralis dan arteria perforans femoris.',
    korelasiKlinis: 'Komponen kuadrisep terbesar; Lokasi baku pilihan injeksi intramuskular pada neonatus dan bayi karena terbebas dari pembuluh darah dan saraf besar.'
  },
  'vastus medialis': {
    type: 'muscle',
    nameLatin: 'Musculus Vastus Medialis (Termasuk VMO)',
    nameId: 'Otot Vastus Medialis',
    origo: 'Pars inferior linea intertrochanterica, linea pectinea, labium mediale linea aspera, dan crista supracondylaris medialis femoris.',
    insersio: 'Margo medialis patellae dan condylus medialis tibiae via retinaculum patellae mediale.',
    kinesiologi: 'Ekstensi sendi lutut; Serabut distalnya yang berjalan oblik (Vastus Medialis Obliquus / VMO) bertindak sebagai penahan medial aktif utama untuk mencegah dislokasi/subluksasi lateral patella.',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3, L4).',
    vaskularisasi: 'Arteria femoralis, cabang arteria profunda femoris, dan arteria genus descendens.',
    korelasiKlinis: 'Atrofi cepat VMO pascacedera lutut (misal robekan ACL atau meniskus) memicu Patellofemoral Pain Syndrome (Chondromalacia Patellae) akibat pergeseran patella ke arah lateral.'
  },
  'vastus intermedius': {
    type: 'muscle',
    nameLatin: 'Musculus Vastus Intermedius',
    nameId: 'Otot Vastus Intermedius',
    origo: '2/3 proksimal facies anterior dan lateralis corpus femoris serta septum intermusculare laterale.',
    insersio: 'Permukaan profunda tendo quadriceps dan tepi superior basis patellae.',
    kinesiologi: 'Ekstensi sendi lutut; Serabut terdalamnya membentuk m. articularis genus yang menarik recessus suprapatellaris ke kranial saat ekstensi agar bursa tidak terjepit.',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3, L4).',
    vaskularisasi: 'Ramus descendens arteriae circumflexae femoris lateralis.',
    korelasiKlinis: 'Kekakuan fleksi lutut pascafraktur femur akibat perlengketan sikatrik (fibrosis) antara vastus intermedius dengan periosteum femur.'
  },
  'biceps femoris': {
    type: 'muscle',
    nameLatin: 'Musculus Biceps Femoris (Hamstring Lateral)',
    nameId: 'Otot Bisep Femoris',
    origo: 'Caput longum: Facies posteroinferior tuber ischiadicum dan ligamentum sacrotuberale. Caput breve: Labium laterale linea aspera dan crista supracondylaris lateralis femoris.',
    insersio: 'Caput fibulae sisi lateral dan condylus lateralis tibiae.',
    kinesiologi: 'Fleksi sendi lutut dan eksorotasi (rotasi lateral) tungkai bawah saat lutut semifleksi; Caput longum membantu ekstensi sendi panggul.',
    inervasi: 'Caput longum: Pars tibialis nervi ischiadici (L5, S1, S2). Caput breve: Pars fibularis communis nervi ischiadici (L5, S1).',
    vaskularisasi: 'Rami perforantes arteriae profundae femoris, arteria glutea inferior, dan arteria poplitea.',
    korelasiKlinis: 'Tendon bisep femoris membatasi fossa poplitea di superolateral; Cedera regangan hamstring (hamstring pull) paling lazim mengenai caput longum saat fase ayunan akhir sprint.'
  },
  'semitendinosus': {
    type: 'muscle',
    nameLatin: 'Musculus Semitendinosus (Hamstring Medial)',
    nameId: 'Otot Semitendinosus',
    origo: 'Facies posteroinferior tuber ischiadicum (bersama caput longum bicipitis femoris).',
    insersio: 'Facies medialis proksimal corpus tibiae via tendo konfluens Pes Anserinus (di belakang sartorius, di bawah gracilis).',
    kinesiologi: 'Fleksi sendi lutut dan endorotasi tungkai bawah saat lutut semifleksi; Ekstensi sendi panggul.',
    inervasi: 'Pars tibialis nervi ischiadici (segmen radiks L5, S1, S2).',
    vaskularisasi: 'Rami perforantes arteriae profundae femoris dan arteria circumflexa femoris medialis.',
    korelasiKlinis: 'Tendon semitendinosus umum diambil (graft harvest) bersama tendo gracilis untuk rekonstruksi ligamen lutut anterior (ACL reconstruction).'
  },
  'semimembranosus': {
    type: 'muscle',
    nameLatin: 'Musculus Semimembranosus (Hamstring Medial Profunda)',
    nameId: 'Otot Semimembranosus',
    origo: 'Facies posterosuperior tuber ischiadicum.',
    insersio: 'Facies posterior condylus medialis tibiae (meluas membentuk ligamentum popliteum obliquum).',
    kinesiologi: 'Fleksi sendi lutut dan endorotasi tungkai bawah saat lutut semifleksi; Ekstensi sendi panggul; Menstabilkan kapsul posteromedial sendi lutut.',
    inervasi: 'Pars tibialis nervi ischiadici (segmen radiks L5, S1, S2).',
    vaskularisasi: 'Rami perforantes arteriae profundae femoris dan arteria genus superior medialis.',
    korelasiKlinis: 'Kista Baker (Baker\'s Cyst / Popliteal Cyst): distensi cairan sinovial di bursa gastrocnemio-semimembranosus di fossa poplitea posteromedial.'
  },
  'gracilis': {
    type: 'muscle',
    nameLatin: 'Musculus Gracilis',
    nameId: 'Otot Grasilis',
    origo: 'Margo inferior ramus inferior ossis pubis dan ramus ossis ischii.',
    insersio: 'Permukaan medial corpus tibiae proksimal (tengah dari konfigurasi Pes Anserinus).',
    kinesiologi: 'Adduksi sendi panggul; Membantu fleksi sendi lutut dan endorotasi tungkai bawah saat lutut difleksikan.',
    inervasi: 'Ramus anterior nervi obturatorii (segmen radiks L2, L3).',
    vaskularisasi: 'Arteria profunda femoris, arteria circumflexa femoris medialis, dan cabang arteria obturatoria.',
    korelasiKlinis: 'Sering digunakan sebagai flap transfer otot fungsional bebas (free functioning muscle flap) dalam operasi rekonstruksi kelumpuhan pleksus brakialis atau sfingter ani.'
  },
  'adductor longus': {
    type: 'muscle',
    nameLatin: 'Musculus Adductor Longus',
    nameId: 'Otot Aduktor Longus',
    origo: 'Permukaan anterior corpus pubis tepat di bawah tuberculum pubicum.',
    insersio: '1/3 pertengahan labium mediale linea aspera femoris.',
    kinesiologi: 'Adduksi kuat paha pada articulatio coxae; Membantu fleksi sendi panggul; Menstabilkan pelvis saat fase berjalan dan menendang bola.',
    inervasi: 'Ramus anterior nervi obturatorii (segmen radiks L2, L3, L4).',
    vaskularisasi: 'Arteria profunda femoris dan arteria circumflexa femoris medialis.',
    korelasiKlinis: 'Penyebab tersering cedera tarikan selangkangan (Groin Strain / Athletic Pubalgia) pada pesepakbola; Membentuk batas medial Trigonum Femorale.'
  },
  'adductor magnus': {
    type: 'muscle',
    nameLatin: 'Musculus Adductor Magnus',
    nameId: 'Otot Aduktor Magnus',
    origo: 'Pars pubica (adductor): Ramus inferior ossis pubis dan ramus ossis ischii. Pars ischiocondylaris (hamstring): Tuber ischiadicum.',
    insersio: 'Pars pubica: Tuberositas glutea, linea aspera, dan linea supracondylaris medialis. Pars ischiocondylaris: Tuberculum adductorium pada condylus medialis femoris.',
    kinesiologi: 'Adduktor paha paling masif dan kuat. Pars pubica memfleksikan panggul; Pars ischiocondylaris mengekstensikan panggul (bekerja seperti kelompok hamstring).',
    inervasi: 'Pars pubica: Ramus posterior nervi obturatorii (L2, L3, L4). Pars ischiocondylaris: Pars tibialis nervi ischiadici (L4, L5, S1).',
    vaskularisasi: 'Arteria obturatoria, rami perforantes arteriae profundae femoris, dan cabang arteria femoralis.',
    korelasiKlinis: 'Hiatus Adductorius (bukaan celah tendinosa di antara insersionya) adalah gerbang lintasan vasa femoralis melintas ke fossa poplitea menjadi vasa poplitea.'
  },
  'tibialis anterior': {
    type: 'muscle',
    nameLatin: 'Musculus Tibialis Anterior',
    nameId: 'Otot Tibialis Anterior',
    origo: 'Condylus lateralis tibiae, 2/3 proksimal permukaan lateral corpus tibiae, dan membrana interossea cruris.',
    insersio: 'Facies medialis dan plantar os cuneiforme mediale serta basis os metatarsale I.',
    kinesiologi: 'Dorsofleksi sendi pergelangan kaki (articulatio talocruralis) dan inversi (supinasi) kaki; Menjaga arkus longitudinalis medialis kaki saat berdiri dan berjalan.',
    inervasi: 'Nervus fibularis profundus (Nervus peroneus profundus, segmen L4, L5).',
    vaskularisasi: 'Arteria tibialis anterior.',
    korelasiKlinis: 'Lesi Nervus fibularis communis menyebabkan hilangnya kemampuan dorsofleksi kaki ("Foot Drop" / steppage gait); Sangat rentan terkena Sindrom Kompartemen Anterior tungkai bawah.'
  },
  'tibialis posterior': {
    type: 'muscle',
    nameLatin: 'Musculus Tibialis Posterior',
    nameId: 'Otot Tibialis Posterior',
    origo: 'Membrana interossea cruris, 2/3 proksimal facies posterior corpus tibiae (di bawah linea m. solei), dan facies medialis corpus fibulae.',
    insersio: 'Tuberositas ossis navicularis, dengan slip ekspansi ke ossa cuneiformia I-III, os cuboideum, dan basis ossa metatarsalia II-IV.',
    kinesiologi: 'Inversi kaki dan plantar fleksi sendi pergelangan kaki; Penopang dinamis utama bagi arkus longitudinalis medialis telapak kaki.',
    inervasi: 'Nervus tibialis (segmen radiks L4, L5).',
    vaskularisasi: 'Cabang-cabang dari Arteria tibialis posterior dan arteria fibularis.',
    korelasiKlinis: 'Disfungsi tendon tibialis posterior (PTTD / Posterior Tibial Tendon Dysfunction) merupakan penyebab paling umum flatfoot didapat pada dewasa (acquired pes planus); Berjalan di belakang malleolus medialis dalam tarsal tunnel.'
  },
  'gastrocnemius': {
    type: 'muscle',
    nameLatin: 'Musculus Gastrocnemius',
    nameId: 'Otot Gastronemius (Betis Berdua Kepala)',
    origo: 'Caput mediale: Facies poplitea condylus medialis femoris. Caput laterale: Facies posterolateral condylus lateralis femoris.',
    insersio: 'Tuber calcanei melalui Tendo Calcaneus (Tendon Achilles).',
    kinesiologi: 'Plantar fleksi kuat pergelangan kaki saat lutut ekstensi (tenaga dorong vertikal utama saat melompat atau berlari); Fleksor sendi lutut.',
    inervasi: 'Nervus tibialis (segmen radiks S1, S2).',
    vaskularisasi: 'Arteriae surales (cabang langsung dari arteria poplitea).',
    korelasiKlinis: 'Ruptur Tendon Achilles dievaluasi klinis dengan Thompson Test (kompresi betis); Pemeriksaan refleks Achilles (Ankle-jerk reflex / segmen S1-S2); "Tennis leg" (ruptur parsial caput mediale m. gastrocnemius).'
  },
  'soleus': {
    type: 'muscle',
    nameLatin: 'Musculus Soleus',
    nameId: 'Otot Soleus (Jantung Perifer)',
    origo: 'Facies posterior caput fibulae, 1/4 proksimal corpus fibulae, linea musculi solei tibiae, dan arcus tendineus musculi solei.',
    insersio: 'Tuber calcanei via Tendo Achilles bersama kedua caput gastrocnemius.',
    kinesiologi: 'Plantar fleksi pergelangan kaki terutama saat lutut fleksi (otot postural antigravitasi saat berdiri); Kontraksinya memompa sinus venosus intramuskular ke proksimal ("peripheral heart").',
    inervasi: 'Nervus tibialis (segmen radiks S1, S2).',
    vaskularisasi: 'Arteria poplitea, arteria tibialis posterior, dan arteria fibularis.',
    korelasiKlinis: 'Sinus vena soleus adalah lokasi tersering nidus Deep Vein Thrombosis (DVT) pada pasien imobilisasi; Berperan dalam refleks pergelangan kaki S1-S2.'
  },
  'peroneus longus': {
    type: 'muscle',
    nameLatin: 'Musculus Fibularis Longus (Musculus Peroneus Longus)',
    nameId: 'Otot Peroneus Longus (Fibularis Longus)',
    origo: 'Caput fibulae, 2/3 proksimal facies lateralis corpus fibulae, dan septa intermuscularia cruris.',
    insersio: 'Permukaan plantar os cuneiforme mediale dan basis os metatarsale I (menyilang telapak kaki dari lateral ke medial).',
    kinesiologi: 'Eversi (pronasi) kaki yang kuat dan membantu plantar fleksi sendi pergelangan kaki; Menjaga kestabilan arkus transversus dan longitudinalis lateralis kaki.',
    inervasi: 'Nervus fibularis superficialis / N. peroneus superficialis (segmen radiks L5, S1).',
    vaskularisasi: 'Cabang-cabang arteria fibularis (peronea) dan arteria tibialis anterior.',
    korelasiKlinis: 'Tendonnya melintas di posterior malleolus lateralis dalam sulcus fibularis; subluksasi tendon peroneal sering menyertai sprain pergelangan kaki lateral berat (inversion injury).'
  },
  'flexor hallucis longus': {
    type: 'muscle',
    nameLatin: 'Musculus Flexor Hallucis Longus (FHL)',
    nameId: 'Otot Fleksor Halusis Longus (Fleksor Ibu Jari Kaki)',
    origo: '2/3 distal facies posterior corpus fibulae dan pars inferior membrana interossea.',
    insersio: 'Basis phalanx distalis hallucis (ibu jari kaki) pada permukaan plantar.',
    kinesiologi: 'Fleksi phalanx distalis ibu jari kaki pada sendi interfalangeal; Plantar fleksi pergelangan kaki; Memberikan daya dorong tolakan akhir langkah kaki ("toe-off phase") saat berjalan dan berlari; Menopang sustentaculum tali.',
    inervasi: 'Nervus tibialis (segmen radiks S1, S2).',
    vaskularisasi: 'Arteria fibularis (cabang utama) dan arteria tibialis posterior.',
    korelasiKlinis: 'Tendon melintas di bawah sustentaculum tali calcanei; "Dancer\'s Tendinitis" (tenosinovitis FHL pada penari balet) akibat posterior ankle impingement (Os Trigonum Syndrome).'
  },
  'extensor digitorum longus': {
    type: 'muscle',
    nameLatin: 'Musculus Extensor Digitorum Longus (EDL)',
    nameId: 'Otot Ekstensor Digitorum Longus (Tungkai Bawah)',
    origo: 'Condylus lateralis tibiae, 3/4 proksimal facies medialis corpus fibulae, dan pars superior membrana interossea.',
    insersio: 'Bercabang menjadi empat tendon ke ekspansi ekstensor dorsal phalanx medialis dan distalis digit II-V kaki.',
    kinesiologi: 'Ekstensi jari-jari kaki II-V pada sendi metatarsophalangeal dan interphalangeal; Membantu dorsofleksi pergelangan kaki dan eversi kaki.',
    inervasi: 'Nervus fibularis profundus / N. peroneus profundus (segmen radiks L5, S1).',
    vaskularisasi: 'Arteria tibialis anterior.',
    korelasiKlinis: 'Komponen kompartemen anterior tungkai bawah; Kelemahannya menyertai lesi foot drop; Rentan terhadap anterior exertional compartment syndrome pada pelari jarak jauh.'
  },

  // =========================================================================
  // SINONIM, VARIAN & KOMPONEN TAMBAHAN UNTUK INTEGRASI LOOKUP MAKSIMAL
  // =========================================================================
  'fibularis longus': {
    type: 'muscle',
    nameLatin: 'Musculus Fibularis Longus',
    nameId: 'Otot Fibularis Longus (Peroneus Longus)',
    origo: 'Caput fibulae dan 2/3 proksimal facies lateralis corpus fibulae.',
    insersio: 'Permukaan plantar os cuneiforme mediale dan basis os metatarsale I.',
    kinesiologi: 'Eversi (pronasi) kaki yang kuat dan membantu plantar fleksi pergelangan kaki; Menjaga integritas arkus transversus pedis.',
    inervasi: 'Nervus fibularis superficialis (segmen radiks L5, S1).',
    vaskularisasi: 'Arteria fibularis dan cabang arteria tibialis anterior.',
    korelasiKlinis: 'Subluksasi tendon fibularis longus di belakang malleolus lateralis akibat robekan retinaculum musculorum fibularium superius.'
  },
  'diaphragm': {
    type: 'muscle',
    nameLatin: 'Diaphragma',
    nameId: 'Otot Diafragma',
    origo: 'Pars sternalis (processus xiphoideus), Pars costalis (cartilago costalis VII-XII), Pars lumbalis (crus dextrum et sinistrum serta ligamenta arcuata).',
    insersio: 'Centrum tendineum diaphragmatis.',
    kinesiologi: 'Otot inspirasi utama: berkontraksi mendatar ke kaudal, memperbesar volume rongga dada dan menurunkan tekanan intratorakal.',
    inervasi: 'Nervus phrenicus (segmen radiks C3, C4, C5: "C3, 4, 5 keep the diaphragm alive").',
    vaskularisasi: 'Arteria pericardiacophrenica, arteria musculophrenica, arteria phrenica superior et inferior.',
    korelasiKlinis: 'Hernia diafragmatika (hernia hiatus), singultus (cegukan), dan paralisis diafragma pasca trauma medula spinalis servikal.'
  },
  'quadriceps': {
    type: 'muscle',
    nameLatin: 'Musculus Quadriceps Femoris',
    nameId: 'Otot Kuadrisep Femoris (Paha Depan)',
    origo: 'Gabungan 4 caput: Rectus femoris (SIAI), Vastus lateralis (linea aspera lateral), Vastus medialis (linea aspera medial), Vastus intermedius (corpus femoris anterior).',
    insersio: 'Tuberositas tibiae melalui tendo quadriceps dan ligamentum patellae.',
    kinesiologi: 'Ekstensor utama sendi lutut (articulatio genus); Rectus femoris juga memfleksikan sendi panggul (articulatio coxae); Menstabilkan tungkai bawah saat berjalan dan berdiri.',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3, L4).',
    vaskularisasi: 'Arteria circumflexa femoris lateralis dan arteria profunda femoris.',
    korelasiKlinis: 'Refleks tendo patela (Knee-jerk reflex / L3-L4) menguji jaras lengkung refleks medula spinalis.'
  },
  'psoas major': {
    type: 'muscle',
    nameLatin: 'Musculus Psoas Major',
    nameId: 'Otot Psoas Mayor',
    origo: 'Corpus dan processus transversus vertebra T12-L5 serta discus intervertebralis.',
    insersio: 'Trochanter minor femoris melalui tendo konfluens iliopsoas.',
    kinesiologi: 'Fleksor utama sendi panggul; Membantu fleksi anterior kolumna lumbalis saat posisi terlentang bangkit ke posisi duduk.',
    inervasi: 'Rami anteriores saraf spinalis lumbal (L1, L2, L3).',
    vaskularisasi: 'Arteria iliolumbalis dan rami arteriae lumbalis.',
    korelasiKlinis: 'Psoas sign positif pada apendisitis akut; Abses psoas pada spondilitis tuberkulosa (Pott\'s disease).'
  },
  'iliacus': {
    type: 'muscle',
    nameLatin: 'Musculus Iliacus',
    nameId: 'Otot Iliakus',
    origo: 'Fossa iliaca sisi dalam, crista iliaca interna, dan ala ossis sacri.',
    insersio: 'Trochanter minor femoris bersama tendo psoas major.',
    kinesiologi: 'Fleksi sendi panggul dan stabilisasi articulatio coxae bersama m. psoas major.',
    inervasi: 'Nervus femoralis (segmen radiks L2, L3).',
    vaskularisasi: 'Rami iliaci dari arteria iliolumbalis dan cabang arteria obturatoria.',
    korelasiKlinis: 'Hematoma iliopsoas (terutama pada pasien dengan hemofilia atau terapi antikoagulan) dapat memicu kompresi Nervus femoralis.'
  }
};
