/**
 * Comprehensive Skeletal System (Osteology & Arthrology) Knowledge Base for AnatoSmart 3D
 * Standard: Terminologia Anatomica (TA) & International Orthopaedic / Clinical Classifications
 */

import { BoneDetails } from '../medical-knowledge';

export const SKELETAL_KNOWLEDGE: Record<string, BoneDetails> = {
  // ==========================================
  // KEPALA & LEHER (CRANIUM & CRANIOFACIAL BONES)
  // ==========================================
  'skull': {
    type: 'bone',
    nameLatin: 'Cranium',
    nameId: 'Tengkorak (Kranium)',
    deskripsi: 'Kompleks kerangka osteologis yang membungkus dan melindungi ensefalon (otak), meninges, serta organ sensorik indera khusus (penglihatan, pendengaran, vestibular, olfaktori, dan pengecap). Menopang arsitektur fasial wajah, menyokong pintu masuk traktus respiratorius dan digestivus, serta menyediakan insersio bagi otot-otot mastikasi dan mimik.',
    artikulasi: 'Sendi sutura fibrosa immotil (sutura coronalis, sagittalis, lambdoidea, squamosa, sphenofrontalis) antar tulang calvaria dan basis cranii; sendi sinovial bikondilar bergerak bebas Articulatio Temporomandibularis (TMJ); serta berartikulasi dengan columna vertebralis via Articulatio Atlantooccipitalis.',
    landmark: 'Calvaria, Basis cranii (fossa cranii anterior, media, posterior), Pterion, Foramen magnum, Canalis caroticus, Foramen jugulare, Foramen ovale, Foramen spinosum, Canalis opticus, Fissura orbitalis superior, Meatus acusticus internus et externus.',
    korelasiKlinis: 'Fraktur basis cranii (tanda klinis: Battle sign / hematoma mastoid, raccoon eyes / ekimosis periorbital, liquorrhea CSF melalui telinga atau hidung); trauma pada titik pterion berisiko tinggi merobek Arteria meningea media yang memicu Hematoma Epidural (EDH) dengan karakteristik lucid interval; peningkatan tekanan intrakranial (TIK).'
  },
  'cranium': {
    type: 'bone',
    nameLatin: 'Cranium (Neurocranium & Viscerocranium)',
    nameId: 'Tengkorak Kepala',
    deskripsi: 'Kerangka pelindung saraf pusat cranial yang terbagi atas Neurocranium (kubah pelindung otak) dan Viscerocranium (kerangka splanchnocranium pembentuk struktur wajah dan orofasial).',
    artikulasi: 'Suturae cranii (synarthrosis fibrosa), Articulatio Temporomandibularis (diarthrosis bikondilar sinovial), dan Articulatio Atlantooccipitalis.',
    landmark: 'Vertex, Bregma, Lambda, Inion, Pterion, Asterion, Sella turcica, Foramen magnum, Crista galli, Lamina cribrosa.',
    korelasiKlinis: 'Kraniosinostosis (penutupan prematur sutura kranial kongenital); fraktur impresi kubah tengkorak (depressed skull fracture); perdarahan intrakranial (EDH, SDH, SAH).'
  },
  'os frontale': {
    type: 'bone',
    nameLatin: 'Os Frontale',
    nameId: 'Tulang Dahi / Os Frontal',
    deskripsi: 'Tulang pipih pneumatik tunggal yang membentuk kontur dahi, atap cavitas orbita, dan sebagian besar lantai fossa cranii anterior. Berfungsi memproteksi lobus frontalis serebri, bola mata, serta menampung sinus frontalis sebagai rongga resonansi suara.',
    artikulasi: 'Berartikulasi di posterior dengan kedua os parietale (Sutura Coronalis), di posterolateral dengan os sphenoidale (ala major), di inferolateral dengan os zygomaticum, serta di inferomedial dengan os ethmoidale, os lacrimale, maxilla, dan os nasale.',
    landmark: 'Squama frontalis, Glabella, Arcus superciliaris, Margo supraorbitalis, Foramen / Incisura supraorbitalis, Spina nasalis, Processus zygomaticus ossis frontalis, Facies orbitalis, Sinus frontalis (sinus paranasal).',
    korelasiKlinis: 'Fraktur dinding anterior/posterior sinus frontalis berisiko komplikasi meningitis, abses serebri, atau osteomielitis tulang kranial (Pott puffy tumor); cedera tepi orbita atas dapat mencederai Nervus supraorbitalis (cabang V1 trigeminus) menimbulkan baal / hipestesia dahi.'
  },
  'frontal': {
    type: 'bone',
    nameLatin: 'Os Frontale',
    nameId: 'Tulang Dahi',
    deskripsi: 'Komponen kranial anterior pelindung lobus frontalis serebri dan pembentuk margo supraorbitalis serta atap cavitas orbitalis.',
    artikulasi: 'Sutura coronalis dengan os parietale, sutura sphenofrontalis, sutura frontonasalis, sutura frontomaxillaris, dan sutura frontozygomatica.',
    landmark: 'Glabella, Arcus superciliaris, Foramen supraorbitale, Facies orbitalis, Sinus frontalis.',
    korelasiKlinis: 'Fraktur os frontale sering berkaitan dengan cedera otak traumatik (TBI) lobus frontal (perubahan kepribadian/fungsi eksekutif) dan fraktur dasar orbita superior.'
  },
  'os parietale': {
    type: 'bone',
    nameLatin: 'Os Parietale',
    nameId: 'Tulang Ubun-Ubun / Os Parietal',
    deskripsi: 'Sepasang tulang pipih kuadrilateral melengkung yang membentuk sebagian besar kubah atap kranial (calvaria) dan dinding lateral kepala. Berfungsi melindungi lobus parietalis serebri dari cedera benturan tumpul mekanis langsung.',
    artikulasi: 'Berartikulasi satu sama lain di linea mediana melalui Sutura Sagittalis; di anterior dengan os frontale (Sutura Coronalis); di posterior dengan os occipitale (Sutura Lambdoidea); serta di inferior dengan os temporale (Sutura Squamosa) dan os sphenoidale (ala major).',
    landmark: 'Tuber parietale (eminensia parietalis), Linea temporalis superior et inferior (perlekatan fascia temporalis dan origo m. temporalis), Sulcus sinus sagittalis superioris, Sulci arteriosi (jejak vaskularisasi ramus parietalis A. meningea media), Foramen parietale.',
    korelasiKlinis: 'Skafosefali (craniosynostosis akibat fusi dini sutura sagittalis yang menyebabkan kranium memanjang sempit); fraktur depresi calvaria parietalis yang mendesak korteks sensorik primer gyrus postcentralis.'
  },
  'parietal': {
    type: 'bone',
    nameLatin: 'Os Parietale',
    nameId: 'Tulang Parietal (Ubun-ubun)',
    deskripsi: 'Tulang berpasangan pembentuk puncak kubah calvaria kranium yang melindungi struktur hemisfer serebri parietalis.',
    artikulasi: 'Sutura sagittalis, sutura coronalis, sutura lambdoidea, dan sutura squamosa.',
    landmark: 'Tuber parietale, Linea temporalis superior/inferior, Sulcus arteria meningeae mediae.',
    korelasiKlinis: 'Fraktur linier parietalis yang melintasi sulcus vaskular A. meningea media dapat memicu hematoma epidural temporoparietal akut.'
  },
  'os temporale': {
    type: 'bone',
    nameLatin: 'Os Temporale',
    nameId: 'Tulang Pelipis / Os Temporal',
    deskripsi: 'Sepasang tulang kranium kompleks di aspek inferolateral kepala yang menampung dan melindungi aparatus indera pendengaran dan keseimbangan (koklea dan kanalis semisirkularis). Menjadi pilar artikulasi rahang bawah serta dilalui struktur neurovaskular vital basis cranii.',
    artikulasi: 'Berartikulasi dengan os parietale (Sutura Squamosa), os occipitale (Sutura Occipitomastoidea), os sphenoidale (ala major), os zygomaticum (membentuk Arcus Zygomaticus), dan condylus mandibulae (Articulatio Temporomandibularis / TMJ).',
    landmark: 'Pars squamosa, Pars petrosa (pyramis petrosa padat pembungkus telinga dalam), Pars tympanica, Processus mastoideus (selulae mastoideae), Processus styloideus, Processus zygomaticus, Meatus acusticus externus et internus, Fossa mandibularis, Tuberculum articulare, Foramen stylomastoideum (lintasan N. facialis), Canalis caroticus.',
    korelasiKlinis: 'Fraktur basis kranii pars petrosa (fraktur longitudinal/transversal os temporale) menimbulkan otorrhea cairan serebrospinal (CSF otorrhea), hemotimpanum, kelumpuhan N. facialis VII (palsi Bell perifer post-traumatik), dan tuli sensorineural atau konduktif; mastoiditis supuratif akut.'
  },
  'temporal': {
    type: 'bone',
    nameLatin: 'Os Temporale',
    nameId: 'Tulang Temporal',
    deskripsi: 'Tulang pelipis penampung aparatus vestibulokoklear dan artikulasi sendi pengunyah TMJ.',
    artikulasi: 'Articulatio Temporomandibularis, sutura squamosa, arcus zygomaticus.',
    landmark: 'Processus mastoideus, Processus styloideus, Meatus acusticus externus, Canalis caroticus, Pyramis petrosa.',
    korelasiKlinis: 'Dislokasi temporomandibular joint (TMJ dislocation); kolesteatoma mastoid; cedera N. VII pada foramen stylomastoideum.'
  },
  'os occipitale': {
    type: 'bone',
    nameLatin: 'Os Occipitale',
    nameId: 'Tulang Belakang Kepala / Os Oksipital',
    deskripsi: 'Tulang pipih trapezoid tunggal di regio postero-inferior kranium yang membentuk sebagian besar fossa cranii posterior. Berfungsi melindungi serebelum, lobus oksipitalis serebri, batang otak (pons dan medula oblongata), serta menjadi pintu gerbang aksial kranio-spinalis melalui Foramen magnum.',
    artikulasi: 'Berartikulasi superior-anterior dengan kedua os parietale (Sutura Lambdoidea); lateral dengan os temporale; anterior dengan corpus sphenoidale (Synchondrosis Sphenooccipitalis); dan inferior dengan atlas vertebra C1 melalui Articulatio Atlantooccipitalis.',
    landmark: 'Foramen magnum (lintasan medula oblongata dan A. vertebralis), Condylus occipitalis dextra et sinistra, Protuberantia occipitalis externa (Inion), Crista occipitalis externa, Linea nuchalis superior, inferior, et suprema, Canalis hypoglossi (lintasan N. XII), Clivus, Fossa cerebellaris et cerebralis.',
    korelasiKlinis: 'Herniasi tonsila serebeli melalui Foramen magnum (Sindrom Malformasi Chiari atau ancaman kematian akibat kompresi pusat kardiorespirasi medula oblongata pada peningkatan TIK masif); fraktur kondilus oksipitalis yang mengancam saraf kranial bawah (CN IX-XII).'
  },
  'occipital': {
    type: 'bone',
    nameLatin: 'Os Occipitale',
    nameId: 'Tulang Oksipital',
    deskripsi: 'Komponen kranial posterior penopang kepala pada vertebra atlas dan pelindung fossa posterior serta batang otak.',
    artikulasi: 'Articulatio Atlantooccipitalis dengan C1, sutura lambdoidea, synchondrosis sphenooccipitalis.',
    landmark: 'Foramen magnum, Condylus occipitalis, Protuberantia occipitalis externa (Inion), Clivus.',
    korelasiKlinis: 'Fraktur ring foramen magnum; cedera disosiasi atlanto-oksipitalis (internal decapitation) yang bersifat fatal.'
  },
  'os sphenoidale': {
    type: 'bone',
    nameLatin: 'Os Sphenoidale',
    nameId: 'Tulang Baji / Os Sfenoid',
    deskripsi: 'Tulang baji pneumatik berbentuk kupu-kupu yang menempati posisi sentral basis cranii. Berperan sebagai batu kunci ("keystone") arsitektur tengkorak yang menghubungkan neurokranium dengan viserokranium, melindungi glandula pituitaria (hipofisis), serta menyediakan pintu lintasan hampir seluruh saraf kranial anterior dan pembuluh optik.',
    artikulasi: 'Berartikulasi dengan 12 tulang kranium: os frontale, os ethmoidale, os parietale, os temporale, os occipitale, vomer, os zygomaticum, dan os palatinum.',
    landmark: 'Corpus sphenoidale, Sella turcica (Fossa hypophysialis tempat glandula pituitaria bersemayam, Dorsum sellae, Tuberculum sellae), Ala minor, Ala major, Processus pterygoideus (Lamina medialis et lateralis, Hamulus pterygoideus), Canalis opticus (N. II & A. ophthalmica), Fissura orbitalis superior (CN III, IV, V1, VI), Foramen rotundum (N. V2), Foramen ovale (N. V3), Foramen spinosum (A. meningea media), Sinus sphenoidalis.',
    korelasiKlinis: 'Pendekatan bedah transsphenoidal reseksi adenoma hipofisis melalui sinus sphenoidalis; Sindrom Fisura Orbitalis Superior akibat fraktur sphenoid (oftalmoplegia total dan anestesia periorbita); cedera chiasma opticum memicu hemianopsia bitemporal.'
  },
  'sphenoid': {
    type: 'bone',
    nameLatin: 'Os Sphenoidale',
    nameId: 'Tulang Sfenoid',
    deskripsi: 'Tulang sentral basis cranii berbentuk kelelawar pembentuk sella turcica dan kanalis optikus.',
    artikulasi: 'Berartikulasi dengan os frontale, parietale, temporale, occipitale, ethmoidale, dan zygomaticum.',
    landmark: 'Sella turcica, Fossa hypophysialis, Ala major, Ala minor, Canalis opticus, Foramen ovale.',
    korelasiKlinis: 'Fraktur ala major sphenoidale dengan kompresi sinus kavernosus (trombosis sinus kavernosus / fistel karotiko-kavernosa).'
  },
  'os ethmoidale': {
    type: 'bone',
    nameLatin: 'Os Ethmoidale',
    nameId: 'Tulang Tapis / Os Etmoid',
    deskripsi: 'Tulang pneumatik spons berpori di linea mediana anterior basis cranii, di antara kedua cavitas orbita dan di atap cavitas nasi. Membentuk komponen osseus septum nasi, concha nasalis superior dan media, serta memfasilitasi transmisi serabut saraf penghidu olfaktori.',
    artikulasi: 'Berartikulasi dengan os frontale, os sphenoidale, os nasale, os lacrimale, maxilla, os palatinum, concha nasalis inferior, dan vomer.',
    landmark: 'Crista galli (titik perlekatan dural falx cerebri), Lamina cribrosa (lempeng berpori tempat tembusnya fila olfactoria Nervus cranialis I), Lamina perpendicularis (pembentuk 2/3 superior septum nasi osseus), Labyrinthus ethmoidalis (Cellulae ethmoidales anteriores, mediae, posteriores), Concha nasalis superior et media, Bulla ethmoidalis.',
    korelasiKlinis: 'Fraktur lamina cribrosa akibat trauma tumpul fasial hebat atau pukulan pangkal hidung merobek meninges dan menimbulkan CSF rhinorrhea (keluarnya cairan serebrospinal dari hidung), anosmia permanen (robeknya N. olfactorius I), dan risiko meningitis asendens pneumokokus fatal.'
  },
  'ethmoid': {
    type: 'bone',
    nameLatin: 'Os Ethmoidale',
    nameId: 'Tulang Etmoid (Tapis)',
    deskripsi: 'Tulang tapis berpori penyusun atap kavitas nasal, septum hidung, dan dinding medial rongga mata.',
    artikulasi: 'Sutura frontoethmoidalis, sphenoethmoidalis, dan persendian septum nasi dengan vomer dan kartilago septi.',
    landmark: 'Lamina cribrosa, Crista galli, Lamina perpendicularis, Concha nasalis superior/media.',
    korelasiKlinis: 'Fraktur lamina papyracea os ethmoidale pada "blowout fracture" orbita; poliposis ethmoidalis yang menyebabkan obstruksi jalan napas hidung kronis.'
  },
  'maxilla': {
    type: 'bone',
    nameLatin: 'Maxilla',
    nameId: 'Tulang Rahang Atas',
    deskripsi: 'Sepasang tulang pneumatik besar yang menyatu di linea mediana membentuk rangka sentral wajah, dasar dan dinding medial cavitas orbita, dinding lateral dan dasar cavitas nasi, serta 2/3 anterior palatum durum (langit-langit mulut keras). Menopang arkus dentalis gigi superior serta menampung sinus maksilaris terbesar.',
    artikulasi: 'Berartikulasi di linea mediana dengan maxilla kontralateral (Sutura Intermaxillaris); serta berartikulasi dengan os frontale, os ethmoidale, os nasale, os zygomaticum, os lacrimale, concha nasalis inferior, os palatinum, dan vomer.',
    landmark: 'Corpus maxillae, Sinus maxillaris (Antrum of Highmore), Processus frontalis, Processus zygomaticus, Processus alveolaris (memuat alveoli dentes gigi atas I1-M3), Processus palatinus, Foramen infraorbitale (lintasan N. dan A. infraorbitalis), Fissura orbitalis inferior, Tuber maxillae.',
    korelasiKlinis: 'Fraktur maksilofasial Le Fort (Le Fort I: fraktur transversal alveolar horizontal di atas palatum; Le Fort II: fraktur piramidal melibatkan nasomaksila dan lantai orbita; Le Fort III: kraniofasial disjungsi total yang memisahkan wajah dari basis kranii); sinusitis maksilaris dentogenik akibat perluasan infeksi periapikal gigi molar/premolar atas.'
  },
  'mandibula': {
    type: 'bone',
    nameLatin: 'Mandibula',
    nameId: 'Tulang Rahang Bawah',
    deskripsi: 'Tulang terkuat, terbesar, dan satu-satunya tulang kraniofasial yang dapat bergerak bebas (motil). Membentuk kontur rahang bawah dan dagu, menopang arkus dentalis inferior, serta bertindak sebagai tuas biomekanik dinamis utama untuk proses mastikasi (mengunyah), penelanan, dan artikulasi fonasi bicara.',
    artikulasi: 'Berartikulasi superior dengan fossa mandibularis dan tuberculum articulare ossis temporalis membentuk Articulatio Temporomandibularis (TMJ / sendi sinovial bikondilar dengan discus articularis fibrocartilagineus ganda).',
    landmark: 'Corpus mandibulae (horizontal), Ramus mandibulae (vertikal), Angulus mandibulae, Processus condylaris (Caput et Collum mandibulae), Processus coronoideus (titik insersio m. temporalis), Incisura mandibulae, Protuberantia mentalis, Foramen mentale (lintasan N. mentalis), Foramen mandibulae (dilindungi Lingula mandibulae tempat masuknya N. & A. alveolaris inferior), Linea mylohyoidea, Spina mentalis.',
    korelasiKlinis: 'Dislokasi TMJ anterior (subluksasi caput mandibulae ke anterior melewati tuberculum articulare saat membuka mulut terlalu lebar / menguap, menyebabkan mulut terkunci terbuka); fraktur mandibula (paling sering pada collum condyli, angulus, atau corpus; karena struktur cincin kaku, fraktur sering bersifat multipel/bilateral); komplikasi anestesi blok saraf alveolaris inferior.'
  },
  'mandible': {
    type: 'bone',
    nameLatin: 'Mandibula',
    nameId: 'Mandibula (Rahang Bawah)',
    deskripsi: 'Tulang rahang bawah motil penyokong arkus gigi inferior dan tuas kinetik artikulasi temporomandibular.',
    artikulasi: 'Articulatio Temporomandibularis (TMJ) bilateral.',
    landmark: 'Caput mandibulae, Processus coronoideus, Angulus mandibulae, Foramen mentale, Foramen mandibulae.',
    korelasiKlinis: 'Trismus dan nyeri alih akibat disfungsi sendi temporomandibular (TMD); fraktur ramus dan corpus mandibula pada trauma tumpul wajah.'
  },
  'os zygomaticum': {
    type: 'bone',
    nameLatin: 'Os Zygomaticum',
    nameId: 'Tulang Pipi / Os Zigomatikum',
    deskripsi: 'Sepasang tulang tebal kuadrilateral yang membentuk tonjolan prominen pipi (malar eminence) serta dinding lateral dan inferolateral cavitas orbita. Berperan menahan benturan lateral fasial serta menjadi origo bagi M. masseter (otot pengunyah utama).',
    artikulasi: 'Berartikulasi superior dengan os frontale (Processus frontalis); lateral dengan os temporale membentuk Arcus Zygomaticus (Processus temporalis); medial dengan maxilla (Processus maxillaris); dan posterior dengan ala major ossis sphenoidalis.',
    landmark: 'Facies malaris, Facies orbitalis, Facies temporalis, Processus frontalis, Processus temporalis, Processus maxillaris, Arcus zygomaticus, Foramen zygomaticofaciale, Foramen zygomaticotemporale.',
    korelasiKlinis: 'Fraktur tripod / tetrapod zigoma (ZMC fracture / Zygomaticomaxillary Complex Fracture) yang memisahkan os zygomaticum pada keempat suturanya; menimbulkan deformitas pipi asimetris mendatar, diplopia akibat dislokasi bola mata/otot rektus inferior, trismus akibat penekanan processus coronoideus mandibulae, dan parestesia pipi akibat robekan cabang N. infraorbitalis.'
  },
  'zygomatic': {
    type: 'bone',
    nameLatin: 'Os Zygomaticum',
    nameId: 'Tulang Pipi',
    deskripsi: 'Komponen skeletal lateral wajah pembentuk arcus zygomaticus dan dinding inferolateral rongga orbita.',
    artikulasi: 'Sutura zygomaticofrontalis, zygomaticotemporalis, zygomaticomaxillaris, dan sphenozygomatica.',
    landmark: 'Arcus zygomaticus, Processus temporalis, Facies orbitalis.',
    korelasiKlinis: 'Fraktur arcus zygomaticus "V-shaped" tertekan yang mengunci pergerakan membuka mulut rahang bawah.'
  },
  'os nasale': {
    type: 'bone',
    nameLatin: 'Os Nasale',
    nameId: 'Tulang Hidung / Os Nasal',
    deskripsi: 'Sepasang tulang kecil persegi panjang memanjang yang terletak berdampingan di linea mediana fasial bagian tengah-atas, membentuk punggung jembatan hidung (dorsum nasi) dan margin superior apertura piriformis.',
    artikulasi: 'Berartikulasi satu sama lain di linea mediana melalui Sutura Internasalis; di superior dengan os frontale (Sutura Frontonasalis); di lateral dengan processus frontalis maxillae; dan di posterior dengan lamina perpendicularis os ethmoidale serta cartilago septi nasi.',
    landmark: 'Facies externa cembung, Facies interna konkaf dengan Sulcus ethmoidalis, Foramen nasale, Margo superior, inferior, medialis, et lateralis.',
    korelasiKlinis: 'Tulang wajah yang paling sering mengalami fraktur pada manusia (fraktur nasal) akibat cedera olahraga, jatuh, atau kekerasan fisik; komplikasi meliputi epistaksis berat (perdarahan pleksus Kiesselbach), deviasi septum nasi yang menyebabkan obstruksi napas hidung, dan hematoma septum nasi yang berisiko abses serta nekrosis kartilago kolaps ("saddle nose deformity").'
  },
  'nasal': {
    type: 'bone',
    nameLatin: 'Os Nasale',
    nameId: 'Tulang Nasal',
    deskripsi: 'Sepasang tulang pipih kecil pembentuk dorsum dan jembatan hidung bagian atas.',
    artikulasi: 'Sutura internasalis, sutura frontonasalis, dan sutura nasomaxillaris.',
    landmark: 'Dorsum nasi, Foramen nasale, Sulcus ethmoidalis.',
    korelasiKlinis: 'Fraktur os nasale tertutup dan terbuka; deformitas deviasi hidung pasca trauma yang memerlukan tindakan reduksi tertutup atau septorinoplasti.'
  },
  'os hyoideum': {
    type: 'bone',
    nameLatin: 'Os Hyoideum',
    nameId: 'Tulang Lidah / Os Hioid',
    deskripsi: 'Tulang independen unik berbentuk tapal kuda / huruf "U" di trigonum koli anterior setinggi vertebra servikal C3. Merupakan satu-satunya tulang pada tubuh manusia yang tidak berartikulasi langsung dengan tulang lain (tulang melayang / floating bone). Berfungsi sebagai jangkar penyokong bagi dasar mulut, lidah, faring, dan laring, memfasilitasi elevasi laringeal saat menelan (deglutisi) dan modulasi fonasi bicara.',
    artikulasi: 'Tidak memiliki sendi tulang langsung; tersuspensi secara ligamen dan muskular: terhubung ke processus styloideus temporale via Ligamentum Stylohyoideum, serta ke cartilago thyroidea laring via Membrana Thyrohyoidea.',
    landmark: 'Corpus ossis hyoidei (kuadrilateral anterior), Cornu majus (tanduk besar memproyeksi ke posterosuperior bilateral), Cornu minus (tanduk kecil kerucut perlekatan ligamen stylohyoideum).',
    korelasiKlinis: 'Fraktur os hyoideum (terutama fraktur cornu majus) merupakan temuan patognomonik klasik dalam patologi forensik untuk membuktikan terjadinya trauma asfiksia mekanik akibat pencekikan manual leher (strangulasi manual) atau gantung diri; sindrom Eagle (kalsifikasi ligamen stylohyoideum yang memicu disfagia dan nyeri leher alih).'
  },
  'hyoid': {
    type: 'bone',
    nameLatin: 'Os Hyoideum',
    nameId: 'Tulang Hioid',
    deskripsi: 'Tulang melayang di leher anterior penambat otot lidah dan elevator laring.',
    artikulasi: 'Suspensi ligamentosa stylohyoidea dan membrana thyrohyoidea.',
    landmark: 'Corpus hyoideum, Cornu majus, Cornu minus.',
    korelasiKlinis: 'Evaluasi fraktur forensik pada kasus kekerasan kompresi leher; titik fiksasi reseksi kista duktus tiroglosus (prosedur Sistrunk).'
  },

  // ==========================================
  // KERANGKA AKSIAL: TULANG BELAKANG & DADA
  // ==========================================
  'columna vertebralis': {
    type: 'bone',
    nameLatin: 'Columna Vertebralis',
    nameId: 'Kolom Tulang Belakang (Vertebra)',
    deskripsi: 'Pilar muskuloskeletal aksial fleksibel sentral tubuh yang tersusun dari 33 segmen vertebra (7 servikal, 12 torakal, 5 lumbal, 5 sakral menyatu, 4 koksigeal menyatu). Berfungsi menyokong beban berat kepala, leher, dan trunkus; mentransmisikan gaya kinetik ke cingulum pelvicum; menyerap gaya kejut aksial melalui diskus intervertebralis; memfasilitasi gerakan multiaksial (fleksi, ekstensi, fleksi lateral, rotasi); serta melindungi medulla spinalis dan cauda equina di dalam Canalis vertebralis.',
    artikulasi: 'Symphysis intervertebralis (discus intervertebralis fibrocartilagineus amphiarthrosis antar corpus); Articulatio Zygapophysialis (sendi faset sinovial plana antar processus articularis); Art. Atlantooccipitalis; Art. Atlantoaxialis; Art. Costovertebralis; dan Art. Sacroiliaca.',
    landmark: 'Corpus vertebrae, Arcus vertebrae (pediculus dan lamina), Foramen vertebrale (membentuk Canalis vertebralis), Processus spinosus, Processus transversus, Processus articularis superior et inferior, Foramina intervertebralia (tempat keluarnya saraf spinalis), Kurvatura lordosis servikal, kifosis torakal, lordosis lumbal, dan kifosis sakral.',
    korelasiKlinis: 'Skoliosis struktural (deviasi rotasional lateral 3D >10° sudut Cobb); Kifosis patologis (Dowager hump pada osteoporosis); Spondylolisthesis (pergeseran korpus vertebra akibat defek pars interarticularis); Herniasi Nukleus Pulposus (HNP / radikulopati skiatika); Stenosis spinalis kompresi saraf; fraktur kompresi vertebra osteoporotik.'
  },
  'vertebral column': {
    type: 'bone',
    nameLatin: 'Columna Vertebralis',
    nameId: 'Tulang Belakang Aksial',
    deskripsi: 'Pilar tulang penyokong aksial tubuh pelindung korda spinalis.',
    artikulasi: 'Sendi simfisis diskus intervertebralis dan sendi faset zygapophysial.',
    landmark: 'Canalis vertebralis, Foramina intervertebralia, Discus intervertebralis, Processus spinosus.',
    korelasiKlinis: 'Fraktur kompresi baji osteoporotik; instabilitas spinal pasca trauma; spondilitis tuberkulosa (Pott disease).'
  },
  'vertebra cervicalis': {
    type: 'bone',
    nameLatin: 'Vertebrae Cervicales (C1-C7)',
    nameId: 'Tulang Belakang Leher (Vertebra Servikal)',
    deskripsi: 'Tujuh segmen vertebra terkecil namun memiliki mobilitas rentang gerak paling luas pada columna vertebralis. Didesain untuk menopang dan mengarahkan pandangan kranium, melindungi segmen medulla spinalis servikalis, serta memfasilitasi lintasan arteri vertebralis menuju sirkulasi serebral posterior.',
    artikulasi: 'Diskus intervertebralis fibrocartilagineus (C2-C7); Articulatio Zygapophysialis faset horizontal-oblik (45°); Articulatio Uncovertebralis (sendi Luschka antar uncus corporis C3-C7); Articulatio Atlantooccipitalis (C0-C1); Articulatio Atlantoaxialis (C1-C2).',
    landmark: 'Foramen transversarium (foramen khas pada processus transversus C1-C6 yang dilalui Arteria dan Vena vertebralis), Corpus reniformis kecil, Foramen vertebrale triangular lebar, Processus spinosus bifida (terbelah dua pada C2-C6), Uncus corporis (processus uncinatus), Vertebra prominens (processus spinosus panjang non-bifida pada C7 yang mudah dipalpasi di pangkal tengkuk).',
    korelasiKlinis: 'Whiplash injury (cedera regang hiperekstensi-hiperfleksi servikal pada tabrakan mobil dari belakang); Cervical spondylotic myelopathy (kompresi medula spinalis leher akibat osteofit degeneratif); fraktur servikal C3-C5 mengancam Nervus phrenicus yang memicu henti napas seketika akibat kelumpuhan diafragma.'
  },
  'cervical vertebra': {
    type: 'bone',
    nameLatin: 'Vertebra Cervicalis',
    nameId: 'Vertebra Servikalis',
    deskripsi: 'Segmen vertebra servikal penyusun leher dengan foramen transversarium untuk arteri vertebralis.',
    artikulasi: 'Sendi faset servikal, unkovertebral Luschka, dan diskus servikal.',
    landmark: 'Foramen transversarium, Processus spinosus bifida, Uncus corporis, Vertebra prominens (C7).',
    korelasiKlinis: 'Radikulopati servikalis (cervical root impingement C6/C7); subluksasi sendi faset servikal pasca trauma leher.'
  },
  'atlas c1': {
    type: 'bone',
    nameLatin: 'Atlas (Vertebra Cervicalis I)',
    nameId: 'Tulang Atlas (C1)',
    deskripsi: 'Vertebra servikal pertama yang unik karena tidak memiliki corpus vertebra maupun processus spinosus sejati. Berbentuk cincin osteologis tebal yang menopang langsung kranium kepala dan mentransmisikan berat kranial ke aksis leher, memfasilitasi gerakan fleksi-ekstensi mengangguk kepala ("nodding / yes movement").',
    artikulasi: 'Superior: Fovea articularis superior massae lateralis berartikulasi dengan kedua condylus occipitalis (Articulatio Atlantooccipitalis / sendi elipsoid condyloid); Inferior: berartikulasi dengan axis C2 via Articulatio Atlantoaxialis mediana (dengan dens) dan lateral (sendi plana).',
    landmark: 'Arcus anterior, Arcus posterior, Massa lateralis (tebal penopang beban), Tuberculum anterius et posterius, Fovea dentis (faset artikulasi kartilaginosa untuk dens axis di aspek posterior arcus anterior), Foramen transversarium, Sulcus arteriae vertebralis (alur di arcus posterior yang dilalui A. vertebralis sebelum menembus foramen magnum).',
    korelasiKlinis: 'Fraktur Jefferson (fraktur ledakan "burst" 4 kuadran cincin atlas akibat kompresi beban aksial vertikal mendadak pada puncak kepala, misalnya menyelam di kolam dangkal); subluksasi atlantoaksial akibat ruptur ligamentum transversum atlantis (sering pada penderita Rheumatoid Arthritis lanjut atau Trisomi 21 sindrom Down) yang berisiko fatal transeksi medula spinalis.'
  },
  'atlas': {
    type: 'bone',
    nameLatin: 'Atlas (C1)',
    nameId: 'Tulang Atlas C1',
    deskripsi: 'Cincin tulang vertebra servikal C1 penopang langsung condylus occipitalis kranium.',
    artikulasi: 'Articulatio Atlantooccipitalis dan Articulatio Atlantoaxialis.',
    landmark: 'Massa lateralis, Fovea dentis, Arcus anterior/posterior, Sulcus arteriae vertebralis.',
    korelasiKlinis: 'Fraktur Jefferson; disosiasi kranioservikal; instabilitas sendi atlantoaksial.'
  },
  'axis c2': {
    type: 'bone',
    nameLatin: 'Axis (Vertebra Cervicalis II / Epistropheus)',
    nameId: 'Tulang Aksis (C2)',
    deskripsi: 'Vertebra servikal kedua yang bertindak sebagai poros tiang pasak rotasional tempat berputarnya vertebra atlas bersama kranium kepala. Memungkinkan rotasi horizontal kepala hingga 50° ke kanan dan kiri (gerakan menggeleng / "no movement").',
    artikulasi: 'Berartikulasi di anterior dengan fovea dentis atlas dan ligamentum transversum atlantis (Articulatio Atlantoaxialis mediana / sendi sinovial trokoidea pasak); berartikulasi inferolateral dengan atlas (Art. Atlantoaxialis lateralis); serta berartikulasi di inferior dengan vertebra C3 melalui diskus intervertebralis C2-C3 dan sendi faset.',
    landmark: 'Dens axis (processus odontoideus - tonjolan mirip pasak pasak gigi ke superior yang merupakan corpus atlas yang melekat pada C2 secara filogenetik), Facies articularis anterior et posterior dentis, Apex dentis (perlekatan lig. apicale dentis dan lig. alaria), Corpus axis masif, Processus spinosus bifida sangat tebal, Pediculus arcus vertebrae, Foramen transversarium.',
    korelasiKlinis: 'Hangman fracture (fraktur traumatis spondilolistesis bilateral pada pars interarticularis C2 akibat hiperekstensi aksial leher mendadak, sering pada kecelakaan mobil tabrakan frontal atau hukuman gantung); Fraktur Dens Anderson-D\'Alonzo (Tipe I: avulsi apeks; Tipe II: fraktur basis dens leher yang berisiko sangat tinggi mengalami non-union / pseudoarthrosis karena aliran darah watershed yang miskin; Tipe III: fraktur meluas ke korpus C2 yang memiliki angka penyatuan lebih baik).'
  },
  'axis': {
    type: 'bone',
    nameLatin: 'Axis (C2)',
    nameId: 'Tulang Aksis C2',
    deskripsi: 'Vertebra C2 penyedia pasak dens odontoid untuk gerakan menggeleng rotasi kepala.',
    artikulasi: 'Articulatio atlantoaxialis mediana dan lateralis, serta sendi intervertebral C2-C3.',
    landmark: 'Dens axis (processus odontoideus), Processus spinosus bifida tebal, Facies articularis superior.',
    korelasiKlinis: 'Hangman\'s fracture; fraktur dens odontoid tipe II dengan risiko non-union avaskular; subluksasi rotasional atlantoaksial.'
  },
  'vertebra thoracica': {
    type: 'bone',
    nameLatin: 'Vertebrae Thoracicae (T1-T12)',
    nameId: 'Tulang Belakang Dada (Vertebra Torakal)',
    deskripsi: 'Dua belas segmen vertebra berukuran sedang yang membentuk kurvatura kifosis torakalis fisiologis dan menjadi jangkar artikular bagi 12 pasang tulang iga (costae). Didesain untuk kestabilan struktural tinggi guna membatasi gerak berlebih demi memproteksi organ vital di dalam cavitas thoracis (jantung, paru, pembuluh darah besar).',
    artikulasi: 'Symphysis intervertebralis dengan discus intervertebralis tipis; Articulatio Zygapophysialis sendi faset yang berorientasi bidang koronal frontal (memfasilitasi rotasi namun membatasi fleksi-ekstensi); serta persendian dengan costae melalui Articulatio Capitis Costae dan Articulatio Costotransversaria.',
    landmark: 'Corpus vertebrae berbentuk jantung (cordate), Foramen vertebrale sirkular kecil, Fovea costalis superior et inferior (demifaset pada posterolateral korpus untuk articulatio capitis costae), Fovea costalis processus transversus (faset untuk tuberculum costae pada T1-T10), Processus spinosus panjang meruncing yang miring tajam ke arah posteroinferior saling bertumpuk mirip genting atap.',
    korelasiKlinis: 'Fraktur kompresi osteoporotik vertebra torakal (membentuk baji anterior korpus yang memperparah kifosis senilis "dowager hump"); Spondilitis Tuberkulosa (Pott disease dengan destruksi korpus torakal tengah yang memicu pembentukan angulasi tajam kifotik / gibbus dan abses dingin psoas / paravertebral); fraktur dislokasi torakal berenergi tinggi yang menyebabkan transeksi korda spinalis torakal dan paraplegia inferior permanen.'
  },
  'thoracic vertebra': {
    type: 'bone',
    nameLatin: 'Vertebra Thoracica',
    nameId: 'Vertebra Torakalis',
    deskripsi: 'Segmen vertebra torakal berartikulasi dengan costae pembentuk dinding sangkar rongga dada.',
    artikulasi: 'Articulatio costovertebralis, articulatio costotransversaria, dan sendi faset zygapophysial bidang frontal.',
    landmark: 'Fovea costalis corporis, Fovea costalis processus transversi, Processus spinosus panjang inferior, Corpus cordate.',
    korelasiKlinis: 'Kifoskoliosis progresif; fraktur kompresi torakal pada pasien osteoporosis lanjut; radikulopati interkostal.'
  },
  'vertebra lumbalis': {
    type: 'bone',
    nameLatin: 'Vertebrae Lumbales (L1-L5)',
    nameId: 'Tulang Belakang Pinggang (Vertebra Lumbal)',
    deskripsi: 'Lima segmen vertebra terbesar, terberat, dan paling masif pada columna vertebralis. Bertugas menopang seluruh beban aksial berat tubuh bagian atas, mentransmisikannya ke os sacrum dan pelvis, serta menjadi tuas biomekanik utama untuk fleksi dan ekstensi trunkus.',
    artikulasi: 'Symphysis intervertebralis dengan discus intervertebralis tebal elastis penahan beban; Articulatio Zygapophysialis sendi faset yang berorientasi bidang sagital vertikal (faset superior menghadap posteromedial, faset inferior menghadap anterolateral, mengunci dan membatasi rotasi aksial namun memfasilitasi fleksi-ekstensi bebas); L5 berartikulasi inferior dengan basis sacri membentuk Articulatio Lumbosacralis.',
    landmark: 'Corpus vertebrae masif berbentuk ginjal (reniformis), Foramen vertebrale triangular sedang, Pediculus arcus tebal kokoh, Lamina kuat, Processus spinosus tebal berbentuk kapak horizontal kuadrilateral, Processus costalis (transversus panjang), Processus mamillaris (pada tepi posterior processus articularis superior tempat origo m. multifidus), Processus accessorius, Pars interarticularis (jembatan isthmus tulang antara processus articularis superior dan inferior).',
    korelasiKlinis: 'Herniasi Nukleus Pulposus (HNP lumbal paling sering pada L4-L5 dan L5-S1 menekan radiks nervus L5 atau S1 memicu skiatika lumbosakral / nyeri alih menjalar ke tungkai); Spondylolysis (fraktur stres kelelahan / defek diskontinuitas pars interarticularis, tampak "leher anjing Scottie patah" pada radiografi oblik); Spondylolisthesis (pergeseran korpus L4 atau L5 ke anterior relatif terhadap segmen di bawahnya); Stenosis spinalis lumbalis dengan gejala klaudikasio neurogenik.'
  },
  'lumbar vertebra': {
    type: 'bone',
    nameLatin: 'Vertebra Lumbalis',
    nameId: 'Vertebra Lumbalis',
    deskripsi: 'Segmen vertebra lumbar penopang beban mekanik terbesar columna vertebralis.',
    artikulasi: 'Sendi faset sagital zygapophysial, diskus intervertebralis lumbal, dan sendi lumbosakral L5-S1.',
    landmark: 'Corpus reniformis masif, Processus spinosus horizontal kuadrilateral, Pars interarticularis, Processus mamillaris.',
    korelasiKlinis: 'Low back pain (LBP mekanik); spondylolisthesis isthmik; HNP posterolateral menekan radiks spinalis cauda equina.'
  },
  'os sacrum': {
    type: 'bone',
    nameLatin: 'Os Sacrum',
    nameId: 'Tulang Kelangkang / Sakrum',
    deskripsi: 'Tulang baji triangular besar yang terbentuk dari fusi embrionik 5 segmen vertebra sakralis (S1-S5). Berperan sebagai batu kunci penopang ("keystone") cingulum pelvicum yang mentransmisikan seluruh berat badan dari kerangka aksial vertebra lumbosakral ke os coxae panggul dan ekstremitas inferior, serta membentuk dinding posterosuperior kokoh cavitas pelvis.',
    artikulasi: 'Superior: Basis ossis sacri berartikulasi dengan vertebra L5 melalui discus intervertebralis L5-S1 dan sendi faset lumbosakral (membentuk sudut angulasi Promontorium); Lateral: Facies auricularis berartikulasi kokoh dengan os ilium membentuk Articulatio Sacroiliaca bilateral (sendi sinovial parsial dan sindesmosis ligamentosa kuat); Inferior: Apex ossis sacri berartikulasi dengan os coccygis via Articulatio Sacrococcygea.',
    landmark: 'Promontorium ossis sacri, Basis ossis sacri, Ala sacralis (sayap lateral), Canalis sacralis, Hiatus sacralis (celah inferior akibat tidak menyatunya lamina S5 tempat akses injeksi anestesi epidural kaudal), Cornu sacrale, Foramina sacralia anteriora (pelvina - dilalui rami anteriores S1-S4 pleksus sakralis), Foramina sacralia posteriora (dorsalia), Crista sacralis mediana, intermedia, et lateralis, Facies auricularis sacri.',
    korelasiKlinis: 'Sakroiliitis inflamatorik (tanda kardinal awal pada spondiloartropati aksial / Ankylosing Spondylitis yang berujung pada fusi sendi "bamboo spine"); fraktur stres insufisiensi sakrum pada wanita geriatri dengan osteoporosis berat ("H-sign" atau "Honda sign" pada skintigrafi / MRI); anestesi blok kaudal epidural via hiatus sacralis pada prosedur obstetri-ginekologi atau proktologi.'
  },
  'sacrum': {
    type: 'bone',
    nameLatin: 'Os Sacrum',
    nameId: 'Sakrum (Tulang Kelangkang)',
    deskripsi: 'Fusi 5 vertebra sakral pembentuk dinding posterior panggul dan artikulasi sakroiliaka penopang beban aksial.',
    artikulasi: 'Articulatio Sacroiliaca, articulatio lumbosacralis L5-S1, dan articulatio sacrococcygea.',
    landmark: 'Promontorium, Hiatus sacralis, Foramina sacralia anteriora/posteriora, Ala sacralis.',
    korelasiKlinis: 'Fraktur insufisiensi sakral; disrupsi cincin panggul vertikal Malgaigne; neuropati radiks sakral S1-S4.'
  },
  'os coccygis': {
    type: 'bone',
    nameLatin: 'Os Coccygis',
    nameId: 'Tulang Ekor / Koksigis',
    deskripsi: 'Tulang triangular kecil yang terbentuk dari fusi rudimenter 3-5 (umumnya 4) vertebra koksigea. Walaupun tidak menopang berat badan saat berdiri tegak, koksigis bergerak fleksibel ke anterior saat duduk untuk mendistribusikan beban dan menjadi titik jangkar perlekatan penting bagi ligamentum sacrotuberale, sacrospinale, anococcygeum, serta otot-otot dasar panggul (M. levator ani dan M. coccygeus) yang krusial untuk kontinensia sfingter anorektal.',
    artikulasi: 'Berartikulasi superior dengan apex ossis sacri melalui symphysis / synchondrosis kartilaginosa fibrocartilage Articulatio Sacrococcygea (dapat mengalami osifikasi lanjut pada usia tua).',
    landmark: 'Basis coccygis, Cornu coccygeum (menonjol ke superior berartikulasi dengan cornu sacrale), Apex coccygis (membulat inferior), Facies pelvina konkaf et dorsalis cembung.',
    korelasiKlinis: 'Coccydynia (nyeri tumpul atau tajam kronis yang sangat menyiksa di area tulang ekor yang diperberat saat duduk atau bangkit dari kursi, sering dipicu oleh trauma jatuh terduduk terhempas pada bokong atau cedera regang persalinan pervaginam); subluksasi, sprain ligamen sakrokoksigeal, atau fraktur os coccygis.'
  },
  'coccyx': {
    type: 'bone',
    nameLatin: 'Os Coccygis',
    nameId: 'Tulang Ekor',
    deskripsi: 'Segmen terminal tulang belakang penambat otot diafragma pelvis dan ligamen dasar panggul.',
    artikulasi: 'Articulatio Sacrococcygea.',
    landmark: 'Cornu coccygeum, Apex coccygis, Basis coccygis.',
    korelasiKlinis: 'Coccydynia kronis pasca trauma jatuh terduduk; fraktur atau subluksasi koksigis pada partus presipitatus.'
  },
  'sternum': {
    type: 'bone',
    nameLatin: 'Sternum',
    nameId: 'Tulang Dada / Sternum',
    deskripsi: 'Tulang pipih berbentuk pedang belati di linea mediana anterior toraks. Terdiri dari tiga segmen: manubrium sterni, corpus sterni, dan processus xiphoideus. Berfungsi melindungi organ vital rongga dada (jantung, perikardium, arkus aorta, trunkus pulmonalis) dari trauma benturan anterior langsung, menyokong gelang bahu melalui klavikula, dan berpartisipasi dinamis dalam ekspansi sangkar dada saat pernapasan.',
    artikulasi: 'Superior-lateral: berartikulasi dengan clavicula via Articulatio Sternoclavicularis (sendi sinovial sellaris dengan discus articularis); Lateral: berartikulasi dengan cartilago costalis I (synchondrosis) serta cartilago costalis II-VII (Articulatio Sternocostalis); serta artikulasi internal synchondrosis manubriosternalis dan xiphisternalis.',
    landmark: 'Incisura jugularis (suprasternal notch setinggi diskus T2-T3), Incisura clavicularis, Angulus sterni (Angle of Louis - tonjolan transversa palpabel patokan klinis iga ke-2, setinggi bidang horizontal batas T4-T5 memisahkan mediastinum superior dan inferior), Incisurae costales I-VII, Fossa jugularis.',
    korelasiKlinis: 'Sternotomi mediana (pembelahan longitudinal sternum untuk akses operasi jantung bedah pintas koroner CABG atau perbaikan katup); fraktur sternum akibat benturan kemudi mobil pada kecelakaan lalu lintas (berisiko tinggi kontusio miokardial jantung atau ruptur aorta traumatis); aspirasi biopsi sumsum tulang hematopoietik pada manubrium.'
  },
  'manubrium': {
    type: 'bone',
    nameLatin: 'Manubrium Sterni',
    nameId: 'Hulu Tulang Dada / Manubrium',
    deskripsi: 'Bagian superior sternum yang berbentuk heksagonal tebal dan lebar. Menjadi jangkar artikular utama bagi gelang bahu (pectoral girdle) ekstremitas atas dan kartilago iga pertama, serta menyediakan perlekatan bagi otot sternocleidomastoideus, pectoralis major, dan sternohyoideus.',
    artikulasi: 'Berartikulasi bilateral dengan extremitas sternalis claviculae (Articulatio Sternoclavicularis), berartikulasi lateral dengan cartilago costalis I dan separuh atas kosta II, serta berartikulasi inferior dengan corpus sterni melalui Symphysis Manubriosternalis (Angulus sterni).',
    landmark: 'Incisura jugularis, Incisura clavicularis dextra et sinistra, Incisura costalis I, Demifaset untuk kosta II, Facies anterior et posterior.',
    korelasiKlinis: 'Dislokasi sternoklavikular posterior (kegawatdaruratan ortopedi langka namun mematikan karena dapat menekan trakea, esofagus, vena brakisefalika, atau arkus aorta di mediastinum posterior); situs pungsi aspirasi sumsum tulang diagnostik.'
  },
  'corpus sterni': {
    type: 'bone',
    nameLatin: 'Corpus Sterni',
    nameId: 'Badan Tulang Dada / Korpus Sternum',
    deskripsi: 'Segmen tengah sternum yang memanjang, pipih, dan lebih tipis dari manubrium. Terbentuk dari penyatuan 4 sternebrae embrionik, berfungsi melindungi ventrikel kanan jantung dan menjadi dinding penahan sangkar toraks.',
    artikulasi: 'Superior berartikulasi dengan manubrium pada angulus sterni; lateral berartikulasi langsung dengan separuh bawah cartilago costalis II dan cartilago costalis III hingga VII; inferior berartikulasi dengan processus xiphoideus pada synchondrosis xiphisternalis.',
    landmark: 'Lineae transversae (3 garis rigi fusi sternebrae), Incisurae costales II-VII, Margo lateralis bergerigi.',
    korelasiKlinis: 'Pectus excavatum ("funnel chest" - depresi konkaf sternum ke posterior yang dapat mengompresi volume ventrikel kanan dan menurunkan kapasitas vital paru); Pectus carinatum ("pigeon chest" - protrusi anterior berlebih sternum); dehisensi sternal pasca operasi kardiotoraks.'
  },
  'processus xiphoideus': {
    type: 'bone',
    nameLatin: 'Processus Xiphoideus',
    nameId: 'Taju Pedang / Xifoid',
    deskripsi: 'Proyeksi distal terkecil dan paling tipis pada ujung inferior sternum. Awalnya berupa kartilago hialin fleksibel pada masa muda yang mengalami osifikasi perlahan menjadi tulang keras sekitar usia 40 tahun. Menjadi titik jangkar insersio aponeurosis linea alba abdomen, M. rectus abdominis, M. transversus thoracis, dan diafragma pars sternalis.',
    artikulasi: 'Berartikulasi superior dengan batas bawah corpus sterni melalui Synchondrosis Xiphisternalis setinggi batas vertebra torakal T9-T10.',
    landmark: 'Apex cartilaginis xiphoideae (meruncing atau bifida bercabang), Foramen xiphoideum (variasi anatomis lubang di tengah prosesus), Demifaset incisura costalis VII.',
    korelasiKlinis: 'Fraktur processus xiphoideus akibat penekanan kompresi dada resusitasi jantung paru (RJP / CPR) dengan posisi tangan penolong yang terlalu rendah ke bawah; fragmen fraktur xifoid yang terdorong ke dalam dapat melaserasi lobus kiri hepar atau diafragma menimbulkan hemoperitoneum masif; Xiphodynia (nyeri tekan muskuloskeletal inflamasi lokal pada taju pedang).'
  },
  'costae': {
    type: 'bone',
    nameLatin: 'Costae (I-XII)',
    nameId: 'Tulang Rusuk / Tulang Iga',
    deskripsi: 'Dua belas pasang tulang pipih melengkung elastis yang membentuk dinding sangkar dada (cavea thoracis). Berfungsi memproteksi organ-organ vital toraks dan abdomen bagian atas (jantung, paru-paru, trakea, esofagus, hepar, lien, ginjal) serta bertindak sebagai tuas pengungkit biomekanik pernapasan yang bergerak membesar secara transversal ("bucket-handle movement") dan anteroposterior ("pump-handle movement") saat siklus ventilasi paru.',
    artikulasi: 'Posterior: berartikulasi dengan corpus vertebrae thoracicae (Articulatio Capitis Costae) dan dengan processus transversus (Articulatio Costotransversaria); Anterior: berartikulasi dengan sternum via cartilago costalis (iga 1-7), berartikulasi dengan kartilago di atasnya (iga 8-10), atau melayang bebas di dinding otot (iga 11-12).',
    landmark: 'Caput costae (facies articularis ganda dipisahkan crista capitis), Collum costae, Tuberculum costae (facies articularis untuk processus transversus), Corpus costae (shaft), Angulus costae (titik belokan lengkungan paling tajam dan titik mekanik terlemah), Sulcus costae (alur pada tepi inferior aspek internal yang memuat berkas neurovaskular interkostal: Vena, Arteria, Nervus intercostalis / VAN dari kranial ke kaudal).',
    korelasiKlinis: 'Fraktur kosta (paling sering terjadi pada iga 4-9 di area angulus costae akibat trauma tumpul dada); Flail chest (fraktur segmental pada ≥3 kosta berurutan di dua tempat atau lebih yang menghasilkan segmen dinding dada instabil bergerak paradoksal saat respirasi memicu gagal napas hipoksemik berat); komplikasi pneumotoraks tension, hemotoraks masif, atau ruptur lien/hepar akibat tusukan fragmen patahan iga yang tajam.'
  },
  'ribs': {
    type: 'bone',
    nameLatin: 'Costae',
    nameId: 'Tulang Iga (Rusuk)',
    deskripsi: 'Dua belas pasang tulang lengkung pembentuk rongga sangkar toraks pelindung kardiopulmonal.',
    artikulasi: 'Articulatio capitis costae, articulatio costotransversaria, dan articulatio sternocostalis.',
    landmark: 'Caput costae, Angulus costae, Sulcus costae (lintasan bundle neurovaskular VAN).',
    korelasiKlinis: 'Fraktur kosta; flail chest dengan gerakan paradoksal dinding dada; neuralgia interkostalis pasca herpes zoster atau trauma.'
  },
  'costae verae': {
    type: 'bone',
    nameLatin: 'Costae Verae (Costae I-VII)',
    nameId: 'Tulang Rusuk Sejati (Iga 1-7)',
    deskripsi: 'Tujuh pasang kosta teratas yang masing-masing melekat langsung ke sternum melalui cartilago costalis independen. Memberikan rigiditas arsitektur anterior sangkar dada paling kokoh untuk memproteksi sirkulasi jantung sentral dan arkus aorta.',
    artikulasi: 'Posterior berartikulasi dengan vertebra T1-T7; anterior berartikulasi langsung dengan manubrium sterni (kosta I) dan corpus sterni (kosta II-VII) melalui sendi synchondrosis dan sendi sinovial sternokostalis.',
    landmark: 'Costa I (terpendek, terlebar, paling melengkung horizontal, memiliki Tuberculum musculi scaleni anterioris / Lisfranc tubercle, Sulcus venae subclaviae di anterior, dan Sulcus arteriae subclaviae di posterior), Angulus costae, Cartilago costalis sejati.',
    korelasiKlinis: 'Fraktur costa I jarang terjadi karena terlindung oleh klavikula dan gelang bahu, namun jika terjadi menandakan impak trauma tumpul berenergi sangat tinggi dengan mortalitas tinggi akibat risiko cedera pleksus brakialis dan disrupsi A. subclavia; Sindrom Tietze / Costochondritis (inflamasi jinak nyeri tekan pada sambungan kondrokostal sejati yang sering didiagnosis banding dengan infark miokard akut).'
  },
  'costae spuriae': {
    type: 'bone',
    nameLatin: 'Costae Spuriae (Costae VIII-X)',
    nameId: 'Tulang Rusuk Palsu (Iga 8-10)',
    deskripsi: 'Tiga pasang kosta yang cartilago costalis anteriornya tidak menempel langsung ke sternum, melainkan menyatu secara bersambung ke tepi inferior kartilago iga di atasnya (kartilago kosta VII), membentuk arkus kostalis (Arcus Costalis) yang elastis di tepi apertura thoracis inferior.',
    artikulasi: 'Posterior berartikulasi dengan corpus dan processus transversus vertebra T8-T10; anterior berartikulasi antar kartilago via Articulatio Interchondralis sinovial berikatan fibrocartilage.',
    landmark: 'Arcus costalis (pinggiran tajam kosta anterior bawah yang membatasi toraks dan abdomen), Angulus infrasternalis, Facies articularis interchondralis.',
    korelasiKlinis: 'Slipping rib syndrome (hipermobilitas abnormal ujung kartilago kosta VIII-X akibat robekan ligamen interkondral yang menyebabkan ujung kosta bergeser dan menjepit nervus interkostalis anterior menimbulkan nyeri dinding perut/dada tajam); trauma tumpul kuadran kanan atas abdomen dengan fraktur iga 8-10 berisiko tinggi merobek parenkim hepar, sedangkan pada sisi kiri berisiko merobek lien.'
  },
  'costae fluctuantes': {
    type: 'bone',
    nameLatin: 'Costae Fluctuantes (Costae XI-XII)',
    nameId: 'Tulang Rusuk Melayang (Iga 11-12)',
    deskripsi: 'Dua pasang kosta inferior terpendek yang ujung kartilago anteriornya berakhir bebas di dalam muskulatur dinding abdomen posterolateral tanpa kontak struktural dengan sternum atau kosta lainnya. Memberikan proteksi fungsional posterior selektif bagi ginjal bilateral, glandula suprarenalis, dan limpa/hepar tanpa membatasi mobilitas diafragma dan fleksi-rotasi dinding abdomen.',
    artikulasi: 'Posterior: hanya berartikulasi dengan corpus vertebra torakal T11 dan T12 tunggal melalui Articulatio Capitis Costae (tidak memiliki sendi kostotransversa karena kosta 11 dan 12 tidak memiliki tuberculum costae). Ujung anterior melayang bebas tertanam di dalam fasia M. transversus abdominis dan M. quadratus lumborum.',
    landmark: 'Caput costae unifaset tunggal, Collum dan Tuberculum absen/rudimenter, Corpus tipis runcing tanpa alur sulcus costalis yang nyata.',
    korelasiKlinis: 'Fraktur costa XI-XII akibat benturan trauma tumpul pada flank / pinggang belakang berisiko tinggi menusuk dan melaserasi ginjal (laserasi parenkim renal grade III-IV yang bermanifestasi sebagai hematuria masif dan hematoma retroperitoneal).'
  },

  // ==========================================
  // EKSTREMITAS ATAS (PECTORAL GIRDLE & FREE UPPER LIMB)
  // ==========================================
  'clavicula': {
    type: 'bone',
    nameLatin: 'Clavicula',
    nameId: 'Tulang Selangka / Klavikula',
    deskripsi: 'Tulang panjang berbentuk huruf "S" memanjang horizontal yang bertindak sebagai satu-satunya penopang tulang kaku (strut) yang menghubungkan ekstremitas atas langsung ke kerangka aksial tubuh. Berfungsi menjauhkan gelang bahu dan lengan atas dari sangkar dinding dada demi mencapai ruang lingkup gerak maksimum abduksi dan sirkumduksi, mentransmisikan gaya benturan fisik dari lengan ke aksial sternum, serta melindungi bundle neurovaskular servikoaksilar (pleksus brakialis, A. dan V. subclavia) di bawahnya.',
    artikulasi: 'Medial: Extremitas sternalis berartikulasi dengan incisura clavicularis manubrii sterni membentuk Articulatio Sternoclavicularis (sendi sinovial sellaris dengan discus articularis fibrocartilage); Lateral: Extremitas acromialis berartikulasi dengan acromion scapulae membentuk Articulatio Acromioclavicularis (sendi sinovial plana).',
    landmark: 'Extremitas sternalis (berbentuk kuadrilateral cembung), Extremitas acromialis (pipih melebar horizontal), Corpus claviculae (2/3 medial cembung ke anterior, 1/3 lateral konkaf ke anterior), Tuberculum conoideum (insersio pars conoidea lig. coracoclaviculare), Linea trapezoidea (insersio pars trapezoidea lig. coracoclaviculare), Sulcus musculi subclavii, Impressio ligamenti costoclavicularis.',
    korelasiKlinis: 'Salah satu tulang yang paling sering mengalami fraktur pada manusia (~5-10% dari seluruh fraktur, paling sering terjadi pada sepertiga tengah / junction 1/3 medial dan 1/3 lateral akibat jatuh dengan bahu menumbuk tanah / direct blow); Dislokasi sendi akromioklavikular (separasi bahu / "shoulder separation" dengan klasifikasi Rockwood I-VI); fraktur displaced medial berisiko merobek Vena/Arteria subclavia atau menusuk pleura puncak paru (pneumotoraks).'
  },
  'clavicle': {
    type: 'bone',
    nameLatin: 'Clavicula',
    nameId: 'Klavikula (Tulang Selangka)',
    deskripsi: 'Strut skeletal penghubung kerangka aksial ke gelang bahu penyokong mobilitas lengan atas.',
    artikulasi: 'Articulatio Sternoclavicularis dan Articulatio Acromioclavicularis.',
    landmark: 'Extremitas acromialis, Extremitas sternalis, Tuberculum conoideum, Sulcus subclavius.',
    korelasiKlinis: 'Fraktur sepertiga tengah klavikula; shoulder separation; kompresi sindrom thoracic outlet (TOS).'
  },
  'scapula': {
    type: 'bone',
    nameLatin: 'Scapula',
    nameId: 'Tulang Belikat / Skapula',
    deskripsi: 'Tulang pipih triangular berpasangan yang terletak di dinding posterolateral cavitas thoracis setinggi costa II hingga VII. Berfungsi sebagai landasan bergerak utama gelang bahu (pectoral girdle), menyediakan permukaan perlekatan bagi otot-otot cuff rotator (supraspinatus, infraspinatus, subscapularis, teres minor) serta fasilitator ritme skapulohumeral (skala 2:1 pergerakan glenohumeral terhadap skapulotorakal) untuk abduksi penuh lengan di atas kepala.',
    artikulasi: 'Lateral: Cavitas glenoidalis berartikulasi dengan caput humeri membentuk Articulatio Humeri / Glenohumeralis (sendi peluru bola berongga sinovial spheroidal paling motil); Anterolateral: Acromion berartikulasi dengan clavicula via Articulatio Acromioclavicularis; serta meluncur di atas fascia dinding dada melalui artikulasi fisiologis artikulasio scapulothoracica.',
    landmark: 'Spina scapulae (rigi melintang posterior), Acromion (puncak tonjolan bahu), Processus coracoideus (tonjolan mirip paruh burung gagak tempat origo m. coracobrachialis, caput breve bicipitis, insersio pectoralis minor), Cavitas glenoidalis (fossa dangkal dengan Labrum glenoidale fibrocartilagineus), Tuberculum supraglenoidale (origo caput longum m. bicipitis brachii), Tuberculum infraglenoidale (origo caput longum m. tricipitis brachii), Fossa supraspinata, Fossa infraspinata, Fossa subscapularis, Incisura scapulae (dilalui N. suprascapularis di bawah Lig. transversum scapulae superius), Angulus superior, inferior, et lateralis.',
    korelasiKlinis: 'Winging Scapula (tulang belikat mencuat menonjol seperti sayap saat mendorong dinding akibat paralisis M. serratus anterior yang dipicu oleh cedera traksi atau iatrogenik pada Nervus thoracicus longus); fraktur skapula memerlukan impak berenergi kinetik masif (kecelakaan sepeda motor/jatuh dari tempat tinggi) dan sering disertai trauma intratorakal (kontusio paru, fraktur iga serial); glenohumeral labral tear (SLAP lesion / Bankart lesion).'
  },
  'humerus': {
    type: 'bone',
    nameLatin: 'Humerus',
    nameId: 'Tulang Lengan Atas',
    deskripsi: 'Tulang pipa panjang terbesar dan terberat pada ekstremitas superior. Bertindak sebagai tuas biomekanik utama untuk mengangkat beban, mendorong, melempar, memanjat, dan mengarahkan posisi pergelangan tangan dan jari ke ruang dimensional fungsional.',
    artikulasi: 'Proksimal: Caput humeri berartikulasi dengan cavitas glenoidalis scapulae membentuk Articulatio Humeri (Glenohumeral joint); Distal: berartikulasi dengan caput radii (Articulatio Humeroradialis) dan dengan incisura trochlearis ulnae (Articulatio Humeroulnaris) membentuk kompleks sendi siku (Articulatio Cubiti).',
    landmark: 'Caput humeri (setengah bola hemisferis), Collum anatomicum, Collum chirurgicum (penyempitan metafisis di bawah tuberkel yang merupakan area paling rentan fraktur), Tuberculum majus (insersio m. supraspinatus, infraspinatus, teres minor), Tuberculum minus (insersio m. subscapularis), Sulcus intertubercularis (bicipital groove lintasan tendo caput longum biceps), Tuberositas deltoidea, Sulcus nervi radialis (spiral groove posterior melingkar dilalui N. radialis dan A. profunda brachii), Condylus humeri (Capitulum humeri untuk kaput radius, Trochlea humeri untuk ulna), Epicondylus medialis (origo kelompok otot fleksor pronator antebrakium) et lateralis (origo ekstensor supinator), Fossa olecrani (menerima olekranon ulna saat ekstensi), Fossa coronoidea, Fossa radialis.',
    korelasiKlinis: 'Fraktur collum chirurgicum humeri (sering pada wanita osteoporosis lansia, berisiko tinggi mencederai Nervus axillaris yang menyebabkan anestesia area deltoid lateral dan paralisis m. deltoideus serta M. teres minor); Fraktur diafisis / batang corpus humeri (berisiko tinggi mencederai Nervus radialis di dalam spiral groove yang menghasilkan drop hand / wrist drop / hilangnya ekstensi pergelangan tangan dan jari); Fraktur suprakondiler humeri pada anak-anak (kegawatdaruratan ortopedi akibat risiko kompresi atau laserasi Arteria brachialis yang memicu iskemia kompartemen dan Kontraktur Iskemik Volkmann permanente); dislokasi bahu anterior (glenohumeral dislocation).'
  },
  'radius': {
    type: 'bone',
    nameLatin: 'Radius',
    nameId: 'Tulang Pengumpil / Radius',
    deskripsi: 'Tulang panjang lateral pada antebrachium (lengan bawah), terletak sejajar searah ibu jari (pollex). Memiliki peran kinematik rotasional yang sangat unik dalam memungkinkan supinasi dan pronasi tangan dengan cara berputar menyilang di atas tulang ulna di sekitar aksis longitudinal sendi radioulnar proksimal dan distal.',
    artikulasi: 'Proksimal: Fovea articularis capitis radii berartikulasi dengan capitulum humeri (Articulatio Humeroradialis), circumferentia articularis berartikulasi dengan incisura radialis ulnae (Articulatio Radioulnaris Proximalis yang diikat oleh Ligamentum anulare radii); Distal: Facies articularis carpalis berartikulasi dengan os scaphoideum dan os lunatum membentuk Articulatio Radiocarpalis (sendi pergelangan tangan), serta incisura ulnaris radii berartikulasi dengan caput ulnae membentuk Articulatio Radioulnaris Distalis.',
    landmark: 'Caput radii (silindris cakram), Circumferentia articularis, Fovea articularis, Collum radii, Tuberositas radii (insersio utama tendo M. biceps brachii), Corpus radii, Margo interosseus (perlekatan membrana interossea antebrachii), Processus styloideus radii (menonjol lebih distal ~1 cm dibandingkan prosesus stiloideus ulna), Incisura ulnaris radii, Tuberculum dorsale (Lister\'s tubercle - katrol pembelok arah tendo m. extensor pollicis longus).',
    korelasiKlinis: 'Fraktur Colles (fraktur metafisis distal radius transversal ekstra-artikular dengan angulasi dan displacement fragmen ke arah posterior / dorsal akibat jatuh dengan tangan terentang / FOOSH, menghasilkan deformitas khas "garpu makan" / dinner-fork deformity); Fraktur Smith (kebalikan dari fraktur Colles / "reverse Colles" dengan pergeseran fragmen ke arah anterior / volar akibat jatuh dengan pergelangan tangan tertekuk hiperfleksi); Fraktur Galeazzi (fraktur sepertiga distal diafisis radius disertai dislokasi sendi radioulnar distal / DRUJ); Subluksasi caput radii ("Nursemaid\'s elbow" pada anak balita akibat tarikan aksial lengan bawah mendadak yang menyelipkan ligamentum anulare ke dalam sendi radiokapitellar).'
  },
  'ulna': {
    type: 'bone',
    nameLatin: 'Ulna',
    nameId: 'Tulang Hasta / Ulna',
    deskripsi: 'Tulang panjang medial pada antebrachium (lengan bawah), sejajar searah jari kelingking. Berperan sebagai pilar stabilisator struktural utama bagi sendi siku (hinge joint) untuk gerakan fleksi dan ekstensi antebrakium, serta menyediakan landasan artikular tetap di mana radius berputar selama pronasi dan supinasi.',
    artikulasi: 'Proksimal: Incisura trochlearis mencengkeram erat trochlea humeri membentuk Articulatio Humeroulnaris (sendi engsel sejati), incisura radialis ulnae berartikulasi dengan caput radii (Art. Radioulnaris Proximalis); Distal: Caput ulnae berartikulasi dengan incisura ulnaris radii (Art. Radioulnaris Distalis), serta berartikulasi secara tidak langsung dengan os triquetrum dan lunatum via discus articularis fibrocartilagineus triangularis (TFCC / Triangular Fibrocartilage Complex).',
    landmark: 'Olecranon (tonjolan posterior siku paling menonjol tempat insersio M. triceps brachii), Processus coronoideus, Incisura trochlearis (cekungan sendi engsel mirip kunci pas), Incisura radialis, Tuberositas ulnae (insersio m. brachialis), Crista musculi supinatoris, Corpus ulnae, Margo interosseus, Caput ulnae (di distal), Processus styloideus ulnae.',
    korelasiKlinis: 'Fraktur Monteggia (fraktur sepertiga proksimal corpus ulnae yang disertai dislokasi anterior caput radii dari sendi siku); Fraktur olecranon akibat benturan langsung sendi siku yang memerlukan reduksi terbuka fiksasi internal (ORIF tension band wiring) karena traksi kuat m. trisep; neuropati Nervus ulnaris pada sulcus retroepikondilaris siku (Cubital Tunnel Syndrome); cedera robekan kompleks fibrocartilago triangular (TFCC tear) yang memicu instabilitas sisi ulnar pergelangan tangan.'
  },
  'ossa carpi': {
    type: 'bone',
    nameLatin: 'Ossa Carpi (Carpus)',
    nameId: 'Tulang-Tulang Pergelangan Tangan (Karpus)',
    deskripsi: 'Kumpulan delapan tulang pendek ireguler yang tersusun dalam dua baris transversal fungsional (baris proksimal dan baris distal) di pergelangan tangan. Membentuk lengkungan carpal arch yang konkaf di anterior, mentransmisikan gaya kinetik dari telapak tangan ke lengan bawah, memberikan fleksibilitas multi-planar bagi tangan, serta membentuk dasar dan dinding osteofibrosa kanalis karpal (Carpal Tunnel).',
    artikulasi: 'Proksimal berartikulasi dengan facies articularis carpalis radii dan discus triangularis (Articulatio Radiocarpalis); berartikulasi antar sesama tulang karpal melalui Articulatio Intercarpales dan Articulatio Mediocarpalis (antar baris proksimal dan distal); serta distal berartikulasi dengan basis ossa metacarpalia I-V melalui Articulatio Carpometacarpales (CMC).',
    landmark: 'Baris Proksimal (lateral ke medial): Os Scaphoideum, Os Lunatum, Os Triquetrum, Os Pisiforme. Baris Distal (lateral ke medial): Os Trapezium, Os Trapezoideum, Os Capitatum, Os Hamatum. Sulcus carpi (cekungan di anterior yang diubah menjadi Carpal Tunnel oleh retinaculum flexorum transversum).',
    korelasiKlinis: 'Carpal Tunnel Syndrome (CTS - kompresi neuropati Nervus medianus di dalam terowongan karpal akibat tenosinovitis tendo fleksor, menimbulkan parestesia nokturnal pada ibu jari, telunjuk, jari tengah, dan separuh radial jari manis serta atrofi tenar m. abductor pollicis brevis); fraktur tulang skafoid dan dislokasi os lunatum.'
  },
  'scaphoideum': {
    type: 'bone',
    nameLatin: 'Os Scaphoideum (Naviculare Manus)',
    nameId: 'Tulang Skafoid',
    deskripsi: 'Tulang karpal terbesar di baris proksimal sisi radial yang berbentuk melengkung mirip perahu (boat-shaped). Berfungsi menjembatani baris proksimal dan distal karpal, menjadi tumpuan utama penahan transmisi beban aksial benturan telapak tangan saat jatuh.',
    artikulasi: 'Proksimal berartikulasi dengan facies carpalis radii; distal dengan trapezium dan trapezoideum; medial dengan capitatum dan lunatum.',
    landmark: 'Tuberculum ossis scaphoidei (palpabel di pangkal tenar), Facies articularis radialis, Facies articularis capitata, Polus proximalis, Collum (waist / pinggang skafoid), Polus distalis.',
    korelasiKlinis: 'Tulang karpal yang paling sering mengalami fraktur (~70% dari seluruh fraktur karpal) akibat jatuh dengan tangan terentang dorsofleksi (FOOSH); nyeri tekan patognomonik pada cekungan anatomical snuffbox (tabatière anatomique); vaskularisasi arteri bersifat retrograd (dari distal ke proksimal melalui cabang A. radialis), sehingga fraktur pada pinggang atau kutub proksimal skafoid berisiko sangat tinggi mengalami Nekrosis Avaskular (AVN / Avascular Necrosis) dan non-union yang berujung pada SNAC (Scaphoid Nonunion Advanced Collapse).'
  },
  'lunatum': {
    type: 'bone',
    nameLatin: 'Os Lunatum',
    nameId: 'Tulang Lunatum',
    deskripsi: 'Tulang karpal baris proksimal berbentuk menyerupai bulan sabit (crescent-shaped) yang terletak di tengah kubah pergelangan tangan antara scaphoideum dan triquetrum. Berperan sebagai batu kunci engsel pusat artikulasi radiokarpal dan mediokarpal.',
    artikulasi: 'Proksimal berartikulasi dengan faset medial radius; distal berartikulasi dengan caput capitati dan hamatum; lateral berartikulasi dengan scaphoideum; medial berartikulasi dengan triquetrum.',
    landmark: 'Facies articularis proximalis konveks, Facies distalis konkaf dalam (menerima kapitatum), Facies articularis scaphoidea dan triquetralis.',
    korelasiKlinis: 'Tulang karpal yang paling sering mengalami dislokasi (dislokasi lunatum ke arah anterior / palmar ke dalam canalis carpi, mengompresi Nervus medianus secara akut dan memicu defisit neurologis akut "spilled teacup sign" pada rontgen lateral); Penyakit Kienböck (osteonekrosis avaskular idiopatik progresif pada os lunatum yang menyebabkan kolaps tulang dan osteoartritis pergelangan tangan lanjut).'
  },
  'triquetrum': {
    type: 'bone',
    nameLatin: 'Os Triquetrum',
    nameId: 'Tulang Triketrum',
    deskripsi: 'Tulang berbentuk piramida bersudut tiga pada baris proksimal karpal sisi ulnar, terletak tepat di bawah discus artikularis fibrocartilagineus triangularis (TFCC) dan di dorsal os pisiforme.',
    artikulasi: 'Proksimal berartikulasi dengan discus articularis fibrocartilagineus (TFCC); distal berartikulasi dengan os hamatum; lateral berartikulasi dengan lunatum; anterior menyediakan facies articularis oval untuk artikulasi dengan os pisiforme.',
    landmark: 'Apex triquetri, Facies articularis pisiformis ovalis, Facies articularis hamata konkaf.',
    korelasiKlinis: 'Tulang karpal kedua yang paling sering mengalami fraktur setelah skafoid (sering berupa fraktur avulsi kortikal dorsalis akibat hiperfleksi pergelangan tangan terpelintir, tampak sebagai serpihan tulang "pooping duck sign" pada radiografi lateral karpal).'
  },
  'pisiforme': {
    type: 'bone',
    nameLatin: 'Os Pisiforme',
    nameId: 'Tulang Pisiformis',
    deskripsi: 'Tulang sesamoid kecil berbentuk mirip biji kacang polong (pea-shaped) yang tertanam di dalam substansi tendo M. flexor carpi ulnaris pada sisi antero-medial pergelangan tangan. Berfungsi meningkatkan efisiensi keuntungan mekanis lengan pengungkit tendo fleksor karpi ulnaris dan menjadi pilar medial kanalis karpal.',
    artikulasi: 'Berartikulasi hanya pada permukaan dorsalnya dengan facies articularis anterior os triquetrum melalui sendi sinovial plana kecil.',
    landmark: 'Permukaan anterior cembung bebas, Facies articularis triquetralis plana di posterior, Tuberculum pisiformis, Sulcus lateral pembatas Guyon canal.',
    korelasiKlinis: 'Membentuk dinding medial Canalis ulnaris (Guyon canal); fraktur pisiforme akibat benturan hipotenar langsung dapat mencederai ramus profundus Nervus ulnaris dan Arteria ulnaris menimbulkan parestesia jari kelingking dan kelemahan otot-otot intrinsik manus (claw hand).'
  },
  'trapezium': {
    type: 'bone',
    nameLatin: 'Os Trapezium (Multangulum Majus)',
    nameId: 'Tulang Trapesium',
    deskripsi: 'Tulang karpal paling lateral di baris distal yang memiliki facies articularis berbentuk pelana kuda (saddle-shaped) yang sangat khas. Merupakan elemen osteologis paling krusial bagi keistimewaan evolusi tangan manusia karena memfasilitasi gerakan oposisi, abduksi, adduksi, dan sirkumduksi ibu jari (pollex).',
    artikulasi: 'Distal: berartikulasi dengan basis os metacarpale I membentuk Articulatio Carpometacarpalis I (sendi pelana sinovial ibu jari); Proksimal: berartikulasi dengan scaphoideum; Medial: berartikulasi dengan trapezoideum dan basis metacarpale II.',
    landmark: 'Tuberculum ossis trapezii (tonjolan anterior perlekatan ligamen karpal transversal), Sulcus tendinis musculi flexoris carpi radialis, Facies articularis sellaris (berbentuk pelana dua kelengkungan ortogonal).',
    korelasiKlinis: 'Osteoartritis sendi karpometakarpal pertama (Rhizarthrosis / Thumb carpometacarpal osteoarthritis) sangat umum pada usia lanjut dan pekerja manual, menimbulkan nyeri tumpul tajam saat mencubit atau memutar kunci pintu ("grind test" positif), deformitas subluksasi adduksi ibu jari yang sering memerlukan tindakan trapeziektomi.'
  },
  'trapezoideum': {
    type: 'bone',
    nameLatin: 'Os Trapezoideum (Multangulum Minus)',
    nameId: 'Tulang Trapezoid',
    deskripsi: 'Tulang karpal terkecil di baris distal yang berbentuk baji kuadrilateral padat, terjepit erat di antara os trapezium, capitatum, scaphoideum, dan basis metacarpale II. Berfungsi memberikan jangkar stabilitas kaku bagi pilar telapak tangan medial ibu jari.',
    artikulasi: 'Proksimal berartikulasi dengan scaphoideum; distal berartikulasi dengan basis os metacarpale II; lateral berartikulasi dengan trapezium; medial berartikulasi dengan capitatum.',
    landmark: 'Facies articularis kuadrilateralis, Permukaan dorsalis lebar berbentuk baji, Facies articularis metacarpalis bifurkasio.',
    korelasiKlinis: 'Tulang karpal yang paling jarang mengalami fraktur terisolasi (<1% dari fraktur karpal) karena posisinya yang sangat terlindung dan terkunci secara baji anatomis di tengah arkus karpal distal.'
  },
  'capitatum': {
    type: 'bone',
    nameLatin: 'Os Capitatum',
    nameId: 'Tulang Kapitatum',
    deskripsi: 'Tulang karpal terbesar di antara seluruh delapan tulang karpus, menempati posisi sentral strategis di baris distal. Berperan sebagai batu kunci (keystone) lengkungan arkus karpal transversal dan menjadi pusat aksis rotasi kinematik pergelangan tangan untuk gerakan abduksi radial dan adduksi ulnar.',
    artikulasi: 'Proksimal berartikulasi dengan lunatum dan scaphoideum; distal berartikulasi terutama dengan basis os metacarpale III (serta sebagian II dan IV); lateral berartikulasi dengan trapezoideum; medial berartikulasi dengan hamatum.',
    landmark: 'Caput capitati (kepala bundar proksimal yang duduk di fosa lunatum), Collum capitati (penyempitan leher), Corpus capitati (badan baji masif kuadrilateral).',
    korelasiKlinis: 'Scaphocapitate syndrome (fraktur kombinasi leher kapitatum yang disertai fraktur skafoid dengan rotasi fragmen proksimal kapitatum 180° akibat trauma benturan aksial hebat pergelangan tangan); berisiko mengalami avascular necrosis caput capitati akibat gangguan suplai arteri retrograd.'
  },
  'hamatum': {
    type: 'bone',
    nameLatin: 'Os Hamatum',
    nameId: 'Tulang Hamatum',
    deskripsi: 'Tulang berbentuk baji di sisi medial baris distal karpal yang memiliki tonjolan osseus melengkung menyerupai kait (hook) yang menonjol kuat ke arah anterior/palmar. Berfungsi sebagai pilar penahan medial retinaculum flexorum dan dinding lateral kanalis ulnaris.',
    artikulasi: 'Distal berartikulasi dengan basis os metacarpale IV dan V; proksimal berartikulasi dengan triquetrum dan lunatum; lateral berartikulasi dengan capitatum.',
    landmark: 'Hamulus ossis hamati (Hook of Hamate - tonjolan mirip kail perlekatan flexor retinaculum dan origo m. flexor digiti minimi brevis serta m. opponens digiti minimi), Facies articularis metacarpalis baji ganda.',
    korelasiKlinis: 'Fraktur hamulus ossis hamati (Hook of Hamate fracture) khas dialami oleh atlet olahraga yang menggenggam raket tenis, stik golf, atau tongkat bisbol akibat hantaman pangkal pegangan stik saat memukul tanah/bola; komplikasi meliputi neuropati kompresi Nervus ulnaris di Guyon canal dan ruptur gesek tendo fleksor digitorum profundus jari kelingking.'
  },
  'ossa metacarpalia': {
    type: 'bone',
    nameLatin: 'Ossa Metacarpalia (Metacarpus I-V)',
    nameId: 'Tulang Telapak Tangan (Metakarpal)',
    deskripsi: 'Lima tulang pipa mini yang membentuk kerangka struktural telapak tangan (metacarpus). Menghubungkan pergelangan tangan ke falang jari-jari, bertindak sebagai tuas pengungkit gerakan menggenggam kuat (power grip) dan presisi manipulasi halus (precision grip), serta menopang arkus palmar melintang dan membujur.',
    artikulasi: 'Proksimal: Articulatio Carpometacarpalis (CMC) dengan baris distal karpus; Distal: Caput metacarpalis berartikulasi dengan basis phalanx proximalis membentuk Articulatio Metacarpophalangea (MCP / "knuckles" sendi kondiloid elipsoid); Berartikulasi antar basis metacarpale II-V via Articulatio Intermetacarpales.',
    landmark: 'Basis metacarpalis (proksimal baji), Corpus metacarpalis (diafisis melengkung konkaf ke palmar), Caput metacarpalis (distal bulat konveks artikulasi dengan falang), Tuberositas ossis metacarpalis III (processus styloideus basis MC 3).',
    korelasiKlinis: 'Boxer fracture (fraktur collum/leher os metacarpale V, terkadang IV, dengan depresi angulasi apeks dorsal caput metakarpal akibat pukulan tinju tangan mengepal membentur benda keras); Fraktur Bennett (fraktur intraartikular oblik tak stabil pada basis os metacarpale I dengan subluksasi traksi m. abductor pollicis longus); Fraktur Rolando (fraktur kominutif intraartikular berbentuk "T" atau "Y" pada basis MC I).'
  },
  'phalanges manus': {
    type: 'bone',
    nameLatin: 'Phalanges Manus (Digiti I-V)',
    nameId: 'Tulang Jari Tangan (Falang Tangan)',
    deskripsi: 'Empat belas tulang pipa miniatur yang menyusun kerangka digitus tangan manusia (2 falang pada pollex / ibu jari: proksimal dan distal; serta 3 falang pada masing-masing jari telunjuk hingga kelingking: proksimal, media, dan distal). Berfungsi sebagai tuas mekanik terminal kinematik jari untuk memegang, mencubit, merasakan sensasi taktil ujung jari, mengetik, dan aktivitas motorik halus presisi tinggi.',
    artikulasi: 'Articulatio Metacarpophalangea (MCP) antar caput metakarpal dan basis falang proksimal; Articulatio Interphalangea Proximalis (PIP) antar falang proksimal dan media; Articulatio Interphalangea Distalis (DIP) antar falang media dan distal (ibu jari hanya memiliki Articulatio Interphalangea tunggal).',
    landmark: 'Basis phalangis (proksimal konkaf), Corpus phalangis (diafisis semiterete), Caput phalangis (distal trochlea berkepala dua), Tuberositas phalangis distalis (lempeng tulang berbentuk sekop tapal kuda penopang bantalan pulpa kuku jari).',
    korelasiKlinis: 'Mallet Finger (avulsi tendo ekstensor dari insersio basis phalanx distalis dengan atau tanpa fragmen tulang avulsi akibat hantaman bola pada ujung jari lurus, menyebabkan deformitas fleksi DIP permanen); Boutonnière deformity (ruptur central slip tendo ekstensor pada PIP dengan subluksasi volar lateral bands); Swan-neck deformity (hiperekstensi PIP dan fleksi DIP pada artritis reumatoid); fraktur phalanx distal ("crush injury" subungual hematoma).'
  },

  // ==========================================
  // PANGGUL & EKSTREMITAS BAWAH (PELVIC GIRDLE & LOWER LIMB)
  // ==========================================
  'os coxae': {
    type: 'bone',
    nameLatin: 'Os Coxae (Os Pelvis)',
    nameId: 'Tulang Panggul / Koksa',
    deskripsi: 'Tulang pipih ireguler berpasangan yang membentuk gelang panggul (pelvic girdle). Terbentuk dari fusi embrionik tiga tulang: os ilium, os ischium, dan os pubis yang menyatu sempurna pada kartilago triradiata di dasar acetabulum saat pubertas (usia 15-20 tahun). Berfungsi mentransmisikan seluruh berat badan dari kerangka aksial sakrum menuju kedua femur saat berdiri dan berjalan, memproteksi organ-organ visera pelvis (vesica urinaria, uterus, ovarium, prostat, rektum), serta menyediakan perlekatan otot lokomosi masif tubuh.',
    artikulasi: 'Posterior: berartikulasi kokoh dengan os sacrum membentuk Articulatio Sacroiliaca; Anterior: os pubis berartikulasi dengan os pubis kontralateral via discus fibrocartilagineus interpubicus membentuk Symphysis Pubica; Lateral: facies lunata acetabuli berartikulasi dengan caput femoris membentuk Articulatio Coxae (Hip Joint / sendi peluru enarthrosis bola-mangkuk).',
    landmark: 'Acetabulum (fossa mangkuk sendi panggul dengan facies lunata dan incisura acetabuli), Foramen obturatum (lubang oval/triangular besar yang ditutupi membrana obturatoria), Crista iliaca, Spina Iliaca Anterior Superior (SIAS), Spina Iliaca Anterior Inferior (SIAI), Incisura ischiadica major et minor, Tuber ischiadicum, Spina ischiadica, Pecten pubis, Sulcus obturatorius.',
    korelasiKlinis: 'Fraktur cincin pelvis (Pelvic ring fracture, misalnya "open-book fracture" akibat disrupsi simfisis pubis dan sendi sakroiliaka pada kecelakaan motor atau jatuh dari ketinggian, merupakan kegawatdaruratan mematikan dengan mortalitas tinggi akibat perdarahan vena pleksus presakralis dan arteri iliaka interna hingga >3 liter darah di ruang retroperitoneal); Osteoartritis sendi koksa (Coxarthrosis); Displasia perkembangan panggul (DDH / Developmental Dysplasia of the Hip).'
  },
  'pelvis': {
    type: 'bone',
    nameLatin: 'Pelvis',
    nameId: 'Gelang Panggul (Pelvis)',
    deskripsi: 'Struktur cincin osteologis penopang transmisi beban aksial ke tungkai bawah dan pelindung organ panggul.',
    artikulasi: 'Articulatio Sacroiliaca, Symphysis Pubica, dan Articulatio Coxae bilateral.',
    landmark: 'Pelvic inlet (apertura pelvis superior), Pelvic brim, Acetabulum, Crista iliaca.',
    korelasiKlinis: 'Disrupsi cincin panggul vertikal (fraktur Malgaigne); fraktur acetabulum akibat benturan lutut dashboard mobil.'
  },
  'ilium': {
    type: 'bone',
    nameLatin: 'Os Ilium',
    nameId: 'Tulang Usus / Ilium',
    deskripsi: 'Komponen superior dan terbesar dari os coxae yang melebar menyerupai kipas (ala ossis ilii). Menopang organ-organ cavitas abdominalis inferior dan pelvis false, serta menyediakan area origo yang sangat luas bagi kelompok otot gluteal penggerak panggul dan dinding abdomen anterolateral.',
    artikulasi: 'Membentuk bagian posterosuperior (sekitar 2/5) dari mangkuk acetabulum; berartikulasi di posteromedial dengan os sacrum membentuk Articulatio Sacroiliaca; serta menyatu secara fusi synostosis dengan os ischium dan os pubis di corpus ossis ilii.',
    landmark: 'Ala ossis ilii, Crista iliaca (labium externum, linea intermedia, labium internum), Spina Iliaca Anterior Superior (SIAS - patokan klinis perlekatan lig. inguinale dan pengukuran panjang tungkai ASIS-malleolus medialis), Spina Iliaca Anterior Inferior (SIAI - origo caput rectum m. rectus femoris), Spina Iliaca Posterior Superior (SIPS - ditandai lesung "dimples of Venus" setinggi vertebra S2), Spina Iliaca Posterior Inferior (SIPI), Fossa iliaca (konkaf anterior origo m. iliacus), Facies glutea (dibatasi linea glutea anterior, posterior, inferior), Linea arcuata (batas apertura pelvis superior), Facies auricularis (permukaan telinga untuk artikulasi sakrum).',
    korelasiKlinis: 'Crista iliaca merupakan lokasi donor standar emas pengambilan cangkok tulang autolog (autologous bone graft harvesting) dan aspirasi biopsi sumsum tulang hematopoietik krista iliaka posterior; Sakroiliitis pada ankylosing spondylitis; avulsi apofisis SIAS akibat kontraksi eksentrik kuat m. sartorius pada atlet remaja pelari cepat.'
  },
  'ischium': {
    type: 'bone',
    nameLatin: 'Os Ischium',
    nameId: 'Tulang Duduk / Iskium',
    deskripsi: 'Komponen postero-inferior dari os coxae yang memiliki arsitektur tulang kortikal tebal dan kuat. Didesain untuk menopang seluruh berat badan tubuh bagian atas dalam postur duduk tegak, menyerap stres kompresi tumpuan, serta menjadi origo bagi kelompok otot hamstring paha posterior.',
    artikulasi: 'Membentuk sekitar 2/5 bagian postero-inferior dinding acetabulum; ramus ossis ischii menyatu di anterior dengan ramus inferior ossis pubis membentuk ramus ischiopubicus di margin inferior foramen obturatum; serta menyatu di proksimal dengan ilium.',
    landmark: 'Corpus ossis ischii, Ramus ossis ischii, Tuber ischiadicum (tonjolan kasar masif penahan beban duduk tempat origo m. semitendinosus, m. semimembranosus, caput longum m. biceps femoris, dan m. adductor magnus pars ischiadica), Spina ischiadica (proyeksi runcing segitiga pemisah incisura ischiadica major dan minor, patokan klinis penurunan kepala janin "station 0" pada bidang Hodge obstetri), Incisura ischiadica major (diubah ligamen sacrospinale menjadi foramen ischiadicum majus lintasan N. ischiadicus dan piriformis), Incisura ischiadica minor.',
    korelasiKlinis: 'Bursitis ischiadica ("Weaver bottom" atau "tailor seat" - inflamasi nyeri bursa tuber ischiadicum akibat duduk terlalu lama di permukaan keras); avulsi apofisis tuber ischiadicum pada pesepakbola muda akibat hentakan tendo hamstring; blok anestesi Nervus pudendus transvaginal menggunakan spina ischiadica sebagai patokan perabaan jarum anestesi saat persalinan pervaginam.'
  },
  'pubis': {
    type: 'bone',
    nameLatin: 'Os Pubis',
    nameId: 'Tulang Kemaluan / Pubis',
    deskripsi: 'Komponen antero-medial dari os coxae yang membentuk batas anterior cavitas pelvis dan arkus pubik. Bertindak sebagai penahan gaya kompresi transversal anterior panggul dan menjadi titik origo kelompok otot adduktor paha.',
    artikulasi: 'Menyatu lateral dengan ilium dan ischium di acetabulum (menyumbang sekitar 1/5 dinding anteromedial acetabulum); medial facies symphysialis berartikulasi dengan os pubis kontralateral via fibrocartilago discus interpubicus membentuk Symphysis Pubica (amphiarthrosis kartilaginosa).',
    landmark: 'Corpus ossis pubis, Ramus superior ossis pubis, Ramus inferior ossis pubis, Tuberculum pubicum (patokan lateral perlekatan ligamentum inguinale), Crista pubica, Pecten ossis pubis (linea pectinea pembentuk batas brim panggul), Facies symphysialis, Sulcus obturatorius (alur di inferior ramus superior untuk N. dan pembuluh darah obturatorius).',
    korelasiKlinis: 'Osteitis pubis (peradangan kronis non-infeksius simfisis pubika dan insersio adduktor akibat mikrotrauma tarikan berulang pada atlet sepak bola atau pelari); Fraktur ramus os pubis (fraktur panggul yang paling sering terjadi pada pasien lanjut usia akibat jatuh dari posisi berdiri); Diastasis Symphysis Pubica (peregangan abnormal >10 mm atau ruptur total simfisis pubis pasca persalinan traumatik).'
  },
  'femur': {
    type: 'bone',
    nameLatin: 'Os Femoris',
    nameId: 'Tulang Paha / Femur',
    deskripsi: 'Tulang pipa terpanjang, terberat, dan terkuat pada tubuh manusia (panjang rata-rata ~26% tinggi badan individu). Berperan biomekanik krusial menghantarkan seluruh beban gaya gravitasi aksial dari gelang panggul ke sendi lutut, serta bertindak sebagai tuas pengungkit utama yang menghasilkan gaya lokomosi eksplosif saat berjalan, berlari, melompat, dan menendang.',
    artikulasi: 'Proksimal: Caput femoris yang bulat berartikulasi dengan acetabulum os coxae membentuk Articulatio Coxae (Hip Joint); Distal: Condylus medialis et lateralis berartikulasi dengan condylus tibiae dan menisci (Articulatio Femorotibialis) serta facies patellaris berartikulasi dengan patella (Articulatio Patellofemoralis) membentuk kompleks Articulatio Genus (Knee Joint).',
    landmark: 'Caput femoris (2/3 bola dengan Fovea capitis femoris tempat perlekatan Ligamentum capitis femoris), Collum femoris (leher femur membentuk sudut inklinasi leher-batang ~125° terhadap diafisis), Trochanter major (tonjolan lateral besar insersio m. gluteus medius dan minimus), Trochanter minor (tonjolan posteromedial insersio tendo M. iliopsoas), Linea intertrochanterica (anterior), Crista intertrochanterica (posterior dengan Tuberculum quadratus), Linea aspera (rigi ganda tebal di posterior diafisis dengan labium mediale et laterale), Tuberositas glutea, Linea pectinea, Condylus medialis et lateralis femoris, Epicondylus medialis et lateralis, Tuberculum adductorium (pada epikondilus medial), Fossa intercondylaris (posterior tempat perlekatan ACL dan PCL), Facies patellaris (anterior trochlea trochlear groove).',
    korelasiKlinis: 'Fraktur collum femoris intrakapsular (terutama pada wanita lansia osteoporosis pasca jatuh terpeleset, berisiko sangat tinggi mengalami Nekrosis Avaskular / AVN caput femoris dan non-union akibat robekan rami retinaculares dari Arteria circumflexa femoris medialis); Fraktur intertrochanter ekstrakapsular; Fraktur diafisis / batang femur akibat kecelakaan lalu lintas kecepatan tinggi (dapat memicu perdarahan internal tersembunyi masif 1000-1500 mL ke dalam kompartemen paha yang berujung pada syok hipovolemik dan sindrom emboli lemak / Fat Embolism Syndrome); Coxa vara (<120°) dan Coxa valga (>135°).'
  },
  'patella': {
    type: 'bone',
    nameLatin: 'Patella',
    nameId: 'Tempurung Lutut / Patela',
    deskripsi: 'Tulang sesamoid terbesar pada tubuh manusia, berbentuk segitiga dengan basis di superior dan apeks meruncing di inferior, tertanam di dalam tendo M. quadriceps femoris di anterior sendi lutut. Berfungsi biomekanik memperbesar lengan tuas momen mekanik (moment arm) M. quadriceps femoris sebesar 30-50% dengan menjauhkan vektor garis kerja tendo dari sumbu rotasi lutut, meningkatkan efisiensi ekstensi lutut pada derajat terminal, serta melindungi struktur artikular genu anterior dari trauma benturan langsung.',
    artikulasi: 'Facies articularis posterior dilapisi oleh kartilago hialin artikular tertebal pada tubuh manusia (~4-5 mm), berartikulasi dengan facies patellaris (sulcus trochlearis) femoris membentuk Articulatio Patellofemoralis (sendi sinovial plana seluncur).',
    landmark: 'Basis patellae (tebal datar di superior perlekatan tendo m. rectus femoris dan vastus intermedius), Apex patellae (meruncing di inferior tempat origo Ligamentum patellae), Facies anterior (cembung berpori dilintasi serabut tendo), Facies articularis posterior (terbagi oleh crista vertikal menjadi faset lateral yang lebih lebar dan faset medial, serta faset "odd" di paling medial).',
    korelasiKlinis: 'Chondromalacia Patellae ("Runner knee" / Patellofemoral Pain Syndrome - pelunakan, fisura, dan erosi degeneratif kartilago posterior patela akibat maltracking patela di sulkus troklear); Dislokasi patela (hampir selalu mengalami subluksasi atau dislokasi ke arah lateral akibat gaya vektor quadriceps valgus / Q-angle tinggi dan insufisiensi ligamentum patellofemorale mediale / MPFL); Fraktur transversal patela akibat kontraksi eksentrik kuadriseps yang eksplosif atau benturan langsung lutut ke dashboard mobil (sering memerlukan fiksasi ORIF tension band wiring).'
  },
  'tibia': {
    type: 'bone',
    nameLatin: 'Tibia',
    nameId: 'Tulang Kering / Tibia',
    deskripsi: 'Tulang pipa panjang medial yang sangat masif pada tungkai bawah (crus). Merupakan tulang penopang beban utama (weight-bearing bone) tungkai bawah yang mentransmisikan sekitar 90% seluruh beban tubuh dari kondilus femur menuju talus di pergelangan kaki, serta menjadi jangkar perlekatan tendo patela dan otot-otot lokomosi kruris.',
    artikulasi: 'Proksimal: Condylus medialis et lateralis berartikulasi dengan kondilus femur via menisci (Articulatio Femorotibialis sendi lutut); Lateral: Facies articularis fibularis proksimal berartikulasi dengan caput fibulae (Articulatio Tibiofibularis superior), serta incisura fibularis di distal berartikulasi dengan ujung distal fibula (Syndesmosis Tibiofibularis inferior); Distal: Facies articularis inferior dan facies articularis malleoli medialis berartikulasi dengan trochlea tali membentuk Articulatio Talocruralis (Ankle Joint).',
    landmark: 'Condylus medialis et lateralis tibiae, Facies articularis superior (plateau tibiae mediale konkaf dan plateau laterale konveks), Eminentia intercondylaris (dengan Tuberculum intercondylare mediale et laterale serta area intercondylaris anterior tempat insersio ACL dan posterior untuk PCL), Tuberositas tibiae (tonjolan anterior tempat insersio Ligamentum patellae), Margo anterior (crista anterior subcutaneous yang tajam dan mudah diraba di bawah kulit tulang kering), Linea musculi solei (rigi oblik di posterior diafisis), Malleolus medialis (mata kaki bagian dalam), Incisura fibularis (cekungan distal untuk sindesmosis fibula), Sulcus malleolaris (di posterior maleolus medialis dilalui tendo m. tibialis posterior dan m. flexor digitorum longus).',
    korelasiKlinis: 'Osgood-Schlatter Disease (apofisitis traksi aseptik pada tuberositas tibiae akibat tarikan kuat berulang ligamentum patellae pada masa pacu tumbuh remaja atlet lompat/sepak bola); Fraktur tibia (tulang panjang yang paling sering mengalami fraktur terbuka / open fracture karena aspek anteromedialnya hanya dilapisi kulit dan periosteum subkutan tipis tanpa bantalan otot); Sindrom Kompartemen Akut (Acute Compartment Syndrome tungkai bawah pasca fraktur tibia dengan iskemia jaringan akibat tekanan intrakompartemen >30 mmHg / 5P: Pain, Pallor, Pulselessness, Paresthesia, Paralysis yang memerlukan fasciotomi darurat); Fraktur Tibial Plateau (Schatzker classification I-VI).'
  },
  'fibula': {
    type: 'bone',
    nameLatin: 'Fibula',
    nameId: 'Tulang Betis / Fibula',
    deskripsi: 'Tulang pipa panjang ramping yang terletak di aspek posterolateral tungkai bawah (crus), sejajar terhadap tibia. Walaupun tidak berpartisipasi langsung dalam menahan beban aksial gravitasi tubuh (<10% transmisi beban), fibula sangat krusial sebagai tiang penopang origo otot-otot ekstensor, evertor, dan fleksor kruris, membentuk dinding lateral penstabil pergelangan kaki (lateral mortise), serta menyerap gaya torsi rotasi selama siklus berjalan.',
    artikulasi: 'Proksimal: Caput fibulae berartikulasi dengan condylus lateralis tibiae membentuk Articulatio Tibiofibularis (sendi sinovial plana); Distal: Facies articularis malleoli lateralis berartikulasi dengan incisura fibularis tibiae melalui Syndesmosis Tibiofibularis (sendi fibrosa ligamen syndesmoticus) serta berartikulasi dengan facies lateralis trochleae tali membentuk bagian lateral Articulatio Talocruralis.',
    landmark: 'Caput fibulae, Apex capitis fibulae (processus styloideus fibulae tempat insersio tendo M. biceps femoris dan Ligamentum collaterale fibulare / LCL), Collum fibulae (leher ramping yang dilingkari langsung oleh Nervus fibularis/peroneus communis), Corpus fibulae, Margo interosseus, Malleolus lateralis (mata kaki luar, terletak lebih posterior dan memanjang ~1 cm lebih distal dari maleolus medialis untuk mengunci talus), Fossa malleoli lateralis, Sulcus malleolaris fibulae (dilalui tendo m. fibularis longus et brevis).',
    korelasiKlinis: 'Fraktur collum fibulae berisiko sangat tinggi mencederai Nervus peroneus/fibularis communis yang melingkari leher tulang, mengakibatkan Drop Foot (hilangnya dorsofleksi kaki dan jari kaki serta hilangnya eversi kaki dengan gaya berjalan steppage gait); Fraktur Maisonneuve (fraktur spiral sepertiga proksimal fibula yang terjadi akibat trauma rotasi eksternal pergelangan kaki hebat disertai disrupsi sindesmosis tibiofibular dan robekan ligamen deltoid maleolus medial); Fraktur bimalleolar / trimalleolar (Pott fracture).'
  },
  'ossa tarsi': {
    type: 'bone',
    nameLatin: 'Ossa Tarsi (Tarsus)',
    nameId: 'Tulang-Tulang Pergelangan Kaki (Tarsus)',
    deskripsi: 'Kumpulan tujuh tulang pendek ireguler yang sangat kokoh di regio tarsus (kaki belakang dan kaki tengah). Berperan krusial membentuk arsitektur lengkungan kaki manusia (Arcus Pedis Longitudinalis Medialis et Lateralis serta Arcus Transversus) yang elastis dan tangguh untuk menyerap gaya impak hentakan langkah, beradaptasi terhadap permukaan tanah tidak rata, dan mendistribusikan berat badan ke telapak kaki.',
    artikulasi: 'Proksimal berartikulasi dengan tibia dan fibula melalui Articulatio Talocruralis (sendi pergelangan kaki); berartikulasi antar sesama tulang tarsus melalui Articulatio Subtalaris (Talocalcaneal), Articulatio Talocalcaneonavicularis, Articulatio Calcaneocuboidea (keduanya membentuk Articulatio Tarsi Transversa / Chopart joint); serta distal berartikulasi dengan basis metatarsalia I-V melalui Articulatio Tarsometatarsales (Lisfranc joint).',
    landmark: 'Tarsus Proksimal: Talus dan Calcaneus; Tarsus Intermediet: Os Naviculare; Tarsus Distal: Os Cuneiforme Mediale, Os Cuneiforme Intermedium, Os Cuneiforme Laterale, dan Os Cuboideum. Sinus tarsi, Sustentaculum tali.',
    korelasiKlinis: 'Pes Planus (Flatfoot / kaki datar akibat kolapsnya arkus longitudinal medial, sering dipicu oleh disfungsi atau ruptur tendo M. tibialis posterior); Sprain ligamen pergelangan kaki inversi (paling sering merobek Ligamentum Talofibulare Anterius / ATFL dan Ligamentum Calcaneofibulare / CFL); Tarsal Tunnel Syndrome (kompresi N. tibialis posterior di dalam terowongan tarsal di belakang maleolus medialis).'
  },
  'talus': {
    type: 'bone',
    nameLatin: 'Talus (Astragalus)',
    nameId: 'Tulang Kaki / Talus',
    deskripsi: 'Tulang tarsal kedua terbesar yang menempati posisi kunci di puncak arsitektur lengkungan kaki. Merupakan tulang unik yang tidak memiliki perlekatan tendo otot sama sekali (lebih dari 60% permukaannya dilapisi kartilago artikular). Bertindak sebagai distributor gaya mekanik tunggal yang menerima seluruh beban berat tubuh dari tibia dan membaginya ke posterior (tulang tumit kalkaneus) dan ke anterior (tulang navikulare).',
    artikulasi: 'Superior dan medial berartikulasi dengan tibia, lateral berartikulasi dengan fibula membentuk sendi engsel mortise Articulatio Talocruralis; Inferior berartikulasi dengan calcaneus via faset artikular anterior, media, dan posterior membentuk Articulatio Subtalaris (Art. Talocalcanea); Anterior berartikulasi dengan facies posterior os naviculare membentuk Articulatio Talonavicularis.',
    landmark: 'Caput tali (anterior cembung artikulasi dengan navikular), Collum tali (penyempitan leher rentan fraktur), Corpus tali (badan utama memuat Trochlea tali berbentuk katrol pelana cembung yang lebar di anterior untuk dorsofleksi stabil), Processus posterior tali (Tuberculum mediale et laterale yang mengapit Sulcus tendinis musculi flexoris hallucis longi), Processus lateralis tali, Sulcus tali (membentuk kanalis Sinus tarsi bersama sulkus kalkaneus), Os trigonum (variasi anatomis osikel aksesori posterior).',
    korelasiKlinis: 'Fraktur collum tali (Aviator fracture akibat hiperdorsofleksi mendadak pergelangan kaki saat tabrakan pedal kokpit pesawat atau mobil, klasifikasi Hawkins I-IV); komplikasi fraktur leher atau korpus talus sangat rentan terhadap Nekrosis Avaskular (AVN / Avascular Necrosis) corpus tali akibat putusnya suplai arteri dari A. canalis tarsi dan A. sinus tarsi ("Hawkins sign" resorpsi subkondral pada radiografi menandakan viabilitas vaskular positif); Sindrom Os Trigonum (impingement posterior pergelangan kaki pada penari balet).'
  },
  'calcaneus': {
    type: 'bone',
    nameLatin: 'Calcaneus (Os Calcis)',
    nameId: 'Tulang Tumit / Kalkaneus',
    deskripsi: 'Tulang tarsal terbesar, terberat, dan terkuat pada kerangka kaki manusia yang membentuk tonjolan tumit (heel). Berfungsi sebagai lengan tuas pengungkit utama bagi tendo terkuat tubuh (Tendo Calcaneus / Achilles) untuk gaya dorong plantar fleksi berkekuatan tinggi saat berjalan, berlari, dan melompat, serta menjadi bantalan tumpuan kontak impak pertama ("heel-strike") saat melangkah.',
    artikulasi: 'Superior: Facies articularis anterior, media, dan posterior tali berartikulasi dengan talus membentuk Articulatio Subtalaris; Anterior: Facies articularis cuboidea berartikulasi dengan os cuboideum membentuk Articulatio Calcaneocuboidea.',
    landmark: 'Tuber calcanei (tonjolan tumit kasar masif posterior dengan Processus medialis et lateralis tuberis calcanei), Sustentaculum tali (tonjolan horizontal mirip rak di sisi medial penopang caput tali yang di bagian bawahnya dilewati Sulcus tendinis m. flexoris hallucis longi), Trochlea fibularis (peronealis di sisi lateral), Sulcus calcanei (membentuk kanalis Sinus tarsi).',
    korelasiKlinis: 'Fraktur kalkaneus ("Lover fracture" / Don Juan fracture akibat jatuh tegak dari ketinggian membentur tumit keras, sering berupa fraktur kominutif intraartikular subtalar dan sering disertai fraktur kompresi vertebra lumbal L1-L2 akibat transmisi gaya aksial); penurunan Sudut Böhler (<20° menandakan kolaps faset artikular posterior kalkaneus); Plantar Fasciitis (inflamasi mikrorobekan aponeurosis plantaris pada origo tuberositas medial kalkaneus menimbulkan nyeri tumit pagi hari); Kalkaneus spur (taji osteofit tumit).'
  },
  'naviculare': {
    type: 'bone',
    nameLatin: 'Os Naviculare (Tarsi)',
    nameId: 'Tulang Navikular',
    deskripsi: 'Tulang tarsal berbentuk perahu (boat-shaped) yang terletak di sisi medial tarsus antara caput tali di posterior dan ketiga tulang kuneiforme di anterior. Merupakan batu kunci (keystone) pembentuk arkus longitudinalis medialis kaki yang menerima beban regang mekanik tinggi saat berjalan.',
    artikulasi: 'Posterior berartikulasi dengan caput tali (Articulatio Talonavicularis); Anterior berartikulasi dengan facies posterior dari ketiga Ossa Cuneiformia (mediale, intermedium, laterale); Lateral seringkali berartikulasi dengan os cuboideum.',
    landmark: 'Tuberositas ossis navicularis (tonjolan medial palpabel di kaki tempat insersio utama tendo M. tibialis posterior dan ligamentum calcaneonaviculare plantare / spring ligament), Facies articularis talaris konkaf dalam.',
    korelasiKlinis: 'Fraktur stres navikular sering terjadi pada atlet pelari cepat atau peloncat akibat kompresi vaskular watershed di sepertiga tengah tulang; Penyakit Köhler (osteokondrosis avaskular idiopatik self-limiting pada os navikulare anak laki-laki usia 3-7 tahun); Os Naviculare Accessorium (tulang tambahan medial yang dapat menyebabkan iritasi tendo tibialis posterior dan flatfoot simtomatik).'
  },
  'cuneiforme': {
    type: 'bone',
    nameLatin: 'Ossa Cuneiformia (Mediale, Intermedium, Laterale)',
    nameId: 'Tulang Kuneiform (Baji Medial, Intermediet, Lateral)',
    deskripsi: 'Tiga tulang tarsal berbentuk baji (wedge-shaped) yang terletak berdampingan di antara os naviculare di proksimal dan basis ossa metatarsalia I, II, dan III di distal. Berperan mengunci arkus transversus pedis dan menyalurkan dorongan kinetik dari kaki tengah ke kaki depan.',
    artikulasi: 'Proksimal berartikulasi dengan facies anterior os naviculare; Distal berartikulasi dengan basis os metatarsale I (cuneiforme mediale), basis metatarsale II (cuneiforme intermedium), dan basis metatarsale III (cuneiforme laterale); Cuneiforme laterale berartikulasi di lateral dengan os cuboideum; Basis metatarsale II "terkunci" masuk ke dalam celah mortise di antara cuneiforme mediale dan laterale.',
    landmark: 'Os Cuneiforme Mediale (terbesar, baji menghadap ke dorsal, tempat insersio M. tibialis anterior dan M. fibularis longus), Os Cuneiforme Intermedium (terkecil), Os Cuneiforme Laterale (baji beralur lateral), Ligamentum Lisfranc (ligamen oblik kuat menghubungkan cuneiforme mediale ke basis metatarsale II).',
    korelasiKlinis: 'Cedera Lisfranc (Lisfranc fracture-dislocation - disrupsi sendi tarsometatarsal akibat robekan Ligamentum Lisfranc pada trauma hiper-plantar fleksi kaki, memicu instabilitas kaki tengah parah, pelebaran celah diastasis antara basis metatarsal 1-2, dan ekimosis plantar patognomonik pada arkus kaki).'
  },
  'cuboideum': {
    type: 'bone',
    nameLatin: 'Os Cuboideum',
    nameId: 'Tulang Kuboid',
    deskripsi: 'Tulang tarsal lateral berbentuk kubus piramidal ireguler yang terletak di antara calcaneus di proksimal dan basis metatarsalia IV-V di distal. Membentuk pilar lateral yang menyokong arkus longitudinalis lateralis pedis dan menyediakan lintasan bagi tendo otot evertor kaki.',
    artikulasi: 'Proksimal: berartikulasi dengan facies anterior calcaneus membentuk Articulatio Calcaneocuboidea; Distal: berartikulasi dengan basis os metatarsale IV dan V; Medial: berartikulasi dengan os cuneiforme laterale dan terkadang os naviculare.',
    landmark: 'Tuberositas ossis cuboidei (prominensia lateral plantar), Sulcus tendinis musculi fibularis (peronei) longi (alur oblik di facies plantaris tempat melintasnya tendo m. peroneus longus menuju metatarsal 1).',
    korelasiKlinis: 'Cuboid Syndrome (subluksasi rotasi minor os cuboideum ke arah inferomedial akibat traksi kuat tendo peroneus longus saat sprain inversi pergelangan kaki, menimbulkan nyeri lateral kaki tengah kronis); Fraktur Nutcracker cuboideum akibat kompresi jepit aksial parah antara kalkaneus dan metatarsal lateral.'
  },
  'ossa metatarsalia': {
    type: 'bone',
    nameLatin: 'Ossa Metatarsalia (Metatarsus I-V)',
    nameId: 'Tulang Telapak Kaki (Metatarsal)',
    deskripsi: 'Lima tulang pipa mini memanjang yang menyusun kerangka telapak kaki (metatarsus) antara tarsus dan jari-jari kaki. Bertindak sebagai tuas kaku yang mentransmisikan gaya kinetik, menopang arkus kaki longitudinal dan transversus, mendistribusikan beban pada bantalan bola telapak kaki (ball of the foot), serta memfasilitasi dorongan propulsi terminal ("toe-off") saat melangkah.',
    artikulasi: 'Proksimal: Basis metatarsalis berartikulasi dengan ossa cuneiformia dan cuboideum membentuk Articulatio Tarsometatarsalis (Sendi Lisfranc); Distal: Caput metatarsalis bulat berartikulasi dengan basis falang proksimal membentuk Articulatio Metatarsophalangea (MTP / sendi kondiloid bola-soket elipsoid); Berartikulasi antar sesama basis metatarsalia II-V via Articulatio Intermetatarsales.',
    landmark: 'Basis metatarsalis (proksimal baji), Corpus metatarsalis (panjang melengkung konkaf ke plantar), Caput metatarsalis (distal bulat konveks), Os Metatarsale I (tertebal, terpendek, terkuat dengan dua Ossa Sesamoidea di bawah kaputnya di dalam tendo flexor hallucis brevis), Tuberositas ossis metatarsalis V (tonjolan lateral di basis MT 5 tempat insersio M. fibularis brevis).',
    korelasiKlinis: 'March Fracture (fraktur stres kelelahan mikro pada leher os metatarsale II atau III akibat berjalan kaki atau baris-berbaris jarak jauh berulang); Fraktur Jones (fraktur transversal pada zona metafisis-diafisis proksimal os metatarsale V sekitar 1,5 cm dari tuberositas, berisiko tinggi mengalami non-union atau delayed union akibat suplai vaskular watershed); Fraktur Avulsi Pseudo-Jones (avulsi tuberositas basis MT 5 akibat tarikan tendo peroneus brevis / aponeurosis plantaris lateral saat inversi terkilir); Deformitas Hallux Valgus (bunion - deviasi lateral jari ibu jari kaki dengan subluksasi medial caput metatarsal I).'
  },
  'phalanges pedis': {
    type: 'bone',
    nameLatin: 'Phalanges Pedis (Digiti I-V)',
    nameId: 'Tulang Jari Kaki (Falang Kaki)',
    deskripsi: 'Empat belas tulang pipa miniatur yang membentuk kerangka digitus pedis (2 falang pada hallux / ibu jari kaki: proksimal dan distal; serta 3 falang pada jari II hingga V: proksimal, media, dan distal). Berfungsi biomekanik mencengkeram permukaan kontak tanah, menyempurnakan keseimbangan dinamis postural saat melangkah, dan menyediakan dorongan percepatan akhir pada fase "toe-off" gaya berjalan.',
    artikulasi: 'Articulatio Metatarsophalangea (MTP) antar caput metatarsalia dan basis falang proksimal; Articulatio Interphalangea Pedis Proximalis (PIP) dan Distalis (DIP) antar ruas-ruas falang (hallux hanya memiliki satu Articulatio Interphalangea).',
    landmark: 'Basis phalangis (proksimal konkaf), Corpus phalangis (pendek memipih dorso-plantar), Caput phalangis (distal trochlea), Tuberositas phalangis distalis (lempeng sekop datar penopang bantalan kuku jari kaki).',
    korelasiKlinis: 'Deformitas Hammer Toe (kontraktur fleksi pada sendi PIP dengan ekstensi MTP dan DIP), Claw Toe (hiperekstensi MTP disertai fleksi PIP dan DIP), dan Mallet Toe (fleksi terisolasi pada sendi DIP); Fraktur falang jari kaki ("Stubbed toe fracture" akibat tersandung benda keras tanpa alas kaki, paling sering pada falang proksimal kelingking atau hallux); Osteomielitis falang pada ulkus kaki diabetik neuropatik yang sering berujung pada amputasi jari (ray amputation).'
  }
};
