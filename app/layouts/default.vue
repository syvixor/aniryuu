<script lang="ts" setup>
const { color } = useAppConfig();
</script>

<template>
    <NuxtLoadingIndicator :color="color" />
    <Header />
    <div class="lg:w-5/6 mx-auto space-y-8 mb-8">
        <slot />   
    </div>
    <Footer />
</template>