<template>
  <div class="container">
    <img class="logo" src="../assets/giris.png" />
    <h1>KAYIT OL</h1>
    <div class="form-container">
      <input type="text" placeholder="ADINIZ" v-model="firstName" />
      <input type="text" placeholder="SOYADINIZ" v-model="lastName" />
      <input type="text" placeholder="KULLANICI ADI" v-model="username" />
      <input type="email" placeholder="E-POSTA ADRESİ" v-model="email" />
      <input type="password" placeholder="ŞİFRE BELİRLEYİN" v-model="password" />
      <button @click="register">KAYIT OL</button>
      <button @click="changeComponent('giris')">Giriş Yap</button>
      <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "kayit",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    async register() {
      if (this.validateInput()) {
        try {
          const response = await axios.post('/register', {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            password: this.password
          });
          console.log(response.data);
          
        } catch (error) {
          console.error('Kayıt işlemi başarısız:', error.response.data);
          this.errorMessage = "Kayıt işlemi başarısız oldu";
        }
      } else {
        this.errorMessage = "Lütfen tüm alanları doldurun";
      }
    },
    validateInput() {
      if (this.firstName.trim() === "" || this.lastName.trim() === "" || this.username.trim() === "" || this.email.trim() === "" || this.password.trim() === "") {
        return false;
      }
      return true;
    },
    changeComponent(component) {
      this.$emit('back', component);
    },
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
  input[type="password"],
  input[type="email"] {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .button-container {
  text-align: center; 
}

  button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ff1e00;
  color: #fff;
  border: none;
  cursor: pointer;
  display: inline-block; 
}

  button:hover {
    background-color: #b33300;
  }
</style>
