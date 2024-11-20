# RO-CC

## Prasyarat
- Node.js terinstal (unduh di [nodejs.org](https://nodejs.org))

## Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/Route-Optimization-C242-RO01/RO-CC.git
```

### 2. Instal Dependensi
Jalankan perintah berikut untuk menginstal dependensi pada projek RO-CC

```bash
npm install
```
Penginstalan berhasil ketika folder node_modules sudah muncul pada direktori anda

### 3. Membuat Database
Jalankan perintah berikut untuk membuat database migration: 
```bash
npx sequelize-cli db:migrate
```
```bash
npx sequelize-cli db:seed:all
```

### 4. File .env
buat file baru dengan nama .env
buka file .env.example, copy lalu isinya pastekan ke file .env
isikan nama access token, nama database, username database, host, port,  password, pada file .env

### 5. Run Program
untuk menjalankan api jalankan perintah di terminal, pastikan sudah pernah install nodemon sebelumnya
```bash
npm run start
```



