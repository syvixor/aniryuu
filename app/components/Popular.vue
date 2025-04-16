<script lang="ts" setup>
const { data } = await useFetch("/api/popular", { query: { page: 1 } });
</script>

<template>
    <div class="space-y-4 p-4 lg:p-0">
        <h1 class="text-2xl font-bold">Most Popular</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            <NuxtLink v-for="(i, index) in data?.animes.slice(0, 6)" :key="i.id!"
                class="group rounded-xl transition-colors hover:bg-neutral-200 hover:dark:bg-neutral-800">
                <div class="space-y-2 transition-transform group-hover:scale-90">
                    <div class="w-full h-60 md:h-80 lg:h-64">
                        <img :src="i.poster!" :alt="i.name!" class="w-full h-full rounded-xl object-cover">
                    </div>
                    <div class="flex items-center gap-2">
                        <h2 class="text-5xl font-bold">{{ index + 1 }}</h2>
                        <div class="space-y-1">
                            <h3 class="text-sm md:text-base font-medium line-clamp-2">
                                {{ i.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <UButton to="/category/popular/1" label="Explore More" variant="subtle" block />
    </div>
</template>