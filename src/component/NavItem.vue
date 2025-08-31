<script setup lang="ts">
defineProps<{
    name: string|number;
    link: string;
}>();
</script>

<template>
    <a class="nav-item-button" :href="link">{{ name }}</a>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;
.nav-item-button {
    box-sizing: border-box;
    border: 1px solid $global-font-color;
    backdrop-filter: blur(16px);
    padding: 10px 10px;
    color: $global-font-color;
    text-decoration: none;
    transition: all .3s;
    display: flex;
    align-items: center;
    border-radius: 5px;
    &:hover {
        background-color: rgba($global-font-color, 0.1);
    }
}
</style>
