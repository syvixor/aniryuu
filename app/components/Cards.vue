<script lang="ts" setup>
import type { IAnimeList } from "~/types";

const { data, limit } = defineProps<{ data: IAnimeList; limit?: number; }>();
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        <NuxtLink :to="`/info/${i.id}`" v-for="i in limit ? data.data.slice(0, limit) : data.data" :key="i.id!"
            class="group flex flex-col gap-2 transition-transform hover:scale-95">
            <div class="flex-1 w-full h-full rounded-xl overflow-hidden">
                <img :src="i.poster!" :alt="i.name!" class="w-full h-full rounded-xl object-cover scale-[102%]">
            </div>
            <div class="flex flex-col">
                <div class="flex items-center gap-1">
                    <UBadge :label="i.type" color="neutral" variant="subtle" size="sm" v-if="i.type" />
                    <UBadge :label="i.duration" color="neutral" variant="subtle" size="sm" v-if="i.duration" />
                    <UBadge :label="i.rating" color="warning" variant="subtle" size="sm" v-if="i.rating" />
                </div>
                <h2 class="text-base font-medium truncate transition-colors group-hover:text-primary-500">
                    {{ i.name }}
                </h2>
            </div>
        </NuxtLink>
    </div>
</template>