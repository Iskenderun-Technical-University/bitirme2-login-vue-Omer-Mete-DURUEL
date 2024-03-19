<template>
  <div id="app">
    <giris v-if="currentComponent === 'giris'" v-on:register="changeComponent"></giris>
    <kayit v-else-if="currentComponent === 'kayit'" v-on:back="changeComponent"></kayit>
  </div>
</template>

<script>
import Giris from './components/giris.vue';
import Kayit from './components/kayit.vue';

export default {
  name: 'App',
  components: {
    Giris,
    Kayit,
  },
  data() {
    return {
      currentComponent: 'giris',
    };
  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>