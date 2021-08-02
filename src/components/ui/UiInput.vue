<template>
  <div class="wrapper">
    <input
      class="input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="error">Error</div>
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
.wrapper {
  position: relative;
  margin-bottom: 20px;
}

.input {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #EFEFEF;

  &::placeholder {
    color: #C7C7C7;
  }
}

.error {
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 12px;
  color: $color-red;
}
</style>
