<template>
    <div class="h-full flex flex-col items-center justify-center">
        <MainLayout :menu="adminMenu">
            <router-view></router-view>
        </MainLayout>
    </div>
</template>

<script setup lang="ts">
import MainLayout from '../../../layouts/MainLayout.vue';
//@ts-ignore
import { adminMenu } from '../../../components/menu/adminMenu'


</script>

<style scoped>

</style>