<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-10">
      <div class="card">
        <div class="card-body" style="min-height: 40rem">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2>Online Symptom Checker</h2>
              <p>
                Answer a few simple questions to find the possible cause and
                best treatment option for your symptoms.
              </p>
              <img
                src="../assets/introduction.png"
                class="img-fluid"
                alt="Introduction"
              />
            </div>
            <div class="col-12 col-md-6">
              <h2>Confirm your details</h2>
              <p>
                Confirm your details, receive and enter your OTP and start your
                check-up.
              </p>
              <form @submit.prevent="onSubmit()" method="POST">
                <div class="mb-3">
                  <label for="email" class="visually-hidden">Email</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="mobile" class="visually-hidden">Mobile</label>
                  <input
                    v-model="mobile"
                    type="phone"
                    class="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="0821234567"
                  />
                </div>
                <h5>How would you like to receive your OTP?</h5>
                <div class="form-check">
                  <input
                    v-model="deliveryChannel"
                    class="form-check-input"
                    type="radio"
                    name="deliveryChannel"
                    id="deliveryChannelEmail"
                    value="email"
                  />
                  <label class="form-check-label" for="deliveryChannelEmail">
                    Email Address
                  </label>
                </div>
                <div class="form-check mb-5">
                  <input
                    v-model="deliveryChannel"
                    class="form-check-input"
                    type="radio"
                    name="deliveryChannel"
                    id="deliveryChannelMobile"
                    value="mobile"
                  />
                  <label class="form-check-label" for="deliveryChannelMobile">
                    Cellphone Number
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-secondary text-primary w-100"
                >
                  Send OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intercare from "@/services/intercare";
import { useTriageStore } from "@/store/triage";
export default {
  name: "Introduction",
  data() {
    return {
      email: "",
      mobile: "",
      deliveryChannel: "email",
    };
  },
  methods: {
    onSubmit() {
      Intercare.sendOtp(this.email, "email")
        .then((result) => {
          const store = useTriageStore();
          store.setPatient({
            email: this.email,
            mobile: this.mobile,
          });
          store.setOtp({
            id: result,
            deliveryChannel: this.deliveryChannel,
            validated: false
          });
          this.$router.push("/otp/" + result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
