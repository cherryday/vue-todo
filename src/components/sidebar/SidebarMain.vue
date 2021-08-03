<template>
  <aside class="sidebar">
    <SidebarItem
      :active="isActive(0)"
      class="all"
      @click="selectItem(0)"
    >
      <template #prepend>
        <img src="@/assets/images/icon-list.svg" alt="list">
      </template>
      <template #text>
        Все задачи
      </template>
    </SidebarItem>

    <SidebarItem
      v-for="(item, index) in items"
      :key="item.id"
      remove
      :active="isActive(index + 1)"
      @click="selectItem(index + 1)"
    >
      <template #prepend>
        <ColorBage :color="item.color"/>
      </template>
      <template #text>
        {{ item.name }}
      </template>
    </SidebarItem>

    <SidebarAdd/>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem'
import SidebarAdd from './SidebarAdd'
import ColorBage from '@/components/ColorBage'

export default {
  name: 'sidebar-main',
  components: {
    SidebarItem,
    ColorBage,
    SidebarAdd
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    isActive (index) {
      return this.activeIndex === index
    },
    selectItem (index) {
      this.activeIndex = index
    },
    removeItem () {}
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  padding: 48px 20px 0;
  background-color: #F5F6F8;
  border-right: 1px solid #F1F1F1;

  .item {
    margin-bottom: 8px;

    &:nth-last-child(2) {
      margin-bottom: 28px;
    }
  }

  .all {
    margin-bottom: 20px;
  }
}
</style>
