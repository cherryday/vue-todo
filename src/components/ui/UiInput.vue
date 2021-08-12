<template>
  <div class="ui-input" :class="classes">
    <input
      class="ui-input__input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="ui-input__error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    value: String,
    error: String,
    placeholder: String
  },
  computed: {
    classes () {
      return {
        'ui-input--error': this.error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-input {
  position: relative;

  &__input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #EFEFEF;

    &::placeholder {
      color: #C7C7C7;
    }
  }

  &__error {
    position: absolute;
    bottom: -14px;
    left: 0;
    font-size: 12px;
    color: $color-red;
  }

  &--error {
    .ui-input__input {
      border: 1px solid $color-red;
    }
  }
}
</style>
