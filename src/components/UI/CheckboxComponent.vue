<template>
  <div class="flex items-center mb-4">
    <input
        :checked="modelValue"
        @change="updateValue"
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    >
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <slot/>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  props: [
    'modelValue'
  ],
  methods: {
    updateValue(e) {
      this.$emit('update:modelValue', e.target.checked);
    }
  }
}
</script>

<style scoped>

</style>