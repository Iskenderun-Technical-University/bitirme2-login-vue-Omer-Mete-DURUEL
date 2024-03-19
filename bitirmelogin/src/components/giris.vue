<template>
  <div class="container">
    <img class="logo" src="../assets/giris.png" />
    <h1>GİRİŞ YAP</h1>
    <div class="form-container">
      <input type="text" placeholder="KULLANICI ADI GİRİNİZ" v-model="username" />
      <input type="password" placeholder="ŞİFRE GİRİNİZ" v-model="password" />
      <input type="text" id="captchaCode" placeholder="CAPTCHA KODU GİRİNİZ" v-model="captchaCode" required>
      <img class="captcha-image" :src="captchaImage" @click="refreshCaptcha" />
      <button @click="login">GİRİŞ</button>
      <button @click="forgotPassword">Şifremi Unuttum</button>
      <button @click="changeComponent('kayit')">Kayıt Ol</button>
      <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </div>
    <div class="modal" v-if="isForgotPasswordModalOpen">
      <div class="modal-content">
        <span class="close" @click="isForgotPasswordModalOpen = false">&times;</span>
        <h2>Şifremi Unuttum</h2>
        <input type="text" placeholder="E-posta Adresi" v-model="forgotPasswordEmail" />
        <button @click="sendResetLink">Gönder</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "giris",
  data() {
    return {
      username: "",
      password: "",
      captchaCode: "",
      captchaImage: "",
      errorMessage: '',
      userData: null, // Bu, user_data.json dosyasının içeriğini saklamak için kullanılacak
      isForgotPasswordModalOpen: false,
      forgotPasswordEmail: ""
    };
  },
  mounted() {
    this.refreshCaptcha();
    this.loadUserData(); // user_data.json dosyasını yükleyelim
  },
  methods: {
    async loadUserData() {
      try {
        const response = await fetch('../user_data.json');
        if (!response.ok) {
          throw new Error('User data not found');
        }
        this.userData = await response.json();
      } catch (error) {
        console.error('Error loading user data:', error.message);
      }
    },
    
    login() {
  if (this.validateInput()) {
    if (this.captchaCode.toLowerCase() === this.expectedCaptcha.toLowerCase()) {
      const user = this.userData.users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        console.log("Giriş başarılı");
        this.errorMessage = ""; // Hata mesajını temizle
        alert("Başarılı şekilde giriş yapıldı!"); // Başarılı giriş uyarısı
      } else {
        this.errorMessage = "Kullanıcı adı veya şifre hatalı!";
      }
    } else {
      this.errorMessage = "Captcha doğrulaması başarısız!";
    }
  } else {
    console.log("Geçersiz giriş bilgileri");
  }
},
forgotPassword() {
  const email = prompt("Lütfen e-posta adresinizi girin:");
  if (email) {
    console.log("E-posta adresi:", email);
    alert("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi!");
  } else {
    console.log("E-posta adresi girilmedi veya işlem iptal edildi.");
  }
},

    validateInput() {
      return this.username.trim() !== "" && this.password.trim() !== "";
    },
    refreshCaptcha() {
      const captchaCode = Math.random().toString(36).slice(2, 8);
      this.expectedCaptcha = captchaCode;
      this.captchaImage = `https://via.placeholder.com/150x50.png?text=${captchaCode}`;
    },
    
    changeComponent(component) {
      this.$emit('register', component);
    }
    
  }
  
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logo {
  width: 120px;
  height: 120px;
}

h1 {
  margin-top: 2rem;
  font-size: 2rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

input[type="text"],
input[type="password"] {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ff1e00;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #b33300;
}

.captcha-image {
  cursor: pointer;
}
</style>
