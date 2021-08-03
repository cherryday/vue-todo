<template>
  <div class="sidebar-add">
    <SidebarItem>
      <template #prepend>
        <img src="@/assets/images/icon-plus.svg" alt="plus">
      </template>
      <template #text>
        Добавить
      </template>
    </SidebarItem>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'sidebar-add',
  components: {
    SidebarItem
  }
}
</script>

<style lang="scss" scoped>
.sidebar-add {}
</style>
