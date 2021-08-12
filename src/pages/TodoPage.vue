<template>
  <div class="todo-page">
    <TodoItem v-if="todo" :todo="todo"/>

    <p v-else class="todo-page__title">Задача не найдена</p>
  </div>
</template>

<script>
import TodoItem from '@/components/todo/TodoItem'

export default {
  name: 'todo-page',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    todo () {
      return this.todos.find(todo => todo.id === +this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-page {
  &__title {
    text-align: center;
  }
}
</style>
