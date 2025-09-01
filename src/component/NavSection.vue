<script setup lang="ts">
import NavItem from '@/component/NavItem.vue'
import type { INavItem } from '@/model/IConfig';
defineProps<{
    name: string;
    navItems: INavItem[];
}>();
</script>

<template>
    <div class="nav-section-box">
        <p class="section-name">{{ name }}</p>
        <div class="nav-items-box">
            <NavItem v-for="item in navItems" :key="item.name" :name="item.name" :link="item.link" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/rule" as *;
.nav-items-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
.section-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 16px 0;
    color: $global-font-color;
}
</style>
