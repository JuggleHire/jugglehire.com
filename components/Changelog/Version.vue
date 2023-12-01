<template>
    <div class="relative z-10 sm:ps-0 sm:pb-20 sm:w-1/4 sm:text-end">
        <div class="sm:sticky sm:top-12 sm:end-0">
            <div class="ps-7 sm:pe-[1.6125rem]">
                <a class="inline-block py-1 px-2 rounded-lg text-xs font-medium bg-blue-600 text-white dark:bg-blue-600"
                    :href="`#${version.replace('.', '_')}`">
                    {{ version }}
                </a>
            </div>
            <div
                class="flex items-center gap-x-3 py-2 px-3.5 bg-white border border-transparent rounded-full mt-0.5 -ms-7 sm:ms-0 sm:-me-7 dark:bg-slate-300">
                <div class="grow order-2 sm:order-1">
                    <span class="text-sm font-medium text-gray-700 dark:text-black">
                        {{ date }}
                    </span>
                </div>
                <div
                    class="flex-shrink-0 order-1 sm:order-2 h-7 w-7 flex justify-center items-center bg-white border border-slate-200 rounded-full shadow-sm dark:bg-slate-800 dark:shadow-lg dark:border-slate-700">
                    <CalendarDaysIcon class="flex-shrink-0 w-4 h-5 text-gray-800 dark:text-neutral-300" />                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CalendarDaysIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
    date: String,
    version: String,    
});
</script>