<script lang="ts" setup>
const { page } = useRoute().params
</script>

<template>
    <Head>
        <Title>Aniryuu - Most Popular</Title>
    </Head>
    <Cards category="Popular" :page="Number(page)" />
</template>