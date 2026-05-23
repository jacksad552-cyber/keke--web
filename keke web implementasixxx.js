import { useState } from "react";
 
const MATERI = [
  {
    bab:"I", judul:"Teori & Kerangka Implementasi Kebijakan",
    isi:[
      {sub:"Model Top-Down (Pressman & Wildavsky, 1973)",konten:"Implementasi dipahami sebagai proses linier dari pembuat kebijakan ke pelaksana lapangan. Premis utama: keberhasilan bergantung pada kejelasan tujuan, kepatuhan birokrasi, dan rantai komando yang efisien. Kritik: mengabaikan kompleksitas birokrasi multi-level dan diskresi street-level bureaucrats."},
      {sub:"Model Bottom-Up (Lipsky, 1980)",konten:"Street-level bureaucrats (guru, perawat, polisi, petugas sosial) memiliki diskresi substansial yang membentuk kebijakan secara de facto. Implementasi adalah negosiasi berkelanjutan antara kapasitas birokratis, ekspektasi warga, dan tekanan institusional. Mereka adalah policy-makers sesungguhnya di lapangan."},
      {sub:"Model Koalisi Advokasi (Sabatier & Jenkins-Smith)",konten:"Perubahan kebijakan didorong oleh 'belief systems' koalisi aktor selama 10+ tahun. Tiga lapis keyakinan: (1) deep core beliefs — nilai paling fundamental; (2) near-core beliefs — posisi kebijakan; (3) secondary beliefs — cara implementasi. Guncangan sistemik eksternal dapat mengubah koalisi dominan."},
      {sub:"Sintesis Matland: Ambiguitas-Konflik",konten:"Matriks 2×2: (1) Administratif (rendah ambiguitas, rendah konflik) → otomasi; (2) Politis (rendah ambiguitas, tinggi konflik) → kekuatan; (3) Eksperimental (tinggi ambiguitas, rendah konflik) → konteks lokal; (4) Simbolik (tinggi ambiguitas, tinggi konflik) → koalisi dan negosiasi."},
    ]
  },
  {
    bab:"II", judul:"Faktor Penentu Keberhasilan Implementasi",
    isi:[
      {sub:"Kapasitas Institusional",konten:"Dimensi: (a) teknis — SDM, teknologi, infrastruktur; (b) manajerial — koordinasi, monitoring, evaluasi; (c) politik — legitimasi, koalisi pendukung, resistensi oposisi. Pengukuran via Institutional Capacity Index (ICI). Kapasitas rendah adalah penyebab utama implementation deficit di negara berkembang."},
      {sub:"Rantai Implementasi (Pressman-Wildavsky)",konten:"Probabilitas keberhasilan = p^n. Jika p=0.98 dan n=70 link: ~24.7% keberhasilan. Implikasi: desain kebijakan harus meminimalkan panjang rantai ATAU meningkatkan redundansi di setiap link. Semakin banyak 'clearance points', semakin tinggi risiko kegagalan kumulatif."},
      {sub:"Analisis Principal-Agent",konten:"Masalah asimetri informasi: principal (pembuat kebijakan) tidak dapat memantau penuh agen (implementor). Adverse selection: agen yang tidak kompeten terpilih sebelum kontrak. Moral hazard: agen berperilaku oportunistik setelah kontrak karena monitoring lemah. Solusi: insentif berbasis kinerja, monitoring intensif, atau desain kontrak yang menyelaraskan kepentingan."},
      {sub:"Desain Instrumen Kebijakan",konten:"Tipologi Hood (NATO): Nodality (informasi/komunikasi), Authority (mandat/regulasi), Treasure (insentif finansial), Organization (kapasitas birokratis). Tipologi Schneider-Ingram: carrots (insentif positif), sticks (sanksi/paksaan), sermons (edukasi/persuasi), capacity building (penguatan kelembagaan)."},
    ]
  },
  {
    bab:"III", judul:"Governance, Desentralisasi & Multi-Level Implementation",
    isi:[
      {sub:"New Public Governance (NPG)",konten:"Bergeser dari hierarki monolitik New Public Management (NPM) menuju jaringan aktor pluralis. Ciri khas: co-production layanan publik, akuntabilitas horizontal, outcomes focus. Tantangan: fragmentasi akuntabilitas, koordinasi antar lembaga, dan keterlibatan non-state actors yang kompleks."},
      {sub:"Tipologi Desentralisasi (Rondinelli)",konten:"(a) Dekonsentrasi — pendelegasian administratif ke unit pemerintah pusat di daerah; (b) Devolusi — transfer kewenangan politik dan fiskal ke pemerintah daerah otonom; (c) Delegasi — transfer ke badan semi-otonom; (d) Privatisasi — transfer ke sektor swasta. Masing-masing memiliki implikasi akuntabilitas berbeda."},
      {sub:"Desentralisasi Indonesia (UU 23/2014)",konten:"Mengatur pembagian urusan konkuren antara pusat, provinsi, dan kabupaten/kota. Penyerahan kewenangan tambang MINERBA dari kab/kota ke provinsi = re-scaling kewenangan. Urusan wajib pelayanan dasar (6 bidang) vs urusan pilihan. Tantangan: kapasitas daerah yang tidak merata."},
      {sub:"Collaborative Governance (Ansell & Gash)",konten:"Model: kondisi awal (power asymmetry, sejarah konflik/kerja sama, insentif partisipasi) → desain institusional → kepemimpinan fasilitatif → proses kolaborasi (dialog tatap muka, trust building, commitment, shared understanding, outcomes sementara) → dampak akhir. Kegagalan sering akibat power asymmetry yang tidak dikelola."},
    ]
  },
  {
    bab:"IV", judul:"Evaluasi, Akuntabilitas & Organizational Learning",
    isi:[
      {sub:"Evaluasi Berbasis Teori (Theory-Based Evaluation)",konten:"Logic model: Input → Aktivitas → Output → Outcome → Impact. Output: apa yang diproduksi (jumlah pelatihan). Outcome: perubahan perilaku/kondisi (peningkatan keterampilan). Impact: perubahan jangka panjang struktural. Evaluasi harus menyasar causal mechanism, bukan sekadar korelasi output-outcome."},
      {sub:"Tipologi Akuntabilitas",konten:"Vertikal: ke pemilih/legislatif (ke atas) dan ke warga (ke bawah). Horizontal: antar lembaga setara (KPK, BPK, Ombudsman). Diagonal: ke masyarakat sipil via social audit, citizens report card, e-participation. Paradoks: excessive accountability dapat menghambat inovasi dan risk-taking birokratis."},
      {sub:"Organizational Learning (Argyris & Schön)",konten:"Single-loop: memperbaiki cara kerja tanpa mempertanyakan asumsi (deteksi-koreksi error dalam governing variables). Double-loop: mempertanyakan dan merevisi asumsi dasar (governing variables itu sendiri). Triple-loop: mempertanyakan paradigma dan nilai organisasi. Kebanyakan organisasi terjebak pada single-loop."},
      {sub:"Adaptive Management",konten:"Siklus: plan → implement → monitor → evaluate → adapt. Mensyaratkan: sistem monitoring real-time, mekanisme feedback cepat, toleransi institusional terhadap eksperimen dan kegagalan terkontrol. Berbeda dari implementasi konvensional yang menekankan fidelity (kepatuhan pada desain awal)."},
    ]
  }
];
 
const SOAL = [
  // BAB I — 14 soal
  {id:1,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Pressman dan Wildavsky (1973) mengembangkan model implementasi top-down berdasarkan studi kasus program lapangan kerja di kota mana?",
   opsi:["A. New York City","B. Oakland, California","C. Chicago, Illinois","D. Detroit, Michigan","E. Los Angeles, California"],
   jawaban:"B",
   pembahasan:"Pressman dan Wildavsky menulis 'Implementation' (1973) berdasarkan studi kasus program Economic Development Administration (EDA) di Oakland, California. Mereka menemukan bahwa meskipun niat awal baik dan dana tersedia, program gagal karena panjangnya rantai keputusan (70 decision points) dengan berbagai aktor yang harus setuju. Buku ini menjadi fondasi studi implementasi modern."},
  {id:2,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam model top-down, Van Meter dan Van Horn (1975) mengidentifikasi enam variabel penentu implementasi. Variabel manakah yang paling langsung dipengaruhi oleh 'komunikasi antar organisasi'?",
   opsi:["A. Standar dan tujuan kebijakan","B. Sumber daya implementasi","C. Aktivitas implementasi antar organisasi","D. Karakteristik agen pelaksana","E. Kondisi sosial-ekonomi"],
   jawaban:"C",
   pembahasan:"Van Meter dan Van Horn (1975) menetapkan enam variabel: (1) standar/tujuan kebijakan, (2) sumber daya, (3) komunikasi antar organisasi dan aktivitas pelaksanaan, (4) karakteristik agen pelaksana, (5) kondisi sosial-ekonomi-politik, (6) disposisi/sikap pelaksana. Komunikasi antar organisasi paling langsung mempengaruhi koordinasi aktivitas implementasi (variabel 3), karena tanpa komunikasi yang jelas, aktivitas lintas lembaga menjadi tidak terkoordinasi."},
  {id:3,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Michael Lipsky menyebut 'street-level bureaucrats' sebagai policy makers sejati karena...",
   opsi:["A. Mereka memiliki jabatan lebih tinggi dari manajer menengah","B. Keputusan harian mereka secara kumulatif membentuk kebijakan yang sesungguhnya dialami warga","C. Mereka terlibat langsung dalam proses legislasi kebijakan","D. Mereka memiliki akses langsung ke media massa","E. Mereka dapat memveto kebijakan yang dianggap tidak layak"],
   jawaban:"B",
   pembahasan:"Lipsky berargumen bahwa meskipun SLB berada di ujung bawah hierarki, keputusan harian mereka (siapa yang dilayani, bagaimana menafsirkan aturan, kapan menggunakan diskresi) secara kumulatif membentuk kebijakan yang benar-benar dirasakan warga. Kebijakan 'di atas kertas' berbeda dari kebijakan 'di lapangan' justru karena peran SLB ini. Ini membalik asumsi top-down bahwa kebijakan mengalir dari atas ke bawah secara linear."},
  {id:4,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Mekanisme utama yang digunakan street-level bureaucrats untuk mengatasi beban kerja berlebihan (work overload) menurut Lipsky adalah...",
   opsi:["A. Mengajukan penambahan anggaran ke atasan","B. Melakukan coping mechanisms seperti simplifikasi, kategorisasi klien, dan pembatasan layanan","C. Melaporkan kondisi kerja kepada ombudsman","D. Meminta rotasi jabatan ke unit yang lebih tenang","E. Menggunakan teknologi otomasi untuk menggantikan pekerjaan rutin"],
   jawaban:"B",
   pembahasan:"Lipsky mengidentifikasi bahwa SLB menghadapi gap struktural antara tuntutan pekerjaan dan sumber daya tersedia. Untuk bertahan, mereka mengembangkan 'coping strategies': (1) simplifikasi kasus kompleks menjadi kategori mudah; (2) stereotyping klien berdasarkan pengalaman masa lalu; (3) pembatasan akses layanan; (4) pengalihan tanggung jawab. Strategi ini bersifat adaptif namun sering merugikan klien yang paling membutuhkan layanan."},
  {id:5,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam Advocacy Coalition Framework (ACF) Sabatier, 'secondary beliefs' berbeda dari 'near-core beliefs' karena...",
   opsi:["A. Secondary beliefs bersifat lebih fundamental dan sulit diubah","B. Secondary beliefs mencakup cara dan instrumen implementasi yang lebih mudah dinegosiasikan","C. Secondary beliefs hanya dianut oleh koalisi minoritas","D. Secondary beliefs berkaitan dengan nilai-nilai moral dan etika dasar","E. Secondary beliefs selalu bertentangan dengan deep core beliefs"],
   jawaban:"B",
   pembahasan:"ACF membagi belief system menjadi tiga lapis: Deep core (nilai paling fundamental, sangat resisten terhadap perubahan), Near-core (posisi kebijakan substantif seperti target dan instrumen utama — lebih fleksibel), dan Secondary beliefs (cara implementasi teknis, alokasi anggaran, detail prosedur — paling mudah berubah melalui negosiasi). Keberhasilan perubahan kebijakan seringkali dimulai dari secondary beliefs, kemudian merembet ke near-core, dan sangat jarang mengubah deep core."},
  {id:6,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Program beasiswa afirmasi untuk mahasiswa dari daerah 3T (Terdepan, Terluar, Tertinggal) memiliki tujuan yang jelas tetapi menghadapi resistensi kuat dari perguruan tinggi karena dianggap menurunkan standar akademik. Menurut Matland, ini termasuk implementasi...",
   opsi:["A. Administratif","B. Eksperimental","C. Simbolik","D. Politis","E. Teknis"],
   jawaban:"D",
   pembahasan:"Matriks Matland: tujuan beasiswa yang jelas = ambiguitas RENDAH; resistensi kuat dari PT = konflik TINGGI. Kuadran rendah-ambiguitas + tinggi-konflik = Political Implementation. Dalam konteks ini, keberhasilan implementasi ditentukan oleh kekuatan (power) — siapa yang memiliki kewenangan memaksa kepatuhan. Pemerintah harus menggunakan legitimasi dan otoritas regulatornya untuk mengatasi resistensi, bukan mencari konsensus."},
  {id:7,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Kebijakan 'ekonomi sirkular' baru diluncurkan dengan definisi yang belum disepakati semua kementerian dan tidak ada kelompok yang secara aktif menentangnya. Dalam Matland Matrix, ini masuk kategori...",
   opsi:["A. Administratif — karena mudah dijalankan","B. Politis — karena melibatkan banyak kementerian","C. Eksperimental — karena ambiguitas tinggi namun konflik rendah","D. Simbolik — karena hanya sebagai pencitraan politik","E. Teknis — karena membutuhkan keahlian khusus"],
   jawaban:"C",
   pembahasan:"Definisi yang belum disepakati = ambiguitas TINGGI; tidak ada oposisi aktif = konflik RENDAH. Ini adalah Experimental Implementation. Hasilnya sangat bergantung pada konteks lokal dan inovasi agen pelaksana di lapangan. Berbeda dengan implementasi simbolik (tinggi-tinggi), di sini ketidakjelasan bukan karena konflik kepentingan melainkan karena konsep kebijakan memang masih berkembang. Solusi: pilot projects adaptif untuk menemukan best practice."},
  {id:8,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"'Implementation gap' dalam perspektif Sabatier terjadi utamanya karena...",
   opsi:["A. Anggaran yang tidak mencukupi untuk menjalankan program","B. Perbedaan belief systems antar koalisi yang terlibat dalam implementasi","C. Kurangnya tenaga ahli teknis dalam birokrasi","D. Ketidaksesuaian peraturan pusat dan daerah","E. Lemahnya sistem monitoring dan evaluasi"],
   jawaban:"B",
   pembahasan:"Dalam ACF, implementation gap terjadi karena aktor-aktor yang terlibat implementasi memiliki belief systems berbeda. Koalisi yang menang dalam proses legislasi bisa kehilangan kendali di fase implementasi jika koalisi oposisi mendominasi badan pelaksana. Selain itu, birokrat di lapangan mungkin memiliki near-core beliefs berbeda dari perancang kebijakan, sehingga mereka mengimplementasikan kebijakan sesuai keyakinan mereka sendiri. Ini berbeda dari penjelasan berbasis sumber daya atau kapasitas teknis."},
  {id:9,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Paul Sabatier dan Hank Jenkins-Smith menetapkan time horizon minimal 10 tahun untuk menganalisis perubahan kebijakan dalam ACF karena...",
   opsi:["A. Data statistik kebijakan baru tersedia setelah 10 tahun","B. Perubahan belief systems membutuhkan waktu panjang dan jarang terjadi secara instan","C. Siklus anggaran pemerintah berjalan dalam rentang 10 tahun","D. Evaluasi dampak kebijakan membutuhkan minimal satu dekade","E. Pergantian pemerintahan rata-rata terjadi setiap 10 tahun"],
   jawaban:"B",
   pembahasan:"ACF menekankan bahwa deep core dan near-core beliefs sangat resisten terhadap perubahan. Perubahan mendasar hanya terjadi akibat: (1) external perturbations (krisis ekonomi, bencana, pergantian pemerintahan besar); (2) akumulasi bukti ilmiah yang melemahkan koalisi dominan; atau (3) negosiasi antar koalisi (policy-oriented learning). Semua proses ini membutuhkan waktu minimal satu dekade. Horizon 10 tahun juga memungkinkan analisis bagaimana koalisi terbentuk, bersaing, dan berevolusi."},
  {id:10,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Pendekatan 'backward mapping' yang dikembangkan Elmore (1980) sebagai alternatif top-down menyarankan perancang kebijakan untuk...",
   opsi:["A. Mulai dari tujuan nasional dan bekerja mundur ke langkah implementasi","B. Mulai dari perilaku yang ingin diubah di tingkat paling bawah lalu ke atas","C. Membandingkan kebijakan dengan praktik terbaik internasional","D. Memetakan semua aktor yang terlibat sebelum merancang kebijakan","E. Mengevaluasi kebijakan lama sebelum merancang yang baru"],
   jawaban:"B",
   pembahasan:"Elmore (1980) mengkritik 'forward mapping' (top-down) yang dimulai dari kebijakan lalu merancang implementasi ke bawah. Ia mengusulkan 'backward mapping': mulai dengan pertanyaan 'perilaku konkret apa yang harus berubah?', lalu mundur ke atas: apa yang harus dilakukan oleh pelaksana lapangan? Apa kapasitas yang mereka butuhkan? Apa kebijakan yang perlu mendukungnya? Pendekatan ini lebih realistis karena berangkat dari realitas lapangan, bukan asumsi teoretis perancang."},
  {id:11,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Apa perbedaan utama antara 'policy outputs' dan 'policy outcomes' dalam studi implementasi?",
   opsi:["A. Output diukur secara kuantitatif; outcomes secara kualitatif","B. Output adalah apa yang diproduksi oleh implementasi; outcomes adalah perubahan kondisi atau perilaku yang dituju","C. Output adalah hasil jangka pendek; outcomes adalah hasil jangka panjang lebih dari 5 tahun","D. Output bersifat fisik seperti infrastruktur; outcomes bersifat abstrak","E. Output dihasilkan oleh pusat; outcomes dihasilkan oleh daerah"],
   jawaban:"B",
   pembahasan:"Perbedaan fundamental: Output adalah produk langsung aktivitas program (jumlah pelatihan dilaksanakan, jumlah KTP dicetak, km jalan dibangun). Outcomes adalah perubahan kondisi/perilaku yang dituju oleh kebijakan (peningkatan keterampilan peserta, akses warga ke layanan, konektivitas wilayah). Impact adalah perubahan jangka panjang yang lebih luas. Banyak program berhasil di tingkat output namun gagal di tingkat outcome — ini adalah tantangan inti evaluasi implementasi."},
  {id:12,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam konteks implementasi kebijakan, 'fidelity' merujuk pada...",
   opsi:["A. Tingkat kepercayaan warga terhadap pemerintah","B. Sejauh mana implementasi mematuhi desain kebijakan asal (program theory)","C. Kesetiaan birokrat terhadap pemimpin politiknya","D. Akurasi data yang digunakan dalam monitoring kebijakan","E. Konsistensi peraturan antar tingkatan pemerintahan"],
   jawaban:"B",
   pembahasan:"Fidelity (atau program fidelity / implementation fidelity) mengukur seberapa dekat pelaksanaan di lapangan dengan desain program yang dimaksudkan perancang. Rendahnya fidelity bisa disebabkan diskresi SLB, adaptasi lokal, atau kapasitas yang tidak cukup. Ada perdebatan: apakah fidelity tinggi selalu lebih baik? Adaptive implementation berargumen bahwa adaptasi terhadap konteks lokal kadang lebih efektif, meskipun mengorbankan fidelity terhadap desain asli."},
  {id:13,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Goggin et al. (1990) mengembangkan 'komunikasi model' implementasi generasi ketiga. Kontribusi utamanya terhadap studi implementasi adalah...",
   opsi:["A. Membuktikan bahwa implementasi top-down lebih efektif daripada bottom-up","B. Mengintegrasikan variabel komunikasi lintas tingkatan pemerintahan dan menggunakan metode komparatif sistematis","C. Mengembangkan formula matematis untuk mengukur probabilitas implementasi","D. Memperkenalkan konsep accountability gap pertama kali","E. Menolak semua model sebelumnya dan menggantinya dengan rational choice"],
   jawaban:"B",
   pembahasan:"Goggin et al. (1990) dikenal dengan 'third generation' implementation research. Kontribusinya: (1) menekankan pentingnya komunikasi antar tingkatan pemerintahan (federal-state-local) sebagai variabel independen utama; (2) menggunakan metode komparatif sistematis dengan sampel besar untuk menguji hipotesis; (3) memperhatikan variasi dalam implementasi antar daerah. Mereka mengkritik generasi pertama (top-down) dan kedua (bottom-up) karena terlalu berfokus pada satu kasus dan kurang metodologis."},
  {id:14,bab:"I",bobot:2,tipe:"pilgan",
   pertanyaan:"Kritik 'synthesis problem' terhadap model implementasi top-down dan bottom-up berarti...",
   opsi:["A. Kedua model tidak bisa digunakan secara bersamaan dalam satu penelitian","B. Sulit mengintegrasikan wawasan kedua perspektif karena menggunakan unit analisis dan asumsi yang berbeda","C. Tidak ada model yang mampu memprediksi keberhasilan implementasi secara akurat","D. Sintesis teori hanya mungkin dilakukan oleh akademisi dari negara maju","E. Kedua model menghasilkan kesimpulan yang selalu bertentangan satu sama lain"],
   jawaban:"B",
   pembahasan:"'Synthesis problem' (Sabatier, 1986) muncul karena top-down dan bottom-up memiliki: (a) perspektif berbeda tentang 'siapa' yang paling penting (pembuat kebijakan vs. SLB); (b) unit analisis berbeda (program/kebijakan vs. pelaksana lapangan); (c) asumsi epistemologi berbeda (positivisme vs. interpretivis). Upaya sintesis seperti model Matland, Goggin, dan Sabatier sendiri mencoba menjembatani ini, namun tetap ada tegangan konseptual yang belum sepenuhnya terselesaikan."},
 
  // BAB II — 14 soal
  {id:15,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Sebuah program vaksinasi melewati 10 titik persetujuan birokrasi, masing-masing dengan tingkat kepatuhan 90%. Berapa perkiraan probabilitas program diimplementasikan sesuai desain asal?",
   opsi:["A. 90%","B. ~75%","C. ~35%","D. ~27%","E. ~65%"],
   jawaban:"C",
   pembahasan:"Menggunakan logika Pressman–Wildavsky: p^n = (0.90)^10 = 0.3487 ≈ 35%. Ini menunjukkan bahwa meskipun masing-masing titik tampak 'cukup patuh' (90%), kumulasinya mengikis keberhasilan secara dramatis. Implikasi kebijakan: desain program harus meminimalkan jumlah clearance points, atau meningkatkan standar kepatuhan di setiap link secara signifikan. Bahkan dengan p=0.95 dan n=10: (0.95)^10 = ~60%, masih jauh dari sempurna."},
  {id:16,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"'Adverse selection' dalam konteks desentralisasi kebijakan pendidikan paling tepat terjadi ketika...",
   opsi:["A. Kepala sekolah menyalahgunakan dana BOS setelah diterima","B. Pemerintah pusat memilih kepala dinas pendidikan berdasarkan loyalitas politik, bukan kompetensi","C. Daerah dengan kapasitas rendah mengajukan program yang sebenarnya tidak mampu mereka jalankan","D. Guru kelas melakukan penilaian yang tidak objektif kepada siswa","E. Anggaran pendidikan tidak cukup untuk menutup semua kebutuhan program"],
   jawaban:"C",
   pembahasan:"Adverse selection = masalah informasi SEBELUM kontrak/komitmen, di mana pihak yang dipilih menyembunyikan karakteristik negatif. Dalam desentralisasi: daerah kapasitas rendah mengajukan proposal ambisius (karena insentif mendapat dana transfer) padahal mereka tidak mampu mengelolanya. Pusat tidak dapat membedakan daerah berkapasitas tinggi vs rendah sebelum komitmen — ini adalah adverse selection. Berbeda dari moral hazard (opsi A) yang terjadi SETELAH kontrak saat monitoring lemah."},
  {id:17,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Instrumen kebijakan 'sermons' dalam tipologi Hood-Howlett paling efektif digunakan ketika...",
   opsi:["A. Target group memiliki sumber daya keuangan yang sangat terbatas","B. Target group sudah memiliki motivasi dan hanya butuh informasi/pengetahuan untuk berubah","C. Pemerintah memiliki kewenangan sanksi yang kuat terhadap pelanggar","D. Masalah kebijakan bersifat teknis dan tidak melibatkan perubahan nilai","E. Waktu yang tersedia untuk implementasi sangat singkat"],
   jawaban:"B",
   pembahasan:"'Sermons' (edukasi, kampanye, informasi) efektif ketika: (1) target group sudah termotivasi untuk berubah; (2) hambatan utamanya adalah kurangnya pengetahuan/kesadaran, bukan kurangnya kemampuan finansial atau insentif; (3) perubahan perilaku bersifat sukarela. Sermons kurang efektif jika target group tidak termotivasi (butuh 'carrots' atau 'sticks') atau jika masalahnya adalah sumber daya (butuh 'capacity building'). Contoh: kampanye anti-rokok efektif untuk orang yang ingin berhenti, namun kurang efektif untuk perokok berat yang sudah kecanduan."},
  {id:18,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Kapasitas institusional 'teknis' berbeda dari kapasitas 'manajerial' karena...",
   opsi:["A. Kapasitas teknis hanya relevan untuk kementerian teknis seperti PUPR dan Kominfo","B. Kapasitas teknis mencakup SDM, teknologi, dan infrastruktur; manajerial mencakup koordinasi, monitoring, dan pengambilan keputusan","C. Kapasitas teknis diukur secara kuantitatif; manajerial secara kualitatif","D. Kapasitas teknis dimiliki pusat; manajerial dimiliki daerah","E. Kapasitas teknis bersifat permanen; manajerial bersifat kontekstual"],
   jawaban:"B",
   pembahasan:"Tiga dimensi kapasitas institusional: (1) Teknis — sumber daya fisik dan human capital: SDM terlatih, teknologi informasi, infrastruktur pelayanan; (2) Manajerial — kemampuan mengorganisasikan sumber daya: koordinasi antar unit, sistem monitoring & evaluasi, manajemen keuangan, pengambilan keputusan berbasis bukti; (3) Politik — kemampuan membangun legitimasi dan koalisi: dukungan politik, manajemen resistensi, komunikasi publik. Ketiga dimensi ini saling melengkapi; kelemahan di satu dimensi dapat mengegagalkan implementasi meski dimensi lain kuat."},
  {id:19,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Teori 'satisficing' Herbert Simon relevan untuk implementasi kebijakan karena...",
   opsi:["A. Birokrat selalu memilih opsi yang memaksimalkan anggaran departemen mereka","B. Implementor dalam kondisi bounded rationality mencari solusi yang cukup memuaskan, bukan solusi optimal","C. Pemerintah harus memuaskan semua kelompok kepentingan agar kebijakan berhasil","D. Evaluasi kebijakan cukup menggunakan standar minimal keberhasilan","E. Birokrat merasa puas dengan pekerjaan mereka jika anggaran tersedia cukup"],
   jawaban:"B",
   pembahasan:"Simon (1957) memperkenalkan 'bounded rationality': aktor tidak memaksimalkan utilitas (seperti asumsi rational choice) karena keterbatasan kognitif, informasi, dan waktu. Mereka 'satisfice' — mencari opsi pertama yang melewati ambang batas penerimaan. Implikasi untuk implementasi: birokrat tidak mencari cara optimal menjalankan kebijakan; mereka mencari cara yang 'cukup baik' dan menghindari kompleksitas. Ini menjelaskan mengapa implementasi sering mengambil jalan paling mudah, bukan paling efektif."},
  {id:20,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"'Displacement of goals' dalam implementasi birokrasi (Merton, 1940) mendeskripsikan fenomena...",
   opsi:["A. Tujuan kebijakan berubah karena pergantian pemerintahan","B. Birokrat memprioritaskan kepatuhan prosedur sebagai tujuan itu sendiri, menggantikan tujuan substantif kebijakan","C. Dana program dialihkan ke tujuan yang tidak direncanakan","D. Target kebijakan bergeser dari kelompok miskin ke kelompok menengah","E. Pimpinan birokrasi menggeser prioritas berdasarkan tekanan politik harian"],
   jawaban:"B",
   pembahasan:"Merton (1940) mengidentifikasi 'goal displacement' atau 'bureaucratic dysfunction': aturan dan prosedur yang awalnya diciptakan sebagai alat untuk mencapai tujuan substantif, akhirnya menjadi tujuan itu sendiri. Birokrat menjadi 'rule-bound' dan lebih peduli pada kepatuhan prosedural daripada pada hasil layanan. Contoh: petugas menolak membantu warga yang tidak membawa dokumen lengkap meskipun kasusnya mendesak, karena prioritasnya adalah 'tidak melanggar prosedur', bukan 'membantu warga'."},
  {id:21,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Program PKH (Program Keluarga Harapan) Indonesia menggunakan verifikasi kondisional sebagai mekanisme transfer. Ini paling tepat dikategorikan sebagai instrumen kebijakan...",
   opsi:["A. Sticks murni — karena ada ancaman sanksi pencabutan bantuan","B. Carrots dengan kondisionalitas — insentif finansial yang mensyaratkan perilaku tertentu","C. Sermons — karena mendidik keluarga untuk berperilaku lebih baik","D. Capacity building — karena meningkatkan kapasitas keluarga miskin","E. Nodality — karena berbasis sistem informasi dan data"],
   jawaban:"B",
   pembahasan:"PKH menggunakan conditional cash transfer (CCT): keluarga menerima transfer uang tunai (carrot/insentif positif) dengan syarat memenuhi kondisionalitas (anak sekolah, kunjungan ke posyandu, ibu hamil periksa kesehatan). Ini adalah hybrid instrumen: insentif finansial positif + sanksi berupa pencabutan jika kondisi tidak dipenuhi. Berbeda dari pure carrots (tanpa syarat) atau pure sticks (hanya ancaman). CCT terbukti efektif di banyak negara karena mengubah perilaku sekaligus mengurangi kemiskinan jangka pendek."},
  {id:22,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Konsep 'organizational slack' dalam konteks implementasi kebijakan merujuk pada...",
   opsi:["A. Kelambatan birokrasi dalam merespons instruksi dari atas","B. Cadangan sumber daya organisasi yang memberikan fleksibilitas untuk menghadapi tantangan implementasi","C. Beban kerja berlebihan yang membuat pegawai tidak produktif","D. Kurangnya koordinasi antara unit-unit dalam satu organisasi","E. Resistensi pegawai terhadap perubahan prosedur kerja"],
   jawaban:"B",
   pembahasan:"'Organizational slack' (Cyert & March, 1963) adalah cadangan sumber daya — anggaran berlebih, kapasitas SDM yang tidak digunakan penuh, atau fleksibilitas prosedural — yang tersimpan dalam organisasi. Dalam implementasi, slack positif: memberikan buffer untuk menghadapi tantangan tidak terduga, memungkinkan eksperimentasi dan adaptasi, melindungi dari guncangan eksternal. Slack negatif: memungkinkan inefisiensi dan korupsi. Organisasi tanpa slack apapun sangat rentan kegagalan implementasi ketika kondisi berubah."},
  {id:23,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam analisis implementasi kebijakan lingkungan, 'regulatory capture' terjadi ketika...",
   opsi:["A. Regulator menerapkan sanksi terlalu ketat kepada industri","B. Industri yang diregulasi berhasil mempengaruhi regulator sehingga kebijakan berpihak pada kepentingan industri","C. Pemerintah mengambil alih aset perusahaan yang melanggar regulasi","D. Kebijakan lingkungan diformulasikan tanpa konsultasi dengan sektor swasta","E. Perusahaan asing mendominasi sektor industri dalam negeri"],
   jawaban:"B",
   pembahasan:"'Regulatory capture' (Stigler, 1971) adalah fenomena di mana badan regulasi, yang seharusnya melindungi kepentingan publik, justru beroperasi untuk kepentingan industri yang diaturnya. Mekanisme: (1) revolving door — birokrat pindah ke industri dan sebaliknya; (2) informasi asimetris — industri memiliki data teknis lebih dari regulator; (3) biaya lobi rendah vs manfaat tinggi bagi industri. Dalam implementasi lingkungan: AMDAL yang lemah, izin lingkungan mudah diperoleh, sanksi tidak ditegakkan."},
  {id:24,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Mengapa kebijakan yang secara teknis dirancang dengan baik sering gagal dalam implementasi di tingkat daerah di Indonesia?",
   opsi:["A. Karena aparat daerah sengaja menghambat kebijakan pusat","B. Karena kapasitas fiskal daerah terlalu rendah untuk membiayai mandiri","C. Karena kombinasi: heterogenitas kapasitas daerah, mismatch sumber daya-mandat, dan rendahnya transfer pengetahuan dari pusat ke daerah","D. Karena regulasi daerah selalu bertentangan dengan regulasi nasional","E. Karena warga daerah menolak kebijakan yang dibuat di pusat"],
   jawaban:"C",
   pembahasan:"Kegagalan implementasi di daerah Indonesia bersifat multi-kausal: (1) Heterogenitas kapasitas — Jawa dan luar Jawa memiliki gap kapasitas SDM, teknologi, dan fiskal yang sangat besar; (2) Unfunded mandates — pusat memberi mandat tanpa DAK/DAU yang memadai untuk menjalankannya; (3) Transfer pengetahuan lemah — petunjuk teknis (juknis) seringkali datang terlambat dan tidak disertai pelatihan memadai; (4) Diskresi lokal yang tidak terstruktur — ketidakjelasan batas kewenangan menciptakan kebingungan dan inefisiensi."},
  {id:25,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Konsep 'implementation fidelity' berbenturan dengan 'local adaptation' dalam perdebatan implementasi karena...",
   opsi:["A. Fidelity lebih mahal secara finansial dibanding adaptasi lokal","B. Fidelity tinggi memastikan integritas program namun bisa gagal dalam konteks lokal yang berbeda; adaptasi meningkatkan relevansi namun berisiko mengubah teori perubahan yang mendasari program","C. Adaptasi lokal hanya relevan untuk program kesehatan, bukan program sosial","D. Fidelity hanya bisa diukur oleh evaluator eksternal yang independen","E. Adaptasi lokal selalu mengurangi efektivitas program dalam jangka panjang"],
   jawaban:"B",
   pembahasan:"Ini adalah salah satu tegangan paling fundamental dalam implementasi: fidelity tinggi (menjalankan program persis seperti dirancang) memastikan bahwa mekanisme kausal yang telah terbukti dalam desain tetap berfungsi, namun bisa tidak cocok dengan konteks lokal yang berbeda. Adaptasi lokal meningkatkan fit dengan konteks, namun berisiko mengubah 'active ingredients' program sehingga tidak lagi efektif. Solusi terkini: 'core components fidelity' — identifikasi komponen inti yang tidak boleh diubah, sambil memperbolehkan adaptasi pada komponen non-inti."},
  {id:26,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam implementasi kebijakan berbasis bukti (evidence-based policy), tantangan 'know-do gap' berarti...",
   opsi:["A. Peneliti tidak tahu bagaimana mengkomunikasikan temuan mereka kepada pembuat kebijakan","B. Ada kesenjangan antara pengetahuan tentang 'apa yang bekerja' dari penelitian dan praktik implementasi aktual","C. Pembuat kebijakan tidak memiliki akses ke jurnal ilmiah internasional","D. Birokrat tidak mendapat pelatihan yang cukup tentang metodologi penelitian","E. Anggaran untuk penelitian kebijakan selalu lebih rendah dari yang dibutuhkan"],
   jawaban:"B",
   pembahasan:"'Know-do gap' (WHO, 2004) mendeskripsikan kesenjangan antara: (1) apa yang diketahui efektif berdasarkan bukti penelitian; dan (2) apa yang benar-benar dilakukan dalam praktik. Penyebab: penelitian tidak dikomunikasikan dalam bahasa kebijakan; pembuat kebijakan memiliki tekanan politik yang lebih kuat dari tekanan bukti; insentif sistem tidak mendorong adopsi inovasi berbasis bukti; implementor lapangan tidak mengetahui penelitian terbaru. Ini adalah tantangan sentral gerakan evidence-based policy global."},
  {id:27,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"'Street-level rationing' dalam konteks pelayanan publik merujuk pada praktik...",
   opsi:["A. Penetapan tarif layanan publik oleh birokrat tingkat bawah","B. Pembatasan akses layanan oleh implementor lapangan karena keterbatasan sumber daya","C. Distribusi anggaran secara tidak merata antar wilayah","D. Penetapan standar minimal layanan oleh regulator","E. Pemotongan anggaran program oleh dinas keuangan daerah"],
   jawaban:"B",
   pembahasan:"Street-level rationing adalah konsekuensi langsung dari kondisi yang diidentifikasi Lipsky: sumber daya selalu terbatas sementara permintaan layanan selalu melebihi kapasitas. SLB terpaksa 'menjatah' siapa yang mendapat layanan penuh, siapa yang mendapat sebagian, dan siapa yang ditolak. Mekanisme rationing: antrian panjang (de-facto menyaring yang paling butuh vs. yang paling persisten), persyaratan administratif kompleks (menyaring yang tidak punya dokumen), atau penilaian subjektif 'kelayakan' klien. Ini menciptakan ketidaksetaraan akses yang sering tidak terlihat dalam data agregat."},
  {id:28,bab:"II",bobot:2,tipe:"pilgan",
   pertanyaan:"Pendekatan 'New Institutionalism' berbeda dari 'old institutionalism' dalam analisis implementasi karena...",
   opsi:["A. New institutionalism hanya menggunakan metode kuantitatif","B. New institutionalism menekankan bagaimana aturan, norma, dan rutinitas informal membentuk perilaku implementor, bukan hanya struktur formal","C. Old institutionalism lebih relevan untuk negara berkembang","D. New institutionalism menolak peran organisasi dalam implementasi","E. Old institutionalism lebih menekankan pilihan rasional individu"],
   jawaban:"B",
   pembahasan:"'Old institutionalism' (awal abad 20) berfokus pada struktur formal: undang-undang, organisasi birokrasi, prosedur resmi. 'New institutionalism' (March & Olsen, DiMaggio & Powell, North) menekankan: (1) rules of the game informal — norma, konvensi, rutinitas tidak tertulis yang membentuk perilaku; (2) path dependency — pilihan institusional masa lalu membatasi pilihan masa kini; (3) isomorphism — organisasi cenderung menyerupai satu sama lain karena tekanan normatif, koersif, dan mimetik. Bagi implementasi: aturan informal sering lebih menentukan dari aturan formal."},
 
  // BAB III — 12 soal
  {id:29,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"New Public Management (NPM) berbeda dari New Public Governance (NPG) dalam hal pendekatan implementasi karena...",
   opsi:["A. NPM menggunakan pasar sebagai mekanisme utama; NPG menggunakan jaringan dan ko-produksi","B. NPM berfokus pada outcomes; NPG berfokus pada proses dan prosedur","C. NPM relevan untuk negara maju; NPG untuk negara berkembang","D. NPM melibatkan masyarakat sipil; NPG lebih top-down","E. NPM mensyaratkan desentralisasi; NPG mensyaratkan sentralisasi"],
   jawaban:"A",
   pembahasan:"NPM (1980-1990an): meminjam mekanisme pasar — kompetisi antar penyedia layanan, kontrak berbasis kinerja, managerialism, 3E (Economy, Efficiency, Effectiveness). NPG (2000an-sekarang, Osborne 2006): Pemerintah adalah satu aktor dalam jaringan pluralis yang lebih luas. Layanan publik diproduksi bersama (co-production) antara pemerintah, LSM, sektor swasta, dan warga. Akuntabilitas tidak hanya vertikal ke atas, tapi horizontal dan diagonal. NPG mengakui kompleksitas dan ketidakpastian yang tidak bisa diselesaikan dengan logika pasar semata."},
  {id:30,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam tipologi Rondinelli, 'devolusi' berbeda dari 'dekonsentrasi' karena...",
   opsi:["A. Devolusi hanya berlaku untuk urusan fiskal; dekonsentrasi untuk urusan administratif","B. Devolusi mentransfer kewenangan dan tanggung jawab ke unit pemerintah otonom; dekonsentrasi hanya mendelegasikan ke perwakilan pusat di daerah","C. Devolusi bersifat permanen; dekonsentrasi bersifat sementara","D. Devolusi dilakukan oleh legislatif; dekonsentrasi oleh eksekutif","E. Devolusi berlaku untuk semua sektor; dekonsentrasi hanya untuk sektor tertentu"],
   jawaban:"B",
   pembahasan:"Rondinelli (1981) membedakan: Dekonsentrasi — penyebaran fungsi administratif ke kantor lapangan pemerintah pusat (kantor wilayah kementerian, gubernur sebagai wakil pusat). Unit ini tidak otonom, masih di bawah kendali hierarki pusat. Devolusi — transfer kewenangan substantif dan tanggung jawab ke unit pemerintah sub-nasional yang otonom (pemerintah daerah terpilih) dengan kewenangan legislatif, eksekutif, dan fiskal tersendiri. Di Indonesia: bupati/walikota menjalankan devolusi; gubernur sebagai wakil pusat menjalankan dekonsentrasi."},
  {id:31,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Hollow state' atau negara yang 'berlubang' dalam konteks governance berarti...",
   opsi:["A. Pemerintah memiliki terlalu banyak kementerian yang tumpang tindih fungsinya","B. Pemerintah mengalihkan delivery layanan publik ke pihak ketiga sehingga kapasitas inti birokratis terkikis","C. Korupsi telah menggerogoti integritas institusi pemerintah","D. Banyak posisi pemerintahan yang tidak terisi karena kekurangan SDM","E. Anggaran pemerintah tidak mencukupi untuk menjalankan fungsi dasar negara"],
   jawaban:"B",
   pembahasan:"'Hollow state' (Milward & Provan, 1993) mendeskripsikan kondisi di mana pemerintah terlalu banyak mengontrakkan (contracting out) layanan publik ke NGO, swasta, dan pihak ketiga lainnya. Akibatnya: (1) kapasitas internal pemerintah terkikis karena 'use it or lose it'; (2) pemerintah kehilangan kemampuan mengelola sendiri saat kontrak gagal; (3) akuntabilitas kabur — siapa bertanggung jawab jika kontraktor gagal deliver? Ini adalah paradoks NPM: mengejar efisiensi jangka pendek dengan menggerogoti kapasitas jangka panjang."},
  {id:32,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Unfunded mandate' dalam sistem desentralisasi Indonesia paling sering terjadi ketika...",
   opsi:["A. Pemerintah daerah mengeluarkan peraturan yang tidak didukung APBD","B. Pemerintah pusat menetapkan kewajiban layanan untuk daerah tanpa mengalokasikan sumber daya keuangan yang memadai","C. Dana transfer ke daerah tidak dapat dicairkan karena kesalahan administrasi","D. Daerah memilih menggunakan PAD untuk belanja di luar urusan wajib","E. Pusat dan daerah memperebutkan potensi pendapatan dari SDA yang sama"],
   jawaban:"B",
   pembahasan:"Unfunded mandate: pusat mewajibkan daerah menyelenggarakan layanan tertentu (misalnya SPM — Standar Pelayanan Minimal di 6 bidang) tanpa memastikan DAK/DAU yang ditransfer cukup untuk memenuhi mandat tersebut. Konsekuensi: daerah dengan PAD tinggi bisa memenuhi mandatnya; daerah fiskal rendah tidak bisa. Ini memperlebar ketimpangan pelayanan publik antar daerah. Solusi: cost modeling yang akurat sebelum menetapkan SPM, dan formula transfer yang memperhitungkan biaya riil penyelenggaraan layanan."},
  {id:33,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam model Collaborative Governance Ansell & Gash, 'intermediate outcomes' (outcomes sementara) memiliki peran penting karena...",
   opsi:["A. Menjadi target resmi yang dilaporkan ke pemerintah pusat","B. Membangun kepercayaan dan momentum kolaborasi melalui pencapaian kecil yang terlihat","C. Merupakan syarat hukum dalam perjanjian kolaborasi formal","D. Menjadi dasar penentuan anggaran kolaborasi di tahun berikutnya","E. Menunjukkan kepada publik bahwa kolaborasi sudah berhasil"],
   jawaban:"B",
   pembahasan:"Dalam model Ansell & Gash, 'small wins' atau intermediate outcomes adalah elemen kritis dalam proses kolaborasi. Fungsinya: (1) membangun trust antar pihak yang sebelumnya bersaing/berkonflik; (2) membuktikan bahwa kolaborasi dapat menghasilkan hasil nyata; (3) menjaga komitmen partisipan yang mulai skeptis; (4) menciptakan momentum positif yang mendorong kolaborasi lebih dalam. Tanpa intermediate outcomes yang terlihat, kolaborasi mudah terpecah karena partisipan kehilangan kepercayaan bahwa proses akan menghasilkan sesuatu yang nyata."},
  {id:34,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Co-production' dalam New Public Governance berbeda dari pelibatan masyarakat konvensional karena...",
   opsi:["A. Co-production melibatkan pembayaran kepada warga yang berpartisipasi","B. Co-production menempatkan warga sebagai mitra aktif yang berkontribusi pada desain, delivery, dan evaluasi layanan, bukan sekadar konsultan atau penerima","C. Co-production hanya berlaku untuk layanan sosial, bukan infrastruktur","D. Co-production mensyaratkan perjanjian kontrak formal antara pemerintah dan komunitas","E. Co-production adalah mekanisme privatisasi yang menyamarkan pengurangan anggaran pemerintah"],
   jawaban:"B",
   pembahasan:"Co-production (Ostrom, 1996): layanan publik diproduksi secara bersama oleh professional (state actors) dan pengguna layanan (citizens). Berbeda dari konsultasi publik biasa (warga hanya memberi masukan, keputusan tetap di tangan pemerintah) atau privatisasi (penyerahan ke swasta). Contoh: program pengawasan TB di mana warga terlatih memastikan pasien minum obat (DOTS community-based); neighborhood watch yang bermitra dengan polisi. Co-production mengakui bahwa warga memiliki pengetahuan lokal dan kapasitas yang tidak bisa digantikan oleh profesional."},
  {id:35,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Fiscal federalism' teori Tiebout ('voting with their feet') paling kritis dikritik karena...",
   opsi:["A. Mengabaikan pentingnya keseragaman standar layanan nasional","B. Mengasumsikan mobilitas sempurna yang tidak realistis, terutama bagi kelompok miskin yang paling butuh layanan publik","C. Mendukung desentralisasi fiskal yang berlebihan","D. Tidak mempertimbangkan eksternalitas layanan publik lintas daerah","E. Hanya berlaku untuk negara federal, bukan negara kesatuan seperti Indonesia"],
   jawaban:"B",
   pembahasan:"Tiebout (1956) berargumen bahwa persaingan antar yurisdiksi memaksa efisiensi: warga 'memilih' daerah berdasarkan paket pajak-layanan yang paling sesuai preferensi mereka. Kritik utama: (1) Mobilitas tidak sempurna — warga miskin tidak bisa pindah karena biaya migrasi tinggi; (2) Justru kelompok paling membutuhkan layanan publik (miskin, lansia, difabel) paling tidak mobile; (3) Kompetisi daerah bisa berujung 'race to the bottom' — menurunkan pajak dan layanan untuk menarik bisnis; (4) Eksternalitas lintas batas (polusi, kemacetan) tidak tertangani."},
  {id:36,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"Konsep 'polycentricity' Elinor Ostrom relevan untuk implementasi kebijakan pengelolaan sumber daya alam karena...",
   opsi:["A. Semakin banyak pusat pengambilan keputusan berarti semakin tidak efisien","B. Sistem multi-pusat dengan aturan lokal yang beragam bisa lebih efektif dari sentralisasi atau privatisasi penuh dalam mengelola commons","C. Polycentric governance mensyaratkan koordinasi yang lebih mahal dari sistem hierarkis","D. Hanya berlaku untuk sumber daya air; tidak relevan untuk hutan atau perikanan","E. Ostrom membuktikan bahwa commons selalu berakhir dalam 'tragedy of the commons'"],
   jawaban:"B",
   pembahasan:"Ostrom (1990) — Nobel Ekonomi 2009 — menolak dikotomi Hardin (tragedi commons vs. privatisasi/sentralisasi). Ia membuktikan bahwa komunitas lokal dapat membangun institusi pengelolaan commons yang efektif dan berkelanjutan melalui prinsip-prinsip desain: batas jelas, aturan disesuaikan kondisi lokal, monitoring partisipatif, sanksi bertahap, mekanisme resolusi konflik, pengakuan formal oleh otoritas eksternal. Polycentric governance mengakui bahwa ada banyak 'center' pengambilan keputusan yang saling berinteraksi — lebih adaptif dari sentralisasi rigid."},
  {id:37,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Wicked problems' (Rittel & Webber, 1973) menjadi tantangan khusus dalam implementasi kebijakan karena...",
   opsi:["A. Masalah ini selalu melibatkan kepentingan aktor jahat atau korup","B. Masalah ini tidak memiliki solusi definitif, saling terhubung kompleks, dan setiap upaya solusi menciptakan masalah baru","C. Masalah ini terlalu teknis untuk dipahami oleh birokrat generalis","D. Masalah ini membutuhkan anggaran sangat besar yang tidak tersedia","E. Masalah ini hanya bisa diselesaikan oleh lembaga internasional"],
   jawaban:"B",
   pembahasan:"Rittel & Webber mendefinisikan wicked problems: (1) tidak ada formulasi definitif masalah; (2) tidak ada solusi benar/salah, hanya lebih baik/buruk; (3) setiap solusi berdampak tidak dapat diprediksi sepenuhnya; (4) tidak ada uji coba — setiap implementasi adalah konsekuensial; (5) setiap wicked problem unik; (6) bisa dijelaskan dengan banyak cara tergantung framingnya. Kemiskinan, perubahan iklim, radikalisme: semua wicked. Implikasi: implementasi kebijakan untuk wicked problems harus adaptif, iteratif, dan melibatkan banyak perspektif."},
  {id:38,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Intergovernmental relations' (IGR) dalam implementasi kebijakan desentralisasi Indonesia menghadapi tantangan 'concurrent powers' terutama dalam hal...",
   opsi:["A. Pembagian kewenangan yang jelas antara TNI dan Polri dalam keamanan","B. Tumpang tindih kewenangan antara pusat, provinsi, dan kabupaten dalam urusan konkuren yang menciptakan konflik regulasi dan kelambatan implementasi","C. Kewenangan legislatif DPR versus DPRD yang sering bertentangan","D. Otoritas fiskal antara Kementerian Keuangan dan Bank Indonesia","E. Koordinasi antara BUMN dengan kementerian teknis terkait"],
   jawaban:"B",
   pembahasan:"UU 23/2014 membagi urusan menjadi: absolut pusat, konkuren (dibagi pusat-provinsi-kab/kota), dan umum. Dalam urusan konkuren, semua tingkatan memiliki kewenangan di aspek berbeda dari sektor yang sama (misal: kehutanan — konservasi ke pusat, pengelolaan hutan lindung ke provinsi, hutan desa ke kab/kota). Tantangan: (1) batas kewenangan tidak selalu jelas; (2) NSPK (Norma, Standar, Prosedur, Kriteria) dari pusat lambat diterbitkan; (3) konflik perizinan; (4) duplikasi program karena semua tingkatan mengklaim kewenangan yang sama."},
  {id:39,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Network governance' sebagai model implementasi paling efektif ketika masalah kebijakan memiliki karakteristik...",
   opsi:["A. Tujuan jelas, teknis, dan dapat diselesaikan oleh satu lembaga","B. Sederhana dengan satu penyebab yang mudah diidentifikasi","C. Kompleks, membutuhkan pengetahuan dan sumber daya yang tersebar di banyak aktor, dan tidak dapat diselesaikan secara hierarkis","D. Memerlukan respons cepat dalam keadaan darurat nasional","E. Melibatkan transfer teknologi dari sektor swasta ke pemerintah"],
   jawaban:"C",
   pembahasan:"Network governance (Kickert, Klijn & Koppenjan, 1997) paling sesuai untuk: masalah kompleks di mana (1) tidak ada aktor tunggal yang memiliki semua sumber daya atau pengetahuan yang dibutuhkan; (2) ketergantungan antar aktor tinggi; (3) hierarki tidak efektif karena aktor kunci tidak berada dalam satu rantai komando. Implementasi perubahan iklim, penanggulangan bencana, pengembangan ekosistem inovasi: semua membutuhkan jaringan. Tantangan network governance: coordination costs tinggi, akuntabilitas kabur, dan potensi capture oleh aktor dominan."},
  {id:40,bab:"III",bobot:2,tipe:"pilgan",
   pertanyaan:"'Boundary spanning' organizations dalam implementasi lintas lembaga berfungsi sebagai...",
   opsi:["A. Lembaga yang memiliki kewenangan tertinggi dalam suatu sektor kebijakan","B. Entitas yang menjembatani, menerjemahkan, dan memfasilitasi koordinasi antar lembaga dengan budaya dan kepentingan berbeda","C. Badan audit yang memastikan kepatuhan semua lembaga terhadap regulasi","D. Konsultan eksternal yang menyusun kebijakan lintas sektoral","E. Unit khusus di dalam kementerian yang menangani hubungan luar negeri"],
   jawaban:"B",
   pembahasan:"Boundary spanning organizations (Williams, 2002) adalah entitas — bisa lembaga khusus, unit koordinasi, atau bahkan individu 'connector' — yang menjembatani batas antara organisasi berbeda. Peran kunci: (1) translation — menerjemahkan bahasa dan frame organisasi yang berbeda; (2) brokerage — memfasilitasi pertukaran sumber daya; (3) buffering — menyerap konflik agar tidak mengganggu kolaborasi inti; (4) sense-making bersama. Contoh Indonesia: Kemenko sebagai koordinator lintas kementerian teknis, atau BKAD di tingkat daerah."},
 
  // BAB IV — 10 soal
  {id:41,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Counterfactual reasoning' dalam evaluasi implementasi kebijakan mengacu pada...",
   opsi:["A. Analisis kegagalan kebijakan masa lalu untuk menghindari kesalahan serupa","B. Mempertanyakan apa yang akan terjadi pada kelompok target jika kebijakan tidak diimplementasikan","C. Perbandingan kebijakan Indonesia dengan kebijakan serupa di negara lain","D. Evaluasi dampak kebijakan setelah 10 tahun implementasi","E. Penilaian apakah anggaran program sesuai dengan hasil yang dicapai"],
   jawaban:"B",
   pembahasan:"Counterfactual reasoning adalah inti dari evaluasi dampak yang kuat: 'apa yang akan terjadi pada kelompok target jika intervensi tidak ada?' Tanpa jawaban ini, kita tidak tahu apakah perubahan yang terjadi disebabkan program atau faktor lain. Metode untuk mengkonstruksi counterfactual: Randomized Controlled Trial (RCT) — ideal namun mahal dan kadang tidak etis; Quasi-experimental: Difference-in-Differences, Regression Discontinuity Design, Propensity Score Matching. Tanpa counterfactual, evaluasi hanya mengukur before-after tanpa bisa mengklaim kausalitas."},
  {id:42,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Accountability paradox' dalam implementasi kebijakan merujuk pada kondisi di mana...",
   opsi:["A. Terlalu banyak mekanisme akuntabilitas yang saling bertentangan satu sama lain","B. Permintaan akuntabilitas yang berlebihan justru menghambat inovasi, risk-taking, dan pembelajaran organisasi yang dibutuhkan untuk implementasi efektif","C. Lembaga akuntabilitas tidak memiliki kewenangan yang cukup untuk menindak pelanggaran","D. Aktor publik dan swasta dikenai standar akuntabilitas yang berbeda","E. Akuntabilitas kepada legislatif bertentangan dengan akuntabilitas kepada warga"],
   jawaban:"B",
   pembahasan:"Paradoks akuntabilitas: permintaan akuntabilitas yang semakin intensif (audit, LAKIP, pelaporan kinerja, sanksi atas kegagalan) secara paradoks dapat mengurangi kualitas implementasi dengan: (1) mendorong risk aversion — birokrat memilih program yang 'aman' dan mudah diukur daripada inovatif; (2) memicu gaming — optimizing measurement indicators bukan outcomes riil; (3) mengurangi pembelajaran — kegagalan dikritik, bukan dipelajari; (4) overhead costs tinggi — energi habis untuk pelaporan, bukan pelaksanaan. Ini adalah dilema mendasar dalam reformasi birokrasi."},
  {id:43,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"Dalam logic model evaluasi, hubungan antara 'activities' dan 'outputs' paling tepat diuji dengan...",
   opsi:["A. Randomized Controlled Trial untuk memastikan kausalitas","B. Process monitoring — apakah aktivitas dilaksanakan sesuai rencana dan menghasilkan produk yang dimaksud","C. Outcome mapping untuk menilai perubahan pada kelompok target","D. Cost-benefit analysis untuk mengukur efisiensi program","E. Comparative case study dengan program serupa di daerah lain"],
   jawaban:"B",
   pembahasan:"Logic model memiliki beberapa 'boxes' dengan hubungan berbeda: Activities → Outputs diuji melalui process monitoring/implementation monitoring: apakah kegiatan dilaksanakan? Berapa jumlah? Sesuai standar? Output → Outcome membutuhkan evaluasi dampak (dengan metode yang bisa mengklaim kausalitas). Impact membutuhkan evaluasi dampak jangka panjang. Kesalahan umum: menggunakan metode evaluasi dampak (RCT) untuk mengevaluasi proses, atau menggunakan process monitoring untuk mengklaim dampak — ini adalah category error yang sering terjadi."},
  {id:44,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Performativity trap' dalam sistem akuntabilitas berbasis kinerja (performance management) berarti...",
   opsi:["A. Pegawai tidak mampu mencapai target kinerja yang ditetapkan","B. Ukuran kinerja menggantikan tujuan yang seharusnya diukur, sehingga optimasi indikator mengorbankan kinerja riil","C. Sistem pengukuran kinerja terlalu rumit untuk dipahami staf lapangan","D. Target kinerja selalu ditetapkan terlalu tinggi sehingga tidak realistis","E. Evaluasi kinerja tidak objektif karena dipengaruhi hubungan personal"],
   jawaban:"B",
   pembahasan:"'Performativity trap' (Bevan & Hood, 2006; Goodhart's Law: 'when a measure becomes a target, it ceases to be a good measure'): ketika indikator kinerja menjadi tujuan utama, aktor mengoptimalkan indikator bukan kualitas sesungguhnya. Contoh: rumah sakit 'mengelola' antrian agar statistik waktu tunggu baik meski pasien tidak tertangani; sekolah 'mengajarkan ujian' (teaching to the test) agar nilai UN tinggi; polisi merekayasa data kriminalitas agar statistik keamanan membaik. Ini adalah disfungsi klasik sistem akuntabilitas berbasis indikator kuantitatif."},
  {id:45,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Utilization-focused evaluation' (Patton, 1978) menekankan bahwa evaluasi yang baik harus...",
   opsi:["A. Menggunakan metode penelitian ilmiah yang paling ketat secara metodologis","B. Dirancang sejak awal dengan mempertimbangkan siapa yang akan menggunakan temuan dan untuk tujuan apa","C. Dilakukan oleh evaluator eksternal yang independen dari program","D. Mencakup semua aspek program tanpa terkecuali","E. Menghasilkan laporan yang dapat dipublikasikan di jurnal akademik"],
   jawaban:"B",
   pembahasan:"Patton berargumen bahwa evaluasi terbaik secara metodologis sering tidak berguna karena tidak dirancang untuk digunakan. Utilization-focused evaluation: mulai dengan mengidentifikasi 'primary intended users' dan 'intended uses' sebelum menentukan pertanyaan evaluasi, metode, dan format laporan. Pertanyaan kunci: siapa yang akan membuat keputusan berdasarkan evaluasi ini? Keputusan apa? Informasi apa yang mereka butuhkan? Dalam konteks kebijakan Indonesia, banyak evaluasi program menghasilkan laporan tebal yang tidak pernah dibaca atau ditindaklanjuti karena tidak dirancang untuk pengguna spesifik."},
  {id:46,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Developmental evaluation' berbeda dari evaluasi formatif konvensional karena dirancang untuk situasi...",
   opsi:["A. Program sudah matang dan perlu direplikasi di skala lebih besar","B. Program masih dalam tahap eksplorasi inovatif yang dinamis dan tidak cocok dievaluasi dengan kerangka fixed logic model","C. Donor internasional mensyaratkan evaluasi independen","D. Program telah selesai dan hanya perlu didokumentasikan hasilnya","E. Anggaran evaluasi sangat terbatas sehingga metode sederhana diperlukan"],
   jawaban:"B",
   pembahasan:"Developmental evaluation (Patton, 2011) dirancang untuk mendukung inovasi sosial yang kompleks dan dinamis — di mana program terus berevolusi merespons kondisi yang berubah, logika program belum fixed, dan perubahan adalah norma bukan pengecualian. Evaluator bekerja dalam 'real time' bersama tim program, membantu sense-making dan pengambilan keputusan adaptif. Berbeda dari formative evaluation (memperbaiki program yang relatif stabil) dan summative evaluation (menilai program yang sudah selesai). Sangat relevan untuk program penanggulangan kemiskinan adaptif atau program inovasi kebijakan."},
  {id:47,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Democratic deficit' dalam implementasi kebijakan teknokratis merujuk pada...",
   opsi:["A. Rendahnya tingkat partisipasi pemilih dalam pemilu daerah","B. Keputusan kebijakan yang didominasi ahli teknis tanpa input demokratis yang memadai dari warga yang terdampak","C. Kekurangan anggaran untuk penyelenggaraan pemilu yang berkualitas","D. Lemahnya pengawasan DPR terhadap kinerja pemerintah eksekutif","E. Tidak meratanya akses warga ke informasi kebijakan publik"],
   jawaban:"B",
   pembahasan:"Democratic deficit dalam implementasi: ketika keputusan kunci — siapa yang mendapat layanan, dengan standar apa, dengan konsekuensi apa — dibuat secara teknokratis oleh ahli teknis atau birokrat tanpa proses deliberasi demokratis yang bermakna. Isu ini semakin relevan dengan tren: algoritma dalam penetapan penerima bantuan sosial (apakah warga bisa mengajukan keberatan?), kebijakan berbasis big data (siapa yang mengontrol data dan algoritmanya?), dan outsourcing ke konsultan internasional yang tidak akuntabel ke warga lokal."},
  {id:48,bab:"IV",bobot:2,tipe:"pilgan",
   pertanyaan:"'Isomorphic mimicry' dalam reformasi administrasi publik negara berkembang (Andrews, Pritchett & Woolcock) mendeskripsikan fenomena...",
   opsi:["A. Lembaga pemerintah meniru struktur swasta untuk meningkatkan efisiensi","B. Negara mengadopsi bentuk lembaga modern yang terlihat legitimate tanpa kapasitas fungsional yang sebenarnya","C. Birokrat meniru praktik negara maju tanpa memahami konteks lokal","D. Pemerintah menyalin kebijakan dari negara tetangga tanpa adaptasi","E. Organisasi publik mengubah branding dan nama tanpa perubahan substansi"],
   jawaban:"B",
   pembahasan:"Andrews, Pritchett & Woolcock ('Building State Capability', 2017): banyak negara berkembang mengalami 'capability traps' — mereka mengadopsi tampilan (form) lembaga modern (parlemen, KPK, pengadilan, badan perencanaan) yang terlihat legitimate kepada donor dan mitra internasional, tanpa membangun fungsi substantif yang seharusnya dijalankan lembaga itu. Hasilnya: lembaga yang secara formal ada tapi tidak berfungsi. Isomorphic mimicry adalah mekanisme survival: negara belajar cara tampak berfungsi daripada cara berfungsi sungguhan. Implikasi: reformasi harus fokus pada 'doing real things' (PDIA approach), bukan 'looking modern'."},
 
  // STUDI KASUS — 2 soal
  {id:49,bab:"Studi Kasus",bobot:2,tipe:"kasus",
   pertanyaan:`STUDI KASUS A — Program Smart Village Kabupaten Nusantara
 
Kabupaten Nusantara meluncurkan program "Smart Village" untuk 320 desa: digitalisasi administrasi desa, e-musrenbang, dan dashboard monitoring pembangunan desa berbasis data real-time. Anggaran: Rp 28 miliar dari DAK Informatika. Timeline: 18 bulan.
 
Temuan audit bulan ke-12:
• Hanya 87 dari 320 desa (27%) aktif menggunakan sistem
• 156 desa menerima perangkat keras namun operator tidak terlatih
• 74 desa sama sekali belum menerima perangkat karena konflik vendor
• 3 desa yang paling aktif menggunakan sistem justru adalah desa yang sudah memiliki kepala desa berlatar belakang IT sebelum program
• Kepala Diskominfo mengklaim "program berhasil karena 87 desa sudah live"
 
Pertanyaan: (1) Identifikasi jenis 'implementation deficit' yang terjadi. (2) Analisis klaim Kepala Diskominfo menggunakan konsep output vs outcome. (3) Rekomendasikan minimal 2 strategi perbaikan berbasis teori implementasi.`,
   jawaban:"Lihat Pembahasan",
   pembahasan:`ANALISIS KOMPREHENSIF:
 
(1) JENIS IMPLEMENTATION DEFICIT:
Program mengalami MULTIPLE deficits secara bersamaan:
• Capacity deficit: 156 desa punya hardware tanpa trained operators = kesenjangan antara sumber daya fisik dan kapasitas human capital (dimensi teknis & manajerial Institutional Capacity).
• Coordination deficit: konflik vendor menyebabkan 74 desa tidak menerima perangkat = kegagalan manajemen rantai pasokan dan koordinasi pengadaan.
• Design deficit: program tidak mempertimbangkan heterogenitas kapasitas desa — buktinya hanya desa dengan kades berlatar IT yang berhasil. Ini adalah classic top-down design failure (tidak melakukan backward mapping).
 
(2) OUTPUT vs OUTCOME — KLAIM KEPALA DISKOMINFO:
Klaim "87 desa sudah live" adalah pengukuran OUTPUT (jumlah desa yang aktif menggunakan sistem). Ini bukan OUTCOME dari program, yaitu: peningkatan kualitas tata kelola desa, transparansi pembangunan, kecepatan pelayanan warga, dan kualitas perencanaan berbasis data. Program mengalami 'performativity trap': mengoptimalkan indikator output (jumlah desa aktif) tanpa mengukur apakah sistem tersebut benar-benar meningkatkan tata kelola. Selain itu, angka 27% dari target keberhasilan sangat rendah dan tidak bisa diklaim sebagai keberhasilan tanpa konteks.
 
(3) REKOMENDASI BERBASIS TEORI:
• Strategi 1 — Backward Mapping (Elmore): Mulai ulang dengan bertanya "perilaku apa yang harus berubah pada aparatur desa?" lalu rancang dukungan yang dibutuhkan dari sana ke atas: apakah SOP penggunaan sistem sudah cocok dengan kapasitas desa? Segmentasi desa berdasarkan kapasitas IT sebelum deployment.
• Strategi 2 — Street-Level Bureaucrat Support (Lipsky): Operator desa adalah SLB utama. Beri mereka: pelatihan intensif + pendampingan berkala (bukan one-shot training), SOP sederhana, hotline troubleshooting, dan insentif (honorarium khusus atau sertifikasi). Jangan hanya kirim hardware — investasi di kapasitas manusia jauh lebih penting.`},
 
  {id:50,bab:"Studi Kasus",bobot:2,tipe:"kasus",
   pertanyaan:`STUDI KASUS B — Kebijakan Kawasan Tanpa Rokok (KTR) Kota Sehat
 
Kota Bima menetapkan Perda KTR yang melarang merokok di 7 jenis tempat umum. Setelah 2 tahun implementasi, survei menemukan:
• 78% warga mengetahui adanya Perda KTR (awareness tinggi)
• Hanya 31% tempat umum yang benar-benar menerapkan KTR secara konsisten
• Satpol PP melakukan razia tetapi 80% pelanggaran tidak ditindaklanjuti karena petugas merasa "tidak nyaman" menegakkan aturan kepada perokok
• Pengusaha restoran/kafe mengeluh kehilangan pelanggan dan secara aktif tidak mematuhi
• DPRD menerima tekanan dari asosiasi pengusaha rokok untuk merevisi Perda
 
Pertanyaan: (1) Gunakan Matland Matrix untuk mengklasifikasikan implementasi KTR ini. (2) Identifikasi faktor kegagalan menggunakan minimal 2 teori berbeda. (3) Analisis tantangan akuntabilitas yang muncul dari kasus ini.`,
   jawaban:"Lihat Pembahasan",
   pembahasan:`ANALISIS KOMPREHENSIF:
 
(1) MATLAND MATRIX — KLASIFIKASI:
Tujuan Perda KTR cukup jelas (7 jenis tempat, larangan merokok): AMBIGUITAS RENDAH.
Resistensi aktif dari pengusaha rokok, tekanan ke DPRD untuk revisi, ketidaknyamanan Satpol PP menegakkan: KONFLIK TINGGI.
→ Klasifikasi: POLITICAL IMPLEMENTATION (rendah-ambiguitas, tinggi-konflik).
Implikasi: keberhasilan ditentukan oleh kekuatan (power) bukan prosedur. Pemerintah kota harus secara eksplisit menggunakan otoritas politik dan legitimasinya untuk mengatasi resistensi, bukan mencari kompromi yang melemahkan isi Perda.
 
(2) FAKTOR KEGAGALAN — DUA TEORI:
• Lipsky (Street-Level Bureaucracy): Satpol PP sebagai SLB mengembangkan 'coping strategy' dengan tidak menindaklanjuti 80% pelanggaran. Mereka menghadapi konflik antara mandat formal (tegakkan Perda) dengan tekanan sosial/relasional (tidak nyaman menegakkan ke sesama warga). Ini adalah diskresi negatif: SLB menggunakan diskresi untuk menghindari konfrontasi. Solusi: SOP yang lebih konkret, proteksi hukum bagi petugas, dan perubahan incentive structure (penegakan diukur dalam KPI petugas).
• Sabatier (ACF): Ada dua koalisi berbenturan: Koalisi Kesehatan (pemkot, Dinkes, aktivis anti-rokok) vs. Koalisi Ekonomi (pengusaha rokok, asosiasi, sebagian DPRD). Tekanan ke DPRD menunjukkan koalisi ekonomi aktif melawan di forum legislatif — ini adalah pola ACF klasik. Solusi jangka panjang: perkuat koalisi kesehatan dengan bukti empiris dampak KTR, bangun broad public support, dan isolasi argumen koalisi ekonomi.
 
(3) TANTANGAN AKUNTABILITAS:
• Akuntabilitas vertikal ke bawah: warga yang terkena dampak asap rokok tidak memiliki mekanisme formal untuk melaporkan pelanggaran dan memastikan tindak lanjut.
• Akuntabilitas horizontal: siapa yang mengawasi Satpol PP yang tidak menegakkan? Ombudsman daerah? Inspektorat?
• Akuntabilitas diagonal: tidak ada social audit, citizens report card, atau mekanisme monitoring partisipatif yang melibatkan kelompok masyarakat yang pro-KTR. Penguatan akuntabilitas diagonal (misal: hotline pelaporan pelanggaran KTR, aplikasi crowdsourcing foto pelanggaran) bisa menjadi jalur alternatif yang melampaui keterbatasan penegakan formal.`}
];
 
const getGrade = (s) => {
  if(s>=90) return {label:"A — Sangat Memuaskan",color:"#1D9E75",bg:"#E1F5EE"};
  if(s>=80) return {label:"B+ — Memuaskan",color:"#378ADD",bg:"#E6F1FB"};
  if(s>=70) return {label:"B — Baik",color:"#639922",bg:"#EAF3DE"};
  if(s>=60) return {label:"C — Cukup",color:"#BA7517",bg:"#FAEEDA"};
  return {label:"D — Perlu Perbaikan",color:"#A32D2D",bg:"#FCEBEB"};
};
 
export default function App() {
  const [hal, setHal] = useState("home");
  const [babIdx, setBabIdx] = useState(0);
  const [soalIdx, setSoalIdx] = useState(0);
  const [jawaban, setJawaban] = useState({});
  const [kasusJawab, setKasusJawab] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [showPbhs, setShowPbhs] = useState({});
  const [nilaiAkhir, setNilaiAkhir] = useState(null);
 
  const totalBobot = SOAL.reduce((a,s)=>a+s.bobot,0);
  const progress = Object.keys(submitted).length;
 
  const hitungNilai = () => {
    let total = 0;
    SOAL.forEach(s => {
      if(s.tipe==="pilgan" && jawaban[s.id]===s.jawaban) total += s.bobot;
      else if(s.tipe==="kasus" && (kasusJawab[s.id]||"").trim().length>50) total += Math.round(s.bobot*0.7);
    });
    return Math.round((total/totalBobot)*100);
  };
 
  const handleSelesai = () => { setNilaiAkhir(hitungNilai()); setHal("hasil"); };
  const soal = SOAL[soalIdx];
 
  const S = {
    wrap:{fontFamily:"'Georgia','Times New Roman',serif",maxWidth:840,margin:"0 auto",padding:"0 0 3rem"},
    hero:{background:"linear-gradient(135deg,#26215C 0%,#534AB7 55%,#0F6E56 100%)",borderRadius:16,padding:"2.5rem 2rem",marginBottom:"1.5rem",color:"#fff",position:"relative",overflow:"hidden"},
    card:{background:"var(--color-background-primary,#fff)",border:"0.5px solid #D3D1C7",borderRadius:14,padding:"1.5rem",marginBottom:"1rem"},
    sL:{fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"#888780",fontFamily:"sans-serif",fontWeight:600,marginBottom:6},
    h2:{fontSize:21,fontWeight:700,color:"#26215C",marginBottom:12,lineHeight:1.3},
    h3:{fontSize:15,fontWeight:700,color:"#3C3489",marginBottom:6},
    p:{fontSize:14,color:"#444441",lineHeight:1.75,marginBottom:8,fontFamily:"sans-serif"},
    badge:(bg,col)=>({display:"inline-block",padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:600,fontFamily:"sans-serif",background:bg,color:col}),
    navBtn:(a)=>({padding:"8px 16px",borderRadius:8,border:"1.5px solid",borderColor:a?"#534AB7":"#B4B2A9",background:a?"#EEEDFE":"transparent",color:a?"#26215C":"#5F5E5A",fontFamily:"sans-serif",fontSize:13,fontWeight:a?600:400,cursor:"pointer",transition:"all 0.2s"}),
    primaryBtn:{padding:"10px 24px",borderRadius:10,background:"#534AB7",color:"#fff",border:"none",fontFamily:"sans-serif",fontSize:14,fontWeight:600,cursor:"pointer"},
    outlineBtn:{padding:"10px 24px",borderRadius:10,background:"transparent",color:"#534AB7",border:"1.5px solid #534AB7",fontFamily:"sans-serif",fontSize:14,fontWeight:600,cursor:"pointer"},
    ghostBtn:{padding:"10px 24px",borderRadius:10,background:"#E1F5EE",color:"#085041",border:"1.5px solid #1D9E75",fontFamily:"sans-serif",fontSize:14,fontWeight:600,cursor:"pointer"},
    disabledBtn:{padding:"10px 24px",borderRadius:10,background:"#D3D1C7",color:"#888780",border:"none",fontFamily:"sans-serif",fontSize:14,fontWeight:600,cursor:"not-allowed"},
    opsiBtn:(sel,jw,key,sub)=>{
      const isSel=sel===key, isSub=sub, isOk=key===jw;
      let bg="#fff",bc="#D3D1C7",col="#2C2C2A";
      if(isSub){if(isOk){bg="#E1F5EE";bc="#1D9E75";col="#085041";}else if(isSel&&!isOk){bg="#FCEBEB";bc="#E24B4A";col="#501313";}}
      else if(isSel){bg="#EEEDFE";bc="#534AB7";col="#26215C";}
      return{display:"block",width:"100%",textAlign:"left",padding:"10px 14px",marginBottom:8,borderRadius:10,border:`1.5px solid ${bc}`,background:bg,color:col,fontFamily:"sans-serif",fontSize:13.5,cursor:isSub?"default":"pointer",transition:"all 0.15s",lineHeight:1.5};
    },
    pbhsBox:{background:"#EEEDFE",border:"1px solid #AFA9EC",borderRadius:12,padding:"1rem 1.25rem",marginTop:12},
    textarea:{width:"100%",minHeight:180,padding:"10px 12px",borderRadius:10,border:"1.5px solid #D3D1C7",fontFamily:"sans-serif",fontSize:13.5,lineHeight:1.6,color:"#2C2C2A",resize:"vertical",boxSizing:"border-box"},
  };
 
  if(hal==="home") return (
    <div style={S.wrap}>
      <div style={S.hero}>
        <div style={{position:"absolute",top:-50,right:-50,width:220,height:220,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>
        <div style={{position:"absolute",bottom:-30,left:40,width:140,height:140,borderRadius:"50%",background:"rgba(255,255,255,0.04)"}}/>
        <div style={{fontFamily:"sans-serif",fontSize:11,letterSpacing:3,textTransform:"uppercase",opacity:.7,marginBottom:8}}>Materi & Evaluasi Expert Level</div>
        <div style={{fontSize:30,fontWeight:700,lineHeight:1.2,marginBottom:12}}>Implementasi Kebijakan Publik</div>
        <div style={{fontSize:14,opacity:.85,lineHeight:1.6,fontFamily:"sans-serif",maxWidth:580}}>Teori, kerangka analitik lanjutan, dan studi kasus komprehensif — dirancang untuk analis kebijakan, akademisi, dan praktisi pemerintahan tingkat expert.</div>
        <div style={{marginTop:18,display:"flex",gap:8,flexWrap:"wrap"}}>
          {["14 Teori Utama","Matland Matrix","Principal-Agent","Collaborative Governance","Adaptive Learning","Wicked Problems","Organizational Learning"].map(t=>(
            <span key={t} style={{display:"inline-block",padding:"4px 12px",borderRadius:20,fontSize:11,fontFamily:"sans-serif",background:"rgba(255,255,255,0.18)",color:"#fff"}}>{t}</span>
          ))}
        </div>
      </div>
 
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:12,marginBottom:"1.5rem"}}>
        {[{l:"Bab Materi",v:"4",i:"📚"},{l:"Total Soal",v:"50",i:"📝"},{l:"Soal PG",v:"48",i:"🔘"},{l:"Studi Kasus",v:"2",i:"📋"},{l:"Total Bobot",v:"100",i:"⚖️"},{l:"Level",v:"Expert",i:"🎓"}].map(m=>(
          <div key={m.l} style={{background:"#F1EFE8",borderRadius:12,padding:"1rem",textAlign:"center"}}>
            <div style={{fontSize:22}}>{m.i}</div>
            <div style={{fontSize:20,fontWeight:700,color:"#26215C",fontFamily:"sans-serif"}}>{m.v}</div>
            <div style={{fontSize:11,color:"#888780",fontFamily:"sans-serif",marginTop:2}}>{m.l}</div>
          </div>
        ))}
      </div>
 
      <div style={{display:"flex",gap:12,marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <button onClick={()=>setHal("materi")} style={{...S.primaryBtn,flex:1,padding:"14px",fontSize:15}}>📖 Pelajari Materi</button>
        <button onClick={()=>setHal("soal")} style={{...S.ghostBtn,flex:1,padding:"14px",fontSize:15}}>✏️ Kerjakan 50 Soal</button>
      </div>
 
      <div style={{...S.card,background:"#FAEEDA",border:"1px solid #FAC775"}}>
        <div style={{fontFamily:"sans-serif",fontSize:13,color:"#633806",lineHeight:1.7}}>
          <strong>📌 Petunjuk:</strong> Pelajari 4 bab materi terlebih dahulu. Soal mencakup 48 pilihan ganda (masing-masing 2 poin) dan 2 studi kasus analitis (masing-masing 2 poin) = 100 poin total. Jawab tiap soal, klik "Periksa Jawaban" untuk melihat pembahasan mendalam. Nilai akhir dihitung otomatis setelah semua soal diselesaikan.
        </div>
      </div>
    </div>
  );
 
  if(hal==="materi") return (
    <div style={S.wrap}>
      <button onClick={()=>setHal("home")} style={{...S.outlineBtn,marginBottom:16}}>← Kembali</button>
      <div style={{display:"flex",gap:8,marginBottom:"1rem",flexWrap:"wrap"}}>
        {MATERI.map((b,i)=><button key={i} onClick={()=>setBabIdx(i)} style={S.navBtn(babIdx===i)}>Bab {b.bab}: {b.judul.split(" ")[0]}…</button>)}
      </div>
      <div style={S.card}>
        <div style={S.sL}>Bab {MATERI[babIdx].bab}</div>
        <div style={S.h2}>{MATERI[babIdx].judul}</div>
        <hr style={{border:"none",borderTop:"0.5px solid #D3D1C7",margin:"1rem 0"}}/>
        {MATERI[babIdx].isi.map((item,i)=>(
          <div key={i} style={{marginBottom:"1.5rem",paddingLeft:16,borderLeft:"3px solid #AFA9EC"}}>
            <div style={S.h3}>{item.sub}</div>
            <div style={S.p}>{item.konten}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:12,justifyContent:"space-between"}}>
        <button onClick={()=>setBabIdx(Math.max(0,babIdx-1))} disabled={babIdx===0} style={babIdx===0?S.disabledBtn:S.outlineBtn}>← Sebelumnya</button>
        {babIdx<MATERI.length-1
          ?<button onClick={()=>setBabIdx(babIdx+1)} style={S.primaryBtn}>Berikutnya →</button>
          :<button onClick={()=>setHal("soal")} style={{...S.ghostBtn}}>✏️ Mulai Soal →</button>}
      </div>
    </div>
  );
 
  if(hal==="soal") return (
    <div style={S.wrap}>
      <button onClick={()=>setHal("home")} style={{...S.outlineBtn,marginBottom:12}}>← Kembali</button>
 
      <div style={{...S.card,padding:"1rem 1.25rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,fontFamily:"sans-serif"}}>
          <span style={{fontSize:13,color:"#5F5E5A",fontWeight:600}}>Progress: {progress}/{SOAL.length}</span>
          <span style={{fontSize:13,color:"#5F5E5A"}}>Soal {soalIdx+1}/{SOAL.length} · Bab {soal.bab}</span>
        </div>
        <div style={{height:6,borderRadius:3,background:`linear-gradient(90deg,#1D9E75 ${(progress/SOAL.length)*100}%,#E1F5EE ${(progress/SOAL.length)*100}%)`,marginBottom:10}}/>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {SOAL.map((s,i)=>(
            <button key={i} onClick={()=>setSoalIdx(i)} style={{width:28,height:28,borderRadius:6,border:"1.5px solid",borderColor:soalIdx===i?"#534AB7":submitted[s.id]?"#1D9E75":"#D3D1C7",background:soalIdx===i?"#EEEDFE":submitted[s.id]?"#E1F5EE":"#fff",color:soalIdx===i?"#26215C":submitted[s.id]?"#085041":"#5F5E5A",fontFamily:"sans-serif",fontSize:11,fontWeight:600,cursor:"pointer"}}>{i+1}</button>
          ))}
        </div>
      </div>
 
      <div style={S.card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12,flexWrap:"wrap",gap:8}}>
          <div>
            <div style={S.sL}>Soal {soalIdx+1} · Bab {soal.bab}</div>
            <span style={S.badge(soal.tipe==="kasus"?"#FAC775":"#9FE1CB",soal.tipe==="kasus"?"#412402":"#04342C")}>
              {soal.tipe==="kasus"?"📋 Studi Kasus Analitis":"🔘 Pilihan Ganda"}
            </span>
          </div>
          <span style={S.badge("#EEEDFE","#3C3489")}>Bobot: {soal.bobot} poin</span>
        </div>
 
        <div style={{...S.p,fontSize:14.5,whiteSpace:"pre-line",background:soal.tipe==="kasus"?"#F1EFE8":"transparent",padding:soal.tipe==="kasus"?"1rem":0,borderRadius:soal.tipe==="kasus"?10:0,marginBottom:16,fontFamily:soal.tipe==="kasus"?"sans-serif":"inherit"}}>
          {soal.pertanyaan}
        </div>
 
        {soal.tipe==="pilgan" && soal.opsi.map((o,i)=>{
          const k=["A","B","C","D","E"][i];
          return (
            <button key={k} onClick={()=>!submitted[soal.id]&&setJawaban(j=>({...j,[soal.id]:k}))}
              style={S.opsiBtn(jawaban[soal.id],soal.jawaban,k,submitted[soal.id])}>
              {o}
              {submitted[soal.id]&&k===soal.jawaban&&" ✓"}
              {submitted[soal.id]&&jawaban[soal.id]===k&&k!==soal.jawaban&&" ✗"}
            </button>
          );
        })}
 
        {soal.tipe==="kasus" && (
          <div>
            <div style={{fontFamily:"sans-serif",fontSize:13,color:"#5F5E5A",marginBottom:8}}>Tuliskan analisis mendalam Anda (minimal 3 poin dengan referensi teori):</div>
            <textarea style={S.textarea} value={kasusJawab[soal.id]||""} disabled={!!submitted[soal.id]}
              onChange={e=>setKasusJawab(k=>({...k,[soal.id]:e.target.value}))}
              placeholder="Analisis menggunakan kerangka teori implementasi yang relevan..."/>
          </div>
        )}
 
        <div style={{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"}}>
          {!submitted[soal.id] ? (
            <button onClick={()=>{
              const ok = soal.tipe==="pilgan" ? !!jawaban[soal.id] : (kasusJawab[soal.id]||"").trim().length>20;
              if(!ok) return;
              setSubmitted(s=>({...s,[soal.id]:true}));
              setShowPbhs(p=>({...p,[soal.id]:true}));
            }} style={
              (soal.tipe==="pilgan"?!jawaban[soal.id]:(kasusJawab[soal.id]||"").trim().length<20)?S.disabledBtn:S.primaryBtn
            }>Periksa Jawaban</button>
          ):(
            <button onClick={()=>setShowPbhs(p=>({...p,[soal.id]:!p[soal.id]}))} style={S.ghostBtn}>
              {showPbhs[soal.id]?"Tutup":"Lihat"} Pembahasan
            </button>
          )}
          {soalIdx<SOAL.length-1&&(
            <button onClick={()=>setSoalIdx(soalIdx+1)} style={S.outlineBtn}>Soal Berikutnya →</button>
          )}
        </div>
 
        {showPbhs[soal.id]&&submitted[soal.id]&&(
          <div style={S.pbhsBox}>
            <div style={{fontFamily:"sans-serif",fontSize:11,fontWeight:700,color:"#3C3489",textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>💡 Pembahasan</div>
            {soal.tipe==="pilgan"&&(
              <div style={{marginBottom:8}}><span style={S.badge("#1D9E75","#fff")}>Jawaban: {soal.jawaban}</span></div>
            )}
            <div style={{fontFamily:"sans-serif",fontSize:13.5,color:"#26215C",lineHeight:1.75,whiteSpace:"pre-line"}}>{soal.pembahasan}</div>
          </div>
        )}
      </div>
 
      {progress===SOAL.length&&nilaiAkhir===null&&(
        <div style={{...S.card,background:"#EEEDFE",border:"1.5px solid #AFA9EC",textAlign:"center"}}>
          <div style={{fontFamily:"sans-serif",fontSize:15,color:"#26215C",fontWeight:600,marginBottom:12}}>✅ Semua 50 soal telah diselesaikan!</div>
          <button onClick={handleSelesai} style={{...S.primaryBtn,padding:"12px 36px",fontSize:15}}>🎓 Lihat Nilai Akhir</button>
        </div>
      )}
    </div>
  );
 
  if(hal==="hasil") {
    const grade=getGrade(nilaiAkhir);
    const pgBenar=SOAL.filter(s=>s.tipe==="pilgan"&&jawaban[s.id]===s.jawaban).length;
    const pgTotal=SOAL.filter(s=>s.tipe==="pilgan").length;
    const kasusSelesai=SOAL.filter(s=>s.tipe==="kasus"&&(kasusJawab[s.id]||"").trim().length>50).length;
    const kasusTotal=SOAL.filter(s=>s.tipe==="kasus").length;
    const poinDapat=SOAL.reduce((a,s)=>{
      if(s.tipe==="pilgan") return a+(jawaban[s.id]===s.jawaban?s.bobot:0);
      return a+((kasusJawab[s.id]||"").trim().length>50?Math.round(s.bobot*0.7):0);
    },0);
 
    return (
      <div style={S.wrap}>
        <div style={S.hero}>
          <div style={{fontFamily:"sans-serif",fontSize:11,letterSpacing:3,textTransform:"uppercase",opacity:.7,marginBottom:8}}>Hasil Evaluasi</div>
          <div style={{fontSize:26,fontWeight:700}}>Implementasi Kebijakan Publik — 50 Soal</div>
        </div>
 
        <div style={S.card}>
          <div style={{textAlign:"center"}}>
            <div style={{width:130,height:130,borderRadius:"50%",background:grade.bg,border:`4px solid ${grade.color}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"}}>
              <div style={{fontSize:36,fontWeight:700,color:grade.color,fontFamily:"sans-serif"}}>{nilaiAkhir}</div>
              <div style={{fontSize:11,color:grade.color,fontFamily:"sans-serif"}}>/ 100</div>
            </div>
            <div style={{...S.badge(grade.bg,grade.color),fontSize:14,padding:"8px 24px",marginBottom:8}}>{grade.label}</div>
          </div>
 
          <hr style={{border:"none",borderTop:"0.5px solid #D3D1C7",margin:"1.5rem 0"}}/>
 
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:10,marginBottom:"1.5rem"}}>
            {[
              {l:"PG Benar",v:`${pgBenar}/${pgTotal}`},
              {l:"Studi Kasus",v:`${kasusSelesai}/${kasusTotal}`},
              {l:"Poin Diperoleh",v:`${poinDapat}/${totalBobot}`},
              {l:"Nilai Akhir",v:`${nilaiAkhir}/100`},
              {l:"Status",v:nilaiAkhir>=70?"Lulus ✓":"Tidak Lulus"},
            ].map(m=>(
              <div key={m.l} style={{background:"#F1EFE8",borderRadius:10,padding:"0.75rem",textAlign:"center"}}>
                <div style={{fontSize:17,fontWeight:700,color:"#26215C",fontFamily:"sans-serif"}}>{m.v}</div>
                <div style={{fontSize:11,color:"#888780",fontFamily:"sans-serif",marginTop:2}}>{m.l}</div>
              </div>
            ))}
          </div>
 
          <div style={{fontFamily:"sans-serif",fontSize:13,color:"#26215C",fontWeight:600,marginBottom:8}}>Rincian per soal:</div>
          <div style={{maxHeight:340,overflowY:"auto",border:"0.5px solid #D3D1C7",borderRadius:10,padding:"0.5rem"}}>
            {SOAL.map((s,i)=>{
              const benar=s.tipe==="pilgan"?jawaban[s.id]===s.jawaban:(kasusJawab[s.id]||"").trim().length>50;
              const poin=s.tipe==="pilgan"?(benar?s.bobot:0):(benar?Math.round(s.bobot*0.7):0);
              return (
                <div key={s.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 8px",borderBottom:"0.5px solid #F1EFE8",fontFamily:"sans-serif",fontSize:12}}>
                  <span style={{color:"#5F5E5A",flex:1}}>Soal {i+1} — {s.tipe==="kasus"?"Studi Kasus":s.bab}</span>
                  <div style={{display:"flex",gap:8,alignItems:"center"}}>
                    <span style={{color:"#888780"}}>{poin}/{s.bobot} poin</span>
                    <span style={{...S.badge(benar?"#E1F5EE":"#FCEBEB",benar?"#085041":"#501313"),fontSize:11,padding:"2px 8px"}}>{benar?"✓":"✗"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <button onClick={()=>setHal("soal")} style={{...S.outlineBtn,flex:1}}>📖 Review Semua Pembahasan</button>
          <button onClick={()=>{setJawaban({});setKasusJawab({});setSubmitted({});setShowPbhs({});setNilaiAkhir(null);setSoalIdx(0);setHal("home");}} style={{...S.primaryBtn,flex:1}}>🔄 Mulai Ulang</button>
        </div>
      </div>
    );
  }
  return null;
}
