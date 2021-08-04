<template>
  <div id="app">
    <div class="container">
      <SidebarMain :items="items"/>

      <main class="main">
        <TodoItem :todo="todo"/>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMain from '@/components/sidebar/SidebarMain'
import TodoItem from '@/components/todo/TodoItem'

export default {
  name: 'App',
  components: {
    SidebarMain,
    TodoItem
  },
  data () {
    return {
      items: [
        { id: 1, name: 'One', color: '#64C4ED' },
        { id: 2, name: 'Two', color: '#FFBBCC' }
      ],
      todo: {
        id: 1,
        name: 'Фронтенд',
        color: 'red',
        todos: []
      }
    }
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
  padding: 56px 56px 0;
  background-color: $color-white;
}
</style>
