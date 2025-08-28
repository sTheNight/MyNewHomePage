<script setup lang="ts">

</script>

<template>
    <div class="home-root-div" style="overflow: hidden;">
        <div>
            你好，世界！
        </div>
    </div>
</template>

<style scoped lang="scss">
.home-root-div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
