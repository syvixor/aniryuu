<script lang="ts" setup>
import type { IAnimeInfo } from "~/types";

const { id } = useRoute().params
const { data } = await useFetch<IAnimeInfo>("/api/info", { query: { id } });
</script>

<template>
    <Head>
        <Title>Aniryuu - {{ data?.name }}</Title>
    </Head>
    <div class="space-y-4 p-4 lg:p-0">
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div class="md:col-span-1 space-y-2">
                <div class="group w-1/2 md:w-full h-fit mx-auto">
                    <img :src="data?.poster" :alt="data?.name!" class="w-full h-full rounded-xl object-cover">
                </div>
                <div class="flex flex-col gap-2">
                    <UButton icon="i-lucide-play" label="Watch Now" color="neutral" block disabled />
                    <div class="grid grid-cols-2 gap-2">
                        <UButton :to="`https://myanimelist.net/anime/${data?.links.mal}`" target="_blank" label="MAL"
                            variant="ghost" block :disabled="Boolean(!data?.links.mal)" />
                        <UButton :to="`https://anilist.co/anime/${data?.links.anilist}`" target="_blank" label="Anilist"
                            variant="ghost" block :disabled="Boolean(!data?.links.anilist)" />
                    </div>
                </div>
            </div>
            <div class="md:col-span-3 lg:col-span-4 space-y-4">
                <div class="space-y-2">
                    <h1 class="text-2xl font-bold">{{ data?.name }}</h1>
                    <div class="flex flex-wrap items-center gap-2">
                        <UBadge :label="data?.type" color="neutral" variant="subtle" v-if="data?.type" />
                        <UBadge :label="data?.status" color="neutral" variant="subtle" v-if="data?.status" />
                        <UBadge :label="data?.season" color="neutral" variant="subtle" v-if="data?.season" />
                        <UBadge :label="data.studio" color="neutral" variant="subtle" v-if="data?.studio" />
                        <UBadge icon="i-lucide-star" :label="data?.score" variant="subtle" />
                    </div>
                    <div class="flex flex-wrap items-center gap-2" v-if="data?.genres.length! > 0">
                        <UButton :to="`/genre/${formatString(genre, 'kebab')}/1`" :label="genre" variant="soft"
                            size="sm" v-for="(genre, index) in data?.genres" :key="index" />
                    </div>
                    <div v-html="data?.description" />
                </div>
            </div>
        </div>
        <div class="space-y-2" v-if="data?.cast.length! > 0">
            <h2 class="text-xl font-bold">Characters</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <UAlert :title="i.character.name" :description="i.character.cast" color="neutral" variant="subtle"
                    :avatar="{
                        src: i.character.poster
                    }" v-for="(i, index) in data?.cast" :key="index" />
            </div>
        </div>
    </div>
</template>