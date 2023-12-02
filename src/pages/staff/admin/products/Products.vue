<template>
  <div class="flex flex-col p-[35px] gap-[20px] w-full">
    <h1 class="text-[25px] font-bold">Products</h1>

    <VButton class="w-[200px]" @click="store.modal = true"  :btn_type="'primary'" :isLoading="loading" >Create product</VButton>

    <Table class="w-[95%]" :items="data" :titles="titles"></Table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useAdminStore } from "../../../../stores/admin";
// import Product from "../../../../components/product/Product.vue";
//@ts-ignore
import Table from "@/components/ui/Table.vue";
//@ts-ignore
import DeleteModal from "./Modals/DeleteModal.vue"
//@ts-ignore
import UpdateProductModal from "./Modals/UpdateProductModal.vue"
//@ts-ignore
import ProductModal from "./Modals/ProductModal.vue"

//@ts-ignore
import VButton from "@/components/form/VButton.vue"

let loading = ref(false)


const store = useAdminStore();
let data: any = ref([]);

onMounted(async () => {
  data.value = await store.getProducts();
  //   console.log(data.value);
  for (let i of data.value) {
    i.brand_name = i.brands.name;
    i.model_name = i.product_model.name;
    i.category_name = i.category.name;
  }
});

const titles = [
  { title: "Model", field: "model_name" },
  { title: "Brand", field: "brand_name" },
  { title: "Category", field: "category_name" },
  { title: "Price", field: "price" },
  {title: 'Quantity', field: 'quantity'},
  {title: 'Action', field: 'action'},
];
</script>

<style lang="scss" scoped></style>
