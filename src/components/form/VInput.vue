<template>
  <div class="w-full flex flex-col">
    <label
      :for="name"
      class="text-[18px] text-global_blue font-medium mb-1 select-none"
      >{{ label }}</label
    >
    <vee-field
      v-if="mask"
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-mask="mask"
      :value="value"
      masked="true"
      :disabled="disabled"
      class="border outline-none rounded-lg px-3 py-2 text-[18px] placeholder:text-global_blue/50 focus:border-global_blue mb-[10px] disabled:text-gray-400 disabled:cursor-not-allowed" />
    <vee-field
      v-else
      :id="name"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      class="border outline-none rounded-lg px-3 py-2 text-[18px] placeholder:text-global_blue/50 focus:border-global_blue mb-[10px] disabled:text-gray-400 disabled:cursor-not-allowed" />
    <ErrorMessage
      :name="name"
      class="text-[16px] text-error_color select-none mb-[20px]" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  name: { type: String },
  type: { type: String, default: "text" },
  placeholder: { type: String },
  mask: { type: String },
  disabled: { type: Boolean, default: false },
  value: {
    type: [String, Number]
  }
});
</script>

<style lang="scss" scoped></style>
