<script lang="ts" setup>
const list = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
</script>

<template>
    <USeparator />
    <div class="space-y-4 p-4">
        <div class="-space-y-1">
            <h1 class="text-2xl font-bold">A-Z List</h1>
            <p class="text-base font-normal">
                Searching anime order by alphabet name A to Z.
            </p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
            <UButton label="#" color="neutral" variant="soft" disabled />
            <UButton label="0-9" color="neutral" variant="soft" disabled />
            <UButton :label="i.toUpperCase()" color="neutral" variant="soft" disabled v-for="(i, index) in list"
                :key="index + 1" />
        </div>
        <USeparator />
        <div class="flex items-center gap-2">
            <UButton to="/dmca" label="Dmca" color="neutral" variant="soft" size="sm" />
            <UButton to="https://github.com/syvixor/aniryuu" target="_blank" label="Github" color="neutral"
                variant="soft" size="sm" />
            <UButton to="https://github.com/syvixor/aniryuu/issues" target="_blank" label="Report Bug"
                color="neutral" variant="soft" size="sm" />
        </div>
        <div class="space-y-2">
            <p class="text-sm font-normal opacity-85">
                This site does not store any files on our server, we only linked to the media which is hosted on
                3rd party services.
            </p>
            <p class="text-base font-normal">
                ©{{ new Date().getFullYear() }}, Aniryuu - All rights reserved.
            </p>
        </div>
    </div>
</template>