<script lang="ts" setup>
const { data: genres } = await useFetch("/api/genres");
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2">
        <UButton :to="`/genre/${formatString(genre, 'kebab')}/1`" :label="genre" variant="soft" block
            v-for="(genre, index) in genres" :key="index + 1" />
    </div>
</template>