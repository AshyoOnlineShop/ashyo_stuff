<template>
  <div class="flex flex-col gap-[15px] w-full">
    <ProductModal v-if="store.modal"></ProductModal>
    <UpdateProductModal v-if="store.update_modal"></UpdateProductModal>
    <DeleteModal v-if="store.delete_modal"></DeleteModal>

    
    <div class="flex flex-col p-[25px] gap-[20px] w-full">
      <h1 class="text-[25px] font-bold">Products</h1>
      <VButton class="w-[200px]" @click="store.modal = true"  :btn_type="'primary'" :isLoading="loading" >Create product</VButton>
  
      <Table class="w-[95%]" :items="data" :titles="titles"></Table>

      <div class="flex flex-row w-full items-center justify-center gap-3">
        <button v-if="pg!=1" class="rounded bg-[#e9e1ff] p-[5px] pr-[10px] pl-[10px] text-[gray]" @click="paginate(pg-1)">{{ "<<" }} Prev.</button>
        <button
        v-if="pag_buttons.length>1"
          class="rounded bg-[#e9e1ff] p-[5px] pr-[10px] pl-[10px] text-[gray]"
          :class="pg==index+1 ? 'bg-[#f3ffb9]' : ''"
          v-for="index in pag_buttons"
          @click="paginate(index + 1)"
        >
          {{ index + 1 }}
        </button>
        <button v-if="pg!=pag_buttons.length" class="rounded bg-[#e9e1ff] p-[5px] pr-[10px] pl-[10px] text-[gray]" @click="paginate(pg+1)">Next {{ ">>" }} </button>
      </div>
    </div>
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
const count = ref('')

let pag_buttons = ref([])

const q = {
  page:1, limit: 10
}

onMounted(async () => {
  data.value = await store.getProducts(q);
  data.value = data.value.products
  //   console.log(data.value);
  for (let i of data.value) {
    i.brand_name = i.brands.name;
    i.model_name = i.product_model.name;
    i.category_name = i.category.name;
  }
  
});

let pg = ref(1)

//@ts-ignore
const paginate = async (p) => {
  pg.value = q.page
  const response = await store.getProducts(q)
  //@ts-ignore
  data.value = response.products

  for (let i of data.value) {
    i.brand_name = i.brands.name;
    i.model_name = i.product_model.name;
    i.category_name = i.category.name;
  }

  for (let i = 0; i < Number(count.value) / 10; i++) {
    //@ts-ignore
    pag_buttons.value.push(i)
  }
}

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
