<template>
  <div class="card">
    <div class="card-header">
      <!-- Başlık prop'u burada kullanılıyor -->
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card-body">
      <slot>Body</slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    header: String, // String tipinde bir header prop'u ekledik
    link: String // String tipinde bir link prop'u ekledik
  }
};
</script>

<style scoped>
.card-container {
  width: 70%; /* Sayfa genişliğinin %70'lik kısmını kaplayacak */
  margin: 50px auto; /* Sayfayı dikey ve yatay olarak ortalamak için */
  display: flex;
  justify-content: center;
}

.card {
  width: 100%; /* Kartın tam genişlikte olmasını sağlar */
  border: 1px solid #ccc;
  border-radius: 20px; /* Köşelerin yuvarlatılması */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hafif bir gölgelendirme */
}

.card-header {
  color: #000;
  font-size: large;
  padding: 30px; /* Başlık alanının iç boşluğu */
  background-color: #fffb00; /* Başlık arkaplan rengi */
  border-top-left-radius: 20px; /* Başlık köşelerinin yuvarlatılması */
  border-top-right-radius: 20px;
}

.card-body {
  padding: 40px; /* İçerik alanının iç boşluğu */
}


</style>