<template>
  <View>
    <template v-slot:header>
      <h2>Enter OTP</h2>
    </template>
    <form action="#">
      <div class="mb-3">
        <label for="email" class="visually-hidden">OTP</label>
        <input
          type="number"
          class="form-control"
          id="otp"
          name="otp"
          placeholder="1234"
        />
      </div>
      <button type="submit" class="btn btn-secondary text-primary w-100">
        Submit
      </button>
    </form>
    <div class="p-3 text-center">
      <a href="#" class="text-decoration-none">Didn't receive an OTP?</a>
    </div>
    <template v-slot:footer>
      <div class="d-flex justify-content-between">
        <router-link to="/otp" class="text-decoration-none">Back</router-link>
        <router-link to="/otp" class="text-decoration-none">Help me answer this</router-link>
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
  name: "Otp",
};
</script>
