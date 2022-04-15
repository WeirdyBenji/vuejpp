

<template>
  <v-app>
    <Navbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import Navbar from "./components/Navbar"

export default {
  components: { Footer, Navbar },
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: 'Sign Up', path: '/signup', icon: 'face' },
      ],
    };
  },
};
</script>
<style>
</style>
