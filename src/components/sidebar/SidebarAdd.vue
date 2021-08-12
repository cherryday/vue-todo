<template>
  <div class="sidebar-add" v-click-outside="close">
    <button class="sidebar-add__button" @click="isOpen = true">
      <IconPlus/>
      Добавить
    </button>

    <form
      v-show="isOpen"
      class="sidebar-add__form"
      @submit.prevent="onSubmit"
    >
      <button
        type="button"
        class="sidebar-add__close"
        @click="close"
      >
        <IconCross/>
      </button>

      <UiInput
        v-model="name"
        placeholder="Название"
        class="sidebar-add__input"
        :error="errorMessage"
        @input="validate"
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

      <UiButton :loading="isLoading">
        Добавить
      </UiButton>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import http from '@/http'
import UiInput from '@/components/ui/UiInput'
import UiButton from '@/components/ui/UiButton'
import IconCross from '@/components/icons/IconCross'
import IconPlus from '@/components/icons/IconPlus'
import ColorBage from '@/components/ColorBage'

export default {
  name: 'sidebar-add',
  components: {
    UiInput,
    IconPlus,
    IconCross,
    UiButton,
    ColorBage
  },
  data () {
    return {
      isOpen: false,
      isLoading: false,
      name: '',
      bageIndex: 0,
      bages: [
        { id: 1, color: 'green' },
        { id: 2, color: 'red' }
      ],
      errorMessage: ''
    }
  },
  watch: {
    isOpen (value) {
      if (!value) this.clearForm()
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),
    validate () {
      const isValid = this.name || false

      if (!isValid) this.errorMessage = 'Необходимо заполнить'

      return isValid
    },
    async onSubmit () {
      if (!this.validate()) return

      this.isLoading = true

      const payload = {
        name: this.name,
        color: this.color
      }

      try {
        await http.createTodo(payload)
        await this.fetchTodos()
        this.close()
      } catch {
        console.log('Err')
      }

      this.isLoading = false
    },
    clearForm () {
      this.name = ''
      this.bageIndex = 0
      this.errorMessage = ''
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-add {
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    border-radius: 4px;
    transition: $animation-time;
    color: $color-grey-400;
    width: 100%;

    &:hover {
      box-shadow: 0px 2px 10px rgba($color-black, 0.05);
      background: $color-white;
    }

    svg {
      color: $color-grey-400;
      margin-right: 10px;
    }
  }

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
    margin-bottom: 16px;
  }

  &__bages {
    display: flex;
    margin-bottom: 16px;
  }

  &__bage + &__bage {
    margin-left: 5px;
  }
}
</style>
