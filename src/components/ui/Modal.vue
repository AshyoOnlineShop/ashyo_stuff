<template>
    <div
      class="w-full h-screen flex items-center fixed"
      style="background-color: rgba(0, 0, 0, 0.5)"
      @click="close"
    ></div>
    <div class="w-[30%] bg-white flex flex-col items-center justify-center rounded-[8px] ml-[350px] mt-[70px] p-[20px] absolute">
      <transition>
        <div>
          <slot></slot>
        </div>
      </transition>
    </div>
</template>

<script setup lang="ts">
import Transition from './Transition.vue'
import { useAdminStore } from '@/stores/admin'

const store = useAdminStore()

const close = ()=>{
  store.modal = false
  store.update_modal = false
  store.delete_modal = false
}
</script>

<style scoped></style>
