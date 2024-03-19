const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint to handle registration
app.post('/register', (req, res) => {
  const userData = req.body; // Vue.js'den gelen kullanıcı verileri
  saveUserData(userData);
  res.send('Kayıt başarıyla tamamlandı');
});

// Fonksiyon: Kullanıcı verilerini JSON dosyasına kaydetme
function saveUserData(userData) {
  // Örnek dosya yolu
  const filePath = './user_data.json';
  
  // Dosyayı oku ve verileri bir diziye yükle
  let data = [];
  try {
    const fileContent = fs.readFileSync(filePath);
    data = JSON.parse(fileContent);
  } catch (error) {
    console.error("Dosya okunurken bir hata oluştu:", error);
  }

  // Yeni kullanıcı verilerini ekle
  data.push(userData);

  // Dosyaya verileri yaz
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Kullanıcı verileri dosyaya kaydedildi.");
  } catch (error) {
    console.error("Dosyaya yazılırken bir hata oluştu:", error);
  }
}

// Server başlat
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor. Port: ${PORT}`);
});