/**
 * Medical Knowledge Base - Sistem Digestif (Sistem Pencernaan & Hepato-Bilio-Pankreas)
 * AnatoSmart 3D Atlas Knowledge Base
 *
 * Mencakup struktur saluran cerna (Gastrointestinal Tract) dan kelenjar aksesori pencernaan:
 * - Vaskularisasi Arteri (Truncus Coeliacus, SMA, IMA)
 * - Vaskularisasi Vena / Drainase Sistem Vena Portae Hepatis & Kaval
 * - Inervasi Otonom (Parasimpatis: N. vagus CN X & Nn. splanchnici pelvici S2-S4; Simpatis: Plexus coeliacus, mesentericus superior, mesentericus inferior)
 * - Drainase Limfatik Regional
 * - Korelasi Klinis Patologis & Bedah Komprehensif
 */

import { OrganDetails } from '../medical-knowledge';

export const DIGESTIVE_KNOWLEDGE: Record<string, OrganDetails> = {
  // =========================================================================
  // SALURAN CERNA ATAS (UPPER GASTROINTESTINAL TRACT)
  // =========================================================================
  'esophagus': {
    type: 'organ',
    nameLatin: 'Oesophagus',
    nameId: 'Kerongkongan (Esofagus)',
    deskripsi: 'Saluran muskular berongga berdiameter ~2 cm dan panjang ~25 cm yang menghantarkan bolus makanan dari laringofaring (setinggi vertebra C6) melewati mediastinum posterior dan menembus diafragma via hiatus esophageus (setinggi T10) menuju kardia lambung (setinggi T11). Dindingnya terdiri dari lapisan mukosa (epitel skuamosa berstrata non-keratin), submukosa, tunika muskularis (1/3 proksimal otot lurik, 1/3 tengah campuran, 1/3 distal otot polos), dan adventisia. Berperan dalam digesti mekanik melalui kontraksi gelombang peristaltik primer dan sekunder yang dikoordinasikan secara harmonis oleh Upper Esophageal Sphincter (UES) dan Lower Esophageal Sphincter (LES).',
    arteri: 'Pars cervicalis: Arteria thyroidea inferior (cabang truncus thyrocervicalis); Pars thoracica: Rami esophageales dari Aorta thoracica dan Arteriae bronchiales; Pars abdominalis: Arteria gastrica sinistra (cabang Truncus coeliacus) dan Arteria phrenica inferior sinistra.',
    vena: 'Pars cervicalis dialirkan ke Vena thyroidea inferior; Pars thoracica dialirkan ke Vena azygos dan Vena hemiazygos (sirkulasi sistemik/kaval); Pars abdominalis dialirkan ke Vena gastrica sinistra (sistem Vena Portae Hepatis). Daerah perbatasan gastroesofageal merupakan situs anastomosis portosistemik yang sangat penting.',
    inervasi: 'Plexus esophageus: Parasimpatis motorik, sekretorik, dan relaksasi LES dipersarafi oleh Nervus vagus (CN X via Truncus vagalis anterior dan posterior); Simpatis berasal dari truncus sympathicus segmen torakal T2-T6 melalui rami communicantes yang menghambat motilitas dan memicu vasokonstriksi arteriol.',
    limfatik: 'Pars cervicalis bermuara ke nodi lymphatici cervicales profundi; Pars thoracica ke nodi mediastinales posteriores dan nodi tracheobronchiales; Pars abdominalis bermuara ke nodi lymphatici gastrici sinistri dan nodi coeliaci.',
    korelasiKlinis: 'Varises esofagus akibat hipertensi porta pada sirosis hepatis (pelebaran pleksus venosus submukosa esofagus distal yang berisiko ruptur dengan manifestasi hematemesis masif fatal); Gastroesophageal Reflux Disease (GERD) akibat inkompetensi LES; Esofagus Barrett (metaplasia intestinal epitel skuamosa menjadi kolumnar akibat pajanan asam kronis, berisiko berkembang menjadi adenokarsinoma distal esofagus); Akalasia esofagus (degenerasi plexus myentericus Auerbach yang menyebabkan kegagalan relaksasi LES dan dilatasi badan esofagus dengan gambaran radiologis "bird-beak appearance").'
  },

  'stomach': {
    type: 'organ',
    nameLatin: 'Gaster / Ventriculus',
    nameId: 'Lambung (Gaster)',
    deskripsi: 'Organ berongga muskular berbentuk huruf J yang menempati regio epigastrium, umbilicalis, dan hypochondrium sinistra. Memiliki Curvatura major dan Curvatura minor, serta 3 lapisan tunika muskularis (stratum longitudinale eksternum, stratum circulare medium, dan stratum obliquum internum). Menjalankan fungsi digesti mekanik (gelombang pencampuran dan churning peristaltik) serta digesti enzimatik/kimiawi melalui getah lambung (HCl oleh sel parietal untuk denaturasi protein dan bakterisidal, pepsinogen oleh sel chief yang diaktifkan menjadi pepsin untuk pemecahan protein, faktor intrinsik Castle untuk absorpsi vitamin B12 di ileum, serta mukus pelindung kaya ion bikarbonat oleh sel foveolar mukosa).',
    arteri: 'Curvatura minor: Arteria gastrica sinistra (cabang langsung Truncus coeliacus) dan Arteria gastrica dextra (cabang A. hepatica propria); Curvatura major: Arteria gastroomentalis sinistra dan Arteriae gastricae breves (cabang A. splenica), serta Arteria gastroomentalis dextra (cabang A. gastroduodenalis dari A. hepatica communis).',
    vena: 'Vena gastrica sinistra dan Vena gastrica dextra bermuara langsung ke Vena portae hepatis; Vena gastroomentalis sinistra dan Venae gastricae breves bermuara ke Vena splenica; Vena gastroomentalis dextra bermuara ke Vena mesenterica superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) melalui Truncus vagalis anterior (memberi ramus gastricus anterior dan ramus hepaticus) dan Truncus vagalis posterior (memberi ramus gastricus posterior dan rami coeliaci) yang menstimulasi sekresi asam lambung dan memacu motilitas gaster; Simpatis: Plexus coeliacus (berasal dari segmen medulla spinalis T6-T9 via Nervus splanchnicus major) yang menghambat motilitas peristaltik dan memicu vasokonstriksi pembuluh splanknik.',
    limfatik: 'Nodi lymphatici gastrici sinistri et dextri sepanjang curvatura minor, nodi gastroomentales sepanjang curvatura major, nodi pancreaticosplenici pada fundus, dan nodi pylorici, yang seluruhnya bermuara ke Nodi lymphatici coeliaci di sekitar pangkal truncus coeliacus.',
    korelasiKlinis: 'Gastritis akut (erosif akibat NSAID, alkohol, atau stres) dan gastritis kronis (akibat kolonisasi Helicobacter pylori atau autoimun); Ulkus peptikum lambung (ulkus ventrikuli, berisiko komplikasi perdarahan saluran cerna atas berupa hematemesis-melena atau perforasi dinding lambung dengan peritonitis kimiawi akut); Karsinoma lambung (adenokarsinoma gaster, metastasis nodus limfe supraklavikula kiri / Nodus Virchow atau Tanda Troisier, metastasis nodus periumbilikal / Sister Mary Joseph nodule, dan metastasis ovarium / Tumor Krukenberg).'
  },

  'gaster': {
    type: 'organ',
    nameLatin: 'Gaster / Ventriculus',
    nameId: 'Lambung (Gaster)',
    deskripsi: 'Organ digestif intraperitoneal berotot tebal di bawah diafragma kiri. Berfungsi sebagai reservoar makanan, melumat bolus secara mekanik menjadi kimus cair melalui gerak peristaltik 3 lapis otot (longitudinal, sirkular, oblik), serta memulai digesti enzimatik protein melalui pepsin dan sekresi asam hidroklorida (HCl). Memiliki vaskularisasi kolateral yang sangat kaya sehingga infark lambung primer sangat jarang terjadi.',
    arteri: 'Anastomosis arkade arteri: A. gastrica sinistra (Truncus coeliacus), A. gastrica dextra (A. hepatica propria), A. gastroomentalis sinistra & Aa. gastricae breves (A. splenica), dan A. gastroomentalis dextra (A. gastroduodenalis).',
    vena: 'Drainase langsung ke sistem porta melalui V. gastrica sinistra dan V. gastrica dextra, serta drainase tidak langsung via V. splenica dan Vena mesenterica superior (SMV).',
    inervasi: 'Parasimpatis sekretomotor dari N. vagus (Truncus vagalis anterior et posterior); Simpatis inhibitor dari segmen T6-T9 via N. splanchnicus major dan Plexus coeliacus.',
    limfatik: 'Kelenjar limfe gastrici dextri/sinistri, gastroomentales, dan pylorici menuju ke Nodi lymphatici coeliaci.',
    korelasiKlinis: 'Sindrom Zollinger-Ellison (gastrinoma neuroendokrin yang memicu hipersekresi asam masif dan ulkus lambung rekuren refrakter); Perdarahan varises gaster pada hipertensi porta; Gastritis atrofi dengan hipoklorhidria.'
  },

  'cardia': {
    type: 'organ',
    nameLatin: 'Cardia Gastrica (Pars Cardiaca)',
    nameId: 'Kardia Lambung',
    deskripsi: 'Zona perbatasan anatomis dan fungsional selebar ~2-3 cm yang mengelilingi ostium cardiacum lambung (setinggi vertebra T11 dan costae VII kiri). Merupakan zona transisi histologis (Z-line / squamocolumnar junction) antara epitel skuamosa berlapis esofagus dan epitel kolumnar selapis lambung. Mengandung glandulae cardiacae yang menyekresi mukus pelindung kental kaya musin dan ion bikarbonat untuk melindungi mukosa sambungan gastroesofageal dari erosi asam lambung.',
    arteri: 'Rami esophageales dari Arteria gastrica sinistra (Truncus coeliacus) dan rami ascendentes dari Arteria phrenica inferior sinistra.',
    vena: 'Vena gastrica sinistra (vena koronaria ventrikuli) yang bermuara ke Vena portae hepatis, beranastomosis dengan pleksus vena submukosa esofagus bawah (anastomosis portosistemik).',
    inervasi: 'Parasimpatis dari Truncus vagalis anterior et posterior (Nervus vagus CN X); Simpatis dari segmen T6-T9 via Plexus coeliacus.',
    limfatik: 'Nodi lymphatici paracardiales dan nodi gastrici sinistri menuju Nodi lymphatici coeliaci.',
    korelasiKlinis: 'Inkompetensi Lower Esophageal Sphincter (LES) dan hiatus hernia pada kardia memicu refluks asam dan esofagitis erosif (GERD); Robekan mukosa longitudinal akibat muntah hebat berulang (Sindrom Mallory-Weiss); Adenokarsinoma junction gastroesofageal (klasifikasi Siewert tipe I-III).'
  },

  'fundus gastricus': {
    type: 'organ',
    nameLatin: 'Fundus Gastricus',
    nameId: 'Fundus Lambung',
    deskripsi: 'Kubah cembung lambung di sisi superolateral yang menonjol ke kranial melampaui bidang horizontal ostium cardiacum, bersentuhan langsung dengan kubah hemidiafragma kiri dan facies visceralis lien. Berfungsi sebagai reservoir penampung gas yang tertelan (menghasilkan gambaran radiologis lusen khas "Magenblase" pada foto polos toraks/abdomen tegak) serta menampung bolus makanan hingga 1-1.5 liter melalui refleks relaksasi reseptif vago-vagal tanpa peningkatan tekanan intraluminal yang bermakna.',
    arteri: 'Arteriae gastricae breves (4-6 cabang terminal A. splenica yang melintasi ligamentum gastrosplenicum) dan rami fundici dari Arteria gastrica sinistra.',
    vena: 'Venae gastricae breves yang bermuara ke Vena splenica/lienalis, lalu menuju Vena portae hepatis.',
    inervasi: 'Parasimpatis: Ramus fundicus dari Truncus vagalis anterior dan posterior (Nervus vagus CN X); Simpatis: Plexus coeliacus (T6-T9).',
    limfatik: 'Nodi lymphatici pancreaticosplenici (di hilum lienale) dan nodi gastroomentales sinistri menuju Nodi coeliaci.',
    korelasiKlinis: 'Varises fundus gaster terisolasi (Isolated Gastric Varices / IGV) akibat hipertensi porta segmental (sinistral) sekunder terhadap trombosis vena splenica kronis (misalnya pasca pankreatitis kronis); Prosedur fundoplikasi Nissen (pembungkusan fundus gaster 360 derajat mengelilingi esofagus bawah untuk merekonstruksi barrier antirefluks pada GERD refrakter).'
  },

  'corpus gastricum': {
    type: 'organ',
    nameLatin: 'Corpus Gastricum',
    nameId: 'Korpus Lambung (Badan Lambung)',
    deskripsi: 'Bagian lambung terbesar yang membentang dari bidang horizontal ostium cardiacum ke arah kaudal hingga incisura angularis pada curvatura minor. Permukaan dalamnya memiliki lipatan rugae gastricae yang tebal saat lambung kosong. Mengandung glandulae gastricae propriae yang kaya akan sel parietal/oksintik (penghasil ion H+ via pompa proton H+/K+-ATPase serta faktor intrinsik Castle) dan sel chief/zimogenik (penghasil pepsinogen I dan II). Berperan krusial dalam digesti enzimatik makanan dan pencampuran kimus secara ritmis.',
    arteri: 'Curvatura minor: Arteria gastrica sinistra (Truncus coeliacus); Curvatura major: Arteria gastroomentalis sinistra (A. splenica) dan Arteria gastroomentalis dextra (A. gastroduodenalis).',
    vena: 'Vena gastrica sinistra dialirkan ke Vena portae hepatis; Vena gastroomentalis sinistra ke Vena splenica; Vena gastroomentalis dextra ke Vena mesenterica superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) via plexus submucosus Meissner dan plexus myentericus Auerbach (meningkatkan sekresi asam dan motilitas); Simpatis: Plexus coeliacus (N. splanchnicus major segmen T6-T9).',
    limfatik: 'Nodi lymphatici gastrici sinistri sepanjang curvatura minor dan nodi gastroomentales sepanjang curvatura major menuju Nodi coeliaci.',
    korelasiKlinis: 'Gastritis atrofi tipe A (penyakit autoimun dengan antibodi terhadap sel parietal dan faktor intrinsik) memicu aklorhidria dan Anemia Pernisiosa akibat malabsorpsi vitamin B12; Ulkus gaster tipe I Johnson pada curvatura minor korpus lambung; Target terapi obat golongan Proton Pump Inhibitor (PPI) pada membran sel parietal korpus.'
  },

  'pylorus': {
    type: 'organ',
    nameLatin: 'Pars Pylorica (Antrum Pyloricum & Canalis Pyloricus)',
    nameId: 'Pilorus Lambung',
    deskripsi: 'Segmen distal lambung yang menyempit, terdiri dari Antrum pyloricum (area pencampuran kimus intensif dan tempat konsentrasi sel G penghasil hormon gastrin serta sel D penghasil somatostatin) dan Canalis pyloricus yang berakhir pada Ostium pyloricum. Dikelilingi oleh cincin tebal otot polos sirkular (Musculus sphincter pylori). Berfungsi mengontrol pengeluaran kimus secara bertahap dan proporsional ke duodenum serta mencegah refluks getah alkalis duodeni dan empedu ke dalam lambung.',
    arteri: 'Arteria gastrica dextra (cabang A. hepatica propria), Arteria gastroduodenalis, dan Arteria gastroomentalis dextra.',
    vena: 'Vena gastrica dextra (bermuara langsung ke Vena portae hepatis) dan Vena prepylorica (Vena Mayo, berjalan vertikal melintasi sambungan gastroduodenal sebagai penanda bedah penentu batas pilorus).',
    inervasi: 'Parasimpatis: Ramus pyloricus dari Truncus vagalis anterior (Nervus vagus CN X) memicu relaksasi sfingter dan kontraksi antrum; Simpatis: Plexus coeliacus (T6-T9) memicu kontraksi spastik sfingter pilorus.',
    limfatik: 'Nodi lymphatici pylorici (subpyloric, suprapyloric, dan retropyloric) yang mengalirkan limfe ke Nodi lymphatici hepatici dan Nodi coeliaci.',
    korelasiKlinis: 'Stenosis Pilorus Hipertrofik Infantil (IHPS, hipertrofi sirkular otot sfingter pilorus pada neonatus usia 2-8 minggu dengan tanda klinis muntah proyektil non-bilious, dehidrasi, alkalosis metabolik hipokloremik hipokalemik, dan teraba massa "olive" di epigastrium); Ulkus peptikum antrum-pilorus (terkait infeksi H. pylori) dengan risiko Gastric Outlet Obstruction (GOO) akibat sikatriks stenosis sikatrisial.'
  },

  // =========================================================================
  // USUS HALUS (SMALL INTESTINE)
  // =========================================================================
  'duodenum': {
    type: 'organ',
    nameLatin: 'Duodenum',
    nameId: 'Usus Dua Belas Jari (Duodenum)',
    deskripsi: 'Segmen proksimal intestinum tenue sepanjang ~25 cm berbentuk huruf C yang melingkari caput pancreatis dari ostium pyloricum hingga flexura duodenojejunalis (setinggi vertebra L2, difiksasi Ligamentum suspensorium duodeni / Ligamentum Treitz). Terbagi atas 4 pars: Pars superior (L1, bulbus duodeni, intraperitoneal), Pars descendens (L1-L3, retroperitoneal sekunder, memuat Papilla duodeni major Vateri tempat bermuaranya ductus choledochus dan ductus pancreaticus major, serta Papilla minor untuk ductus pancreaticus accessorius Santorini), Pars horizontalis/inferior (L3, retroperitoneal, melintas di anterior IVC dan Aorta, disilang di anterior oleh Vasa Mesenterica Superior), dan Pars ascendens (L3-L2). Mengandung glandulae duodenales (kelenjar Brunner) di submukosa yang menyekresi getah alkalis kaya bikarbonat untuk menetralkan asam kimus lambung dan mengoptimalkan pH kerja enzim pankreas.',
    arteri: 'Pars proksimal (foregut): Arteria pancreaticoduodenalis superior anterior dan posterior (cabang A. gastroduodenalis dari Truncus coeliacus); Pars distal (midgut): Arteria pancreaticoduodenalis inferior anterior dan posterior (cabang Arteria Mesenterica Superior / SMA). Merupakan zona transisi dan anastomosis krusial antara Truncus Coeliacus dan SMA.',
    vena: 'Vena pancreaticoduodenalis superior bermuara langsung ke Vena portae hepatis; Vena pancreaticoduodenalis inferior bermuara ke Vena Mesenterica Superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) melalui Plexus coeliacus dan Plexus mesentericus superior; Simpatis: Segmen T8-T10 medula spinalis via Nervus splanchnicus major dan minor menuju plexus prevertebralis.',
    limfatik: 'Nodi lymphatici pancreaticoduodenales superiores (mengalir ke nodi coeliaci) dan inferiores (mengalir ke nodi mesenterici superiores).',
    korelasiKlinis: 'Ulkus duodeni (lokasi tersering ulkus peptikum pada dinding anterior bulbus duodeni, nyeri membaik sesaat setelah makan; jika terjadi perforasi dinding posterior bulbus, dapat mengerosi Arteria gastroduodenalis dan memicu perdarahan saluran cerna masif katastropik); Sindrom Arteria Mesenterica Superior (Sindrom Wilkie: kompresi pars horizontalis duodeni di antara sudut tajam SMA dan Aorta abdominalis akibat hilangnya bantalan lemak retroperitoneal, menyebabkan obstruksi usus proksimal pasca makan).'
  },

  'jejunum': {
    type: 'organ',
    nameLatin: 'Jejunum',
    nameId: 'Usus Kosong (Jejunum)',
    deskripsi: 'Bagian 2/5 proksimal intestinum tenue intraperitoneal (~2.5 meter) yang membentang dari flexura duodenojejunalis, terletak terutama di kuadran kiri atas abdomen dan regio umbilicalis. Berdinding tebal, lumen lebar, vaskularisasi sangat kaya (tampak merah segar saat laparotomi), memiliki plicae circulares Kerkringi yang tinggi, rapat, dan permanen, vili intestinalis panjang dengan mikrovili lebat, serta arkade arteri sederhana (1-2 tingkatan) dengan vasa recta yang panjang dan lurus. Berperan primer dalam digesti enzimatik lanjutan dan penyerapan aktif makronutrien (karbohidrat via SGLT-1/GLUT-5, asam amino/peptida, lipid/asam lemak), vitamin larut air, serta mikronutrien penting (kalsium, folat, dan zat besi di proksimal).',
    arteri: 'Arteriae jejunales (cabang-cabang sisi kiri Arteria Mesenterica Superior / SMA) yang membentuk 1-2 lapis arkade vaskular anastomotik di mesenterium sebelum mencabangkan vasa recta panjang ke dinding usus.',
    vena: 'Venae jejunales yang berjalan paralel dengan arteri dan bermuara ke Vena Mesenterica Superior (SMV), yang selanjutnya bergabung dengan Vena splenica menjadi Vena Portae Hepatis.',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) melalui Plexus mesentericus superior (meningkatkan motilitas segmental dan sekresi enterosit); Simpatis: Segmen T8-T10 via Nervus splanchnicus minor dan Plexus mesentericus superior (menghambat gerak peristaltik dan memicu vasokonstriksi arteriol).',
    limfatik: 'Lakteal vili mukosa menyerap kilomikron lipid, dialirkan melalui nodi lymphatici juxta-intestinales di mesenterium ke nodi mesenterici superiores dan selanjutnya bermuara ke Cisterna Chyli.',
    korelasiKlinis: 'Iskemia mesenterika akut (emboli jantung atau trombosis SMA akut memicu nekrosis iskemik usus halus dengan trias klasik: nyeri perut hebat akut tidak sebanding dengan temuan pemeriksaan fisik, riwayat aritmia atrial fibrilasi, dan asidosis laktat berat); Penyakit Celiac (enteropati autoimun akibat intoleransi gluten dengan atrofi vili difus dan pemendekan kriptus di jejunum, memicu sindrom malabsorpsi kronis, steatore, dan penurunan berat badan).'
  },

  'ileum': {
    type: 'organ',
    nameLatin: 'Ileum',
    nameId: 'Usus Penyerapan (Ileum)',
    deskripsi: 'Bagian 3/5 distal intestinum tenue intraperitoneal (~3.5 meter) yang menempati kuadran kanan bawah abdomen, regio hypogastrica, dan cavitas pelvis, berakhir pada ostium ileocaecale di caecum. Karakteristik pembeda dari jejunum: dinding lebih tipis, lumen lebih sempit, vaskularisasi lebih sedikit (merah muda pucat), plicae circulares pendek dan jarang (menghilang di ileum terminal), arkade vaskular kompleks berlapis-lapis (3-5 baris) dengan vasa recta pendek, timbunan lemak mesenterium yang tebal hingga menutupi dinding usus ("creeping fat"), serta adanya agregat folikel limfoid masif di lamina propria dan submukosa yang disebut Plaque Peyer (Noduli lymphoidei aggregati). Berperan khusus dalam absorpsi aktif garam empedu terkonjugasi (untuk resirkulasi enterohepatik) dan vitamin B12 yang berikatan dengan faktor intrinsik di ileum terminalis, serta absorpsi air dan elektrolit.',
    arteri: 'Arteriae ileales (berasal dari cabang sisi kiri Arteria Mesenterica Superior / SMA) dan ramus ilealis dari Arteria ileocolica (cabang terminal SMA).',
    vena: 'Venae ileales yang bermuara ke Vena Mesenterica Superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) melalui Plexus mesentericus superior; Simpatis: Segmen medulla spinalis T9-T11 melalui Nervus splanchnicus minor dan Plexus mesentericus superior.',
    limfatik: 'Pleksus limfatik intramural dan nodi lymphatici ileales di mesenterium bermuara ke Nodi lymphatici mesenterici superiores.',
    korelasiKlinis: 'Penyakit Crohn (inflamasi granulomatosa transmural kronis dengan predileksi kuat di ileum terminalis / ileitis terminalis, ditandai "skip lesions", gambaran "cobblestone", pembentukan striktur stenosis dan fistula enterokutaneus atau enterovesikal); Reseksi ileum terminalis (>100 cm) memicu diare sekretorik asam empedu, defisiensi vitamin B12 (anemia megaloblastik), dan batu empedu akibat deplesi garam empedu; Divertikulum Meckel (anomali kongenital sisa ductus vitellinus / omphalomesentericus, terletak ~2 kaki proksimal valva ileocaecalis pada "Rule of 2s", mengandung mukosa ektopik gaster/pankreas yang dapat memicu ulserasi dan perdarahan rektal masif tanpa nyeri); Perforasi ulkus Plaque Peyer pada demam tifoid berat.'
  },

  // =========================================================================
  // USUS BESAR (LARGE INTESTINE / COLON)
  // =========================================================================
  'caecum': {
    type: 'organ',
    nameLatin: 'Caecum',
    nameId: 'Sekum (Pangkal Usus Besar)',
    deskripsi: 'Kantong buntu berdiameter paling lebar (~7.5 cm) pada intestinum crassum, terletak di fossa iliaca dextra di bawah perbatasan ileocaecal. Dibatasi dari ileum oleh Valva ileocaecalis (katup Bauhin) dengan labium superius dan inferius yang mencegah refluks fekalit dari kolon ke ileum. Memiliki tiga pita otot longitudinal eksternal (Taenia libera, Taenia omentalis, Taenia mesocolica) yang berkonvergensi di basis appendix vermiformis. Berfungsi melakukan dehidrasi kimus cair melalui absorpsi air dan elektrolit (Na+, Cl-) serta memfasilitasi fermentasi serat dan karbohidrat yang tidak tercerna oleh mikrobioma komensal anaerob.',
    arteri: 'Arteria caecalis anterior dan Arteria caecalis posterior yang merupakan cabang terminal dari Arteria ileocolica (cabang sisi kanan Arteria Mesenterica Superior / SMA).',
    vena: 'Vena caecalis anterior et posterior mengalirkan darah ke Vena ileocolica, yang bermuara ke Vena Mesenterica Superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) via Plexus mesentericus superior; Simpatis: Segmen medula spinalis T10-T12 via Nervus splanchnicus minor dan Plexus mesentericus superior.',
    limfatik: 'Nodi lymphatici caecales anteriores et posteriores menuju nodi ileocolici dan selanjutnya ke Nodi lymphatici mesenterici superiores.',
    korelasiKlinis: 'Volvulus caecum (torsi caecum yang mobile pada mesenterium yang gagal berfusi, menyebabkan obstruksi strangulata usus besar); Perforasi caecum pada obstruksi kolon distal (Hukum Laplace: caecum memiliki radius terbesar sehingga mengalami tegangan dinding tertinggi saat distensi intraluminal meningkat, berisiko pecah pertama kali); Tifilitis (neutropenic enterocolitis pada pasien imunokompromais pasca kemoterapi).'
  },

  'cecum': {
    type: 'organ',
    nameLatin: 'Caecum',
    nameId: 'Sekum',
    deskripsi: 'Segmen awal usus besar yang menampung kimus dari ileum terminal melalui ostium ileocaecale. Taenia coli berkonvergensi di pangkal apendiks sebagai penanda anatomis bedah utama saat apendektomi.',
    arteri: 'Arteria ileocolica via arteria caecalis anterior et posterior (cabang SMA).',
    vena: 'Vena ileocolica menuju Vena Mesenterica Superior (SMV) ke sistem porta.',
    inervasi: 'Otonom simpatis T10-T12 dan parasimpatis N. vagus via Plexus mesentericus superior.',
    limfatik: 'Nodi caecales dan ileocolici ke nodi mesenterici superiores.',
    korelasiKlinis: 'Ameboma sekum; Impaksi fekal; Intususepsi ileosekal pada balita.'
  },

  'appendix vermiformis': {
    type: 'organ',
    nameLatin: 'Appendix Vermiformis',
    nameId: 'Umbai Cacing (Apendiks)',
    deskripsi: 'Divertikulum tubular sempit berujung buntu sepanjang ~6-9 cm yang berpangkal pada aspek posteromedial caecum sekitar 2-3 cm inferior ostium ileocaecale, tepat pada titik temu ketiga taenia coli. Memiliki penggantung lipatan peritoneum segitiga sendiri (Mesoappendix) yang membawa pembuluh darah appendicularis. Dindingnya kaya akan folikel limfoid di lamina propria dan submukosa (terutama pada usia anak dan remaja), berfungsi sebagai organ pertahanan imun mukosa (Gut-Associated Lymphoid Tissue / GALT) dan reservoir ("safe house") re-inokulasi bakteri komensal usus pasca episode diare.',
    arteri: 'Arteria appendicularis (cabang dari ramus ilealis Arteria ileocolica dari SMA) yang berjalan di dalam tepi bebas mesoappendix. Merupakan end-artery murni tanpa anastomosis kolateral yang adekuat.',
    vena: 'Vena appendicularis yang berjalan bersama arteri dan bermuara ke Vena ileocolica, lalu masuk ke Vena Mesenterica Superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X); Simpatis dan serabut aferen viseral nosiseptif berjalan mendampingi saraf simpatis menuju segmen medula spinalis T10 melalui Plexus mesentericus superior.',
    limfatik: 'Nodi lymphatici ileocolici sepanjang vasa ileocolica menuju Nodi lymphatici mesenterici superiores.',
    korelasiKlinis: 'Apendisitis akut (kedaruratan bedah abdomen paling sering di dunia, dipicu oleh obstruksi lumen oleh fekalit/batu feses, hiperplasia limfoid, atau parasit, yang memicu peningkatan tekanan intraluminal, stasis mukus, iskemia end-artery appendicularis, translokasi kuman, gangren, dan perforasi). Gejala klasik: nyeri awal alih viseral tumpul di periumbilikal (akibat distensi meregangkan serabut aferen viseral segmen T10), yang dalam kurun 12-24 jam bermigrasi menjadi nyeri somatik tajam terlokalisir di kuadran kanan bawah pada Titik McBurney (akibat iritasi peritoneum parietale oleh eksudat inflamasi), disertai Blumberg sign (rebound tenderness), Rovsing sign, Psoas sign, dan Obturator sign positif; Risiko komplikasi abses periapendikuler, pileflebitis porta septik, dan peritonitis umum.'
  },

  'appendix': {
    type: 'organ',
    nameLatin: 'Appendix Vermiformis',
    nameId: 'Apendiks (Umbai Cacing)',
    deskripsi: 'Organ tubular buntu kecil kaya jaringan limfoid yang melekat pada posteromedial sekum. Posisi ujungnya sangat bervariasi: retrocaecal (paling sering ~65%), pelvik (~30%), subcaecal, atau pre-/post-ileal.',
    arteri: 'Arteria appendicularis (end-artery dari ramus ilealis A. ileocolica).',
    vena: 'Vena appendicularis mengalir ke V. ileocolica lalu SMV.',
    inervasi: 'Aferen nyeri viseral ke segmen T10 (nyeri periumbilikal) dan parasimpatis N. vagus.',
    limfatik: 'Nodi lymphatici ileocolici ke nodi mesenterici superiores.',
    korelasiKlinis: 'Apendisitis akut dengan perforasi; Tumor karsinoid (neuroendokrin) apendiks (lokasi tersering tumor neuroendokrin traktus GI).'
  },

  'colon ascendens': {
    type: 'organ',
    nameLatin: 'Colon Ascendens',
    nameId: 'Kolon Asenden (Usus Besar Naik)',
    deskripsi: 'Segmen kolon retroperitoneal sekunder sepanjang ~12-15 cm yang berjalan vertikal ke superior di regio flanka dextra dari caecum hingga facies visceralis lobus hepatis dexter, di mana kolon membelok tajam ke anterior dan medial membentuk Flexura coli dextra (Flexura hepatica). Terfiksasi ke dinding posterior abdomen oleh Fascia Toldt dextra. Memiliki ciri khas intestinum crassum: Taenia coli, Haustra (sakulasi kolon akibat tonus taenia), dan Appendices omentales / epiploicae (kantong lemak subserosa kecil). Berfungsi menyerap air, natrium, klorida, dan memadatkan materi sisa kimus.',
    arteri: 'Arteria colica dextra dan ramus colicus dari Arteria ileocolica (keduanya cabang dari Arteria Mesenterica Superior / SMA), membentuk arkade marginalis Drummond.',
    vena: 'Vena colica dextra dan Vena ileocolica yang bermuara ke Vena Mesenterica Superior (SMV).',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) via Plexus mesentericus superior; Simpatis: Segmen T10-T12 medula spinalis melalui Nervus splanchnicus minor dan Plexus mesentericus superior.',
    limfatik: 'Nodi lymphatici epicolic dan paracolic sepanjang dinding kolon menuju Nodi colici dextri dan Nodi mesenterici superiores.',
    korelasiKlinis: 'Karsinoma kolon kanan (karsinoma caecum dan colon ascendens cenderung tumbuh eksofitik polipoid seperti bunga kol, jarang menyebabkan obstruksi dini karena kaliber lumen lebar dan feses masih cair, bermanifestasi klinis sebagai perdarahan tersamar kronis, anemia defisiensi besi okulta tanpa sebab jelas, kelelahan kronis, dan massa teraba di kuadran kanan bawah); Abses parakolik kanan.'
  },

  'colon transversum': {
    type: 'organ',
    nameLatin: 'Colon Transversum',
    nameId: 'Kolon Transversum (Usus Besar Melintang)',
    deskripsi: 'Segmen kolon terpanjang (~45-50 cm) dan paling mobile, tergantung secara intraperitoneal di cavitas abdominis via Mesocolon transversum. Membentang melintang dari flexura coli dextra di hipokondrium kanan menyeberangi regio umbilicalis hingga mencapai flexura coli sinistra (Flexura splenica) di hipokondrium kiri, yang terfiksasi lebih tinggi ke diafragma oleh Ligamentum phrenicocolicum. Menjadi batas anatomis pemisah antara kompartemen suprakolik dan infrakolik. Berperan utama dalam penyerapan air dan elektrolit, pemadatan feses, serta sintesis vitamin K dan biotin oleh flora mikroba kolon.',
    arteri: '2/3 proksimal (derivat embriologis Midgut): Arteria colica media (cabang dari Arteria Mesenterica Superior / SMA); 1/3 distal (derivat Hindgut): Arteria colica sinistra (cabang dari Arteria Mesenterica Inferior / IMA). Hubungan keduanya diperantarai oleh Arteria Marginalis Drummond dan Arkade Riolan (anastomosis meandering).',
    vena: '2/3 proksimal dialirkan oleh Vena colica media ke Vena Mesenterica Superior (SMV); 1/3 distal dialirkan oleh cabang Vena colica sinistra ke Vena Mesenterica Inferior (IMV).',
    inervasi: '2/3 proksimal diinervasi Parasimpatis oleh Nervus vagus (CN X) dan Simpatis dari Plexus mesentericus superior; 1/3 distal diinervasi Parasimpatis oleh Nervi splanchnici pelvici (segmen S2-S4) dan Simpatis dari Plexus mesentericus inferior.',
    limfatik: '2/3 proksimal mengalir ke Nodi colici medii lalu ke Nodi mesenterici superiores; 1/3 distal mengalir ke Nodi colici sinistri lalu ke Nodi mesenterici inferiores.',
    korelasiKlinis: 'Kolitis iskemik pada flexura coli sinistra (Titik Griffiths: zona watershed / daerah perbatasan vaskular kritis antara SMA dan IMA yang sangat rentan mengalami hipoperfusi dan nekrosis iskemik saat syok sistemik atau hipotensi); Volvulus colon transversum; Fistula gastrokolika akibat invasi adenokarsinoma gaster atau ulkus lambung tembus ke kolon transversum.'
  },

  'colon descendens': {
    type: 'organ',
    nameLatin: 'Colon Descendens',
    nameId: 'Kolon Desenden (Usus Besar Turun)',
    deskripsi: 'Segmen kolon retroperitoneal sekunder sepanjang ~20-25 cm yang berjalan vertikal ke kaudal di regio flanka sinistra dari flexura coli sinistra menyusuri margo lateralis ren sinister hingga fossa iliaca sinistra, di mana kolon berlanjut menjadi colon sigmoideum. Terfiksasi ke dinding posterior abdomen oleh Fascia Toldt sinistra. Kaliber lumen lebih sempit dibanding kolon kanan, dengan taenia libera terletak di anterior. Berfungsi sebagai saluran transit materi fekal padat dan penyerapan sisa air sebelum disimpan di sigmoid.',
    arteri: 'Arteria colica sinistra (cabang pertama Arteria Mesenterica Inferior / IMA) dan rami ascendentes dari arteriae sigmoidales yang menyatu pada Arteria Marginalis Drummond.',
    vena: 'Vena colica sinistra yang mengalirkan darah ke Vena Mesenterica Inferior (IMV), yang kemudian berjalan vertikal ke kranial di retroperitoneum di sisi kiri flexura duodenojejunalis untuk bermuara ke Vena splenica.',
    inervasi: 'Parasimpatis: Nervi splanchnici pelvici (nervi erigentes, segmen spinal S2-S4) yang berjalan asenden via Plexus hypogastricus inferior dan Plexus mesentericus inferior; Simpatis: Segmen L1-L2 medulla spinalis via Nervi splanchnicus lumbales dan Plexus mesentericus inferior.',
    limfatik: 'Nodi lymphatici epicolic dan paracolic menuju Nodi colici sinistri dan Nodi mesenterici inferiores di sekitar pangkal IMA pada aorta.',
    korelasiKlinis: 'Karsinoma kolon kiri (karsinoma colon descendens dan sigmoid cenderung tumbuh sirkumferensial anular infiltratif / lesi "apple-core" atau "napkin-ring" pada barium enema; kaliber lumen sempit dan feses padat memicu manifestasi dini berupa perubahan pola defekasi, konstipasi progresif berselang diare palsu, hematochezia / darah segar bercampur feses, dan gejala obstruksi usus mekanik); Kolitis ulseratif distal.'
  },

  'colon sigmoideum': {
    type: 'organ',
    nameLatin: 'Colon Sigmoideum',
    nameId: 'Kolon Sigmoid',
    deskripsi: 'Segmen kolon intraperitoneal berbentuk huruf S sepanjang ~35-40 cm yang sangat mobile di fossa iliaca sinistra dan cavitas pelvis, terfiksasi oleh Mesocolon sigmoideum yang memiliki perlekatan berbentuk V terbalik. Membentang dari apertura pelvis superior hingga setinggi vertebra S3, tempat taenia coli bersatu membentuk lapisan muskularis longitudinal sirkumferensial kontinu rektum. Berfungsi sebagai reservoir penampung massa feses padat sebelum dihantarkan ke rektum untuk didefekasikan.',
    arteri: 'Arteriae sigmoidales (2-4 cabang arteri yang berasal dari Arteria Mesenterica Inferior / IMA), saling beranastomosis membentuk arkade sigmoidales sebelum berakhir di vasa recta.',
    vena: 'Venae sigmoidales yang bermuara ke Vena Mesenterica Inferior (IMV), lalu bermuara ke Vena splenica di belakang pankreas.',
    inervasi: 'Parasimpatis: Nervi splanchnici pelvici (radiks S2, S3, S4) melalui Plexus hypogastricus inferior (memacu motilitas propulsif dan relaksasi sfingter); Simpatis: Plexus mesentericus inferior (segmen L1-L2 via nervi splanchnici lumbales).',
    limfatik: 'Nodi lymphatici sigmoidales yang bermuara ke Nodi lymphatici mesenterici inferiores di pangkal IMA.',
    korelasiKlinis: 'Divertikulosis dan Divertikulitis kolon (paling sering terjadi di kolon sigmoid pada >90% kasus, akibat tingginya tekanan intraluminal segmentasi yang mendorong herniasi pseudodivertikulum mukosa-submukosa melalui celah lokus minoris resistentiae penetrasi vasa recta pada tunika muskularis; divertikulitis akut menimbulkan nyeri kuadran kiri bawah yang dijuluki "left-sided appendicitis", demam, leukositosis, risiko abses pelvik, fistula kolovesika, dan perforasi peritonitis fekal); Volvulus sigmoid (torsi kolon sigmoid pada basis mesokolon yang panjang dan sempit, tampak gambaran patognomonik "coffee bean sign" atau loop tapal kuda raksasa pada foto polos abdomen); Karsinoma kolorektal sigmoid.'
  },

  'rectum': {
    type: 'organ',
    nameLatin: 'Rectum',
    nameId: 'Rektum',
    deskripsi: 'Segmen terminal traktus digestivus tetap sepanjang ~12-15 cm yang membentang dari recto-sigmoid junction (setinggi vertebra S3) melintasi kurvatura sakrum (flexura sacralis) dan dasar pelvis (flexura perinealis / anorektal junction pada ujung bawah M. puborectalis) hingga canalis analis. Lapisan peritoneum menutupi 1/3 proksimal pada aspek anterior dan lateral, 1/3 tengah hanya pada anterior (membentuk dasar cavum Douglasi / Excavatio rectouterina pada wanita atau Excavatio rectovesicalis pada pria), sedangkan 1/3 distal berada di subperitoneal pelvis berdilatasi membentuk Ampulla recti. Mukosa memiliki tiga lipatan transversal permanen (Plicae transversae recti / Katup Houston). Berfungsi sebagai penampung sementara massa feses sebelum defekasi; peregangan mekanik dinding ampulla mengaktifkan baroreseptor peregangan yang memicu refleks defekasi.',
    arteri: '1/3 superior: Arteria rectalis superior (cabang terminal langsung Arteria Mesenterica Inferior / IMA); 1/3 media: Arteria rectalis media (cabang dari Arteria iliaca interna); 1/3 inferior: Arteria rectalis inferior (cabang dari Arteria pudenda interna yang berasal dari A. iliaca interna).',
    vena: 'Vena rectalis superior mengalirkan darah ke Vena Mesenterica Inferior (IMV -> Vena portae hepatis); Vena rectalis media dan Vena rectalis inferior mengalirkan darah ke Vena iliaca interna dan Vena pudenda interna (sistem vena sistemik kaval menuju IVC). Merupakan situs anastomosis portosistemik rektal krusial.',
    inervasi: 'Parasimpatis: Nervi splanchnici pelvici (radiks S2-S4 via Plexus hypogastricus inferior) yang menginduksi kontraksi dinding muskular rektum dan relaksasi Musculus sphincter ani internus untuk defekasi; Simpatis: Plexus hypogastricus superior dan nervi splanchnici lumbales (L1-L2) yang menghambat motilitas dan mempertahankan tonus sfingter untuk kontinensia feses.',
    limfatik: '2/3 superior mengalir ke Nodi pararectales lalu ke Nodi mesenterici inferiores; 1/3 inferior mengalir ke Nodi lymphatici iliaci interni dan nodi sacrales.',
    korelasiKlinis: 'Adenokarsinoma rektum (membutuhkan Total Mesorectal Excision / TME untuk diseksi radikal kelenjar mesorektal dengan preservasi pleksus saraf otonom pelvis demi mencegah disfungsi ereksi dan inkontinensia urin); Hemoroid interna (dilatasi bantalan vaskular pleksus venosus rectalis internus di atas linea pectinea, berdarah merah segar menetes saat defekasi tanpa rasa nyeri); Prolaps rektum; Nyeri alih panggul.'
  },

  'canalis analis': {
    type: 'organ',
    nameLatin: 'Canalis Analis',
    nameId: 'Saluran Anus (Kanalis Analis)',
    deskripsi: 'Segmen paling akhir traktus gastrointestinal sepanjang ~3-4 cm yang membentang dari cincin anorektal (dibentuk oleh sling otot puborectalis levator ani) hingga anus (margin anal). Dinding lumen memiliki Columnae anales Morgagni (6-10 lipatan vertikal), Valvulae anales, dan Sinus anales (tempat bermuara kelenjar kriptus anal yang menyekresi mukus pelumas feses). Terbagi dua zona embriologis fundamental oleh Linea Pectinea (Dentata): zona atas (derivat endodermal hindgut, epitel kolumnar, tanpa persarafan somatik) dan zona bawah (derivat ektodermal proktodeum, epitel skuamosa berstrata tanpa keratinisasi / anoderm, sangat sensitif somatik). Dikelilingi oleh dua aparatus sfingter: Sphincter ani internus (penebalan lapisan otot polos sirkular involunter otonom, memasok 70-80% tonus istirahat) dan Sphincter ani externus (otot lurik volunter yang dipersarafi N. pudendus S2-S4).',
    arteri: 'Di atas linea pectinea: Arteria rectalis superior (cabang IMA); Di bawah linea pectinea: Arteria rectalis inferior (cabang Arteria pudenda interna).',
    vena: 'Di atas linea pectinea: Vena rectalis superior bermuara ke Vena Mesenterica Inferior (sistem porta); Di bawah linea pectinea: Vena rectalis inferior bermuara via Vena pudenda interna ke Vena iliaca interna (sistem kaval/IVC).',
    inervasi: 'Di atas linea pectinea: Inervasi otonom viseral (Plexus hypogastricus inferior), hanya peka terhadap regangan tetapi insensibel terhadap nyeri tajam, suhu, atau sentuhan; Di bawah linea pectinea: Inervasi somatik sensorik oleh Nervus rectalis inferior (cabang Nervus pudendus S2-S4), luar biasa sensitif terhadap rangsang nyeri tajam, perabaan, dan suhu.',
    limfatik: 'Di atas linea pectinea mengalir ke Nodi lymphatici iliaci interni dan Nodi mesenterici inferiores; Di bawah linea pectinea mengalir ke Nodi lymphatici inguinales superficiales.',
    korelasiKlinis: 'Hemoroid eksterna (trombosis pleksus venosus rectalis externus di bawah linea pectinea yang dilapisi anoderm, menimbulkan nyeri hebat akut dan benjolan perianal tegang kebiruan); Fissura ani (robekan longitudinal mukosa anoderm distal dari linea pectinea, paling sering di komisura posterior pada jam 6 akibat pasase feses keras, menimbulkan nyeri tajam membakar hebat saat dan pasca defekasi); Abses perianal dan Fistula in ano (Hukum Goodsall: aturan lintasan fistula internal-eksternal berdasarkan jam linea transversalis anal); Karsinoma sel skuamosa kanal anal (terkait HPV risiko tinggi, bermetastasis ke kelenjar getah bening inguinal superfisial).'
  },

  'anal canal': {
    type: 'organ',
    nameLatin: 'Canalis Analis',
    nameId: 'Kanalis Analis',
    deskripsi: 'Saluran pembuangan defekasi akhir yang menembus dasar panggul perineum. Integritas kontinensia feses diatur oleh koordinasi sfingter ani internus, sfingter ani eksternus, dan angulus anorektal M. puborektalis.',
    arteri: 'Arteria rectalis superior di proksimal dan Arteria rectalis inferior di distal linea dentata.',
    vena: 'Anastomosis vena porta (V. rectalis superior) dan vena kava sistemik (V. rectalis inferior via V. pudenda interna).',
    inervasi: 'Otonom otonom di atas linea pectinea; Somatik sensoris tajam N. pudendus (S2-S4) di bawah linea pectinea.',
    limfatik: 'Nodi iliaci interni (proksimal) dan Nodi inguinales superficiales (distal).',
    korelasiKlinis: 'Inkontinensia alvi akibat ruptur sfingter ani saat persalinan (ruptur perineum grade III/IV); Inkontinensia pasca sfingterotomi; Pruritus ani.'
  },

  // =========================================================================
  // SISTEM HEPATO-BILIO-PANKREAS (LIVER, BILIARY TRACT, PANCREAS, SPLEEN)
  // =========================================================================
  'liver': {
    type: 'organ',
    nameLatin: 'Hepar',
    nameId: 'Hati (Hepar)',
    deskripsi: 'Kelenjar eksokrin dan organ metabolik terbesar di tubuh dengan berat ~1.5 kg, menempati kuadran kanan atas (hypochondrium dextra, epigastrium, dan meluas ke hypochondrium sinistra). Dibungkus oleh kapsul fibroelastis Glisson dan sebagian besar peritoneum viscerale (kecuali "bare area" / area nuda hepar yang kontak langsung dengan diafragma). Terdiri dari unit fungsional lobulus heksagonal klasik dengan hepatosit yang tersusun dalam lempeng, sinusoid darah bertingkap dengan sel endotel dan makrofag residen sel Kupffer, sel stelata hepatik (Ito) penyimpan vitamin A dan penginduksi fibrosis, serta kanalikuli biliaris. Berperan multi-fungsional krusial: produksi dan sekresi cairan empedu (~800-1000 mL/hari untuk digesti dan emulsifikasi lemak usus), metabolisme karbohidrat (glikogenesis, glikogenolisis, glukoneogenesis), metabolisme lipid (sintesis kolesterol, lipoprotein VLDL/LDL/HDL, ketogenesis), sintesis protein plasma utama (albumin, faktor koagulasi I, II, V, VII, IX, X, protein komplemen), siklus urea untuk detoksifikasi amonia, serta biotransformasi dan klirens obat/toksin fase I (sitokrom P450) dan fase II (konjugasi glukuronidasi/sulfasi).',
    arteri: 'Arteria hepatica propria (cabang Truncus coeliacus melalui Arteria hepatica communis) bercabang di porta hepatis menjadi Ramus dexter dan Ramus sinister arteriae hepaticae propriae, memasok 20-25% volume darah total hepar yang kaya akan oksigen.',
    vena: 'Vena portae hepatis (dibentuk oleh persatuan V. mesenterica superior dan V. splenica) memasok 75-80% volume darah hepar yang kaya nutrisi, hormon pankreas, dan produk degradasi usus. Darah sinusoid bercampur mengalir ke vena sentralis lalu dihantarkan keluar via tiga Venae hepaticae utama (V. hepatica dextra, V. hepatica intermedia, dan V. hepatica sinistra) yang bermuara langsung ke Vena Cava Inferior (IVC).',
    inervasi: 'Plexus hepaticus (cabang dari Plexus coeliacus): serabut simpatis berasal dari segmen T7-T10 medula spinalis via Nervus splanchnicus major; serabut parasimpatis berasal dari Truncus vagalis anterior (Nervus vagus CN X). Kapsula Glisson dan peritoneum diafragmatika yang menutupi hepar dipersarafi serabut sensorik somatik dari Nervus phrenicus dexter (radiks C3-C5).',
    limfatik: 'Saluran limfe profundus mengalir mengikuti trias porta menuju Nodi lymphatici hepatici di porta hepatis lalu ke Nodi coeliaci; saluran limfe superfisial pada bare area mengalir menembus diafragma menuju Nodi phrenici dan Nodi mediastinales posteriores.',
    korelasiKlinis: 'Sirosis hepatis (stadium akhir fibrosis difus hati akibat hepatitis kronis B/C atau alkohol dengan distorsi arsitektur hepar dan pembentukan nodul regeneratif abnormal); Komplikasi sirosis: Hipertensi porta (gradien tekanan vena hepatik >10 mmHg memicu varises esofagus, gastropati hipertensi porta, splenomegali kongestif, caput medusae pada vena paraumbilikal dinding abdomen, dan asites masif), Ensefalopati hepatikum (kegagalan detoksifikasi amonia yang menembus sawar darah otak), dan Koagulopati (defisiensi sintesis faktor koagulasi hati); Karsinoma Hepatoseluler (HCC, tumor primer ganas hepar dengan penanda tumor alfa-fetoprotein / AFP); Ikterus (hepatoseluler vs obstruktif).'
  },

  'hepar': {
    type: 'organ',
    nameLatin: 'Hepar',
    nameId: 'Hati / Hepar',
    deskripsi: 'Pusat metabolisme biokimia utama tubuh di cavitas abdominalis kuadran kanan atas. Mengatur homeostasis glukosa, sintesis protein koagulasi, degradasi heme menjadi bilirubin, dan sekresi empedu ke sistem duktus biliaris.',
    arteri: 'Arteria hepatica propria bercabang menjadi ramus dexter et sinister di porta hepatis.',
    vena: 'Sistem ganda: Vena Portae Hepatis (aliran masuk nutrisi 75-80%) dan Venae Hepaticae (aliran keluar menuju IVC).',
    inervasi: 'Plexus hepaticus (simpatis T7-T10 via plexus coeliacus & parasimpatis N. vagus). Kapsul Glisson oleh N. phrenicus dexter.',
    limfatik: 'Nodi hepatici di porta hepatis ke Nodi coeliaci dan nodi phrenici diafragma.',
    korelasiKlinis: 'Fatty liver disease (NAFLD/NASH); Hepatitis virus akut & kronis; Gagal hati fulminan; Abses hati amebik/piogenik.'
  },

  'lobus dexter': {
    type: 'organ',
    nameLatin: 'Lobus Dexter Hepatis',
    nameId: 'Lobus Kanan Hati',
    deskripsi: 'Lobus hati anatomis terbesar yang mencakup sekitar 5/6 volume massa hepar total. Terletak di kuadran kanan atas di bawah hemidiafragma dexter, dipisahkan dari lobus sinister di facies diaphragmatica oleh perlekatan Ligamentum falciforme dan Ligamentum teres hepatis, serta di facies visceralis oleh fossa vesicae biliaris dan sulcus venae cavae. Berdasarkan pembagian fungsional segmental Couinaud (dipisahkan oleh bidang utama Cantlie dari fossa kandung empedu ke IVC), lobus dexter fungsional terdiri dari Segmen V dan Segmen VIII (sektor anterior dexter) serta Segmen VI dan Segmen VII (sektor posterior dexter).',
    arteri: 'Ramus dexter arteriae hepaticae propriae (yang umumnya mencabangkan Arteria cystica ke kandung empedu).',
    vena: 'Ramus dexter venae portae hepatis; Aliran vena balik dialirkan melalui Vena hepatica dextra langsung ke Vena Cava Inferior (IVC).',
    inervasi: 'Plexus hepaticus otonom dan serabut somatosensorik dari Nervus phrenicus dexter pada facies superior.',
    limfatik: 'Nodi lymphatici hepatici di porta hepatis menuju Nodi coeliaci.',
    korelasiKlinis: 'Lokasi paling umum untuk abses hati piogenik dan abses hati ameba (karena volume aliran darah porta dominan ke lobus kanan akibat aliran laminer darah dari SMV); Metastasis karsinoma kolorektal; Tindakan Right Hepatectomy (hemihepatektomi dekstra) yang memerlukan preservasi hati residual minimal 20-30% volume parenkim normal.'
  },

  'lobus sinister': {
    type: 'organ',
    nameLatin: 'Lobus Sinister Hepatis',
    nameId: 'Lobus Kiri Hati',
    deskripsi: 'Lobus hati yang terletak di sebelah kiri ligamentum falciforme dan fissura ligamenti venosi, berukuran lebih kecil dan pipih dibanding lobus kanan. Menempati regio epigastrium dan meluas ke hypochondrium sinistra. Facies visceralisnya memiliki cekungan luas (Impressio gastrica) yang menampung facies anterior lambung dan esofagus abdominalis. Secara fungsional fisiologis menurut klasifikasi Couinaud, lobus kiri sejati terdiri dari Segmen II (segmen posterolateral kiri) dan Segmen III (segmen anterolateral kiri).',
    arteri: 'Ramus sinister arteriae hepaticae propriae.',
    vena: 'Ramus sinister venae portae hepatis; Darah vena dialirkan keluar via Vena hepatica sinistra menuju Vena Cava Inferior.',
    inervasi: 'Plexus hepaticus dengan serabut parasimpatis kaya dari ramus hepaticus Truncus vagalis anterior (N. vagus).',
    limfatik: 'Nodi lymphatici hepatici dan nodi gastrici sinistri menuju Nodi coeliaci.',
    korelasiKlinis: 'Tindakan Left Lateral Sectionectomy (reseksi segmen II dan III) atau Left Hemihepatectomy; Pilihan utama segmen donor hepar dewasa ke anak (Living Donor Liver Transplantation / LDLT) karena anatomi vaskular dan biliaris yang kompak dan dapat meregenerasi dengan cepat.'
  },

  'lobus caudatus': {
    type: 'organ',
    nameLatin: 'Lobus Caudatus Hepatis (Lobus Spigelii)',
    nameId: 'Lobus Kaudatus Hati (Segmen I)',
    deskripsi: 'Lobus hepar posterior yang secara anatomis dan vaskular berdiri sendiri (independen), terletak di facies visceralis di antara sulcus venae cavae inferioris di sisi kanan dan fissura ligamenti venosi di sisi kiri. Secara fisiologis berkorespondensi penuh dengan Segmen I sistem Couinaud. Memiliki tonjolan Processus caudatus yang menghubungkannya ke lobus dexter dan Processus papillaris di inferior. Berbeda dengan segmen hepar lainnya, lobus kaudatus menerima suplai vaskular ganda dari ramus dexter dan sinister cabang arteri hepatika dan vena porta, serta memiliki drainase vena otonom langsung ke IVC melalui beberapa venula kecil.',
    arteri: 'Menerima percabangan ganda langsung dari Ramus dexter dan Ramus sinister arteriae hepaticae propriae.',
    vena: 'Menerima cabang porta ganda dari Ramus dexter dan Ramus sinister venae portae; Drainase vena langsung menuju retrohepatic Vena Cava Inferior (IVC) melalui beberapa Venae hepaticae breves (Spigelian veins).',
    inervasi: 'Plexus hepaticus otonom.',
    limfatik: 'Nodi lymphatici phrenici inferiores dan nodi coeliaci.',
    korelasiKlinis: 'Hipertrofi kompensatori masif lobus kaudatus pada Sindrom Budd-Chiari (oklusi trombosis ketiga vena hepatika utama; lobus kaudatus tetap bertahan dan mengalami pembesaran kompensasi karena drainase venanya langsung bermuara ke IVC tanpa melalui vena hepatika mayor).'
  },

  'lobus quadratus': {
    type: 'organ',
    nameLatin: 'Lobus Quadratus Hepatis',
    nameId: 'Lobus Kuadratus Hati (Segmen IVb)',
    deskripsi: 'Area segi empat terlihat di facies visceralis hepar, dibatasi di anterior oleh margo inferior hepar, di posterior oleh porta hepatis, di sisi kanan oleh fossa vesicae biliaris, dan di sisi kiri oleh fissura ligamenti teretis. Meskipun secara anatomis tampak berada di sisi kanan ligamentum falciforme, secara fungsional embriologis dan vaskular lobus kuadratus adalah bagian dari hati kiri yang berkorespondensi dengan Segmen IVb (sektor medial sinister inferior) pada sistem Couinaud.',
    arteri: 'Cabang medial dari Ramus sinister arteriae hepaticae propriae.',
    vena: 'Ramus sinister venae portae hepatis; Drainase vena dialirkan melalui Vena hepatica intermedia.',
    inervasi: 'Plexus hepaticus (komponen simpatis dan parasimpatis).',
    limfatik: 'Nodi lymphatici hepatici di sepanjang porta hepatis menuju Nodi coeliaci.',
    korelasiKlinis: 'Invasi lokal langsung karsinoma vesika fellea ke parenkim lobus kuadratus (memerlukan kolesistektomi radikal dengan reseksi baji / wedge resection parenkim segmen IVb dan V hepar untuk mencapai batas bebas tumor R0).'
  },

  'gallbladder': {
    type: 'organ',
    nameLatin: 'Vesica Biliaris / Vesica Fellea',
    nameId: 'Kandung Empedu (Vesika Fellea)',
    deskripsi: 'Organ berongga berbentuk buah pir sepanjang ~7-10 cm dengan kapasitas normal 30-50 mL, bersarang di fossa vesicae felleae pada facies visceralis hepar di perbatasan segmen IVb dan V. Terdiri atas 4 bagian anatomis: Fundus (bagian distal membulat yang memproyeksikan diri ke dinding anterior abdomen pada perpotongan arcus costalis kanan dan margo lateralis M. rectus abdominis), Corpus (badan utama yang menempel pada hepar), Infundibulum (kantong Hartmann, tonjolan di dekat leher), dan Collum (leher berbentuk huruf S yang berlanjut menjadi ductus cysticus). Berfungsi menampung, memekatkan cairan empedu hepar hingga 5-10 kali lipat melalui absorpsi aktif elektrolit Na+, Cl-, dan air oleh epitel mukosa berlipat, serta mengeluarkan empedu pekat ke duodenum saat terjadi kontraksi muskular yang distimulasi hormon Kolesistokinin (CCK) dari sel I mukosa usus halus pasca konsumsi lemak.',
    arteri: 'Arteria cystica (paling lazim dicabangkan dari Ramus dexter arteriae hepaticae propriae di dalam Trigonum Calot / Trigonum Cholecystohepaticum yang dibatasi oleh ductus cysticus, ductus hepaticus communis, dan facies inferior hepar).',
    vena: 'Vena cystica dari collum mengalirkan darah ke Vena portae hepatis; vena-vena kecil dari fundus dan corpus menembus langsung ke dasar hepar menuju kapiler sinusoid hepar.',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) menstimulasi kontraksi muskularis dan relaksasi sfingter Oddi; Simpatis: Segmen T7-T9 via Nervus splanchnicus major dan Plexus coeliacus menghambat kontraksi; Serabut aferen sensorik berjalan bersama Nervus phrenicus dexter (radiks C3-C5), memproyeksikan nyeri alih somatik ke puncak bahu kanan dan sudut inferior skapula kanan (Tanda Boas).',
    limfatik: 'Nodus lymphaticus cysticus (Kelenjar Lund atau Mascagni) di leher kandung empedu, yang mengalirkan limfe ke Nodi lymphatici hepatici di porta hepatis lalu ke Nodi coeliaci.',
    korelasiKlinis: 'Kolelitiasis (pembentukan kalkulus / batu empedu kolesterol pada 80% kasus atau batu pigmen kalsium bilirubinat; faktor risiko 4F: Female, Forty, Fat, Fertile); Kolesistitis akut (inflamasi akut dinding kandung empedu akibat impaksi kalkulus pada duktus sistikus dengan tanda Murphy positif: henti inspirasi mendadak akibat nyeri tajam saat palpasi subkostal kanan saat inspirasi dalam); Empiema dan perforasi kandung empedu; Kolesistektomi laparoskopik (prosedur bedah elektif tersering, identifikasi "Critical View of Safety" Strasberg di Trigonum Calot sangat krusial untuk mencegah cedera iatrogenik duktus biliaris utama).'
  },

  'vesica fellea': {
    type: 'organ',
    nameLatin: 'Vesica Fellea / Vesica Biliaris',
    nameId: 'Vesika Fellea (Kandung Empedu)',
    deskripsi: 'Kantung penampung dan pemekat empedu hepar di permukaan viseral lobus kanan hati. Melakukan evakuasi empedu secara berkala ke duodenum melalui koordinasi neurohormonal kolesistokinin (CCK) dan tonus parasimpatis.',
    arteri: 'Arteria cystica di dalam Trigonum Calot.',
    vena: 'Vena cystica ke Vena Portae Hepatis.',
    inervasi: 'Otonom via Plexus coeliacus (simpatis T7-T9 & parasimpatis CN X). Aferen somatik via N. phrenicus dexter.',
    limfatik: 'Nodus cysticus Lund/Mascagni ke nodi hepatici porta hepatis.',
    korelasiKlinis: 'Kolesistitis kronis (kandung empedu porselen / porcelain gallbladder dengan risiko adenokarsinoma vesika fellea); Polip kandung empedu; Biliary colic pasca makan makanan berlemak.'
  },

  'ductus cysticus': {
    type: 'organ',
    nameLatin: 'Ductus Cysticus',
    nameId: 'Saluran Kandung Empedu (Duktus Sistukus)',
    deskripsi: 'Saluran sempit berdiameter 2-3 mm dan panjang ~3-4 cm yang menghubungkan collum vesicae felleae dengan ductus hepaticus communis untuk membentuk ductus choledochus. Lumen mukosanya memiliki lipatan spiral lipatan sabit permanen yang disebut Valvula spiralis Heisteri (katup Heister). Berfungsi mengarahkan aliran empedu dua arah: mengalirkan empedu encer hepar ke kandung empedu saat sfingter Oddi menutup (fase interdigestif) dan menyalurkan empedu pekat ke ductus choledochus saat kantung empedu berkontraksi (fase digestif), sekaligus menjaga lumen tetap paten di bawah variasi tekanan intraluminal.',
    arteri: 'Arteria cystica (cabang Ramus dexter arteriae hepaticae propriae).',
    vena: 'Vena cystica yang bermuara ke Vena portae hepatis.',
    inervasi: 'Plexus hepaticus (serabut simpatis dan serabut parasimpatis N. vagus).',
    limfatik: 'Nodus cysticus (Lund) di dekat persambungan sistikohepatika.',
    korelasiKlinis: 'Impaksi batu empedu di leher kantong empedu / duktus sistikus memicu kolik bilier akut; Sindrom Mirizzi (impaksi batu empedu besar di duktus sistikus atau kantong Hartmann yang memicu inflamasi kronis dan kompresi mekanik eksternal pada ductus hepaticus communis yang berjalan di sebelahnya, menyebabkan ikterus obstruktif tanpa koledokolitiasis); Variasi anatomis insersi duktus sistikus (insersi rendah, spiral anterior/posterior, atau insersi langsung ke hepar) yang rentan cedera bedah.'
  },

  'ductus choledochus': {
    type: 'organ',
    nameLatin: 'Ductus Choledochus (Ductus Biliaris)',
    nameId: 'Saluran Empedu Utama (Duktus Koledokus)',
    deskripsi: 'Saluran biliaris ekstrahepatik utama sepanjang ~7-8 cm dan berdiameter luminal normal <6 mm yang terbentuk dari gabungan Ductus cysticus dan Ductus hepaticus communis. Terbagi menjadi 4 segmen: Pars supraduodenalis (berjalan di dalam ligamentum hepatoduodenale di tepi bebas omentum minus, di anterior foramen Winslowi, berposisi di anterolateral kanan terhadap Arteria hepatica propria dan di anterior Vena portae hepatis), Pars retroduodenalis (melintas di posterior pars superior duodeni), Pars infraduodenalis/pancreatica (menembus alur posterior caput pancreatis), dan Pars intraduodenalis (menembus dinding medial pars descendens duodeni secara oblik). Di dinding duodenum, ductus choledochus umumnya bergabung dengan ductus pancreaticus major (Wirsungi) membentuk pelebaran Ampulla hepatopancreatica (Vater) yang bermuara di Papilla duodeni major. Aliran empedu dan getah pankreas diregulasi oleh cincin otot polos Musculus sphincter ampullae hepatopancreaticae (Sphincter Oddi).',
    arteri: 'Disuplai secara longitudinal aksial oleh pleksus mikrovaskular (posisi jam 3 dan jam 9) dari Arteria cystica (proksimal), Ramus dexter arteriae hepaticae propriae, Arteria gastroduodenalis, dan Arteria pancreaticoduodenalis superior posterior (distal).',
    vena: 'Vena pancreaticoduodenalis superior posterior dan venula pleksus epikoledokal yang bermuara langsung ke Vena portae hepatis.',
    inervasi: 'Plexus hepaticus dan serabut otonom dari Plexus coeliacus (Parasimpatis N. vagus merelaksasikan Sphincter Oddi; Simpatis menginduksi vasokonstriksi arteriol saluran).',
    limfatik: 'Nodi lymphatici hepatici di sepanjang ligamentum hepatoduodenale menuju Nodi coeliaci dan nodi pancreaticoduodenales.',
    korelasiKlinis: 'Koledokolitiasis (batu saluran empedu sekunder akibat migrasi batu kandung empedu atau primer, memicu ikterus obstruktif dengan bilirubin direk tinggi, feses akolis seperti dempul, urine gelap pekat seperti teh); Kolangitis akut asenden (infeksi bakteri piogenik saluran empedu tersumbat, ditandai Trias Charcot: demam tinggi menggigil, ikterus, nyeri perut kuadran kanan atas; atau Pentad Reynolds jika ditambah syok septik hipotensif dan penurunan kesadaran/letargi, merupakan kedaruratan bedah dekompresi bilier via ERCP); Kolangiokarsinoma (kanker saluran empedu, termasuk Tumor Klatskin pada bifurkasio duktus hepatikus).'
  },

  'biliary duct': {
    type: 'organ',
    nameLatin: 'Ductus Choledochus / Ductus Biliaris',
    nameId: 'Duktus Biliaris (Saluran Empedu)',
    deskripsi: 'Sistem saluran penyalur empedu yang menghantarkan cairan empedu dari kanalikuli biliaris hepar, duktus hepatikus komunis, hingga bermuara ke lumen duodenum untuk proses digesti dan absorpsi lipid serta ekskresi bilirubin.',
    arteri: 'Cabang-cabang longitudinal dari A. cystica, A. hepatica propria, dan A. pancreaticoduodenalis superior posterior.',
    vena: 'Pleksus vena epikoledokal ke Vena Portae Hepatis.',
    inervasi: 'Plexus hepaticus (Parasimpatis motorik N. vagus dan simpatis coeliacus).',
    limfatik: 'Nodi lymphatici hepatici dan nodi coeliaci.',
    korelasiKlinis: 'Striktur bilier pasca operasi kolesistektomi; Kista koledokus kongenital (klasifikasi Todani); Kolangitis Sklerosing Primer (PSC).'
  },

  'pancreas': {
    type: 'organ',
    nameLatin: 'Pancreas',
    nameId: 'Pankreas',
    deskripsi: 'Kelenjar lonjong retroperitoneal sekunder memanjang melintang di dinding posterior abdomen (setinggi vertebra L1-L2) di dasar bursa omentalis di belakang lambung. Memiliki panjang ~15-20 cm dan terbagi menjadi Caput, Processus uncinatus, Collum, Corpus, dan Cauda. Memiliki dua fungsi fungsional fundamental: Eksokrin (asini serosa memproduksi ~1.5-2 liter cairan pankreas alkalis jernih kaya bikarbonat HCO3- dan enzim pencernaan esensial: tripsinogen, kimotripsinogen, prokarboksipeptidase, alfa-amilase pankreas, lipase pankreas, dan ribonuklease yang disalurkan melalui Ductus pancreaticus major Wirsungi dan Ductus accessorius Santorini ke duodenum) dan Endokrin (Pulau Langerhans menyumbang ~1-2% massa kelenjar, terdiri dari sel beta penghasil hormon insulin penurun glukosa, sel alfa penghasil hormon glukagon penaik glukosa, sel delta penghasil somatostatin penghambat parakrin, dan sel PP penghasil polipeptida pankreas).',
    arteri: 'Caput & Processus uncinatus: Arteria pancreaticoduodenalis superior anterior dan posterior (cabang A. gastroduodenalis dari Truncus coeliacus) yang beranastomosis membentuk arkade dengan Arteria pancreaticoduodenalis inferior anterior dan posterior (cabang Arteria Mesenterica Superior / SMA); Collum, Corpus, & Cauda: Diperdarahi oleh rami pancreatici multipel dari Arteria splenica (termasuk Arteria pancreatica dorsalis, Arteria pancreatica magna, dan Arteria caudae pancreatis).',
    vena: 'Venae pancreaticoduodenales bermuara ke Vena mesenterica superior (SMV) dan Vena portae hepatis; Venae pancreaticae dari korpus dan kauda bermuara ke Vena splenica di facies posterior pankreas.',
    inervasi: 'Parasimpatis: Nervus vagus (CN X) melalui Plexus coeliacus dan Plexus mesentericus superior yang menstimulasi sekresi getah asinar eksokrin dan sekresi insulin sel beta; Simpatis: Segmen T6-T10 medula spinalis via Nervus splanchnicus major dan Plexus coeliacus yang menginduksi vasokonstriksi kuat dan menghambat sekresi eksokrin.',
    limfatik: 'Nodi lymphatici pancreaticosplenici sepanjang arteria splenica, nodi pancreaticoduodenales, nodi coeliaci, dan nodi mesenterici superiores.',
    korelasiKlinis: 'Pankreatitis akut (inflamasi nekrotikans autodigesti parenkim pankreas akibat aktivasi enzim proteolitik tripsin prematur intraseluler, paling sering dipicu impaksi batu empedu di ampulla Vater atau toksisitas alkohol akut; ditandai nyeri epigastrium hebat menusuk tembus ke punggung yang mereda saat posisi genupectoral / duduk condong ke depan, peningkatan serum amilase/lipase >3x batas atas normal, risiko komplikasi sistemik SIRS, ARDS, dan tanda Cullen / Grey-Turner); Adenokarsinoma duktal pankreas (kanker ganas agresif dengan prognosis buruk, sering bermetastasis dini ke hati dan peritoneum); Pseudokista pankreas di cavum bursae omentalis.'
  },

  'caput pancreatis': {
    type: 'organ',
    nameLatin: 'Caput Pancreatis (termasuk Processus Uncinatus)',
    nameId: 'Kepala Pankreas',
    deskripsi: 'Bagian terlebar dan paling tebal dari pankreas, bersarang erat di dalam cekungan tapal kuda duodenum (pars descendens dan pars horizontalis) di anterior vertebra L2. Memiliki tonjolan Processus uncinatus di sudut inferomedial yang melengkung ke posterior Vasa Mesenterica Superior (SMA dan SMV). Di facies posterior caput terdapat sulcus vertikal yang ditempati oleh Ductus Choledochus sebelum bermuara ke dinding duodenum, serta bersentuhan erat langsung dengan Vena Cava Inferior (IVC) dan Vena renalis dextra.',
    arteri: 'Arkade ganda anastomosis antara Arteria pancreaticoduodenalis superior (anterior & posterior dari A. gastroduodenalis) dan Arteria pancreaticoduodenalis inferior (anterior & posterior dari SMA).',
    vena: 'Vena pancreaticoduodenalis superior (bermuara ke Vena portae hepatis) dan Vena pancreaticoduodenalis inferior (bermuara ke SMV).',
    inervasi: 'Parasimpatis dari Nervus vagus (CN X) dan Simpatis via Plexus coeliacus dan Plexus mesentericus superior.',
    limfatik: 'Nodi lymphatici pancreaticoduodenales superiores et inferiores menuju nodi coeliaci dan nodi mesenterici superiores.',
    korelasiKlinis: 'Adenokarsinoma caput pancreatis (mencakup ~70% dari semua kasus kanker pankreas; kompresi tumor pada ductus choledochus intrapankreatik memicu manifestasi khas "Painless Jaundice" / ikterus obstruktif tanpa nyeri, pruritus, sklera ikterik, feses dempul, dan Hukum Courvoisier positif: kandung empedu membesar teraba tanpa nyeri tekan); Reseksi bedah kuratif Prosedur Whipple (Pankreatikoduodenektomi: pengangkatan caput pankreas, duodenum, antrum lambung, kandung empedu, dan duktus koledokus distal).'
  },

  'corpus pancreatis': {
    type: 'organ',
    nameLatin: 'Corpus Pancreatis',
    nameId: 'Badan Pankreas',
    deskripsi: 'Segmen pankreas yang memanjang transversal melintasi kolumna vertebralis (diskus L1-L2) dan aorta abdominalis dari collum ke arah kiri menuju kauda. Berpenampang prisma segitiga dengan tiga facies: Facies anterior (menghadap ke bursa omentalis dan facies posterior lambung), Facies posterior (melekat avaskular pada aorta, pangkal SMA, glandula suprarenalis sinistra, ren sinister, dan vasa renalia sinistra), serta Facies inferior. Margo superior berbatasan erat dengan perjalanan berliku Arteria splenica; facies posterior ditempeli erat oleh lintasan Vena splenica.',
    arteri: 'Arteria pancreatica dorsalis, Arteria pancreatica magna (arteri von Haller), dan rami pancreatici dari Arteria splenica.',
    vena: 'Venae pancreaticae multipel berukuran pendek yang bermuara langsung ke facies anterior Vena splenica.',
    inervasi: 'Plexus coeliacus dan plexus periarterial splenicus.',
    limfatik: 'Nodi lymphatici pancreaticosplenici di sepanjang margo superior corpus menuju Nodi coeliaci.',
    korelasiKlinis: 'Karsinoma corpus pancreatis sering terlambat terdiagnosis karena tidak memicu ikterus dini, bermanifestasi sebagai nyeri tumpul punggung akibat invasi dini ke pleksus coeliacus dan splanknik retroperitoneal; Formasi pseudokista pankreas post-pankreatitis di dinding posterior bursa omentalis yang menekan lambung ke anterior.'
  },

  'cauda pancreatis': {
    type: 'organ',
    nameLatin: 'Cauda Pancreatis',
    nameId: 'Ekor Pankreas',
    deskripsi: 'Ujung terminal pankreas yang menyempit dan meruncing ke arah kuadran kiri atas, melintasi Ligamentum splenorenale (lienorenale) hingga bersentuhan langsung dengan hilum lienale dan flexura coli sinistra. Merupakan satu-satunya bagian pankreas yang berstatus intraperitoneal dan memiliki mobilitas relatif. Mengandung densitas Pulau Langerhans endokrin per gram jaringan paling tinggi di seluruh kelenjar pankreas.',
    arteri: 'Arteria caudae pancreatis (cabang terminal dari Arteria splenica atau Arteria gastroomentalis sinistra).',
    vena: 'Vena caudae pancreatis yang bermuara ke Vena splenica.',
    inervasi: 'Plexus splenicus otonom (cabang simpatis dan serabut parasimpatis N. vagus).',
    limfatik: 'Nodi lymphatici pancreaticolienales (splenici) di hilum limpa menuju Nodi coeliaci.',
    korelasiKlinis: 'Cedera iatrogenik pada cauda pancreatis saat splenektomi darurat (akibat kedekatan anatomis di hilum lienale, transeksi atau ligasi kauda yang tidak disengaja dapat memicu fistula pankreas pasca bedah dengan kebocoran enzim dan abses subfrenik kiri); Lokasi predileksi umum tumor neuroendokrin pankreas fungsional (seperti Insulinoma atau Glukagonoma).'
  },

  'spleen': {
    type: 'organ',
    nameLatin: 'Lien / Splen',
    nameId: 'Limpa (Lien)',
    deskripsi: 'Organ limfoid perifer sekunder terbesar di tubuh (~12x7x4 cm, berat ~150 gram) yang terletak intraperitoneal di kuadran kiri atas (hypochondrium sinistra), terlindung di bawah sangkar toraks posterolateral setinggi costae IX-XI kiri dengan aksis panjang sejajar costa X. Terbungkus kapsul fibrosa tipis dan memiliki Facies diaphragmatica konveks serta Facies visceralis dengan impressio gastrica, renalis, colica, dan hilum lienale. Terbagi menjadi Pulpa alba (jaringan limfoid periarteriolar sheath / PALS kaya sel T dan folikel limfoid kaya sel B untuk respon imun terhadap antigen dalam sirkulasi) dan Pulpa rubra (korda limfoid Billroth dan sinusoid vaskular bertingkap untuk filtrasi dan fagositosis eritrosit tua/rusak oleh makrofag, daur ulang zat besi hemoglobin, pembersihan bakteri berkapsul melalui opsonisasi, dan reservoir trombosit tubuh ~30%). Terfiksasi ke gaster melalui Ligamentum gastrosplenicum dan ke ginjal kiri melalui Ligamentum splenorenale.',
    arteri: 'Arteria splenica / lienalis (cabang terbesar, terpanjang, dan paling berliku-liku dari Truncus coeliacus) yang bercabang menjadi 5-6 rami terminalis di hilum lienale.',
    vena: 'Vena splenica / lienalis yang berjalan mendatar dari hilum lienale di facies posterior korpus dan kauda pankreas, bergabung dengan Vena mesenterica superior (SMV) di posterior collum pancreatis untuk membentuk Vena Portae Hepatis.',
    inervasi: 'Plexus splenicus (berasal dari Plexus coeliacus), membawa serabut vasomotor simpatis postganglionik segmen T6-T8 medula spinalis untuk vasokonstriksi arteriolar dan kontraksi kapsul limpa.',
    limfatik: 'Nodi lymphatici pancreaticosplenici di hilum lienale yang mengalirkan cairan limfe ke Nodi lymphatici coeliaci.',
    korelasiKlinis: 'Ruptur lienalis (organ intra-abdominal paling rentan mengalami cedera ruptur pada trauma tumpul abdomen atau fraktur costae IX-XI kiri; akibat kapsul tipis dan vaskularisasi masif, ruptur memicu hemoperitoneum masif, syok hemoragik fatal, dan Tanda Kehr: nyeri alih tajam di puncak bahu kiri akibat iritasi darah pada peritoneum diafragma N. phrenicus C3-C5); Splenomegali kongestif pada hipertensi porta sirosis hepatis memicu hipersplenisme (sitopenia darah tepi / pansitopenia sekunder akibat hipersekuestrasi eritrosit, trombosit, dan leukosit); Risiko fatal Sepsis Pasca Splenektomi (Overwhelming Post-Splenectomy Infection / OPSI) oleh bakteri berkapsul (Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae) yang membutuhkan vaksinasi profilaksis elektif.'
  },

  'lien': {
    type: 'organ',
    nameLatin: 'Lien',
    nameId: 'Limpa',
    deskripsi: 'Organ hemopoetik dan limfoid intraperitoneal di bawah diafragma kiri. Berperan menyaring partikel asing dan eritrosit senesen dari aliran darah serta memicu respon imunitas seluler dan humoral.',
    arteri: 'Arteria splenica (cabang Truncus coeliacus).',
    vena: 'Vena splenica yang menyatu dengan SMV membentuk Vena Portae Hepatis.',
    inervasi: 'Plexus splenicus dari Plexus coeliacus (serabut simpatis vasomotor).',
    limfatik: 'Nodi pancreaticolienales ke Nodi coeliaci.',
    korelasiKlinis: 'Splenomegali masif pada malaria atau leukemia mielositik kronis (CML); Infark limpa pada anemia sel sabit.'
  },

  // =========================================================================
  // PERITONEUM, OMENTUM, & MESENTERIUM
  // =========================================================================
  'peritoneum': {
    type: 'organ',
    nameLatin: 'Peritoneum',
    nameId: 'Peritoneum (Selaput Rongga Perut)',
    deskripsi: 'Membran serosa tunggal kontinu terluas di tubuh yang melapisi dinding cavitas abdominopelvica (Peritoneum parietale) dan membungkus organ-organ visera abdomen internal (Peritoneum viscerale). Ruang potensial sempit di antara kedua lamina ini disebut Cavitas peritonealis, yang dalam kondisi fisiologis mengandung sekitar 30-50 mL cairan serosa jernih pelumas untuk memfasilitasi gerakan bebas peristaltik usus tanpa friksi. Membentuk lipatan-lipatan kompleks: Mesenterium, Mesocolon, Omentum majus, Omentum minus, serta berbagai ligamentum peritoneal yang membagi cavitas peritonealis menjadi Cavitas major (greater sac) dan Bursa omentalis (lesser sac) yang saling berkomunikasi melalui Foramen epiploicum Winslowi.',
    arteri: 'Peritoneum parietale disuplai oleh cabang vaskular dinding abdomen dan pelvis regional (Arteriae epigastricae superior et inferior, Aa. intercostales, A. subcostalis, Aa. lumbales, dan cabang-cabang A. iliaca interna); Peritoneum viscerale disuplai oleh arteri yang memperdarahi organ visera yang dibungkusnya (cabang-cabang Truncus coeliacus, Arteria Mesenterica Superior, dan Arteria Mesenterica Inferior).',
    vena: 'Peritoneum parietale dialirkan ke sirkulasi vena dinding tubuh sistemik menuju Vena Cava Inferior (IVC); Peritoneum viscerale dialirkan melalui vena organ visera menuju sistem Vena Portae Hepatis.',
    inervasi: 'Peritoneum parietale dipersarafi secara somatosensorik oleh Nervi intercostales T7-T11, Nervus subcostalis (T12), cabang Nervus iliohypogastricus & ilioinguinalis (L1), serta Nervus phrenicus (C3-C5) pada diafragma sentral; sangat sensitif terhadap nyeri tajam terlokalisir akurat, suhu, tusukan, dan regangan mekanis; Peritoneum viscerale hanya dipersarafi oleh serabut aferen otonom sensorik viseral yang mendampingi jaras simpatis/parasimpatis; tidak sensitif terhadap sayatan/suhu, tetapi sensitif terhadap regangan berlebih, tarikan mesenterium, iskemia, dan spasme otot polos (menghasilkan nyeri tumpul alih difus).',
    limfatik: 'Drainase limfatik sangat ekstensif melalui celah lakunar pada facies inferior diafragma menuju Nodi lymphatici mediastinales anteriores dan Ductus thoracicus, serta ke Nodi lumbales aortici dan nodi mesenterici.',
    korelasiKlinis: 'Peritonitis akut (inflamasi rongga peritoneum akibat perforasi organ berongga seperti perforasi ulkus peptikum atau apendisitis gangrenosa; iritasi somatik peritoneum parietale menimbulkan tanda patognomonik peritonitis: "Defans muskular" / rigiditas dinding perut seperti papan, nyeri tekan lepas / Blumberg sign positif, ileus paralitik, dan syok sepsis); Asites (akumulasi abnormal cairan serosa di cavitas peritonealis pada hipertensi porta sirosis hepar, gagal jantung kongestif, atau karsinomatosis peritoneal karsinoma gaster/ovarium); Adhesi peritoneal fibrosa pasca bedah (penyebab nomor satu obstruksi usus mekanik mekanis strangulata).'
  },

  'omentum majus': {
    type: 'organ',
    nameLatin: 'Omentum Majus',
    nameId: 'Omentum Mayus (Tirai Lemak Perut Besar)',
    deskripsi: 'Lipatan peritoneum kuadrupel (empat lembar membran serosa yang menyatu) berukuran besar dan bertekstur seperti renda lemak tebal yang menggantung bebas seperti celemek pelindung dari curvatura major gaster dan pars superior duodeni, turun menutupi sebagian besar lekukan intestinum tenue di cavitas inframesocolica, kemudian melipat balik ke posterior-superior untuk melekat pada taenia omentalis colon transversum dan facies superior mesocolon transversum. Mengandung banyak jaringan adiposa, vaskularisasi kolateral kaya, dan agregat padat sel makrofag serta limfosit mononuklear mikroskopis yang disebut "Milky Spots" (Taches laiteuses) untuk surveilans imunologis peritoneum. Berfungsi sebagai "Polisi Abdomen" (policeman of the abdomen) berkat kemampuan mobilitas dan perlekatannya yang luar biasa untuk bermigrasi cepat ke lokus peradangan intra-abdominal (seperti apendisitis akut, kolesistitis, atau perforasi ulkus lambung), membungkus dan mengisolasi fokus infeksi sehingga mencegah peritonitis generalisata masif.',
    arteri: 'Arteria gastroomentalis dextra (cabang A. gastroduodenalis) dan Arteria gastroomentalis sinistra (cabang A. splenica) yang saling beranastomosis membentuk arkade di curvatura major gaster dan mencabangkan rami omentales (arteri epiploika) panjang ke lipatan omentum.',
    vena: 'Vena gastroomentalis dextra (bermuara ke Vena mesenterica superior / SMV) dan Vena gastroomentalis sinistra (bermuara ke Vena splenica), keduanya masuk ke sistem Vena Portae Hepatis.',
    inervasi: 'Serabut simpatis vasomotor postganglionik yang berjalan di dalam pleksus periarterial dari Plexus coeliacus.',
    limfatik: 'Nodi lymphatici gastroomentales sepanjang curvatura major lambung yang bermuara ke Nodi lymphatici coeliaci.',
    korelasiKlinis: '"Omental Caking" (infiltrasi penebalan nodular masif jaringan omentum majus oleh sel metastasis karsinomatosis peritoneal, sangat khas pada adenokarsinoma gaster dan karsinoma serosum ovarium lanjut, tampak jelas pada CT scan abdomen); Pemanfaatan bedah "Patch Graham" (penggunaan flap omentum majus tervaskularisasi untuk menutup defek perforasi dinding ulkus peptikum duodenum/gaster); Torsi dan infark omental idiopatik yang meniru gambaran apendisitis akut.'
  },

  'omentum minus': {
    type: 'organ',
    nameLatin: 'Omentum Minus',
    nameId: 'Omentum Minus (Tirai Lemak Perut Kecil)',
    deskripsi: 'Duplikasi peritoneum ganda (dua lapis serosa tipis) yang membentang dari curvatura minor lambung dan 2 cm proksimal pars superior duodeni ke arah kranial-posterior menuju facies visceralis hepar (fissura ligamenti venosi dan porta hepatis). Secara anatomis terbagi menjadi dua bagian kontinu: Ligamentum hepatogastricum (bagian membranosa tipis translusen di sisi medial) dan Ligamentum hepatoduodenale (bagian lateral tebal yang memiliki margo liber / tepi bebas). Ligamentum hepatoduodenale membentuk batas anterior dari Foramen epiploicum Winslowi (orifisium komunikasi menuju cavum bursa omentalis di belakang lambung). Di dalam margo liber ligamentum hepatoduodenale berjalan struktur Trias Hepatika yang sangat vital: Ductus Choledochus di anterolateral kanan, Arteria Hepatica Propria di anteromedial kiri, dan Vena Portae Hepatis di posterior di antara keduanya.',
    arteri: 'Arteria gastrica sinistra (cabang langsung Truncus coeliacus) dan Arteria gastrica dextra (cabang Arteria hepatica propria) yang berjalan dan beranastomosis di sepanjang curvatura minor gaster di antara kedua lamina omentum minus.',
    vena: 'Vena gastrica sinistra dan Vena gastrica dextra yang berjalan sejajar dengan arteri dan bermuara langsung ke Vena Portae Hepatis.',
    inervasi: 'Ramus hepaticus dari Truncus vagalis anterior (Nervus vagus CN X) yang melintasi ligamentum hepatogastricum menuju hepar, serta pleksus simpatis periarterial coeliacus.',
    limfatik: 'Nodi lymphatici gastrici sinistri et dextri sepanjang curvatura minor dan Nodi lymphatici hepatici di dalam ligamentum hepatoduodenale menuju Nodi coeliaci.',
    korelasiKlinis: 'Manuver Pringle (teknik bedah hemostasis darurat dengan menjepit ligamentum hepatoduodenale menggunakan klem vaskular atraumatik untuk mengoklusi aliran masuk Arteria hepatica propria dan Vena portae hepatis guna mengontrol perdarahan hepar masif pada trauma hepar berat atau reseksi hati; jika perdarahan terus berlanjut, sumber perdarahan berasal dari vena hepatika atau IVC retrohepatik); Herniasi interna usus ke dalam foramen Winslowi di belakang tepi bebas omentum minus.'
  },

  'mesenterium': {
    type: 'organ',
    nameLatin: 'Mesenterium',
    nameId: 'Mesenterium (Penggantung Usus Halus)',
    deskripsi: 'Lipatan peritoneum ganda berbentuk kipas yang luas, tebal, dan bergelombang, yang menambatkan lengkung jejunum dan ileum (panjang ~6 meter) ke dinding posterior abdomen. Memiliki Radix mesenterii (akar mesenterium) sempit sepanjang ~15 cm yang melekat secara oblik dari flexura duodenojejunalis di sisi kiri vertebra L2, berjalan miring ke kanan bawah menyilang pars horizontalis duodeni, aorta abdominalis, vena cava inferior (IVC), ureter kanan, dan vasa testicularis/ovarica dextra hingga berakhir pada articulatio sacroiliaca dextra di fossa iliaca kanan. Di antara dua lembar serosanya terdapat jaringan adiposa mesenterika, sistem arkade pembuluh darah jejunal dan ileal, serabut saraf otonom, dan jaringan limfatik lakteal yang sangat kaya. Berfungsi menjaga mobilitas usus halus untuk peristaltik sekaligus menjadi jalur suplai nutrisi dan pertahanan imunologik.',
    arteri: 'Arteria Mesenterica Superior (SMA) yang mempercabangkan 12-15 rami jejunales dan rami ileales, saling beranastomosis membentuk arkade arterial berundak (1-2 tingkat pada jejunum, 3-5 tingkat pada ileum) sebelum mencabangkan vasa recta.',
    vena: 'Vena Mesenterica Superior (SMV) yang terbentuk dari gabungan vena jejunales dan ileales, berjalan di sebelah kanan SMA di radix mesenterii sebelum bergabung dengan Vena splenica di belakang leher pankreas.',
    inervasi: 'Plexus mesentericus superior: serabut simpatis postganglionik dari ganglion mesentericum superius (segmen T8-T11) dan serabut parasimpatis preganglionik dari Nervus vagus (CN X).',
    limfatik: 'Pleksus pembuluh lakteal sangat ekstensif yang mentranspor kilomikron lemak hasil penyerapan usus, dialirkan melalui ratusan nodi lymphatici mesenterici (juxta-intestinales, intermedii, dan centrales) menuju truncus intestinalis dan bermuara ke Cisterna Chyli.',
    korelasiKlinis: 'Iskemia mesenterika akut dan trombosis vena mesenterika (menyebabkan infark dan gangren usus halus luas yang mengancam nyawa); Limfadenitis mesenterika akut (pembesaran inflamatorik nodus limfe mesenterium pada anak-anak akibat infeksi virus atau Yersinia enterocolitica yang meniru tanda dan gejala apendisitis akut secara klinis); Kista mesenterium chylolymphatic; Torsi volvulus usus halus pada malrotasi usus kongenital akibat fiksasi radix mesenterii yang sempit.'
  },

  // Aliases dan pemetaan nama alternatif bahasa Inggris / anatomis tambahan
  'greater omentum': {
    type: 'organ',
    nameLatin: 'Omentum Majus',
    nameId: 'Omentum Mayus',
    deskripsi: 'Lipatan peritoneum pelindung ganda yang menggantung dari kurvatura mayor lambung menutupi usus halus dan melekat pada kolon transversum.',
    arteri: 'Arteria gastroomentalis dextra dan sinistra.',
    vena: 'Vena gastroomentalis dextra (ke SMV) dan sinistra (ke V. splenica).',
    inervasi: 'Simpatis vasomotor via Plexus coeliacus.',
    limfatik: 'Nodi gastroomentales ke Nodi coeliaci.',
    korelasiKlinis: 'Omental caking pada metastasis kanker peritoneal; Graham patch untuk repair ulkus gaster.'
  },

  'lesser omentum': {
    type: 'organ',
    nameLatin: 'Omentum Minus',
    nameId: 'Omentum Minus',
    deskripsi: 'Lipatan peritoneum tipis yang menghubungkan kurvatura minor lambung dan duodenum proksimal ke hepar. Memuat Trias Hepatika di ligamentum hepatoduodenale.',
    arteri: 'Arteria gastrica sinistra dan dextra.',
    vena: 'Vena gastrica sinistra dan dextra langsung ke Vena Portae Hepatis.',
    inervasi: 'Ramus hepaticus dari N. vagus dan serabut simpatis coeliacus.',
    limfatik: 'Nodi gastrici dan hepatici ke Nodi coeliaci.',
    korelasiKlinis: 'Manuver Pringle untuk hemostasis bedah hepar darurat.'
  },

  'mesentery': {
    type: 'organ',
    nameLatin: 'Mesenterium',
    nameId: 'Mesenterium',
    deskripsi: 'Penggantung lipatan serosa kipas yang menambatkan usus halus ke dinding posterior abdomen dan menyalurkan pembuluh darah mesenterika.',
    arteri: 'Rami jejunales dan rami ileales dari Arteria Mesenterica Superior (SMA).',
    vena: 'Vena Mesenterica Superior (SMV).',
    inervasi: 'Plexus mesentericus superior (simpatis T8-T11 & parasimpatis CN X).',
    limfatik: 'Pleksus lakteal ke Cisterna Chyli.',
    korelasiKlinis: 'Iskemia mesenterika akut; Limfadenitis mesenterika.'
  },

  'bile duct': {
    type: 'organ',
    nameLatin: 'Ductus Choledochus',
    nameId: 'Saluran Empedu (Duktus Koledokus)',
    deskripsi: 'Saluran utama penyalur empedu dari gabungan duktus sistikus dan hepatikus komunis menuju ampulla Vateri di duodenum.',
    arteri: 'Cabang-cabang longitudinal dari A. cystica, A. hepatica propria, dan A. gastroduodenalis.',
    vena: 'Vena pancreaticoduodenalis superior posterior ke Vena Portae Hepatis.',
    inervasi: 'Plexus hepaticus (Parasimpatis N. vagus dan simpatis coeliacus).',
    limfatik: 'Nodi hepatici di porta hepatis.',
    korelasiKlinis: 'Koledokolitiasis; Kolangitis asenden; Striktur biliaris pasca bedah.'
  },

  'head of pancreas': {
    type: 'organ',
    nameLatin: 'Caput Pancreatis',
    nameId: 'Kepala Pankreas',
    deskripsi: 'Bagian terlebar pankreas yang bersemayam di lengkungan duodenum dan dilewati oleh duktus koledokus di sisi posteriornya.',
    arteri: 'Arteria pancreaticoduodenalis superior et inferior arkade anterior & posterior.',
    vena: 'Vena pancreaticoduodenalis ke V. portae dan SMV.',
    inervasi: 'Plexus coeliacus & Plexus mesentericus superior.',
    limfatik: 'Nodi pancreaticoduodenales ke nodi coeliaci & mesenterici superiores.',
    korelasiKlinis: 'Painless jaundice pada adenokarsinoma caput pankreas; Prosedur Whipple.'
  },

  'body of pancreas': {
    type: 'organ',
    nameLatin: 'Corpus Pancreatis',
    nameId: 'Badan Pankreas',
    deskripsi: 'Segmen transversal pankreas yang melintasi aorta dan pangkal SMA di retroperitoneum.',
    arteri: 'Rami pancreatici dari Arteria splenica (A. pancreatica magna & dorsalis).',
    vena: 'Venae pancreaticae langsung ke Vena splenica.',
    inervasi: 'Plexus coeliacus dan plexus splenicus.',
    limfatik: 'Nodi pancreaticosplenici ke Nodi coeliaci.',
    korelasiKlinis: 'Pseudokista pankreas di bursa omentalis; Nyeri punggung karsinoma korpus pankreas.'
  },

  'tail of pancreas': {
    type: 'organ',
    nameLatin: 'Cauda Pancreatis',
    nameId: 'Ekor Pankreas',
    deskripsi: 'Ujung intraperitoneal pankreas di dalam ligamentum splenorenale yang bersentuhan dengan hilum lienale.',
    arteri: 'Arteria caudae pancreatis dari Arteria splenica.',
    vena: 'Vena caudae pancreatis ke Vena splenica.',
    inervasi: 'Plexus splenicus otonom.',
    limfatik: 'Nodi pancreaticolienales di hilum limpa.',
    korelasiKlinis: 'Risiko fistula pankreas saat splenektomi; Insulinoma neuroendokrin.'
  }
};
