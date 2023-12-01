<template>
    <div class="mt-5 sm:mt-10">
        <changelog-fix-icon></changelog-fix-icon>
        <ul class="sm:list-disc text-gray-900 sm:ms-5 mt-3 space-y-1.5 dark:text-gray-200">
            <li v-for="(item, index) in improvements" :key="index"
                class="ps-1 sm:ps-1 text-sm text-gray-800 dark:text-gray-400">
                <strong v-if="item.type" class="dark:text-gray-300">{{ item.type }}:</strong> {{ item.description }}
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    improvements: Array
})
</script>