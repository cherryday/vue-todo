<template>
  <div
    class="sidebar-item"
    :class="classes"
    @click="$emit('click')"
  >
    <div class="sidebar-item__prepend">
      <slot name="prepend"></slot>
    </div>

    <div class="sidebar-item__text">
      <slot name="text"></slot>
    </div>

    <button
      v-if="remove"
      class="sidebar-item__button"
      @click.stop="$emit('remove')"
    >
      <IconCross/>
    </button>
  </div>
</template>

<script>
import IconCross from '@/components/icons/IconCross'

export default {
  name: 'sidebar-item',
  components: { IconCross },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    remove: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'sidebar-item--active': this.active
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: $animation-time;

  &--active {
    box-shadow: 0px 2px 10px rgba($color-black, 0.05);
    background: $color-white;
  }

  &:hover {
    box-shadow: 0px 2px 10px rgba($color-black, 0.05);
    background: $color-white;
  }

  &__prepend {
    margin-right: 10px;
  }

  &__text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 6px;
  }

  &__button {
    margin-left: auto;

    svg {
      transition: $animation-time;
      color: $color-grey-250;
    }

    &:hover {
      svg {
        color: $color-black;
      }
    }
  }
}
</style>
