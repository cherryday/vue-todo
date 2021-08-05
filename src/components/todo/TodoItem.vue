<template>
  <div class="todo-item">
    <div class="todo-item__header">
      <h1 :style="titleStyles" class="todo-item__title">{{ todo.name }}</h1>

      <button class="todo-item__icon">
        <IconPencil/>
      </button>
    </div>

    <hr class="todo-item__divider">

    <div class="todo-item__body">
      <TodoCheckbox/>
    </div>

    <TodoAdd/>
  </div>
</template>

<script>
import IconPencil from '../icons/IconPencil'
import TodoCheckbox from './TodoCheckbox'
import TodoAdd from './TodoAdd'

export default {
  name: 'todo-item',
  components: {
    IconPencil,
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

  &__icon {
    svg {
      color: #DFDFDF;
      transition: .3s;
    }

    &:hover {
      svg {
        color: $color-black;
      }
    }
  }
}
</style>
