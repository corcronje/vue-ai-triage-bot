<template>
  <View>
    <template v-slot:header>
      <h2>Who is the checkup for?</h2>
    </template>
    <div class="row">
      <div class="col">
        <a
          href="#"
          class="text-center text-decoration-none p-3 border rounded d-flex flex-column justify-content-center"
        >
          <img src="../assets/icons/myself.svg" alt="Myself" height="72" />
          <span class="mt-3">Myself</span>
        </a>
      </div>
      <div class="col">
        <a
          href="#"
          class="text-center text-decoration-none p-3 border rounded d-flex flex-column justify-content-center"
        >
          <img
            src="../assets/icons/someone-else.svg"
            alt="Myself"
            height="72"
          />
          <span class="mt-3">Someone else</span>
        </a>
      </div>
    </div>
    <template v-slot:footer>
      <div class="d-flex justify-content-between">
        <router-link to="/otp" class="btn btn-link text-decoration-none">Back</router-link>
        <router-link to="/otp" class="btn btn-link text-decoration-none">
          <i class="icon icon-info"></i> Help me answer this
        </router-link>
        <router-link to="/otp" class="btn btn-secondary text-primary">Next</router-link>
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
  data() {
    return {
      patient: {
        name: "John Doe",
      },
    };
  },
  name: "Patient",
};
</script>
