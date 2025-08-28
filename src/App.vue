<script setup lang="ts">
import { ref } from 'vue';
import Home from './view/Home.vue';
import NavPage from './view/NavPage.vue';
import TabButton from './component/TabButton.vue';
import { config } from './config';

const activeView = ref(0)

const views = [
    Home,
    NavPage
]
</script>

<template>
    <Transition name="loading" mode="out-in" appear>
        <div>
            <Transition name="fade" mode="out-in">
                <div class="active-view-div" :key="activeView">
                    <component :is="views[activeView]"></component>
                </div>
            </Transition>
        </div>
    </Transition>
    <div class="bottom-button-group" :key="activeView">
        <TabButton v-for="(item, index) in config.tabButtons" :icon="item.icon" :title="item.title"
            @click-event="activeView = index" :class="activeView === index ? 'active' : ''" />
    </div>
</template>

<style scoped lang="scss">
.bottom-button-group {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto 16px;
    width: max-content;
    max-width: min(500px, calc(100vw - 64px));
    overflow-x: auto;
    box-sizing: border-box;
    padding: 6px;
    background-color: rgba(#000, 0.2);
    border-radius: 114514px;
    backdrop-filter: blur(32px);
    display: flex;
    gap: 4px;
    user-select: none;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>

<style lang="scss">
@use "@/styles/rule" as *;

body {
    background-image: url('/background.png');
    background-size: cover;
    background-attachment: fixed;

    color: $global-font-color;

    background-position: 50% 50%;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    box-sizing: border-box;
    width: 100%;

    position: relative;

    &::before {
        content: "";
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        backdrop-filter: blur(4px);
        background-color: rgba($color: #000000, $alpha: 0.2);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.loading-enter-active,
.loading-leave-active {
    transition: all .5s;
}

.loading-enter-to {
    transform: scale(1);
    filter: blur(0);
}

.loading-enter-from {
    transform: scale(1.8);
    filter: blur(8px);
}

html {
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>