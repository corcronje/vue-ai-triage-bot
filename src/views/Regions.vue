<template>
    <View>
      <template v-slot:header>
        <h2>Regions</h2>
      </template>
      <p>Where are you now and where have you been?</p>
      <template v-slot:footer>
        <div class="d-flex justify-content-between">
          <router-link to="/otp" class="text-decoration-none">Back</router-link>
          <router-link to="/otp" class="text-decoration-none"
            >Help me answer this</router-link
          >
          <router-link to="/otp" class="text-decoration-none">Next</router-link>
        </div>
      </template>
    </View>
  </template>
  
  <script>
  import View from "../components/View.vue";
  export default {
    components: {
      View,
    },
    name: "Regions",
  };
  </script>
  