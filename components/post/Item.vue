<!-- <template>
    <nuxt-link :to="pathName"
        class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group bg-white">
        <div class="text-green-500 md:mb-2 lg:mb-0">
            <img class="w-full lg:h-52 md:h-48 h-48 object-center object-cover" v-if="item.image && item.image.url"
                :src="item.image.url" :alt="item.title">
        </div>
        <div class="p-6 bg-white">
            <p class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            </p>
            <h2 class="title-font text-lg font-medium mb-2 text-gray-900 group-hover:text-primary">
                {{ item.title }}
            </h2>
            <p class="leading-relaxed mb-3 text-base font-light">
                {{ item.shortDescription }}
            </p>
        </div>
    </nuxt-link>
</template> -->

<!-- <script>
    export default {
        props: ["item"],
        data() {
            return {
                pathName: `post/${this.item.slug}`,
            };
        },
    };
</script> -->
<template>
    <article
        class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img :src="item.image.url" :alt="item.title" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time :datetime="item.datetime" class="mr-8">{{ item.date }}</time>
            <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="flex gap-x-2.5">
                    <!-- <img :src="item.author.imageUrl" :alt="item.title"
                        class="h-6 w-6 flex-none rounded-full bg-white/10" /> -->
                    <!-- {{ item.author.name }} -->
                </div>
            </div>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a :href="item.href">
                <span class="absolute inset-0" />
                {{ item.title }}
            </a>
        </h3>
    </article>
</template>

<script setup>
    const item = defineProps(['item'])
    const pathName= `post/${item.slug}`;
</script>
