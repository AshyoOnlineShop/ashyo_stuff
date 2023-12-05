<template>
  <div>
    <Modal v-if="store.update_modal">
        <vee-form @submit="send" :validation-schema="schema">
                <VInput type="text"
              label="Name"
              name="name"
              placeholder="Name"
              :value="//@ts-ignore
              store.product.name"/>

                <VInput type="number"
              label="Price"
              name="price"
              placeholder="Price"
              :value="//@ts-ignore
              store.product.price"/>

             <VInput
              type="number"
              label="Quantity"
              name="quantity"
              placeholder="Quantity"
              :value="//@ts-ignore
              store.product.quantity"
            ></VInput>

            <select
          v-model="form.category"
          name="category"
          id="category"
          class="text-[#134E9B] h-[35px] mt-[15px] mb-[15px] block pr-[100px]"
        >
          <option hidden selected>{{//@ts-ignore
          store.product.category.name }}</option>
          <option
            v-for="item in categories"
            :value="
              //@ts-ignore
              item.id
            "
          >
            {{
              //@ts-ignore
              item.name
            }}
          </option>
        </select>

        <select
          v-model="form.brand"
          name="brand"
          id="brand"
          class="text-[#134E9B] h-[35px] mt-[15px] mb-[15px] pr-[120px]"
        >
          <option hidden selected>{{//@ts-ignore
          store.product.brands.name }}</option>
          <option
            v-for="item in brands"
            :value="
              //@ts-ignore
              item.id
            "
          >
            {{
              //@ts-ignore
              item.name
            }}
          </option>
        </select>

        <VInput
          type="text"
          label="Description"
          name="description"
          placeholder="Description"
          :value="//@ts-ignore
          store.product.description"
        />

            <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Modal from '@/components/ui/Modal.vue'
import { useAdminStore } from '@/stores/admin';
import VInput from '@/components/form/VInput.vue';

import VButton from '@/components/form/VButton.vue';

const store = useAdminStore()

const loading = ref(false)

let categories = ref([]);
let brands = ref([]);

const q = {
  page: 1,
  limit: 10,
};

onMounted(async () => {
  //@ts-ignore
  categories.value = await store.getCategories(q);
  //@ts-ignore
  categories.value = categories.value.categories;
  //@ts-ignore
  brands.value = await store.getBrands(q);
  //@ts-ignore
  brands.value = brands.value.brands;
});

let form = ref({
  //@ts-ignore
  category: store.product.category.name,
  //@ts-ignore
  brand: store.product.brands.name
});

const schema = computed(() => {
  return {
    name: "required|min:3|max:20",
    quantity: "required|min:2|max:10",
    price: "required|min:2|max:10",
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
  //@ts-ignore
  if (typeof form.value.category != 'string'){    
    values.category_id = form.value.category;
  } else{
    //@ts-ignore
    values.category_id = store.product.category.id
  }

  if (typeof form.value.brand != 'string'){
    values.brand_id = form.value.brand;
  } else{
    //@ts-ignore
    values.brand_id = store.product.brands.id
  }
  
  //@ts-ignore
  

  values.model_id = 4;
  
  
  //@ts-ignore
  await store.updateProduct(values, store.product.id)
  store.update_modal = false
    loading.value = true
    loading.value = false
    location.reload()
}
</script>

<style scoped></style>
