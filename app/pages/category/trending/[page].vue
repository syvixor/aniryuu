<script lang="ts" setup>
const { page } = useRoute().params
</script>

<template>
    <Head>
        <Title>Aniryuu - Trending Now</Title>
    </Head>
    <Cards category="Trending" :page="Number(page)" />
</template>