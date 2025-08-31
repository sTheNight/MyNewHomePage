<script setup lang="ts">
import NavItem from '@/component/NavItem.vue'
import { ref } from 'vue';
</script>

<template>
    <div class="nav-content-box">
        <div class="nav-section-box">
            <NavItem v-for="index in 10" :key="index" :name="index" :link="'https://www.baidu.com'" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.nav-content-box {
    box-sizing: border-box;
    flex-direction: column;
    width: min(800px,100vw - 32px);
    margin: 0 auto;
    height: 100vh;
    padding: 16px 16px 128px;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
}

.nav-section-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
</style>
