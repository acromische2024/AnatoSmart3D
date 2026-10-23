/**
 * Comprehensive Neuroanatomy Knowledge Base for AnatoSmart 3D
 * Sistem Saraf Pusat (Encephalon, Medulla Spinalis), Saraf Kranial (CN I - XII),
 * dan Saraf Perifer / Pleksus.
 */

import { OrganDetails } from '../medical-knowledge';

// ============================================================================
// 1. STRUKTUR ENCEPHALON & TELENCEPHALON (OTAK & SEREBRUM)
// ============================================================================

const brainData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Encephalon',
  nameId: 'Otak (Sistem Saraf Pusat)',
  deskripsi: 'Pusat koordinasi dan integrasi utama sistem saraf pusat (SSP), mengendalikan fungsi motorik sadar dan involunter, pemrosesan sensorik primer-sekunder, kognisi tingkat tinggi (memori, penalaran, bahasa, emosi), serta regulasi homeostasis otonom tubuh. Terdiri dari cerebrum (telencephalon dan diencephalon), truncus encephali (mesencephalon, pons, medulla oblongata), dan cerebellum.',
  arteri: 'Sirkulus Arteriosus Willisi (Circulus arteriosus cerebri): Terbentuk dari anastomosis antara sirkulasi anterior (Arteria carotis interna bercabang menjadi Arteria cerebri anterior [ACA] dan Arteria cerebri media [MCA]) dan sirkulasi posterior (Arteria vertebralis bersatu menjadi Arteria basilaris yang kemudian mempercabangkan Arteria cerebri posterior [PCA]). Sirkulasi dihubungkan secara fungsional oleh Arteria communicans anterior (AComA) dan sepasang Arteria communicans posterior (PComA).',
  vena: 'Drainase vena serebri superfisial dan profunda mengalir ke dalam Sinus Venosus Durae Matris (Sinus sagittalis superior, Sinus sagittalis inferior, Sinus rectus, Sinus transversus, Sinus sigmoideus, dan Sinus cavernosus). Seluruh sinus duralis utama bermuara akhir ke Vena jugularis interna dextra et sinistra pada foramen jugulare.',
  inervasi: 'Parenkim otak tidak memiliki nosiseptor somatik langsung (insensitif terhadap nyeri); Meningen pembungkus dan adventisia vaskular intrakranial dipersarafi secara padat oleh cabang-cabang meningeal dari Nervus trigeminus (CN V1, V2, V3), ramus meningeus Nervus vagus (CN X), dan radiks saraf servikal atas (C1-C3).',
  limfatik: 'Sistem Glimfatik (Glymphatic Pathway): Sistem pembersihan metabolit interstitium otak via jalur perivaskular astrosit berekspresi Aquaporin-4 (AQP4) yang bermuara ke dalam cairan serebrospinal (LCS) di spatium subarachnoideum, berlanjut ke saluran limfatik dural meningeal menuju nodi lymphatici cervicales profundi.',
  korelasiKlinis: 'Stroke iskemik (trombosis atau emboli pada cabang sirkulus Willisi); Stroke hemoragik intraserebral (ruptur mikroaneurisma Charcot-Bouchard akibat hipertensi) atau perdarahan subaraknoid (ruptur aneurisma sakular berry); Sindrom peningkatan tekanan intrakranial (TIK) dengan Trias Cushing (hipertensi dengan widening pulse pressure, bradikardia, dan respirasi ireguler); Herniasi unkus atau tonsilaris otak.'
};

const cerebrumData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Cerebrum (Telencephalon)',
  nameId: 'Otak Besar (Serebrum)',
  deskripsi: 'Komponen terbesar ensefalon yang terdiri atas dua hemisfer serebri (hemispherium cerebri dextrum et sinistrum) yang dipisahkan oleh fissura longitudinalis cerebri dan dihubungkan oleh serabut komisural corpus callosum. Meliputi korteks serebri eksternal (substansia grisea), substansia alba subkortikal, serta nukleus subkortikal dalam (nuklei basales dan sistem limbik). Mengatur kesadaran volunter, penalaran analitis, inisiasi motorik halus, dan persepsi multimodal.',
  arteri: 'Arteria cerebri anterior (ACA) menyuplai korteks frontoparietal aspek medial dan parasagital; Arteria cerebri media (MCA) memperdarahi sebagian besar konveksitas lateral korteks dan kapsula interna (via rami lenticulostriati); Arteria cerebri posterior (PCA) memperdarahi lobus occipitalis dan korteks temporalis inferior/medial.',
  vena: 'Venae cerebri superiores bermuara ke Sinus sagittalis superior; Vena cerebri media superficialis mengalir ke Sinus cavernosus; Vena cerebri media profunda bergabung dengan V. anterior cerebri membentuk Vena basalis (Rosenthal), yang bersama Vena interna cerebri bermuara ke Vena cerebri magna (Galen) menuju Sinus rectus.',
  inervasi: 'Diproyeksikan oleh traktus talamokortikal spesifik dan non-spesifik; dimodulasi oleh sistem neurotransmiter asenden (serabut kolinergik nukleus basalis Meynert, noradrenergik lokus seruleus, dopaminergik area tegmental ventral, dan serotonergik nukleus rafe).',
  limfatik: 'Drainase perivaskular Virchow-Robin ke ruang subaraknoid melalui sistem glimfatik astrosit, menuju pembuluh limfatik dural membran araknoid dan kranium ke nodi lymphatici cervicales profundi.',
  korelasiKlinis: 'Infark teritori MCA (hemiparesis kontralateral, hemihipestesia terutama melibatkan wajah dan ekstremitas atas, afasia motorik Broca atau sensorik Wernicke pada hemisfer dominan, atau hemineglect spasial pada hemisfer non-dominan); Infark teritori ACA (kelemahan motorik dan sensorik predominan pada ekstremitas bawah kontralateral, abulia, inkontinensia urin).'
};

const cortexCerebriData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Cortex Cerebri',
  nameId: 'Korteks Serebri (Substansia Grisea Kortikal)',
  deskripsi: 'Lapisan luar substansia grisea berlekuk (membentuk gyri dan sulci) dengan ketebalan 2-4 mm pada hemisfer serebri. Terdiri dari 6 lapisan lamina histologis neokorteks (lapisan molekular, granular luar, piramidal luar, granular dalam, piramidal dalam [sel Betz], dan polimorfik). Bertanggung jawab atas fungsi mental luhur, integrasi sensorik perseptif, memori kerja, perencanaan praksis motorik, kalkulasi, serta kesadaran diri.',
  arteri: 'Cabang-cabang kortikal terminalis dari Arteria cerebri anterior (rをつrami frontopolaris, callosomarginalis), Arteria cerebri media (rami prefrontales, precentrales, postcentrales, parietales, temporales), dan Arteria cerebri posterior (rami calcarini, parietooccipitales).',
  vena: 'Venae cortico-meningeales (bridging veins) yang menyeberangi spatium subdurale dari permukaan korteks untuk bermuara ke dalam Sinus sagittalis superior dan sinus venosus lainnya.',
  inervasi: 'Sirkuit sinaptik intrakortikal glutamatergik (eksitatorik) dan GABA-ergik (inhibitorik interneuron); serabut modulasi nosiseptif meningeal dural lokal via divisi N. trigeminus (CN V).',
  limfatik: 'Sistem glimfatik kortikal difus dengan pertukaran aktif cairan interstisial-LCS di ruang paravaskular astrositik selama fase tidur non-REM (slow-wave sleep).',
  korelasiKlinis: 'Hematoma Subdural (SDH: ruptur bridging veins kortikal akibat trauma kapitis deselerasi atau atrofi otak geriatri); Epilepsi kortikal fokal (fokus epileptogenik pada lesi displasia kortikal atau jaringan parut pascatrauma); Penyakit Alzheimer (akumulasi plak amiloid beta ekstraseluler dan neurofibrillary tangles tau intraseluler kortikal).'
};

const lobusFrontalisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Lobus Frontalis',
  nameId: 'Lobus Frontal',
  deskripsi: 'Lobus anterior serebrum di rostral sulcus centralis (Rolando) dan superior sulcus lateralis (Sylvius). Mengandung korteks motorik primer (Gyrus precentralis, area Brodmann 4), korteks premotorik & suplementer (BA 6), frontal eye field (BA 8), area motorik bicara Broca (Gyrus frontalis inferior pars opercularis & triangularis, BA 44 & 45 pada hemisfer dominan), serta korteks prefrontal (BA 9, 10, 11, 46, 47) pengatur fungsi eksekutif, kepribadian, pengambilan keputusan, inhibisi impuls, dan inisiatif motorik.',
  arteri: 'Arteria cerebri anterior (ACA) memperdarahi aspek medial, superior, dan kutub frontal; Arteria cerebri media (MCA) segmen M4 memperdarahi aspek lateral dan konveksitas korteks frontal.',
  vena: 'Venae cerebri anteriores dan superiores mengalir ke Sinus sagittalis superior; drainase inferior menuju Sinus cavernosus via Vena cerebri media superficialis.',
  inervasi: 'Asal mula traktus piramidalis motorik (traktus kortikospinalis lateralis & ventralis, traktus kortikobulbaris); menerima proyeksi aferen talamus dari nukleus ventralis anterior (VA), ventralis lateralis (VL), dan mediodorsalis (MD).',
  limfatik: 'Aliran glimfatik ruang perivaskular frontal menuju cisterna chiasmatica dan selubung perineural nervus olfactorius di lamina cribrosa ossis ethmoidalis.',
  korelasiKlinis: 'Afasia Motorik Broca (afasia non-fluen: pasien mengerti pembicaraan namun kesulitan artikulasi motorik dan memproduksi kata); Sindrom Lobus Frontal (perubahan kepribadian mendadak, apati atau disinhibisi emosional, moria, defisit perencanaan eksekutif); Paralisis spastik kontralateral; Munculnya kembali refleks primitif (grasp reflex, sucking reflex, palmomental reflex).'
};

const lobusParietalisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Lobus Parietalis',
  nameId: 'Lobus Parietal',
  deskripsi: 'Terletak di posterior sulcus centralis dan anterior sulcus parieto-occipitalis. Mengandung gyrus postcentralis (korteks somatosensorik primer, area Brodmann 3, 1, 2) dengan representasi homunkulus sensorik kontralateral, lobulus parietalis superior (integrasi sensorimotor dan kesadaran spasial tubuh), lobulus parietalis inferior (gyrus supramarginalis BA 40 dan gyrus angularis BA 39) untuk pemrosesan bahasa tertulis, stereognosis, praksis, dan kalkulasi.',
  arteri: 'Arteria cerebri media (cabang parietal posterior) menyuplai bagian lateral; Arteria cerebri anterior (rami parieto-arteriales dan pericallosa) menyuplai aspek medial.',
  vena: 'Venae parietales bermuara ke Sinus sagittalis superior dan anastomotik Vena Trolard ke Sinus transversus.',
  inervasi: 'Menerima input somatosensorik dari nukleus ventralis posterolateralis (VPL) dan posteromedialis (VPM) talami yang membawa modalitas kolumna dorsalis (sentuhan diskriminatif, vibrasi, propriosepsi) dan traktus spinotalamikus (nyeri, suhu).',
  limfatik: 'Drainase perivaskular glimfatik parietal ke spatium subarachnoideum parietal dan granulasio araknoid parasagital.',
  korelasiKlinis: 'Sindrom Gerstmann (lesi gyrus angularis lobus parietal dominan: tetrad agrafia, akalkulia, agnosia jari, dan disorientasi kanan-kiri); Hemispatial Neglect (abnegasi hemi-spasial kontralateral akibat lesi parietal non-dominan, pasien mengabaikan separuh dunia/tubuh kontralateral); Astereognosis (ketidakmampuan mengenali bentuk benda lewat rabaan); Apraksia ideomotorik.'
};

const lobusTemporalisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Lobus Temporalis',
  nameId: 'Lobus Temporal',
  deskripsi: 'Terletak di inferior sulcus lateralis (Sylvius). Mengandung korteks pendengaran primer (gyri transversi Heschl, BA 41 & 42), korteks pendengaran sekunder dan area pemahaman bahasa sensorik Wernicke (gyrus temporalis superior posterior, BA 22 hemisfer dominan), serta struktur medial temporale (formatio hippocampi untuk konsolidasi memori episodik, gyrus parahippocampalis, dan amigdala untuk integrasi afektif).',
  arteri: 'Arteria cerebri media (cabang-cabang temporales laterales) untuk aspek lateral; Arteria cerebri posterior (cabang anterior dan posterior temporal) serta Arteria choroidea anterior menyuplai aspek basal dan medial temporal (termasuk hipokampus).',
  vena: 'Vena anastomotica inferior (Labbe) mengalirkan darah dari permukaan temporal ke Sinus transversus; Vena basalis (Rosenthal) mengalirkan drainase medial.',
  inervasi: 'Menerima radiasio akustika dari corpus geniculatum mediale (CGM) talamus; dilintasi oleh serabut bawah radiasio optika (Meyer loop) menuju korteks kalkarina; input limbik amigdaloid.',
  limfatik: 'Aliran glimfatik parenkimal menuju cisterna ambiens dan cisterna basalis menuju limfatik servikal interna.',
  korelasiKlinis: 'Afasia Sensorik Wernicke (afasia fluen: bicara lancar dengan intonasi terjaga namun tanpa makna logis / "word salad", disertai kegagalan pemahaman bahasa lisan dan tulisan); Epilepsi Lobus Temporal (kejang fokal dengan halusinasi bau/rasa, otomatisme pengecapan, déjà vu); Sindrom Klüver-Bucy (lesi amigdala bilateral: hiperororitas, hilangnya respon takut, hipermetamorfosis); Kuadrananopsia homonim superior kontralateral (akibat lesi Meyer loop).'
};

const lobusOccipitalisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Lobus Occipitalis',
  nameId: 'Lobus Oksipital',
  deskripsi: 'Lobus paling posterior hemisfer serebri, dibatasi di medial oleh sulcus parieto-occipitalis dan terletak di atas tentorium cerebelli. Mengandung korteks penglihatan primer (Cortex Striata, BA 17) yang terletak di bibir atas dan bawah sulcus calcarinus, serta korteks asosiasi visual sekunder dan tersier (BA 18 & 19). Memetakan impuls visual dari hemiretina ipsilateral (lapang pandang kontralateral) dengan representasi fovea makula yang sangat terperinci.',
  arteri: 'Arteria cerebri posterior (PCA cabang arteria calcarina dan parietooccipitalis); Kutub oksipital paling posterior (representasi makula) menerima perfusi ganda (dual supply) anastomosis kolateral dari cabang distal Arteria cerebri media (MCA).',
  vena: 'Venae occipitales mengalir ke Sinus sagittalis superior, Confluens Sinuum (Torcula Herophili), dan Sinus transversus.',
  inervasi: 'Menerima radiatio optica (traktus geniculocalcarinus) dari corpus geniculatum laterale (CGL) talamus; mengirimkan serabut asosiasi jalur visual dorsal ("where pathway" ke parietal) dan ventral ("what pathway" ke temporal).',
  limfatik: 'Drainase glimfatik ke spatium subarachnoideum cisterna cerebellomedullaris dan cisterna magna.',
  korelasiKlinis: 'Hemianopsia Homonim Kontralateral dengan Macular Sparing (pada stroke oklusi A. cerebri posterior berkat kolateral vaskular dari MCA); Kebutaan Kortikal / Sindrom Anton (kebutaan total bilateral akibat infark oksipital bilateral di mana pasien menyangkal kebutaannya / anosognosia konfabulatif); Agnosia visual (ketidakmampuan mengenali objek visual meski ketajaman mata intak).'
};

const corpusCallosumData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Corpus Callosum',
  nameId: 'Korpus Kalosum',
  deskripsi: 'Struktur komisural substansia alba terbesar di otak, terdiri lebih dari 200 juta akson bermielin yang menghubungkan area homolog di hemisfer serebri kanan dan kiri untuk integrasi interhemisferik. Terbagi menjadi rostrum di anteroinferior, genu di anterior, truncus (corpus) di tengah, dan splenium di posterior yang melebar.',
  arteri: 'Arteria pericallosa (cabang terminalis dari Arteria cerebri anterior) dan Arteria subcallosa; Splenium posterior mendapat perfusi tambahan dari rami spleniales Arteria cerebri posterior (PCA).',
  vena: 'Vena anterior septi pellucidi dan Vena callosa yang mengalir ke Vena interna cerebri, lalu bermuara ke Vena cerebri magna (Galen).',
  inervasi: 'Merupakan serabut aksonal substansia alba murni (komisural), tidak memiliki badan sel motorik/sensorik intrinsik; bertindak sebagai konduktor transmisi potensial aksi interhemisferik.',
  limfatik: 'Drainase perivaskular menuju cisterna pericallosa dan sistem ventrikular serebri.',
  korelasiKlinis: 'Split-Brain Syndrome (sindrom diskoneksi pasca-callosotomy untuk epilepsi intraktabel: ketidakmampuan menyebutkan nama objek yang dipegang tangan kiri atau dilihat di lapang pandang kiri); Aleksia Tanpa Agrafia (lesi splenium korpus kalosum dan korteks oksipital kiri akibat infark PCA: pasien dapat menulis namun tidak dapat membaca kembali tulisannya); Alien Hand Syndrome (gerakan otonom tangan yang bertentangan dengan kehendak sadar).'
};

const thalamusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Thalamus',
  nameId: 'Talamus',
  deskripsi: 'Sepasang massa ovoid substansia grisea berukuran besar di diencephalon yang mengapit ventrikel ketiga, dihubungkan di medial oleh adhesio interthalamica. Bertindak sebagai stasiun relai dan penyaring (sensory gating) utama bagi seluruh modalitas sensorik tubuh (kecuali olfaktori) sebelum diproyeksikan ke korteks, serta stasiun pengatur sirkuit umpan balik motorik antara ganglia basalis, serebelum, dan korteks motorik.',
  arteri: 'Cabang-cabang arteri perforans talamikus: Arteria tuberothalamica (polar, cabang PComA), Arteria paramediana / thalamoperforans (cabang segmen P1 PCA), Arteria thalamogeniculata (cabang segmen P2 PCA), dan Arteria choroidea posterior.',
  vena: 'Vena thalamostriata superior (berjalan di stria terminalis) bergabung dengan Vena choroidea membentuk Vena interna cerebri di foramen Monro, bermuara ke Vena cerebri magna (Galen).',
  inervasi: 'Kumpulan nukleus relai spesifik: VPL (sensorik tubuh kontralateral), VPM (sensorik wajah kontralateral via traktus trigeminotalamikus), CGL (relai visual), CGM (relai auditorik), VA/VL (relai motorik serebelar dan striatal), nukleus pulvinar dan anterior (fungsi limbik dan memori).',
  limfatik: 'Aliran glimfatik diensefalik ke dalam LCS ventrikel ketiga dan cisterna velum interpositum.',
  korelasiKlinis: 'Sindrom Nyeri Talamik Dejerine-Roussy (nyeri neuropatik paroksismal berat, alodinia, dan hiperestesia pada sisi tubuh kontralateral pasca-stroke infark arteri thalamogenikulata); Oklusi Arteri Percheron (arteri soliter varian yang memperdarahi talamus paramedian bilateral, menyebabkan stupor/koma akut, paralisis lirikan vertikal, dan amnesia); Mutisme akinetik.'
};

const hypothalamusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Hypothalamus',
  nameId: 'Hipotalamus',
  deskripsi: 'Pusat integrasi tertinggi sistem saraf otonom (simpatis dan parasimpatis) serta sistem neuroendokrin yang terletak di dinding inferior dan lantai ventrikel ketiga di bawah sulcus hypothalamicus. Mengatur suhu tubuh (termoregulasi), keseimbangan cairan tubuh dan osmolaritas (rasa haus), rasa lapar dan kenyang, ritme sirkadian (nukleus suprakiasmatikus), emosi dan perilaku agresif, serta kontrol sekresi kelenjar hipofisis anterior dan posterior.',
  arteri: 'Arteria-arteria perforantes halus dari sirkulus Willisi: cabang-cabang dari Arteria communicans anterior, segmen prekomunikal ACA (A1), Arteria carotis interna pars cerebralis, dan Arteria communicans posterior.',
  vena: 'Pleksus kapiler hipotalamus mengalir ke sistem porta hipofisis (vena portalis hypophysialis) dan vena-vena basales/vena interna cerebri.',
  inervasi: 'Traktus supraopticohypophysialis (menghantarkan ADH/vasopresin dan oksitosin dari nukleus supraoptikus & paraventrikularis ke neurohipofisis); traktus tuberoinfundibularis; fasikulus longitudinalis dorsalis (proyeksi otonom desenden ke pusat simpatis kornu intermedio-lateral torakolumbal dan parasimpatis sakral).',
  limfatik: 'Drainase perivaskular menuju cisterna chiasmatica dan cisterna interpeduncularis.',
  korelasiKlinis: 'Diabetes Insipidus Sentral (kerusakan sintesis ADH pada nukleus supraoptikus akibat trauma kapitis atau tumor supraselar, menyebabkan poliuria encer masif dan polidipsia); Sindrom Horner Sentral (lesi traktus simpatis desenden di hipotalamus/batang otak); Hipertermia maligna neurogenik; Sindrom obesitas hipotalamik (lesi nukleus ventromedialis hipotalamus).'
};

const cerebellumData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Cerebellum',
  nameId: 'Otak Kecil (Serebelum)',
  deskripsi: 'Terletak di fossa cranii posterior di dorsal pons dan medulla oblongata, dipisahkan dari lobus occipitalis oleh tentorium cerebelli. Terdiri atas dua hemisfer serebelar yang disatukan oleh vermis di garis tengah. Berfungsi memodulasi koordinasi gerak volunter motorik halus, menghitung kesalahan koreksi motorik (motor error correction), mempertahankan keseimbangan tubuh (vestibulocerebellum), tonus otot postural, dan pembelajaran motorik berbasis repetisi.',
  arteri: 'Tiga pasang arteri serebelar: Arteria cerebellaris superior (SCA, cabang terminalis A. basilaris), Arteria cerebellaris anterior inferior (AICA, cabang A. basilaris), dan Arteria cerebellaris posterior inferior (PICA, cabang terbesar A. vertebralis).',
  vena: 'Venae cerebellares superiores et inferiores yang mengalirkan darah ke Sinus petrosus superior, Sinus rectus, Sinus sigmoideus, dan Sinus occipitalis.',
  inervasi: 'Dihubungkan ke batang otak via tiga pedunculus cerebellaris: pedunculus superior (output eferen utama nukleus dentatus ke talamus dan korteks motorik), pedunculus medius (input masif kortikopontoserebelar), dan pedunculus inferior (input aferen propriosepsi traktus spinoserebelaris dan sistem vestibular). Korteks serebeli mengandung sel Purkinje inhibitorik GABAergik.',
  limfatik: 'Sistem glimfatik serebelar mengalirkan cairan interstitium ke cisterna magna (cisterna cerebellomedullaris) dan cisterna pontocerebellaris.',
  korelasiKlinis: 'Ataksia Serebelar (inkoordinasi gaya berjalan "drunken gait"); Disdiadokokinesia (kegagalan melakukan gerakan pronasi-supinasi cepat bolak-balik); Dismetria (past-pointing pada uji jari-ke-hidung atau tumit-ke-lutut); Intention Tremor (tremor saat mendekati target motorik); Nistagmus vertikal atau gaze-evoked; Disartria skandir (scanning speech); Vertigo sentral.'
};

const truncusEncephaliData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Truncus Encephali',
  nameId: 'Batang Otak (Brainstem)',
  deskripsi: 'Pilar batang saraf penghubung antara diensefalon dan hemisfer serebri dengan medula spinalis di foramen magnum. Disusun dari tiga bagian berurutan dari kranial ke kaudal: Mesencephalon, Pons, dan Medulla Oblongata. Mengandung pusat refleks otonom vital kehidupan (kardiovaskular, vasopresor, ritmisitas pernapasan, muntah, batuk, menelan), Ascending Reticular Activating System (ARAS) pengatur kesadaran/kewaspadaan, serta nukleus saraf kranial CN III hingga XII.',
  arteri: 'Perfusi sirkulasi posterior vertebrobasilaris: Arteria vertebralis sinistra et dextra bersatu menjadi Arteria basilaris, mempercabangkan arteri paramedian, arteri sirkumferensial pendek, dan arteri sirkumferensial panjang (PICA, AICA, SCA, PCA).',
  vena: 'Pleksus venosus batang otak superfisial dan profunda yang bermuara ke Vena basalis, Vena petrosa (Dandy), Sinus petrosus inferior, Sinus occipitalis, dan Sinus sigmoideus.',
  inervasi: 'Konduit bagi seluruh traktus motorik desenden (kortikospinalis, kortikobulbaris) dan traktus sensorik asenden (lemniskus medialis, spinotalamikus); mengandung nuklei saraf kranial III sampai XII dan jejaring formasi retikularis penyekresi neuromodulator monoaminergik.',
  limfatik: 'Drainase paravaskular glimfatik ke dalam cisterna basalis (cisterna interpeduncularis, prepontina, dan cerebellomedullaris).',
  korelasiKlinis: 'Koma dan mati batang otak (kerusakan ireversibel jejaring ARAS); Herniasi transtentorial dan herniasi tonsilar foramen magnum (kompresi fatal pusat kardiorespirasi batang otak); Sindrom batang otak berselang (Alternating Brainstem Syndromes: parese saraf kranial ipsilateral tipe LMN disertai hemiparesis/hemianestesi kontralateral tipe UMN pada ekstremitas).'
};

const mesencephalonData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Mesencephalon',
  nameId: 'Otak Tengah (Midbrain)',
  deskripsi: 'Segmen paling kranial dari batang otak, dilalui di tengah oleh aquaductus cerebri (Sylvii) yang menghubungkan ventrikel ketiga dan keempat. Terbagi menjadi Tectum di posterior (colliculus superior untuk refleks orientasi visual dan colliculus inferior untuk relai auditorik), Tegmentum di tengah (mengandung substansia nigra, nukleus ruber, periaqueductal gray [PAG], dan nukleus CN III & IV), serta Crus Cerebri (pedunculus cerebri) di anterior yang memuat serabut traktus kortikospinalis dan kortikobulbaris.',
  arteri: 'Cabang-cabang interpedunkular dan mesensefalik dari ujung bifurkasio Arteria basilaris, Arteria cerebri posterior (PCA segmen P1), dan Arteria cerebellaris superior (SCA).',
  vena: 'Vena basalis (Rosenthal) dan Vena cerebri magna (Galen) menuju Sinus rectus.',
  inervasi: 'Nukleus motorik Nervus oculomotorius (CN III), nukleus parasimpatis Edinger-Westphal, dan nukleus Nervus trochlearis (CN IV); Substantia nigra pars compacta (SNc) menghasilkan transmisi dopaminergik ke striatum ganglia basalis.',
  limfatik: 'Drainase glimfatik mesensefalik menuju cisterna interpeduncularis dan cisterna ambiens.',
  korelasiKlinis: 'Penyakit Parkinson (degenerasi progresif neuron dopaminergik pada substantia nigra pars compacta: tremor istirahat resting tremor, rigiditas lead-pipe/cogwheel, bradikinesia, dan instabilitas postural); Sindrom Weber (infark pedunculus cerebri anterior: parese CN III ipsilateral disertai hemiplegia kontralateral); Sindrom Parinaud (kompresi tektum oleh pinealoma: paralisis lirikan ke atas / upward gaze palsy, pseudo-Argyll Robertson pupils).'
};

const ponsData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Pons',
  nameId: 'Pons (Jembatan Varol)',
  deskripsi: 'Segmen tengah batang otak yang membesar di ventral di antara mesencephalon dan medulla oblongata, di anterior serebelum (membatasi dinding ventral ventrikel keempat). Memiliki alur sulcus basilaris di garis tengah ventral. Terdiri dari pars basilaris pontis (memuat serabut kortikopontin, nuklei pontis, serabut transversa pontis yang menyilang ke pedunculus cerebellaris medius, dan traktus kortikospinalis) dan tegmentum pontis (memuat nukleus motorik & sensorik CN V, VI, VII, VIII, serta pusat pernapasan apneustik dan pneumotaksik).',
  arteri: 'Rami pontini (cabang paramedian, sirkumferensial pendek dan panjang) yang dipercabangkan langsung dari Arteria basilaris, serta kontribusi dari Arteria cerebellaris anterior inferior (AICA).',
  vena: 'Vena transversa pontis dan Vena petrosa yang bermuara ke Sinus petrosus superior dan Sinus petrosus inferior.',
  inervasi: 'Nukleus motorik dan nukleus sensorik utama CN V (trigeminus), nukleus motorik CN VI (abducens), nukleus CN VII (facialis), nukleus vestibularis dan koklearis CN VIII, serta Paramedian Pontine Reticular Formation (PPRF / pusat pengatur lirikan bola mata horizontal).',
  limfatik: 'Drainase ruang perivaskular menuju cisterna prepontina dan cisterna cerebellopontina.',
  korelasiKlinis: 'Locked-in Syndrome (infark bilateral basis pontis akibat oklusi mendadak trunkus arteria basilaris: tetraplegia total dan anartria dengan kesadaran dan fungsi kognitif yang sepenuhnya intak, komunikasi hanya dapat dilakukan melalui gerakan vertikal kelopak mata dan bola mata); Mielinolisis Pontin Sentral (Central Pontine Myelinolysis / Osmotic Demyelination Syndrome akibat koreksi hiponatremia kronik yang terlalu cepat).'
};

const medullaOblongataData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Medulla Oblongata',
  nameId: 'Medula Oblongata (Sumsum Lanjutan)',
  deskripsi: 'Segmen paling kaudal batang otak yang menghubungkan pons dengan medula spinalis di foramen magnum. Pada permukaan anterior terdapat sepasang tonjolan pyramis (dilalui traktus kortikospinalis dengan decussatio pyramidum di batas bawahnya) dan oliva di lateralnya (berisi nukleus olivarius inferior). Mengandung pusat kendali otonom vital untuk regulasi frekuensi denyut jantung, tekanan darah vasomotor, pusat ritmisitas pernapasan meduler, serta pusat refleks menelan, muntah, batuk, dan bersin.',
  arteri: 'Arteria spinalis anterior, Arteria vertebralis, cabang paramedian arteri medullaris, dan Arteria cerebellaris posterior inferior (PICA).',
  vena: 'Vena medullaris anterior et posterior yang menyambung dengan vena spinalis dan mengalir ke Sinus petrosus inferior, Sinus occipitalis, dan Vena jugularis interna.',
  inervasi: 'Nukleus ambiguus (inervasi motorik faring/laring via CN IX dan X), nukleus tractus solitarius (relai sensasi kecap dan input aferen baroreseptor/kemoreseptor viseral), nukleus dorsalis nervi vagi (eferen parasimpatis visera), nukleus hypoglossus (CN XII), nukleus spinalis nervi trigemini, serta decussatio lemnisci medialis (kolumna posterior funiculus gracilis dan cuneatus).',
  limfatik: 'Drainase paravaskular glimfatik langsung ke dalam cisterna cerebellomedullaris (cisterna magna) dan kanalis spinalis.',
  korelasiKlinis: 'Sindrom Medular Lateral / Sindrom Wallenberg (akibat trombosis PICA atau arteria vertebralis: vertigo, disfagia, disartria, ataksia serebelar ipsilateral, sindrom Horner ipsilateral, analgesia wajah ipsilateral, dan hemihipestesia kontralateral tubuh); Sindrom Medular Medial / Sindrom Dejerine (infark cabang arteria spinalis anterior: deviasi lidah ke sisi lesi ipsilateral dan hemiplegia kontralateral).'
};

// ============================================================================
// 2. SISTEM VENTRIKEL, MENINGEN, & HIPOFISEAL
// ============================================================================

const ventriculusLateralisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ventriculus Lateralis Cerebri',
  nameId: 'Ventrikel Lateralis (Kiri & Kanan)',
  deskripsi: 'Sepasang rongga ventrikel berbentuk huruf C di dalam substansia serebri masing-masing hemisfer. Terbagi anatomis menjadi cornu anterius (frontale), corpus, cornu posterius (occipitale), cornu inferius (temporale), dan atrium (trigonum ventrikulare). Mengandung plexus choroideus yang memproduksi sebagian besar cairan serebrospinalis (LCS, volume sirkulasi harian ~500 mL). LCS dialirkan ke ventrikel ketiga melalui foramen interventriculare (Monro).',
  arteri: 'Arteria choroidea anterior (cabang Arteria carotis interna) dan Arteria choroidea posterior (rami mediales et laterales dari Arteria cerebri posterior).',
  vena: 'Vena choroidea dan Vena thalamostriata superior yang bersatu di foramen Monro membentuk Vena interna cerebri.',
  inervasi: 'Sel endotel pleksus koroid dan ependim ventrikel dipersarafi oleh serabut simpatis vasomotor pascaganglionik dari Ganglion cervicale superius (memodulasi laju sekresi LCS) dan parasimpatis dari Ganglion pterygopalatinum.',
  limfatik: 'LCS yang diproduksi mengalir bersirkulasi membilas sisa produk sisa metabolisme neurotoksik SSP sebelum diabsorpsi ke sistem vena dan pembuluh limfatik dural.',
  korelasiKlinis: 'Hidrosefalus obstruktif non-komunikan (stenosis kongenital atau kompresi foramen Monro unilateral menyebabkan dilatasi ventrikel lateral ipsilateral dengan tanda peningkatan TIK); Papiloma pleksus koroid (tumor jinak neuroektodermal yang menyebabkan overproduksi LCS); Perdarahan intraventrikular (IVH) akibat ruptur germinal matrix pada neonatus prematur.'
};

const ventriculusTertiusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ventriculus Tertius',
  nameId: 'Ventrikel Ketiga',
  deskripsi: 'Rongga sempit celah vertikal di garis tengah diensefalon, dibatasi secara lateral oleh permukaan medial talamus dan hipotalamus kanan dan kiri, dihubungkan di tengah oleh massa adhesio interthalamica. Di anterosuperior menerima aliran LCS dari kedua ventrikel lateral melalui foramen interventriculare Monro, dan di posteroinferior menyalurkan LCS ke ventrikel keempat melalui aquaductus cerebri (Sylvii). Mengandung pleksus koroid pada atapnya (tela choroidea).',
  arteri: 'Rami choroidei posteriores dari Arteria cerebri posterior (PCA) dan cabang-cabang perforans arteri hipotalamikus.',
  vena: 'Sepasang Vena interna cerebri yang berjalan paralel di atap velum interpositum menuju Vena cerebri magna (Galen).',
  inervasi: 'Inervasi otonom perivaskular pleksus koroid oleh serabut simpatis adrenergik servikalis.',
  limfatik: 'Sirkulasi LCS mengalir ke aquaductus cerebri dan cisterna basalis.',
  korelasiKlinis: 'Kista Koloid Ventrikel Ketiga (massa jinak kistik di regio foramen Monro yang dapat bergeser menyebabkan obstruksi intermiten akut "ball-valve mechanism", memicu sakit kepala postural hebat mendadak, drop attacks, hilang kesadaran seketika, hingga kematian mendadak akibat herniasi akut); Stenosis aquaductus Sylvii (penyebab paling umum hidrosefalus obstruktif kongenital pada bayi).'
};

const ventriculusQuartusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ventriculus Quartus',
  nameId: 'Ventrikel Keempat',
  deskripsi: 'Rongga berbentuk tenda prisma romboid di fossa cranii posterior, terletak di dorsal pons dan medulla oblongata serta di ventral cerebellum. Lantainya dibentuk oleh fossa rhomboidea (tempat nukleus-nukleus saraf kranial), atapnya dibentuk oleh velum medullare superius dan inferius. Merupakan muara akhir sistem ventrikel intrakranial dengan 3 foramen keluar menuju spatium subarachnoideum: sepasang apertura lateralis (Foramen Luschka) dan satu apertura mediana (Foramen Magendie), serta berlanjut ke kaudal sebagai canalis centralis medullae spinalis.',
  arteri: 'Arteria cerebellaris posterior inferior (PICA) dan Arteria cerebellaris anterior inferior (AICA).',
  vena: 'Venae medullares dan Venae cerebellares inferiores yang bermuara ke Sinus petrosus inferior dan Sinus sigmoideus.',
  inervasi: 'Area Postrema di dinding inferolateral ventrikel keempat merupakan Chemoreceptor Trigger Zone (CTZ) emesis tanpa sawar darah otak yang sensitif terhadap toksin emetogenik sistemik, dipersarafi reseptor dopaminergik D2, serotonin 5-HT3, dan neurokinin NK1.',
  limfatik: 'Gerbang utama keluarnya cairan serebrospinal dari sistem ventrikular menuju cisterna magna dan spatium subarachnoideum spinalis maupun kortikal.',
  korelasiKlinis: 'Malformasi Dandy-Walker (agenesis vermis serebeli disertai dilatasi kistik ventrikel keempat dan atresia foramina Luschka dan Magendie); Ependimoma ventrikel keempat (tumor intrakranial anak yang memicu hidrosefalus obstruktif akut dan muntah proyektil akibat stimulasi CTZ); Malformasi Chiari tipe II (herniasi vermis dan ventrikel keempat ke kanalis servikalis).'
};

const meningesData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Meninges',
  nameId: 'Selaput Otak & Medula Spinalis (Meningen)',
  deskripsi: 'Lapisan selubung membran jaringan ikat tripel yang membungkus, menyangga, dan melindungi parenkim otak dan medula spinalis dari trauma mekanik serta membatasi kompartemen cairan. Terdiri atas: Dura mater (lapisan terluar yang padat, keras, dan fibrosa / pachymeninx), Arachnoidea mater (lapisan tengah avaskular menyerupai jaring laba-laba), dan Pia mater (lapisan terdalam vaskular halus yang melekat erat mengikuti sulcus dan gyrus / leptomeninx). Ruang di antara araknoid dan piamater (spatium subarachnoideum) dilalui cairan serebrospinal dan pembuluh darah pial.',
  arteri: 'Arteria meningea media (cabang terbesar, berasal dari A. maxillaris melewati foramen spinosum), Arteria meningea anterior (cabang A. ethmoidalis), dan Arteria meningea posterior (cabang A. pharyngea ascendens); pembuluh pial disuplai cabang kortikal ACA, MCA, dan PCA.',
  vena: 'Venae meningeae bermuara ke Plexus venosus pterygoideus; Sinus venosus durae matris (antara lamina endosteal dan meningeal dura mater) menampung drainase vena serebri dan LCS.',
  inervasi: 'Dura supratentorial dipersarafi secara padat oleh rami meningei Nervus trigeminus (CN V1, V2, V3); Dura infratentorial dipersarafi oleh Nervus vagus (CN X) dan rami anteriores saraf servikal atas (C1-C3). Pia dan araknoid memiliki sedikit serabut sensorik langsung namun pembuluh darah pial dipersarafi serabut otonom.',
  limfatik: 'Jaringan pembuluh limfatik dural sejati (dural lymphatics) di sepanjang sinus sagittalis superior dan sinus transversus yang bermuara langsung ke nodi lymphatici cervicales profundi.',
  korelasiKlinis: 'Meningitis akut (infeksi bakteri/virus pada leptomeninges dengan trias demam, kaku kuduk / nuchal rigidity, dan penurunan kesadaran; Kernig dan Brudzinski positif); Hematoma Epidural (EDH: robekan A. meningea media); Hematoma Subdural (SDH: robekan bridging veins); Perdarahan Subaraknoid (SAH: ruptur aneurisma intrakranial menghasilkan "thunderclap headache" paling hebat seumur hidup).'
};

const duraMaterData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Dura Mater Encephali',
  nameId: 'Dura Mater (Selaput Otak Keras)',
  deskripsi: 'Lapisan fibrosa padat terluar dari meningen. Pada kavum kranii terdiri atas dua lamina: lamina periostalis (melekat pada tabula interna tengkorak) dan lamina meningealis. Membentuk sekat-sekat dural fungsional yang menstabilkan massa otak: Falx cerebri (di fisura longitudinalis), Tentorium cerebelli (memisahkan oksipital dan serebelum), Falx cerebelli, dan Diaphragma sellae (atap sella turcica). Di antara kedua lamina dura terbentuk saluran Sinus Venosus Durae Matris.',
  arteri: 'Arteria meningea media (cabang A. maxillaris), didukung oleh Arteria meningea accessoria, Arteria meningea anterior, dan Arteria meningea posterior.',
  vena: 'Sinus venosus durae matris (Sinus sagittalis superior, transversus, sigmoideus, cavernosus, rectus, petrosus) dan vena meningea media menuju pleksus pterigoideus.',
  inervasi: 'Rami tentorii nervi ophthalmici (CN V1), rami meningei CN V2, CN V3, Nervus vagus (CN X), dan saraf spinal C1-C3; merupakan sumber utama persepsi nyeri kepala nosiseptif vaskular.',
  limfatik: 'Pembuluh limfatik meningeal dural yang berjalan paralel dengan sinus venosus mengalirkan makromolekul dan sel imun ke nodi lymphatici cervicales profundi.',
  korelasiKlinis: 'Hematoma Epidural (EDH: akumulasi darah arteri antara tabula interna cranium dan lamina periostalis dura akibat fraktur os temporale di pterion merobek A. meningea media, tampak gambaran bikonveks hiperdens pada CT scan kepala dengan fenomena "lucid interval"); Trombosis Sinus Venosus Serebral (CVST).'
};

const arachnoideaData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Arachnoidea Mater Encephali',
  nameId: 'Araknoid (Lapisan Selaput Jaring Laba-Laba)',
  deskripsi: 'Lapisan membranosa tengah meningen yang avaskular dan transparan, membentang di atas sulcus tanpa masuk ke dalamnya. Terpisah dari dura oleh spatium subdurale potensial, dan dipisahkan dari piamater oleh spatium subarachnoideum yang luas, terisi cairan serebrospinalis (LCS) serta dilewati jaring trabeculae arachnoideae. Membentuk tonjolan mikroskopis dan makroskopis (Granulationes Arachnoideae Pacchioni) yang menembus dura mater masuk ke dalam lumen Sinus sagittalis superior untuk reabsorpsi LCS.',
  arteri: 'Avaskular murni; tidak memiliki pembuluh darah kapiler intrinsik (nutrisi diperoleh dari difusi cairan serebrospinal).',
  vena: 'Granulationes arachnoideae bertindak sebagai katup satu arah (one-way valve) yang mengalirkan LCS langsung ke dalam darah vena Sinus sagittalis superior saat tekanan LCS melebihi tekanan vena dural.',
  inervasi: 'Tidak memiliki reseptor sensorik intrinsik; dilalui oleh berkas saraf kranial dan pembuluh darah yang melintasi spatium subarachnoideum.',
  limfatik: 'Merupakan elemen sentral sirkulasi dan reabsorpsi LCS; mengalirkan metabolit otak dari sistem glimfatik ke kompartemen vena dan limfatik dural.',
  korelasiKlinis: 'Perdarahan Subaraknoid (SAH: ekstravasasi darah ke dalam spatium subarachnoideum, paling sering akibat ruptur aneurisma berry sirkulus Willisi, menimbulkan vasospasme serebral reaktif sekunder dan hidrosefalus komunikan); Kista Araknoid (kista kongenital jinak berisi LCS); Araknoitidis pasca-trauma atau pasca-meningitis.'
};

const piaMaterData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Pia Mater Encephali',
  nameId: 'Pia Mater (Lapisan Selaput Otak Lembut)',
  deskripsi: 'Lapisan membran terdalam meningen yang sangat tipis, transparan, dan kaya vaskularisasi (leptomeninx). Melekat intim mengikuti seluruh kontur morfologi gyri, masuk ke dasar setiap sulcus dan fissura serebri. Mengikuti percabangan arteri yang masuk menembus parenkim otak, membentuk dinding luar rongga perivaskular (ruang Virchow-Robin) bersama lamina basalis glia limitans astrosit.',
  arteri: 'Mendapat perfusi langsung dari pleksus arteriol pial yang merupakan percabangan terminal dari ACA, MCA, PCA, dan arteri serebelar.',
  vena: 'Pleksus venosus pial superfisial yang mengalirkan darah mikrosirkulasi kortikal ke dalam vena-vena serebri superfisial dan bridging veins.',
  inervasi: 'Dipersenjatai oleh jalinan serabut otonom perivaskular pial simpatis (noradrenergik) dan parasimpatis (kolinergik dan nitrergik) yang meregulasi tonus arteriol pial dan autoregulasi aliran darah otak (cerebral blood flow / CBF).',
  limfatik: 'Komponen struktural krusial antarmuka glimfatik; memfasilitasi filtrasi dan pertukaran massa antara cairan serebrospinal di spatium subarachnoideum dan cairan interstisial otak melalui membran pembatas pial-glial.',
  korelasiKlinis: 'Leptomeningitis bakterialis/tuberkulosa (inflamasi eksudatif berat pada pia mater dan araknoid yang dapat menimbulkan vaskulitis pial sekunder, infark kortikal serebri, dan palsi saraf kranial basilar).'
};

const hypophysisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Glandula Pituitaria (Hypophysis)',
  nameId: 'Kelenjar Hipofisis (Pituitary Gland)',
  deskripsi: 'Kelenjar endokrin "master gland" seukuran kacang polong yang bertengger di dalam fossa hypophysialis sella turcica ossis sphenoidalis, terlindung di bawah diaphragma sellae dan terhubung ke hipotalamus melalui infundibulum (tangkai hipofisis). Terbagi atas Adenohipofisis (lobus anterior: menyekresi GH, ACTH, TSH, FSH, LH, dan prolaktin) dan Neurohipofisis (lobus posterior: menyimpan dan menyekresi hormon hipotalamus oksitosin dan vasopresin/ADH). Tepat di sebelah superiornya terletak chiasma opticum.',
  arteri: 'Arteria hypophysialis superior (cabang segmen oftalmik A. carotis interna untuk eminensia mediana dan infundibulum) dan Arteria hypophysialis inferior (cabang segmen kavernosa A. carotis interna untuk lobus posterior).',
  vena: 'Sistem Porta Hipotalamo-Hipofiseal (Venae portales hypophysiales) membawa releasing/inhibiting hormones ke adenohipofisis; darah vena bermuara ke Sinus cavernosus yang mengapit sella turcica.',
  inervasi: 'Neurohipofisis menerima serabut akson tak bermielin dari nukleus supraoptikus dan paraventrikularis hipotalamus (traktus supraopticohypophysialis); Adenohipofisis diatur secara humoral hormonal; serabut simpatis vasomotor dari ganglion servikal superior.',
  limfatik: 'Drainase perivaskular lokal ke ruang subaraknoid cisterna chiasmatica dan limfatik selubung dural sella turcica menuju nodi cervicales profundi.',
  korelasiKlinis: 'Adenoma Hipofisis (tumor makroadenoma yang meluas ke superior menekan chiasma opticum dari arah inferomedial, memotong serabut hemiretina nasal yang menyilang, sehingga bermanifestasi klasik sebagai Hemianopsia Bitemporal); Sindrom Sheehan (nekrosis iskemik akut adenohipofisis pascapersalinan akibat syok hemoragik masif obstetri); Pituitary Apoplexy (perdarahan akut mendadak pada adenoma hipofisis yang merupakan kegawatdaruratan bedah saraf).'
};

// ============================================================================
// 3. MEDULLA SPINALIS, CAUDA EQUINA, & PLEKSUS PERIFER
// ============================================================================

const spinalCordData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Medulla Spinalis',
  nameId: 'Medula Spinalis (Sumsum Tulang Belakang)',
  deskripsi: 'Bagian silindris memanjang sistem saraf pusat di dalam kanalis vertebralis, membentang dari foramen magnum hingga conus medullaris (setinggi diskus L1-L2 pada dewasa). Memiliki 31 pasang nervi spinales (8 servikal, 12 torakal, 5 lumbal, 5 sakral, 1 koksigeal) serta dua pembesaran (intumescentia cervicalis C4-T1 untuk pleksus brakialis dan intumescentia lumbosacralis L1-S3 untuk pleksus lumbosakralis). Tersusun atas substansia grisea sentral berbentuk kupu-kupu (kornu anterior somatomotorik, kornu posterior somatosensorik, kornu lateral otonom T1-L2 dan S2-S4) yang dikelilingi kolumna funiculus substansia alba bermielin (traktus kortikospinalis, spinotalamikus, funikulus posterior).',
  arteri: '1 Arteria spinalis anterior (berjalan di fisura mediana anterior, memperdarahi 2/3 anterior medula spinalis) dan 2 Arteriae spinales posteriores (memperdarahi 1/3 posterior kolumna dorsalis), diperkuat oleh rami radiculares spinalis dan arteria radikularis magna (Adamkiewicz) yang biasanya memperdarahi segmen torakolumbal bawah (berasal dari aorta setinggi T9-L1 kiri).',
  vena: 'Venae spinales anteriores et posteriores serta Plexus venosus vertebralis internus (Batson) valveless yang bermuara ke vena intercostales, vena azygos, dan vena cava inferior.',
  inervasi: 'Radiks ventralis anterior membawa serabut eferen somatomotorik dan otonom preganglionik; radiks dorsalis posterior membawa serabut aferen somatosensorik (dengan badan sel di ganglion radiks posterior / DRG); meningen spinalis dipersarafi oleh Nervus sinuvertebralis (recurrent meningeal nerve).',
  limfatik: 'Sistem glimfatik spinalis melalui ruang perivaskular mengalirkan cairan ke spatium subarachnoideum spinalis dan keluar melalui selubung dural saraf spinalis menuju limfonodi retroperitoneales, intercostales, dan cervicales profundi.',
  korelasiKlinis: 'Cedera Medula Spinalis / Transeksi Total (syok spinal flaksid diikuti paralisis spastik UMN paraplegia/tetraplegia, anestesi total di bawah dermatom lesi, retensi/inkontinensia urin neurogenik); Sindrom Brown-Séquard (hemiseksi medula: kelemahan motorik dan hilangnya sensasi propriosepsi/vibrasi ipsilateral, disertai hilangnya sensasi nyeri dan suhu kontralateral); Sindrom Arteri Spinalis Anterior (infark 2/3 anterior medula dengan kelumpuhan motorik bilateral dan analgesia dengan fungsi propriosepsi posterior yang intak); Siringomielia (kavitas sentral kanalis spinalis menyebabkan disosiasi sensibilitas "cape-like").'
};

const caudaEquinaData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Cauda Equina',
  nameId: 'Kauda Ekuina (Ekor Kuda)',
  deskripsi: 'Kumpulan berkas berkas radiks saraf lumbosakral intradural (radiks anterior dan posterior segmen L2 hingga Co1) yang menggantung turun ke kaudal di dalam cisterna lumbalis spatium subarachnoideum di bawah ujung conus medullaris (L1-L2), mengelilingi filum terminale sebelum masing-masing keluar melalui foramen intervertebrale dan foramina sacralia yang bersesuaian.',
  arteri: 'Rami radiculares lumbales, sacrales, dan cabang terminalis conus medullaris dari Arteria spinalis anterior dan posteriores.',
  vena: 'Plexus venosus vertebralis internus (Batson) di rongga epidural kanalis vertebralis.',
  inervasi: 'Membawa serabut somatomotorik L2-S5 (otot-otot kompartemen paha, betis, kaki), serabut somatosensorik dermatom L2-S5 (termasuk dermatom perineal dan perianal "saddle area" S3-S5), serta serabut parasimpatis preganglionik sakralis (Nervi splanchnici pelvici S2-S4) pengontrol motorik detrusor vesika urinaria dan sfingter rektal.',
  limfatik: 'LCS di sekeliling cisterna lumbalis diserap melalui selubung dural akar saraf ke dalam sistem limfatik pelvis dan paraaortik lumbal.',
  korelasiKlinis: 'Sindrom Kauda Ekuina / Cauda Equina Syndrome (kompresi masif radiks saraf multipel di bawah L1-L2 akibat Hernia Nukleus Pulposus / HNP lumbal sentral masif, tumor kanalis spinalis, atau trauma: kegawatdaruratan bedah dekompresi saraf dengan tanda khas Saddle Anesthesia, retensi urin overflow atau inkontinensia urin dan alvi, hilangnya tonus sfingter ani eksterna, disfungsi ereksi, dan paraparesis flaksid tungkai bawah).'
};

const plexusBrachialisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Plexus Brachialis',
  nameId: 'Pleksus Brakialis',
  deskripsi: 'Anyaman serabut saraf somatik utama ekstremitas atas yang dibentuk oleh rami anteriores nervorum spinalium servikal 5 hingga torakal 1 (C5, C6, C7, C8, T1; terkadang mendapat kontribusi dari C4 atau T2). Terorganisasi secara anatomis menjadi: Radiks (C5-T1 di trigonum colli posterius), Trunkus (Superior C5-C6, Medius C7, Inferior C8-T1), Divisio (Anterior dan Posterior di belakang klavikula), Fasikulus (Lateralis, Medialis, Posterior di axilla mengelilingi A. axillaris), dan Cabang Terminal (N. musculocutaneus, N. axillaris, N. radialis, N. medianus, N. ulnaris).',
  arteri: 'Arteria subclavia, Arteria cervicalis transversa, Arteria suprascapularis, dan Arteria axillaris beserta cabang-cabangnya.',
  vena: 'Vena axillaris dan Vena subclavia.',
  inervasi: 'Menghantarkan seluruh persarafan somatomotorik untuk gelang bahu, lengan atas, lengan bawah, dan tangan; persarafan somatosensorik ekstremitas atas; serta serabut simpatis pascaganglionik sudomotor dan vasomotor dari ganglion stellatum cervicothoracicum.',
  limfatik: 'Drainase perineural dan epineural mengalir menuju nodi lymphatici supraclaviculares dan nodi lymphatici axillares.',
  korelasiKlinis: 'Erb-Duchenne Palsy (cedera traksi pada trunkus superior C5-C6 akibat distosia bahu saat persalinan atau jatuh dari motor pada bahu: kelumpuhan abduktor dan eksorotator bahu serta fleksor siku, bermanifestasi posisi lengan "Waiter\'s Tip Deformity" [adduksi, endorotasi, ekstensi siku, pronasi lengan bawah]); Klumpke Palsy (cedera trunkus inferior C8-T1 akibat tarikan lengan ke atas saat persalinan sungsang atau bergelantungan: kelumpuhan otot intrinsik tangan memicu "Total Claw Hand" dan Sindrom Horner jika rami simpatis T1 terlibat); Thoracic Outlet Syndrome (TOS).'
};

const plexusLumbosacralisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Plexus Lumbosacralis',
  nameId: 'Pleksus Lumbosakral',
  deskripsi: 'Anyaman persarafan somatik dinding abdomen bawah, pelvis, perineum, dan seluruh kompartemen ekstremitas bawah. Dibentuk oleh gabungan Pleksus Lumbalis (rami anteriores L1-L4 di dalam substansia M. psoas major) dan Pleksus Sakralis (Truncus lumbosacralis L4-L5 bersama rami anteriores S1-S4 di dinding posterolateral pelvis anterior terhadap M. piriformis). Mempercabangkan saraf-saraf utama: N. iliohypogastricus, N. ilioinguinalis, N. genitofemoralis, N. cutaneus femoris lateralis, N. obturatorius, N. femoralis, N. ischiadicus, N. pudendus, dan N. gluteus superior/inferior.',
  arteri: 'Arteriae lumbales, Arteria iliolumbalis, Arteria circumflexa ilium profunda, Arteria glutea superior et inferior, dan Arteria obturatoria.',
  vena: 'Plexus venosus pelvicus, Vena iliaca interna, Vena lumbalis ascendens, dan Vena iliaca communis.',
  inervasi: 'Persarafan somatomotorik otot dinding abdomen bawah, fleksor/adduktor/ekstensor panggul, paha, dan seluruh otot kruris serta pedis; somatosensorik dermatom L1-S4; parasimpatis organ pelvis via Nervi splanchnici pelvici (S2-S4).',
  limfatik: 'Drainase epineural menuju nodi lymphatici iliaci interni, externi, dan nodi aortici laterales (lumbales).',
  korelasiKlinis: 'Pleksopati Lumbosakral (gangguan motorik dan sensorik multipel ekstremitas bawah non-radikular akibat hematoma retroperitoneal pada terapi antikoagulan, invasi karsinoma kolorektal/ginekologis, pasca-radiasi pelvis, atau amyotrophy diabetik / sindrom Bruns-Garland); Meralgia paresthetica (kompresi N. cutaneus femoris lateralis di ligamentum inguinale).'
};

const plexusCervicalisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Plexus Cervicalis',
  nameId: 'Pleksus Servikalis',
  deskripsi: 'Anyaman saraf yang dibentuk oleh rami anteriores nervorum spinalium servikal 1 hingga 4 (C1-C4), terletak di leher profunda di bawah Musculus sternocleidomastoideus anterior terhadap Musculus scalenus medius dan levator scapulae. Membentuk loop anastomotik yang terbagi atas cabang kutaneus sensorik (N. occipitalis minor, N. auricularis magnus, N. transversus colli, Nn. supraclaviculares), cabang motorik muskular (Ansa cervicalis C1-C3 penginervasi otot infrahioid), dan berkas vital Nervus phrenicus (C3-C5).',
  arteri: 'Arteria vertebralis, Arteria cervicalis ascendens, dan Arteria occipitalis.',
  vena: 'Vena jugularis interna dan Vena jugularis externa.',
  inervasi: 'Somatosensorik kulit kepala posterior, leher anterior-lateral, dan dada superior; somatomotorik otot infrahioid (M. omohyoideus, sternohyoideus, sternothyroideus), otot prevertebralis, serta otot diafragma torakoabdominal via N. phrenicus.',
  limfatik: 'Mengalir ke nodi lymphatici cervicales superficiales dan profundi di sepanjang V. jugularis interna.',
  korelasiKlinis: 'Blok Saraf Pleksus Servikalis (Cervical Plexus Block untuk anestesi bedah endarterektomi karotis); Nyeri kepala servikogenik (nyeri alih dari C1-C3 ke distribusi N. trigeminus via nukleus trigeminocervicalis).'
};

// ============================================================================
// 4. SARAF PERIFER UTAMA EKSTREMITAS & TRUNKUS
// ============================================================================

const nervusIschiadicusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Ischiadicus',
  nameId: 'Saraf Iskiadikus (Saraf Skiatika / Saraf Panggul)',
  deskripsi: 'Saraf perifer tunggal terbesar dan terpanjang di tubuh manusia dengan lebar ~2 cm, dibentuk oleh divisi anterior dan posterior dari rami L4, L5, S1, S2, dan S3 pleksus sakralis. Keluar dari pelvis melalui foramen ischiadicum majus di inferior Musculus piriformis (ruang infrapiriforme), melintas di regio glutea profunda di pertengahan antara trochanter major dan tuber ischiadicum, berjalan turun di kompartemen posterior paha menyuplai kelompok otot hamstring, dan di apeks fossa poplitea berbifurkasio menjadi dua cabang terminal: Nervus tibialis dan Nervus fibularis (peroneus) communis.',
  arteri: 'Arteria comitans nervi ischiadici (cabang dari Arteria glutea inferior) dan cabang-cabang perforans Arteria profunda femoris.',
  vena: 'Vena comitans nervi ischiadici yang mengalir ke Vena glutea inferior dan Vena femoralis profunda.',
  inervasi: 'Somatomotorik: Mempersarafi otot hamstring kompartemen posterior paha (M. semitendinosus, M. semimembranosus, M. biceps femoris) dan pars ischiocondylaris M. adductor magnus; serta seluruh otot tungkai bawah dan kaki via cabang terminalisnya. Somatosensorik: Seluruh kulit posterolateral tungkai bawah dan telapak/punggung kaki (kecuali area safenus medial).',
  limfatik: 'Pembuluh epineurial mengalir ke nodi lymphatici poplitei dan nodi lymphatici inguinales profundi.',
  korelasiKlinis: 'Sciatica / Ischialgia (nyeri neuropatik menjalar tajam seperti tersengat listrik dari bokong ke paha posterior, betis, hingga jari kaki akibat kompresi radiks L4-S1 pada HNP lumbosakral atau spinal stenosis); Sindrom Piriformis (penjepitan saraf iskiadikus oleh spasme atau hipertrofi M. piriformis di fosa glutea); Cedera Iatrogenik Saraf Iskiadikus (akibat suntikan intramuskular di regio gluteal yang keliru di luar kuadran superolateral / ventrogluteal, menyebabkan "Foot Drop" flaksid dan anestesi ekstremitas bawah).'
};

const nervusFemoralisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Femoralis',
  nameId: 'Saraf Femoralis',
  deskripsi: 'Cabang terbesar pleksus lumbalis yang dibentuk oleh divisi posterior rami anteriores L2, L3, dan L4. Berjalan turun melalui substansia M. psoas major, melintas di sulcus antara M. psoas major dan M. iliacus, lalu masuk ke paha di bawah ligamentum inguinale melalui lacuna musculorum di lateral arteria femoralis di dalam trigonum femorale (di luar selubung femoralis). Mempercabangkan rami musculares untuk kompartemen anterior paha dan berakhir sebagai Nervus saphenus.',
  arteri: 'Arteria circumflexa ilium profunda dan rami musculares dari Arteria femoralis.',
  vena: 'Vena femoralis.',
  inervasi: 'Somatomotorik: Menginervasi fleksor articulatio coxae (M. iliopsoas, M. pectineus, M. sartorius) dan ekstensor utama sendi lutut articulatio genus (Musculus quadriceps femoris: rectus femoris, vastus lateralis, vastus medialis, vastus intermedius); Somatosensorik: Kulit paha anterior dan anteromedial (rami cutanei anteriores) serta kulit aspek medial tungkai bawah dan kaki hingga sendi metatarsal I via Nervus saphenus.',
  limfatik: 'Mengalir ke nodi lymphatici inguinales profundi dan nodi iliaci externi.',
  korelasiKlinis: 'Hilangnya Refleks Sentakan Lutut / Patella (Knee Jerk Reflex L3-L4); Kelemahan ekstensi lutut (kesulitan menaiki tangga, berdiri dari kursi, dan instabilitas lutut sering "buckling"); Neuropati femoralis akibat hematoma retroperitoneal pada pasien terapi antikoagulan atau kompresi iatrogenik selama kateterisasi endovaskular arteri femoralis.'
};

const nervusRadialisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Radialis',
  nameId: 'Saraf Radialis',
  deskripsi: 'Cabang terbesar dari fasciculus posterior plexus brachialis (memuat serabut dari radiks C5, C6, C7, C8, T1). Berjalan melingkari corpus humeri di dalam sulcus nervi radialis (sulcus spiralis) bersama Arteria profunda brachii di antara caput mediale dan laterale M. triceps brachii. Menembus septum intermusculare laterale menuju kompartemen anterior fossa cubiti, lalu di sendi siku membelah menjadi Ramus superficialis (kutaneus sensorik murni) dan Ramus profundus / Nervus interosseus posterior (motorik kompartemen posterior antebrachii).',
  arteri: 'Arteria profunda brachii (A. collateralis radialis) dan Arteria recurrens radialis.',
  vena: 'Vena commitantes brachiales dan Vena cephalica.',
  inervasi: 'Somatomotorik: Ekstensor articulatio cubiti (M. triceps brachii, M. anconeus), fleksor & supinator lengan bawah (M. brachioradialis, M. supinator), dan seluruh otot ekstensor carpus dan jari-jari di kompartemen posterior lengan bawah (M. extensor carpi radialis longus/brevis, extensor digitorum, extensor digiti minimi, extensor carpi ulnaris, abductor pollicis longus, extensor pollicis longus/brevis, extensor indicis); Somatosensorik: Kulit posterior brachium, posterior antebrachium, dan dorsum manus 2/3 lateral (punggung tangan basis ibu jari, telunjuk, tengah, dan separuh lateral jari manis).',
  limfatik: 'Mengalir ke nodi lymphatici cubitales dan nodi lymphatici axillares centrales.',
  korelasiKlinis: 'Wrist Drop / Drop Hand (ketidakmampuan dorsofleksi pergelangan tangan dan ekstensi jari pada sendi metacarpophalangeal akibat fraktur midshaft os humerus yang merusak sulcus radialis, atau kompresi berkepanjangan "Saturday Night Palsy" saat tertidur dengan lengan tertindih di sandaran kursi); Refleks trisep menurun/negatif (C7).'
};

const nervusMedianusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Medianus',
  nameId: 'Saraf Medianus',
  deskripsi: 'Dibentuk di axilla oleh fusi radix lateralis (dari fasciculus lateralis, C5-C7) dan radix medialis (dari fasciculus medialis, C8-T1) plexus brachialis. Berjalan turun di medial brachium mendampingi Arteria brachialis, melintasi fossa cubiti medial dari tendo bisep, menembus di antara dua caput Musculus pronator teres, berjalan di antara M. flexor digitorum superficialis dan profundus, lalu masuk ke telapak tangan melalui Canalis Carpi (Carpal Tunnel) di bawah ligamentum carpi transversum (retinaculum flexorum).',
  arteri: 'Arteria brachialis, Arteria interossea anterior, dan Arteria comitans nervi mediani (cabang A. interossea anterior).',
  vena: 'Vena commitantes brachiales dan Vena mediana antebrachii.',
  inervasi: 'Somatomotorik: Seluruh otot fleksor dan pronator kompartemen anterior antebrachium (kecuali M. flexor carpi ulnaris dan 1/2 medial M. flexor digitorum profundus), serta otot eminensia tenar tangan (mnemonik "LOAF": Lumbricals 1 & 2, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis pars superficialis); Somatosensorik: Permukaan palmar 3,5 jari lateral (ibu jari, telunjuk, tengah, separuh lateral jari manis) dan aspek dorsal distal/kuku dari jari-jari tersebut.',
  limfatik: 'Mengalir mengikuti vena brachialis ke nodi lymphatici axillares laterales.',
  korelasiKlinis: 'Carpal Tunnel Syndrome / CTS (neuropati jebakan kompresi di canalis carpi: nyeri nokturnal, parestesia kesemutan pada 3,5 jari palmar, tanda Phalen dan Tinel positif, atrofi otot thenar); Ape Hand Deformity (hilangnya kemampuan gerakan oposisi ibu jari sehingga ibu jari berada sejajar bidang telapak tangan); Hand of Benediction (saat pasien diminta mengepalkan tangan, jari ke-1, 2, dan 3 gagal fleksi akibat lesi proksimal n. medianus di siku).'
};

const nervusUlnarisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Ulnaris',
  nameId: 'Saraf Ulnaris',
  deskripsi: 'Cabang terminal utama fasciculus medialis plexus brachialis (memuat serabut dari radiks C8 dan T1). Berjalan turun di sisi medial lengan atas, menembus septum intermusculare mediale, melintas di posterior epicondylus medialis humeri (di dalam sulcus nervi ulnaris / "funny bone"), menembus di antara kedua caput Musculus flexor carpi ulnaris, berjalan mendampingi Arteria ulnaris di antebrachium medialis, lalu memasuki telapak tangan di atas retinaculum flexorum melalui Canalis Ulnaris (Guyon\'s Canal) di antara os pisiforme dan hamulus ossis hamati.',
  arteri: 'Arteria collateralis ulnaris superior et inferior dan Arteria ulnaris.',
  vena: 'Vena commitantes ulnaris dan Vena basilica.',
  inervasi: 'Somatomotorik: M. flexor carpi ulnaris dan 1/2 medial M. flexor digitorum profundus (jari IV & V); di manus mempersarafi seluruh otot hipotenar (abductor, flexor, opponens digiti minimi), seluruh Mm. interossei dorsales (abduksi jari / DAB) dan palmares (adduksi jari / PAD), Mm. lumbricales 3 & 4, dan Musculus adductor pollicis; Somatosensorik: Permukaan palmar dan dorsal 1,5 jari medial (jari kelingking dan separuh medial jari manis) serta aspek medial telapak tangan.',
  limfatik: 'Mengalir ke nodi lymphatici cubitales (supratrochleares) dan nodi axillares mediales.',
  korelasiKlinis: 'Claw Hand / Main en Griffe (deformitas tangan cakar pada jari ke-4 dan ke-5 dengan hiperekstensi sendi metakarpofalangeal dan fleksi sendi interfalangeal akibat hilangnya fungsi lumbrikal 3 & 4 dan interosei); Ulnar Paradox (clawing lebih nyata pada lesi distal pergelangan tangan dibanding lesi proksimal di siku karena M. flexor digitorum profundus masih intak); Cubital Tunnel Syndrome (kompresi di sulcus retroepikondilar siku); Tanda Froment Positif (saat memegang kertas di antara ibu jari dan telunjuk, pasien melakukan fleksi sendi IP ibu jari menggunakan N. medianus M. flexor pollicis longus untuk mengompensasi paralisis M. adductor pollicis).'
};

const nervusPhrenicusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Phrenicus',
  nameId: 'Saraf Frenikus',
  deskripsi: 'Saraf somatik motorik-sensorik vital yang berasal dari pleksus servikalis, dibentuk terutama oleh rami anteriores C4 dengan kontribusi dari C3 dan C5 (mnemonik: "C3, 4, 5 keep the diaphragm alive"). Berjalan turun miring di atas permukaan anterior Musculus scalenus anterior di leher profunda, masuk ke mediastinum toraks melintasi apertura thoracis superior, menyusuri lateral perikardium fibrosum dan pleura mediastinalis (didampingi pembuluh pericardiacophrenica), untuk menembus dan mempersarafi diafragma thorakoabdominal.',
  arteri: 'Arteria pericardiacophrenica (cabang dari Arteria thoracica interna) yang berjalan berdampingan erat di rongga toraks.',
  vena: 'Vena pericardiacophrenica yang bermuara ke Vena brachiocephalica sinistra atau Vena thoracica interna.',
  inervasi: 'Somatomotorik: Merupakan satu-satunya persarafan motorik untuk seluruh Musculus Diaphragma; Somatosensorik: Menghantarkan sensasi proprioseptif dan nosiseptif dari centrum tendineum diafragma, pleura diafragmatika sentral, pleura mediastinalis, dan perikardium fibrosum serta serosum parietale.',
  limfatik: 'Mengalir ke nodi lymphatici phrenici superiores dan nodi mediastinales anteriores.',
  korelasiKlinis: 'Paralisis Hemidiafragma (akibat transeksi iatrogenik selama diseksi operasi toraks/tiroid/jantung atau invasi karsinoma paru bronkogenik: kubah diafragma ipsilateral mengalami elevasi abnormal dan gerakan paradoksal ke arah kranial saat inspirasi pada pemeriksaan fluoroskopi sniff test); Singultus (cegukan spasmodik akibat iritasi nervus phrenicus); Nyeri Alih Diafragma / Tanda Kehr (nyeri alih menjalar ke puncak bahu ipsilateral pada dermatom supraclavicularis C3-C5 saat terjadi iritasi perikarditis, abses subfrenik, atau ruptur limpa).'
};

const nervusTibialisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Tibialis',
  nameId: 'Saraf Tibialis',
  deskripsi: 'Cabang terminal medial dari Nervus ischiadicus (radiks L4, L5, S1, S2, S3). Berjalan turun di garis tengah fossa poplitea di posterior pembuluh poplitea, melintas di bawah arcus tendineus M. solei ke kompartemen posterior betis, berjalan di antara M. gastrocnemius/soleus dan fleksor profunda bersama Arteria tibialis posterior, melintasi posterior malleolus medialis di dalam Canalis Tarsi (Tarsal Tunnel), lalu membelah menjadi Nervus plantaris medialis dan lateralis di telapak kaki.',
  arteri: 'Arteria poplitea dan Arteria tibialis posterior.',
  vena: 'Vena commitantes tibiales posteriores dan Vena poplitea.',
  inervasi: 'Somatomotorik: Menginervasi seluruh otot kompartemen posterior kruris (M. gastrocnemius, soleus, plantaris, popliteus, tibialis posterior, flexor digitorum longus, flexor hallucis longus) dan seluruh otot intrinsik telapak kaki; Somatosensorik: Kulit posterolateral betis (via N. suralis), tumit medial (rami calcanei), dan seluruh kulit permukaan plantar telapak kaki.',
  limfatik: 'Mengalir ke nodi lymphatici poplitei dan inguinales profundi.',
  korelasiKlinis: 'Hilangnya Refleks Tendon Achilles (S1-S2); Ketidakmampuan melakukan plantar fleksi kaki dan jari-jari kaki (pasien tidak dapat berjinjit); Tarsal Tunnel Syndrome (kompresi nervus tibialis di posterior malleolus medialis menimbulkan parestesia panas/terbakar pada telapak kaki).'
};

const nervusFibularisCommunisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Fibularis Communis (N. Peroneus Communis)',
  nameId: 'Saraf Peroneal / Fibularis Komunis',
  deskripsi: 'Cabang terminal lateral dari Nervus ischiadicus (radiks L4, L5, S1, S2). Menyusuri batas medial tendo M. biceps femoris di fossa poplitea lateral, melengkung secara superfisial mengelilingi collum fibulae (di mana posisinya sangat rentan terhadap trauma langsung), lalu menembus M. fibularis longus dan bercabang dua menjadi Nervus fibularis superficialis (motorik kompartemen lateral eversi dan sensorik dorsum pedis) dan Nervus fibularis profundus (motorik kompartemen anterior dorsofleksi dan sensorik sela jari I-II).',
  arteri: 'Arteria recurrens tibialis anterior dan cabang-cabang perforans Arteria fibularis.',
  vena: 'Vena commitantes fibulares dan Vena saphena parva.',
  inervasi: 'Somatomotorik: Otot eversor kaki (M. fibularis longus dan brevis) via n. fibularis superficialis; otot dorsofleksor kaki dan ekstensor jari kaki (M. tibialis anterior, extensor digitorum longus, extensor hallucis longus, fibularis tertius, extensor digitorum brevis) via n. fibularis profundus; Somatosensorik: Kulit anterolateral tungkai bawah, hampir seluruh dorsum pedis, serta sela kulit web space antara jari kaki I dan II.',
  limfatik: 'Mengalir ke nodi lymphatici poplitei dan nodi inguinales profundi.',
  korelasiKlinis: 'Foot Drop / Drop Foot (saraf paling sering mengalami cedera pada ekstremitas bawah akibat fraktur collum fibulae, penekanan gips tungkai bawah yang terlalu ketat, atau kompresi saat berbaring/operasi lama: kelumpuhan total dorsofleksi dan eversi kaki memicu gaya berjalan "Steppage Gait" di mana lutut diangkat tinggi saat melangkah agar jari kaki tidak terseret di tanah).'
};

// ============================================================================
// 5. SARAF KRANIAL (NERVI CRANIALES I - XII)
// ============================================================================

const nervusOlfactoriusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Olfactorius [CN I]',
  nameId: 'Saraf Olfaktorius (Saraf Kranial I)',
  deskripsi: 'Saraf sensorik khusus murni (Special Visceral Afferent / SVA) untuk modalitas penghidu/penciuman. Terdiri dari berkas-berkas halus tak bermielin (fila olfactoria, ~20 berkas) yang berasal dari neuron reseptor bipolar di mukosa olfaktori kubah rongga hidung. Fila melintasi foramina pada Lamina Cribrosa ossis ethmoidalis untuk bersinaps di Bulbus Olfactorius di fossa cranii anterior, lalu impuls dihantarkan melalui Tractus Olfactorius langsung ke korteks olfaktori primer (korteks piriformis, unkus lobus temporalis, dan amigdala) tanpa melewati relai talamus.',
  arteri: 'Arteria ethmoidalis anterior (cabang Arteria ophthalmica) dan cabang rostral Arteria cerebri anterior (ACA).',
  vena: 'Venae ethmoidales yang bermuara ke Vena ophthalmica superior dan Sinus sagittalis superior.',
  inervasi: 'Serabut sensorik khusus SVA (penghidu); mukosa hidung di sekitarnya menerima persarafan sensorik umum (GSA) raba/nyeri dari cabang N. trigeminus (CN V1 dan V2).',
  limfatik: 'Selubung perineural fila olfactoria yang menembus lamina cribrosa merupakan jalur pembuangan drainase cairan serebrospinal (LCS) dan makromolekul interstisial utama dari ruang subaraknoid ke jaringan limfatik mukosa hidung menuju nodi lymphatici cervicales profundi.',
  korelasiKlinis: 'Anosmia (kehilangan kemampuan menghidu akibat fraktur basis cranii anterior merobek lamina cribrosa, infeksi virus neurotropik SARS-CoV-2, atau penekanan meningioma sulcus olfactorius); Foster Kennedy Syndrome (meningioma fosa anterior menekan traktus olfaktorius dan n. opticus menghasilkan anosmia ipsilateral, atrofi papil optik ipsilateral, dan papiledema kontralateral); Halusinasi olfaktori / uncinate fits pada epilepsi lobus temporal medial.'
};

const nervusOpticusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Opticus [CN II]',
  nameId: 'Saraf Optik (Saraf Kranial II)',
  deskripsi: 'Saraf sensorik khusus murni (Special Somatic Afferent / SSA) untuk modalitas penglihatan visual. Secara embriologis dan struktural merupakan traktus penonjolan langsung dari diensefalon sistem saraf pusat (dilapisi ketiga lapisan meningen dan dimielinisasi oleh oligodendrosit, bukan sel Schwann). Berawal dari akson sel ganglionik retina, keluar dari cavitas orbitalis melalui canalis opticus bersama Arteria ophthalmica, mengalami dekussasio parsial serabut hemiretina nasal di Chiasma Opticum, lalu berlanjut sebagai Tractus Opticus menuju Corpus Geniculatum Laterale (CGL) talamus dan kolikulus superior.',
  arteri: 'Arteria centralis retinae (cabang end-artery dari Arteria ophthalmica yang menembus substansi saraf optik 1 cm retrobulbar); selubung dural dipersarafi cabang pial dan Arteriae ciliares posteriores breves.',
  vena: 'Vena centralis retinae yang berjalan di dalam berkas saraf optik dan bermuara ke Vena ophthalmica superior atau langsung ke Sinus cavernosus.',
  inervasi: 'Serabut sensorik khusus SSA visual; membentuk lengan aferen dari Refleks Cahaya Pupil (Pupillary Light Reflex) dan refleks akomodasi visual konsensual.',
  limfatik: 'Dikelilingi oleh perpanjangan spatium subarachnoideum yang terisi cairan serebrospinal berkesinambungan dengan intrakranial; drainase interstisial ke limfatik orbital retrobulbar.',
  korelasiKlinis: 'Papiledema (edema diskus optikus bilateral tanpa gangguan visus awal akibat penjalaran peningkatan tekanan intrakranial ke selubung subaraknoid saraf optik); Neuritis Optik (inflamasi demielinasi akut pada Multiple Sclerosis: nyeri pergerakan bola mata, defek lapang pandang skotoma sentral, dan penurunan saturasi warna merah / Marcus Gunn Pupil); Lesi Kiasma Optikum (Hemianopsia Bitemporal akibat kompresi adenoma hipofisis); Amaurosis Fugax (kebutaan monokuler transien akibat mikroemboli carotis ke A. centralis retinae).'
};

const nervusOculomotoriusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Oculomotorius [CN III]',
  nameId: 'Saraf Okulomotor (Saraf Kranial III)',
  deskripsi: 'Saraf motorik bola mata utama yang berpangkal dari tegmentum mesencephalon di fossa interpeduncularis. Melintas di antara Arteria cerebellaris superior (SCA) dan Arteria cerebri posterior (PCA), menembus dinding lateral Sinus cavernosus, dan memasuki cavitas orbitalis melalui fissura orbitalis superior di dalam anulus tendineus communis. Membawa dua komponen fungsional: Somatomotorik (GSE) untuk mempersarafi empat otot ekstraokular (M. rectus superior, M. rectus inferior, M. rectus medialis, M. obliquus inferior) serta M. levator palpebrae superioris; dan Visero-motorik parasimpatis preganglionik (GVE) dari nukleus Edinger-Westphal menuju Ganglion Ciliare untuk konstriksi pupil (M. sphincter pupillae) dan akomodasi lensa (M. ciliaris).',
  arteri: 'Cabang-cabang perforans dari bifurkasio Arteria basilaris, Arteria cerebri posterior (PCA), Arteria communicans posterior (PComA), dan ramus tentorial A. carotis interna.',
  vena: 'Venae orbitales dan sinus duralis yang bermuara ke Sinus cavernosus.',
  inervasi: 'Serabut somatomotorik somatik (GSE) dan serabut parasimpatis preganglionik otonom (GVE); propriosepsi via interkoneksi N. ophthalmicus (CN V1).',
  limfatik: 'Drainase perivaskular menuju cisterna interpeduncularis dan limfatik orbital.',
  korelasiKlinis: 'Palsi Nervus Okulomotorius Lengkap (mata terfiksasi dalam posisi "Down and Out" akibat tonus M. rectus lateralis [CN VI] dan M. obliquus superior [CN IV] yang tak terimbangi, ptosis komplit akibat parese M. levator palpebrae, serta midriasis terfiksasi tanpa refleks cahaya pupil); Aneurisma Arteria Communicans Posterior (PComA aneurysm: serabut parasimpatis pupil yang terletak di perifer superfisial berkas saraf tertekan lebih dulu memicu midriasis akut "pupil-involving third nerve palsy" yang merupakan tanda bahaya ruptur aneurisma); Mikrovaskulopati diabetik (sering kali "pupil-sparing" karena infark iskemik terjadi di inti sentral saraf).'
};

const nervusTrochlearisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Trochlearis [CN IV]',
  nameId: 'Saraf Troklearis (Saraf Kranial IV)',
  deskripsi: 'Saraf somatomotorik somatik murni (General Somatic Efferent / GSE) untuk Musculus obliquus superior bola mata. Memiliki tiga keunikan anatomis: merupakan satu-satunya saraf kranial yang keluar dari permukaan dorsal batang otak (mesencephalon posterior tepat di bawah colliculus inferior), seluruh serabutnya mengalami persilangan komplit (dekussasio) di velum medullare superius sebelum keluar, serta memiliki lintasan intrakranial terpanjang dengan kaliber diameter saraf paling ramping. Melintasi dinding lateral Sinus cavernosus dan masuk ke orbita melalui fissura orbitalis superior di luar anulus tendineus.',
  arteri: 'Arteria cerebellaris superior (SCA) dan cabang-cabang meningeal Arteria cerebri posterior (PCA).',
  vena: 'Bermuara ke Sinus petrosus superior dan Sinus cavernosus.',
  inervasi: 'Somatomotorik GSE murni untuk Musculus obliquus superior (menghasilkan gerakan intorsi, depresi saat adduksi, dan abduksi bola mata).',
  limfatik: 'Mengalir ke cisterna ambiens dan cisterna basalis.',
  korelasiKlinis: 'Lesi Nervus Troklearis (diplopia vertikal dan torsional yang paling terasa mengganggu saat melirik ke bawah dan ke dalam, seperti saat membaca buku atau menuruni anak tangga; pasien mengompensasi secara karakteristik dengan memiringkan kepala / head tilt ke arah bahu kontralateral sisi yang lesi untuk menyejajarkan aksis visual bola mata); Sangat rentan terhadap cedera trauma kapitis tumpul akibat lintasannya yang panjang dan tipis.'
};

const nervusTrigeminusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Trigeminus [CN V]',
  nameId: 'Saraf Trigeminus (Saraf Kranial V)',
  deskripsi: 'Saraf kranial terbesar, keluar dari permukaan ventrolateral pons dengan dua radix: radix sensoria (mayor) dan radix motoria (minor). Radiks sensorik meluas ke cavum trigeminale (Meckel\'s cave) di fossa cranii media membentuk Ganglion Trigeminale (Gasserian / Semilunare) yang memecah menjadi tiga divisi besar: N. ophthalmicus (V1, sensorik orbita, dahi, hidung melalui fissura orbitalis superior), N. maxillaris (V2, sensorik pipi, maksila, bibir atas, kavum nasi melalui foramen rotundum), dan N. mandibularis (V3, sensorik mandibula, lidah anterior, serta serabut motorik otot mastikasi melalui foramen ovale).',
  arteri: 'Cabang-cabang pontin dari Arteria basilaris, Arteria cerebellaris superior (SCA), Arteria cerebellaris anterior inferior (AICA), dan rami ganglionares Arteria carotis interna.',
  vena: 'Vena petrosa (Dandy) yang bermuara ke Sinus petrosus superior dan Sinus cavernosus.',
  inervasi: 'Somatosensorik umum (General Somatic Afferent / GSA): Menghantarkan seluruh sensasi raba, suhu, propriosepsi, dan nyeri wajah, konjungtiva, mukosa mulut/hidung, gigi, serta dura mater supratentorial. Brankial motorik (Special Visceral Efferent / SVE via V3): Otot mastikasi pengunyah (M. masseter, temporalis, pterygoideus medialis & lateralis), M. mylohyoideus, venter anterior M. digastricus, M. tensor veli palatini, dan M. tensor tympani.',
  limfatik: 'Drainase perivaskular ganglion Meckeli ke cisterna prepontina dan cisterna pontocerebellaris.',
  korelasiKlinis: 'Neuralgia Trigeminal / Tic Douloureux (nyeri paroksismal menusuk tajam hebat seperti tersengat listrik berulang pada distribusi sensorik V2 atau V3, dipicu oleh stimulus taktil sepele seperti menyentuh pipi, mengunyah, menyikat gigi, atau hembusan angin; paling sering disebabkan oleh kompresi neurovaskular loop Arteria cerebellaris superior pada root entry zone di pons); Herpes Zoster Ophthalmicus (reaktivasi VZV pada ganglion Gasser mengenai divisi V1, berisiko kebutaan akibat ulkus kornea); Hilangnya Refleks Kornea (lengan aferen V1 terputus).'
};

const nervusAbducensData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Abducens [CN VI]',
  nameId: 'Saraf Abdusen (Saraf Kranial VI)',
  deskripsi: 'Saraf somatomotorik somatik murni (General Somatic Efferent / GSE) untuk Musculus rectus lateralis bola mata. Keluar dari batang otak di sulcus pontomedullaris dekat garis tengah ventral, menanjak melintasi clivus di dalam spatium subarachnoideum, melengkung tajam di atas tepi tajam apeks petrosus os temporale di dalam Canalis Dorello di bawah ligamentum petrosphenoidale (Gruber), masuk menembus lumen Sinus cavernosus (berjalan bebas di dalam sinus di samping Arteria carotis interna, bukan di dinding lateral), dan memasuki orbita melalui fissura orbitalis superior di dalam anulus tendineus.',
  arteri: 'Rami pontini dari Arteria basilaris dan Arteria meningohypophysealis (cabang A. carotis interna pars cavernosa).',
  vena: 'Bermuara langsung ke Sinus cavernosus dan Sinus petrosus inferior.',
  inervasi: 'Somatomotorik GSE murni untuk Musculus rectus lateralis bola mata, menggerakkan bola mata ke arah abduksi (melirik ke lateral).',
  limfatik: 'Mengalir ke cisterna prepontina dan limfatik orbital retrobulbar.',
  korelasiKlinis: 'Diplopia Horizontal (penglihatan ganda horizontal yang paling memberat saat pasien melihat ke arah sisi yang lumpuh akibat kegagalan abduksi bola mata / strabismus konvergen esotropia); Merupakan "False Localizing Sign" paling klasik dalam neurologi klinis (akibat perjalanannya yang sangat panjang menanjak di clivus dan melengkung di apeks petrosus, N. VI sangat mudah teregang dan mengalami kompresi pada peningkatan tekanan intrakranial umum oleh massa intrakranial di mana pun lokasinya); Sindrom Gradenigo (otitis media supuratif dengan osteomielitis petrosus melibatkan CN V dan VI).'
};

const nervusFacialisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Facialis [CN VII]',
  nameId: 'Saraf Fasialis (Saraf Kranial VII)',
  deskripsi: 'Saraf kranial campuran yang keluar dari angulus pontocerebellaris dengan dua divisi: akar motorik utama (radix motoria) dan Nervus Intermedius (Wrisberg) yang membawa serabut sensorik dan parasimpatis. Masuk ke meatus acusticus internus bersama CN VIII, melintasi Canalis Facialis os temporale, membentuk Ganglion Geniculatum, mempercabangkan N. petrosus major, N. stapedius, dan Chorda Tympani, keluar dari tengkorak melalui foramen stylomastoideum, menembus glandula parotidea, dan memecah menjadi 5 cabang terminal motorik (rami temporales, zygomatici, buccales, marginalis mandibulae, colli).',
  arteri: 'Arteria cerebellaris anterior inferior (AICA), Arteria labyrinthi, Arteria stylomastoidea (cabang A. auricularis posterior), dan ramus petrosus dari Arteria meningea media.',
  vena: 'Bermuara ke Sinus petrosus superior, Sinus sigmoideus, dan Vena retromandibularis.',
  inervasi: 'Brankial motorik (SVE): Seluruh otot ekspresi wajah mimik, M. platysma, M. stapedius (meredam suara keras), M. stylohyoideus, dan venter posterior M. digastricus. Visero-motorik parasimpatis (GVE): Glandula lacrimalis dan mukosa nasal via N. petrosus major ke ganglion pterygopalatinum; glandula submandibularis dan sublingualis via Chorda tympani ke ganglion submandibulare. Sensorik khusus gustatorik (SVA): Pengecapan 2/3 anterior lidah via Chorda tympani. Somatosensorik umum (GSA): Kulit concha auriculae telinga luar.',
  limfatik: 'Mengalir ke nodi lymphatici parotidei, retroauriculares, dan nodi cervicales profundi.',
  korelasiKlinis: 'Bell\'s Palsy (kelumpuhan saraf fasialis perifer akut LMN idiopatik: paralisis seluruh hemifasial ipsilateral meliputi ketidakmampuan mengerutkan dahi, lagoftalmus [kelopak mata tidak menutup sempurna], sudut mulut terkulai, air liur menetes, hilangnya sensasi kecap 2/3 anterior lidah, dan hiperakusis akibat parese M. stapedius); Parese Fasialis Sentral UMN vs Perifer LMN (lesi stroke korteks motorik hemisfer hanya melumpuhkan wajah bawah kontralateral dengan dahi yang tetap intak karena dahi menerima inervasi bilateral UMN; sedangkan lesi LMN melumpuhkan seluruh wajah sesisi termasuk dahi); Sindrom Ramsay Hunt (reaktivasi Herpes Zoster pada ganglion genikulatum dengan vesikel herpetik di liang telinga).'
};

const nervusVestibulocochlearisData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Vestibulocochlearis [CN VIII]',
  nameId: 'Saraf Vestibulokoklearis (Saraf Kranial VIII / Saraf Pendengaran & Keseimbangan)',
  deskripsi: 'Saraf sensorik khusus murni (Special Somatic Afferent / SSA) yang terdiri atas dua divisi terpisah secara fungsional: Nervus Cochlearis (membawa impuls sensorik pendengaran dari sel-sel rambut Organon Corti di cochlea dengan badan sel di Ganglion Spirale) dan Nervus Vestibularis (membawa impuls keseimbangan, gravitasi linear, dan akselerasi angular dari crista ampullaris kanalis semisirkularis serta makula utrikulus dan sakulus dengan badan sel di Ganglion Vestibulare Scarpa). Berjalan berdampingan dengan CN VII memasuki meatus acusticus internus dan masuk ke batang otak pada batas lateral sulcus pontomedullaris di angulus pontocerebellaris.',
  arteri: 'Arteria labyrinthi (Arteria auditiva interna, yang umumnya merupakan cabang dari Arteria cerebellaris anterior inferior [AICA] atau langsung dari Arteria basilaris).',
  vena: 'Venae labyrinthi yang bermuara ke Sinus petrosus inferior atau Sinus transversus.',
  inervasi: 'Sensorik khusus SSA murni (auditorik dan vestibularis); mengintegrasikan refleks vestibulo-okular (Vestibulo-Ocular Reflex / VOR untuk stabilisasi fiksasi visual saat pergerakan kepala) dan refleks vestibulospinalis untuk menjaga postur tegak tubuh.',
  limfatik: 'LCS mengalir melalui ruang subaraknoid meatus acusticus internus menuju cisterna pontocerebellaris.',
  korelasiKlinis: 'Schwannoma Vestibularis / Neuroma Akustik (tumor jinak sel Schwann saraf vestibularis di cerebellopontine angle: tuli sensorineural progresif unilateral, tinnitus mendenging, dan ketidakseimbangan gaya berjalan; bila membesar dapat menekan CN V dan VII); Penyakit Meniere (hidrops endolimfatik: trias klasik vertigo berputar episodik, tinnitus fluktuatif, dan tuli nada rendah); Benign Paroxysmal Positional Vertigo / BPPV (dislodgement otokoniat kalsium karbonat ke dalam kanalis semisirkularis posterior memicu vertigo posisional akut).'
};

const nervusGlossopharyngeusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Glossopharyngeus [CN IX]',
  nameId: 'Saraf Glosofaringeus (Saraf Kranial IX)',
  deskripsi: 'Saraf kranial campuran yang keluar dari sulcus retroolivaris (postolivaris) medulla oblongata sebagai deretan 3-4 serabut radikular paling kranial di atas N. vagus. Keluar dari cavitas cranii melalui foramen jugulare (pars nervosa) bersama CN X dan XI. Menginervasi struktur faring, tonsil, sepertiga posterior lidah, glandula parotidea, serta membawa input refleks kardiovaskular homeostatik vital dari sinus caroticus dan glomus caroticum.',
  arteri: 'Arteria pharyngea ascendens (cabang A. carotis externa), Arteria meningea posterior, dan cabang medular dari Arteria vertebralis / PICA.',
  vena: 'Bermuara ke Sinus petrosus inferior dan Vena jugularis interna di dalam foramen jugulare.',
  inervasi: 'Brankial motorik (SVE): Musculus stylopharyngeus (elevasi faring dan laring saat menelan). Visero-motorik parasimpatis (GVE): Glandula parotidea via Nervus tympanicus (Jacobson), plexus tympanicus di kavum timpani, N. petrosus minor ke Ganglion Oticum, lalu via N. auriculotemporalis. Sensorik khusus gustatorik (SVA): Pengecapan 1/3 posterior lidah (termasuk papila sirkumvalata). Somatosensorik umum (GSA): Sensasi taktil dan nyeri 1/3 posterior lidah, tonsilla palatina, palatum molle, tuba auditiva Eustachii, dan kavum timpani. Visero-sensorik umum (GVA): Baroreseptor sinus caroticus (monitoring tekanan darah via ramus sinus carotici) dan kemoreseptor glomus/badan karotikus (monitoring PaO2, PaCO2, dan pH darah).',
  limfatik: 'Mengalir ke nodi lymphatici cervicales profundi (termasuk nodus jugulodigastricus).',
  korelasiKlinis: 'Hilangnya Refleks Muntah / Gag Reflex Lengan Aferen (stimulasi sentuhan pada dinding posterior faring gagal mencetuskan kontraksi faring akibat terputusnya input sensorik CN IX); Glossopharyngeal Neuralgia (nyeri paroksismal menusuk hebat di basis lidah, fosa tonsilar, faring, dan menjalar ke telinga yang dipicu saat menelan, berbicara, atau menguap, kadang memicu bradikardia dan sinkop); Sindrom Foramen Jugulare / Vernet\'s Syndrome (paralisis gabungan CN IX, X, XI).'
};

const nervusVagusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Vagus [CN X]',
  nameId: 'Saraf Vagus (Saraf Kranial X / Saraf Pengembara)',
  deskripsi: 'Saraf kranial terpanjang dengan distribusi wilayah persarafan viseral terluas di tubuh manusia. Keluar dari sulcus retroolivaris medulla oblongata di antara CN IX dan XI, melintasi foramen jugulare (membentuk Ganglion Superius dan Inferius), berjalan turun secara vertikal di leher profunda di dalam Vagina Carotica (selubung karotis) di antara A. carotis interna/communis dan V. jugularis interna, melintasi apertura thoracis superior memasuki mediastinum, membentuk plexus cardiacus, pulmonalis, dan oesophageus, lalu menembus hiatus oesophageus diafragma sebagai Truncus Vagalis Anterior dan Posterior untuk mempersarafi visera abdomen hingga 2/3 proksimal colon transversum (batas Cannon-Böhm).',
  arteri: 'Arteria meningea posterior, Arteria pharyngea ascendens, rami laryngei dari Arteria thyroidea superior et inferior, dan rami pericardiaci/oesophageales dari Aorta thoracica.',
  vena: 'Vena jugularis interna di regio leher, serta sistem vena azygos dan vena cava superior/inferior di rongga torakoabdominal.',
  inervasi: 'Brankial motorik (SVE): Seluruh otot konstriktor faring, seluruh otot palatum molle (kecuali M. tensor veli palatini), dan seluruh otot intrinsik laring via Nervus laryngeus recurrens dan laryngeus superior (kecuali M. cricothyroideus oleh ramus externus N. laryngei superioris). Visero-motorik parasimpatis (GVE): Membawa ~75% dari seluruh output parasimpatis tubuh untuk nodus SA & AV jantung (menurunkan denyut jantung dan kontraktilitas atrium), otot polos dan kelenjar bronkus (bronkokonstriksi dan sekresi mukus), serta stimulasi motilitas peristaltik dan sekresi asam lambung/kelenjar pencernaan lambung hingga fleksura koli sinistra. Visero-sensorik (GVA): Baroreseptor arcus aortae dan kemoreseptor aortic bodies. Sensorik khusus (SVA): Pengecapan pada epiglotis dan basis lidah ekstrem. Somatosensorik (GSA): Kulit liang telinga luar (ramus auricularis Arnold) dan dura fosa posterior.',
  limfatik: 'Drainase epineural menuju nodi lymphatici cervicales profundi, nodi mediastinales, dan nodi coeliaci.',
  korelasiKlinis: 'Paralisis Nervus Laryngeus Recurrens (cedera iatrogenik saat operasi tiroidektomi atau kompresi tumor apeks paru Pancoast/aneurisma arkus aorta: paralisis pita suara bermanifestasi suara serak disfonia unilateral atau stridor asfiksia bilateral); Deviasi Uvula (pada lesi motorik CN X unilateral, uvula tertarik membelok ke sisi yang sehat / berlawanan sisi lesi); Sinkop Vasovagal (aktivasi parasimpatis vagal berlebih memicu bradikardia berat, vasodilatasi sistemik, dan hipotensi akut); Gastroparesis diabetik (penurunan motilitas lambung akibat neuropati otonom vagal).'
};

const nervusAccessoriusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Accessorius [CN XI]',
  nameId: 'Saraf Aksesorius (Saraf Kranial XI)',
  deskripsi: 'Saraf somatomotorik brankial murni (Special Visceral Efferent / SVE) yang memiliki lintasan anatomis unik: dibentuk oleh radiks spinalis yang berpangkal dari kornu anterior medula spinalis servikalis atas (segmen C1 hingga C5/C6). Berkas radiks spinalis bersatu menanjak melalui foramen magnum masuk ke fossa cranii posterior, bergabung sesaat dengan serabut kranial dari nukleus ambiguus, lalu bersama-sama keluar meninggalkan kranium melalui foramen jugulare. Di leher, saraf melintas miring di bawah M. digastricus menembus Musculus sternocleidomastoideus (SCM), menyeberangi trigonum colli posterius secara superfisial, dan berakhir di bawah permukaan anterior Musculus trapezius.',
  arteri: 'Arteria occipitalis, Arteria cervicalis ascendens, dan Arteria transversa colli.',
  vena: 'Bermuara ke Vena jugularis interna dan plexus venosus vertebralis internus/externus.',
  inervasi: 'Somatomotorik SVE murni untuk dua otot leher-bahu utama: Musculus sternocleidomastoideus (kontraksi unilateral merotasikan kepala ke sisi kontralateral dan laterofleksi leher ipsilateral; kontraksi bilateral memfleksikan leher) dan Musculus trapezius (mengangkat/elevasi bahu, retraksi skapula, dan rotasi skapula ke atas untuk memungkinkan abduksi lengan penuh di atas bidang horizontal 90°); serabut proprioseptif dihantarkan via anastomosis dengan rami C2-C4 pleksus servikalis.',
  limfatik: 'Mengalir ke nodi lymphatici cervicales laterales superficiales dan profundi sepanjang rantai vena jugularis interna dan nervus accessorius di trigonum posterior leher.',
  korelasiKlinis: 'Shoulder Drop / Bahu Terkulai (akibat parese M. trapezius disertai atrofi fosa supraklavikular dan ketidakmampuan abduksi lengan di atas 90 derajat); Kelemahan rotasi kepala ke sisi berlawanan (akibat parese M. sternocleidomastoideus); Cedera Iatrogenik Nervus Accessorius (saraf ini menyeberangi trigonum colli posterior secara sangat superfisial tepat di bawah fascia pembungkus leher, menjadikannya struktur saraf kranial yang paling sering terpotong atau tercedera saat prosedur biopsi kelenjar getah bening servikal, eksisi kista leher lateral, atau diseksi leher radikal).'
};

const nervusHypoglossusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nervus Hypoglossus [CN XII]',
  nameId: 'Saraf Hipoglosus (Saraf Kranial XII)',
  deskripsi: 'Saraf somatomotorik somatik murni (General Somatic Efferent / GSE) untuk otot-otot lidah. Berpangkal dari Nukleus Hypoglossus di dorsal medulla oblongata di bawah trigonum hypoglossi lantai ventrikel keempat. Serabut radikularnya keluar di sulcus ventrolateralis (sulcus preolivaris) di antara pyramis dan oliva, keluar dari cavitas cranii melalui Canalis Hypoglossi ossis occipitalis, melengkung ke anterior di leher di bawah angulus mandibulae melintasi Arteria carotis interna dan externa, menyilang di atas cornu majus os hyoideum, lalu memasuki radix linguae di profunda Musculus mylohyoideus.',
  arteri: 'Arteria pharyngea ascendens (rami meningei canalis hypoglossi), Arteria lingualis, dan rami musculares dari Arteria occipitalis.',
  vena: 'Vena comitans nervi hypoglossi dan Vena lingualis yang bermuara ke Vena jugularis interna.',
  inervasi: 'Somatomotorik GSE murni untuk seluruh otot intrinsik lidah (M. longitudinalis superior, M. longitudinalis inferior, M. transversus linguae, M. verticalis linguae) dan hampir seluruh otot ekstrinsik lidah (Musculus genioglossus, Musculus hyoglossus, dan Musculus styloglossus), KECUALI Musculus palatoglossus yang dipersarafi oleh Nervus vagus (CN X via plexus pharyngeus).',
  limfatik: 'Drainase epineural menuju nodi lymphatici submandibulares dan nodi lymphatici cervicales profundi.',
  korelasiKlinis: 'Lesi Nervus Hipoglosus LMN (saat lidah dijulurkan keluar, lidah mengalami Deviasi Membelok ke Sisi Lesi / Ipsilateral akibat dorongan Musculus genioglossus kontralateral yang intak tanpa resistensi perlawanan dari sisi yang lumpuh, disertai tanda LMN berupa fasikulasi dan atrofi hemilingua); Lesi UMN Kortikobulbaris (pada stroke hemisfer, lidah berdeviasi ke sisi kontralateral dari lesi hemisfer serebri tanpa disertai fasikulasi atau atrofi); Disartria lingual (gangguan artikulasi pelafalan konsonan lingual t, d, n, l, r).'
};

// ============================================================================
// 6. STRUKTUR SUBCORTICAL & LIMBIC PENTING
// ============================================================================

const basalGangliaData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Nuclei Basales (Basal Ganglia)',
  nameId: 'Ganglia Basalis (Nuklei Basales)',
  deskripsi: 'Kumpulan nukleus massa substansia grisea subkortikal di basis hemisfer serebri dan mesencephalon. Terdiri dari Corpus Striatum (Nucleus Caudatus dan Putamen), Globus Pallidus (interna dan externa), Nucleus Subthalamicus (Luys), dan Substantia Nigra (pars compacta dan reticulata). Berfungsi memodulasi perencanaan motorik, inisiasi dan supresi gerakan volunter otomatis, penyesuaian tonus postural, pembelajaran prosedural, serta regulasi motivasi dan kebiasaan melalui sirkuit langsung (direct pathway: memfasilitasi gerakan) dan sirkuit tidak langsung (indirect pathway: menginhibisi gerakan).',
  arteri: 'Arteria-arteria lenticulostriatae (cabang perforans profunda dari segmen M1 Arteria cerebri media), Arteria recurrens Heubner (cabang ACA segmen A2), dan Arteria choroidea anterior.',
  vena: 'Vena thalamostriata superior dan Vena interna cerebri yang bermuara ke Vena cerebri magna (Galen) dan Sinus rectus.',
  inervasi: 'Sirkuit loop umpan balik kortiko-striato-palido-talamo-kortikal; neurotransmisi dopaminergik nigrostriatal, glutamatergik kortikostriatal, dan GABAergik striatopallidal/striatonigral.',
  limfatik: 'Drainase glimfatik subkortikal menuju ventrikel lateral dan cisterna velum interpositum.',
  korelasiKlinis: 'Penyakit Parkinson (defisiensi dopamin akibat hilangnya neuron dopaminergik substansia nigra memicu dominasi sirkuit inhibisi: bradikinesia, rigiditas roda gigi, tremor istirahat); Penyakit Huntington (degenerasi neuron GABAergik pada nukleus kaudatus dan putamen memicu hiperkinesia korea involunter, distonia, dan demensia progresif); Hemibalisismus (gerakan melempar kasar tak terkontrol pada satu sisi tubuh akibat infark pada nukleus subtalamikus kontralateral).'
};

const hippocampusData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Formatio Hippocampi',
  nameId: 'Hipokampus',
  deskripsi: 'Struktur substansia grisea arkikorteks berbentuk seahorse (kuda laut) di dinding medial cornu inferius ventrikel lateral lobus temporalis. Terdiri atas Gyrus Dentatus, Hippocampus proprius (Cornu Ammonis: sektor CA1, CA2, CA3, CA4), dan Subiculum. Merupakan komponen sentral Sistem Limbik (Sirkuit Papez) yang bertindak sebagai mesin utama konsolidasi memori jangka pendek menjadi memori jangka panjang deklaratif/episodik serta navigasi pemetaan spasial lingkungan (place cells).',
  arteri: 'Rami hippocampales dari Arteria cerebri posterior (PCA) dan cabang dari Arteria choroidea anterior (AChA).',
  vena: 'Vena basalis (Rosenthal) dan vena-vena choroideae inferiores.',
  inervasi: 'Sirkuit trisinaptik intrahipokampal (jalur perforan dari korteks entorhinal ke gyrus dentatus -> serabut lumut ke CA3 -> kolateral Schaffer ke CA1 -> subiculum); output utama keluar melalui serabut Fimbria-Fornix menuju corpus mamillare hipotalamus.',
  limfatik: 'Drainase glimfatik temporalis medialis ke cisterna ambiens dan cisterna basalis.',
  korelasiKlinis: 'Amnesia Anterograt Berat (ketidakmampuan membentuk memori jangka panjang baru pasca kerusakan hipokampus bilateral, seperti pada kasus legendaris pasien H.M.); Penyakit Alzheimer (hipokampus dan korteks entorhinal merupakan situs awal neurodegenerasi plak amiloid dan kekusutan neurofibril tau, menyebabkan gejala awal hilang ingatan jangka pendek yang khas); Sklerosis Hippocampus / Mesial Temporal Sclerosis (penyebab paling lazim epilepsi lobus temporal resisten obat; sektor Somat-CA1 sangat rentan terhadap cedera iskemik/hipoksik).'
};

const amygdalaData: OrganDetails = {
  type: 'organ',
  nameLatin: 'Corpus Amygdaloideum',
  nameId: 'Amigdala',
  deskripsi: 'Massa nukleus berbentuk buah badam (almond) di kedalaman lobus temporalis anteromedial, tepat di anterior ujung cornu inferius ventrikel lateral dan di rostral hipokampus. Merupakan pusat emosi inti sistem limbik yang bertanggung jawab atas pengenalan ancaman bahaya, pembelajaran rasa takut terkondisi (fear conditioning), pembangkitan respon "fight-or-flight", modulasi memori emosional bersama hipokampus, serta pengenalan ekspresi wajah sosial.',
  arteri: 'Arteria choroidea anterior (cabang A. carotis interna) dan rami amygdalae dari Arteria cerebri media (MCA).',
  vena: 'Vena basalis (Rosenthal) menuju Vena cerebri magna (Galen).',
  inervasi: 'Menerima input sensorik polimodal terintegrasi dari asosiasi korteks dan talamus; memproyeksikan impuls eferen via Stria Terminalis dan jalur amigdalofugal ventral ke hipotalamus (memicu aktivasi simpatis otonom) dan substansia grisea periakuaduktal mesensefalon.',
  limfatik: 'Aliran glimfatik paravaskular ke cisterna chiasmatica dan cisterna interpeduncularis.',
  korelasiKlinis: 'Sindrom Klüver-Bucy (akibat destruksi amigdala bilateral pasca-ensefalitis herpes simpleks atau trauma: hilangnya respon rasa takut dan agresi secara total, ketenangan emosi berlebih / docility, hiperororitas ekstrem di mana semua benda dimasukkan ke mulut, hipermetamorfosis visual, dan hiperfleksibilitas seksual); Gangguan Ansietas dan PTSD (hiperaktivitas sirkuit amigdala terhadap stimulus traumatis atau stresor kronik).'
};

// ============================================================================
// 7. KAMUS EKSPOR RESMI NERVOUS_KNOWLEDGE (Record<string, OrganDetails>)
// ============================================================================

export const NERVOUS_KNOWLEDGE: Record<string, OrganDetails> = {
  // --- Otak & Serebrum (Encephalon & Cerebrum) ---
  'brain': brainData,
  'encephalon': brainData,
  'otak': brainData,
  'cerebrum': cerebrumData,
  'telencephalon': cerebrumData,
  'otak besar': cerebrumData,
  'cortex cerebri': cortexCerebriData,
  'cortex_cerebri': cortexCerebriData,
  'cerebral cortex': cortexCerebriData,
  'korteks serebri': cortexCerebriData,
  'lobus frontalis': lobusFrontalisData,
  'lobus frontal': lobusFrontalisData,
  'frontal lobe': lobusFrontalisData,
  'lobus parietalis': lobusParietalisData,
  'lobus parietal': lobusParietalisData,
  'parietal lobe': lobusParietalisData,
  'lobus temporalis': lobusTemporalisData,
  'lobus temporal': lobusTemporalisData,
  'temporal lobe': lobusTemporalisData,
  'lobus occipitalis': lobusOccipitalisData,
  'lobus oksipital': lobusOccipitalisData,
  'occipital lobe': lobusOccipitalisData,
  'corpus callosum': corpusCallosumData,
  'korpus kalosum': corpusCallosumData,
  'thalamus': thalamusData,
  'talamus': thalamusData,
  'hypothalamus': hypothalamusData,
  'hipotalamus': hypothalamusData,
  'cerebellum': cerebellumData,
  'serebelum': cerebellumData,
  'otak kecil': cerebellumData,

  // --- Batang Otak (Truncus Encephali) ---
  'truncus encephali': truncusEncephaliData,
  'brainstem': truncusEncephaliData,
  'batang otak': truncusEncephaliData,
  'mesencephalon': mesencephalonData,
  'midbrain': mesencephalonData,
  'otak tengah': mesencephalonData,
  'pons': ponsData,
  'pons varolii': ponsData,
  'medulla oblongata': medullaOblongataData,
  'medulla': medullaOblongataData,
  'sumsum lanjutan': medullaOblongataData,

  // --- Sistem Ventrikel, Meningen & Hipofisis ---
  'ventriculus lateralis': ventriculusLateralisData,
  'ventriculus lateralis cerebri': ventriculusLateralisData,
  'lateral ventricle': ventriculusLateralisData,
  'ventrikel lateral': ventriculusLateralisData,
  'ventriculus tertius': ventriculusTertiusData,
  'third ventricle': ventriculusTertiusData,
  'ventrikel ketiga': ventriculusTertiusData,
  'ventriculus quartus': ventriculusQuartusData,
  'fourth ventricle': ventriculusQuartusData,
  'ventrikel keempat': ventriculusQuartusData,
  'meninges': meningesData,
  'selaput otak': meningesData,
  'dura mater': duraMaterData,
  'dura mater encephali': duraMaterData,
  'pachymeninx': duraMaterData,
  'arachnoidea': arachnoideaData,
  'arachnoidea mater': arachnoideaData,
  'arachnoid mater': arachnoideaData,
  'araknoid': arachnoideaData,
  'pia mater': piaMaterData,
  'pia mater encephali': piaMaterData,
  'piamater': piaMaterData,
  'hypophysis': hypophysisData,
  'glandula pituitaria': hypophysisData,
  'pituitary gland': hypophysisData,
  'hipofisis': hypophysisData,

  // --- Medula Spinalis, Kauda Ekuina, & Pleksus Saraf ---
  'spinal cord': spinalCordData,
  'medulla spinalis': spinalCordData,
  'sumsum tulang belakang': spinalCordData,
  'cauda equina': caudaEquinaData,
  'kauda ekuina': caudaEquinaData,
  'plexus brachialis': plexusBrachialisData,
  'brachial plexus': plexusBrachialisData,
  'pleksus brakialis': plexusBrachialisData,
  'plexus lumbosacralis': plexusLumbosacralisData,
  'lumbosacral plexus': plexusLumbosacralisData,
  'pleksus lumbosakral': plexusLumbosacralisData,
  'plexus cervicalis': plexusCervicalisData,
  'cervical plexus': plexusCervicalisData,
  'pleksus servikalis': plexusCervicalisData,

  // --- Saraf Perifer Utama ---
  'nervus ischiadicus': nervusIschiadicusData,
  'sciatic nerve': nervusIschiadicusData,
  'saraf skiatika': nervusIschiadicusData,
  'ischiadicus': nervusIschiadicusData,
  'nervus femoralis': nervusFemoralisData,
  'femoral nerve': nervusFemoralisData,
  'saraf femoralis': nervusFemoralisData,
  'nervus radialis': nervusRadialisData,
  'radial nerve': nervusRadialisData,
  'saraf radialis': nervusRadialisData,
  'nervus medianus': nervusMedianusData,
  'median nerve': nervusMedianusData,
  'saraf medianus': nervusMedianusData,
  'nervus ulnaris': nervusUlnarisData,
  'ulnar nerve': nervusUlnarisData,
  'saraf ulnaris': nervusUlnarisData,
  'nervus phrenicus': nervusPhrenicusData,
  'phrenic nerve': nervusPhrenicusData,
  'saraf frenikus': nervusPhrenicusData,
  'nervus tibialis': nervusTibialisData,
  'tibial nerve': nervusTibialisData,
  'saraf tibialis': nervusTibialisData,
  'nervus fibularis communis': nervusFibularisCommunisData,
  'nervus peroneus communis': nervusFibularisCommunisData,
  'common peroneal nerve': nervusFibularisCommunisData,
  'saraf peroneal': nervusFibularisCommunisData,

  // --- Saraf Kranial I - XII ---
  'nervus olfactorius': nervusOlfactoriusData,
  'cn i': nervusOlfactoriusData,
  'cn 1': nervusOlfactoriusData,
  'cranial nerve 1': nervusOlfactoriusData,
  'olfactory nerve': nervusOlfactoriusData,
  'saraf olfaktorius': nervusOlfactoriusData,

  'nervus opticus': nervusOpticusData,
  'cn ii': nervusOpticusData,
  'cn 2': nervusOpticusData,
  'cranial nerve 2': nervusOpticusData,
  'optic nerve': nervusOpticusData,
  'saraf optik': nervusOpticusData,

  'nervus oculomotorius': nervusOculomotoriusData,
  'cn iii': nervusOculomotoriusData,
  'cn 3': nervusOculomotoriusData,
  'cranial nerve 3': nervusOculomotoriusData,
  'oculomotor nerve': nervusOculomotoriusData,
  'saraf okulomotor': nervusOculomotoriusData,

  'nervus trochlearis': nervusTrochlearisData,
  'cn iv': nervusTrochlearisData,
  'cn 4': nervusTrochlearisData,
  'cranial nerve 4': nervusTrochlearisData,
  'trochlear nerve': nervusTrochlearisData,
  'saraf troklearis': nervusTrochlearisData,

  'nervus trigeminus': nervusTrigeminusData,
  'cn v': nervusTrigeminusData,
  'cn 5': nervusTrigeminusData,
  'cranial nerve 5': nervusTrigeminusData,
  'trigeminal nerve': nervusTrigeminusData,
  'saraf trigeminus': nervusTrigeminusData,

  'nervus abducens': nervusAbducensData,
  'cn vi': nervusAbducensData,
  'cn 6': nervusAbducensData,
  'cranial nerve 6': nervusAbducensData,
  'abducens nerve': nervusAbducensData,
  'saraf abdusen': nervusAbducensData,

  'nervus facialis': nervusFacialisData,
  'cn vii': nervusFacialisData,
  'cn 7': nervusFacialisData,
  'cranial nerve 7': nervusFacialisData,
  'facial nerve': nervusFacialisData,
  'saraf fasialis': nervusFacialisData,

  'nervus vestibulocochlearis': nervusVestibulocochlearisData,
  'cn viii': nervusVestibulocochlearisData,
  'cn 8': nervusVestibulocochlearisData,
  'cranial nerve 8': nervusVestibulocochlearisData,
  'vestibulocochlear nerve': nervusVestibulocochlearisData,
  'saraf vestibulokoklearis': nervusVestibulocochlearisData,

  'nervus glossopharyngeus': nervusGlossopharyngeusData,
  'cn ix': nervusGlossopharyngeusData,
  'cn 9': nervusGlossopharyngeusData,
  'cranial nerve 9': nervusGlossopharyngeusData,
  'glossopharyngeal nerve': nervusGlossopharyngeusData,
  'saraf glosofaringeus': nervusGlossopharyngeusData,

  'nervus vagus': nervusVagusData,
  'cn x': nervusVagusData,
  'cn 10': nervusVagusData,
  'cranial nerve 10': nervusVagusData,
  'vagus nerve': nervusVagusData,
  'saraf vagus': nervusVagusData,

  'nervus accessorius': nervusAccessoriusData,
  'cn xi': nervusAccessoriusData,
  'cn 11': nervusAccessoriusData,
  'cranial nerve 11': nervusAccessoriusData,
  'accessory nerve': nervusAccessoriusData,
  'saraf aksesorius': nervusAccessoriusData,

  'nervus hypoglossus': nervusHypoglossusData,
  'cn xii': nervusHypoglossusData,
  'cn 12': nervusHypoglossusData,
  'cranial nerve 12': nervusHypoglossusData,
  'hypoglossal nerve': nervusHypoglossusData,
  'saraf hipoglosus': nervusHypoglossusData,

  // --- Struktur Subkortikal & Limbik ---
  'basal ganglia': basalGangliaData,
  'nuclei basales': basalGangliaData,
  'ganglia basalis': basalGangliaData,
  'hippocampus': hippocampusData,
  'hipokampus': hippocampusData,
  'amygdala': amygdalaData,
  'corpus amygdaloideum': amygdalaData,
  'amigdala': amygdalaData
};
