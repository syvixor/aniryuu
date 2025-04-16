<script lang="ts" setup>
const { id } = useRoute().params
const { data } = await useFetch("/api/info", { query: { id } });

const toKebabCase = (genre: string) => {
    return genre.trim().toLowerCase().replace(/\s+/g, "-");
}
</script>

<template>
    <Head>
        <Title>Aniryuu - {{ data?.anime.info.name }}</Title>
    </Head>
    <div class="space-y-4 p-4 lg:p-0">
        <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div class="md:col-span-1 space-y-2">
                <div class="w-1/2 md:w-full h-fit mx-auto">
                    <img :src="data?.anime.info.poster!" :alt="data?.anime.info.name!"
                        class="w-full h-full rounded-xl object-cover">
                </div>
                <div class="flex flex-col gap-2">
                    <UButton icon="i-lucide-play" label="Watch Now" color="neutral" block disabled />
                    <div class="grid grid-cols-2 gap-2">
                        <UButton :to="`https://myanimelist.net/anime/${data?.anime.info.malId}`" target="_blank"
                            label="MAL" variant="ghost" block :disabled="Boolean(!data?.anime.info.malId)" />
                        <UButton :to="`https://anilist.co/anime/${data?.anime.info.anilistId}`" target="_blank"
                            label="Anilist" variant="ghost" block :disabled="Boolean(!data?.anime.info.anilistId)" />
                    </div>
                </div>
            </div>
            <div class="md:col-span-3 lg:col-span-4 space-y-4">
                <div class="space-y-2">
                    <div class="flex flex-col">
                        <h1 class="text-2xl font-bold">{{ data?.anime.info.name }}</h1>
                        <p class="text-base font-medium opacity-75">{{ data?.anime.moreInfo.japanese }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <UBadge :label="String(data?.anime.info.stats.type)" color="neutral" variant="subtle"
                            v-if="data?.anime.info.stats.type" />
                        <UBadge :label="String(data?.anime.moreInfo.status)" color="neutral" variant="subtle"
                            v-if="data?.anime.moreInfo.status" />
                        <UBadge :label="String(data?.anime.moreInfo.premiered)" color="neutral" variant="subtle"
                            v-if="data?.anime.moreInfo.premiered" />
                        <UBadge :label="String(data?.anime.moreInfo.studios)" color="neutral" variant="subtle"
                            v-if="data?.anime.moreInfo.studios" />
                        <UBadge icon="i-lucide-star" :label="String(data?.anime.moreInfo.malscore!)" variant="subtle" />
                    </div>
                    <div class="flex flex-wrap items-center gap-2" v-if="data?.anime.moreInfo.genres?.length! > 0">
                        <UButton :to="`/genre/${toKebabCase(genre)}/1`" :label="genre" variant="soft" size="sm"
                            v-for="(genre, index) in data?.anime.moreInfo.genres" :key="index" />
                    </div>
                    <div v-html="data?.anime.info.description" />
                </div>
            </div>
        </div>
        <div class="space-y-2" v-if="data?.anime.info.charactersVoiceActors.length! > 0">
            <h2 class="text-xl font-bold">Characters</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <UAlert :title="i.character.name" :description="i.character.cast" color="neutral" variant="subtle"
                    :avatar="{
                        src: i.character.poster
                    }" v-for="(i, index) in data?.anime.info.charactersVoiceActors" :key="index" />
            </div>
        </div>
    </div>
</template>