<script lang="ts" setup>
import type { IAnimeList } from "~/types";

const page = ref(1);
const { data } = await useAsyncData(async () => {
    const [popular, trending] = await Promise.all([
        await $fetch<IAnimeList>("/api/popular", { query: { page } }),
        await $fetch<IAnimeList>("/api/trending", { query: { page } })
    ]);
    return { popular, trending }
});
</script>

<template>
    <Head>
        <Title>Aniryuu - Watch Anime Online For Free</Title>
    </Head>
    <Label>Trending Now</Label>
    <Cards :data="data?.trending!" :limit="16" />
    <UButton to="/category/trending/1" label="Explore More" variant="subtle" block />
    <Label>Most Popular</Label>
    <Cards :data="data?.popular!" :limit="16" />
    <UButton to="/category/popular/1" label="Explore More" variant="subtle" block />
    <Label>Genres</Label>
    <Genres />
</template>