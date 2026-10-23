import { OrganDetails } from '../medical-knowledge';

/**
 * Kamus Pengetahuan Medis Sistem Kardiovaskular (Jantung & Sirkulasi Pembuluh Darah)
 * Komprehensif: Morfologi, Vaskularisasi (Arteri & Vena), Inervasi Otonom & Sensorik Nyeri Alih,
 * Drainase Limfatik, serta Korelasi Klinis Patologis.
 */
export const CARDIOVASCULAR_KNOWLEDGE: Record<string, OrganDetails> = {
  // ==========================================
  // JANTUNG (COR) & STRUKTUR TERKAIT
  // ==========================================
  'heart': {
    type: 'organ',
    nameLatin: 'Cor',
    nameId: 'Jantung',
    deskripsi: 'Organ muskular berongga berbentuk kerucut piramidal terbalik di mediastinum medium rongga toraks, terbungkus perikardium. Memiliki basis cordis (posterior-superior) dan apex cordis (ventro-inferolateral di sela iga V linea medioclavicularis sinistra). Berfungsi sebagai pompa ganda: pompa kanan untuk sirkulasi pulmonal (rendah resistensi) dan pompa kiri untuk sirkulasi sistemik (tinggi resistensi).',
    arteri: 'Arteria coronaria dextra (RCA) dan Arteria coronaria sinistra (LCA, bercabang menjadi ramus interventricularis anterior/LAD dan ramus circumflexus/LCx) yang berpangkal dari sinus aortae tepat di atas valva aortae.',
    vena: 'Sinus coronarius (menampung V. cardiaca magna, V. cardiaca media, V. cardiaca parva, V. posterior ventriculi sinistri) yang bermuara langsung ke atrium dextrum; serta venae cordis minimae (Thebesii) yang mengalir langsung ke bilik-bilik jantung.',
    inervasi: 'Plexus cardiacus (profundus dan superficialis). Persarafan simpatis berasal dari truncus sympathicus segmen T1-T4/T5 (efek kronotropik, inotropik, dromotropik positif). Parasimpatis dari Nervus vagus (CN X) melalui rami cardiaci (efek kronotropik dan dromotropik negatif). Serabut nosiseptif aferen viseral berjalan bersama simpatis menuju radiks dorsalis segmen T1-T5 medulla spinalis, memediasi nyeri alih (referred pain) ke prekordial, bahu kiri, lengan medial kiri, leher, dan rahang.',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores (carinal), nodi tracheobronchiales superiores, dan nodi mediastinales anteriores (brachiocephalici).',
    korelasiKlinis: 'Penyakit Jantung Koroner (PJK), Infark Miokard Akut (STEMI/NSTEMI), Angina Pectoris, Gagal Jantung Kongestif (CHF), Kardiomiopati, Tamponade Jantung, dan Henti Jantung Mendadak.'
  },
  'cor': {
    type: 'organ',
    nameLatin: 'Cor',
    nameId: 'Jantung',
    deskripsi: 'Organ muskular berongga berbentuk kerucut piramidal terbalik di mediastinum medium rongga toraks, terbungkus perikardium. Memiliki basis cordis (posterior-superior) dan apex cordis (ventro-inferolateral di sela iga V linea medioclavicularis sinistra). Berfungsi sebagai pompa ganda: pompa kanan untuk sirkulasi pulmonal (rendah resistensi) dan pompa kiri untuk sirkulasi sistemik (tinggi resistensi).',
    arteri: 'Arteria coronaria dextra (RCA) dan Arteria coronaria sinistra (LCA, bercabang menjadi ramus interventricularis anterior/LAD dan ramus circumflexus/LCx) yang berpangkal dari sinus aortae tepat di atas valva aortae.',
    vena: 'Sinus coronarius (menampung V. cardiaca magna, V. cardiaca media, V. cardiaca parva, V. posterior ventriculi sinistri) yang bermuara langsung ke atrium dextrum; serta venae cordis minimae (Thebesii) yang mengalir langsung ke bilik-bilik jantung.',
    inervasi: 'Plexus cardiacus (profundus dan superficialis). Persarafan simpatis berasal dari truncus sympathicus segmen T1-T4/T5 (efek kronotropik, inotropik, dromotropik positif). Parasimpatis dari Nervus vagus (CN X) melalui rami cardiaci (efek kronotropik dan dromotropik negatif). Serabut nosiseptif aferen viseral berjalan bersama simpatis menuju radiks dorsalis segmen T1-T5 medulla spinalis, memediasi nyeri alih (referred pain) ke prekordial, bahu kiri, lengan medial kiri, leher, dan rahang.',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores (carinal), nodi tracheobronchiales superiores, dan nodi mediastinales anteriores (brachiocephalici).',
    korelasiKlinis: 'Penyakit Jantung Koroner (PJK), Infark Miokard Akut (STEMI/NSTEMI), Angina Pectoris, Gagal Jantung Kongestif (CHF), Kardiomiopati, Tamponade Jantung, dan Henti Jantung Mendadak.'
  },
  'atrium dextrum': {
    type: 'organ',
    nameLatin: 'Atrium Dextrum',
    nameId: 'Serambi Jantung Kanan (Atrium Kanan)',
    deskripsi: 'Ruang penerima darah deoksigenasi dari sirkulasi sistemik dan sirkuit jantung sendiri. Memiliki sinus venarum cavarum berdinding licin yang menerima muara Vena Cava Superior, Vena Cava Inferior (dengan valvula Eustachii), dan Sinus Coronarius (dengan valvula Thebesii). Dinding anterior berotot kasar dibentuk oleh musculi pectinati yang dipisahkan dari bagian licin oleh crista terminalis (internal) dan sulcus terminalis (eksternal). Septum interatriale memiliki cekungan fossa ovalis dengan limbus fossae ovalis (sisa foramen ovale).',
    arteri: 'Ramus nodi sinoatrialis dan rami atriales dari Arteria coronaria dextra (RCA) pada 60% individu, atau ramus circumflexus LCA pada 40% individu.',
    vena: 'Venae cardiacae anteriores (bermuara langsung menembus dinding atrium dextrum), sinus coronarius, dan venae cordis minimae (Thebesii).',
    inervasi: 'Plexus cardiacus; inervasi parasimpatis via N. vagus (CN X) dan simpatis via segmen T1-T4 truncus sympathicus. Mengandung baroreseptor volume atrium tipe B (refleks Bainbridge saat regangan atrium meningkat). Nyeri alih merujuk ke dermatom T1-T4.',
    limfatik: 'Nodi lymphatici mediastinales anteriores dan tracheobronchiales.',
    korelasiKlinis: 'Fibrilasi Atrium (AF) memicu stasis dan tromboemboli; Defek Septum Atrium (ASD - ostium secundum paling lazim); Pembesaran atrium kanan (P-pulmonale pada EKG) akibat hipertensi pulmonal atau kor pulmonale.'
  },
  'atrium sinistrum': {
    type: 'organ',
    nameLatin: 'Atrium Sinistrum',
    nameId: 'Serambi Jantung Kiri (Atrium Kiri)',
    deskripsi: 'Ruang posterior basis cordis yang menerima darah beroksigen dari pulmo melalui empat venae pulmonales (duae superiores et duae inferiores). Sebagian besar dinding bagian dalam licin (berasal dari penyerapan vena pulmonalis embrional), sementara auricula sinistra memiliki trabekula musculi pectinati. Septum interatriale menghadap ke depan-kanan dan memiliki valvula foraminis ovalis. Darah mengalir ke ventrikel kiri melalui ostium atrioventriculare sinistrum yang dijaga oleh valva mitralis.',
    arteri: 'Rami atriales dari Ramus circumflexus arteriae coronariae sinistrae (LCx) dan cabang atrial RCA.',
    vena: 'Vena obliqua atrii sinistri (Marshall - sisa embriologis vena cava superior sinistra) yang bermuara ke Sinus coronarius, serta venae cordis minimae.',
    inervasi: 'Plexus cardiacus: Serabut vagal parasimpatis (CN X) dan serabut simpatis postganglionik torakal atas (T1-T4). Mengandung mekanoreseptor regangan atrium penghasil Atrial Natriuretic Peptide (ANP).',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores (subcarinal) dan nodi mediastinales posteriores.',
    korelasiKlinis: 'Dilatasi/hipertrofi atrium kiri (P-mitrale pada EKG) akibat stenosis mitral atau hipertensi kronis; Stasis darah di auricula sinistra menjadi predisposisi utama pembentukan trombus pada Fibrilasi Atrium yang dapat lepas memicu stroke iskemik serebral; Sindrom Ortner (disfonia akibat kompresi N. laryngeus recurrens sinister oleh atrium kiri yang membesar masif).'
  },
  'ventriculus dexter': {
    type: 'organ',
    nameLatin: 'Ventriculus Dexter',
    nameId: 'Bilik Jantung Kanan (Ventrikel Kanan)',
    deskripsi: 'Ruang berotot berbentuk bulan sabit (pada potongan melintang) yang membentuk sebagian besar facies sternocostalis (anterior) cordis. Memiliki dinding inflow yang berkerut dengan trabeculae carneae, crista supraventricularis, dan tiga musculi papillares (anterior, posterior, dan septalis) yang terhubung ke cuspis valva tricuspidalis via chordae tendineae. Terdapat trabecula septomarginalis (moderator band) yang membawa crus dextrum berkas His ke m. papillaris anterior. Bagian outflow berwujud corong berdinding licin yang disebut conus arteriosus (infundibulum) menuju ostium trunci pulmonalis.',
    arteri: 'Ramus marginalis dexter dan ramus interventricularis posterior (PDA) dari Arteria coronaria dextra (RCA), serta rami anteriores dari ramus interventricularis anterior (LAD).',
    vena: 'Vena cardiaca parva dan vena cardiaca media yang mengalir ke sinus coronarius, serta venae ventriculi dextri anteriores.',
    inervasi: 'Plexus cardiacus (segmen mielomer T1-T4 simpatis; N. vagus parasimpatis). Nyeri nosiseptif dihantarkan via saraf simpatis ke medulla spinalis torakal atas.',
    limfatik: 'Nodi lymphatici mediastinales anteriores dan tracheobronchiales inferiores.',
    korelasiKlinis: 'Infark miokard ventrikel kanan (sering menyertai infark dinding inferior akibat oklusi proksimal RCA, ditandai hipotensi berat yang bergantung preload cairan dan sensitif terhadap nitrat); Gagal jantung kanan (RV failure) akibat hipertensi pulmonal (kor pulmonale); Stenosis infundibular pulmonal pada Tetralogi Fallot.'
  },
  'ventriculus sinister': {
    type: 'organ',
    nameLatin: 'Ventriculus Sinister',
    nameId: 'Bilik Jantung Kiri (Ventrikel Kiri)',
    deskripsi: 'Ruang berdinding tebal berbentuk konikal (tebal dinding 8-12 mm, sekitar 3 kali lebih tebal dari ventrikel kanan) yang menghasilkan tekanan sistolik tinggi (120 mmHg) untuk memompa darah ke sirkulasi sistemik. Membentuk apex cordis dan sebagian besar facies diaphragmatica. Bagian inflow memiliki trabeculae carneae halus, dua musculi papillares kokoh (anterior dan posterior) yang menopang chordae tendineae valva mitralis. Bagian outflow berdinding licin disebut vestibulum aortae menuju ostium aortae. Septum interventriculare memiliki pars muscularis tebal dan pars membranacea tipis di superior.',
    arteri: 'Ramus interventricularis anterior (LAD) dan Ramus circumflexus (LCx) dari Arteria coronaria sinistra, serta Ramus interventricularis posterior (PDA) dari RCA (sistem dominan kanan 85%) atau LCx (dominan kiri 15%).',
    vena: 'Vena cardiaca magna (berjalan bersama LAD di sulcus interventricularis anterior), vena posterior ventriculi sinistri, dan vena cardiaca media yang bermuara ke Sinus coronarius.',
    inervasi: 'Plexus cardiacus profundus (simpatis ganglia servikotorakal T1-T4, parasimpatis rami cardiaci N. vagus). Nyeri nosiseptif iskemik dihantarkan via radiks posterior T1-T4/T5.',
    limfatik: 'Trunkus limfatikus kardiak kiri mengalir menuju nodi lymphatici tracheobronchiales inferiores dan nodi mediastinales anteriores.',
    korelasiKlinis: 'Hipertrofi Ventrikel Kiri (LVH) akibat hipertensi kronis atau stenosis aorta; Infark Miokard transmural masif akibat oklusi LAD; Ruptur m. papillaris posterior (suplai tunggal dari PDA) pasca-infark menyebabkan regurgitasi mitral akut fulminan dan edema paru kardiogenik; Fraksi ejeksi ventrikel kiri (LVEF) merupakan parameter hemodinamik kunci gagal jantung sistolik (HFrEF).'
  },
  'valva tricuspidalis': {
    type: 'organ',
    nameLatin: 'Valva Atrioventricularis Dextra / Valva Tricuspidalis',
    nameId: 'Katup Trikuspid',
    deskripsi: 'Katup atrioventrikular kanan yang memisahkan atrium dextrum dan ventriculus dexter, terdiri dari anulus fibrosus dexter, tiga daun katup (cuspis anterior, cuspis posterior, dan cuspis septalis), chordae tendineae, dan musculi papillares. Terbuka selama diastol untuk pengisian ventrikel dan menutup rapat selama sistol ventrikel (menghasilkan komponen tricuspid dari bunyi jantung I / S1).',
    arteri: 'Daun katup bersifat avaskular atau hanya menerima difusi langsung dari darah intrakardiak; basis anulus disuplai oleh rami atriales et ventriculares dari Arteria coronaria dextra (RCA).',
    vena: 'Drainase mikrovaskular anulus menuju venae cardiacae anteriores dan sinus coronarius.',
    inervasi: 'Pleksus subendokardial kardiak (ujung saraf sensorik dan otonom intrinsik di sekitar anulus fibrosus).',
    limfatik: 'Mengalir bersama pleksus limfatik subendokardial menuju nodi tracheobronchiales.',
    korelasiKlinis: 'Regurgitasi Trikuspid (TR) yang ditandai bising pansistolik di linea sternalis sinistra bawah dan gelombang V menonjol pada pulsasi vena jugularis; Endokarditis infektif katup trikuspid lazim terjadi pada pengguna obat suntik intravena (IVDU) akibat Staphylococcus aureus; Anomali Ebstein (pergeseran daun katup septal dan posterior ke arah apeks ventrikel kanan).'
  },
  'valva mitralis': {
    type: 'organ',
    nameLatin: 'Valva Atrioventricularis Sinistra / Valva Mitralis / Valva Bicuspidalis',
    nameId: 'Katup Mitral (Katup Bikuspidal)',
    deskripsi: 'Katup atrioventrikular kiri yang memiliki dua daun katup: cuspis anterior (lebih besar, berkontak dekat dengan outflow tract aorta) dan cuspis posterior (memiliki tiga scallops: P1, P2, P3 berhadapan dengan A1, A2, A3). Daun katup terikat pada anulus fibrosus sinister dan ditopang oleh chordae tendineae dari musculi papillares anterior dan posterior. Berfungsi mencegah regurgitasi darah dari ventrikel kiri ke atrium kiri selama ejeksi sistolik (menghasilkan komponen mitral dominan dari bunyi jantung I / S1).',
    arteri: 'Jaringan daun katup avaskular; anulus fibrosus dan basis valvular disuplai oleh rami circumflexi LCA dan cabang marginal RCA.',
    vena: 'Venae cardiacae internae dan tributari sinus coronarius.',
    inervasi: 'Pleksus subendokardial kardiak (serat otonom intrinsik).',
    limfatik: 'Anyaman limfatik subendokardial ke nodi tracheobronchiales.',
    korelasiKlinis: 'Stenosis Mitral (etiologi tersering demam rematik akut, menimbulkan bising mid-diastolik dengan opening snap); Regurgitasi Mitral (bising pansistolik menjalar ke aksila); Prolaps Katup Mitral (MVP, degenerasi miksomatosa dengan midsystolic click); Ruptur chordae tendineae menyebabkan regurgitasi akut darurat.'
  },
  'valva bicuspidalis': {
    type: 'organ',
    nameLatin: 'Valva Atrioventricularis Sinistra / Valva Mitralis / Valva Bicuspidalis',
    nameId: 'Katup Mitral (Katup Bikuspidal)',
    deskripsi: 'Katup atrioventrikular kiri yang memiliki dua daun katup: cuspis anterior (lebih besar, berkontak dekat dengan outflow tract aorta) dan cuspis posterior (memiliki tiga scallops: P1, P2, P3 berhadapan dengan A1, A2, A3). Daun katup terikat pada anulus fibrosus sinister dan ditopang oleh chordae tendineae dari musculi papillares anterior dan posterior. Berfungsi mencegah regurgitasi darah dari ventrikel kiri ke atrium kiri selama ejeksi sistolik (menghasilkan komponen mitral dominan dari bunyi jantung I / S1).',
    arteri: 'Jaringan daun katup avaskular; anulus fibrosus dan basis valvular disuplai oleh rami circumflexi LCA dan cabang marginal RCA.',
    vena: 'Venae cardiacae internae dan tributari sinus coronarius.',
    inervasi: 'Pleksus subendokardial kardiak (serat otonom intrinsik).',
    limfatik: 'Anyaman limfatik subendokardial ke nodi tracheobronchiales.',
    korelasiKlinis: 'Stenosis Mitral (etiologi tersering demam rematik akut, menimbulkan bising mid-diastolik dengan opening snap); Regurgitasi Mitral (bising pansistolik menjalar ke aksila); Prolaps Katup Mitral (MVP, degenerasi miksomatosa dengan midsystolic click); Ruptur chordae tendineae menyebabkan regurgitasi akut darurat.'
  },
  'valva aortae': {
    type: 'organ',
    nameLatin: 'Valva Aortae',
    nameId: 'Katup Aorta',
    deskripsi: 'Katup semilunar yang memisahkan ventrikel kiri dari aorta ascendens, terletak di ostium aortae. Terdiri atas tiga cuspis semilunares berbentuk saku: valvula semilunaris dextra (menutupi ostium a. coronaria dextra), valvula semilunaris sinistra (menutupi ostium a. coronaria sinistra), dan valvula semilunaris posterior (non-koronaria). Setiap cuspis memiliki tepi bebas tipis (lunula) dan tonjolan fibrous sentral (nodulus Arantii). Di belakang masing-masing cuspis terdapat sinus aortae (sinus Valsalva). Penutupan katup ini menandai awal diastol dan menghasilkan komponen A2 dari bunyi jantung II (S2).',
    arteri: 'Dinding sinus Valsalva disuplai langsung oleh mikrosirkulasi vasa vasorum aorta dan arteri koroner; cuspis katup mandiri mendapat nutrisi via difusi intraluminal.',
    vena: 'Drainase mikrovaskular vasa vasorum menuju sinus coronarius dan vena brachiocephalica.',
    inervasi: 'Serabut nosiseptif dan vasomotor pada akar aorta berasal dari plexus cardiacus profundus.',
    limfatik: 'Nodi lymphatici mediastinales anteriores.',
    korelasiKlinis: 'Stenosis Aorta kalsifikasi senilis atau kongenital bikuspid (menyebabkan trias klinis: angina, sinkop, dispnea de effort, dan bising ejeksi sistolik crescendo-decrescendo menjalar ke karotis); Insufisiensi/Regurgitasi Aorta (AR, pulsus celer/water-hammer pulse, bising diastolik dini decrescendo); Endokarditis infektif; Diseksi aorta tipe Stanford A yang meluas ke anulus katup.'
  },
  'valva trunci pulmonalis': {
    type: 'organ',
    nameLatin: 'Valva Trunci Pulmonalis',
    nameId: 'Katup Pulmonal',
    deskripsi: 'Katup semilunar di ostium trunci pulmonalis pada apeks conus arteriosus ventrikel kanan. Terdiri atas tiga cuspis semilunares: valvula semilunaris anterior, valvula semilunaris dextra, dan valvula semilunaris sinistra. Masing-masing memiliki lunula dan nodulus valvulae semilunaris (nodulus Morgagni). Menutup saat awal diastol ventrikel untuk mencegah refluks darah dari truncus pulmonalis ke ventrikel kanan (menghasilkan komponen P2 dari bunyi jantung II / S2).',
    arteri: 'Vasa vasorum truncus pulmonalis dari cabang conus arteriosus (arteria coronaria dextra) dan difusi lumen.',
    vena: 'Venae cardiacae anteriores dan tributari sinus coronarius.',
    inervasi: 'Cabang kardiak otonom dari plexus cardiacus superficialis.',
    limfatik: 'Nodi lymphatici mediastinales anteriores dan tracheobronchiales.',
    korelasiKlinis: 'Stenosis katup pulmonal (kelainan kongenital lazim pada Tetralogi Fallot atau Sindrom Noonan); Regurgitasi pulmonal (PR, bising diastolik Graham Steell pada pasien hipertensi arteri pulmonal berat).'
  },
  'myocardium': {
    type: 'organ',
    nameLatin: 'Myocardium',
    nameId: 'Miokardium (Lapisan Otot Jantung)',
    deskripsi: 'Lapisan muskular tengah dinding jantung yang paling tebal, tersusun atas sel-sel kardiomiosit yang beranastomosis membentuk sinsisium fungsional melalui diskus interkalaris (memiliki gap junction untuk konduksi listrik cepat dan desmosom untuk kekuatan mekanis). Dinding ventrikel kiri memiliki tiga lapisan orientasi miofiber: subepikardial heliks kiri, sirkular medial, dan subendokardial heliks kanan, menghasilkan kontraksi memuntir (wringing/torsion motion) yang sangat efisien memeras darah ke aorta.',
    arteri: 'Arteria coronaria dextra (RCA) dan Arteria coronaria sinistra (LCA dengan LAD dan LCx) menembus miokardium sebagai arteri intramural/perforantes.',
    vena: 'Sinus coronarius dan cabang-cabangnya (V. cardiaca magna, media, parva) serta venae cordis minimae (Thebesii).',
    inervasi: 'Simpatis (T1-T4) meningkatkan inotropik (kekuatan kontraksi) via reseptor beta-1 adrenergik; Parasimpatis (N. vagus) sedikit menginervasi miokard ventrikel namun padat pada atrium. Serabut aferen simpatis menghantarkan nyeri iskemik (angina).',
    limfatik: 'Anyaman limfatik subepikardial yang mengalir ke nodi lymphatici tracheobronchiales dan mediastinales anteriores.',
    korelasiKlinis: 'Infark Miokard Akut (nekrosis kardiomiosit akibat iskemia berkepanjangan); Miokarditis (inflamasi virus seperti Coxsackie B, SARS-CoV-2, atau autoimun); Kardiomiopati dilatasi, hipertrofik (HOCM), atau restriktif.'
  },
  'pericardium': {
    type: 'organ',
    nameLatin: 'Pericardium',
    nameId: 'Perikardium (Selaput Pembungkus Jantung)',
    deskripsi: 'Kantung fibroserosa berlapis ganda yang mengelilingi jantung dan pangkal pembuluh darah besar. Terdiri dari Pericardium fibrosum (lapisan luar liat, padat, melekat di bawah pada centrum tendineum diafragma via ligamentum pericardiacophrenicum dan di depan pada sternum via ligamentum sternopericardiaca) dan Pericardium serosum (terdiri atas lamina parietalis dan lamina visceralis / epicardium). Di antara kedua lamina serosa terdapat cavitas pericardiaca berisi 15-50 mL cairan perikardial pelumas. Memiliki dua resesus penting: sinus transversus pericardii dan sinus obliquus pericardii.',
    arteri: 'Terutama Arteria pericardiacophrenica (cabang dari A. thoracica interna), dibantu oleh rami musculophrenici, rami bronchiales, rami oesophageales dari aorta thoracica, dan arteriae coronariae (untuk lamina visceralis).',
    vena: 'Vena pericardiacophrenica bermuara ke Vena brachiocephalica atau Vena thoracica interna, serta venae azygos.',
    inervasi: 'Lamina parietalis dan pericardium fibrosum diinervasi secara somatik oleh Nervus phrenicus (C3, C4, C5), sehingga iritasi perikardium menimbulkan nyeri tajam menjalar ke pundak dan m. trapezius ipsilateral; Lamina visceralis (epikardium) hanya memiliki inervasi otonom viseral tanpa sensitivitas somatik.',
    limfatik: 'Nodi lymphatici pericardiales anteriores, nodi phrenici superiores, dan nodi tracheobronchiales.',
    korelasiKlinis: 'Perikarditis akut (friction rub perikardial, elevasi segmen ST difus dan depresi PR pada EKG, nyeri pleuritik membaik saat duduk membungkuk); Efusi Perikardial; Tamponade Jantung (Trias Beck: hipotensi, JVP meningkat, suara jantung menjauh/muffled; pulsus paradoxus) yang membutuhkan perikardiosentesis darurat.'
  },
  'nodus sinoatrialis': {
    type: 'organ',
    nameLatin: 'Nodus Sinuatrialis / Nodus Keith-Flack',
    nameId: 'Nodus Sinoatrial (SA Node / Pacemaker Alami Jantung)',
    deskripsi: 'Struktur seluler khusus berbentuk bulan sabit lonjong (panjang 10-20 mm, lebar 2-5 mm) terletak subepikardial pada crista terminalis tepat di persimpangan anterolateral antara Vena Cava Superior dan atrium dextrum. Bertindak sebagai pemacu jantung alami utama (pacemaker primer) dengan otomatisitas tertinggi (kecepatan intrinsik 60-100 kali/menit) melalui depolarisasi fase 4 lambat spontan (funny current / If channel).',
    arteri: 'Ramus nodi sinuatrialis (Arteria nodi sinoatrialis) yang berasal dari Arteria coronaria dextra (RCA) pada sekitar 60% populasi, atau dari Ramus circumflexus LCA pada sekitar 40% populasi.',
    vena: 'Venae atriales directa yang mengalir ke atrium kanan dan sinus coronarius.',
    inervasi: 'Sangat kaya inervasi otonom: Serabut simpatis postganglionik servikotorakal kanan (meningkatkan frekuensi pacu via reseptor beta-1 adrenergik); Serabut parasimpatis N. vagus dexter (menurunkan laju denyut kardiak via asetilkolin pada reseptor muskarinik M2).',
    limfatik: 'Nodi lymphatici mediastinales anteriores.',
    korelasiKlinis: 'Sick Sinus Syndrome (SSS), takikardia-bradikardia sindrom, sinus arrest, sinus bradikardia berat yang memerlukan implantasi alat pacu jantung permanen (permanent pacemaker); Iskemia nodus SA pada infark miokard inferior akibat oklusi RCA.'
  },
  'sa node': {
    type: 'organ',
    nameLatin: 'Nodus Sinuatrialis / Nodus Keith-Flack',
    nameId: 'Nodus Sinoatrial (SA Node / Pacemaker Alami Jantung)',
    deskripsi: 'Struktur seluler khusus berbentuk bulan sabit lonjong (panjang 10-20 mm, lebar 2-5 mm) terletak subepikardial pada crista terminalis tepat di persimpangan anterolateral antara Vena Cava Superior dan atrium dextrum. Bertindak sebagai pemacu jantung alami utama (pacemaker primer) dengan otomatisitas tertinggi (kecepatan intrinsik 60-100 kali/menit) melalui depolarisasi fase 4 lambat spontan (funny current / If channel).',
    arteri: 'Ramus nodi sinuatrialis (Arteria nodi sinoatrialis) yang berasal dari Arteria coronaria dextra (RCA) pada sekitar 60% populasi, atau dari Ramus circumflexus LCA pada sekitar 40% populasi.',
    vena: 'Venae atriales directa yang mengalir ke atrium kanan dan sinus coronarius.',
    inervasi: 'Sangat kaya inervasi otonom: Serabut simpatis postganglionik servikotorakal kanan (meningkatkan frekuensi pacu via reseptor beta-1 adrenergik); Serabut parasimpatis N. vagus dexter (menurunkan laju denyut kardiak via asetilkolin pada reseptor muskarinik M2).',
    limfatik: 'Nodi lymphatici mediastinales anteriores.',
    korelasiKlinis: 'Sick Sinus Syndrome (SSS), takikardia-bradikardia sindrom, sinus arrest, sinus bradikardia berat yang memerlukan implantasi alat pacu jantung permanen (permanent pacemaker); Iskemia nodus SA pada infark miokard inferior akibat oklusi RCA.'
  },
  'nodus atrioventricularis': {
    type: 'organ',
    nameLatin: 'Nodus Atrioventricularis / Nodus Aschoff-Tawara',
    nameId: 'Nodus Atrioventrikular (AV Node)',
    deskripsi: 'Kumpulan sel konduksi khusus yang terletak subendokardial di dasar atrium kanan, tepatnya di dalam trigonum Koch (dibatasi oleh tendo Todaro, ostium sinus coronarius, dan anulus valva tricuspidalis cuspis septalis). Berfungsi menunda transmisi impuls listrik kardiak (sekitar 0,12 detik) dari atrium ke ventrikel untuk memberikan waktu adekuat bagi ventrikel terisi darah sebelum sistol ventrikel dimulai; juga membatasi laju konduksi ventrikel pada takiaritmia atrium. Memiliki laju otomatisitas cadangan intrinsik 40-60 kali/menit.',
    arteri: 'Ramus nodi atrioventricularis yang dipercabangkan dari Arteria coronaria dextra (RCA) pada 85-90% individu (sistem dominan kanan) pada crux cordis, atau dari Ramus circumflexus LCA pada 10-15% (sistem dominan kiri).',
    vena: 'Sinus coronarius dan vena cordis media.',
    inervasi: 'Diinervasi kuat oleh serabut parasimpatis dari Nervus vagus sinister dan serabut simpatis dari truncus sympathicus (T1-T4).',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores.',
    korelasiKlinis: 'Blok Atrioventrikular (AV Block Derajat 1, 2 Mobitz I/Wenckebach, Mobitz II, dan Derajat 3/Total AV Block) yang sering terjadi pada infark miokard inferior akibat iskemia RCA; Atrioventricular Nodal Reentrant Tachycardia (AVNRT) akibat adanya jalur ganda (fast and slow pathways) yang dapat diterapi dengan ablasi kateter frekuensi radio.'
  },
  'av node': {
    type: 'organ',
    nameLatin: 'Nodus Atrioventricularis / Nodus Aschoff-Tawara',
    nameId: 'Nodus Atrioventrikular (AV Node)',
    deskripsi: 'Kumpulan sel konduksi khusus yang terletak subendokardial di dasar atrium kanan, tepatnya di dalam trigonum Koch (dibatasi oleh tendo Todaro, ostium sinus coronarius, dan anulus valva tricuspidalis cuspis septalis). Berfungsi menunda transmisi impuls listrik kardiak (sekitar 0,12 detik) dari atrium ke ventrikel untuk memberikan waktu adekuat bagi ventrikel terisi darah sebelum sistol ventrikel dimulai; juga membatasi laju konduksi ventrikel pada takiaritmia atrium. Memiliki laju otomatisitas cadangan intrinsik 40-60 kali/menit.',
    arteri: 'Ramus nodi atrioventricularis yang dipercabangkan dari Arteria coronaria dextra (RCA) pada 85-90% individu (sistem dominan kanan) pada crux cordis, atau dari Ramus circumflexus LCA pada 10-15% (sistem dominan kiri).',
    vena: 'Sinus coronarius dan vena cordis media.',
    inervasi: 'Diinervasi kuat oleh serabut parasimpatis dari Nervus vagus sinister dan serabut simpatis dari truncus sympathicus (T1-T4).',
    limfatik: 'Nodi lymphatici tracheobronchiales inferiores.',
    korelasiKlinis: 'Blok Atrioventrikular (AV Block Derajat 1, 2 Mobitz I/Wenckebach, Mobitz II, dan Derajat 3/Total AV Block) yang sering terjadi pada infark miokard inferior akibat iskemia RCA; Atrioventricular Nodal Reentrant Tachycardia (AVNRT) akibat adanya jalur ganda (fast and slow pathways) yang dapat diterapi dengan ablasi kateter frekuensi radio.'
  },
  'fasciculus atrioventricularis': {
    type: 'organ',
    nameLatin: 'Fasciculus Atrioventricularis / Berkas His',
    nameId: 'Berkas Atrioventrikular (Berkas His / Bundle of His)',
    deskripsi: 'Satu-satunya jalur konduksi listrik fisiologis yang menembus rangka fibrosa jantung (skeleton fibrosum cordis / anulus fibrosus) menghubungkan nodus AV dengan miokardium ventrikel. Berjalan di tepi posterior pars membranacea septum interventriculare sebelum bercabang di puncak pars muscularis septum menjadi Crus dextrum (Right Bundle Branch) dan Crus sinistrum (Left Bundle Branch yang terbagi lagi menjadi fasikel anterior dan posterior), yang berakhir pada serat Purkinje subendokardial. Kecepatan transmisi impuls sangat tinggi (2-4 m/s).',
    arteri: 'Disuplai ganda oleh ramus interventricularis anterior (LAD dari LCA via rami septales anteriores) dan ramus nodi atrioventricularis / ramus interventricularis posterior (dari RCA).',
    vena: 'Vena cardiaca magna dan vena interventricularis anterior.',
    inervasi: 'Pengaruh otonom minimal dibanding nodus SA/AV; konduksi berkas His diatur oleh potensial aksi cepat bergantung kanal natrium (Nav1.5).',
    limfatik: 'Nodi lymphatici mediastinales.',
    korelasiKlinis: 'Right Bundle Branch Block (RBBB) dan Left Bundle Branch Block (LBBB) pada EKG; LBBB onset baru dianggap setara STEMI; Blok bifasikuler/trifasikuler; Target pacing fisiologis modern (His bundle pacing) untuk sinkronisasi kontraksi biventrikular pada gagal jantung.'
  },
  'his bundle': {
    type: 'organ',
    nameLatin: 'Fasciculus Atrioventricularis / Berkas His',
    nameId: 'Berkas Atrioventrikular (Berkas His / Bundle of His)',
    deskripsi: 'Satu-satunya jalur konduksi listrik fisiologis yang menembus rangka fibrosa jantung (skeleton fibrosum cordis / anulus fibrosus) menghubungkan nodus AV dengan miokardium ventrikel. Berjalan di tepi posterior pars membranacea septum interventriculare sebelum bercabang di puncak pars muscularis septum menjadi Crus dextrum (Right Bundle Branch) dan Crus sinistrum (Left Bundle Branch yang terbagi lagi menjadi fasikel anterior dan posterior), yang berakhir pada serat Purkinje subendokardial. Kecepatan transmisi impuls sangat tinggi (2-4 m/s).',
    arteri: 'Disuplai ganda oleh ramus interventricularis anterior (LAD dari LCA via rami septales anteriores) dan ramus nodi atrioventricularis / ramus interventricularis posterior (dari RCA).',
    vena: 'Vena cardiaca magna dan vena interventricularis anterior.',
    inervasi: 'Pengaruh otonom minimal dibanding nodus SA/AV; konduksi berkas His diatur oleh potensial aksi cepat bergantung kanal natrium (Nav1.5).',
    limfatik: 'Nodi lymphatici mediastinales.',
    korelasiKlinis: 'Right Bundle Branch Block (RBBB) dan Left Bundle Branch Block (LBBB) pada EKG; LBBB onset baru dianggap setara STEMI; Blok bifasikuler/trifasikuler; Target pacing fisiologis modern (His bundle pacing) untuk sinkronisasi kontraksi biventrikular pada gagal jantung.'
  },

  // ==========================================
  // ARTERI UTAMA (MAJOR ARTERIES)
  // ==========================================
  'aorta ascendens': {
    type: 'organ',
    nameLatin: 'Aorta Ascendens',
    nameId: 'Aorta Asendens',
    deskripsi: 'Segmen pertama aorta sepanjang sekitar 5 cm dengan diameter 2,5-3 cm, berawal dari ostium aortae di basis ventrikel kiri setinggi cartilago costalis III sinistra, berjalan oblik ventrokranial ke kanan hingga setinggi angulus sternalis (Ludovici) / tepi atas cartilago costalis II dextra. Memiliki dilatasi di pangkalnya yang disebut bulbus aortae yang menaungi tiga sinus aortae (sinus Valsalva). Terletak seluruhnya di dalam kantung perikardium fibrosum bersama truncus pulmonalis.',
    arteri: 'Mempercabangkan Arteria coronaria dextra dan Arteria coronaria sinistra dari sinus Valsalva anterior dan sinister untuk vaskularisasi jantung; Dindingnya sendiri disuplai oleh vasa vasorum yang berasal dari arteria coronaria dan arteria bronchialis.',
    vena: 'Vena vasa vasorum bermuara ke vena brachiocephalica dan sinus coronarius.',
    inervasi: 'Plexus aorticus thoracicus dan plexus cardiacus profundus (serabut simpatis vasomotor dan aferen baroreseptor).',
    limfatik: 'Nodi lymphatici mediastinales anteriores dan tracheobronchiales.',
    korelasiKlinis: 'Diseksi Aorta Tipe Stanford A (kegawatdaruratan bedah toraks absolut dengan risiko ruptur fatal ke kavum perikardial memicu tamponade jantung); Aneurisma Aorta Asendens (terkait Sindrom Marfan, Sindrom Ehlers-Danlos, dan aortitis sifilitika); Kalsifikasi porselen aorta.'
  },
  'arcus aortae': {
    type: 'organ',
    nameLatin: 'Arcus Aortae',
    nameId: 'Lengkung Aorta (Arkus Aorta)',
    deskripsi: 'Lengkungan pembuluh darah besar di mediastinum superius yang menghubungkan aorta ascendens dengan aorta thoracica descendens. Dimulai setinggi angulus sternalis (sendi manubriosternalis, T4-T5), melengkung ke arah posterosuperior ke sisi kiri trachea dan oesophagus, lalu berakhir di sisi kiri korpus vertebra T4. Dari konveksitas superiornya mencabangkan tiga cabang arterial utama: Truncus brachiocephalicus, Arteria carotis communis sinistra, dan Arteria subclavia sinistra. Di bagian konkavitas inferior terdapat ligamentum arteriosum (sisa duktus arteriosus Botalli) dan lengkungan Nervus laryngeus recurrens sinister.',
    arteri: 'Mempercabangkan Truncus brachiocephalicus, A. carotis communis sinistra, dan A. subclavia sinistra. Dinding arkus disuplai oleh vasa vasorum dari arteri intercostalis superior dan rami bronchiales.',
    vena: 'Vena intercostalis superior sinistra dan vena brachiocephalica sinistra berjalan menyilang di anterior arkus aorta.',
    inervasi: 'Baroreseptor arcus aortae (regangan dinding) dihantarkan oleh ramus aorticus Nervus vagus (CN X / Saraf Cyon-Ludwig) menuju nukleus traktus solitarius batang otak; Kemorodetik glomus aorticum (tekanan PO2, PCO2, pH darah).',
    limfatik: 'Nodi lymphatici mediastinales anteriores dan nodi tracheobronchiales superiores.',
    korelasiKlinis: 'Koarktasio Aorta (penyempitan lumen dekat ligamentum arteriosum menyebabkan hipertensi ekstremitas atas dan pulsasi femoralis lemah/delay); Aneurisma arkus aorta yang dapat menekan N. laryngeus recurrens menyebabkan paralisis pita suara dan suara serak, atau menekan trakea memicu stridor; Diseksi aorta meluas.'
  },
  'aorta thoracica': {
    type: 'organ',
    nameLatin: 'Aorta Thoracica (Aorta Descendens Thoracica)',
    nameId: 'Aorta Torasika (Aorta Toraks)',
    deskripsi: 'Segmen aorta descendens yang berjalan di mediastinum posterius dari tepi bawah korpus vertebra T4 hingga tepi bawah T12 di hiatus aorticus diaphragma. Mula-mula terletak di sisi kiri columna vertebralis, lalu secara bertahap bergeser ke bidang median mendorong oesophagus ke anterior. Mempercabangkan cabang-cabang viseral (rami bronchiales, rami oesophageales, rami mediastinales, rami pericardiaci) dan cabang-cabang parietal (arteriae intercostales posteriores III-XI dan arteria subcostalis).',
    arteri: 'Berasal langsung dari arkus aorta. Mencabangkan Aa. intercostales posteriores, Aa. bronchiales (1 dextra, 2 sinistrae), Aa. oesophageales, dan A. phrenica superior. Dindingnya disuplai vasa vasorum interkostal.',
    vena: 'Didampingi di sisi kanan oleh Vena azygos dan ductus thoracicus; di sisi kiri oleh Vena hemiazygos dan Vena hemiazygos accessoria.',
    inervasi: 'Plexus aorticus thoracicus (cabang dari truncus sympathicus torakal ganglia T1-T5). Nyeri iskemia atau diseksi terasa tajam menusuk seperti robek di antar-belikat (punggung tengah).',
    limfatik: 'Nodi lymphatici mediastinales posteriores dan prevertebrales.',
    korelasiKlinis: 'Diseksi Aorta Tipe Stanford B (dikelola secara medikamentosa agresif dengan antihipertensi atau TEVAR - Thoracic Endovascular Aortic Repair); Aneurisma aorta torakalis arteriosklerotik; Ruptur traumatik aorta torasika tumpul pada isthmus aortae pasca-deselerasi kecepatan tinggi.'
  },
  'aorta abdominalis': {
    type: 'organ',
    nameLatin: 'Aorta Abdominalis',
    nameId: 'Aorta Abdominalis (Aorta Perut)',
    deskripsi: 'Lanjutan aorta thoracica yang dimulai setinggi hiatus aorticus diafragma (vertebra T12) dan berakhir setinggi vertebra L4 tepat di sebelah kiri linea mediana, di mana ia berbifurkasi menjadi arteria iliaca communis dextra dan sinistra. Terletak retroperitoneal di facies anterior corpus vertebrae lumbales, di sebelah kiri Vena Cava Inferior. Mempercabangkan cabang ventral tidak berpasangan untuk traktus GI (Truncus coeliacus T12, SMA L1, IMA L3), cabang lateral berpasangan untuk organ visceral urogenital (Aa. phrenicae inferiores, Aa. renales L1-L2, Aa. suprarenales mediae, Aa. testiculares/ovaricae L2), serta cabang posterolateral parietal (Aa. lumbales I-IV dan A. sacralis mediana).',
    arteri: 'Berkelanjutan dari aorta torasika. Mempercabangkan truncus coeliacus, a. mesenterica superior, a. mesenterica inferior, a. renalis bilateral, a. lumbales, dll.',
    vena: 'Vena Cava Inferior (IVC) berjalan paralel di sisi kanan aorta abdominalis; Vena renalis sinistra menyilang anterior aorta tepat di bawah pangkal SMA.',
    inervasi: 'Plexus aorticus abdominalis yang terintegrasi dengan plexus coeliacus, mesentericus superior, dan intermesentericus (simpatis N. splanchnicus major, minor, imus, dan parasimpatis N. vagus serta N. splanchnicus pelvinus S2-S4).',
    limfatik: 'Nodi lymphatici lumbales (para-aortici, preaortici, retroaortici) yang bermuara ke Cisterna Chyli pada batas T12-L1.',
    korelasiKlinis: 'Aneurisma Aorta Abdominalis (AAA - terdefinisi jika diameter > 3 cm, berisiko ruptur katastropik retroperitoneal dengan mortalitas >80%); Sindrom Leriche (oklusi aortoiliaka aterosklerotik bilateral yang ditandai klaudikasio bokong/paha, denyut femoralis hilang, dan disfungsi ereksi); Sindrom kompresi v. renalis sinistra (Nutcracker syndrome) antara SMA dan aorta.'
  },
  'arteria coronaria dextra': {
    type: 'organ',
    nameLatin: 'Arteria Coronaria Dextra (RCA)',
    nameId: 'Arteri Koroner Kanan',
    deskripsi: 'Arteri yang berpangkal dari sinus aortae anterior (sinus Valsalva dexter), berjalan turun di sulcus coronarius (atrioventrikular) antara atrium kanan dan ventrikel kanan menuju crux cordis di permukaan diafragmatika. Mempercabangkan: ramus coni arteriosi, ramus nodi sinuatrialis (60%), rami atriales, rami ventriculares anteriores, ramus marginalis dexter (akut), ramus nodi atrioventricularis (85-90%), dan ramus interventricularis posterior (Posterior Descending Artery / PDA pada sistem dominan kanan 85%). Menyuplai atrium kanan, sebagian besar ventrikel kanan, bagian diafragmatika ventrikel kiri, 1/3 posterior septum interventriculare, nodus SA, dan nodus AV.',
    arteri: 'Cabang langsung dari pangkal aorta ascendens.',
    vena: 'Didampingi oleh vena cardiaca parva di sulcus coronarius anterior dan vena cardiaca media di sulcus interventricularis posterior, yang keduanya bermuara ke sinus coronarius.',
    inervasi: 'Inervasi vasomotor simpatis (reseptor alfa-1 konstriksi, beta-2 dilatasi) dan parasimpatis via plexus cardiacus.',
    limfatik: 'Trunkus limfatikus subepikardial kanan menuju nodi mediastinales anteriores.',
    korelasiKlinis: 'Oklusi aterosklerotik RCA menyebabkan Infark Miokard Inferior (elevasi ST pada sadapan II, III, aVF) sering disertai komplikasi bradiaritmia berat (AV block derajat tinggi, disfungsi nodus SA) dan infark ventrikel kanan.'
  },
  'arteria coronaria sinistra': {
    type: 'organ',
    nameLatin: 'Arteria Coronaria Sinistra (LCA / Left Main)',
    nameId: 'Arteri Koroner Kiri (Left Main Coronary Artery)',
    deskripsi: 'Arteri utama yang berpangkal dari sinus aortae sinister, berjalan pendek (sekitar 1-2,5 cm) di antara truncus pulmonalis dan auricula sinistra sebelum berdivisi di sulcus coronarius menjadi dua cabang terminal kaliber besar: Ramus Interventricularis Anterior (Left Anterior Descending / LAD) dan Ramus Circumflexus (LCx); kadang memiliki cabang ketiga (Ramus intermedius). LAD berjalan di sulcus interventricularis anterior menyuplai 2/3 anterior septum interventriculare, dinding anterior ventrikel kiri, apeks cordis, dan berkas His via rami septales dan rami diagonales. LCx berjalan ke posterior di sulcus coronarius menyuplai dinding lateral dan posterior ventrikel kiri serta atrium kiri via rami marginales sinistri (obtusus).',
    arteri: 'Cabang langsung dari aorta ascendens (sinus coronarius sinister).',
    vena: 'Vena cardiaca magna (berjalan bersama LAD) melengkung menjadi sinus coronarius di posterior bersama LCx.',
    inervasi: 'Plexus cardiacus (serabut simpatis kardiak T1-T4 dan cabang parasimpatis N. vagus). Nyeri iskemik dihantarkan melalui serabut C-fiber simpatis ke dermatom servikotorakal.',
    limfatik: 'Trunkus limfatikus kardiak kiri menuju nodi tracheobronchiales inferiores dan nodi mediastinales anteriores.',
    korelasiKlinis: 'Stenosis Left Main (LCA trunk) merupakan kondisi kritis dengan risiko mortalitas sangat tinggi yang memerlukan revaskularisasi CABG (Coronary Artery Bypass Graft); Oklusi LAD dijuluki "widow maker" karena menyebabkan infark miokard anterior/anteroseptal luas dengan risiko syok kardiogenik, ruptur septum ventrikel, dan aritmia ventrikel letal (VT/VF).'
  },
  'arteria carotis communis': {
    type: 'organ',
    nameLatin: 'Arteria Carotis Communis',
    nameId: 'Arteri Karotis Komunis',
    deskripsi: 'Arteri penyuplai utama kepala dan leher. Sisi kiri berpangkal langsung dari konveksitas arcus aortae di mediastinum superius, sedangkan sisi kanan berpangkal dari bifurkasio Truncus brachiocephalicus di belakang articulation sternoclavicularis dextra. Kedua arteri naik di dalam vagina carotica (bersama Vena jugularis interna di lateral dan Nervus vagus di posterior) tanpa mempercabangkan ranting di leher hingga setinggi tepi atas cartilago thyroidea (vertebra C3-C4), di mana arteri ini berbifurkasi menjadi Arteria carotis interna dan Arteria carotis externa. Di bifurkasio terdapat dilatasi sinus caroticus (baroreseptor) dan glomus caroticum (kemoreseptor).',
    arteri: 'Berasal dari truncus brachiocephalicus (kanan) atau arcus aortae (kiri). Berbifurkasi menjadi a. carotis interna dan a. carotis externa.',
    vena: 'Didampingi di lateral oleh Vena jugularis interna (IJV) di dalam vagina carotica.',
    inervasi: 'Sinus caroticus dan glomus caroticum diinervasi oleh Ramus sinus carotici dari Nervus glossopharyngeus (CN IX / Saraf Hering) dan rami dari Nervus vagus (CN X); Serabut simpatis vasomotor berasal dari Ganglion cervicale superius.',
    limfatik: 'Nodi lymphatici cervicales laterales profundi (termasuk nodus jugulodigastricus dan jugulo-omohyoideus).',
    korelasiKlinis: 'Pulsasi arteri karotis adalah titik palpasi primer evaluasi henti jantung pada resusitasi jantung paru (RJP); Stenosis bifurkasio karotis akibat aterosklerosis menyebabkan Transient Ischemic Attack (TIA) atau stroke iskemik (indikasi Carotid Endarterectomy / CEA); Pijat sinus karotis menstimulasi refleks baroreseptor untuk mengatasi takikardia supraventrikular (SVT).'
  },
  'arteria carotis interna': {
    type: 'organ',
    nameLatin: 'Arteria Carotis Interna (ICA)',
    nameId: 'Arteri Karotis Interna',
    deskripsi: 'Cabang terminal utama bifurkasio a. carotis communis yang tidak mempercabangkan ranting di leher, naik vertikal menuju basis cranii menembus canalis caroticus ossis temporalis, melintasi sinus cavernosus dalam lengkungan ganda berbentuk S (carotid siphon), lalu menembus duramater untuk menyuplai bola mata dan sebagian besar hemisfer serebri. Mempercabangkan Arteria ophthalmica, Arteria communicans posterior, Arteria choroidea anterior, sebelum berakhir menjadi cabang terminal Arteria cerebri anterior (ACA) dan Arteria cerebri media (MCA) yang membentuk bagian anterior Sirkulus Willisi.',
    arteri: 'Berasal dari bifurkasio arteria carotis communis setinggi C3-C4.',
    vena: 'Sinus cavernosus (segmen intrakranial) dan Vena jugularis interna (segmen servikal).',
    inervasi: 'Dikelilingi oleh Plexus caroticus internus (serabut simpatis pascaganglionik dari Ganglion cervicale superius) yang menghantarkan serabut pupillodilator dan vasomotor ke intrakranial.',
    limfatik: 'Nodi cervicales profundi superiores.',
    korelasiKlinis: 'Aterosklerosis ICA proksimal (bruit karotis) sumber utama emboli serebral penyebab Stroke Infark MCA (hemiplegia dan afasia); Diseksi ICA traumatik atau spontan (dapat menyebabkan Horner syndrome parsial disertai iskemia serebral); Aneurisma sakular (berry aneurysm) pada percabangan sirkulus Willisi (ruptur memicu perdarahan subaraknoid / SAH).'
  },
  'arteria carotis externa': {
    type: 'organ',
    nameLatin: 'Arteria Carotis Externa (ECA)',
    nameId: 'Arteri Karotis Eksterna',
    deskripsi: 'Cabang terminal bifurkasio a. carotis communis yang menyuplai struktur leher, wajah, lidah, rahang, kranium eksternal, dan meningen. Berjalan anteromedial lalu lateral dari ICA, masuk ke substansi glandula parotidea, dan berujung di belakang collum mandibulae dengan mempercabangkan dua cabang terminal: Arteria temporalis superficialis dan Arteria maxillaris. Mempercabangkan 8 cabang berurutan: A. thyroidea superior, A. pharyngea ascendens, A. lingualis, A. facialis, A. occipitalis, A. auricularis posterior, A. maxillaris, dan A. temporalis superficialis.',
    arteri: 'Cabang bifurkasio a. carotis communis setinggi C3-C4.',
    vena: 'Vena retromandibularis, vena facialis, dan vena jugularis externa serta interna.',
    inervasi: 'Plexus caroticus externus dari ganglion cervicale superius (simpatis vasomotor) dan pleksus saraf lokal.',
    limfatik: 'Nodi lymphatici cervicales superficiales et profundi, nodi parotidei, nodi submandibulares.',
    korelasiKlinis: 'Arteritis Temporalis (Giant Cell Arteritis - vaskulitis inflamasi granulomatosa pada A. temporalis superficialis yang berisiko kebutaan mendadak akibat iskemia a. ciliaris posterior); Epistaksis masif posterior sering melibatkan cabang A. sphenopalatina (dari A. maxillaris) yang memerlukan ligasi atau embolisasi; Embolisasi cabang A. meningea media (dari A. maxillaris) pada hematoma subdural kronis.'
  },
  'arteria subclavia': {
    type: 'organ',
    nameLatin: 'Arteria Subclavia',
    nameId: 'Arteri Subklavia',
    deskripsi: 'Arteri penyuplai utama ekstremitas atas, otak posterior, dinding toraks, dan leher. Arteri subklavia dextra berasal dari truncus brachiocephalicus di belakang art. sternoclavicularis dextra, sedangkan arteria subclavia sinistra berpangkal langsung dari arcus aortae di mediastinum superius. Melengkung di atas costa I melewati spatium scalenum (di antara m. scalenus anterior dan m. scalenus medius bersama pleksus brakialis) dan berlanjut menjadi Arteria axillaris pada tepi lateral costa I. Mempercabangkan: A. vertebralis, A. thoracica interna, Truncus thyrocervicalis, Truncus costocervicalis, dan A. dorsalis scapulae.',
    arteri: 'Berasal dari truncus brachiocephalicus (kanan) atau arcus aortae (kiri). Berlanjut menjadi a. axillaris.',
    vena: 'Vena subclavia berjalan di anterior m. scalenus anterior (terpisah dari arteri oleh otot ini) di atas costa I.',
    inervasi: 'Ansa subclavia (truncus sympathicus servikal bawah) dan serabut perivaskular simpatis.',
    limfatik: 'Nodi lymphatici supraclaviculares (Virchow node di sinistra) dan nodi axillares apicales.',
    korelasiKlinis: 'Subclavian Steal Syndrome (stenosis/oklusi arteri subklavia proksimal sebelum pangkal A. vertebralis membalikkan aliran darah dari a. vertebralis kontralateral/basilaris ke lengan saat aktivitas fisik, memicu sinkop atau vertigo vertebrobasilar); Thoracic Outlet Syndrome (TOS - kompresi neurovaskular a. subklavia dan pleksus brakialis oleh costa cervicalis atau hipertrofi scalenus).'
  },
  'arteria brachialis': {
    type: 'organ',
    nameLatin: 'Arteria Brachialis',
    nameId: 'Arteri Brakialis (Lengan Atas)',
    deskripsi: 'Lanjutan dari Arteria axillaris yang dimulai pada tepi bawah m. teres major dan berakhir sekitar 1-2 cm di distal sendi siku (fossa cubitalis) setinggi collum radii, di mana ia berdivisi menjadi Arteria radialis dan Arteria ulnaris. Berjalan di kompartemen anterior brachium, mula-mula medial terhadap humerus lalu bergeser ke anterior di sulcus bicipitalis medialis bersama Nervus medianus yang menyilang arteri dari lateral ke medial. Di fossa cubitalis, terletak medial terhadap tendo m. biceps brachii dan terlindungi superficial oleh aponeurosis bicipitalis (lacertus fibrosus). Mempercabangkan Arteria profunda brachii, A. collateralis ulnaris superior, dan A. collateralis ulnaris inferior.',
    arteri: 'Kontinuitas dari arteria axillaris. Berbifurkasi menjadi a. radialis dan a. ulnaris.',
    vena: 'Venae comitantes arteriae brachialis yang beranastomosis dan bergabung dengan vena basilica membentuk vena axillaris.',
    inervasi: 'Serabut vasomotor simpatis perivaskular dihantarkan via Nervus medianus.',
    limfatik: 'Nodi lymphatici cubitales (supratrochleares) dan nodi axillares laterales.',
    korelasiKlinis: 'Situs standar pengukuran tekanan darah non-invasif menggunakan manset sfigmomanometer dan auskultasi bunyi Korotkoff; Palpasi nadi primer pada neonatus/bayi dalam BHD/PALS; Cedera suprakondilar humerus pada anak-anak dapat menjepit a. brachialis memicu sindrom kompartemen dan kontraktur iskemik Volkmann.'
  },
  'arteria radialis': {
    type: 'organ',
    nameLatin: 'Arteria Radialis',
    nameId: 'Arteri Radialis',
    deskripsi: 'Cabang terminal lateral dari Arteria brachialis di fossa cubitalis. Berjalan turun di sisi preaksial lateral antebrachium di bawah m. brachioradialis, lalu terletak subkutan di distal antara tendo m. brachioradialis dan tendo m. flexor carpi radialis (titik palpasi pulsus radialis di atas facies anterior extremitas distalis radii). Melingkar di dorsal articulatio radiocarpalis melintasi dasar fovea radialis (anatomical snuffbox) di atas os scaphoideum dan os trapezium, menembus spatium interosseus dorsalis I untuk masuk ke telapak tangan, beranastomosis dengan ramus palmaris profundus a. ulnaris membentuk Arcus palmaris profundus.',
    arteri: 'Cabang terminal lateral arteria brachialis.',
    vena: 'Venae comitantes arteriae radialis yang bergabung ke vena brachialis; vena cephalica di superfisial.',
    inervasi: 'Pleksus saraf simpatis otonom perivaskular via Ramus superficialis nervi radialis.',
    limfatik: 'Pembuluh limfatik antebrachii lateralis menuju nodi axillares.',
    korelasiKlinis: 'Lokasi klinis paling universal untuk palpasi denyut nadi perifer; Akses arteri utama untuk punksi analisa gas darah (AGD / BGA) dan kanulasi kateterisasi arteri koroner perkutan (Percutaneous Coronary Intervention / Transradial PCI); Uji Allen (Allen test) wajib dilakukan sebelum kanulasi untuk menilai patensi arcus palmaris dan kolateral a. ulnaris.'
  },
  'arteria ulnaris': {
    type: 'organ',
    nameLatin: 'Arteria Ulnaris',
    nameId: 'Arteri Ulnaris',
    deskripsi: 'Cabang terminal medial yang lebih besar dari Arteria brachialis di fossa cubitalis. Berjalan oblik ke inferomedial antebrachium profunda terhadap m. pronator teres dan m. flexor digitorum superficialis, lalu berjalan turun bersama Nervus ulnaris di sisi lateral tendo m. flexor carpi ulnaris. Di pergelangan tangan, melewati superficial terhadap retinaculum flexorum melintasi canalis ulnaris (Guyon canal) lateral terhadap os pisiforme, lalu masuk ke telapak tangan berlanjut sebagai kontributor utama pembentukan Arcus palmaris superficialis. Mempercabangkan Arteria interossea communis serta rami recurrentes ulnares.',
    arteri: 'Cabang terminal medial a. brachialis.',
    vena: 'Venae comitantes arteriae ulnaris yang mengalir ke venae brachiales.',
    inervasi: 'Serabut vasomotor otonom simpatis via Nervus ulnaris.',
    limfatik: 'Nodi lymphatici cubitales / supratrochleares dan nodi axillares.',
    korelasiKlinis: 'Sindrom Kanal Guyon (kompresi a. ulnaris dan n. ulnaris di pergelangan tangan); Hypothenar Hammer Syndrome (trombosis atau aneurisma a. ulnaris akibat trauma tumpul berulang pada telapak tangan medial hipotenar memicu iskemia digitalis jari IV-V); Menjaga perfusi tangan via kolateral arcus palmaris saat kanulasi radialis.'
  },
  'arteria iliaca communis': {
    type: 'organ',
    nameLatin: 'Arteria Iliaca Communis',
    nameId: 'Arteri Iliaka Komunis',
    deskripsi: 'Pembuluh darah arteri besar berpasangan yang terbentuk dari bifurkasio terminal aorta abdominalis setinggi corpus vertebra L4. Berjalan divergen ke inferolateral sepanjang margo medialis m. psoas major sejauh sekitar 4-5 cm. Setinggi articulatio sacroiliaca (garis batas apertura pelvis superior), masing-masing berdivisi menjadi Arteria iliaca interna (menuju kavum pelvis) dan Arteria iliaca externa (menuju tungkai bawah). Arteri iliaka komunis dextra menyilang Vena iliaca communis sinistra di posteriornya.',
    arteri: 'Cabang terminal bifurkasio aorta abdominalis. Berbifurkasi menjadi a. iliaca interna dan a. iliaca externa.',
    vena: 'Vena iliaca communis terletak medial dan posterior terhadap arteria iliaca communis.',
    inervasi: 'Plexus hypogastricus superior dan rami simpatis lumbales.',
    limfatik: 'Nodi lymphatici iliaci communes (menerima drainase dari nodi iliaci externi dan interni, menyalurkan ke nodi lumbales para-aortici).',
    korelasiKlinis: 'Aneurisma arteri iliaka komunis (sering berbarengan dengan AAA); Penyakit Arteri Perifer (PAD) oklusif aortoiliaka (Sindrom Leriche) menyebabkan klaudikasio intermiten pada paha/bokong; Risiko cedera vaskular iatrogenik saat bedah fusi tulang belakang lumbal anterior (ALIF).'
  },
  'arteria iliaca interna': {
    type: 'organ',
    nameLatin: 'Arteria Iliaca Interna (Arteria Hypogastrica)',
    nameId: 'Arteri Iliaka Interna (Arteri Hipogastrika)',
    deskripsi: 'Cabang medial dari bifurkasio a. iliaca communis sepanjang sekitar 3-4 cm yang turun ke dalam cavitas pelvis minor setinggi foramen ischiadicum majus. Berdivisi menjadi dua divisi: Divisio anterior (mempercabangkan cabang-cabang viseral dan parietal: A. umbilicalis/a. vesicalis superior, A. obturatoria, A. vesicalis inferior pada pria / A. vaginalis pada wanita, A. uterina pada wanita, A. rectalis media, A. pudenda interna, dan A. glutea inferior) dan Divisio posterior (cabang parietal: A. iliolumbalis, Aa. sacrales laterales, dan A. glutea superior). Menyuplai organ pelvis viseral, perineum, dinding panggul, dan regio glutea.',
    arteri: 'Cabang divisi medial dari arteria iliaca communis.',
    vena: 'Vena iliaca interna yang mengalirkan darah ke Vena iliaca communis.',
    inervasi: 'Plexus hypogastricus inferior (simpatis dari nervi splanchnici lumbales/sacrales dan parasimpatis dari nervi splanchnici pelvici S2-S4).',
    limfatik: 'Nodi lymphatici iliaci interni.',
    korelasiKlinis: 'Ligasi bilateral arteria iliaca interna (arteria hypogastrica) adalah prosedur penyelamatan jiwa (life-saving) untuk mengendalikan perdarahan postpartum masif (PPH obstetrik) refrakter tanpa menghilangkan kesuburan berkat anyaman anastomosis kolateral pelvis yang melimpah; Embolisasi arteri uterina pada mioma uteri.'
  },
  'arteria iliaca externa': {
    type: 'organ',
    nameLatin: 'Arteria Iliaca Externa',
    nameId: 'Arteri Iliaka Eksterna',
    deskripsi: 'Cabang lateral utama bifurkasio a. iliaca communis yang lebih besar, berjalan turun di sepanjang linea arcuata panggul pada margo medialis m. psoas major. Melewati dorsal dari ligamentum inguinale pada lacuna vasorum untuk masuk ke trigonum femorale tungkai atas dan berlanjut sebagai Arteria femoralis. Tepat sebelum melintasi ligamentum inguinale, mempercabangkan dua cabang krusial: Arteria epigastrica inferior (berjalan kranio-medial di dinding abdomen anterior, membentuk batas lateral trigonum Hesselbach) dan Arteria circumflexa ilium profunda.',
    arteri: 'Cabang lateral a. iliaca communis. Berlanjut menjadi a. femoralis setelah melintasi ligamentum inguinale.',
    vena: 'Vena iliaca externa berjalan mula-mula medial lalu posterior terhadap arteri.',
    inervasi: 'Pleksus saraf simpatis perivaskular dari rami ganglion lumbales dan N. genitofemoralis (ramus femoralis).',
    limfatik: 'Nodi lymphatici iliaci externi (menampung aliran dari nodi inguinales profundi).',
    korelasiKlinis: 'Arteria epigastrica inferior merupakan landmark bedah krusial untuk membedakan Hernia Inguinalis Medialis/Direk (di medial arteri ini di trigonum Hesselbach) dari Hernia Inguinalis Lateralis/Indirek (di lateral arteri ini melalui anulus inguinalis profundus); Tempat anastomosis vaskular standar pada transplantasi ginjal (allograft renal artery diimplantasikan ke a. iliaca externa).'
  },
  'arteria femoralis': {
    type: 'organ',
    nameLatin: 'Arteria Femoralis',
    nameId: 'Arteri Femoralis (Paha)',
    deskripsi: 'Arteri utama ekstremitas inferior yang merupakan kelanjutan arteria iliaca externa di bawah ligamentum inguinale. Dimulai di pertengahan garis antara SIAS dan symphysis pubica (midinguinal point). Melintasi trigonum femorale (Scarpa) di dalam vagina femoralis (lateral terhadap vena femoralis dan canalis femoralis, medial terhadap n. femoralis), lalu berjalan turun di canalis adductorius (canalis Hunter). Berakhir saat menembus hiatus adductorius m. adductor magnus untuk berubah nama menjadi Arteria poplitea. Mempercabangkan cabang besarnya: Arteria profunda femoris (yang mempercabangkan rami circumflexi femoris lateralis et medialis dan rami perforantes I-IV).',
    arteri: 'Kelanjutan dari arteria iliaca externa. Berlanjut menjadi arteria poplitea di hiatus adductorius.',
    vena: 'Vena femoralis mendampingi arteri (mula-mula di medial pada trigonum femoralis lalu berputar ke posterior di kanalis adductorius).',
    inervasi: 'Nervus femoralis (cabang somatik) dan serabut otonom simpatis perivaskular plexus femoralis.',
    limfatik: 'Nodi lymphatici inguinales profundi dan superficiales.',
    korelasiKlinis: 'Akses kateterisasi arteri utama kedua (Transfemoral approach) untuk angiografi koroner, intervensi endovaskular aorta (EVAR), dan TAVI; Titik palpasi nadi femoralis penting untuk mendeteksi syok atau disosiasi pulsasi femoro-radialis pada koarktasio aorta; Canalis femoralis di sisi medial selubung merupakan tempat terjadinya Hernia Femoralis (berisiko tinggi inkarserasi dan strangulasi).'
  },
  'arteria poplitea': {
    type: 'organ',
    nameLatin: 'Arteria Poplitea',
    nameId: 'Arteri Poplitea (Lipat Lutut)',
    deskripsi: 'Lanjutan arteria femoralis yang membentang dari hiatus adductorius m. adductor magnus melintasi fossa poplitea di belakang articulatio genus, berakhir pada tepi bawah m. popliteus di mana ia bercabang menjadi Arteria tibialis anterior dan Arteria tibialis posterior. Merupakan struktur terdalam di fossa poplitea, berkontak langsung dengan facies poplitea femoris dan kapsul sendi lutut (vena poplitea terletak intermediat, sedangkan nervus tibialis terletak paling superfisial/posterior). Mempercabangkan lima ranting genikular yang membentuk rete articulare genus (anastomosis kolateral lutut) serta arteriae surales.',
    arteri: 'Kontinuitas dari arteria femoralis. Berbifurkasi menjadi a. tibialis anterior dan a. tibialis posterior.',
    vena: 'Vena poplitea mendampingi di posterior arteri dan menerima muara vena saphena parva.',
    inervasi: 'Pleksus saraf simpatis perivaskular dari Nervus tibialis.',
    limfatik: 'Nodi lymphatici poplitei (terletak di sekitar pembuluh poplitea di fossa poplitea).',
    korelasiKlinis: 'Aneurisma arteria poplitea (aneurisma arteri perifer tersering, komplikasi utama bukan ruptur melainkan tromboemboli distal yang memicu iskemia tungkai akut); Palpasi pulsus popliteus (lutut semi-fleksi); Rentan mengalami cedera transeksi atau oklusi pada dislokasi lutut posterior yang merupakan kegawatdaruratan ortopedi-vaskular ekstrem; Popliteal Artery Entrapment Syndrome pada atlet muda.'
  },
  'arteria tibialis anterior': {
    type: 'organ',
    nameLatin: 'Arteria Tibialis Anterior',
    nameId: 'Arteri Tibialis Anterior',
    deskripsi: 'Cabang terminal anterior dari bifurkasio arteria poplitea di tepi bawah m. popliteus. Menembus foramen di tepi atas membrana interossea cruris untuk masuk ke kompartemen anterior cruris (tungkai bawah). Berjalan turun di permukaan anterior membrana interossea bersama Nervus fibularis (peroneus) profundus di antara m. tibialis anterior dan m. extensor hallucis longus. Melewati bagian depan articulatio talocruralis di bawah retinaculum musculorum extensorum, dan berakhir dengan berubah nama menjadi Arteria dorsalis pedis. Menyuplai otot-otot dorsofleksor kompartemen anterior cruris dan dorsum pedis.',
    arteri: 'Cabang terminal anterior dari a. poplitea. Berlanjut menjadi arteria dorsalis pedis di dorsum pedis.',
    vena: 'Venae comitantes arteriae tibialis anterioris yang bergabung ke vena poplitea.',
    inervasi: 'Serabut simpatis vasomotor dihantarkan bersama Nervus fibularis profundus (L4-S1).',
    limfatik: 'Nodi lymphatici tibiales anteriores dan nodi poplitei.',
    korelasiKlinis: 'Rentan mengalami kompresi iskemik pada Sindrom Kompartemen Anterior Cruris (akibat fraktur tibia tertutup atau cedera remuk), ditandai dengan "5P" (Pain out of proportion, Pallor, Pulselessness, Paresthesia, Paralysis/foot drop), memerlukan faskiotomi dekompresi darurat; Palpasi nadi A. dorsalis pedis (lanjutannya) esensial dalam pemeriksaan vaskular distal tungkai.'
  },
  'arteria tibialis posterior': {
    type: 'organ',
    nameLatin: 'Arteria Tibialis Posterior',
    nameId: 'Arteri Tibialis Posterior',
    deskripsi: 'Cabang terminal posterior dari bifurkasio a. poplitea yang lebih besar, berjalan turun di kompartemen posterior profundus cruris di bawah m. soleus dan m. gastrocnemius bersama Nervus tibialis. Mempercabangkan cabang kaliber besar Arteria fibularis (peronea) di proksimal yang menyuplai kompartemen lateral tungkai. Di distal, arteri ini berjalan di belakang malleolus medialis di dalam canalis tarsi (tarsal tunnel) di bawah retinaculum flexorum. Setelah melewati malleolus medialis, berdivisi menjadi Arteria plantaris medialis dan Arteria plantaris lateralis yang membentuk Arcus plantaris profundus telapak kaki.',
    arteri: 'Cabang terminal a. poplitea. Menghasilkan a. fibularis, berakhir menjadi a. plantaris medialis dan lateralis.',
    vena: 'Venae comitantes arteriae tibialis posterioris yang mengalir ke vena poplitea.',
    inervasi: 'Serabut vasomotor otonom simpatis via Nervus tibialis (L4-S3).',
    limfatik: 'Nodi poplitei dan saluran limfatik profunda tungkai bawah ke nodi inguinales.',
    korelasiKlinis: 'Titik palpasi nadi perifer utama di retro-malleolus medialis untuk diagnosis Penyakit Arteri Perifer (PAD) dan penghitungan Ankle-Brachial Index (ABI < 0,9 mengindikasikan iskemia); Tarsal Tunnel Syndrome (kompresi neurovaskular a. tibialis posterior dan n. tibialis di terowongan tarsal); Perfusi penentu viabilitas kaki diabetik.'
  },
  'arteria pulmonalis': {
    type: 'organ',
    nameLatin: 'Truncus Pulmonalis / Arteria Pulmonalis',
    nameId: 'Batang Pulmonal / Arteri Pulmonalis',
    deskripsi: 'Pembuluh darah arteri berdinding tipis elastis yang membawa darah deoksigenasi bertekanan rendah (tekanan sistolik rata-rata 15-25 mmHg) dari ventriculus dexter cordis menuju pulmo. Berawal dari ostium trunci pulmonalis pada conus arteriosus ventrikel kanan setinggi cartilago costalis III sinistra, berjalan oblik posterokranial sepanjang 5 cm di dalam perikardium serosum, menyilang sisi kiri aorta ascendens. Tepat di bawah concavitas arcus aortae setinggi vertebra T5, berdivisi menjadi Arteria pulmonalis dextra (melintas horizontal di belakang aorta ascendens dan SVC) dan Arteria pulmonalis sinistra (melintas anterior aorta descendens). Terhubung ke arkus aorta oleh ligamentum arteriosum.',
    arteri: 'Pangkal langsung dari conus arteriosus ventrikel kanan; cabang terminalnya adalah A. pulmonalis dextra dan sinistra.',
    vena: 'Venae pulmonales membawa darah yang telah teroksigenasi kembali ke atrium sinistrum.',
    inervasi: 'Plexus pulmonalis (serabut simpatis dari ganglia torasika II-V dan serabut parasimpatis N. vagus CN X).',
    limfatik: 'Nodi lymphatici tracheobronchiales dan nodi mediastinales anteriores.',
    korelasiKlinis: 'Emboli Paru Masif (Pulmonary Embolism - saddle embolus pada bifurkasio arteri pulmonalis yang menyebabkan obstruksi mendadak aliran darah ventrikel kanan, memicu cor pulmonale akut, syok obstruktif, dan henti jantung mendadak); Hipertensi Arteri Pulmonal (PAH - tekanan arteri pulmonalis rata-rata > 20 mmHg saat istirahat); Stenosis arteri pulmonalis kongenital.'
  },
  'truncus pulmonalis': {
    type: 'organ',
    nameLatin: 'Truncus Pulmonalis / Arteria Pulmonalis',
    nameId: 'Batang Pulmonal / Arteri Pulmonalis',
    deskripsi: 'Pembuluh darah arteri berdinding tipis elastis yang membawa darah deoksigenasi bertekanan rendah (tekanan sistolik rata-rata 15-25 mmHg) dari ventriculus dexter cordis menuju pulmo. Berawal dari ostium trunci pulmonalis pada conus arteriosus ventrikel kanan setinggi cartilago costalis III sinistra, berjalan oblik posterokranial sepanjang 5 cm di dalam perikardium serosum, menyilang sisi kiri aorta ascendens. Tepat di bawah concavitas arcus aortae setinggi vertebra T5, berdivisi menjadi Arteria pulmonalis dextra dan Arteria pulmonalis sinistra. Terhubung ke arkus aorta oleh ligamentum arteriosum.',
    arteri: 'Pangkal langsung dari conus arteriosus ventrikel kanan; cabang terminalnya adalah A. pulmonalis dextra dan sinistra.',
    vena: 'Venae pulmonales membawa darah yang telah teroksigenasi kembali ke atrium sinistrum.',
    inervasi: 'Plexus pulmonalis (serabut simpatis dari ganglia torasika II-V dan serabut parasimpatis N. vagus CN X).',
    limfatik: 'Nodi lymphatici tracheobronchiales dan nodi mediastinales anteriores.',
    korelasiKlinis: 'Emboli Paru Masif (Pulmonary Embolism - saddle embolus pada bifurkasio arteri pulmonalis yang menyebabkan obstruksi mendadak aliran darah ventrikel kanan, memicu cor pulmonale akut, syok obstruktif, dan henti jantung mendadak); Hipertensi Arteri Pulmonal (PAH); Stenosis arteri pulmonalis kongenital.'
  },
  'truncus coeliacus': {
    type: 'organ',
    nameLatin: 'Truncus Coeliacus (Tripus Halleri)',
    nameId: 'Batang Seliaka (Truncus Celiacus)',
    deskripsi: 'Cabang ventral visceral tidak berpasangan pertama dari aorta abdominalis, berpangkal tepat di bawah hiatus aorticus diafragma setinggi batas bawah vertebra T12 atau L1. Panjangnya sangat pendek (1-2 cm) dan langsung berdivisi membentuk "tripus Halleri" menjadi tiga cabang utama: Arteria gastrica sinistra, Arteria hepatica communis, dan Arteria splenica/lienalis. Menyuplai seluruh turunan foregut embrional (esofagus abdominal, lambung, duodenum pars superior, pankreas, hepar, vesica biliaris, dan splen).',
    arteri: 'Cabang langsung dinding ventral aorta abdominalis setinggi T12. Mempercabangkan a. gastrica sinistra, a. hepatica communis, dan a. splenica.',
    vena: 'Aliran vena kembali melalui Vena portae hepatis (dibentuk oleh gabungan V. splenica dan V. mesenterica superior).',
    inervasi: 'Dikelilingi rapat oleh Plexus coeliacus (solar plexus): serabut simpatis dari Nervus splanchnicus major (T5-T9) yang bersinaps di Ganglion coeliacum, serta serabut parasimpatis dari truncus vagalis posterior.',
    limfatik: 'Nodi lymphatici coeliaci yang mengalirkan limfe langsung ke Cisterna Chyli.',
    korelasiKlinis: 'Median Arcuate Ligament Syndrome (MALS / Dunbar syndrome - kompresi ekstrinsik truncus coeliacus oleh ligamentum arcuatum medianum diafragma saat ekspirasi, memicu nyeri abdomen post-prandial kronis dan penurunan berat badan); Erosi ulkus peptikum lambung/duodenum ke cabang truncus coeliacus (misal: A. gastroduodenalis memicu perdarahan masif saluran cerna atas); Splenic artery aneurysm.'
  },
  'arteria mesenterica superior': {
    type: 'organ',
    nameLatin: 'Arteria Mesenterica Superior (SMA)',
    nameId: 'Arteri Mesenterika Superior',
    deskripsi: 'Cabang ventral visceral tidak berpasangan kedua dari aorta abdominalis yang berpangkal sekitar 1 cm di bawah truncus coeliacus setinggi corpus vertebra L1. Berjalan turun ke anterior di belakang corpus pancreatis dan menyilang anterior collum pancreatis serta pars horizontalis (III) duodeni dan processus uncinatus, lalu masuk ke radix mesenterii. Mempercabangkan: Arteria pancreaticoduodenalis inferior, Arteriae jejunales et ileales (12-15 cabang membentuk arkade vaskular dan vasa recta), Arteria ileocolica, Arteria colica dextra, dan Arteria colica media. Menyuplai seluruh turunan midgut embrional (duodenum distal dari papilla Vateri hingga 2/3 proksimal colon transversum).',
    arteri: 'Cabang anterior aorta abdominalis setinggi L1.',
    vena: 'Vena mesenterica superior (SMV) berjalan di sisi kanan arteri sebelum bergabung dengan vena splenica di belakang leher pankreas membentuk vena porta.',
    inervasi: 'Plexus mesentericus superior: serabut simpatis pascaganglionik dari Ganglion mesentericum superius (N. splanchnicus minor T10-T11) dan parasimpatis N. vagus (CN X).',
    limfatik: 'Nodi lymphatici mesenterici superiores menuju cisterna chyli.',
    korelasiKlinis: 'Iskemia Mesenterika Akut (Acute Mesenteric Ischemia) akibat emboli kardiak pada SMA (nyeri perut hebat tak sebanding dengan temuan pemeriksaan fisik: "pain out of proportion to exam"); Superior Mesenteric Artery Syndrome (Wilkie syndrome - kompresi pars horizontalis duodeni antara sudut lancip SMA dan aorta akibat hilangnya bantalan lemak retroperitoneal); Nutcracker syndrome (kompresi vena renalis sinistra).'
  },
  'arteria mesenterica inferior': {
    type: 'organ',
    nameLatin: 'Arteria Mesenterica Inferior (IMA)',
    nameId: 'Arteri Mesenterika Inferior',
    deskripsi: 'Cabang ventral visceral tidak berpasangan ketiga dari aorta abdominalis, berpangkal setinggi vertebra L3 (sekitar 3-4 cm di atas bifurkasio aorta). Berjalan turun retroperitoneal di sebelah kiri aorta menuju fossa iliaca sinistra dan cavitas pelvis minor. Mempercabangkan: Arteria colica sinistra, Arteriae sigmoideae (2-4 cabang), dan berakhir sebagai Arteria rectalis superior. Beranastomosis dengan cabang SMA (A. colica media) via Arteri Marginal Drummond dan Arcus Riolan di fleksura lienalis. Menyuplai seluruh turunan hindgut embrional (1/3 distal colon transversum, colon descendens, colon sigmoideum, dan rektum atas).',
    arteri: 'Cabang anterior aorta abdominalis setinggi L3.',
    vena: 'Vena mesenterica inferior (IMV) mengalir ke atas di retroperitoneal lateral terhadap arteri, biasanya bermuara ke Vena splenica.',
    inervasi: 'Plexus mesentericus inferior: serabut simpatis dari ganglia lumbales (L1-L2) dan serabut parasimpatis dari Nervi splanchnici pelvici (S2-S4).',
    limfatik: 'Nodi lymphatici mesenterici inferiores (para-aortic L3).',
    korelasiKlinis: 'Kolitis Iskemik (Ischemic Colitis) paling sering menyerang area "watershed" / daerah rawan iskemia di flexura coli sinistra (titik Griffiths) dan sambungan rektosigmoid (titik Sudeck) akibat hipotensi sistemik transien; Evaluasi patensi IMA sangat penting sebelum ligasi saat reseksi aneurisma aorta abdominalis (AAA) atau hemikolektomi kiri guna mencegah nekrosis kolon.'
  },
  'arteria renalis': {
    type: 'organ',
    nameLatin: 'Arteria Renalis',
    nameId: 'Arteri Renalis (Arteri Ginjal)',
    deskripsi: 'Sepasang arteri besar berkaliber lebar yang mempercabangkan diri secara lateral dari aorta abdominalis tepat di bawah pangkal SMA setinggi discus intervertebralis L1-L2. Menerima sekitar 20-25% dari curah jantung total (cardiac output) saat istirahat untuk filtrasi renal. Arteria renalis dextra berukuran lebih panjang, melintasi posterior Vena Cava Inferior (IVC) menuju hilum ginjal kanan. Arteria renalis sinistra lebih pendek dan terletak sedikit lebih tinggi, melintas di belakang vena renalis sinistra. Sebelum masuk ke hilum renalis, masing-masing mempercabangkan A. suprarenalis inferior dan rami ureterici, lalu berdivisi menjadi 5 arteriae segmentales yang merupakan end-arteries sejati tanpa anastomosis intersegmental.',
    arteri: 'Cabang lateral berpasangan dari aorta abdominalis setinggi L1-L2.',
    vena: 'Vena renalis berjalan anterior terhadap arteria renalis di hilum ginjal.',
    inervasi: 'Plexus renalis (serabut simpatis vasomotor T10-L1 dari ganglion coeliacum dan splanchnicum minus/imum).',
    limfatik: 'Nodi lymphatici lumbales (aortici laterales dan cavales laterales).',
    korelasiKlinis: 'Stenosis Arteri Renalis (RAS - akibat aterosklerosis pada usia lanjut atau displasia fibromuskular / FMD pada wanita muda) memicu aktivasi masif aksis Renin-Angiotensin-Aldosteron (RAAS), menyebabkan Hipertensi Renovaskular refrakter; Infark ginjal akibat emboli endokardial pada end-artery segmentalis ginjal; Titik transeksi vaskular krusial pada nefrektomi donor transplantasi ginjal.'
  },

  // ==========================================
  // VENA UTAMA (MAJOR VEINS)
  // ==========================================
  'vena cava superior': {
    type: 'organ',
    nameLatin: 'Vena Cava Superior (SVC)',
    nameId: 'Vena Kava Superior',
    deskripsi: 'Pembuluh vena trunkus intratorakal besar tanpa katup sepanjang sekitar 7 cm dengan diameter 2 cm di mediastinum superius dan medium. Terbentuk dari penyatuan Vena brachiocephalica dextra dan Vena brachiocephalica sinistra di belakang tepi bawah cartilago costalis I dextra dekat sternum. Berjalan vertikal ke bawah di sisi kanan aorta ascendens, menembus perikardium fibrosum setinggi cartilago costalis II, dan bermuara ke facies posterosuperior atrium dextrum setinggi cartilago costalis III dextra. Menerima muara tunggal penting Vena azygos yang melengkung di atas bronkus utama kanan. Mengalirkan seluruh darah deoksigenasi dari kepala, leher, ekstremitas atas, dan dinding toraks.',
    arteri: 'Dinding pembuluh disuplai oleh vasa vasorum dari cabang arteria thoracica interna dan pericardiacophrenica.',
    vena: 'Terbentuk dari gabungan V. brachiocephalica dextra et sinistra; menerima muara Vena azygos; bermuara ke atrium dextrum.',
    inervasi: 'Saraf simpatis perivaskular dan cabang vagal dari plexus cardiacus.',
    limfatik: 'Nodi lymphatici mediastinales anteriores (paratrakeal dan brakiosefalika).',
    korelasiKlinis: 'Sindrom Vena Kava Superior (Superior Vena Cava Syndrome / SVCS - obstruksi lumen SVC akibat kompresi ekstrinsik karsinoma bronkogenik paru, limfoma mediastinum, atau trombosis kateter CVC, menimbulkan edema fasial "pemberton sign", pembengkakan leher, distensi vena dinding dada, dan sianosis); Akses penempatan Central Venous Catheter (CVC) dan lead pacemaker transvena.'
  },
  'vena cava inferior': {
    type: 'organ',
    nameLatin: 'Vena Cava Inferior (IVC)',
    nameId: 'Vena Kava Inferior',
    deskripsi: 'Pembuluh vena terbesar di tubuh manusia yang mengembalikan darah deoksigenasi dari seluruh struktur di bawah diafragma menuju atrium dextrum. Terbentuk setinggi corpus vertebra L5 oleh penyatuan Vena iliaca communis dextra dan Vena iliaca communis sinistra. Naik retroperitoneal di dinding posterior abdomen di sebelah kanan aorta abdominalis, melintas di sulcus venae cavae pada hepar, menembus foramen venae cavae diafragma setinggi vertebra T8, lalu segera menembus perikardium dan bermuara ke dinding inferoposterior atrium dextrum (memiliki sisa katup Eustachii). Menerima muara Vv. lumbales, V. renalis bilateral, V. suprarenalis dextra, V. testicularis/ovarica dextra, Vv. phrenicae inferiores, dan Vv. hepaticae.',
    arteri: 'Vasa vasorum dari aorta abdominalis dan arteriae lumbales.',
    vena: 'Terbentuk dari penyatuan dua Vena iliaca communis; bermuara ke atrium dextrum.',
    inervasi: 'Inervasi otonom simpatis pleksus perivaskular.',
    limfatik: 'Nodi lymphatici lumbales (cavales laterales, precavales, postcavales).',
    korelasiKlinis: 'Filter IVC (Inferior Vena Cava Filter) diindikasikan untuk mencegah emboli paru fatal pada pasien DVT proksimal yang memiliki kontraindikasi antikoagulasi; Sindrom Kompresi IVC (Supine Hypotensive Syndrome pada wanita hamil trimester akhir akibat penekanan uterus gravid terhadap IVC saat posisi supinasi); Trombosis tumor IVC pada karsinoma sel ginjal (RCC).'
  },
  'vena portae hepatis': {
    type: 'organ',
    nameLatin: 'Vena Portae Hepatis',
    nameId: 'Vena Porta Hepatis',
    deskripsi: 'Pembuluh vena utama sistem portal sepanjang 7-8 cm yang membawa darah deoksigenasi namun kaya akan mikronutrien, toksin, dan metabolit dari traktus gastrointestinal (lambung hingga rektum atas), pankreas, vesica biliaris, dan splen menuju sinusoid hepar. Terbentuk di belakang collum pancreatis setinggi vertebra L2 oleh penyatuan Vena Mesenterica Superior (SMV) dan Vena Splenica / Lienalis (yang sebelumnya telah menerima Vena Mesenterica Inferior / IMV). Berjalan kranial di dalam ligamentum hepatoduodenale sebagai struktur paling posterior dalam "portal triad" (di belakang ductus choledochus dan arteria hepatica propria). Masuk ke porta hepatis dan berdivisi menjadi ramus dexter dan sinister.',
    arteri: 'Dinding vena disuplai oleh vasa vasorum cabang arteria hepatica propria.',
    vena: 'Terbentuk dari gabungan V. splenica dan V. mesenterica superior; menerima V. gastrica dextra et sinistra dan Vv. cysticae. Bercabang ke sinusoid hepar.',
    inervasi: 'Plexus hepaticus (berasal dari plexus coeliacus).',
    limfatik: 'Nodi lymphatici hepatici sepanjang ligamentum hepatoduodenale menuju nodi coeliaci.',
    korelasiKlinis: 'Hipertensi Portal (peningkatan gradien tekanan vena porta > 10-12 mmHg, etiologi tersering sirosis hepatis) yang membuka kolateral portosistemik: varises esofagus (anastomosis v. gastrica sinistra dengan v. azygos, berisiko ruptur perdarahan hematemesis masif), caput medusae (v. paraumbilicalis dengan v. epigastrica superficialis), dan hemoroid interna (v. rectalis superior dengan v. rectalis media/inferior); Shunt TIPS (Transjugular Intrahepatic Portosystemic Shunt).'
  },
  'vena jugularis interna': {
    type: 'organ',
    nameLatin: 'Vena Jugularis Interna (IJV)',
    nameId: 'Vena Jugularis Interna',
    deskripsi: 'Vena besar di leher yang merupakan kelanjutan langsung dari Sinus Sigmoideus duraematris pada foramen jugulare basis cranii. Dimulai dengan pembesaran bulbus superior, berjalan turun vertikal di leher di dalam vagina carotica (terletak lateral terhadap Arteria carotis interna di kranial, dan lateral terhadap Arteria carotis communis di kaudal, dengan Nervus vagus berjalan di posterior di antara keduanya). Di belakang articulatio sternoclavicularis, vena ini membesar membentuk bulbus inferior dan bersatu dengan Vena subclavia membentuk Vena brachiocephalica (angulus venosus Pirogoff). Menerima muara: sinus petrosus inferior, vena facialis, vena lingualis, dan venae thyroideae superiores et mediae.',
    arteri: 'Vasa vasorum dari rami arteria carotis externa dan arteria occipitalis.',
    vena: 'Berlanjut dari sinus sigmoideus; bergabung dengan vena subclavia membentuk vena brachiocephalica.',
    inervasi: 'Diinervasi oleh serabut otonom perivaskular dan cabang sensorik N. glossopharyngeus serta N. vagus.',
    limfatik: 'Dikelilingi langsung oleh rangkaian Nodi lymphatici cervicales laterales profundi sepanjang perjalanannya.',
    korelasiKlinis: 'Penilaian Tekanan Vena Jugularis (Jugular Venous Pressure / JVP) sebagai barometer non-invasif fungsi ventrikel kanan dan hemodinamik sentral; Situs kanulasi pilihan utama penempatan kateter vena sentral (CVC line) di bawah panduan USG (di trigonum antara caput sternale dan caput claviculare m. sternocleidomastoideus); Sindrom Lemierre (tromboflebitis septik IJV pasca-faringitis infeksi Fusobacterium necrophorum).'
  },
  'vena jugularis externa': {
    type: 'organ',
    nameLatin: 'Vena Jugularis Externa (EJV)',
    nameId: 'Vena Jugularis Eksterna',
    deskripsi: 'Pembuluh vena superfisial leher yang terbentuk di belakang angulus mandibulae atau di dalam substansi glandula parotidea oleh penyatuan ramus posterior venae retromandibularis dengan Vena auricularis posterior. Berjalan turun miring menyilang permukaan anterior-superfisial Musculus Sternocleidomastoideus (SCM) di bawah lamina superficialis fascia cervicalis dan platysma. Tepat di atas clavicula pada trigonum supraclaviculare, vena ini menembus fascia cervicalis profunda untuk bermuara ke Vena subclavia atau ke Vena jugularis interna. Dilengkapi dua katup: di pertengahan leher dan di ostium muaranya.',
    arteri: 'Vasa vasorum mikrovaskular superfisial leher.',
    vena: 'Terbentuk dari gabungan V. retromandibularis (ramus posterior) dan V. auricularis posterior; bermuara ke Vena subclavia.',
    inervasi: 'Dipersarafi oleh Nervus transversus colli dan Nervus auricularis magnus (cabang kutan pleksus servikalis superficialis).',
    limfatik: 'Nodi lymphatici cervicales superficiales sepanjang vena ini.',
    korelasiKlinis: 'Terlihat distensi menonjol saat peningkatan tekanan intratorakal (manuver Valsalva), tamponade jantung, atau gagal jantung kanan; Akses alternatif kanulasi vena perifer darurat (EJV cannulation) saat vena perifer lengan kolaps; Laserasi dinding EJV yang menembus fasia leher berisiko emboli udara (air embolism) karena traksi fasia mencegah dinding vena berkolaps.'
  },
  'vena subclavia': {
    type: 'organ',
    nameLatin: 'Vena Subclavia',
    nameId: 'Vena Subklavia',
    deskripsi: 'Pembuluh vena besar kontinuitas dari Vena axillaris yang dimulai pada tepi lateral costa I. Berjalan melengkung di medial di depan Musculus scalenus anterior (yang memisahkannya dari Arteria subclavia di posterior) dan di belakang clavicula pada sulcus venae subclaviae costa I. Berakhir di belakang articulatio sternoclavicularis dengan bersatu bersama Vena jugularis interna membentuk Vena brachiocephalica. Sudut penyatuan ini disebut angulus venosus (Pirogoff), di mana sisi kiri menerima muara Ductus Thoracicus (mengalirkan limfe dari 3/4 tubuh), sedangkan sisi kanan menerima Ductus Lymphaticus Dexter. Dilengkapi sepasang katup di dekat batas lateral costa I.',
    arteri: 'Terhubung topografis dengan Arteria subclavia di posteriornya.',
    vena: 'Kelanjutan dari vena axillaris; bersatu dengan V. jugularis interna membentuk V. brachiocephalica.',
    inervasi: 'Serabut vasomotor simpatis perivaskular dari ganglion cervicale inferius / stellatum.',
    limfatik: 'Nodi lymphatici apicales axillares dan truncus subclavius.',
    korelasiKlinis: 'Situs klasik kanulasi vena sentral infraklavikular (Subclavian CVC line); Komplikasi kanulasi meliputi pneumotoraks (karena letak cupula pleura tepat di posteroinferior), hemotoraks, dan punksi arteri subklavia inadvertent; Sindrom Paget-Schroetter (trombosis vena subklavia akibat kompresi berulang di celah kostoklavikular pada olahragawan lengan atas).'
  },
  'vena brachiocephalica': {
    type: 'organ',
    nameLatin: 'Vena Brachiocephalica (Vena Innominata)',
    nameId: 'Vena Brakiosefalika (Vena Inominata)',
    deskripsi: 'Sepasang pembuluh vena besar di mediastinum superius yang terbentuk dari pertemuan Vena jugularis interna dan Vena subclavia di belakang articulatio sternoclavicularis. Vena brachiocephalica dextra berukuran pendek (sekitar 2,5 cm) dan berjalan vertikal ke bawah di sisi kanan truncus brachiocephalicus. Vena brachiocephalica sinistra berukuran lebih panjang (sekitar 6 cm), melintas miring ke inferomedial di belakang manubrium sterni dan glandula thymus, di sebelah superior-anterior dari arkus aorta dan cabang-cabang utamanya. Keduanya bersatu di belakang tepi bawah cartilago costalis I dextra untuk membentuk Vena Cava Superior (SVC). Menerima muara: V. vertebralis, V. thoracica interna, V. thyroidea inferior, dan V. intercostalis superior sinistra.',
    arteri: 'Berdekatan dengan Truncus brachiocephalicus dan cabang-cabang arkus aorta.',
    vena: 'Bergabung antara sisi kanan dan kiri membentuk Vena Cava Superior (SVC).',
    inervasi: 'Pleksus saraf otonom perivaskular mediastinum.',
    limfatik: 'Nodi lymphatici mediastinales anteriores (brachiocephalici).',
    korelasiKlinis: 'Penempatan kateter dialisis jangka panjang (permcath / Hickman catheter); Pembesaran timoma atau karsinoma tiroid substernal dapat menekan v. brachiocephalica sinistra yang melintang memicu bendungan unilateral wajah dan lengan kiri.'
  },
  'vena cephalica': {
    type: 'organ',
    nameLatin: 'Vena Cephalica',
    nameId: 'Vena Sefalika',
    deskripsi: 'Vena superfisial preaksial (lateral) ekstremitas atas. Berawal dari sisi radialis rete venosum dorsale manus, melingkari tepi lateral pergelangan tangan, naik di sisi lateral antebrachium. Di regio cubitalis anterior, mempercabangkan Vena mediana cubiti yang berjalan serong ke medial menuju vena basilica. Kemudian vena cephalica naik di sulcus bicipitalis lateralis lengan atas, masuk ke trigonum clavipectorale (sulcus deltopectoralis antara m. deltoideus dan m. pectoralis major), menembus fascia clavipectoralis di bawah clavicula, dan bermuara ke Vena axillaris. Memiliki sejumlah katup untuk mencegah refluks darah.',
    arteri: 'Berdampingan di lengan atas dengan ramus deltoideus arteriae thoracoacromialis.',
    vena: 'Berawal dari dorsum manus, bermuara ke Vena axillaris.',
    inervasi: 'Nervus cutaneus antebrachii lateralis (cabang N. musculocutaneus) mendampingi perjalanannya di antebrachium.',
    limfatik: 'Saluran limfatik superfisial lateral mendampingi vena menuju nodi lymphatici deltopectorales dan apicales axillares.',
    korelasiKlinis: 'Situs kanulasi jalur intravena (IV line / infus) perifer yang sangat sering digunakan; Pembuatan fistula arteriovenosa (AVF / Cimino-Brescia fistula) antara arteria radialis dan vena cephalica di pergelangan tangan untuk akses hemodialisis kronis.'
  },
  'vena basilica': {
    type: 'organ',
    nameLatin: 'Vena Basilica',
    nameId: 'Vena Basilika',
    deskripsi: 'Vena superfisial postaksial (medial) ekstremitas atas yang berkaliber besar. Berawal dari sisi ulnaris rete venosum dorsale manus, naik di sepanjang permukaan medial antebrachium. Di fossa cubitalis, menerima Vena mediana cubiti dari vena cephalica. Berjalan ke atas di sulcus bicipitalis medialis brachium, menembus fascia brachii profunda setinggi pertengahan lengan atas (hiatus basilicus) bersama Nervus cutaneus antebrachii medialis, lalu berjalan di sebelah medial arteria brachialis sebelum bersatu dengan venae comitantes a. brachialis pada tepi bawah m. teres major untuk membentuk Vena axillaris.',
    arteri: 'Berdekatan dengan arteria brachialis di sepertiga distal dan tengah lengan atas.',
    vena: 'Berawal dari dorsum manus medial, bermuara/bergabung membentuk Vena axillaris.',
    inervasi: 'Nervus cutaneus antebrachii medialis mendampingi jalannya vena di lengan bawah dan distal lengan atas.',
    limfatik: 'Mengalirkan limfe ke Nodi lymphatici cubitales (supratrochleares) dan kemudian ke nodi axillares laterales.',
    korelasiKlinis: 'Penempatan jalur PICC (Peripherally Inserted Central Catheter) via vena basilika lebih disukai daripada vena sefalika karena jalurnya lebih lurus dan diameternya lebih lebar serta minim risiko spasme; Opsi alternatif kedua pembuatan fistula AV dialisis (Brachiobasilic AVF dengan transposisi superfisialisasi vena).'
  },
  'vena saphena magna': {
    type: 'organ',
    nameLatin: 'Vena Saphena Magna (Great Saphenous Vein / GSV)',
    nameId: 'Vena Safena Magna',
    deskripsi: 'Vena terpanjang di tubuh manusia yang membentang di sepanjang aspek medial ekstremitas inferior. Terbentuk di dorsum pedis dari persatuan ujung medial arcus venosus dorsalis pedis dengan vena marginalis medialis. Melintas sekitar 1-2 cm di anterior malleolus medialis, naik di sisi medial tibia di regio cruris bersama Nervus saphenus, melewati posterior condylus medialis femoris pada sendi lutut, lalu naik di anteromedial paha. Pada trigonum femorale, melengkung menembus fascia cribrosa melalui hiatus saphenus untuk bermuara ke Vena femoralis (Saphenofemoral Junction - SFJ). Memiliki 10-20 katup semilunar bicuspid untuk melawan tekanan hidrostatik gravitasi, serta terhubung dengan sistem vena profunda via venae perforantes (Cockett, Boyd, Dodd).',
    arteri: 'Berdampingan dengan cabang-cabang superfisial arteria femoralis di trigonum femorale (A. pudenda externa, A. epigastrica superficialis, A. circumflexa ilium superficialis).',
    vena: 'Berawal dari dorsum pedis medial; bermuara ke Vena femoralis pada hiatus saphenus.',
    inervasi: 'Didampingi oleh Nervus saphenus (cabang kutaneus terminal N. femoralis) di bawah lutut dan tungkai bawah medial.',
    limfatik: 'Pembuluh limfatik superfisial tungkai bawah berjalan sejajar dengan GSV menuju Nodi lymphatici inguinales superficiales.',
    korelasiKlinis: 'Saluran autolog graft pembuluh darah paling banyak dipanen untuk Operasi Bypass Arteri Koroner (CABG) dan bypass vaskular perifer (femoropopliteal bypass); Insufisiensi vena kronis dan Varises Vena (Varicose Veins) akibat inkompetensi katup SFJ dan perforator, diterapi dengan Endovenous Laser Ablation (EVLA) atau stripping vena; Cedera iatrogenik N. saphenus saat pemanenan graf menimbulkan parestesia kaki medial.'
  },
  'vena saphena parva': {
    type: 'organ',
    nameLatin: 'Vena Saphena Parva (Small Saphenous Vein / SSV)',
    nameId: 'Vena Safena Parva',
    deskripsi: 'Pembuluh vena superfisial kompartemen posterior tungkai bawah. Terbentuk dari persatuan ujung lateral arcus venosus dorsalis pedis dengan vena marginalis lateralis di dorsolateral pedis. Melintas di belakang malleolus lateralis, naik di garis tengah posterior betis (regio suralis) di antara dua caput Musculus gastrocnemius bersama Nervus suralis. Menembus fascia poplitea profunda pada fovea poplitea untuk bermuara ke Vena poplitea (Saphenopopliteal Junction - SPJ). Memiliki 7-10 katup semilunar intraluminal.',
    arteri: 'Didampingi ranting-ranting kutaneus dari arteria fibularis dan arteria poplitea.',
    vena: 'Berawal dari tepi lateral kaki di belakang malleolus lateralis; bermuara ke Vena poplitea.',
    inervasi: 'Berjalan berdampingan erat dengan Nervus suralis (sensorik betis posterolateral dan tepi lateral kaki).',
    limfatik: 'Mengalirkan getah bening ke Nodi lymphatici poplitei.',
    korelasiKlinis: 'Insufisiensi katup SPJ menyebabkan varises kompartemen posterior cruris; Tromboflebitis superfisial yang dapat merambat masuk ke vena poplitea profunda memicu DVT; Kerusakan N. suralis saat stripping/ablasi SSV menyebabkan baal permanen pada tumit lateral dan margo lateralis kaki.'
  },
  'venae pulmonales': {
    type: 'organ',
    nameLatin: 'Venae Pulmonales',
    nameId: 'Vena Pulmonalis (Vena Paru)',
    deskripsi: 'Empat pembuluh vena besar tanpa katup (dua dari pulmo dexter: Vena pulmonalis superior dextra dan Vena pulmonalis inferior dextra; dua dari pulmo sinister: Vena pulmonalis superior sinistra dan Vena pulmonalis inferior sinistra) yang membawa darah kaya oksigen dari anyaman kapiler alveoli paru menuju atrium sinistrum cordis. Keluar dari hilum pulmo di mana posisinya terletak paling anterior dan inferior di antara struktur radix pulmonis. Melintasi perikardium dan bermuara langsung secara independen ke dinding posterior atrium sinistrum.',
    arteri: 'Dinding vasa vasorum berasal dari rami bronchiales aorta thoracica.',
    vena: 'Mengalirkan darah beroksigen langsung dari pulmo ke atrium sinistrum.',
    inervasi: 'Pleksus otonom pulmonalis dan pleksus kardiak (mengandung serabut eferen otonom dan aferen regangan).',
    limfatik: 'Nodi bronchopulmonales (hilar) dan nodi tracheobronchiales.',
    korelasiKlinis: 'Selubung otot miokardial (myocardial sleeves) yang meluas ke pangkal vena pulmonalis di atrium kiri merupakan lokasi tersering timbulnya fokus ektopik pemicu Fibrilasi Atrium (AF) paroksismal, yang menjadi target terapi Isolasi Vena Pulmonalis (Pulmonary Vein Isolation / PVI ablation); Total/Partial Anomalous Pulmonary Venous Return (TAPVR/PAPVR) kelainan kongenital sianotik di mana vena pulmonalis salah bermuara ke sistem vena sistemik.'
  },
  'sinus coronarius': {
    type: 'organ',
    nameLatin: 'Sinus Coronarius',
    nameId: 'Sinus Koronarius',
    deskripsi: 'Saluran vena lebar berdinding tipis dengan panjang sekitar 2-3 cm yang terletak di sulcus coronarius (sulcus atrioventricularis) posterior, di antara atrium sinistrum dan ventriculus sinister. Berfungsi sebagai saluran penampung vena utama yang mengalirkan sekitar 60-70% darah deoksigenasi dari miokardium jantung kembali ke sirkulasi bilik jantung. Bermuara langsung ke dinding inferomedial atrium dextrum, tepat di antara ostium venae cavae inferioris dan ostium atrioventriculare dextrum, dijaga oleh lipatan endokardial semilunar tipis yaitu Valvula Sinus Coronarii (katup Thebesii). Menerima muara: Vena cardiaca magna, Vena cardiaca media, Vena cardiaca parva, Vena posterior ventriculi sinistri, dan Vena obliqua atrii sinistri (Marshall).',
    arteri: 'Divaskularisasi oleh rami atrioventriculares dari Arteria coronaria dextra dan Ramus circumflexus LCA.',
    vena: 'Menampung seluruh vena kardiak mayor dan bermuara langsung ke atrium dextrum.',
    inervasi: 'Plexus cardiacus profundus (inervasi otonom intrinsik).',
    limfatik: 'Nodi lymphatici mediastinales anteriores.',
    korelasiKlinis: 'Akses penting kanulasi kardioplegia retrograd (retrograde cardioplegia delivery) untuk proteksi miokardium selama bedah pintas jantung terbuka (on-pump bypass); Lokasi penempatan lead ventrikel kiri (LV pacing lead) melalui cabang vena kardiak via sinus coronarius pada terapi resinkronisasi jantung (Cardiac Resynchronization Therapy / CRT) untuk gagal jantung; Dilatasi sinus coronarius dapat menjadi penanda anomali drainase vena seperti Persistent Left Superior Vena Cava (PLSVC).'
  },
  'vena renalis': {
    type: 'organ',
    nameLatin: 'Vena Renalis',
    nameId: 'Vena Renalis (Vena Ginjal)',
    deskripsi: 'Sepasang pembuluh vena kaliber besar bertekanan rendah yang mengalirkan darah yang telah disaring dari ren menuju Vena Cava Inferior (IVC). Vena renalis dextra berukuran pendek (2-4 cm), berjalan langsung dari hilum ginjal kanan ke sisi lateral IVC tanpa menerima tributari mayor lain. Vena renalis sinistra berukuran jauh lebih panjang (sekitar 7-8 cm), melintas horizontal dari kiri ke kanan di anterior aorta abdominalis dan tepat di posterior Arteria Mesenterica Superior (SMA) di dalam sudut aortomesenterika. Vena renalis sinistra menerima tiga tributari penting: Vena suprarenalis sinistra dari atas, Vena testicularis sinistra (pria) atau Vena ovarica sinistra (wanita) dari bawah, dan Vena phrenica inferior sinistra.',
    arteri: 'Didampingi di posteriornya oleh arteria renalis.',
    vena: 'Mengalir langsung ke Vena Cava Inferior (IVC).',
    inervasi: 'Plexus renalis (simpatis vasomotor).',
    limfatik: 'Nodi lymphatici lumbales para-aortici dan paracavales.',
    korelasiKlinis: 'Nutcracker Syndrome (kompresi vena renalis sinistra di antara SMA dan aorta abdominalis, memicu hematuria mikroskopis/makroskopis, nyeri panggul kiri, dan varikokel kiri); Trombosis Vena Renalis (sering terjadi pada sindrom nefrotik dengan membranous nephropathy akibat status hiperkoagulabel); Varikokel testis sinistra jauh lebih sering terjadi dibanding dekstra karena muara v. testicularis sinistra masuk tegak lurus (90°) ke v. renalis sinistra dengan tekanan hidrostatik lebih tinggi.'
  },
  'vena iliaca communis': {
    type: 'organ',
    nameLatin: 'Vena Iliaca Communis',
    nameId: 'Vena Iliaka Komunis',
    deskripsi: 'Sepasang pembuluh vena besar pelvis yang terbentuk setinggi articulatio sacroiliaca oleh penyatuan Vena iliaca interna (dari viscera dan dinding pelvis) dan Vena iliaca externa (kelanjutan vena femoralis dari tungkai bawah). Kedua vena berjalan ke kranial menyilang panggul; Vena iliaca communis dextra lebih pendek dan berjalan hampir vertikal di posterior arteria iliaca communis dextra, sedangkan Vena iliaca communis sinistra lebih panjang dan berjalan miring menyilang garis tengah di posterior arteria iliaca communis dextra. Keduanya bersatu di sisi kanan corpus vertebra L5 untuk membentuk Vena Cava Inferior (IVC). Vena iliaca communis sinistra juga menerima muara Vena sacralis mediana.',
    arteri: 'Berdampingan erat dengan Arteria iliaca communis (vena berada di medial dan posterior arteri).',
    vena: 'Terbentuk dari gabungan V. iliaca interna dan V. iliaca externa; bersatu membentuk IVC.',
    inervasi: 'Pleksus saraf otonom perivaskular pelvis dan plexus hypogastricus.',
    limfatik: 'Nodi lymphatici iliaci communes sepanjang pembuluh vena.',
    korelasiKlinis: 'May-Thurner Syndrome (Iliac Vein Compression Syndrome - penekanan mekanis kronis vena iliaca communis sinistra oleh arteria iliaca communis dextra yang menyilang di atasnya terhadap korpus vertebra L5, memicu stasis vena dan risiko tinggi DVT iliofemoral kiri rekuren); Ekstensi trombosis vena dalam (DVT) proksimal pelvis yang berisiko fatal emboli paru masif jika terlepas.'
  }
};
