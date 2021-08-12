<template>
  <div class="todo-item">
    <div class="todo-item__header">
      <h1 :style="titleStyles" class="todo-item__title">{{ todo.name }}</h1>
    </div>

    <hr class="todo-item__divider">

    <div class="todo-item__body">
      <TodoCheckbox :item="{ name: 'Test', completed: true }" class="todo-item__checkbox"/>
    </div>

    <div class="todo-item__footer">
      <button class="todo-item__add">
        <IconPlus/>
        Новая задача
      </button>
    </div>

    <TodoAdd/>
  </div>
</template>

<script>
import IconPlus from '../icons/IconPlus'
import TodoCheckbox from './TodoCheckbox'
import TodoAdd from './TodoAdd'

export default {
  name: 'todo-item',
  components: {
    IconPlus,
    TodoCheckbox,
    TodoAdd
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    titleStyles () {
      return {
        color: this.todo.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-item {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__divider {
    background-color: $color-grey-200;
    border: none;
    height: 1px;
    margin-bottom: 20px;
  }

  &__body {
    margin-bottom: 20px;
  }

  &__title {
    font-size: 32px;
    font-weight: $font-weight-bold;
    margin-right: 14px;
  }

  &__checkbox + &__checkbox {
    margin-top: 20px;
  }

  &__add {
    display: flex;
    align-items: center;
    color: $color-grey-300;
    transition: $animation-time;

    svg {
      margin-right: 16px;
      color: $color-grey-300;
      width: 14px;
      height: 14px;
      transition: $animation-time;
    }

    &:hover {
      color: $color-black;

      svg {
        color: $color-black;
      }
    }
  }
}
</style>
