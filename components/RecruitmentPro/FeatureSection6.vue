<template>
    <div class="overflow-hidden bg-white pt-10 pb-24 relative">
        <div class="mx-auto max-w-2xl lg:max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:ml-auto lg:pl-4 lg:pt-4 relative">

                    <div class="lg:max-w-lg space-y-10">
                        <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Master At Hiring Talents
                        </h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Become More Fluent Starting From Scratch</p>
                        <div class="space-y-2">
                            <template v-for="item in cardData" :key="item.title">
                                <nuxt-link :to="item.href"
                                    class="block group hover:bg-gray-50 p-3 rounded-md transition-all duration-300">
                                    <div class="flex">
                                        <div class=" text-green-600  shrink-0 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd"
                                                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                    clip-rule="evenodd" />
                                            </svg>

                                        </div>
                                        <div class="ms-3">
                                            <p class="text-lg font-semibold leading-7 text-gray-900"
                                                v-text="item.title" />
                                            <p class="mt-1  text-base leading-7 text-gray-600"
                                                v-text="item.description" />
                                            <span
                                                class="flex items-center mt-3 text-blue-600 hover:text-blue-700 font-semibold gap-2"
                                                data-v-inspector="components/CanITrySection.vue:11:9"> Learn More
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6"
                                                    data-v-inspector="components/CanITrySection.vue:14:11">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                                        data-v-inspector="components/CanITrySection.vue:16:13"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="flex items-start justify-end lg:order-first">
                    <img src="/jugglehire-app.jpg" alt="Product screenshot"
                        class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem]"
                        width="2432" height="1442" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


    const cardData = [
        {
            href: '/recruitment-software-for-small-business-owner',
            title: "Small Business Recruitment Software",
            description: `Stop small business requirements nightmare`,

        },
        {
            href: '',
            title: "Remote Hiring Solution.",
            description: `Virtually get your team members to keep coming.`,

        },
        {
            href: '',
            title: "Talent Acquisition Management.",
            description: `Hire talent like the snap of a finger.`,

        },
    ];
</script>
