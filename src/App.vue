<template>
  <div id="app">
    <div class="container">
      <SidebarMain :items="items"/>
    </div>
  </div>
</template>

<script>
import SidebarMain from './components/sidebar/SidebarMain.vue'

export default {
  name: 'App',
  components: { SidebarMain },
  data () {
    return {
      items: [
        { id: 1, name: 'One', color: '#64C4ED' },
        { id: 2, name: 'Two', color: '#FFBBCC' }
      ]
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
</style>
