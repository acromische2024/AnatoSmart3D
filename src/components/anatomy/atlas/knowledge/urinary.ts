/**
 * Urogenital & Pelvis Anatomy Clinical Knowledge Base
 * Sistem Perkemihan (Urinary System) & Sistem Reproduksi (Genitalia Masculina et Feminina)
 *
 * Data komprehensif mencakup:
 * - Vaskularisasi Arteri & Drainase Vena
 * - Inervasi Otonom (Simpatis & Parasimpatis) serta Somatik
 * - Aliran Getah Bening (Limfatik)
 * - Korelasi Klinis & Patologi Relevan
 */

import { OrganDetails } from '../medical-knowledge';

// ============================================================================
// DEFINISI DETIL STRUKTUR ANATOMIS ORGAN UROGENITAL & PELVIS
// ============================================================================

const kidneyDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ren',
  nameId: 'Ginjal',
  deskripsi:
    'Sepasang organ retroperitoneal berbentuk kacang setinggi vertebra T12-L3 di dinding posterior abdomen. Memiliki peran vital dalam filtrasi plasma darah (ultrafiltrasi glomerulus membentuk ~180 L/hari filtrat primer), reabsorpsi selektif air dan solut, sekresi tubular asam dan metabolit, regulasi osmolaritas serta volume cairan ekstraseluler, regulasi keseimbangan asam-basa (reabsorpsi bikarbonat dan ekskresi proton), regulasi tekanan darah sistemik (sistem Renin-Angiotensin-Aldosteron), serta fungsi endokrin (sekresi eritropoietin untuk eritropoiesis, renin, dan aktivasi vitamin D menjadi 1,25-dihidroksikolekalsiferol / kalsitriol).',
  arteri:
    'Arteria renalis dextra et sinistra yang berasal langsung dari Aorta abdominalis setinggi diskus intervertebralis L1-L2. Mempercabangkan 5 arteri segmentalis end-artery fungsional (A. segmentalis apicalis, anterior superior, anterior inferior, inferior/basalis, dan posterior), kemudian bercabang menjadi arteriae lobares, arteriae interlobares (di antara columna Bertin), arteriae arcuatae (melengkung di batas kortikomedular), arteriae interlobulares (cortical radiate arteries), arteriola glomerularis afferens, kapiler glomerulus, dan arteriola efferens.',
  vena:
    'Vena renalis dextra dan Vena renalis sinistra yang bermuara langsung ke Vena cava inferior (IVC). Vena renalis sinistra lebih panjang (~7,5 cm), melintasi aorta abdominalis di ventral tepat di bawah pangkal A. mesenterica superior, serta menerima darah dari Vena suprarenalis sinistra, Vena testicularis/ovarica sinistra, dan Vena phrenica inferior sinistra.',
  inervasi:
    'Plexus renalis (otonom): Serabut simpatis postganglionik dari ganglion aorticorenalia dan truncus sympathicus (segmen T10-L1 melalui N. splanchnicus minor dan imus) memediasi vasokonstriksi arteriol renalis dan stimulasi sekresi renin oleh sel jukstaglomerularis; Serabut parasimpatis dari Nervus vagus (CN X); Serabut aferen viseral nosiseptif mengikuti jaras simpatis ke segmen medulla spinalis T10-L1 (dasar penjalaran nyeri kolik renal dari pinggang ke lipat paha).',
  limfatik:
    'Vasa lymphatica renalis mengikuti vasa renalia menuju Nodi lymphatici lumbales (nodi aortici laterales di kiri dan nodi cavales laterales di kanan), kemudian berlanjut ke truncus lumbalis dan cisterna chyli.',
  korelasiKlinis:
    'Gagal Ginjal Akut (Acute Kidney Injury / AKI) dan Penyakit Ginjal Kronis (Chronic Kidney Disease / CKD) yang membutuhkan terapi pengganti ginjal (hemodialisis / transplantasi); Nefrolitiasis (batu ginjal) yang memicu distensi kapsula renalis dan kolik ginjal tajam menjalar dari flank ke groin (dermatom T10-L1); Glomerulonefritis dan Sindrom Nefrotik; Karsinoma Sel Ginjal (Renal Cell Carcinoma / Grawitz tumor); Nutcracker syndrome (kompresi vena renalis sinistra di antara SMA dan aorta abdominalis yang memicu hematuria dan varikokel kiri).'
};

const kidneyRightDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ren Dexter',
  nameId: 'Ginjal Kanan',
  deskripsi:
    'Ginjal sisi kanan, terletak retroperitoneal di fossa lumbalis dextra setinggi L1-L3. Posisinya sekitar 1,5-2 cm lebih rendah dan sedikit lebih pendek serta lebar dibandingkan ren sinister akibat desakan massa lobus dexter hepatis. Facies anterior berbatasan langsung dengan hepar (facies hepatica), duodenum pars descendens (pars II), flexura coli dextra (hepatica), dan jejunum. Polus superior ditutupi oleh glandula suprarenalis dextra.',
  arteri:
    'Arteria renalis dextra (cabang Aorta abdominalis setinggi L1-L2, berjalan melintasi posterior Vena cava inferior, memiliki lintasan yang lebih panjang daripada A. renalis sinistra untuk mencapai hilum dextrum).',
  vena:
    'Vena renalis dextra (berukuran pendek sekitar 2-3 cm, berjalan horizontal langsung ke sisi lateral kanan Vena cava inferior tanpa menerima cabang vena gonadalis).',
  inervasi:
    'Plexus renalis dexter (serabut simpatis T10-L1 dari truncus sympathicus dan N. splanchnicus minor/imus; serabut parasimpatis N. vagus).',
  limfatik:
    'Nodi lymphatici lumbales dextri (nodi cavales laterales, precavales, dan postcavales).',
  korelasiKlinis:
    'Palpasi bimanual ginjal pada inspirasi dalam lebih mudah meraba polus inferior ren dexter daripada ren sinister (khususnya pada wanita atau individu berpostur astenik); Rentan terhadap trauma tumpul atau deselerasi hepar; Ptosis renalis dextra (nefroptosis / wandering kidney) saat berdiri tegak yang dapat menyebabkan kink/penekukan ureter.'
};

const kidneyLeftDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ren Sinister',
  nameId: 'Ginjal Kiri',
  deskripsi:
    'Ginjal sisi kiri, terletak retroperitoneal di fossa lumbalis sinistra setinggi T11-L2. Memiliki posisi lebih superior dan mendekati linea mediana dibandingkan ren dexter. Facies anterior berbatasan secara anatomis dengan gaster, lien (facies splenica), cauda pancreatis beserta vasa splenica, flexura coli sinistra (splenica) dan colon descendens, serta jejunum. Polus superior berbatasan dengan glandula suprarenalis sinistra.',
  arteri:
    'Arteria renalis sinistra (cabang langsung Aorta abdominalis, memiliki lintasan lebih pendek daripada sisi kanan dan berjalan tepat di posterior Vena renalis sinistra).',
  vena:
    'Vena renalis sinistra (panjang ~7,5 cm, melintasi ventral Aorta abdominalis tepat di bawah percabangan A. mesenterica superior); menerima aliran masuk dari Vena suprarenalis sinistra dan Vena testicularis/ovarica sinistra.',
  inervasi:
    'Plexus renalis sinister (serabut simpatis T10-L1 dan aferen sensorik viseral dermatom T10-L1).',
  limfatik:
    'Nodi lymphatici lumbales sinistri (nodi aortici laterales, preaortici, dan postaortici).',
  korelasiKlinis:
    'Sindrom Nutcracker (Anterior Nutcracker Syndrome): kompresi vena renalis sinistra di sudut jepitan antara Aorta abdominalis dan A. mesenterica superior yang memicu peningkatan tekanan vena renalis, hematuria intermiten mikro/makroskopik, proteinuria ortostatik, nyeri panggul kiri, serta refluks vena gonadalis yang menyebabkan varikokel testis kiri pada pria atau pelvic congestion syndrome pada wanita.'
};

const renalCortexDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Cortex Renalis',
  nameId: 'Korteks Ginjal',
  deskripsi:
    'Zona parenkim ginjal bagian luar yang berwarna coklat kemerahan dengan tampilan bergranula halus, membentang dari capsula fibrosa renalis hingga basis piramid medula serta menjorok ke dalam medula di antara piramid-piramid sebagai columnae renales (Bertin). Mengandung seluruh korpuskel ginjal (glomerulus dan capsula glomerularis Bowman Malpighi), tubulus contortus proximalis (PCT), tubulus contortus distalis (DCT), pars convoluta, serta apparatus juxtaglomerularis. Merupakan lokasi primer filtrasi darah, autoregulasi GFR, sekresi renin, dan reabsorpsi obligat solut aktif.',
  arteri:
    'Arteriae interlobulares (cortical radiate arteries) yang berasal dari A. arcuata, berjalan tegak lurus menembus korteks untuk mencabangkan arteriola afferens glomerularis, anyaman kapiler fenestrata glomerulus, arteriola efferens, dan anyaman kapiler peritubuler korteks.',
  vena:
    'Venae stellatae (pada permukaan subkapsular) mengalir ke venae interlobulares (cortical radiate veins), lalu bermuara ke venae arcuatae.',
  inervasi:
    'Serabut simpatis perivaskular plexus renalis yang mempersarafi arteriola aferen/eferen (mengatur resistensi vaskular ginjal dan GFR) serta sel jukstaglomerularis (merangsang eksositosis renin saat hipotensi sistemik).',
  limfatik:
    'Anyaman kapiler limfatik intrakortikal subkapsular yang mengalir ke sinus renalis dan bermuara ke nodi lymphatici lumbales.',
  korelasiKlinis:
    'Nekrosis Kortikal Akut (Acute Cortical Necrosis / ACN) akibat hipoperfusi renal masif pada solusio plasenta atau syok septik; Glomerulonefritis akut/kronis (misal PSGN, Lupus Nephritis, IgA Nephropathy) yang menyebabkan hematuria dismorfik dan proteinuria silinder eritrosit; Biopsi ginjal perkutan selalu ditargetkan pada korteks untuk mengevaluasi glomerulus dan tubulus.'
};

const renalMedullaDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Medulla Renalis',
  nameId: 'Medula Ginjal',
  deskripsi:
    'Bagian parenkim ginjal internal yang berwarna pucat bergaris-garis radier, tersusun atas 8-18 bangunan konus diskret yang disebut pyramis renalis (Malpighi). Basis tiap piramid menghadap ke arah korteks dan dipisahkan oleh columna renalis, sedangkan puncaknya (papilla renalis) mengarah ke sinus renalis dan berlubang-lubang (area cribrosa, 10-25 foramen papillarium). Mengandung segmen lurus tubulus renalis: pars descendens dan pars ascendens ansa Henle, tubulus rectus, ductus colligens, dan ductus papillaris Bellini. Berperan utama dalam mekanisme countercurrent multiplier bersama vasa recta untuk menciptakan gradien hipertonisitas medular (hingga 1200 mOsm/kg) demi pemekatan urin di bawah pengaruh hormon ADH/vasopresin.',
  arteri:
    'Arteriola rectae (vasa recta spuria) yang dicabangkan oleh arteriola efferens dari glomerulus jukstamedularis; membentuk lengkungan kapiler paralel tipis berbentuk jepit rambut yang menembus ke kedalaman piramid medula.',
  vena:
    'Venulae rectae yang mendrainase medula ginjal secara lambat untuk mencegah pencucian (washout) zat terlarut osmotik medula, bermuara ke venae arcuatae.',
  inervasi:
    'Serabut simpatis vasomotor pleksus renalis yang menginervasi pembuluh darah jukstamedularis dan vasa recta (mengontrol perfusi medular tanpa merusak gradien osmotik).',
  limfatik:
    'Kapiler limfatik medula profundus yang mengalir menuju sinus renalis dan bermuara ke nodi lymphatici lumbales.',
  korelasiKlinis:
    'Nekrosis Papilaris Ginjal (Renal Papillary Necrosis) akibat iskemia mikrovaskular medula yang rentan pada penggunaan analgesik NSAID kronik jangka panjang, anemia sel sabit (sickle cell disease), diabetes melitus berat, atau pielonefritis akut nekrotikans; Diabetes Insipidus Nefrogenik (resistensi duktus koligens medula terhadap vasopresin / ADH).'
};

const renalPelvisDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Pelvis Renalis (Pelvis Ureterica)',
  nameId: 'Pelvis Ginjal / Pielum',
  deskripsi:
    'Struktur corong muskular berdinding tipis di dalam sinus renalis yang terbentuk dari konvergensi 2-3 calyx renalis major dan menyempit di hilum renalis menjadi ureter pada pelvic-ureteric junction (PUJ / UPJ). Berfungsi sebagai wadah penampung dan pengumpul urin dari seluruh sistem kaliks ginjal sebelum didorong ke ureter melalui gelombang peristaltik ritmik otot polos dindingnya.',
  arteri:
    'Rami pelvici et ureterici dari Arteria renalis, beranastomosis dengan cabang dari A. segmentalis posterior dan inferior.',
  vena:
    'Vena renalis melalui anyaman plexus venosus peripelvicus di sinus renalis.',
  inervasi:
    'Plexus renalis dan plexus hypogastricus superior; dinding pelvis renalis memiliki sel-sel pemacu intrinsik (pacemaker cells) atipikal yang menginisiasi depolarisasi ritmik untuk memicu gelombang peristalsis pengeluaran urin; Serabut sensorik aferen nosiseptif T10-L1 merespons distensi pelvis (kolik ginjal).',
  limfatik:
    'Nodi lymphatici lumbales (aortici laterales dan cavales laterales).',
  korelasiKlinis:
    'Ureteropelvic Junction Obstruction (UPJO / Stenosis UPJ kongenital) yang menyebabkan hidronefrosis idiopatik masif pada anak dan dewasa muda; Staghorn Calculus (batu cetak ginjal / batu struvit magnesium amonium fosfat) yang tumbuh mengisi seluruh rongga pelvis renalis dan kaliks ginjal, sering diakibatkan infeksi kronis kuman pemecah urea seperti Proteus mirabilis; Pielonefritis akut; Karsinoma urotelial pelvis renalis.'
};

const calyxMajorDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Calyx Renalis Major',
  nameId: 'Kaliks Mayor Ginjal',
  deskripsi:
    'Saluran berotot berbentuk corong lebar berjumlah 2 hingga 3 buah di setiap ginjal (calyx major superior, medius, dan inferior) yang terbentuk dari penggabungan 2-4 calyx minor. Berfungsi menghantarkan urin yang terkumpul dari kaliks minor menuju ke rongga pelvis renalis melalui kontraksi peristaltik terkoordinasi dinding muskularis polosnya.',
  arteri:
    'Rami pelvici et caliceales dari cabang-cabang Arteria renalis di dalam sinus renalis.',
  vena:
    'Bermuara ke Vena renalis melalui anyaman vena sinus renalis.',
  inervasi:
    'Plexus renalis (serabut otonom simpatis dan pacemaker intrinsik forniks/kaliks yang mengatur ritme kontraksi mikrodinamik).',
  limfatik:
    'Nodi lymphatici lumbales (aortici laterales / cavales).',
  korelasiKlinis:
    'Hidrokalikosis (dilatasi terisolasi satu kaliks mayor akibat obstruksi infundibulum atau batu terperangkap / infundibular stenosis); Tempat tersangkutnya batu ginjal kalsium sebelum bermigrasi ke pelvis renalis.'
};

const calyxMinorDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Calyx Renalis Minor',
  nameId: 'Kaliks Minor Ginjal',
  deskripsi:
    'Struktur berbentuk mangkuk atau cawan kecil berdinding otot berjumlah 7 hingga 14 buah di setiap ginjal. Masing-masing kaliks minor melingkupi satu hingga tiga papilla renalis piramid medula ginjal. Menampung tetesan urin primer akhir yang keluar dari foramen papillaria (ujung ductus Bellini) pada area cribrosa. Memiliki cincin otot polos sfingter forniks (musculus sphincter fornicis) di sekitar papila untuk mencegah refluks urin kembali ke tubulus medula saat kaliks berkontraksi.',
  arteri:
    'Rami terminales dari arteriae interlobares di dalam sinus renalis.',
  vena:
    'Venae interlobares di dalam sinus renalis.',
  inervasi:
    'Serabut otonom dan nosiseptif dari plexus renalis.',
  limfatik:
    'Nodi lymphatici lumbales laterales.',
  korelasiKlinis:
    'Fornix Rupture (ruptur forniks kaliks minor akibat lonjakan tekanan intrapelvik mendadak pada impaksi batu ureter akut, menyebabkan ekstravasasi urin perirenal / urinoma); Pembentukan Plak Randall (kalsifikasi subepitel papila ginjal yang menjadi nidus pertumbuhan batu kalsium oksalat di kaliks minor).'
};

const ureterDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ureter',
  nameId: 'Ureter',
  deskripsi:
    'Sepasang saluran muskular berdinding tebal sepanjang 25-30 cm yang mengalirkan urin dari pelvis renalis ke vesica urinaria secara aktif melalui kontraksi gelombang peristalsis ritmik (1-6 kali per menit). Terbagi atas: 1) Pars abdominalis (berjalan retroperitoneal di atas permukaan M. psoas major, disilang anterior oleh vasa testicularia/ovarica), dan 2) Pars pelvica (melintasi linea terminalis/bifurkasio vasa iliaca communis/externa, memasuki rongga pelvis minor, disilang anterior oleh ductus deferens pada pria atau melintas inferior terhadap Arteria uterina / "water under the bridge" pada wanita). Menembus dinding posterior-inferior vesica urinaria secara oblik sepanjang ~2 cm (Pars intramuralis), menciptakan mekanisme katup fisiologis flap anti-refluks pasif saat buli-buli terisi penuh.',
  arteri:
    'Vaskularisasi segmental multi-sumber yang saling beranastomosis longitudinal di tunica adventitia: Pars superior oleh rami ureterici A. renalis; Pars media oleh cabang-cabang Aorta abdominalis, A. testicularis/ovarica, dan A. iliaca communis; Pars inferior oleh rami ureterici dari A. iliaca interna, A. vesicalis superior, A. vesicalis inferior (pria) atau A. uterina / A. vaginalis (wanita).',
  vena:
    'Drainase vena mengiringi arteri: Vena renalis, Vena testicularis/ovarica, Vena iliaca interna, dan plexus venosus vesicalis.',
  inervasi:
    'Plexus uretericus: Serabut simpatis T10-L2 (N. splanchnicus minor, lumbalis) dan serabut parasimpatis S2-S4 (Nervi splanchnici pelvici); Gelombang peristalsis dipicu oleh pacemaker intrinsik di pelvis renalis; Serabut aferen viseral nosiseptif berjalan mengikuti saraf simpatis ke segmen T11-L2 medulla spinalis (dasar kolik ureter yang memancar dari punggung bawah/flank menjalar ke regio inguinal, skrotum, atau labium majus).',
  limfatik:
    'Pars superior ke Nodi lymphatici lumbales; Pars media ke Nodi lymphatici iliaci communes; Pars inferior ke Nodi lymphatici iliaci interni dan externi.',
  korelasiKlinis:
    'Tiga Penyempitan Fisiologis Ureter (tempat tersering impaksi batu saluran kemih / urolitiasis): 1) Ureteropelvic Junction (UPJ), 2) Persilangan vasa iliaca di pintu masuk panggul (pelvic brim), 3) Ureterovesical Junction (UVJ / pars intramuralis); Kolik ureter akut (nyeri hilang timbul hebat akibat spasme otot polos ureter terhadap impaksi batu); Cedera Iatrogenik Ureter pada operasi ginekologi (histerektomi, ligasi A. uterina di ligamentum cardinale "water under the bridge"); Vesicoureteral Reflux (VUR) kongenital akibat defisiensi terowongan intramural ureter, menyebabkan refluks urin ke ginjal dan pielonefritis berulang.'
};

const urinaryBladderDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Vesica Urinaria',
  nameId: 'Kandung Kemih / Buli-Buli',
  deskripsi:
    'Organ muskular berongga di pelvis anterior (terletak di posterior symphysis pubica di dalam spatium retropubicum Retzius) yang berfungsi sebagai reservoir urin elastis dan organ kontinensia (kapasitas fisiologis normal 300-500 mL, mampu berdistensi hingga >1000 mL). Terdiri dari Apex vesicae (dihubungkan ke umbilikus oleh ligamentum umbilicale medianum / sisa urachus embrional), Corpus vesicae, Fundus vesicae (dasar posterior), dan Collum vesicae (leher yang menyempit menuju uretra). Dindingnya tersusun atas Musculus detrusor vesicae (3 lapisan otot polos: longitudinal luar, sirkular tengah, longitudinal dalam). Di permukaan dalam fundus terdapat Trigonum vesicae (Lieutaud) berbentuk segitiga licin tanpa lipatan rugae, yang dibatasi oleh kedua ostium ureteris dan ostium urethrae internum.',
  arteri:
    'Arteria vesicalis superior (cabang dari pars patens Arteria umbilicalis) menyuplai bagian anterosuperior; Arteria vesicalis inferior (pada pria, cabang langsung A. iliaca interna) atau Arteria vaginalis (pada wanita) menyuplai fundus dan collum; diperkuat oleh rami vesicales dari A. obturatoria dan A. glutea inferior.',
  vena:
    'Plexus venosus vesicalis (pada pria beranastomosis erat dengan plexus venosus prostaticus di spatium Retzius) yang bermuara ke Vena iliaca interna.',
  inervasi:
    'Plexus vesicalis (bagian dari plexus hypogastricus inferior): 1) Parasimpatis dari Nn. splanchnici pelvici (radiks spinal S2, S3, S4) merangsang kontraksi M. detrusor dan merelaksasikan tonus sfingter uretra interna untuk memfasilitasi refleks berkemih (miksi); 2) Simpatis dari segmen T11-L2 melalui N. hypogastricus merelaksasikan M. detrusor (reseptor beta-3) dan mengontraksikan trigonum serta leher buli (reseptor alfa-1) untuk mempertahankan kontinensia dan mencegah ejakulasi retrograde; 3) Somatik motorik dari Nervus pudendus (S2-S4) mengontrol M. sphincter urethrae externus secara volunter; 4) Aferen sensorik regangan dinding buli memicu sensasi ingin berkemih.',
  limfatik:
    'Nodi lymphatici iliaci interni dan Nodi lymphatici iliaci externi; sebagian dari collum vesicae mengalir ke Nodi lymphatici sacrales.',
  korelasiKlinis:
    'Sistitis Akut / Infeksi Saluran Kemih (ISK bawah) dengan gejala disuria, frekuensi, nokturia, urgensi, dan nyeri suprapubik; Retensi Urin Akut akibat obstruksi infravesikal (BPH, striktur uretra, bekuan darah) yang menimbulkan distensi buli masif dan nyeri hebat; Inkontinensia Urin (tipe stres akibat kelemahan dasar panggul, tipe urgensi akibat overactive bladder, atau tipe overflow); Ruptur Kandung Kemih (ekstraperitoneal pada fraktur ramus pubis vs intraperitoneal akibat trauma tumpul pada buli yang terisi penuh); Karsinoma Buli-Buli (Karsinoma Sel Transisional / Urotelial) dengan tanda kardinal hematuria tanpa nyeri (painless gross hematuria).'
};

const urethraDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Urethra',
  nameId: 'Uretra',
  deskripsi:
    'Saluran fibromuskular yang menghubungkan collum vesicae urinariae ke meatus urethrae externus untuk mengalirkan urin keluar tubuh (serta semen pada pria). Memiliki perbedaan anatomis seksual yang nyata: 1) Urethra feminina (pendek, panjang 3,5-4 cm, berjalan lurus anteroinferior di posterior symphysis pubica dan anterior dinding vagina); 2) Urethra masculina (panjang 18-20 cm dengan 2 kurvatura berbentuk huruf S, berfungsi ganda untuk urin dan ejakulat), terbagi atas 4 bagian: Pars preprostatica (intramural, 1 cm, dikelilingi M. sphincter urethrae internus involunter), Pars prostatica (3-4 cm, melintasi substansi kelenjar prostat, memiliki colliculus seminalis / verumontanum yang ditembus oleh utriculus prostaticus dan sepasang ductus ejaculatorius), Pars membranacea (1-1,5 cm, menembus spatium perinei profundum, dikelilingi oleh M. sphincter urethrae externus volunter), dan Pars spongiosa (15 cm, berjalan di dalam corpus spongiosum penis hingga melebar di fossa navicularis dan berakhir pada meatus urethrae externus).',
  arteri:
    'Pria: Rami prostatici dari A. vesicalis inferior, A. rectalis media, A. urethralis, dan A. bulbi penis (cabang dari A. pudenda interna). Wanita: Arteria pudenda interna dan rami urethrales dari Arteria vaginalis.',
  vena:
    'Pria: Plexus venosus prostaticus, plexus venosus vesicalis, dan Vena pudenda interna menuju Vena iliaca interna. Wanita: Plexus venosus vaginalis dan Vena pudenda interna.',
  inervasi:
    'Plexus prostaticus dan plexus vesicalis (otonom simpatis dan parasimpatis); M. sphincter urethrae externus diinervasi secara somatik motorik oleh Nervus pudendus (radiks S2-S4); Sensasi meatus externus dan glans dihantarkan oleh Nervus dorsalis penis / clitoridis.',
  limfatik:
    'Pars prostatica dan membranacea mengalir ke Nodi lymphatici iliaci interni; Pars spongiosa dan uretra anterior wanita mengalir ke Nodi lymphatici inguinales superficiales et profundi.',
  korelasiKlinis:
    'Tingginya insidensi ISK asendens pada wanita akibat uretra yang pendek dan jaraknya yang dekat dengan anus; Striktur Uretra pada pria akibat trauma straddle, instrumentasi kateter iatrogenik, atau uretritis gonokokal berulang; Ruptur Uretra Anterior (pada corpus spongiosum akibat cedera straddle, menyebabkan ekstravasasi urin dan darah ke skrotum, penis, dan dinding abdomen anterior di dalam fascia Colles/Scarpa tanpa mengenai paha); Ruptur Uretra Posterior (pada pars membranacea akibat fraktur cincin pelvis, menyebabkan prostat mengapung / "high-riding prostate" dan ekstravasasi urin ke spatium retropubicum Retzius); Pemasangan kateter uretra Foley memerlukan teknik aseptik dan pemahaman kurvatura anatomis pria.'
};

const adrenalGlandDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Glandula Suprarenalis',
  nameId: 'Kelenjar Adrenal / Suprarenal',
  deskripsi:
    'Sepasang kelenjar endokrin retroperitoneal berwarna kekuningan yang bertengger di polus superior masing-masing ginjal di dalam fascia renalis (Gerota), dipisahkan dari ginjal oleh septum fasialis tipis. Glandula suprarenalis dextra berbentuk piramidal, sedangkan sinistra berbentuk semilunar (bulan sabit) yang lebih besar. Terdiri atas dua organ endokrin yang berbeda secara embriologis dan fungsional: 1) Cortex Adrenal (berasal dari mesoderm coelomic, 80-90% volume), tersusun atas 3 zona: Zona Glomerulosa (mensekresi mineralokortikoid: aldosteron untuk retensi Na+ dan ekskresi K+/H+), Zona Fasciculata (mensekresi glukokortikoid: kortisol untuk glukoneogenesis, proteolisis, dan respon anti-inflamasi/stres), dan Zona Reticularis (mensekresi androgen adrenal: DHEA dan androstenedion); 2) Medulla Adrenal (berasal dari neuroektoderm neural crest), tersusun atas sel kromafin yang bertindak sebagai modifikasi ganglion simpatis postganglionik, mensekresi katekolamin (80% epinefrin / adrenalin dan 20% norepinefrin) langsung ke sirkulasi darah untuk respon stres simpatis akut ("fight-or-flight").',
  arteri:
    'Anyaman arterial yang sangat kaya dari 3 sumber independen: 1) Arteria suprarenalis superior (6-8 cabang kecil dari Arteria phrenica inferior), 2) Arteria suprarenalis media (cabang langsung dari Aorta abdominalis setinggi L1), 3) Arteria suprarenalis inferior (cabang dari Arteria renalis). Membentuk anyaman pleksus subkapsular yang mengalirkan darah sentripetal menembus korteks ke kapiler sinusoid medulla.',
  vena:
    'Drainase vena tunggal utama: Vena suprarenalis dextra (berukuran sangat pendek, langsung bermuara ke dinding posterior-lateral Vena cava inferior, rentan avulsi/ruptur saat adrenalektomi kanan); Vena suprarenalis sinistra (berjalan ke kaudal bergabung dengan Vena phrenica inferior sinistra sebelum bermuara ke Vena renalis sinistra).',
  inervasi:
    'Plexus coeliacus dan Nervus splanchnicus major (segmen spinal T5-T9): Unik karena serabut simpatis preganglionik bermielin berjalan langsung tanpa bersinaps di ganglion paravertebralis, berakhir langsung pada sel-sel kromafin medula adrenal (melepaskan asetilkolin untuk memicu sekresi epinefrin/norepinefrin). Korteks tidak memiliki inervasi saraf langsung yang bermakna dan diregulasi oleh hormon sirkulasi (ACTH dan Angiotensin II).',
  limfatik:
    'Nodi lymphatici lumbales (aortici laterales dan cavales laterales).',
  korelasiKlinis:
    'Feokromositoma (tumor neuroendokrin sel kromafin medula adrenal yang mensekresi katekolamin secara masif paroksismal, ditandai trias klasik: hipertensi berat refrakter, palpitasi/takikardia, dan nyeri kepala hebat); Sindrom Cushing (hiperkortisolisme akibat adenoma adrenal atau hiperplasia bilateral); Morbus Addison (insufisiensi adrenal primer autoimun dengan hiperpigmentasi kulit, hipotensi postural, dan krisis adrenal yang mengancam jiwa); Sindrom Conn (hiperaldosteronisme primer dengan hipertensi dan hipokalemia metabolik alkalosis); Hiperplasia Adrenal Kongenital (CAH akibat defisiensi enzim 21-hidroksilase).'
};

const prostateDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Prostata',
  nameId: 'Kelenjar Prostat',
  deskripsi:
    'Organ kelenjar fibromuskular berbentuk konus terbalik sebesar buah kenari (~20 gram, diameter 4x3x2 cm) pada pria. Terletak di cavitas pelvis minor tepat di inferior collum vesicae urinariae, superior terhadap diaphragma urogenitale, posterior terhadap symphysis pubica, dan anterior terhadap ampulla recti (dapat dipalpasi via colok dubur). Membungkus pars prostatica urethrae. Mensekresi cairan alkalis encer seperti susu (25-30% volume ejakulat) yang mengandung asam sitrat, seng (zinc), enzim proteolitik (fibrinolisin), asam fosfatase, dan Prostate-Specific Antigen (PSA) yang berperan mencairkan koagulum semen (liquefaction) pasca-ejakulasi agar spermatozoa leluasa bergerak. Menurut konsep zona McNeal terbagi atas: Zona Perifer (PZ, 70% volume kelenjar, lokasi 70-80% adenokarsinoma prostat), Zona Sentral (CZ, 25%, mengelilingi ductus ejaculatorius), Zona Transisional (TZ, 5%, mengelilingi uretra proksimal, lokasi 95% BPH), dan Stroma Fibromuskular Anterior (AFS, non-glandular).',
  arteri:
    'Cabang-cabang dari Arteria vesicalis inferior, Arteria rectalis media, dan Arteria pudenda interna (cabang dari divisio anterior Arteria iliaca interna).',
  vena:
    'Plexus venosus prostaticus (Santorini) yang terletak di antara kapsula fibrosa prostat dan sarung fasial prostat di spatium Retzius; mengalir ke Vena iliaca interna, serta membentuk anastomosis bebas katup dengan Plexus venosus vertebralis internus (Batson) di kanalis spinalis.',
  inervasi:
    'Plexus prostaticus (berasal dari plexus hypogastricus inferior): Serabut simpatis dari T10-L2 merangsang kontraksi kapsul fibromuskular dan stroma prostat untuk memeras sekret ke dalam uretra saat emisi ejakulasi; Serabut parasimpatis dari Nn. splanchnici pelvici (S2-S4) merangsang sekresi kelenjar asinus prostat; Nervi cavernosi penis berjalan di sepanjang posterolateral prostat (risiko cedera impotensi pada prostatektomi radikal).',
  limfatik:
    'Nodi lymphatici iliaci interni (terutama nodi obturatorii) dan Nodi lymphatici iliaci externi; sebagian ke Nodi lymphatici sacrales.',
  korelasiKlinis:
    'Benign Prostatic Hyperplasia (BPH): hiperplasia stroma dan epitel zona transisional yang menyebabkan kompresi pars prostatica uretra, memicu Lower Urinary Tract Symptoms (LUTS) berupa hesistansi, pancaran miksi melemah, terminal dribbling, nokturia, dan retensi urin akut; Adenokarsinoma Prostat: keganasan tersering pada pria lanjut usia, mayoritas bermula di zona perifer (dapat teraba sebagai nodul keras ireguler asimetris pada Digital Rectal Examination / colok dubur dan memicu elevasi serum PSA); Metastasis Kanker Prostat ke tulang vertebra lumbosakralis dan pelvis secara hematogen melalui pleksus Batson yang tanpa katup; Prostatitis akut bakterial (nyeri perineal berat, demam, disuria; kontraindikasi masase prostat karena risiko bakteremia).'
};

const seminalVesicleDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Vesicula Seminalis (Glandula Vesiculosa)',
  nameId: 'Vesikula Seminalis / Kantung Mani',
  deskripsi:
    'Sepasang kelenjar tubular berlekuk-lekuk dan berlobus sepanjang 5-7 cm yang terletak di antara fundus vesica urinaria dan rektum, lateral terhadap ampulla ductus deferentis. Ujung inferiornya menyempit membentuk ductus excretorius yang bersatu dengan ampulla ductus deferens membentuk Ductus Ejaculatorius yang menembus substansi prostat. Mensekresi cairan kental kekuningan yang sedikit basa (alkalis), membentuk 65-75% dari total volume semen. Sekret ini kaya akan fruktosa (substrat energi utama motilitas spermatozoa), prostaglandin (merangsang motilitas sperma dan memicu kontraksi peristaltik terbalik pada serviks/uterus wanita), semenogelin / prekursor fibrinogen (membentuk koagulum semen sesaat setelah ejakulasi), dan vitamin C.',
  arteri:
    'Rami dari Arteria vesicalis inferior, Arteria ductus deferentis, dan Arteria rectalis media.',
  vena:
    'Plexus venosus vesicalis dan plexus venosus prostaticus yang bermuara ke Vena iliaca interna.',
  inervasi:
    'Plexus hypogastricus inferior: Serabut simpatis postganglionik dari segmen T12-L2 menginduksi kontraksi peristalsis kuat otot polos dinding vesikula seminalis selama fase emisi ejakulasi.',
  limfatik:
    'Nodi lymphatici iliaci interni dan Nodi lymphatici iliaci externi.',
  korelasiKlinis:
    'Vesikulitis Seminalis (sering menyertai prostatitis atau epididimitis kronis, merupakan penyebab klinis utama hematospermia / keluarnya darah pada cairan ejakulasi); Obstruksi Ductus Ejaculatorius kongenital atau pasca-inflamasi (menyebabkan azoospermia obstruktif, volume ejakulat rendah <1 mL, dan pH asam serta fruktosa negatif pada analisis sperma); Kista vesikula seminalis (sering berasosiasi dengan agenesis ginjal ipsilateral pada Sindrom Zinner).'
};

const testisDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Testis',
  nameId: 'Testis / Buah Zakar',
  deskripsi:
    'Sepasang organ reproduksi pria (gonad) berbentuk ovoid (~4x3x2,5 cm, berat 15-20 gram) yang tersuspensi di dalam cavitas scroti di luar rongga pelvis untuk mempertahankan suhu intrakrotal 2-3°C di bawah suhu inti tubuh, prasyarat mutlak untuk spermatogenesis normal. Dilapisi oleh tunica albuginea (kapsula fibrosa putih padat yang membentuk septula testis dan mediastinum testis) dan tunica vaginalis (kantong serosa sisa peritoneum parietal dan viseral). Mengandung ~250 lobuli testis yang diisi oleh 1-4 tubulus seminiferus contortus (lokasi spermatogenesis aktif yang ditopang oleh sel Sertoli pembentuk blood-testis barrier) serta stroma interstisial yang kaya sel Leydig (penghasil utama hormon testosteron di bawah kendali hormon LH/ICSH hipofisis anterior).',
  arteri:
    'Arteria testicularis dextra et sinistra (cabang langsung Aorta abdominalis setinggi diskus L2 di dinding posterior abdomen, mencerminkan asal embriologis migrasi gonad), berjalan melintasi canalis inguinalis di dalam funiculus spermaticus; mendapat suplai kolateral minor dari Arteria ductus deferentis dan Arteria cremasterica.',
  vena:
    'Plexus venosus pampiniformis (anyaman 8-12 vena di dalam funiculus spermaticus yang membungkus A. testicularis, berfungsi sebagai countercurrent heat exchanger pendingin darah arterial testis). Menyatu membentuk Vena testicularis di anulus inguinalis internus: Vena testicularis dextra bermuara langsung ke Vena cava inferior (sudut miring), sedangkan Vena testicularis sinistra bermuara ke Vena renalis sinistra secara tegak lurus (sudut 90°).',
  inervasi:
    'Plexus testicularis (mengiringi A. testicularis dari plexus coeliacus dan intermesentericus): Serabut otonom simpatis dari segmen T10-T11 medulla spinalis; Serabut sensorik aferen viseral nosiseptif berjalan ke segmen T10 (menyebabkan nyeri tumpul hebat yang menjalar ke umbilikus dan dinding abdomen bawah disertai mual/muntah hebat saat testis terbentur atau terpuntir).',
  limfatik:
    'Mengikuti pembuluh testis di retroperitoneum langsung menuju Nodi lymphatici lumbales / paraaortici laterales setinggi L2 (BUKAN ke nodus limfe inguinalis skrotum, kecuali bila terdapat metastasis yang telah menginfiltrasi kulit skrotum).',
  korelasiKlinis:
    'Torsio Testis: puntiran funiculus spermaticus pada aksisnya yang menyumbat aliran vena dan arteri testis, merupakan kegawatdaruratan bedah urologi mutlak dengan golden period <6 jam untuk tindakan detorsi dan orkidopeksi bilateral; Kriptorkismus (undescended testis): kegagalan migrasi satu atau kedua testis ke skrotum yang berisiko tinggi memicu infertilitas dan keganasan testis (seminoma); Varikokel: dilatasi abnormal dan tortuositas pleksus pampiniformis (85-90% terjadi pada testis kiri akibat muara tegak lurus ke V. renalis sinistra dan fenomena nutcracker) yang memicu peningkatan suhu skrotum dan penurunan kualitas sperma; Hidrokel testis (akumulasi cairan serosa abnormal di antara lamina parietalis dan viseralis tunica vaginalis); Tumor Testis (keganasan padat tersering pada pria usia 15-35 tahun, berupa seminoma atau non-seminoma).'
};

const epididymisDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Epididymis',
  nameId: 'Epididimis',
  deskripsi:
    'Struktur tubular berbentuk koma atau bulan sabit sepanjang ~5 cm yang menempel rapat pada facies posterior dan polus superior testis. Terdiri atas: 1) Caput epididymidis (bagian kranial yang menerima 12-20 ductuli efferentes testis), 2) Corpus epididymidis, dan 3) Cauda epididymidis (bagian kaudal yang menyempit dan berlanjut menjadi ductus deferens). Berisi satu saluran ductus epididymidis yang berlekuk-lekuk sangat padat dengan panjang total 4-6 meter bila direntangkan, dilapisi epitel kolumnar bertingkat semu dengan stereosilia panjang. Berfungsi esensial sebagai tempat pematangan spermatozoa (maturasi: perolehan motilitas progresif maju dan kemampuan kapasitasi/fertilisasi sel telur selama transit 12-14 hari), reservoir penyimpanan sperma viable, reabsorpsi kelebihan cairan testis, serta perlindungan imunologis terhadap spermatozoa autolog.',
  arteri:
    'Cabang-cabang dari Arteria testicularis, beranastomosis dengan cabang dari Arteria ductus deferentis.',
  vena:
    'Plexus venosus pampiniformis yang mengalir ke Vena testicularis.',
  inervasi:
    'Plexus testicularis dan plexus hypogastricus inferior (serabut simpatis T10-L1).',
  limfatik:
    'Nodi lymphatici lumbales / paraaortici laterales.',
  korelasiKlinis:
    'Epididimitis Akut: inflamasi hebat pada epididimis yang sering dipicu oleh infeksi asendens bakteri patogen menular seksual (Chlamydia trachomatis, Neisseria gonorrhoeae) pada pria muda <35 tahun atau bakteri koliform (E. coli) pada pria lanjut usia; Tanda Prehn Positif (nyeri skrotum berkurang saat testis dielevasi ke arah kranial, karakteristik untuk epididimitis dan membedakannya dari torsio testis); Spermatokel (kista retensi jinak berisi sperma mati pada caput epididimis); Epididimo-orkitis.'
};

const ductusDeferensDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ductus Deferens (Vas Deferens)',
  nameId: 'Duktus Deferens / Saluran Sperma',
  deskripsi:
    'Saluran muskular tebal kaku berdinding pejal dengan konsistensi seperti kawat (panjang 40-45 cm) yang menghantarkan spermatozoa dari cauda epididymidis menuju ductus ejaculatorius di pelvis. Berawal dari polus inferior testis, berjalan naik di dalam funiculus spermaticus (pars scrotalis et funicularis), menembus canalis inguinalis melalui anulus superficialis dan anulus profundus (pars inguinalis), melintas di dinding lateral pelvis (pars pelvica), menyilang superior terhadap ureter di dekat fundus vesica urinaria ("water under the bridge"), lalu melebar membentuk Ampulla ductus deferentis di posterior buli-buli sebelum menyatu dengan ductus excretorius vesikula seminalis. Dindingnya memiliki 3 lapis otot polos tebal (longitudinal luar, sirkular tengah, longitudinal dalam) yang menghasilkan kontraksi peristalsis sangat kuat untuk menyemprotkan spermatozoa saat ejakulasi.',
  arteri:
    'Arteria ductus deferentis (arteria deferentialis, cabang dari Arteria vesicalis superior atau inferior), berjalan mengiringi duktus dan beranastomosis dengan A. testicularis.',
  vena:
    'Vena ductus deferentis yang bermuara ke plexus venosus vesicalis dan plexus venosus pampiniformis.',
  inervasi:
    'Plexus deferentialis (cabang dari plexus hypogastricus inferior): Terutama serabut simpatis postganglionik dari segmen L1-L2 yang memicu kontraksi peristaltik terkoordinasi cepat dan masif selama fase emisi ejakulasi.',
  limfatik:
    'Nodi lymphatici iliaci externi dan Nodi lymphatici iliaci interni.',
  korelasiKlinis:
    'Vasektomi: prosedur kontrasepsi bedah minor mantap pada pria melalui insisi skrotum kecil untuk memotong, meligasi, atau mengkauterisasi segmen pars scrotalis ductus deferens secara bilateral; Agenesis Ductus Deferens Bilateral Kongenital (Congenital Bilateral Absence of the Vas Deferens / CBAVD) yang hampir selalu berasosiasi dengan mutasi gen CFTR (Cystic Fibrosis) dan menyebabkan infertilitas azoospermia obstruktif; Deferentitis.'
};

const uterusDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Uterus',
  nameId: 'Rahim / Uterus',
  deskripsi:
    'Organ reproduksi wanita berongga berdinding otot polos tebal piriformis (berbentuk buah pir terbalik, ukuran ~7,5 x 5 x 2,5 cm) di cavitas pelvis minor, terletak di antara vesica urinaria di anterior dan rectum di posterior. Posisi fisiologis normal pada wanita nullipara adalah anteversi (menekuk ke ventral 90° terhadap aksis vagina) dan antefleksi (menekuk ke ventral 160-170° terhadap aksis serviks). Terbagi atas: Fundus uteri (kubah di atas muara tuba), Corpus uteri (badan rahim yang menyempit di isthmus uteri), dan Cervix uteri (bagian leher silindris yang terdiri dari pars supravaginalis dan pars vaginalis / portio vaginalis yang menonjol ke vagina dan ditembus canalis cervicis). Dinding rahim tersusun atas 3 lapis: Perimetrium (lapisan serosa peritoneum viseral), Miometrium (anyaman tebal 3 lapis otot polos berinterdigitasi yang berkontraksi saat persalinan dan hemostasis postpartum), dan Endometrium (mukosa fungsional yang mengalami proliferasi, sekresi, dan peluruhan deskuamasi siklik saat menstruasi serta tempat nidasi blastosis dan pembentukan plasenta). Difiksasi oleh ligamentum latum uteri, ligamentum teres uteri, ligamentum cardinale (Mackenrodt), dan ligamentum uterosacrale.',
  arteri:
    'Arteria uterina (cabang utama divisio anterior Arteria iliaca interna) yang berjalan melintasi ligamentum cardinale, menyilang tepat di anterior dan superior ureter ("water under the bridge") ~1,5-2 cm lateral dari fornix lateralis vagina setinggi os internum serviks. Berjalan berliku-liku (tortuous) di margin lateral rahim, mempercabangkan arteri arkuata, arteri radialis, arteri basalis, dan arteri spiralis endometrium; beranastomosis luas dengan Arteria ovarica dan Arteria vaginalis.',
  vena:
    'Plexus venosus uterinus di lateral serviks dan corpus uteri di dalam ligamentum latum, bermuara ke Vena uterina dan selanjutnya ke Vena iliaca interna.',
  inervasi:
    'Plexus uterovaginalis (cabang dari plexus hypogastricus inferior): Serabut simpatis dari segmen T12-L1 memediasi vasokonstriksi dan tonus kontraksi uterus; Serabut parasimpatis dari Nn. splanchnici pelvici (S2-S4) memediasi vasodilatasi dan inhibisi kontraksi; Jalur nyeri: Nosiseptif dari fundus dan corpus uteri mengikuti serabut simpatis retrograd ke segmen T10-L1 (nyeri kontraksi persalinan fase awal), sedangkan nosiseptif dari serviks dan vagina atas berjalan via parasimpatis ke segmen S2-S4.',
  limfatik:
    'Fundus uteri mengalir ke Nodi lymphatici lumbales (paraaortici) dan sebagian kecil via lig. teres uteri ke Nodi lymphatici inguinales superficiales; Corpus uteri ke Nodi lymphatici iliaci externi; Cervix uteri mengalir luas ke Nodi lymphatici iliaci interni, iliaci externi, obturatorii, dan sacrales.',
  korelasiKlinis:
    'Leiomioma Uteri (Mioma Uteri): tumor jinak monoklonal sel otot polos miometrium yang memicu menoragia, anemia defisiensi besi, dan penekanan pelvis; Adenomiosis dan Endometriosis; Karsinoma Endometrium; Karsinoma Serviks Uteri: keganasan epitel serviks (skuamosa atau adenokarsinoma) yang dipicu infeksi persisten Human Papillomavirus (HPV) risiko tinggi tipe 16 dan 18; Prolapsus Uteri: penurunan rahim ke liang vagina akibat ruptur atau pelemahan aparatus penyangga diafragma pelvis (otot levator ani) dan ligamentum kardinale pasca trauma persalinan pervaginam; Perdarahan Postpartum (PPH) akibat atonia uteri; Ruptur Uteri.'
};

const ovaryDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Ovarium',
  nameId: 'Ovarium / Indung Telur',
  deskripsi:
    'Sepasang organ reproduksi wanita primer (gonad) berbentuk oval pipih seperti buah badam (~3 x 1,5 x 1 cm) yang terletak di dinding lateral pelvis minor pada fossa ovarica (Waldeyer). Difiksasi secara anatomis oleh: 1) Ligamentum suspensorium ovarii (ligamentum infundibulopelvicum, duplikasi peritoneum dari dinding lateral pelvis yang membawa vasa ovarica dan pleksus saraf), 2) Ligamentum ovarii proprium (tali fibromuskular dari polus inferior ovarium ke cornu uteri di posterior insersi tuba), dan 3) Mesovarium (lipatan pendek peritoneum dari daun posterior ligamentum latum). Memiliki dua fungsi esensial: 1) Gametogenesis (folikulogenesis berkala: pematangan folikel primordial menjadi folikel de Graaf dan ovulasi oosit sekunder setiap siklus menstruasi), dan 2) Endokrinologis (sintesis dan sekresi hormon steroid seksual: estrogen oleh sel granulosa/teka interna dan progesteron oleh korpus luteum di bawah regulasi sumbu hipotalamus-hipofisis-ovarium / GnRH, FSH, dan LH).',
  arteri:
    'Arteria ovarica dextra et sinistra (cabang langsung Aorta abdominalis setinggi diskus L2 di dinding posterior abdomen), melintasi linea terminalis pelvis dan berjalan di dalam Ligamentum suspensorium ovarii menuju polus tubarius ovarii; membentuk anastomosis kuat dengan ramus ovaricus dari Arteria uterina di dalam mesovarium.',
  vena:
    'Plexus venosus pampiniformis ovaricus di dalam ligamentum suspensorium ovarii yang berkumpul membentuk Vena ovarica: Vena ovarica dextra bermuara langsung ke Vena cava inferior (sudut miring), sedangkan Vena ovarica sinistra bermuara ke Vena renalis sinistra secara tegak lurus.',
  inervasi:
    'Plexus ovaricus (mengikuti perjalanan vasa ovarica dari plexus coeliacus, aorticus, dan renalis): Serabut otonom simpatis dari segmen T10-T11; Serabut aferen viseral nosiseptif mengikuti serabut simpatis menuju segmen T10 medulla spinalis (dasar timbulnya nyeri ovulasi siklik / Mittelschmerz dan nyeri torsio ovarium yang dirasakan di regio periumbilikal).',
  limfatik:
    'Vasa lymphatica mengikuti vasa ovarica di dalam ligamentum suspensorium ovarii langsung naik ke Nodi lymphatici lumbales / paraaortici laterales setinggi L1-L2 (menjelaskan penyebaran limfatik karsinoma ovarium ke retroperitoneal lumbal atas).',
  korelasiKlinis:
    'Torsio Ovarium: rotasi puntiran ovarium dan tuba uterina pada ligamentum suspensorium ovarii yang menyebabkan oklusi aliran vena disusul arteri, memicu iskemia/infark akut gonad (kegawatdaruratan bedah ginekologi yang menuntut detorsi/ovariopeksi segera); Kista Ovarium Fungsional (kista folikular dan kista luteal); Sindrom Ovarium Polikistik (PCOS / Stein-Leventhal syndrome): anovulasi kronis, hiperandrogenisme klinis/biokimia, dan morfologi polikistik ovarium pada USG; Neoplasma Ovarium (Kistadenoma serosum/musinosum, Teratoma kistik matur / kista dermoid, dan Karsinoma Ovarium epitelial yang sering asimtomatik hingga stadium lanjut dengan asites dan karsinomatosis peritoneal).'
};

const fallopianTubeDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Tuba Uterina (Salpinx / Fallopian Tube)',
  nameId: 'Tuba Falopi / Saluran Telur',
  deskripsi:
    'Sepasang saluran muskular berongga sepanjang 10-12 cm yang membentang bilateral dari cornu uteri menuju ke polus superior ovarium, terletak di tepi bebas superior mesosalpinx (bagian atas ligamentum latum uteri). Terbagi menjadi 4 regio anatomis: 1) Infundibulum tubae (corong berujung terbuka ke cavitas peritonealis dengan fimbriae seperti jemari yang menyapu permukaan ovarium saat ovulasi; fimbria ovarica menempel langsung ke ovarium), 2) Ampulla tubae (segmen terpanjang ~6-7 cm, berdiameter paling lebar, berdinding tipis dengan lipatan mukosa bercabang lebat; merupakan situs fisiologis primer terjadinya fertilisasi ovum oleh spermatozoa), 3) Isthmus tubae (segmen medial sempit berdinding otot polos tebal), dan 4) Pars uterina / intramuralis (segmen pendek ~1 cm yang menembus miometrium dinding rahim untuk bermuara ke cavitas uteri melalui ostium uterinum tubae). Mukosanya dilapisi epitel kolumnar bersilia yang berdenyut ke arah cavitas uteri bersama kontraksi peristalsis otot polos untuk mentranspor zigot.',
  arteri:
    'Suplai vaskular ganda yang beranastomosis kaya di dalam mesosalpinx: 2/3 medial disuplai oleh ramus tubarius dari Arteria uterina; 1/3 lateral disuplai oleh ramus tubarius dari Arteria ovarica.',
  vena:
    'Vena tubaria yang mendrainase ke plexus venosus uterinus (medial) dan plexus venosus ovaricus (lateral).',
  inervasi:
    'Plexus hypogastricus inferior (2/3 medial) dan plexus ovaricus (1/3 lateral): Mengandung serabut simpatis T10-L1 dan parasimpatis S2-S4 (Nn. splanchnici pelvici) yang meregulasi motilitas silia dan gelombang peristalsis muskularis tuba; Serabut aferen viseral nosiseptif berjalan ke segmen T10-T11.',
  limfatik:
    'Mengalir mengikuti vasa ovarica ke Nodi lymphatici lumbales (paraaortici) dan sebagian ke Nodi lymphatici iliaci interni.',
  korelasiKlinis:
    'Kehamilan Ektopik Terganggu (KET / Ruptured Tubal Pregnancy): 95-98% kehamilan ektopik berimplantasi di tuba uterina (terbanyak di ampulla 70% dan isthmus 12%), ruptur tuba akibat distensi trofoblas memicu hemoperitoneum masif, tanda rangsang peritoneal, dan syok hipovolemik fatal; Salpingitis Akut dan Penyakit Radang Panggul (Pelvic Inflammatory Disease / PID) pasca infeksi menular seksual (gonore, klamidia) yang dapat menyebabkan oklusi tuba, hidrosalping, piosalping, adhesi pelvis, infertilitas faktor tuba, dan peningkatan risiko kehamilan ektopik; Ligasi Tuba (tubektomi) sebagai metode kontrasepsi mantap wanita.'
};

const vaginaDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Vagina',
  nameId: 'Vagina / Liang Senggama',
  deskripsi:
    'Saluran fibromuskular elastis yang dapat berdistensi sepanjang 7,5-9 cm, membentang dari ostium vaginae di vestibulum vaginae melintasi diafragma pelvis dan diafragma urogenitale menuju fornix vaginae yang melingkari cervix uteri. Dinding anterior (~7,5 cm) berbatasan dengan fundus vesica urinaria dan uretra; dinding posterior (~9 cm) berhubungan di superior dengan cavitas Douglasi (excavatio rectouterina), di media dengan ampulla recti, dan di inferior dengan centrum perinei (perineal body). Bagian kubah superior membentuk 4 fornices: Fornix posterior (terdalam, dilapisi peritoneum cavitas Douglasi), Fornix anterior, dan dua Fornices laterales. Berfungsi sebagai saluran ekskresi darah menstruasi, organ kopulasi wanita (menerima penis dan ejakulat saat koitus), serta bagian terminal dari jalan lahir (birth canal) pada partus pervaginam.',
  arteri:
    'Arteria vaginalis (cabang langsung dari divisio anterior A. iliaca interna), diperkuat oleh ramus vaginalis dari Arteria uterina, rami dari Arteria pudenda interna, dan Arteria rectalis media. Membentuk arteri azigos vagina longitudinal di linea mediana dinding anterior dan posterior.',
  vena:
    'Plexus venosus vaginalis yang mengelilingi dinding vagina, beranastomosis bebas dengan plexus venosus uterinus, vesicalis, dan rectalis, bermuara ke Vena iliaca interna.',
  inervasi:
    'Inervasi ganda segmental yang sangat khas: 1) 3/4 Superior Vagina (inervasi viseral otonom): Diinervasi oleh plexus uterovaginalis (cabang plexus hypogastricus inferior) dengan serabut simpatis T12-L1 dan parasimpatis S2-S4; tidak memiliki nosiseptor somatik sehingga insensitif terhadap sentuhan, sayatan, atau panas, hanya peka terhadap regangan; 2) 1/4 Inferior Vagina (inervasi somatik): Diinervasi oleh Nervus perinealis (cabang dari Nervus pudendus, radiks spinal S2, S3, S4) yang sangat sensitif terhadap nyeri tajam, suhu, dan sentuhan raba.',
  limfatik:
    '3/4 Superior mengalir ke Nodi lymphatici iliaci interni dan Nodi lymphatici iliaci externi; 1/4 Inferior (di bawah membran himenalis) mengalir ke Nodi lymphatici inguinales superficiales.',
  korelasiKlinis:
    'Kuldosentesis: tindakan pungsi diagnostik aspirasi cairan atau darah dari cavitas Douglasi melalui penusukan jarum pada fornix posterior vagina untuk mendeteksi hemoperitoneum pada ruptur kehamilan ektopik; Fistula Vesikovaginal atau Fistula Rektovaginal akibat kompresi iskemia nekrosis persalinan macet lama (obstructed labor) atau komplikasi histerektomi/radioterapi; Vaginitis (infeksi Candidiasis vulvovaginalis, Trichomoniasis, atau Vaginosis Bakterial akibat gangguan flora normal Lactobacillus doderlein); Vaginismus (spasme involunter otot lurik dasar panggul perivaginal m. pubococcygeus yang menghalangi penetrasi); Ruptur perineum dan laserasi dinding vagina saat partus pervaginam.'
};

const penisDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Penis',
  nameId: 'Penis / Zakar',
  deskripsi:
    'Organ kopulasi eksterna sekaligus saluran akhir traktus urinarius pada pria. Terdiri atas: 1) Radix penis (terfiksasi di spatium perinei superficialis, terdiri atas sepasang crura penis dan satu bulbus penis), 2) Corpus penis (bagian bebas pendular yang dibungkus fascia Buck dan fascia Colles/Dartos, terdiri atas 3 massa silinder erektil berkapiler sinusoid: sepasang Corpora Cavernosa di dorsal untuk ereksi dan satu Corpus Spongiosum di ventral yang dilalui pars spongiosa urethrae), dan 3) Glans penis (ekspansi distal corpus spongiosum berbentuk konus yang melingkupi ujung corpora cavernosa, memiliki corona glandis dan sulcus coronarius, ditutupi oleh preputium penis dan berakhir pada meatus urethrae externus).',
  arteri:
    'Cabang-cabang terminal dari Arteria pudenda interna: Arteria profunda penis (menembus centrum corpora cavernosa untuk mencabangkan arteriae helicinae berotot tebal yang berdilatasi saat ereksi), Arteria dorsalis penis (berjalan di antara vena dorsalis profunda dan nervus dorsalis penis di bawah fascia Buck untuk menyuplai glans dan kulit), Arteria bulbi penis, dan Arteria urethralis.',
  vena:
    'Vena dorsalis profunda penis (berada di bawah fascia Buck pada sulcus dorsalis intercavernous, mendrainase corpora cavernosa dan glans menuju plexus venosus prostaticus Santorini); Vena dorsalis superficialis penis (berada di subkutan superfisial di luar fascia Buck, bermuara ke Vena saphena magna via vena pudenda externa).',
  inervasi:
    'Dual otonom & somatik: 1) Otonom: Plexus cavernosus (lanjutan plexus hypogastricus inferior): Serabut parasimpatis dari Nn. splanchnici pelvici (S2-S4 / nervi erigentes) merangsang sintase nitrat oksida endotel (eNOS/nNOS) untuk melepaskan Nitric Oxide (NO) yang memicu relaksasi otot polos arteria helicina dan trabekula kavernosa sehingga terjadi ereksi ("Point" = Parasympathetic); Serabut simpatis dari T11-L2 memediasi vasokonstriksi arteri, kontraksi trabekula, detumesensi, serta emisi ejakulasi ("Shoot" = Sympathetic); 2) Somatik: Nervus dorsalis penis (cabang Nervus pudendus S2-S4) menghantarkan sensorik taktil dan proprioseptif dari glans penis.',
  limfatik:
    'Kulit penis dan preputium mengalir ke Nodi lymphatici inguinales superficiales; Glans penis dan uretra anterior ke Nodi lymphatici inguinales profundi dan Nodi lymphatici iliaci externi.',
  korelasiKlinis:
    'Disfungsi Ereksi (Impotensi vaskular, neurogenik, atau psikogenik); Priapismus (ereksi memanjang persisten >4 jam tanpa hasrat seksual: tipe iskemik low-flow veno-oklusif yang memerlukan dekompresi aspirasi darurat vs non-iskemik high-flow arterial); Fraktur Penis (ruptur tunica albuginea corpora cavernosa akibat trauma tekukan mendadak saat koitus); Fimosis (ketidakmampuan retraksi preputium) dan Parafimosis (preputium terjerat di sulkus koronarius yang memicu edema glans akut); Sirkumsisi (tindakan eksisi preputium penis).'
};

const scrotumDetails: OrganDetails = {
  type: 'organ',
  nameLatin: 'Scrotum',
  nameId: 'Skrotum / Kantung Zakar',
  deskripsi:
    'Kantung kutaneus berpigmen dan berotot tipis yang tergantung di anterior perineum dan posterior penis, dipisahkan secara internal oleh septum scroti menjadi dua kompartemen yang masing-masing menampung satu testis, epididimis, dan funiculus spermaticus. Dinding skrotum tersusun atas 6 lapisan konsentris yang merupakan turunan langsung lapisan dinding anterior abdomen saat desensus testis (urutan luar ke dalam): 1) Cutis (kulit berpigmen dengan rugae dan raphe scroti), 2) Tunica dartos (lapisan otot polos tanpa lemak yang berkerut untuk termoregulasi testis), 3) Fascia spermatica externa (turunan aponeurosis M. obliquus externus abdominis), 4) Fascia cremasterica beserta Musculus cremaster (turunan M. obliquus internus abdominis dan fascia-nya, berfungsi menarik testis ke atas saat dingin atau refleks kremaster), 5) Fascia spermatica interna (turunan fascia transversalis), dan 6) Tunica vaginalis lamina parietalis (turunan peritoneum saccus vaginalis).',
  arteri:
    'Rami scrotales anteriores (berasal dari Arteria pudenda externa cabang A. femoralis) dan Rami scrotales posteriores (berasal dari Arteria perinealis cabang A. pudenda interna); diperkuat cabang dari Arteria cremasterica (cabang A. epigastrica inferior).',
  vena:
    'Venae scrotales yang mengiringi arteri, bermuara ke Vena pudenda externa (menuju V. saphena magna) dan Vena pudenda interna.',
  inervasi:
    'Facies anterior skrotum diinervasi oleh Nervus ilioinguinalis (radiks L1) dan ramus genitalis Nervus genitofemoralis (L1-L2, serabut motorik m. cremaster); Facies posterior skrotum diinervasi oleh rami scrotales dari Nervus perinealis (cabang N. pudendus S2-S4) dan ramus perinealis Nervus cutaneus femoris posterior (S1-S3).',
  limfatik:
    'Nodi lymphatici inguinales superficiales (berbeda secara radikal dari testis yang mengalir ke nodi paraaortici retroperitoneal).',
  korelasiKlinis:
    'Refleks Kremaster: goresan ringan pada kulit paha bagian medial atas merangsang serabut sensorik N. ilioinguinalis (L1) yang memicu kontraksi M. cremaster ipsilateral via ramus genitalis N. genitofemoralis (L1-L2) untuk mengangkat testis (refleks negatif atau asimetris dicurigai pada torsio testis atau lesi medula spinalis L1-L2); Fournier Gangrene: fasciitis nekrotikans polimikroba yang sangat agresif pada skrotum dan perineum yang memerlukan debridemen bedah darurat; Hematokel skrotum; Edema skrotum masif pada gagal jantung kongestif atau sindrom nefrotik.'
};

// ============================================================================
// KAMUS KNOWLEDGE BASE ORGAN UROGENITAL & PELVIS (URINARY_KNOWLEDGE)
// ============================================================================

export const URINARY_KNOWLEDGE: Record<string, OrganDetails> = {
  // Ginjal & Komponen Renal (Kidney)
  'kidney': kidneyDetails,
  'ren': kidneyDetails,
  'ginjal': kidneyDetails,
  'kidney right': kidneyRightDetails,
  'kidney_right': kidneyRightDetails,
  'ren dexter': kidneyRightDetails,
  'ren_dexter': kidneyRightDetails,
  'ginjal kanan': kidneyRightDetails,
  'kidney left': kidneyLeftDetails,
  'kidney_left': kidneyLeftDetails,
  'ren sinister': kidneyLeftDetails,
  'ren_sinister': kidneyLeftDetails,
  'ginjal kiri': kidneyLeftDetails,

  // Struktur Internal Ginjal (Korteks, Medula, Pelvis, Kaliks)
  'cortex renalis': renalCortexDetails,
  'cortex_renalis': renalCortexDetails,
  'renal cortex': renalCortexDetails,
  'renal_cortex': renalCortexDetails,
  'korteks ginjal': renalCortexDetails,

  'medulla renalis': renalMedullaDetails,
  'medulla_renalis': renalMedullaDetails,
  'renal medulla': renalMedullaDetails,
  'renal_medulla': renalMedullaDetails,
  'medula ginjal': renalMedullaDetails,

  'pelvis renalis': renalPelvisDetails,
  'pelvis_renalis': renalPelvisDetails,
  'renal pelvis': renalPelvisDetails,
  'renal_pelvis': renalPelvisDetails,
  'pelvis ginjal': renalPelvisDetails,
  'pielum': renalPelvisDetails,

  'calyx major': calyxMajorDetails,
  'calyx_major': calyxMajorDetails,
  'calyx renalis major': calyxMajorDetails,
  'major calyx': calyxMajorDetails,
  'major_calyx': calyxMajorDetails,
  'kaliks mayor': calyxMajorDetails,

  'calyx minor': calyxMinorDetails,
  'calyx_minor': calyxMinorDetails,
  'calyx renalis minor': calyxMinorDetails,
  'minor calyx': calyxMinorDetails,
  'minor_calyx': calyxMinorDetails,
  'kaliks minor': calyxMinorDetails,

  // Saluran Kemih (Ureter, Vesica Urinaria, Urethra)
  'ureter': ureterDetails,
  'ureter dexter': ureterDetails,
  'ureter sinister': ureterDetails,

  'urinary bladder': urinaryBladderDetails,
  'urinary_bladder': urinaryBladderDetails,
  'vesica urinaria': urinaryBladderDetails,
  'vesica_urinaria': urinaryBladderDetails,
  'bladder': urinaryBladderDetails,
  'kandung kemih': urinaryBladderDetails,
  'buli-buli': urinaryBladderDetails,

  'urethra': urethraDetails,
  'uretra': urethraDetails,
  'urethra masculina': urethraDetails,
  'urethra feminina': urethraDetails,

  // Kelenjar Adrenal / Suprarenal
  'glandula suprarenalis': adrenalGlandDetails,
  'glandula_suprarenalis': adrenalGlandDetails,
  'adrenal gland': adrenalGlandDetails,
  'adrenal_gland': adrenalGlandDetails,
  'adrenal': adrenalGlandDetails,
  'suprarenal': adrenalGlandDetails,
  'kelenjar adrenal': adrenalGlandDetails,

  // Organ Reproduksi Pria (Genitalia Masculina)
  'prostata': prostateDetails,
  'prostate': prostateDetails,
  'prostate gland': prostateDetails,
  'kelenjar prostat': prostateDetails,

  'vesicula seminalis': seminalVesicleDetails,
  'vesicula_seminalis': seminalVesicleDetails,
  'seminal vesicle': seminalVesicleDetails,
  'seminal_vesicle': seminalVesicleDetails,
  'glandula vesiculosa': seminalVesicleDetails,
  'kantung mani': seminalVesicleDetails,

  'testis': testisDetails,
  'testes': testisDetails,
  'testicle': testisDetails,
  'buah zakar': testisDetails,

  'epididymis': epididymisDetails,
  'epididimis': epididymisDetails,

  'ductus deferens': ductusDeferensDetails,
  'ductus_deferens': ductusDeferensDetails,
  'vas deferens': ductusDeferensDetails,
  'vas_deferens': ductusDeferensDetails,
  'saluran sperma': ductusDeferensDetails,

  'penis': penisDetails,
  'zakar': penisDetails,

  'scrotum': scrotumDetails,
  'kantung zakar': scrotumDetails,

  // Organ Reproduksi Wanita (Genitalia Feminina)
  'uterus': uterusDetails,
  'rahim': uterusDetails,
  'womb': uterusDetails,

  'ovarium': ovaryDetails,
  'ovary': ovaryDetails,
  'indung telur': ovaryDetails,

  'tuba uterina': fallopianTubeDetails,
  'tuba_uterina': fallopianTubeDetails,
  'fallopian tube': fallopianTubeDetails,
  'fallopian_tube': fallopianTubeDetails,
  'salpinx': fallopianTubeDetails,
  'saluran telur': fallopianTubeDetails,
  'tuba falopi': fallopianTubeDetails,

  'vagina': vaginaDetails,
  'liang senggama': vaginaDetails
};
