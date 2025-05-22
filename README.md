# SINSERA - Sistem Informasi Sekolah New Era

SINSERA adalah platform SaaS (Software as a Service) modern dan responsif yang dirancang untuk manajemen sistem informasi sekolah secara komprehensif. Dibangun dengan Next.js dan TypeScript, SINSERA menyediakan solusi terpusat bagi berbagai sekolah (multi-tenant) untuk mengelola data dan operasional akademik secara efisien.

Platform ini bertujuan untuk memudahkan digitalisasi sekolah, mulai dari administrasi siswa, penjadwalan, hingga komunikasi dengan orang tua, semuanya dalam satu sistem yang terintegrasi dan mudah digunakan.

## Mengapa SINSERA?

SINSERA hadir untuk menjawab tantangan administrasi sekolah di era digital, menawarkan:
- **Manajemen Terpusat**: Kelola beberapa cabang atau sekolah dalam satu dasbor (arsitektur multi-tenant).
- **Efisiensi Operasional**: Kurangi pekerjaan manual dan tingkatkan produktivitas staf sekolah.
- **Aksesibilitas Data**: Informasi penting dapat diakses kapan saja dan di mana saja.
- **Kolaborasi Lebih Baik**: Memfasilitasi komunikasi antara guru, siswa, dan orang tua.

## Fitur Utama

SINSERA dibangun di atas fondasi template yang solid dengan fitur-fitur modern, ditambah dengan fungsionalitas khusus untuk kebutuhan sekolah:

-   **Next.js Framework**: Performa tinggi dengan Server-Side Rendering (SSR) dan Static Site Generation (SSG) dari Next.js.
-   **Dibangun dengan TypeScript**: Kode yang lebih robust, mudah di-maintain, dan pengembangan yang lebih cepat.
-   **Arsitektur Multi-Tenant**: Mendukung pengelolaan data untuk banyak sekolah secara terisolasi dan aman.
-   **Layout Responsif**: Optimal di semua ukuran layar, dari desktop hingga mobile.
-   **Mode Gelap/Terang (Dark/Light Mode)**: Pilihan tema sesuai preferensi pengguna.
-   **Tema yang Dapat Dikonfigurasi**: Personalisasi warna, layout, dan lainnya.
-   **Arsitektur Berbasis Komponen dengan Tailwind CSS**: Komponen yang siap pakai dan mudah dikustomisasi untuk mempercepat pengembangan.

## Tech Stack

-   **Frontend Framework**: Next.js
-   **Backend Framework**: Express.js
-   **Bahasa**: TypeScript
-   **Styling**: Tailwind CSS
-   **Database**: MySQL
-   **Arsitektur API**: RESTFull API
---

## Instalasi & Setup Lokal

1.  Clone repository ini:
    ```bash
    git clone [URL_REPOSITORY_SINSERA_LU]
    cd sinsera
    ```
2.  Install dependencies:
    ```bash
    npm install
    # atau
    yarn install
    ```
3.  Setup environment variables. Buat file `.env.local` dari `.env.example` dan isi variabel yang dibutuhkan.
    ```bash
    cp .env.example .env.local
    ```
    Contoh variabel:
    ```env
    NEXT_PUBLIC_API_URL=...
    DATABASE_URL=...
    ```
4.  Jalankan development server:
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
5.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.


## Panduan & Dokumentasi

-   **Dokumentasi SINSERA**: (Coming Soon)
-   **Dokumentasi Template Asli**: Untuk panduan mengenai fitur dasar dari template yang digunakan (seperti kustomisasi tema, komponen UI dasar), Anda dapat merujuk ke [Dokumentasi Online Template Ecme](https://ecme-react.themenate.net/guide/documentation/introduction).

---