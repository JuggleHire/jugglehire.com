<template>
    <div class="max-w-4xl mx-auto py-10 dark:bg-gray-800">
        <div class="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <span
                class="inline-block mb-2 py-[.3125rem] px-2.5 rounded-full text-xs uppercase tracking-wide font-medium bg-white border border-gray-200 text-gray-800 dark:border-gray-700">
                <span class="block mt-0.5">Updates</span>
            </span>
            <h2 class="text-3xl font-bold dark:text-white">Changelog</h2>
            <p class="mt-2 md:text-lg text-gray-800 dark:text-gray-400">Stay in the Loop and See What's New Added, Fixed,
                Improved or Updated.!</p>
        </div>
        <div class="ps-4 sm:ps-0">

            <template v-for="(change, i) in changeLogs" :key="i">
                <!-- Step Item -->
                <changelog-step>
                    <template #version>
                        <changelog-version :date="change.date" :version="change.version"></changelog-version>
                    </template>

                    <template #default>
                        <changelog-title :id="change.version.replace('.', '_')">
                            {{ change.title }}
                            <template #description>
                                {{ change.description }}
                            </template>
                        </changelog-title>

                        <template v-if="change.image">
                            <changelog-image :src="change.image"></changelog-image>
                        </template>

                        <!-- New Examples pages -->
                        <changelog-features :features="change.features"></changelog-features>
                        <!-- New Examples pages -->

                        <!-- Fixes and Improvements -->
                        <changelog-fixing :improvements="change.improvements"></changelog-fixing>
                    </template>
                </changelog-step>
                <!-- End Step Item -->
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const title = "JuggleHire Changelog | Stay Updated with Our Latest Features and Improvements";
const description = "Explore the JuggleHire changelog to discover our latest updates, features, and improvements. Stay informed about the advancements we've made to enhance your experience on our platform. Keep track of our commitment to continuous improvement.";

useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
});

const { data } = await useFetch('api/change-log');
const changeLogs: any = data;
</script>
