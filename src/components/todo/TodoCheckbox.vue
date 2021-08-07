<template>
  <div class="todo-checkbox">
    <label class="todo-checkbox__label">
      <input
        type="checkbox"
        class="todo-checkbox__input"
      >

      <div class="todo-checkbox__box">
        <IconCheck class="todo-checkbox__icon"/>
      </div>

      <span class="todo-checkbox__text">
        Task
      </span>

      <button
        v-if="item.completed"
        class="todo-checkbox__close"
        @click="$emit('remove')"
      >
        <IconCross/>
      </button>
    </label>
  </div>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck'
import IconCross from '@/components/icons/IconCross'

export default {
  name: 'todo-checkbox',
  components: {
    IconCheck,
    IconCross
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-checkbox {
  display: flex;
  align-items: center;

  &__label {
    display: flex;
    align-items: center;
    flex-grow: 1;
    cursor: pointer;

    &:hover {
      .todo-checkbox__box {
        background-color: $color-grey-200;
        border-color: $color-grey-200;
      }

      .todo-checkbox__icon {
        color: #B2B2B2;
        opacity: 1;
      }

      .todo-checkbox__close {
        opacity: 1;
      }
    }
  }

  &__input {
    position: absolute;
    appearance: none;

    &:checked + .todo-checkbox__box {
      background-color: $color-green;
      border-color: $color-green;

      .todo-checkbox__icon {
        color: $color-white;
      }
    }
  }

  &__box {
    width: 20px;
    height: 20px;
    border: 2px solid #E8E8E8;
    border-radius: 50%;
    margin-right: 14px;
    transition: $animation-time;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    color: $color-white;
    transition: $animation-time;
  }

  &__close {
    opacity: 0;
    color: $color-grey-250;
    margin-left: auto;
    transition: $animation-time;

    &:hover {
      color: $color-black;
    }
  }
}
</style>
