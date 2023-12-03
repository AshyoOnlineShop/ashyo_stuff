<template>
  <div class="flex bg-[white] h-full">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden bg-[black]"
    ></div>
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="w-[222px] pt-[70px] bg-[#134E9B] h-full fixed inset-y-0 left-0 z-20 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0"
    >
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        class="flex p-[12px] active:bg-[#F5FCCD] active:text-[#134E9B] focus:bg-[#F5FCCD] focus:text-[#134E9B] bg-[#134E9B] text-white"
      >
        <SvgIcon type="mdi" :path="item.icon" /> &nbsp; {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { useSidebar } from '@/hooks/useSdieBar'

const props = defineProps({
    menu: {
        type: Array
    }
})

let { isOpen } = useSidebar()
</script>

<style scoped></style>
