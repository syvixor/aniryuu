<script lang="ts" setup>
import type { IAnimeList } from "~/types";

const { pagination, page } = defineProps<{ pagination: IAnimeList; page: number; }>();

onMounted(() => {
    if (isNaN(page)) {
        const url = useRoute().fullPath.replace(/\/[^/]+$/, "");
        navigateTo(`${url}/1`);
    }
});
</script>

<template>
    <div class="flex justify-between items-center mt-8" v-if="!isNaN(page)">
        <UButton :to="`${useRoute().fullPath.replace(/\/[^/]+$/, '')}/${page - 1}`" icon="i-lucide-chevron-left"
            label="Previous" variant="subtle" :disabled="page <= 1" />
        <p class="text-base font-normal">
            PAGE {{ pagination.pagination.currentPage }}/{{ pagination.pagination.totalPages }}
        </p>
        <UButton :to="`${useRoute().fullPath.replace(/\/[^/]+$/, '')}/${page + 1}`"
            trailing-icon="i-lucide-chevron-right" label="Next" variant="subtle"
            :disabled="!pagination.pagination.hasNextPage" />
    </div>
</template>