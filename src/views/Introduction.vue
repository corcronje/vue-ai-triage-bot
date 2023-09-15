<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-10">
      <div class="card">
        <div class="card-body" style="min-height: 40rem;">
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
              <form class="">
                <div class="mb-3">
                  <label for="email" class="visually-hidden">Email</label>
                  <input
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
                    type="email"
                    class="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="0821234567"
                  />
                </div>
                <h5>How would you like to receive your OTP?</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Email Address
                  </label>
                </div>
                <div class="form-check mb-5">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
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
export default {
  name: "Introduction",
};
</script>
