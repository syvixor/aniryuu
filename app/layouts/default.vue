<script lang="ts" setup>
const { color } = useAppConfig();
</script>

<template>
    <NuxtLoadingIndicator :color="color" />
    <Header />
    <div class="space-y-4 my-2 lg:my-8 p-4">
        <slot />   
    </div>
    <Footer />
</template>