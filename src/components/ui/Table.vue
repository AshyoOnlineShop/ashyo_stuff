<template>
  <table class="w-[80%] bg-[#134E9B]">
    <tr class="h-[50px]">
      <th
        class="p-[5px] bg-global1 text-white"
        v-for="(item, index) in titles"
        :key="index"
      >
        {{ //@ts-ignore
        item?.title }}
      </th>
    </tr>

    <tr v-for="(item, index) in items" :key="index">
      <td
        class="text-center p-[5px] bg-[#F6FBFF] h-[50px] text-[#065FD4]"
        :class="//@ts-ignore
        title.field == '_id' ? 'text-[#6E737B]' : ''"
        v-for="(title, index) in titles"
      >
        {{ //@ts-ignore
        item[title?.field] }}
        <div
          class="flex felx-row gap-[5px] items-center justify-center"
          v-if="//@ts-ignore
          title.field == 'action'"
        >
          <button
            @click="[store.delete_modal, store.product] = [true, item]"
            class="pl-[5px] pr-[5px] rounded"
          >
            <SvgIcon type="mdi" :path="mdiTrashCanOutline"></SvgIcon>
          </button>
          <button
            @click="[store.update_modal, store.product] = [true, item]"
            class="pl-[5px] pr-[5px] rounded"
          >
            <SvgIcon type="mdi" :path="mdiPencilOutline"></SvgIcon>
          </button>
          <button
            class="pl-[5px] pr-[5px] rounded"
          >
            <SvgIcon type="mdi" :path="mdiEye"></SvgIcon>
          </button>
        </div>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";

import { mdiTrashCanOutline } from "@mdi/js";
import { mdiPencilOutline } from "@mdi/js";
import { mdiEye } from "@mdi/js";

const props = defineProps({
  items: {
    type: Array,
  },
  titles: {
    type: Array,
  },
});

import { useAdminStore } from "../../stores/admin";

const store: any = useAdminStore();
</script>

<style scoped></style>
