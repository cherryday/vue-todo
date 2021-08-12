<template>
  <aside class="sidebar-main">
    <template v-if="items.length">
      <SidebarLink to="/" class="sidebar-main__todo">
        <template #prepend>
          <img src="@/assets/images/icon-list.svg" alt="list">
        </template>
        <template #text>
          Все задачи
        </template>
      </SidebarLink>

      <SidebarLink
        v-for="todo in items"
        :key="todo.id"
        :to="`/${todo.id}`"
        remove
        class="sidebar-main__todo"
      >
        <template #prepend>
          <ColorBage :color="todo.color"/>
        </template>

        <template #text>
          {{ todo.name }}
        </template>
      </SidebarLink>
    </template>

    <SidebarAdd/>
  </aside>
</template>

<script>
import SidebarAdd from './SidebarAdd'
import SidebarLink from './SidebarLink'
import ColorBage from '@/components/ColorBage'

export default {
  name: 'sidebar-main',
  components: {
    ColorBage,
    SidebarLink,
    SidebarAdd
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    removeItem () {}
  }
}
</script>

<style lang="scss" scoped>
.sidebar-main {
  width: 200px;
  padding: 48px 20px 20px;
  background-color: #F5F6F8;
  border-right: 1px solid #F1F1F1;
  // overflow-y: auto;

  &__todo {
    margin-bottom: 8px;

    &:first-child {
      margin-bottom: 20px;
    }

    &:nth-last-child(2) {
      margin-bottom: 28px;
    }
  }
}
</style>
