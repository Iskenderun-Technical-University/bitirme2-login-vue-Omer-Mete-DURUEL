<template>
  <div id="app">
    
    <Searchbox />
    <Menu />
    <ArticleUpload/>
     
  </div>
</template>

<script>
import Menu from './Menu.vue';
import Searchbox from './Searchbox.vue';
//import CardContainer from './CardContainer.vue'; // CardContainer bileşeni dahil edildi
import ArticleUpload from './ArticleUpload.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Searchbox,
   
    ArticleUpload,
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>