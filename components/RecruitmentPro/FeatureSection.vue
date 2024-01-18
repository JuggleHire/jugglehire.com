<template>
    <div class="bg-gray-900 dark:bg-white py-10 sm:py-16">

        <!-- Feature section -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:text-center">
                <h2 class="text-2xl font-bold text-gray-900 sm:text-[40px] sm:leading-[48px]">
                    Tired of manual recruitment?
                </h2>
                <p class="mt-6 text-lg text-gray-600">It’s not your fault, even if you’re saying yourself</p>
            </div>
        </div>
        <div class="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="text-center space-y-3 sm:p-6 p-3 rounded-md bg-blue-100">
                    <h2 class="text-3xl font-medium text-gray-900">
                        I’m still <span class="font-semibold">poor at hiring</span>
                    </h2>
                    <p class="text-base text-gray-600">That’s why my productivity goes below the average. I can’t pay
                        attention to what
                        needs to be done. My development cost
                        is going out of control and damaging my company’s reputation, workforce, and finances.</p>
                </div>
                <div class="text-center space-y-3 sm:p-6 p-3 rounded-md bg-blue-100">
                    <h2 class="text-3xl font-medium text-gray-900">
                        Getting right <span class="font semibold">talent is overwhelming</span>
                    </h2>
                    <p class="text-base text-gray-600">Because I’ve to go through all my tasks manually myself, that
                        increases my recruitment cost, provides a negative
                        experience, and never bring the passive candidates I want.</p>
                </div>
                <div class="text-center space-y-3 sm:p-6 p-3 rounded-md bg-blue-100">
                    <h2 class="text-3xl font-medium text-gray-900">
                        The market is <span class="font-semibold">too competitive</span>
                    </h2>
                    <p class="text-base text-gray-600">It naturally causes salary pressure, talent shortage, and
                        extended hiring time. Plus, I see the poor retaining rate and
                        lack of diversity everywhere. It could be poor negotiation skills or my fault.</p>
                </div>
                <div class="text-center space-y-3 sm:p-6 p-3 rounded-md bg-blue-100">
                    <h2 class="text-3xl font-medium text-gray-900">
                        Finding experts <span class="font-semibold">kills my time</span>
                    </h2>
                    <p class="text-base text-gray-600">My lengthy hiring process, average job posting, and limited
                        employer branding make
                        it hard to get the right candidate. I
                        see countless hiring biases and traditional methods are just useless.</p>
                </div>
            </div>
            <div class="mt-8 text-center">
                <a class="text-base inline-flex items-center gap-x-2 bg-blue-600 border border-blue-100 hover:bg-blue-500 text-white p-2 px-5 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
                    href="#">
                    Solve It All
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </a>
                <p class="text-sm mt-2">Start free, Play later</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ArrowPathIcon, BuildingOfficeIcon, CheckCircleIcon, CloudArrowUpIcon, Cog6ToothIcon, EnvelopeOpenIcon, FingerPrintIcon, LockClosedIcon, MagnifyingGlassCircleIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/vue/24/outline'

    const features = [
        {
            name: "I’m still poor at hiring...",
            description: "That’s why my productivity goes below the average. I can’t pay attention to what needs to be done. My development cost is going out of control and damaging my company’s reputation, workforce, and finances.",
        },
        {
            name: "Getting right talent is overwhelming...",
            description: "Because I’ve to go through all my tasks manually myself, that increases my recruitment cost, provides a negative experience, and never bring the passive candidates I want.",
        },
        {
            name: "The market is too Competitive...",
            description: "It naturally causes salary pressure, talent shortage, and extended hiring time. Plus, I see the poor retaining rate and lack of diversity everywhere. It could be poor negotiation skills or my fault.",
        },
        {
            name: "Finding experts kills my time...",
            description: "My lengthy hiring process, average job posting, and limited employer branding make it hard to get the right candidate. I see countless hiring biases and traditional methods are just useless.",
        }
    ]
</script>
