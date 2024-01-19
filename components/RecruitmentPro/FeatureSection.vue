<template>
    <div class="bg-white py-10 sm:py-16">

        <!-- Feature section -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:text-center">
                <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tired of
                    manual recruitment?</h2>
                <p class="mt-6 sm:text-lg text-base sm:leading-8 text-gray-900">It’s not your fault,
                    even if you’re saying yourself</p>
            </div>
        </div>
        <div class="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div class="flex flex-col justify-center items-center text-center p-5" v-for="feature in features" :key="feature.name">
                    <component :is="feature.icon" class="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    <div class="mt-2 flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        {{ feature.name }}
                    </div>
                    <div class="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p class="flex-auto">{{ feature.description }}</p>
                    </div>
                </div>
            </dl>
            <div class="mt-8 text-center flex flex-col gap-2 items-center justify-center">
                <a target="_blank"
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="https://app.jugglehire.com/register">
                    Solve It All
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </a>
                <p class="text-base text-gray-600">Start free, Pay later</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ArrowPathIcon, BuildingOfficeIcon, CheckCircleIcon, CloudArrowUpIcon, Cog6ToothIcon, EnvelopeOpenIcon, FingerPrintIcon, LockClosedIcon, MagnifyingGlassCircleIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/vue/24/outline'

    const features = [
        {
            icon: ArrowPathIcon,
            name: "I’m still poor at hiring",
            description: "That’s why my productivity goes below the average. I can’t pay attention to what needs to be done. My development cost is going out of control and damaging my company’s reputation, workforce, and finances.",
        },
        {
            icon: ArrowPathIcon,
            name: "Getting right talent is overwhelming",
            description: "Because I’ve to go through all my tasks manually myself, that increases my recruitment cost, provides a negative experience, and never bring the passive candidates I want.",
        },
        {
            icon: ArrowPathIcon,
            name: "The market is too Competitive",
            description: "It naturally causes salary pressure, talent shortage, and extended hiring time. Plus, I see the poor retaining rate and lack of diversity everywhere. It could be poor negotiation skills or my fault.",
        },
        {
            icon: ArrowPathIcon,
            name: "Finding experts kills my time",
            description: "My lengthy hiring process, average job posting, and limited employer branding make it hard to get the right candidate. I see countless hiring biases and traditional methods are just useless.",
        }
    ]
</script>
