<template>
  <div class="ui-input">
    <input
      class="ui-input__input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="ui-input__error">Error</div>
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    value: String,
    error: String,
    placeholder: String
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
    bottom: -16px;
    left: 0;
    font-size: 12px;
    color: $color-red;
  }
}
</style>
