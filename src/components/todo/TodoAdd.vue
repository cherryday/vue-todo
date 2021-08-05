<template>
  <div class="todo-add">
    <UiInput
      v-model="name"
      placeholder="Текст задачи"
      class="todo-add__input"
    />

    <div class="todo-add__actions">
      <UiButton class="todo-add__button">
        Добавить задачу
      </UiButton>

      <UiButton
        color="grey"
        class="todo-add__button"
        @click="$emit('close')"
      >
        Отмена
      </UiButton>
    </div>
  </div>
</template>

<script>
import UiInput from '@/components/ui/UiInput'
import UiButton from '@/components/ui/UiButton'

export default {
  name: 'todo-add',
  components: {
    UiInput,
    UiButton
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-add {
  &__input {
    margin-bottom: 16px;
  }

  &__actions {
    display: flex;
  }

  &__button {
    &:first-child {
      margin-right: 10px;
    }
  }
}
</style>
