<template>
  <aside class="sidebar-main">
    <template v-if="items.length">
      <SidebarItem
        :active="isActive(0)"
        class="sidebar-main__item"
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
        class="sidebar-main__item"
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
    </template>

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
.sidebar-main {
  width: 200px;
  padding: 48px 20px 0;
  background-color: #F5F6F8;
  border-right: 1px solid #F1F1F1;

  &__item {
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
