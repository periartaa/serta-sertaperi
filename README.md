# RO-CC

## Prasyarat
- Node.js terinstal (unduh di [nodejs.org](https://nodejs.org))

## Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/Route-Optimization-C242-RO01/RO-CC.git
cd RO-CC

### 2. Instal Dependensi
Jalankan perintah berikut untuk menginstal dependensi
```bash
npm install

Jalankan perintah berikut untuk membuat database migration: 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

Penginstalan berhasil ketika folder node_modules sudah muncul pada direktori anda
buat file baru dengan nama .env
buka file .env.example, copy lalu isinya pastekan ke file .env
isikan nama access token, nama database, username database, host, port,  password, pada file .env
untuk menjalankan api jalankan perintah npm run start di terminal, pastikan sudah pernah install nodemon sebelumnya



