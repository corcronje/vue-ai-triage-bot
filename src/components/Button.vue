<template>
  <router-link :to="to" :class="myClass">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "BackIcon",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    title: {
      type: String,
      default: "Submit",
    },
    to: {
      type: String,
      default: "/",
    },
  },
  computed: {
    myClass() {
      return ["btn", `btn-${this.variant}`];
    },
  },
};
</script>
