<template>
  <div class="w-full flex flex-col">
    <label
      for="password"
      class="text-[18px] text-global_blue font-medium mb-1 select-none"
      >Password</label
    >
    <div class="flex justify-between items-center">
      <vee-field
        id="password"
        :type="hidden ? 'password' : 'text'"
        :name="name"
        :placeholder="placeholder"
        class="custom_style border outline-none rounded-s-lg px-3 py-2 text-[18px] placeholder:text-global_blue/50 w-[89%] focus:border-global_blue select-none" />
      <span
        @click="hide"
        class="w-[10%] border-none outline-none rounded-e-lg p-2 text-[18px] placeholder:text-global_blue bg-white cursor-pointer flex justify-center items-center py-[9px]">
        <svg-icon
          v-if="hidden"
          type="mdi"
          :path="mdiEye"
          class="text-global_blue"></svg-icon>
        <svg-icon
          v-else
          type="mdi"
          :path="mdiEyeOff"
          class="text-global_blue"></svg-icon>
      </span>
    </div>
    <ErrorMessage :name="name" class="text-[16px] text-red-700 select-none" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
// @ts-ignore
import { mdiEye, mdiEyeOff } from "@mdi/js";
// @ts-ignore
const props = defineProps({
  name: { type: String },
  placeholder: { type: String },
});
const hidden = ref(true);
const hide = () => {
  hidden.value = !hidden.value;
};
</script>

<style lang="scss" scoped></style>
