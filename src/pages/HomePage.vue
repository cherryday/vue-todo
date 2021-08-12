<template>
  <div class="home-page">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="home-page__todo"
    >
      <TodoItem :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/todo/TodoItem'

export default {
  name: 'home-page',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  &__todo + &__todo {
    margin-top: 28px;
  }
}
</style>
