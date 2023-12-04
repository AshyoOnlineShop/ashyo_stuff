<template>
  <div>
    <Modal v-if="store.modal">
      <vee-form @submit="send" :validation-schema="schema">
        <VInput type="text" label="Name" name="name" placeholder="Name" />

        <VInput type="number" label="Price" name="price" placeholder="Price" />

        <VInput
          type="number"
          label="Quantity"
          name="quantity"
          placeholder="Quantity"
        />

        <select
          v-model="form.category"
          name="category"
          id="category"
          class="text-[#134E9B] h-[35px] mt-[15px] mb-[15px] block pr-[100px]"
        >
          <option hidden selected>Select category</option>
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
          <option hidden selected>Select brand</option>
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
        />

        <VButton type="submit" btn_type="primary" :isLoading="loading">{{
          btn_title
        }}</VButton>
      </vee-form>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Modal from "@/components/ui/Modal.vue";
import { useAdminStore } from "@/stores/admin";
import VInput from "@/components/form/VInput.vue";

import VButton from "@/components/form/VButton.vue";

const store = useAdminStore();

const loading = ref(false);

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
  category: 'Select category',
  brand: 'Select brand'
});

const schema = computed(() => {
  return {
    name: "required|min:3|max:20",
    quantity: "required|min:2|max:10",
    price: "required|min:2|max:10",
  };
});

const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  }
  return "Create";
});

//@ts-ignore
const send = async (values) => {
  //@ts-ignore
  values.category_id = form.value.category;
  //@ts-ignore
  values.brand_id = form.value.brand;

  values.model_id = 4;
  await store.createProduct(values);
  //@ts-ignore
  store.modal = false;
  loading.value = true;
  location.reload()
};
</script>

<style scoped></style>
