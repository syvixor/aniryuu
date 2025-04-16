<script lang="ts" setup>
const { category, page } = defineProps<{ category: "Popular" | "Trending"; page: number; }>();

const { data } = await useAsyncData(async () => {
    const [popular, trending] = await Promise.all([
        await $fetch("/api/popular", { query: { page: page } }),
        await $fetch("/api/trending", { query: { page: page } })
    ]);
    return { popular, trending }
});

onMounted(() => {
    if (isNaN(page)) {
        navigateTo(`/category/${category === 'Popular' ? 'popular' : 'trending'}/1`);
    }
});
</script>

<template>
    <div class="space-y-4 p-4 lg:p-0">
        <!-- Title Section -->
        <h1 class="text-2xl font-bold" v-if="category === 'Popular' || category === 'Trending'">
            {{ category === "Popular" ? "Most Popular" : "Trending Now" }}
        </h1>
        <!-- Popular Section -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4" v-if="category === 'Popular'">
            <NuxtLink v-for="i in data?.popular.animes.slice(0, 36)" :key="i.id!" class="group">
                <div class="space-y-2 transition-transform group-hover:-translate-y-1">
                    <div class="w-full h-60 md:h-80 lg:h-64">
                        <img :src="i.poster!" :alt="i.name!" class="w-full h-full rounded-xl object-cover">
                    </div>
                    <h2 class="text-sm md:text-base font-medium line-clamp-2">{{ i.name }}</h2>
                </div>
            </NuxtLink>
        </div>
        <!-- Trending Section -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4" v-else-if="category === 'Trending'">
            <NuxtLink v-for="i in data?.trending.animes.slice(0, 36)" :key="i.id!" class="group">
                <div class="space-y-2 transition-transform group-hover:-translate-y-1">
                    <div class="w-full h-60 md:h-80 lg:h-64">
                        <img :src="i.poster!" :alt="i.name!" class="w-full h-full rounded-xl object-cover">
                    </div>
                    <h2 class="text-sm md:text-base font-medium line-clamp-2">{{ i.name }}</h2>
                </div>
            </NuxtLink>
        </div>
        <!-- Else Section -->
        <Unknown type="Category" v-else />
        <!-- Pagination Section -->
        <div class="flex justify-between items-center mt-8" v-if="category === 'Popular' || category === 'Trending'">
            <UButton :to="`/category/${category === 'Popular' ? 'popular' : 'trending'}/${page - 1}`"
                icon="i-lucide-chevron-left" label="Previous" variant="subtle" :disabled="page <= 1" />
            <p class="text-base font-normal">Page {{ category === "Popular" ? data?.popular.currentPage :
                data?.trending.currentPage }}</p>
            <UButton :to="`/category/${category === 'Popular' ? 'popular' : 'trending'}/${page + 1}`"
                trailing-icon="i-lucide-chevron-right" label="Next" variant="subtle"
                :disabled="category === 'Popular' ? !data?.popular.hasNextPage : !data?.trending.hasNextPage" />
        </div>
    </div>
</template>