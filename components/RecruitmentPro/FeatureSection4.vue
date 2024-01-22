<template>
    <div class="bg-black py-10 sm:py-16">

        <!-- Feature section -->
        <SectionHeader title="Go Beyond The Traditional Root" text="Maximizing Effectiveness by Doing Less" titleClass="!text-white" textClass="!text-gray-200" />
        <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                <div v-for="feature in features" :key="feature.name" class="relative pl-16">
                    <dt class="text-xl font-semibold leading-7 text-white">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                            <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ feature.name }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-300">{{ feature.description }}</dd>
                </div>
            </dl>
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
