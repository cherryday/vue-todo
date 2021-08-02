<template>
  <div id="app">
    <SidebarItem @click="onClick" @remove="onRemove">
      <template #prepend>
        <ColorBage :color="'red'"/>
      </template>
      <template #text>Tex ffdsfd dsfds dfst</template>
    </SidebarItem>
  </div>
</template>

<script>
import SidebarItem from './components/SidebarItem.vue'
import ColorBage from './components/ColorBage.vue'

export default {
  name: 'App',
  components: { SidebarItem, ColorBage },
  methods: {
    onClick () {
      console.log('clcik')
    },
    onRemove () {
      console.log('remove')
    }
  }
}
</script>
