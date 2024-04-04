<template>
  
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <div>
      <h1>
        Admin Panel
      </h1>
    </div>
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
      @click="handleMenuItemClick(item)"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
import ArticleUpload from './ArticleUpload.vue'

export default {
  name: 'Home',
  data() {
    return {
      smallMenu: false,
      menuTree: [
        {
          label: "Home",
          icon: "home",
          children: [
            {
              label: "level 1.1",
              children: [
                {
                  label: "level 1.1.1",
                  children: [
                    {
                      label: "level 1.1.1.1"
                    }
                  ]
                }
              ]
            },
            {
              label: "level 1.2"
            }
          ]
        },
        {
          label: "Dashboard",
          icon: "dashboard",
          children: [
            {
              label: "level 2.1",
            },
            {
              label: "level 2.2"
            },
            {
              label: "level 2.3"
            }
          ]
        },
        {
          label: "Article Application",
          icon: "group",
          
        }
      ]
    };
  },
  components: {
    MenuItem,
    ArticleUpload,
  },
  methods: {
    handleMenuItemClick(item) {
      if (item.route) {
        this.$router.push(item.route);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 240px;
  left: 0;
  top: 0;
  border-right: 5px solid #363636;
  transition: all .3s ease;
  overflow: auto;
  i {
    position: fixed;
    left: 250px;
    font-size: 25px;
    top: 15px;
    user-select: none;
    cursor: pointer;
    transition: all .3s ease;
  }
  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 50px;
    i {
      left: 20px;
    }
  }
  h1 {
    color: #fffb00;
    text-align: center;
    left: -5;
    font-size: 2rem;
  }
}
</style>
