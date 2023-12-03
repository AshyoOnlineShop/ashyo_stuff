<template>
    <div class="h-[70px] bg-[#134E9B] w-full border-l-2 flex items-center p-[30px]">
        <vee-field name="search" class="p-[6px] rounded-[18px] w-[400px] ml-[45px]" placeholder="Qidirish"/>
        <SvgIcon class="fixed left-[660px]" type="mdi" :path="mdiMagnify"></SvgIcon>
        
        <button class="p-[10px] lg:hidden" @click="isOpen = true">open sidebar</button>
    </div>
</template>

<script setup>
import {useSidebar} from '../../hooks/useSdieBar'

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify } from '@mdi/js';

let {isOpen} = useSidebar()

</script>


<style scoped>

</style>