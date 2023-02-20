<template>
  <nav class="navbar navbar-light bg-info" v-if="isLogin">
    <a class="navbar-brand" href="/blogs" style="margin-left: 20px;">
      <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Blogs
    </a>
    <button class="btn btn-primary" style="margin-right: 20px;" @click="logout()">Logout</button>
  </nav>

  <router-view />

  <footer class="bg-light text-center text-lg-start" v-if="isLogin">
    <div class="text-center p-3 bg-info">
      TaiGH - Learning VueJS
    </div>
  </footer>
</template>

<script>
import BlogComp from '@/components/BlogComp.vue'
import BlogDetailComp from '@/components/BlogDetailComp.vue'
import { mapState } from 'vuex';

export default {
  component: {
    BlogComp,
    BlogDetailComp
  },

  methods: {
    logout() {
      localStorage.removeItem('auth');
      this.$router.push('/login');
    }
  },

  computed: mapState([
    'isLogin'
  ]),
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
</style>
