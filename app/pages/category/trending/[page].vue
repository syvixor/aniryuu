<script lang="ts" setup>
import type { IAnimeList } from "~/types";

const { page } = useRoute().params
const { data } = await useFetch<IAnimeList>("/api/trending", { query: { page } });
</script>

<template>
    <Head>
        <Title>Aniryuu - Trending Now</Title>
    </Head>
    <Label>Trending Now</Label>
    <Cards :data="data!" />
    <Pagination :pagination="data!" :page="parseInt(page as string)" />
</template>