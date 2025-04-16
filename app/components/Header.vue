<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";

const links: ButtonProps[] = [
    {
        to: "/",
        icon: "i-lucide-home",
        label: "Home",
        color: "primary",
        variant: "soft"
    },
    {
        to: "/category/trending/1",
        icon: "i-lucide-flame",
        label: "Trending",
        color: "neutral",
        variant: "ghost"
    }
];
</script>

<template>
    <div class="flex justify-center items-center gap-2 p-4">
        <UButton :to="link.to" :icon="link.icon" :label="link.label" :color="link.color" :variant="link.variant"
            :disabled="link.disabled" v-for="(link, index) in links" :key="index" />
            <Search />
            <Theme />
    </div>
</template>