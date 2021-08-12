<template>
  <div class="spinner-loader"></div>
</template>

<script>
export default {
  name: 'spinner-loader'
}
</script>

<style lang="scss" scoped>
.spinner-loader {
  border: 10px solid $color-grey-200;
  border-top: 10px solid $color-black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
