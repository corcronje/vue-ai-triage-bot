<template>
  <View>
    <template v-slot:header>
      <h2>Add your symptoms</h2>
    </template>
    <p>Add as many symptoms as you can for the most accurate results.</p>
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label for="Search" class="visually-hidden">Search</label>
          <input
            type="search"
            class="form-control"
            id="Search"
            name="Search"
            placeholder="Search for a symptom, eg. headache"
          />
        </div>
      </div>
      <div class="col">
        <img src="../assets/icons/male.svg" alt="Male">
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
  name: "Symptoms",
};
</script>
