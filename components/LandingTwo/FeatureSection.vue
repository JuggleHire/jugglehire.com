<template>
    <div class="bg-gray-900 py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our USP
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-300">Supercharge your hiring process and watch your team flourish. Don't settle for ordinary, choose excellence.</p>
            </div>
            <!-- Icon Blocks -->
            <div class="max-w-[85rem] lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-12">
                    <!-- Icon Block -->
                    <div v-for="feature in features" :key="feature.name">
                        <div class="bg-gradient-to-r from-blue-200 via-gray-50 to-white/0 h-0.5 mt-3">
                            <div class="bg-blue-600 w-9 h-0.5"></div>
                        </div>
                        <div class="mt-5">
                            <h3 class="text-lg font-semibold text-white dark:text-white">{{ feature.name }}</h3>
                            <p class="mt-1 text-gray-200">{{ feature.description }}</p>
                        </div>
                    </div>
                    <!-- End Icon Block -->
                </div>
            </div>
            <!-- End Icon Blocks -->
        </div>
    </div>
</template>
<script setup>
    import { BookmarkIcon } from '@heroicons/vue/20/solid'

    const features = [
        {
            name: 'Precision Technology',
            description:
                "Our advanced algorithms ensure precise candidate matching, streamlining your hiring process.",
        },
        {
            name: 'User-Friendly Interface',
            description:
                "Navigate effortlessly through an intuitive dashboard for real-time insights and analytics.",
        },
        {
            name: 'Automated Efficiency',
            description:
                "Save time with automated interview scheduling, enhancing the candidate experience.",
        },
        {
            name: 'Collaborative Excellence',
            description: "Foster teamwork with collaborative hiring tools, making strategic decisions seamlessly.",
        },
        {
            name: 'Tailored Attraction',
            description: "Customize job listings to attract the right candidates with ease.",
        },
        {
            name: 'Decade of Expertise',
            description: "Leverage our X  years of proven experience in talent acquisition for unparalleled insights and strategies."
        }
    ]
</script>
