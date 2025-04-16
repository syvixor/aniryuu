<script lang="ts" setup>
const { data: genres } = await useFetch("/api/genres");

const toKebabCase = (genre: string) => {
    return genre.trim().toLowerCase().replace(/\s+/g, "-");
}
</script>

<template>
    <div class="space-y-4 p-4 lg:p-0">
        <h1 class="text-2xl font-bold">Genres</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2">
            <UButton :to="`/genre/${toKebabCase(i)}/1`" :label="i" variant="soft" block v-for="(i, index) in genres"
                :key="index + 1" />
        </div>
    </div>
</template>