<template>
  <div id="app">
    <UiInput v-model="value" :error="'err'"/>
    <UiInput placeholder="Text..."/>
  </div>
</template>

<script>
import UiInput from './components/ui/UiInput.vue'

export default {
  name: 'App',
  components: { UiInput },
  data () {
    return {
      value: 'fsd'
    }
  },
  watch: {
    value (v) {
      console.log(v)
    }
  },
  methods: {
  }
}
</script>
