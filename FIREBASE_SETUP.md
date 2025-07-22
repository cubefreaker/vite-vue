# Setup Firebase untuk Autentikasi Google

## Langkah-langkah Setup Firebase:

### 1. Buat Proyek Firebase
1. Kunjungi [Firebase Console](https://console.firebase.google.com/)
2. Klik "Add project" atau "Tambah proyek"
3. Masukkan nama proyek Anda
4. Ikuti langkah-langkah setup (bisa skip Google Analytics jika tidak diperlukan)

### 2. Aktifkan Google Authentication
1. Di Firebase Console, pilih proyek Anda
2. Di sidebar kiri, klik "Authentication"
3. Klik "Get started" atau "Mulai"
4. Di tab "Sign-in method", aktifkan "Google"
5. Masukkan email support (opsional)
6. Klik "Save"

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

### 5. Konfigurasi Domain yang Diizinkan
1. Di Firebase Console, pilih "Authentication"
2. Klik tab "Settings"
3. Scroll ke bagian "Authorized domains"
4. Pastikan domain berikut sudah ada:
   - `localhost` (untuk development)
   - Domain production Anda (jika sudah ada)

### 6. Jalankan Aplikasi
```bash
npm run dev
```

## Fitur yang Tersedia:
- ✅ Halaman login dengan Google authentication
- ✅ Halaman dashboard yang menampilkan nama user
- ✅ Sistem autentikasi yang otomatis redirect
- ✅ Tombol logout
- ✅ Loading state saat proses autentikasi
- ✅ Error handling untuk login gagal
- ✅ UI/UX yang modern dan responsif

## Keuntungan Google Authentication:
- 🔐 **Lebih Aman**: Tidak perlu menyimpan password
- 🚀 **Lebih Cepat**: One-click login
- 📱 **User-Friendly**: Familiar dengan pengguna
- 🛡️ **Two-Factor Auth**: Otomatis jika user mengaktifkan 2FA di Google
- 📊 **Analytics**: Bisa melihat data login di Firebase Console

## Catatan Penting:
- **Popup Blocker**: Pastikan browser mengizinkan popup untuk domain Anda
- **HTTPS Required**: Untuk production, domain harus menggunakan HTTPS
- **Google Account**: User harus memiliki akun Google untuk login
- **Testing**: Bisa test dengan akun Google pribadi atau buat akun test

## Troubleshooting:
- **Popup ditutup**: User menutup popup sebelum login selesai
- **Popup diblokir**: Browser memblokir popup, izinkan popup untuk situs ini
- **Domain tidak diizinkan**: Tambahkan domain ke "Authorized domains" di Firebase Console 