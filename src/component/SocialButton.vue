<script lang="ts" setup>
defineProps(['icon', 'link', 'isCustomIcon'])
</script>

<template>
    <a class="social-button" :href="link">
        <i v-if="!isCustomIcon" :class="icon"></i>
        <div class="customIcon" v-else v-html="icon"></div>
    </a>
</template>

<style lang="scss">
@use "@/styles/rule" as *;

.social-button {
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    outline: 0;
    box-sizing: border-box;

    color: $global-font-color;

    backdrop-filter: blur(32px);
    background-color: rgba(#000, 0.2);
    transition: all 0.3s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    text-decoration: none;

    &:focus,
    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
    }
}
.customIcon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>