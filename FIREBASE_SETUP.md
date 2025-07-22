# Setup Firebase untuk Autentikasi

## Langkah-langkah Setup Firebase:

### 1. Buat Proyek Firebase
1. Kunjungi [Firebase Console](https://console.firebase.google.com/)
2. Klik "Add project" atau "Tambah proyek"
3. Masukkan nama proyek Anda
4. Ikuti langkah-langkah setup (bisa skip Google Analytics jika tidak diperlukan)

### 2. Aktifkan Authentication
1. Di Firebase Console, pilih proyek Anda
2. Di sidebar kiri, klik "Authentication"
3. Klik "Get started" atau "Mulai"
4. Di tab "Sign-in method", aktifkan "Email/Password"
5. Klik "Save"

### 3. Dapatkan Konfigurasi Firebase
1. Di Firebase Console, klik ikon gear (⚙️) di sidebar kiri
2. Pilih "Project settings"
3. Scroll ke bawah ke bagian "Your apps"
4. Klik ikon web (</>) untuk menambahkan web app
5. Masukkan nama app (misal: "vite-vue-app")
6. Klik "Register app"
7. Copy konfigurasi yang muncul

### 4. Update Konfigurasi di Kode
1. Buka file `src/firebase.js`
2. Ganti nilai-nilai berikut dengan konfigurasi dari Firebase Console:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

### 5. Buat User untuk Testing
1. Di Firebase Console, pilih "Authentication"
2. Klik tab "Users"
3. Klik "Add user"
4. Masukkan email dan password
5. Klik "Add user"

### 6. Jalankan Aplikasi
```bash
npm run dev
```

## Fitur yang Tersedia:
- ✅ Halaman login dengan email dan password
- ✅ Halaman dashboard yang menampilkan nama user
- ✅ Sistem autentikasi yang otomatis redirect
- ✅ Tombol logout
- ✅ Loading state saat proses autentikasi
- ✅ Error handling untuk login gagal

## Catatan:
- Pastikan domain Anda sudah ditambahkan ke "Authorized domains" di Firebase Console jika deploy ke production
- Untuk development, `localhost` sudah otomatis diizinkan 