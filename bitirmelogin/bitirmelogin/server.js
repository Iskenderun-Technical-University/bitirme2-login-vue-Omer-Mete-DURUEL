const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.post('/register', (req, res) => {
  const userData = req.body; 
  saveUserData(userData);
  res.send('Kayıt başarıyla tamamlandı');
});


function saveUserData(userData) {
  
  const filePath = './user_data.json';
  
 
  let data = [];
  try {
    const fileContent = fs.readFileSync(filePath);
    data = JSON.parse(fileContent);
  } catch (error) {
    console.error("Dosya okunurken bir hata oluştu:", error);
  }


  data.push(userData);


  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Kullanıcı verileri dosyaya kaydedildi.");
  } catch (error) {
    console.error("Dosyaya yazılırken bir hata oluştu:", error);
  }
}


app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor. Port: ${PORT}`);
});