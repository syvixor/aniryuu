<script lang="ts" setup>
const { genre, page } = defineProps<{ genre: string; page: number; }>();

const { data } = await useFetch("/api/genre", { query: { genre, page } })

onMounted(() => {
    if (isNaN(page)) {
        navigateTo("/");
    }
});
</script>

<template>
    <div class="space-y-4 p-4 lg:p-0" v-if="data">
        <!-- Title Section -->
        <h1 class="text-2xl font-bold">{{ data.genreName.replace("Anime", "") }} Genre</h1>
        <!-- Genre Section -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            <NuxtLink v-for="i in data.animes.slice(0, 30)" :key="i.id!" class="group">
                <div class="space-y-2 transition-transform group-hover:-translate-y-1">
                    <div class="w-full h-60 md:h-80 lg:h-64">
                        <img :src="i.poster!" :alt="i.name!" class="w-full h-full rounded-xl object-cover">
                    </div>
                    <h2 class="text-sm md:text-base font-medium line-clamp-2">{{ i.name }}</h2>
                </div>
            </NuxtLink>
        </div>
        <!-- Pagination Section -->
        <div class="flex justify-between items-center mt-8">
            <UButton :to="`/genre/${genre}/${page - 1}`" icon="i-lucide-chevron-left" label="Previous" variant="subtle"
                :disabled="page <= 1" />
            <p class="text-base font-normal">Page {{ data?.currentPage }}</p>
            <UButton :to="`/genre/${genre}/${page + 1}`" trailing-icon="i-lucide-chevron-right" label="Next"
                variant="subtle" :disabled="!data?.hasNextPage" />
        </div>
    </div>
    <!-- Else Section -->
    <div class="p-4 lg:p-0" v-else>
        <Unknown type="Genre" />
    </div>
</template>