<script lang="ts" setup>
const { data } = await useFetch("/api/trending", { query: { page: 1 } });
</script>

<template>
    <div class="space-y-4 p-4 lg:p-0">
        <h1 class="text-2xl font-bold">Trending Now</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            <NuxtLink :to="`/info/${i.id}`" v-for="i in data?.animes.slice(0, 12)" :key="i.id!" class="group">
                <div class="space-y-2 transition-transform group-hover:-translate-y-1">
                    <div class="w-full h-60 md:h-80 lg:h-64">
                        <img :src="i.poster!" :alt="i.name!" class="w-full h-full rounded-xl object-cover">
                    </div>
                    <h2 class="text-sm md:text-base font-medium line-clamp-2">{{ i.name }}</h2>
                </div>
            </NuxtLink>
        </div>
        <UButton to="/category/trending/1" label="Explore More" variant="subtle" block />
    </div>
</template>