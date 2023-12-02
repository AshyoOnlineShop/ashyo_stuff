<template>
  <div>
    <Modal v-if="store.delete_modal">
      <div class="flex flex-col gap-5 w-[300px] items-center">
        <h1 class="text-[22px]">Rostan o'chirmoqchimsiz?</h1>
        <div class="flex flex-row justify-between w-full">
          <VButton @click="store.delete_modal = false" :btn_type="'primary'" :is-loading="loading">Bekor qilish</VButton>
          <VButton :btn_type="'danger'" @click="send" :is-loading="loading">O'chirish</VButton>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Modal from '../../../../components/ui/Modal.vue'
import { useAdminStudentStore } from '../../../../stores/admin/adminStudent'

import VButton from '../../../../components/form/VButton.vue'

const store = useAdminStudentStore()

const loading = ref(false)

const send = async () => {
  loading.value = true
  store.delete_modal = false
  await store.deleteStudent(store.student._id)
  loading.value = false
}
</script>

<style scoped></style>
