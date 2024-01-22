<template>
    <div class="overflow-hidden bg-white py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 ">
                    <div class="lg:max-w-lg">
                        <p class="mt-2 text-lg md:text-2xl leading-8 text-gray-600">Simple. Clean. Attractive.</p>
                        <p class="mt-6 text-3xl font-bold tracking-tight text-gray-900 !leading-[120%] sm:text-5xl md:text-7xl">Job Post.</p>
                        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div v-for="feature in featuresChecks" :key="feature.name" class="relative ">
                                <dt class="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <span class="text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-6 h-6">
                                            <path fill-rule="evenodd"
                                                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    {{ feature }}
                                </dt>
                            </div>
                        </dl>
                    </div>
                </div>
                <img src="/job-posting.png" alt="Product screenshot"
                    class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width="2432" height="1442" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { InformationCircleIcon } from '@heroicons/vue/20/solid';

    const featuresChecks = [
        'Confidently Offer The Job',
        'Gather The Purest Information',
        'Attract Only The Potential Talent'
    ]
</script>
