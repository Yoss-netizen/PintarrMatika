# 📘 PintarMatika Modern + Kuis v2

**PintarMatika Modern** adalah aplikasi web pembelajaran matematika berbasis **frontend murni (tanpa backend)**.  
Aplikasi ini dirancang agar **dapat berjalan offline** atau dihosting di **GitHub Pages / Netlify**, dengan tampilan modern dan fitur interaktif.

---

## ✨ Fitur Utama

### 🎓 Navigasi Belajar
- Pilih **jenjang → kelas → bab → materi**  
- Setiap materi memiliki tombol **"Mulai Kuis"** untuk latihan interaktif  

### 🧮 Kuis Interaktif Otomatis
- Soal dibuat otomatis dari teks materi  
- 5 soal pilihan ganda per kuis  
- Hasil langsung ditampilkan beserta tabel jawaban benar/salah  

### ⏱️ Timer Kuis
- Durasi default **5 menit per kuis**  
- Countdown tampil di header  
- Saat waktu habis, kuis otomatis diselesaikan  

### 👤 Nama Pengguna Lokal
- Diminta sekali saat pertama kali membuka web  
- Disimpan di **LocalStorage**  
- Ditampilkan di header dan digunakan di hasil kuis  

### 📑 Riwayat & Ekspor CSV
- Semua hasil kuis disimpan **lokal di browser**  
- Dapat dilihat kembali lewat menu **Riwayat**  
- Tersedia tombol **"Ekspor CSV"** untuk mengunduh hasil kuis  

### ⭐ Bookmark Materi
- Tandai materi penting untuk dibuka kembali dengan cepat  

 

---

## 🧱 Struktur Folder

matika_modern_site_quiz_v2/
│
├── index.html # Struktur halaman utama
├── style.css # Desain tampilan web
├── script.js # Logika interaktif (kuis, timer, bookmark, dsb)
├── README.md # File panduan ini
│
├── data/
│ ├── kelas.data.js # Data daftar kelas
│ ├── bab.data.js # Data daftar bab
│ └── materi.data.js # Data konten materi
│
└── assets/ # Folder untuk ikon / gambar (opsional)

yaml
Copy code

---

## ⚙️ Cara Menjalankan

### 🖥️ Jalankan Secara Lokal
1. Ekstrak file ZIP hasil build.  
2. Buka folder hasil ekstrak.  
3. Jalankan server lokal (opsional):
   ```bash
   python -m http.server
Buka browser dan akses:

arduino
Copy code
http://localhost:8000
Atau cukup klik dua kali index.html untuk langsung menjalankan.

🌐 Hosting di GitHub Pages / Netlify
Buat repository baru di GitHub.

Upload seluruh isi folder matika_modern_site_quiz_v2/.

Aktifkan GitHub Pages di menu
Settings → Pages → Source → main / root.

Selesai 🎉 Web kamu bisa diakses online.

🧩 Penggunaan
Pilih jenjang & kelas di panel kiri.

Pilih bab dan buka materi.

Klik “Mulai Kuis” untuk latihan.

Jawab 5 soal → lihat skor dan tabel hasil.

Cek semua hasil di menu Riwayat, lalu klik “Ekspor CSV” untuk mengunduh.

🧰 Teknologi yang Digunakan
HTML5

CSS3 (Vanilla)

JavaScript (Vanilla)

LocalStorage API

⚡ Tanpa framework dan tanpa backend.

🧑‍💻 Dikembangkan oleh
Yogi Saputro
📅 Tahun: 2025
🎯 Tujuan: Membuat pembelajaran matematika menjadi lebih mudah, interaktif, dan menyenangkan.

📝 Catatan Tambahan
Semua data (skor, nama, bookmark) disimpan lokal di browser pengguna.

Tidak diperlukan koneksi internet setelah file dimuat.

Jika ingin menambah materi, cukup edit file materi.data.js.

Cocok dijalankan di GitHub Pages, Netlify, atau lokal (offline).

📸 Tampilan (Preview)
(Opsional — tambahkan screenshot jika ada)

⚖️ Lisensi
Proyek ini bebas digunakan untuk keperluan edukatif dan non-komersial.
Silakan modifikasi dan kembangkan sesuai kebutuhan sekolah atau pribadi.

💡 PintarMatika Modern — belajar matematika kini lebih interaktif, mudah, dan menyenangkan!

