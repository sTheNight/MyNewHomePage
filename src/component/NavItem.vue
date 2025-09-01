<script setup lang="ts">
defineProps<{
    name: string | number;
    link: string;
}>();
</script>

<template>
    <a class="nav-item-button" :href="link"><i class="fa-solid fa-link icon"></i>{{ name }}</a>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;

.nav-item-button {

    box-sizing: border-box;
    border: 1px solid rgba(#fff, .2);
    backdrop-filter: blur(16px);
    padding: 20px;
    color: $global-font-color;
    text-decoration: none;
    transition: all .3s;
    display: flex;
    align-items: center;
    border-radius: 5px;

    &:hover {
        background-color: rgba(#fff, 0.25);
        transform: translateY(-5px);
    }
}
.icon {
    margin-right: 10px;
}
</style>
