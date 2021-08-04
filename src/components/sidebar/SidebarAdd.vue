<template>
  <div class="sidebar-add">
    <SidebarItem @click="isOpen = true">
      <template #prepend>
        <img src="@/assets/images/icon-plus.svg" alt="plus">
      </template>
      <template #text>
        Добавить
      </template>
    </SidebarItem>

    <form
      v-show="isOpen"
      class="sidebar-add__form"
      @submit.prevent="onSubmit"
    >
      <button
        type="button"
        class="sidebar-add__close"
        @click="isOpen = false"
      >
        <IconCross/>
      </button>

      <UiInput
        v-model="name"
        placeholder="Название"
        class="sidebar-add__input"
      />

      <div class="sidebar-add__bages">
        <ColorBage
          v-for="(bage, index) in bages"
          :key="bage.id"
          :color="bage.color"
          :size="20"
          selected
          class="sidebar-add__bage"
          :active="bageIndex === index"
          @click="bageIndex = index"
        />
      </div>

      <UiButton>
        Добавить
      </UiButton>
    </form>
  </div>
</template>

<script>
import UiInput from '@/components/ui/UiInput'
import UiButton from '@/components/ui/UiButton'
import IconCross from '@/components/icons/IconCross'
import ColorBage from '@/components/ColorBage'
import SidebarItem from './SidebarItem'

export default {
  name: 'sidebar-add',
  components: {
    SidebarItem,
    UiInput,
    IconCross,
    UiButton,
    ColorBage
  },
  data () {
    return {
      isOpen: false,
      name: '',
      bageIndex: 0,
      bages: [
        { id: 1, color: 'green' },
        { id: 2, color: 'red' }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('Create')
    },
    clearForm () {
      this.name = ''
      this.bageIndex = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-add {
  position: relative;

  &__form {
    position: absolute;
    left: 0;
    top: 110%;
    width: 236px;
    background-color: $color-white;
    padding: 18px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba($color-black, 0.05);
  }

  &__close {
    position: absolute;
    top: -8px;
    right: -8px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: #5C5C5C;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: $color-white;
      width: 8px;
      height: 8px;
    }
  }

  &__input {
    margin-bottom: 14px;
  }

  &__bages {
    display: flex;
    margin-bottom: 14px;
  }

  &__bage + &__bage {
    margin-left: 5px;
  }
}
</style>
