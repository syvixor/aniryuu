<script lang="ts" setup>
defineProps<{ type: "Category" | "Genre"; }>();
</script>

<template>
    <!-- Unknown Section -->
    <div class="space-y-4">
        <h1 class="text-2xl font-bold">Unknown {{ type }}</h1>
        <UAlert :title="`Unknown ${type}`" :description="`The selected ${type.toLocaleLowerCase()} is not recognized.`"
            color="error" variant="subtle" />
    </div>
</template>