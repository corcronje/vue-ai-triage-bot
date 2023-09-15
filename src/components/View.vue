<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-header bg-white px-5">
          <slot name="header"></slot>
        </div>
        <div class="card-body px-5" style="min-height: 35rem">
          <slot></slot>
        </div>
        <div class="card-footer bg-white px-5 p-3">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "View",
};
</script>
