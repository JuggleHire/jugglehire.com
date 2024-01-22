<template>
    <div class="mx-auto max-w-2xl lg:text-center">
        <h3 class="text-base font-semibold leading-7 text-blue-600" :class="subtitleClass" v-html="subtitle" v-if="subtitle" />
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" :class="titleClass" v-html="title" v-if="title" />
        <p class="mt-6 text-lg leading-8 text-gray-600" :class="textClass" v-html="text" v-if="text" />
    </div>
</template>
<script setup>
    import { defineProps } from "vue";
    defineProps({
        subtitle: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        titleClass: {
            type: String,
            default: ''
        },
        subtitleClass: {
            type: String,
            default: ''
        },
        textClass: {
            type: String,
            default: ''
        }
    })
</script>
