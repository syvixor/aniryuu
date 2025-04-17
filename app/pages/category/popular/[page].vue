<script lang="ts" setup>
import type { IAnimeList } from "~/types";

const { page } = useRoute().params
const { data } = await useFetch<IAnimeList>("/api/popular", { query: { page } });
</script>

<template>
    <Head>
        <Title>Aniryuu - Most Popular</Title>
    </Head>
    <Label>Most Popular</Label>
    <Cards :data="data!" />
    <Pagination :pagination="data!" :page="parseInt(page as string)" />
</template>