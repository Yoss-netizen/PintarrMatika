/* TEMPLATE START */
const KELAS = [
    { id: 1, nama: 'Kelas 1', jenjang: 'SD' },
    { id: 2, nama: 'Kelas 2', jenjang: 'SD' },
    { id: 3, nama: 'Kelas 3', jenjang: 'SD' },
    { id: 4, nama: 'Kelas 4', jenjang: 'SD' },
    { id: 5, nama: 'Kelas 5', jenjang: 'SD' },
    { id: 6, nama: 'Kelas 6', jenjang: 'SD' },
    { id: 7, nama: 'Kelas 7', jenjang: 'SMP' },
    { id: 8, nama: 'Kelas 8', jenjang: 'SMP' },
    { id: 9, nama: 'Kelas 9', jenjang: 'SMP' },
    { id: 10, nama: 'Kelas 10', jenjang: 'SMA' },
    { id: 11, nama: 'Kelas 11', jenjang: 'SMA' },
    { id: 12, nama: 'Kelas 12', jenjang: 'SMA' },
];
const BAB = [
    { id: 101, kelasId: 1, nama: 'Penjumlahan & Pengurangan', deskripsi: 'Dasar-dasar penjumlahan dan pengurangan bilangan cacah.' },
    { id: 102, kelasId: 2, nama: 'Perkalian & Pembagian', deskripsi: 'Konsep dasar perkalian sebagai penjumlahan berulang.' },
    { id: 103, kelasId: 3, nama: 'Garis Bilangan', deskripsi: 'Mengenal letak bilangan pada garis bilangan.' },
    { id: 104, kelasId: 4, nama: 'KPK dan FPB', deskripsi: 'Kelipatan dan Faktor Persekutuan Terkecil dan Terbesar.' },
    { id: 105, kelasId: 5, nama: 'Pecahan', deskripsi: 'Mengenal dan mengoperasikan bilangan pecahan.' },
    { id: 106, kelasId: 6, nama: 'Bangun Ruang', deskripsi: 'Menghitung volume dan luas permukaan dasar.' },
    { id: 201, kelasId: 7, nama: 'Bentuk Aljabar', deskripsi: 'Pengenalan variabel, koefisien, dan operasi aljabar.' },
    { id: 202, kelasId: 7, nama: 'Himpunan', deskripsi: 'Konsep dasar himpunan, diagram venn, dan operasinya.' },
    { id: 203, kelasId: 8, nama: 'Teorema Pythagoras', deskripsi: 'Hubungan antar sisi pada segitiga siku-siku.' },
    { id: 204, kelasId: 8, nama: 'Lingkaran', deskripsi: 'Unsur, luas, dan keliling lingkaran serta garis singgung.' },
    { id: 205, kelasId: 9, nama: 'Statistika', deskripsi: 'Menganalisis data: mean, median, modus, dan kuartil.' },
    { id: 206, kelasId: 9, nama: 'Peluang', deskripsi: 'Konsep dasar peluang empirik dan teoretik.' },
    { id: 301, kelasId: 10, nama: 'Eksponen & Logaritma', deskripsi: 'Sifat-sifat dan penerapan fungsi eksponensial dan logaritma.' },
    { id: 302, kelasId: 10, nama: 'Trigonometri Dasar', deskripsi: 'Perbandingan trigonometri pada segitiga siku-siku.' },
    { id: 303, kelasId: 11, nama: 'Limit Fungsi Aljabar', deskripsi: 'Memahami konsep limit dan cara menyelesaikannya.' },
    { id: 304, kelasId: 11, nama: 'Turunan Fungsi (Diferensial)', deskripsi: 'Konsep dasar dan aturan turunan fungsi aljabar.' },
    { id: 305, kelasId: 12, nama: 'Integral', deskripsi: 'Konsep integral tak tentu dan tentu sebagai anti-turunan.' },
    { id: 306, kelasId: 12, nama: 'Dimensi Tiga', deskripsi: 'Jarak antar titik, garis, dan bidang dalam bangun ruang.' },
];
const MATERI = [
    {
        id: 1, babId: 101, judul: '1. Apa itu Penjumlahan?', tipe: 'penjelasan',
        konten: `Penjumlahan adalah cara untuk menggabungkan dua angka atau lebih menjadi satu jumlah total. Simbol yang digunakan adalah tambah (+).\n\nContoh: Jika kamu punya 2 apel dan ibu memberimu 3 apel lagi, maka total apelmu adalah 2 + 3 = 5 apel.`
    },
    {
        id: 1, babId: 101, judul: '2. Contoh Soal', tipe: 'contoh_soal',
        konten: `**Soal:**\nBudi memiliki 5 kelereng. Ali memberinya 4 kelereng. Berapa kelereng Budi sekarang?\n\n**Jawaban:**\n5 + 4 = 9\nJadi, Budi sekarang memiliki **9** kelereng.`
    },
    {
        id: 2, babId: 102, judul: '1. Konsep Perkalian sebagai Penjumlahan Berulang', tipe: 'penjelasan',
        konten: `Perkalian dapat dipahami sebagai penjumlahan yang dilakukan secara berulang.\n\nJika kamu melihat kalimat **4 × 3**, itu artinya kamu menjumlahkan angka 4 sebanyak 3 kali:\n\n**4 + 4 + 4 = 12**.\n\n**Artinya:** Perkalian adalah cara cepat untuk menjumlahkan angka yang sama berulang kali.`
    },
    {
        id: 2, babId: 102, judul: '2. Contoh Soal Perkalian Dasar', tipe: 'contoh_soal',
        konten: `**Soal:**\nHitung hasil dari 3 × 5.\n\n**Pembahasan:**\n- 3 dijumlahkan sebanyak 5 kali\n- 3 + 3 + 3 + 3 + 3 = 15\n- Jadi, **3 × 5 = 15**`
    },
    {
        id: 3, babId: 103, judul: '1. Konsep Pythagoras', tipe: 'penjelasan',
        konten: `Teorema Pythagoras berlaku khusus untuk **segitiga siku-siku**. Teorema ini menyatakan bahwa kuadrat dari sisi miring (hipotenusa) sama dengan jumlah kuadrat dari kedua sisi penyikunya.\n\nJika sisi penyiku adalah **a** dan **b**, dan sisi miring adalah **c**, maka rumusnya adalah:\n\n**a² + b² = c²**`
    },
    {
        id: 3, babId: 103, judul: '2. Contoh Soal Pythagoras', tipe: 'contoh_soal',
        konten: `**Soal:**\nSebuah segitiga siku-siku memiliki panjang sisi penyiku 3 cm dan 4 cm. Berapakah panjang sisi miringnya?\n\n**Pembahasan:**\n- a = 3, b = 4\n- a² + b² = c²\n- 3² + 4² = c²\n- 9 + 16 = c²\n- 25 = c²\n- c = √25 = 5\n\nJadi, panjang sisi miringnya adalah **5 cm**.`
    },
    {
        id: 4, babId: 104, judul: '1. Pengertian KPK (Kelipatan Persekutuan Terkecil)', tipe: 'penjelasan',
        konten: `KPK adalah **bilangan kelipatan terkecil** yang sama dari dua atau lebih bilangan.\n\nContoh: KPK dari 4 dan 6 didapat dari mencari kelipatan masing-masing:\n- Kelipatan 4: 4, 8, 12, 16, 20, ...\n- Kelipatan 6: 6, 12, 18, 24, ...\n\nKelipatan yang sama dan paling kecil adalah **12**, jadi **KPK = 12**.`
    },
    {
        id: 4, babId: 1042, judul: '2. Contoh Soal KPK', tipe: 'contoh_soal',
        konten: `**Soal:**\nTentukan KPK dari 3 dan 5.\n\n**Pembahasan:**\n- Kelipatan 3: 3, 6, 9, 12, 15, ...\n- Kelipatan 5: 5, 10, 15, 20, ...\n- Kelipatan yang sama dan paling kecil adalah **15**\n- Jadi, **KPK = 15**`
    },
    {
        id: 4, babId: 104, judul: '3. Pengertian FPB (Faktor Persekutuan Terbesar)', tipe: 'penjelasan',
        konten: `FPB adalah **faktor terbesar yang sama** dari dua atau lebih bilangan.\n\nContoh: FPB dari 12 dan 18:\n- Faktor 12: 1, 2, 3, 4, 6, 12\n- Faktor 18: 1, 2, 3, 6, 9, 18\nFaktor yang sama dan paling besar adalah **6**, jadi **FPB = 6**.`
    },
    {
        id: 4, babId: 104, judul: '4. Contoh Soal FPB', tipe: 'contoh_soal',
        konten: `**Soal:**\nTentukan FPB dari 8 dan 12.\n\n**Pembahasan:**\n- Faktor 8: 1, 2, 4, 8\n- Faktor 12: 1, 2, 3, 4, 6, 12\n- Faktor yang sama dan paling besar adalah **4**\n- Jadi, **FPB = 4**`
    },
    {
        id: 5, babId: 105, judul: '1. Aturan Pangkat (Power Rule)', tipe: 'rumus',
        konten: `Aturan paling dasar untuk turunan fungsi aljabar adalah Aturan Pangkat (Power Rule).\n\nJika sebuah fungsi adalah **f(x) = axⁿ**, maka turunannya, **f'(x)**, adalah:\n\n**f'(x) = n · axⁿ⁻¹**\n\n**Artinya:** Pangkat (n) dikalikan ke depan, lalu pangkatnya dikurangi satu.`
    },
    {
        id: 5, babId: 105, judul: '2. Contoh Soal Turunan', tipe: 'contoh_soal',
        konten: `**Soal:**\nTentukan turunan dari f(x) = 5x³.\n\n**Pembahasan:**\n- a = 5, n = 3\n- f'(x) = 3 · 5x³⁻¹\n- f'(x) = 15x²`
    },
    {
        id: 7,
        babId: 106,
        judul: '1. Pengertian Bangun Ruang',
        tipe: 'penjelasan',
        konten: `Bangun ruang adalah bangun tiga dimensi yang memiliki panjang, lebar, dan tinggi. Contohnya seperti kubus, balok, tabung, prisma, dan limas.`
    },
    {
        id: 8,
        babId: 106,
        judul: '2. Rumus Volume Bangun Ruang',
        tipe: 'rumus',
        konten: `Berikut beberapa rumus volume bangun ruang:\n
- Kubus: V = s³
- Balok: V = p × l × t
- Tabung: V = π × r² × t
\nVolume adalah ukuran seberapa banyak ruang yang dapat ditempati oleh suatu benda.`
    },
    {
        id: 9,
        babId: 106,
        judul: '3. Contoh Soal Volume Bangun Ruang',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nSebuah kubus memiliki panjang rusuk 4 cm. Berapa volumenya?\n
**Pembahasan:**\nV = s³ = 4 × 4 × 4 = 64 cm³\n
Jadi, volume kubus adalah **64 cm³**.`
    },
    {
        id: 10,
        babId: 106,
        judul: '4. Rumus Luas Permukaan Bangun Ruang',
        tipe: 'rumus',
        konten: `Beberapa rumus luas permukaan bangun ruang adalah:\n
- Kubus: L = 6 × s²
- Balok: L = 2 × (pl + pt + lt)
- Tabung: L = 2πr(r + t)
\nLuas permukaan adalah seluruh bidang yang menyelimuti bangun ruang.`
    },
    {
        id: 11,
        babId: 106,
        judul: '5. Contoh Soal Luas Permukaan',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nHitung luas permukaan balok dengan panjang 5 cm, lebar 3 cm, dan tinggi 2 cm.\n
**Pembahasan:**\nL = 2 × (pl + pt + lt)\n= 2 × (5×3 + 5×2 + 3×2)\n= 2 × (15 + 10 + 6)\n= 2 × 31 = 62 cm²\n
Jadi, luas permukaan balok adalah **62 cm²**.`
    },
    {
        id: 12,
        babId: 201,
        judul: '1. Apa itu Bentuk Aljabar?',
        tipe: 'penjelasan',
        konten: `Bentuk aljabar adalah ekspresi matematika yang terdiri dari variabel, konstanta, dan operasi hitung.\n\nContoh: 3x + 5, 2a - 7, atau 4y`
    },
    {
        id: 12,
        babId: 201,
        judul: '2. Variabel dan Konstanta',
        tipe: 'penjelasan',
        konten: `Variabel adalah huruf yang mewakili suatu nilai yang belum diketahui, seperti x, y, atau a.\nKonstanta adalah nilai tetap, seperti 2, 5, atau 10.\n\nContoh: Pada bentuk aljabar 3x + 7, x adalah variabel dan 7 adalah konstanta.`
    },
    {
        id: 12,
        babId: 201,
        judul: '3. Koefisien',
        tipe: 'penjelasan',
        konten: `Koefisien adalah angka yang mengalikan variabel.\n\nContoh: Pada ekspresi 5x, angka 5 adalah koefisien dari variabel x.`
    },
    {
        id: 12,
        babId: 201,
        judul: '4. Operasi pada Bentuk Aljabar',
        tipe: 'penjelasan',
        konten: `Operasi dasar aljabar meliputi penjumlahan, pengurangan, perkalian, dan pembagian.\n\nContoh:\n- Penjumlahan: 2x + 3x = 5x\n- Pengurangan: 7a - 2a = 5a`
    },
    {
        id: 12,
        babId: 201,
        judul: '5. Contoh Soal Bentuk Aljabar',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nSederhanakan bentuk aljabar berikut: 4x + 3x - 2x.\n\n**Pembahasan:**\n4x + 3x - 2x = (4 + 3 - 2)x = 5x`
    },
    {
        id: 13,
        babId: 202,
        judul: '1. Apa itu Himpunan?',
        tipe: 'penjelasan',
        konten: `Himpunan adalah kumpulan objek atau elemen yang didefinisikan dengan jelas.\n\nContoh:\nA = {1, 2, 3}\nB = {apel, jeruk, mangga}`
    },
    {
        id: 13,
        babId: 202,
        judul: '2. Cara Menyatakan Himpunan',
        tipe: 'penjelasan',
        konten: `Himpunan bisa ditulis dengan:\n- **Daftar anggota:** A = {2, 4, 6}\n- **Notasi pembentuk:** B = {x | x bilangan genap kurang dari 10}`
    },
    {
        id: 13,
        babId: 202,
        judul: '3. Diagram Venn',
        tipe: 'penjelasan',
        konten: `Diagram Venn digunakan untuk menggambarkan hubungan antar himpunan.\nBiasanya digambarkan dalam bentuk lingkaran yang saling berpotongan atau terpisah.`
    },
    {
        id: 13,
        babId: 202,
        judul: '4. Operasi pada Himpunan',
        tipe: 'penjelasan',
        konten: `Beberapa operasi dasar himpunan adalah:\n\n- **Irisan (∩):** Anggota yang sama\n- **Gabungan (∪):** Semua anggota dari kedua himpunan\n- **Selisih (−):** Anggota himpunan pertama yang tidak ada di himpunan kedua\n- **Komplemen:** Anggota yang bukan bagian dari suatu himpunan`
    },
    {
        id: 13,
        babId: 202,
        judul: '5. Contoh Soal Himpunan',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nDiketahui A = {1, 2, 3, 4} dan B = {3, 4, 5, 6}. Tentukan A ∩ B dan A ∪ B.\n\n**Pembahasan:**\n- A ∩ B = {3, 4}\n- A ∪ B = {1, 2, 3, 4, 5, 6}`
    },
    {
        id: 14,
        babId: 203,
        judul: '1. Apa itu Teorema Pythagoras?',
        tipe: 'penjelasan',
        konten: `Teorema Pythagoras menjelaskan hubungan antar sisi dalam segitiga siku-siku.\nRumusnya adalah:\n\n**a² + b² = c²**\n\na dan b adalah sisi siku-siku, sedangkan c adalah sisi miring (hipotenusa).`
    },
    {
        id: 14,
        babId: 203,
        judul: '2. Contoh Penggunaan Rumus',
        tipe: 'penjelasan',
        konten: `Jika diketahui panjang dua sisi siku-siku, kita bisa mencari panjang sisi miring.\nContoh:\nJika a = 6 dan b = 8, maka:\n\nc² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10`
    },
    {
        id: 14,
        babId: 203,
        judul: '3. Mencari Sisi Siku-Siku',
        tipe: 'penjelasan',
        konten: `Jika kita tahu sisi miring dan satu sisi siku-siku, kita bisa mencari sisi lainnya.\nContoh:\nJika c = 13 dan a = 5:\n\nb² = c² - a² = 169 - 25 = 144\nb = √144 = 12`
    },
    {
        id: 14,
        babId: 203,
        judul: '4. Contoh Soal Pythagoras',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nSebuah tangga bersandar pada dinding dengan jarak kaki tangga ke dinding 6 meter dan panjang tangga 10 meter. Berapa tinggi dinding yang dicapai tangga?\n\n**Pembahasan:**\nMisal:\n- a = 6 (alas)\n- c = 10 (sisi miring)\n\nb² = 10² - 6²\nb² = 100 - 36 = 64\nb = √64 = 8\n\nJadi, tinggi yang dicapai tangga adalah **8 meter**.`
    },
    {
        id: 14,
        babId: 203,
        judul: '5. Manfaat Teorema Pythagoras',
        tipe: 'penjelasan',
        konten: `Teorema Pythagoras digunakan dalam berbagai bidang seperti konstruksi bangunan, navigasi, desain grafis, dan fisika.\nContohnya: Mengukur jarak miring, membuat sudut siku-siku, atau menentukan ketinggian benda.`
    },
    {
        id: 15,
        babId: 204,
        judul: '1. Unsur-unsur Lingkaran',
        tipe: 'penjelasan',
        konten: `Lingkaran memiliki beberapa unsur penting:\n
- **Titik Pusat:** Titik tengah lingkaran.\n
- **Jari-jari (r):** Jarak dari titik pusat ke tepi lingkaran.\n
- **Diameter (d):** Dua kali jari-jari, d = 2r.\n
- **Busur:** Garis lengkung pada lingkaran.\n
- **Tali Busur:** Garis lurus yang menghubungkan dua titik pada lingkaran.\n
- **Juring:** Daerah yang dibatasi dua jari-jari dan busur.\n
- **Tembereng:** Daerah yang dibatasi tali busur dan busur.`
    },
    {
        id: 15,
        babId: 204,
        judul: '2. Rumus Keliling Lingkaran',
        tipe: 'rumus',
        konten: `Keliling lingkaran dapat dihitung dengan salah satu rumus berikut:\n
**K = 2πr** atau **K = πd**\n
Dengan π (phi) ≈ 3,14 atau 22/7.`
    },
    {
        id: 15,
        babId: 204,
        judul: '3. Rumus Luas Lingkaran',
        tipe: 'rumus',
        konten: `Luas lingkaran dihitung dengan rumus:\n
**L = πr²**\n
Artinya: jari-jari dikuadratkan, lalu dikalikan π.`
    },
    {
        id: 15,
        babId: 204,
        judul: '4. Garis Singgung Lingkaran',
        tipe: 'penjelasan',
        konten: `Garis singgung adalah garis yang hanya menyentuh satu titik pada lingkaran.\n
Sifat penting garis singgung:\n
- Tegak lurus terhadap jari-jari yang ditarik ke titik singgung.\n
- Dua garis singgung dari satu titik luar memiliki panjang yang sama.`
    },
    {
        id: 15,
        babId: 204,
        judul: '5. Contoh Soal Lingkaran',
        tipe: 'contoh_soal',
        konten: `**Soal 1:**\nHitung keliling lingkaran dengan jari-jari 14 cm!\n\n**Pembahasan:**\nK = 2 × π × r\nK = 2 × 22/7 × 14 = 88 cm\n\n**Soal 2:**\nHitung luas lingkaran dengan diameter 10 cm!\n\n**Pembahasan:**\nd = 10 → r = 5\nL = π × r² = 3,14 × 25 = 78,5 cm²`
    },
    {
        id: 16,
        babId: 205,
        judul: '1. Pengertian Statistika',
        tipe: 'penjelasan',
        konten: `Statistika adalah cabang matematika yang mempelajari cara mengumpulkan, mengolah, menganalisis, dan menyajikan data.\n
Data bisa berupa angka, tabel, atau diagram.`
    },
    {
        id: 16,
        babId: 205,
        judul: '2. Mean (Rata-rata)',
        tipe: 'penjelasan',
        konten: `Mean adalah jumlah seluruh data dibagi banyaknya data.\n
**Rumus:**\nMean = (x₁ + x₂ + x₃ + ... + xn) / n\n
**Contoh:**\nData: 4, 6, 8, 10\nMean = (4 + 6 + 8 + 10) / 4 = 28 / 4 = 7`
    },
    {
        id: 16,
        babId: 205,
        judul: '3. Median (Nilai Tengah)',
        tipe: 'penjelasan',
        konten: `Median adalah nilai tengah dari data yang sudah diurutkan.\n
Jika jumlah data ganjil → nilai tengahnya.\nJika jumlah data genap → rata-rata dua nilai tengah.\n
**Contoh:**\nData: 3, 5, 7, 9, 11 → Median = 7\nData: 2, 4, 6, 8 → Median = (4 + 6) / 2 = 5`
    },
    {
        id: 16,
        babId: 205,
        judul: '4. Modus (Data yang Paling Sering Muncul)',
        tipe: 'penjelasan',
        konten: `Modus adalah nilai yang paling sering muncul dalam suatu kumpulan data.\n
**Contoh:**\nData: 2, 4, 4, 5, 6, 6, 6, 7 → Modus = 6`
    },
    {
        id: 16,
        babId: 205,
        judul: '5. Kuartil',
        tipe: 'penjelasan',
        konten: `Kuartil membagi data menjadi empat bagian yang sama besar.\n\n
- **Kuartil 1 (Q1):** Nilai seperempat dari data.\n
- **Kuartil 2 (Q2):** Sama dengan median.\n
- **Kuartil 3 (Q3):** Nilai tiga perempat dari data.\n
Kuartil digunakan untuk memahami penyebaran data.`
    },
    {
        id: 16,
        babId: 205,
        judul: '6. Contoh Soal Statistika',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nDiketahui data: 5, 7, 8, 10, 10, 12, 15\nHitung mean, median, dan modus!\n\n**Pembahasan:**\nMean = (5 + 7 + 8 + 10 + 10 + 12 + 15) / 7 = 67 / 7 ≈ 9,57\nMedian = nilai ke-4 = 10\nModus = 10 (muncul 2 kali)`
    },
    {
        id: 17,
        babId: 206,
        judul: '1. Pengertian Peluang',
        tipe: 'penjelasan',
        konten: `Peluang adalah kemungkinan terjadinya suatu peristiwa. Peluang dinyatakan dalam bentuk pecahan, desimal, atau persen.\n
Semakin besar peluang suatu kejadian, semakin besar kemungkinan kejadian itu terjadi.`
    },
    {
        id: 17,
        babId: 206,
        judul: '2. Peluang Teoretik',
        tipe: 'penjelasan',
        konten: `Peluang teoretik adalah peluang yang dihitung berdasarkan penalaran matematika tanpa percobaan.\n
**Rumus:**\nP(A) = n(A) / n(S)\n
Keterangan:\n- n(A) = banyaknya kejadian yang diinginkan\n- n(S) = banyaknya semua kemungkinan`
    },
    {
        id: 17,
        babId: 206,
        judul: '3. Peluang Empirik',
        tipe: 'penjelasan',
        konten: `Peluang empirik adalah peluang yang diperoleh dari hasil percobaan yang dilakukan berulang.\n
**Rumus:**\nP(A) = (banyak kejadian A terjadi) / (jumlah percobaan)`
    },
    {
        id: 17,
        babId: 206,
        judul: '4. Contoh Peluang Teoretik',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nSebuah dadu dilempar sekali. Berapa peluang munculnya angka 4?\n\n**Pembahasan:**\n- Kemungkinan yang diinginkan: 1 (yaitu angka 4)\n- Banyaknya kemungkinan: 6\nP(A) = 1/6`
    },
    {
        id: 17,
        babId: 206,
        judul: '5. Contoh Peluang Empirik',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nSebuah koin dilempar 20 kali, dan muncul sisi gambar sebanyak 9 kali. Berapa peluang empirik munculnya gambar?\n\n**Pembahasan:**\nP(A) = 9/20 = 0,45`
    },
    {
        id: 17,
        babId: 206,
        judul: '6. Perbandingan Peluang Teoretik dan Empirik',
        tipe: 'penjelasan',
        konten: `Peluang teoretik diperoleh dari perhitungan matematika tanpa percobaan.\nPeluang empirik diperoleh dari hasil percobaan nyata.\n
Semakin banyak percobaan, peluang empirik akan semakin mendekati peluang teoretik.`
    },
    {
        id: 1,
        babId: 301,
        judul: '1. Pengertian Eksponen dan Logaritma',
        tipe: 'penjelasan',
        konten: `Eksponen adalah bentuk perpangkatan bilangan, misalnya aⁿ artinya a dikalikan sebanyak n kali. Logaritma adalah kebalikan dari eksponen, yaitu logₐ(b) berarti pangkat berapa a harus dinaikkan agar menghasilkan b.`
    },
    {
        id: 1,
        babId: 301,
        judul: '2. Rumus Dasar Eksponen dan Logaritma',
        tipe: 'rumus',
        konten: `Beberapa sifat penting:\n
1) aᵐ × aⁿ = aᵐ⁺ⁿ\n
2) aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n
3) (aᵐ)ⁿ = aᵐⁿ\n
4) logₐ(aⁿ) = n\n
5) aˡᵒᵍₐ(ⁿ) = n`
    },
    {
        id: 1,
        babId: 301,
        judul: '3. Contoh Soal Eksponen dan Logaritma',
        tipe: 'contoh_soal',
        konten: `**Soal 1:**\nHitung 2³ × 2².\n**Pembahasan:**\n2³ × 2² = 2⁵ = 32\n\n**Soal 2:**\nTentukan nilai log₂(8).\n**Pembahasan:**\nlog₂(8) = 3 karena 2³ = 8.`
    },
    {
        id: 1,
        babId: 301,
        judul: '4. Penerapan Eksponen dan Logaritma',
        tipe: 'penjelasan',
        konten: `Eksponen digunakan untuk menyatakan pertumbuhan populasi, bunga majemuk, dan ukuran mikro. Logaritma sering digunakan dalam skala pH, skala richter, dan desibel suara.`
    },
    {
        id: 1,
        babId: 301,
        judul: '5. Ringkasan Eksponen dan Logaritma',
        tipe: 'penjelasan',
        konten: `Eksponen menyatakan perpangkatan, sedangkan logaritma adalah inversnya. Menguasai sifat-sifatnya penting untuk menyelesaikan soal aljabar tingkat lanjut.`
    },
    {
        id: 1,
        babId: 302,
        judul: '1. Pengertian Trigonometri',
        tipe: 'penjelasan',
        konten: `Trigonometri mempelajari hubungan antara sudut dan panjang sisi pada segitiga, terutama segitiga siku-siku. Fungsi utamanya adalah sinus, cosinus, dan tangen.`
    },
    {
        id: 1,
        babId: 302,
        judul: '2. Rumus Dasar Trigonometri',
        tipe: 'rumus',
        konten: `Dalam segitiga siku-siku:\n
sin θ = depan / miring\n
cos θ = samping / miring\n
tan θ = depan / samping`
    },
    {
        id: 1,
        babId: 302,
        judul: '3. Contoh Soal Trigonometri',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nJika sudut θ memiliki sisi depan 6 cm dan sisi miring 10 cm, berapakah sin θ?\n**Pembahasan:** sin θ = 6/10 = 0,6`
    },
    {
        id: 1,
        babId: 302,
        judul: '4. Penerapan Trigonometri',
        tipe: 'penjelasan',
        konten: `Trigonometri digunakan dalam pengukuran tinggi bangunan, navigasi, astronomi, dan teknik sipil.`
    },
    {
        id: 1,
        babId: 302,
        judul: '5. Ringkasan Trigonometri',
        tipe: 'penjelasan',
        konten: `Trigonometri dasar fokus pada perbandingan sisi segitiga terhadap sudutnya. Menguasai sinus, cosinus, dan tangen sangat penting sebagai dasar lanjutannya.`
    },
    {
        id: 1,
        babId: 303,
        judul: '1. Pengertian Limit',
        tipe: 'penjelasan',
        konten: `Limit adalah nilai pendekatan suatu fungsi ketika variabelnya mendekati suatu titik tertentu. Limit digunakan dalam turunan dan integral.`
    },
    {
        id: 1,
        babId: 303,
        judul: '2. Rumus Dasar Limit',
        tipe: 'rumus',
        konten: `Beberapa sifat limit:\n
1) lim x→a c = c\n
2) lim x→a x = a\n
3) lim x→a [f(x) ± g(x)] = lim f(x) ± lim g(x)`
    },
    {
        id: 1,
        babId: 303,
        judul: '3. Contoh Soal Limit',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nHitung lim x→2 (x² - 4) / (x - 2)\n**Pembahasan:**\n(x² - 4) = (x - 2)(x + 2)\nlim = x + 2 = 4`
    },
    {
        id: 1,
        babId: 303,
        judul: '4. Penerapan Limit',
        tipe: 'penjelasan',
        konten: `Limit digunakan untuk mencari kecepatan sesaat, menentukan turunan, dan memahami perilaku fungsi di titik tak terdefinisi.`
    },
    {
        id: 1,
        babId: 303,
        judul: '5. Ringkasan Limit',
        tipe: 'penjelasan',
        konten: `Limit membantu memahami nilai pendekatan fungsi dan menjadi dasar diferensial dan integral.`
    },
    {
        id: 1,
        babId: 304,
        judul: '1. Pengertian Turunan Fungsi',
        tipe: 'penjelasan',
        konten: `Turunan (diferensial) adalah konsep dalam kalkulus yang digunakan untuk mengetahui laju perubahan suatu fungsi.\n\nJika sebuah fungsi ditulis sebagai f(x), maka turunan pertama dari fungsi tersebut dilambangkan dengan f'(x) atau df/dx.\n\nTurunan digunakan dalam berbagai aplikasi seperti kecepatan, pertumbuhan, dan optimasi.`
    },
    {
        id: 2,
        babId: 304,
        judul: '2. Aturan Dasar Turunan',
        tipe: 'rumus',
        konten: `Beberapa aturan dasar turunan yang sering digunakan:\n\n1) Konstanta\nJika f(x) = c, maka f'(x) = 0\n\n2) Pangkat (Power Rule)\nJika f(x) = axⁿ, maka f'(x) = n · axⁿ⁻¹\n\n3) Penjumlahan/Pengurangan\nJika f(x) = u ± v, maka f'(x) = u' ± v'\n\n4) Konstanta dikali fungsi\nJika f(x) = c·u(x), maka f'(x) = c·u'(x)`
    },
    {
        id: 3,
        babId: 304,
        judul: '3. Contoh Soal Turunan Dasar',
        tipe: 'contoh_soal',
        konten: `Contoh 1:\nf(x) = 5x³\nTurunannya:\nf'(x) = 3 · 5x³⁻¹ = 15x²\n\nContoh 2:\nf(x) = 7x² - 3x + 4\nTurunannya:\nf'(x) = 14x - 3`
    },
    {
        id: 4,
        babId: 304,
        judul: '4. Penerapan Turunan',
        tipe: 'penjelasan',
        konten: `Turunan digunakan dalam berbagai bidang:\n\n1) Fisika → Kecepatan dan percepatan\n2) Ekonomi → Biaya marginal dan keuntungan maksimal\n3) Teknik → Optimasi bentuk dan ukuran\n\nContoh: Menentukan kecepatan sesaat dari fungsi posisi terhadap waktu.`
    },
    {
        id: 5,
        babId: 304,
        judul: '5. Kesimpulan Turunan',
        tipe: 'penjelasan',
        konten: `Turunan adalah cara untuk mengukur perubahan suatu fungsi terhadap variabel bebasnya.\n\nDengan memahami aturan dasar dan contoh soalnya, kamu bisa mengerjakan soal-soal lanjutan seperti turunan trigonometri, logaritma, dan aplikasi optimasi.\n\nPelajari dasarnya dulu agar lebih mudah lanjut ke tingkat berikutnya.`
    },
    {
        id: 1,
        babId: 305,
        judul: '1. Pengertian Integral',
        tipe: 'penjelasan',
        konten: `Integral adalah kebalikan dari turunan dan digunakan untuk mencari luas di bawah kurva. Integral terbagi menjadi tak tentu dan tentu.`
    },
    {
        id: 1,
        babId: 305,
        judul: '2. Rumus Dasar Integral',
        tipe: 'rumus',
        konten: `∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C\n∫ a dx = ax + C\n∫ f(x) dx dari a ke b = F(b) - F(a)`
    },
    {
        id: 1,
        babId: 305,
        judul: '3. Contoh Soal Integral',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nHitung ∫ 3x² dx\n**Pembahasan:**\n= 3 × x³/3 = x³ + C`
    },
    {
        id: 1,
        babId: 305,
        judul: '4. Penerapan Integral',
        tipe: 'penjelasan',
        konten: `Integral digunakan untuk menghitung luas, volume, jarak tempuh, dan probabilitas dalam statistik.`
    },
    {
        id: 1,
        babId: 305,
        judul: '5. Ringkasan Integral',
        tipe: 'penjelasan',
        konten: `Integral adalah anti-turunan dan alat penting dalam fisika, teknik, dan matematika lanjutan.`
    },
    {
        id: 1,
        babId: 306,
        judul: '1. Pengertian Dimensi Tiga',
        tipe: 'penjelasan',
        konten: `Dimensi tiga mempelajari titik, garis, dan bidang dalam ruang. Termasuk jarak, sudut, dan posisi objek dalam koordinat 3D.`
    },
    {
        id: 1,
        babId: 306,
        judul: '2. Rumus Jarak dalam Ruang',
        tipe: 'rumus',
        konten: `Rumus jarak dua titik A(x₁,y₁,z₁) dan B(x₂,y₂,z₂):\nAB = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]`
    },
    {
        id: 1,
        babId: 306,
        judul: '3. Contoh Soal Dimensi Tiga',
        tipe: 'contoh_soal',
        konten: `**Soal:**\nHitung jarak titik A(1,2,3) ke B(4,6,3).\n**Pembahasan:**\n= √[(4-1)² + (6-2)² + (3-3)²] = √(9 + 16 + 0) = 5`
    },
    {
        id: 1,
        babId: 306,
        judul: '4. Penerapan Dimensi Tiga',
        tipe: 'penjelasan',
        konten: `Konsep dimensi tiga digunakan dalam desain bangunan, animasi 3D, navigasi pesawat, hingga pemodelan fisika.`
    },
    {
        id: 1,
        babId: 306,
        judul: '5. Ringkasan Dimensi Tiga',
        tipe: 'penjelasan',
        konten: `Dimensi tiga membahas posisi dan jarak objek dalam ruang. Penting untuk aplikasi teknik dan sains.`
    },
];

// --- Username handling (local) ---
const USER_KEY = 'pintarmatika_user';
function loadUser(){ try{ return localStorage.getItem(USER_KEY) || ''; }catch(e){ return ''; } }
function saveUser(name){ try{ localStorage.setItem(USER_KEY, name); }catch(e){} }
function ensureUserUI(){
  let uname = loadUser();
  if(!uname){
    uname = prompt('Masukkan nama Anda (opsional) — akan digunakan untuk menyimpan riwayat kuis lokal:' , '' ) || '';
    if(uname) saveUser(uname);
  }
  // show in header if container exists
  const header = document.querySelector('.topbar .container') || document.body;
  let el = document.getElementById('user-name');
  if(!el){
    el = document.createElement('div');
    el.id = 'user-name';
    el.style.marginLeft='12px';
    el.style.opacity='0.9';
    el.style.fontSize='14px';
    header.appendChild(el);
  }
  el.textContent = uname ? 'User: ' + uname : 'User: (tamu)';
  return uname;
}
// call ensureUserUI on load

// --- Timer support for quizzes ---
function startQuizTimer(durationSeconds, onTick, onExpire){
  // returns an object {stop:fn, remaining:fn}
  let remaining = durationSeconds;
  let tid = setInterval(()=>{
    remaining -= 1;
    try{ onTick(remaining); }catch(e){}
    if(remaining<=0){
      clearInterval(tid);
      try{ onExpire(); }catch(e){}
    }
  }, 1000);
  return { stop: ()=> clearInterval(tid), remaining: ()=> remaining };
}
// (rest trimmed for brevity, will be replaced below)

// Utility: safe HTML
function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function generateQuizFromText(text, count){
  if(!text) return [];
  text = String(text).replace(/`/g,'"').replace(/\r/g,' ').replace(/\n/g,' ');
  let sentences = text.split(/(?<=[.!?])\s+/).map(s=>s.trim()).filter(Boolean);
  let allWords = text.split(/\s+/).map(w=>w.replace(/[^\w\u00C0-\u017F-]/g,'')).filter(Boolean);
  const stop = new Set(['yang','dan','dari','dengan','untuk','adalah','atau','pada','ke','di','sebagai','ini','itu','sebuah','juga','jika','jadi']);
  let candidates = sentences.filter(s=> s.split(/\s+/).length>=6);
  if(candidates.length===0) candidates = sentences.slice(0, Math.min(5,sentences.length));
  let quiz = [];
  function shuffle(a){ for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  candidates = shuffle(candidates);
  let pool = Array.from(new Set(allWords.filter(w=> w && w.length>3 ).map(w=>w.toString())));
  pool = pool.filter(w=> !stop.has(w.toLowerCase()));
  for(let s of candidates){
    let words = s.split(/\s+/).map(w=>w.replace(/[^\w\u00C0-\u017F-]/g,'')).filter(Boolean);
    let kw = words.find(w => w.length>4 && !/\d/.test(w) && !stop.has(w.toLowerCase()));
    if(!kw){ kw = words.find(w=> w.length>3 && !/\d/.test(w)); }
    if(!kw) continue;
    let blankSentence = s.replace(new RegExp('\\b'+escapeRegExp(kw)+'\\b','i'), '____');
    let options = [kw];
    let distract = pool.filter(w=> w.toLowerCase() !== kw.toLowerCase());
    shuffle(distract);
    for(let d of distract){ if(options.length>=4) break; if(!options.find(x=> x.toLowerCase()===d.toLowerCase())) options.push(d); }
    while(options.length<4){ let fake = kw.split('').reverse().join('').slice(0, Math.max(3, Math.floor(kw.length/2))); if(!options.includes(fake)) options.push(fake); else options.push('...'); }
    shuffle(options);
    quiz.push({ soal: blankSentence, pilihan: options, jawaban: kw });
    if(quiz.length>=count) break;
  }
  return quiz.slice(0,count);
}

function escapeRegExp(string) { return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'); }

document.addEventListener('DOMContentLoaded', ()=>{ ensureUserUI(); 
  function getId(id){ return document.getElementById(id); }
  const jenjangListEl = getId('jenjang-list') || document.body;
  const cardsEl = getId('cards') || (function(){let d=document.createElement('div');d.id='cards';document.body.appendChild(d);return d;})();
  const breadcrumbEl = getId('breadcrumb') || (function(){let d=document.createElement('div');d.id='breadcrumb';document.body.insertBefore(d,document.body.firstChild);return d;})();
  const materiView = getId('materi-view') || (function(){let d=document.createElement('div');d.id='materi-view';document.body.appendChild(d);return d;})();
  const searchInput = getId('search');
  const clearSearch = getId('clear-search');
  const bookmarksBtn = getId('bookmarks-btn');
  const themeToggle = getId('theme-toggle');

  const BOOKMARKS_KEY = 'pintarmatika_bookmarks';
  const QUIZ_HISTORY_KEY = 'pintarmatika_quiz_history';

  function loadBookmarks(){ try{ return JSON.parse(localStorage.getItem(BOOKMARKS_KEY)||'[]'); }catch(e){return [];} }
  function saveBookmarks(b){ localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(b)); }
  function loadQuizHistory(){ try{ return JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY)||'{}'); }catch(e){return {}; } }
  function saveQuizHistory(h){ localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(h)); }

  const jenjangs = Array.from(new Set(KELAS.map(k=>k.jenjang)));

  function renderJenjangs(){
    jenjangListEl.innerHTML = '';
    jenjangs.forEach(j => {
      const card = document.createElement('div');
      card.className = 'jenjang-card';
      card.innerHTML = '<strong>'+esc(j)+'</strong>';
      const kelasList = document.createElement('div');
      kelasList.className = 'kelas-list';
      KELAS.filter(k=>k.jenjang===j).forEach(kl => {
        const it = document.createElement('div');
        it.className = 'kelas-item';
        it.textContent = kl.nama;
        it.addEventListener('click', ()=> showKelas(kl));
        kelasList.appendChild(it);
      });
      card.appendChild(kelasList);
      jenjangListEl.appendChild(card);
    });
  }

  function showKelas(kl){
    breadcrumbEl.textContent = 'Jenjang: ' + kl.jenjang + ' > ' + kl.nama;
    materiView.classList.add && materiView.classList.add('hidden');
    const babs = BAB.filter(b=>b.kelasId===kl.id);
    cardsEl.innerHTML = '';
    if(babs.length===0){ cardsEl.innerHTML = '<p class=\"muted\">Belum ada bab untuk kelas ini.</p>'; return; }
    babs.forEach(b => {
      const card = document.createElement('div'); card.className='card';
      card.innerHTML = '<h3>'+esc(b.nama)+'</h3><p>'+esc(b.deskripsi||'')+'</p>';
      card.addEventListener('click', ()=> showBab(b,kl));
      cardsEl.appendChild(card);
    });
  }

  function showBab(babObj, kl){
    breadcrumbEl.textContent = 'Jenjang: ' + kl.jenjang + ' > ' + kl.nama + ' > ' + babObj.nama;
    const relatedMateri = MATERI.filter(m => m.babId === babObj.id);
    cardsEl.innerHTML = '';
    if(relatedMateri.length===0){ cardsEl.innerHTML = '<p class=\"muted\">Belum ada materi untuk bab ini.</p>'; return; }
    relatedMateri.forEach(m => {
      const card = document.createElement('div'); card.className='card';
      let preview = String(m.konten||'').split('\\n').slice(0,3).join(' ');
      if(preview.length>220) preview = preview.slice(0,220)+'...';
      card.innerHTML = '<h3>'+esc(m.judul)+'</h3><p>'+esc(preview)+'</p>';
      const openBtn = document.createElement('button'); openBtn.textContent='Buka'; openBtn.style.marginRight='8px';
      const quizBtn = document.createElement('button'); quizBtn.textContent='Mulai Kuis';
      openBtn.addEventListener('click', ()=> showMateri(m, babObj, kl));
      quizBtn.addEventListener('click', ()=> startQuizForMateri(m, babObj, kl));
      card.appendChild(openBtn); card.appendChild(quizBtn);
      cardsEl.appendChild(card);
    });
  }

  function showMateri(m, babObj, kl){
    breadcrumbEl.textContent = 'Jenjang: ' + kl.jenjang + ' > ' + kl.nama + ' > ' + babObj.nama + ' > ' + m.judul;
    cardsEl.innerHTML = '';
    materiView.classList.remove && materiView.classList.remove('hidden');
    const content = String(m.konten || '').replace(/\\n/g,'<br>');
    materiView.innerHTML = '<div class=\"materi-view\"><h2>'+esc(m.judul)+'</h2><div class=\"materi-content\">'+content+'</div><div style=\"margin-top:12px;\"><button id=\"bookmark-btn\">Tambahkan Bookmark</button> <button id=\"start-quiz-btn\">Mulai Kuis</button></div></div>';
    document.getElementById('bookmark-btn').addEventListener('click', ()=>{
      const bm = loadBookmarks();
      if(!bm.find(x=> x.id===m.id && x.babId===m.babId)){ bm.push({id:m.id,babId:m.babId,judul:m.judul}); saveBookmarks(bm); alert('Materi ditandai (bookmark).'); }
      else alert('Materi sudah ada di bookmark.');
    });
    document.getElementById('start-quiz-btn').addEventListener('click', ()=> startQuizForMateri(m,babObj,kl));
  }

  function startQuizForMateri(m, babObj, kl){
    const quiz = generateQuizFromText(m.konten || m.judul || '', 5);
    if(quiz.length===0){ alert('Maaf, tidak bisa membuat kuis otomatis dari materi ini.'); return; }
    let idx=0;
    let answers = new Array(quiz.length).fill(null);
    function renderQuestion(){
      const q = quiz[idx];
      breadcrumbEl.textContent = 'Kuis: ' + m.judul + ' (Soal ' + (idx+1) + '/' + quiz.length + ')';
      cardsEl.innerHTML = '';
      materiView.classList.add && materiView.classList.add('hidden');
      const card = document.createElement('div'); card.className='card';
      let htmlq = '<h3>Soal '+(idx+1)+' dari '+quiz.length+'</h3><p>'+esc(q.soal.replace(/____/g,'<u>____</u>'))+'</p>';
      htmlq += '<div style=\"margin-top:8px\">';
      q.pilihan.forEach((opt,i)=>{
        const id = 'opt-'+i;
        htmlq += '<div style=\"margin:6px 0\"><label><input type=\"radio\" name=\"choice\" value=\"'+esc(opt)+'\"> '+esc(opt)+'</label></div>';
      });
      htmlq += '</div>';
      htmlq += '<div style=\"margin-top:12px\"><button id=\"prev-btn\">Sebelumnya</button> <button id=\"next-btn\">'+(idx===quiz.length-1?'Selesai':'Selanjutnya')+'</button></div>';
      card.innerHTML = htmlq;
      cardsEl.appendChild(card);
      const inputs = card.querySelectorAll('input[name=\"choice\"]');
      if(answers[idx]){ inputs.forEach(inp=>{ if(inp.value===answers[idx]) inp.checked=true; }); }
      document.getElementById('prev-btn').addEventListener('click', ()=>{ if(idx>0) idx--, renderQuestion(); });
      document.getElementById('next-btn').addEventListener('click', ()=>{
        const sel = card.querySelector('input[name=\"choice\"]:checked');
        if(sel) answers[idx]=sel.value;
        else { if(!confirm('Kamu belum memilih jawaban untuk soal ini. Lanjutkan?')) return; }
        if(idx<quiz.length-1){ idx++; renderQuestion(); }
        else finishQuiz(quiz, answers, m, babObj, kl);
      });
    }
    renderQuestion();
  }

  function finishQuiz(quiz, answers, m, babObj, kl){
    let correct=0;
    let details = [];
    for(let i=0;i<quiz.length;i++){
      const q=quiz[i]; const ans=answers[i];
      const ok = ans && (String(ans).toLowerCase()===String(q.jawaban).toLowerCase());
      if(ok) correct++;
      details.push({soal:q.soal, jawabanBenar:q.jawaban, jawabanUser: ans||null, benar: ok, pilihan:q.pilihan});
    }
    const score = Math.round((correct/quiz.length)*100);
    const hist = loadQuizHistory();
    hist['m_'+m.id+'_b_'+m.babId] = { timestamp: (new Date()).toISOString(), score: score, correct: correct, total: quiz.length, details: details, judul: m.judul };
    saveQuizHistory(hist);
    breadcrumbEl.textContent = 'Hasil Kuis: ' + m.judul;
    cardsEl.innerHTML = '';
    materiView.classList.add && materiView.classList.add('hidden');
    const wrap = document.createElement('div');
    wrap.className = 'materi-view';
    let out = '<h2>Hasil Kuis</h2>';
    out += '<p>Skor: <strong>'+score+'%</strong> ('+correct+'/'+quiz.length+')</p>';
    out += '<table style=\"width:100%;border-collapse:collapse\">';
    out += '<thead><tr><th style=\"text-align:left;border-bottom:1px solid rgba(255,255,255,0.06);padding:6px\">No</th><th style=\"text-align:left;border-bottom:1px solid rgba(255,255,255,0.06);padding:6px\">Soal</th><th style=\"text-align:left;border-bottom:1px solid rgba(255,255,255,0.06);padding:6px\">Jawaban Anda</th><th style=\"text-align:left;border-bottom:1px solid rgba(255,255,255,0.06);padding:6px\">Jawaban Benar</th><th style=\"text-align:left;border-bottom:1px solid rgba(255,255,255,0.06);padding:6px\">Status</th></tr></thead><tbody>';
    details.forEach((d,i)=>{
      out += '<tr><td style=\"padding:6px;vertical-align:top\">'+(i+1)+'</td>';
      out += '<td style=\"padding:6px;vertical-align:top\">'+esc(d.soal)+'</td>';
      out += '<td style=\"padding:6px;vertical-align:top\">'+esc(d.jawabanUser||'-')+'</td>';
      out += '<td style=\"padding:6px;vertical-align:top\">'+esc(d.jawabanBenar)+'</td>';
      out += '<td style=\"padding:6px;vertical-align:top\">'+(d.benar?'<span style=\"color:#4ade80\">Benar</span>':'<span style=\"color:#fb7185\">Salah</span>')+'</td></tr>';
    });
    out += '</tbody></table>';
    out += '<div style=\"margin-top:12px\"><button id=\"retry-quiz\">Ulangi Kuis</button> <button id=\"back-to-materi\">Kembali ke Materi</button> <button id=\"view-history\">Lihat Riwayat</button></div>';
    wrap.innerHTML = out;
    cardsEl.appendChild(wrap);
    document.getElementById('retry-quiz').addEventListener('click', ()=> startQuizForMateri(m,babObj,kl));
    document.getElementById('back-to-materi').addEventListener('click', ()=> showMateri(m,babObj,kl));
    document.getElementById('view-history').addEventListener('click', ()=> showQuizHistory());
  }

  function showQuizHistory(){
  // ensure user UI exists
  ensureUserUI();

    const hist = loadQuizHistory();
    breadcrumbEl.textContent = 'Riwayat Kuis';
    cardsEl.innerHTML='';
    const entries = Object.keys(hist).map(k=> ({key:k, val:hist[k]})).sort((a,b)=> b.val.timestamp.localeCompare(a.val.timestamp));
    if(entries.length===0){ cardsEl.innerHTML = '<p class=\"muted\">Belum ada riwayat kuis.</p>'; return; }
    entries.forEach(e=>{
      const div = document.createElement('div'); div.className='card';
      div.innerHTML = '<h3>'+esc(e.val.judul)+'</h3><p>Skor: '+esc(String(e.val.score))+'% ('+e.val.correct+'/'+e.val.total+')<br><small>'+esc(e.val.timestamp)+'</small></p><div><button class=\"open\">Buka</button></div>';
      div.querySelector('.open').addEventListener('click', ()=> {
        const wrap = document.createElement('div'); wrap.className='materi-view';
        let out = '<h2>Detail Riwayat</h2>';
        out += '<p>Judul: '+esc(e.val.judul)+'</p>';
        out += '<p>Skor: '+esc(String(e.val.score))+'% ('+e.val.correct+'/'+e.val.total+')</p>';
        out += '<p>Tanggal: '+esc(e.val.timestamp)+'</p>';
        out += '<div style=\"margin-top:12px\"><button id=\"close-hist\">Tutup</button></div>';
        wrap.innerHTML = out;
        cardsEl.innerHTML=''; cardsEl.appendChild(wrap);
        document.getElementById('close-hist').addEventListener('click', ()=> showQuizHistory());
      });
      cardsEl.appendChild(div);
    });
    // Add Export CSV button
    const exportBtn = document.createElement('button');
    exportBtn.textContent = 'Ekspor CSV Riwayat';
    exportBtn.style.marginTop = '12px';
    exportBtn.addEventListener('click', ()=> { downloadCsvOfHistory(); });
    const exportWrap = document.createElement('div');
    exportWrap.style.marginTop = '12px';
    exportWrap.appendChild(exportBtn);
    cardsEl.appendChild(exportWrap);
    
  }

  renderJenjangs();
  cardsEl.innerHTML = '<p class=\"muted\">Pilih kelas di panel kiri untuk melihat bab. Atau gunakan pencarian.</p>';
  if(searchInput){
    searchInput.addEventListener('input', (e)=>{
      const v = e.target.value;
      if(v.length>=2){
        const q = v.trim().toLowerCase();
        const results = MATERI.filter(m=> (m.judul+' '+(m.konten||'')).toLowerCase().includes(q));
        breadcrumbEl.textContent = 'Hasil pencarian: ' + v;
        cardsEl.innerHTML='';
        if(results.length===0){ cardsEl.innerHTML='<p class=\"muted\">Tidak ditemukan hasil.</p>'; return; }
        results.forEach(m=>{
          const b = BAB.find(x=>x.id===m.babId) || {nama:'-'};
          const card = document.createElement('div'); card.className='card';
          card.innerHTML = '<h3>'+esc(m.judul)+'</h3><p>'+esc(b.nama)+'</p>';
          card.addEventListener('click', ()=> { const kl = KELAS.find(k=>k.id===b.kelasId) || KELAS[0]; showMateri(m,b,kl); });
          cardsEl.appendChild(card);
        });
      } else if(v.length===0){
        cardsEl.innerHTML = '<p class=\"muted\">Pilih kelas di panel kiri untuk melihat bab. Atau gunakan pencarian.</p>';
        breadcrumbEl.textContent = 'Beranda';
      }
    });
  }
  bookmarksBtn && bookmarksBtn.addEventListener('click', ()=> {
    breadcrumbEl.textContent = 'Bookmarks';
    const bms = loadBookmarks();
    cardsEl.innerHTML='';
    if(bms.length===0){ cardsEl.innerHTML='<p class=\"muted\">Belum ada bookmark.</p>'; return; }
    bms.forEach(bm=>{
      const m = MATERI.find(x=> x.id===bm.id && x.babId===bm.babId);
      if(!m) return;
      const card = document.createElement('div'); card.className='card';
      card.innerHTML = '<h3>'+esc(m.judul)+'</h3><p>Bab: '+esc((BAB.find(x=>x.id===m.babId)||{nama:'-'}).nama)+'</p><div style=\"margin-top:8px\"><button class=\"open\">Buka</button></div>';
      card.querySelector('.open').addEventListener('click', ()=> { const b = BAB.find(x=>x.id===m.babId); const kl = KELAS.find(k=>k.id===b.kelasId) || KELAS[0]; showMateri(m,b,kl); });
      cardsEl.appendChild(card);
    });
  });

}); // end DOMContentLoaded

/* TEMPLATE END */


// --- CSV export for quiz history ---
function downloadCsvOfHistory(){
  const QUIZ_HISTORY_KEY = 'pintarmatika_quiz_history';
  let hist = {};
  try{ hist = JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY) || '{}'); }catch(e){ hist = {}; }
  const rows = [['materi_id','judul','score','correct','total','timestamp']];
  Object.keys(hist).forEach(k=>{
    const v = hist[k];
    rows.push([k, v.judul || '', String(v.score||''), String(v.correct||''), String(v.total||''), v.timestamp || '']);
  });
  // build csv
  const csvContent = rows.map(r=> r.map(c=> '"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n');
  const blob = new Blob([csvContent], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'pintarmatika_quiz_history_'+(new Date().toISOString().slice(0,10))+'.csv';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}
