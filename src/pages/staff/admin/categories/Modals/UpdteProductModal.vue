<template>
  <div>
    <Modal v-if="store.update_modal">
        <vee-form @submit="send" :validation-schema="schema">
                <VInput type="text"
              label="First name"
              name="first_name"
              placeholder-pro="First name"
              :value="store.student.first_name"/>

                <VInput type="text"
              label="Last name"
              name="last_name"
              placeholder-pro="Last name"
              :value="store.student.last_name"/>

             <VInput
              type="text"
              label="Phone number"
              name="phone"
              v-mask="'(+998) ## ###-##-##'"
              masked="true"
              placeholder-pro="(+998) 90 123-45-67"
              :value="store.student.phone"
            ></VInput>

            <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Modal from '../../../../components/ui/Modal.vue'
import { useAdminStudentStore } from '../../../../stores/admin/adminStudent';
import VInput from '../../../../components/form/VInput.vue';

import VButton from '../../../../components/form/VButton.vue';

const store = useAdminStudentStore()

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

const send = async (values) =>{
  let a = values.phone.split("")
  let b = a.filter(item => !isNaN(+item) && item!=" ")
  values.phone = `+${b.join("")}`
  values._id = store.student._id
  store.update_modal = false
    loading.value = true
    await store.updateStudent(values)
    loading.value = false
}
</script>

<style scoped></style>
