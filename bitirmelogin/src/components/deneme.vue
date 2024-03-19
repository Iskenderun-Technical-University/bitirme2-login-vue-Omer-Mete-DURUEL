<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <label for="securityCode">Security Code:</label>
        <input type="text" id="securityCode" v-model="securityCode" required>
        <div v-if="showSecurityCode">{{ securityCodeValue }}</div>
        <button type="button" @click="generateSecurityCode" v-if="!showSecurityCode">Generate Security Code</button>
        <button type="submit" v-if="showSecurityCode">Login</button>
      </form>
      <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        securityCode: '',
        securityCodeValue: '',
        showSecurityCode: false,
        errorMessage: ''
      };
    },
    methods: {
      login() {
  // Kullanıcı adı ve şifre doğrulaması
    if (this.username.trim() === "" || this.password.trim() === "") {
    this.errorMessage = "Kullanıcı adı ve şifre gereklidir";
    return;
     }

  // Güvenlik kodu doğrulaması
    if (this.securityCode === this.securityCodeValue.toString()) {
    alert("Giriş başarılı!");
     } else {
    this.errorMessage = "Geçersiz giriş bilgileri veya güvenlik kodu";
     }
    }
    }
  };
  </script>
