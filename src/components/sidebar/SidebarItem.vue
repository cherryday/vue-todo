<template>
  <div
    class="item"
    :class="classes"
    @click="$emit('click')"
  >
    <div class="prepend">
      <slot name="prepend"></slot>
    </div>

    <div class="text">
      <slot name="text"></slot>
    </div>

    <button
      v-if="remove"
      class="button"
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
        'item--active': this.active
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$color-grey: #E3E3E3;

.item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: .3s;

  &--active {
    box-shadow: 0px 2px 10px rgba($color-black, 0.05);
    background: $color-white;
  }

  &:hover {
    box-shadow: 0px 2px 10px rgba($color-black, 0.05);
    background: $color-white;
  }
}

.prepend {
  margin-right: 10px;
}

.text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 6px;
}

.button {
  margin-left: auto;

  svg {
    transition: .3s;
    color: $color-grey;
  }

  &:hover {
    svg {
      color: $color-black;
    }
  }
}
</style>
