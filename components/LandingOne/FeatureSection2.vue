<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto bg-white mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <h2 class="text-2xl font-bold leading-7 text-blue-600">Why Choose Our Recruitment Software?</h2>
            <!-- Icon Blocks -->
            <div class="max-w-[85rem] lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-12">
                    <!-- Icon Block -->
                    <div v-for="feature in features" :key="feature.name">
                        <div class="bg-gradient-to-r from-blue-200 via-gray-50 to-white/0 h-0.5 mt-3">
                            <div class="bg-blue-600 w-9 h-0.5"></div>
                        </div>
                        <div class="mt-5">
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ feature.name }}</h3>
                            <p class="mt-1 text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
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
            name: 'Streamlined Hiring Process',
            description:
                "From posting jobs to managing applications, we've got you covered.Effortlessly navigate through each step, saving you time and resources.",
        },
        {
            name: 'Smart Candidate Matching',
            description:
                "Bid farewell to the days of manual candidate sorting. Our intelligent algorithms analyze resumes, skills, and experience to present you with the most qualified candidates. ",
        },
        {
            name: 'Time is Money - Save Both',
            description:
                "Our software is designed to boost efficiency. Spend less time on administrative tasks and more time focusing on what matters – growing your business. Time saved is money earned.",
        },
        {
            name: 'Mobile Accessibility',
            description: "Recruit on the go! Our mobile-friendly platform allows you to manage your hiring process anytime, anywhere. ",
        },
        {
            name: 'Unparalleled Customer Support',
            description: "Our dedicated support team is here to assist you every step of the way.",
        }
    ]
</script>
