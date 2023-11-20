<template>
  <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 sm:px-8 px-5 pb-5 sm:pb-8 pt-80 sm:pt-48 lg:pt-80">
    <img :src="post.imageUrl" :alt="post.title" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
    <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

    <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      <time :datetime="post.datetime" class="mr-8">{{ post.date }}</time>
      <div class="-ml-4 flex items-center gap-x-4">
        <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <div class="flex gap-x-2.5">
          <img :src="post.author.imageUrl" :alt="post.author.name" class="h-6 w-6 flex-none rounded-full bg-white/10" />
          {{ post.author.name }}
        </div>
      </div>
    </div>
    <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
      <a :href="post.href">
        <span class="absolute inset-0" />
        {{ post.title }}
      </a>
    </h3>
  </article>
</template>

<script setup>
const props = defineProps(['post'])
</script>
