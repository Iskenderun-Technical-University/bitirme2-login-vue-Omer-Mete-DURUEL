<template>
  <div class="card-container">
    <Card header="Ürünler" link="/  ">
      <img src="https://via.placeholder.com/150" alt="Ürünler Grafik">
    </Card>
    <Card header="Siparişler" link="/orders">
      <img src="https://via.placeholder.com/150" alt="Siparişler Grafik">
    </Card>
    <Card header="Müşteriler" link="/customers">
      <img src="https://via.placeholder.com/150" alt="Müşteriler Grafik">
    </Card>
    
  </div>
</template>

<script>
import Card from './Card.vue'; // Card bileşeni buraya dahil ediliyor

export default {
  name: 'CardContainer',
  components: {
    Card
  }
};
</script>

  
  <style scoped>
  .card-container {
    width: 65%;
    margin: 50px auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 70px;
  }
  h2 {
    font-size: 24px;
    color: rgb(66, 0, 128);
  }
  
  .chart img {
    width: 45%;
    max-width: 200px;
  }
  
  
  </style>
  