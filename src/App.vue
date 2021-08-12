<template>
  <div id="app">
    <div class="container">
      <SidebarMain :items="todos"/>

      <main class="main">
        <p v-if="isError" class="main-title main-title--error">
          Произошла ошибка, попробуйте перезагрузить страницу
        </p>

        <template v-else-if="todos.length">
          <router-view :todos="todos"></router-view>
        </template>

        <h1 v-else class="main-title">Задачи отсутствуют</h1>
      </main>
    </div>
  </div>
</template>

<script>
import http from '@/http'
import SidebarMain from '@/components/sidebar/SidebarMain'

export default {
  name: 'App',
  components: {
    SidebarMain
  },
  data () {
    return {
      isLoading: true,
      isError: false,
      todos: []
    }
  },
  methods: {
    async fetchTodos () {
      try {
        this.todos = await http.getTodos()
      } catch (err) {
        this.isError = true
      }
    }
  },
  async created () {
    await this.fetchTodos()
    this.isLoading = false
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 580px;
}

.container {
  width: 748px;
  height: 532px;
  display: flex;
}

.main {
  flex-grow: 1;
  padding: 56px 56px 28px;
  background-color: $color-white;
  overflow-y: auto;
}

.main-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &--error {
    color: $color-red;
  }
}
</style>
