<template>
    <div class="relative py-10 sm:py-16">
        <SectionHeader title="Simplified Recruitment"
            text="Ultimate Recruitment Software For Small to Medium Business Hiring" />
        <div class="mt-12">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <img src="/jugglehire-app.jpg" alt="App screenshot" class="max-h-[700px] mx-auto rounded-lg w-auto" />
            </div>
        </div>
        <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="relative transition-all duration-300 hover:scale-105 pl-16">
                    <dt class="text-lg font-semibold leading-7 text-gray-900">
                        <div
                            class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                            <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ feature.name }}
                    </dt>
                    <dd class="mt-1 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
                </div>
            </dl>
        </div>
        <div class="mt-12 text-center flex flex-col gap-2 items-center justify-center">
            <a target="_blank"
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="https://app.jugglehire.com/register">
                Let Me In
                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </a>
            <p class="text-sm text-gray-600">I Want To Get Started Now</p>
        </div>
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
    </div>
</template>
<script setup>
import { ArrowPathIcon, BuildingOfficeIcon, CheckCircleIcon, ClipboardDocumentListIcon, CloudArrowUpIcon, Cog6ToothIcon, EnvelopeOpenIcon, FingerPrintIcon, LockClosedIcon, MagnifyingGlassCircleIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/vue/24/outline'

const features = [
    {
        name: "Reasonable Investment",
        description: "Say no to manual tasks when getting everything your money is worth.",
        icon: BuildingOfficeIcon,
    },
    {
        name: "Protect Countless Hours",
        description: "Systemize the requirement process and only focus on the crucial tasks.",
        icon: ClipboardDocumentListIcon,
    },
    {
        name: "Automatic Technology",
        description: "Pack all the urgent tools together when relying on just one software only.",
        icon: MagnifyingGlassCircleIcon,
    },
    {
        name: "Stay Secure",
        description: "Stop panicking about data when you guarantee it for lifetime security.",
        icon: EnvelopeOpenIcon,
    },
    {
        name: "All In One Solution",
        description: "Use it as a secret army against the countless recruitment threats",
        icon: Cog6ToothIcon,
    },
    {
        name: "Risk-free Decision",
        description: "Always decide right when securing the risk of having the right candidate",
        icon: RocketLaunchIcon,
    },
    {
        name: "Rich In Resources",
        description: "Enjoy all the tools, templates, and latest technology you need in one place.",
        icon: RocketLaunchIcon,
    },
    {
        name: "Social Integration",
        description: "Meet the right talents using social media where they’re invested.",
        icon: UsersIcon,
    },
    {
        name: "Expert Screening",
        description: "Meet the organizational goal of finding a competent candidate who deserves",
        icon: CheckCircleIcon,
    },
]
</script>
