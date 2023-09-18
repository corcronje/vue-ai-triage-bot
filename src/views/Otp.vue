<template>
  <View>
    <template v-slot:header>
      <h2>Enter OTP</h2>
    </template>
    <form @submit.prevent="onSubmit" method="POST">
      <div class="mb-3">
        <label for="email" class="visually-hidden">OTP</label>
        <input
          v-model="challengeCode"
          type="number"
          class="form-control"
          id="challengeCode"
          name="challengeCode"
          placeholder="1234"
        />
      </div>
      <button type="submit" class="btn btn-secondary text-primary w-100">
        Verify OTP
      </button>
    </form>
    <div class="p-3 text-center">
      <a href="#" class="text-decoration-none">Didn't receive an OTP?</a>
    </div>
    <template v-slot:footer>
      <div class="d-flex justify-content-between">
        <router-link to="/otp" class="text-decoration-none">Back</router-link>
        <router-link to="/otp" class="text-decoration-none">
          <font-awesome-icon icon="fa-solid fa-user" />
          Help me answer this OTP
        </router-link>
        <router-link to="/otp" class="text-decoration-none">Next</router-link>
      </div>
    </template>
  </View>
</template>

<script>
import View from "../components/View.vue";
import Intercare from "../services/Intercare";
import { useTriageStore } from "../store/triage";

export default {
  components: {
    View,
  },
  data() {
    return {
      challengeCode: "",
    };
  },
  props: ["id"],
  name: "Otp",
  methods: {
    onSubmit() {
      Intercare.validateOtp(this.id, this.challengeCode).then((response) => {
        if(response) {
          useTriageStore().setOtpValidated(true);
          return this.$router.push("/symptoms");
        }
        return alert("Invalid OTP");
      });
    },
  },
};
</script>
