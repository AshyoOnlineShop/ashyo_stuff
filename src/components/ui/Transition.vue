<template>
    <transition name="transition">
        <slot></slot>
    </transition>
</template>


<style scoped>
.transition-enter-active,
.transition-leave-active{
    transition: opacity 0.5s ease;
}

.transition-enter-from,
.transition-leave-to{
    opacity: 0;
}
</style>