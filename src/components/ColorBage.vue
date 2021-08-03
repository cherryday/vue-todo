<template>
  <div
    class="color-bage"
    :style="styles"
    :class="classes"
    @click="$emit('click', $event)"
  ></div>
</template>

<script>
export default {
  name: 'color-bage',
  props: {
    color: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 10
    },
    active: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles () {
      return {
        backgroundColor: this.color,
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },
    classes () {
      return {
        'color-bage--active': this.active,
        'color-bage--selected': this.selected
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.color-bage {
  border-radius: 50%;

  &--selected {
    cursor: pointer;
  }
  &--active {
    border: 2px solid #525252;
  }
}
</style>
