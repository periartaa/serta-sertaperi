# RO-CC


<a> 1. Pastikan anda memiliki Node.js terinstal di sistem anda. Unduh dari 
#https://nodejs.org  
<a> dan ikuti petunjuk instalasinya.
<a> 2. Salin repository ini ke dalam folder lokal anda.
<a> 3. Buka terminal dan arahkan ke direktori proyek.
<a> 4. Jalankan perintah berikut untuk menginstal dependensi : 
 # npm install
<a> 5. Jalankan perintah berikut untuk membuat database migration: 
# npx sequelize-cli db:migrate
# npx sequelize-cli db:seed:all 
<a> 6. Penginstalan berhasil ketika folder node_modules sudah muncul pada direktori anda
<a> 7. buat file baru dengan nama .env
<a> 8. buka file .env.example, copy lalu isinya pastekan ke file .env
<a> 9. isikan nama access token, nama database, username database, host, port,  password, pada file .env
<a> 10. untuk menjalankan api jalankan perintah npm run start di terminal, pastikan sudah pernah install nodemon sebelumnya

