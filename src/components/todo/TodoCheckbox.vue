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

      Task
    </label>
  </div>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck'

export default {
  name: 'todo-checkbox',
  components: {
    IconCheck
  },
  props: {
    item: {
      type: Object,
      // required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-checkbox {
  &__label {
    display: flex;
    align-items: center;
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
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    color: $color-white;
    transition: .3s;
  }
}
</style>
