<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Home from './view/Home.vue';
import NavPage from './view/NavPage.vue';
import TabButton from './component/TabButton.vue';
import { config } from './config';

const activeView = ref(0)

const views = [
    Home,
    NavPage
]

onMounted(() => {
    document.title = config.siteTitle;
})
</script>

<template>
    <div class="blur-overlay"></div>
    <Transition name="loading" mode="out-in" appear>
        <div>
            <Transition name="fade" mode="out-in">
                <div class="active-view-div" :key="activeView">
                    <component :is="views[activeView]"></component>
                </div>
            </Transition>
        </div>
    </Transition>

    <Transition name="bottom-button-transition" appear>
        <div class="bottom-button-group">
            <TabButton v-for="(item, index) in config.tabButtons" :icon="item.icon" :title="item.title"
                @click-event="activeView = index" :class="activeView === index ? 'active' : ''" />
        </div>
    </Transition>

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
    user-select: none;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>