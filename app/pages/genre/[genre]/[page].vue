<script lang="ts" setup>
const { genre, page } = useRoute().params

const toTitleCase = (genre: string) => {
    return genre.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
</script>

<template>
    <Head>
        <Title>Aniryuu - {{ toTitleCase(genre as string) }}</Title>
    </Head>
    <Genre :genre="genre as string" :page="Number(page)" />
</template>