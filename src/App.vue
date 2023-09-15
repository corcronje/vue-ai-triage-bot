<template>
  <header class="container-fluid bg-white border-bottom">
    <Navbar />
  </header>
  <main class="flex-grow-1 container-fluid">
    <router-view></router-view>
  </main>
  <footer class="containter-fluid bg-white border-top mt-5 p-4 text-center text-gray-300">
    <span>&copy; Intercare, 2023</span>
  </footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
