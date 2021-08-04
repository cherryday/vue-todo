<template>
  <button
    class="ui-button"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    color: {
      type: String,
      default: 'green'
    }
  },
  computed: {
    classes () {
      return {
        'ui-button--green': this.color === 'green'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 10px 0;
  width: 100%;
  border-radius: 4px;

  &--green {
    color: $color-white;
    background-color: $color-green;
  }
}
</style>
