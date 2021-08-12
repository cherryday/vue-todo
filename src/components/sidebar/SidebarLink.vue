<template>
  <router-link
    :to="to"
    exact
    class="sidebar-link"
    active-class="sidebar-link--active"
  >
    <div class="sidebar-link__prepend">
      <slot name="prepend"></slot>
    </div>

    <div class="sidebar-link__text">
      <slot name="text"></slot>
    </div>

    <button
      v-if="remove"
      class="sidebar-link__button"
      @click.prevent.stop="$emit('remove')"
    >
      <IconCross/>
    </button>
  </router-link>
</template>

<script>
import IconCross from '@/components/icons/IconCross'

export default {
  name: 'sidebar-link',
  components: { IconCross },
  props: {
    to: {
      type: String,
      required: true
    },
    remove: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-link {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: $animation-time;
  text-decoration: none;

  &--active {
    box-shadow: 0px 2px 10px rgba($color-black, 0.05);
    background: $color-white;
  }

  &:visited {
    color: $color-black;
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
