<template>
    <h2 :id="id" class="scroll-mt-10 text-xl">
        <a class="group inline-flex items-center gap-x-2 font-semibold text-gray-800 dark:text-white" :href="`#${id}`">
            <slot></slot>
        </a>
    </h2>
    <p class="mt-1.5 sm:mt-3 text-sm text-gray-800 dark:text-gray-300">
        <slot name="description"></slot>
    </p>
</template>

<script setup>
defineProps({
    id: String,    
})
</script>