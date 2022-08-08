<template>
  <div class="mb-6">
    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <slot/>
    </label>
    <input
        type="text"
        :value="modelValue"
        @input="updateValue"
        class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
  </div>
</template>

<script>
export default {
  name: "InputFieldComponent",
  props: [
    'modelValue'
  ],
  methods: {
    updateValue(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }

}
</script>

<style scoped>

</style>