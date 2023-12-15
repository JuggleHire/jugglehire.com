<template>
    <div class="my-4 bg-white border border-gray-100 p-1 shadow-sm rounded-2xl dark:bg-gray-800 dark:border-gray-700">
        <img class="border border-gray-100 rounded-xl dark:border-gray-700" :src="src" :alt="alt">
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true, 
    },
    alt: {
        type: String,
        default: "JuggleHire Release Hero Image",
    },
})
</script>