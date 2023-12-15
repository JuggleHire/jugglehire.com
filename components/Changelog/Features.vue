<template>
    <div class="mt-5 sm:mt-10">
        <changelog-new-icon></changelog-new-icon>

        <ul class="sm:list-disc text-gray-900 sm:ms-5 mt-3 space-y-1.5 dark:text-gray-200">
            <li v-for="(item, index) in features" :key="index"
                class="ps-1 sm:ps-1 text-sm text-gray-800 dark:text-gray-100">
                <span v-if="item.title"
                    class="inline-flex items-center gap-x-2 text-gray-800 font-semibold dark:text-gray-200">
                    {{ item.title }}:
                </span>
                <p v-if="item.description" class="text-gray-600 hover:text-gray-800 font-medium dark:text-gray-400">
                    {{ item.description }}
                </p>
                <img v-if="item.image" :src="item.image" :alt="item.title" class="w-full" />
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    features: Array
});
</script>