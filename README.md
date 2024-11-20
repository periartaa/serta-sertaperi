# RO-CC

Pastikan anda memiliki Node.js terinstal di sistem anda. Unduh dari 
https://nodejs.org  dan ikuti petunjuk instalasinya.
Salin repository ini ke dalam folder lokal anda.
Buka terminal dan arahkan ke direktori proyek.
Jalankan perintah berikut untuk menginstal dependensi : 
npm install
Jalankan perintah berikut untuk membuat database migration: 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all 
Penginstalan berhasil ketika folder node_modules sudah muncul pada direktori anda
buat file baru dengan nama .env
buka file .env.example, copy lalu isinya pastekan ke file .env
isikan nama access token, nama database, username database, host, port,  password, pada file .env
untuk menjalankan api jalankan perintah npm run start di terminal, pastikan sudah pernah install nodemon sebelumnya

