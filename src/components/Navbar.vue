<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo" height="50" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link to="/" class="nav-link">Introduction</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/otp" class="nav-link">OTP</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/patient" class="nav-link">Patient</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/symptoms" class="nav-link">Symptoms</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/regions" class="nav-link">Regions</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/interview" class="nav-link"
              >Interview</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/results" class="nav-link">Results</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
