<script lang="ts" setup>
import type { IAnimeList } from "~/types";

const { genre, page } = useRoute().params
const { data } = await useFetch<IAnimeList>("/api/genre", { query: { genre, page } });
</script>

<template>
    <Head>
        <Title>Aniryuu - {{ formatString(genre as string, "title") }}</Title>
    </Head>
    <Label>{{ formatString(genre as string, "title") }} Genre</Label>
    <Cards :data="data!" />
    <Pagination :pagination="data!" :page="parseInt(page as string)" />
</template>