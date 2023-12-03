<template>
  <div>
    <Modal v-if="store.update_modal">
        <vee-form @submit="send" :validation-schema="schema">
                <VInput type="text"
              label="First name"
              name="first_name"
              placeholder-pro="First name"
              :value="//@ts-ignore
              store.product.first_name"/>

                <VInput type="text"
              label="Last name"
              name="last_name"
              placeholder-pro="Last name"
              :value="//@ts-ignore
              store.product.last_name"/>

             <VInput
              type="text"
              label="Phone number"
              name="phone"
              mask="'(+998) ## ###-##-##'"
              masked="true"
              placeholder-pro="(+998) 90 123-45-67"
              :value="//@ts-ignore
              store.product.phone"
            ></VInput>

            <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Modal from '@/components/ui/Modal.vue'
import { useAdminStore } from '@/stores/admin';
import VInput from '@/components/form/VInput.vue';

import VButton from '@/components/form/VButton.vue';

const store = useAdminStore()

const loading = ref(false)

const phoneNumber = ref("")

const schema = computed(() => {
  return {
    first_name: 'required|min:3|max:20',
    last_name: 'required|min:3|max:20',
    phone: 'required|min:3|max:20'
  }
})

const btn_title = computed(()=>{
  if (loading.value){
    return "Loading"
  }
  return 'Update'
})

//@ts-ignore
const send = async (values) =>{
  let a = values.phone.split("")
  //@ts-ignore
  let b = a.filter(item => !isNaN(+item) && item!=" ")
  values.phone = `+${b.join("")}`
  store.update_modal = false
    loading.value = true
    // await store.updateStudent(values)
    loading.value = false
}
</script>

<style scoped></style>
