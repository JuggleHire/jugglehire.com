<template>
    <div class="overflow-hidden bg-gray-700 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:ml-auto lg:pl-4 lg:pt-4">
                    <div class="lg:max-w-lg">
                        <h2 class="text-base font-semibold leading-7 text-blue-600">Key Features</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Save Time and Make Smarter Decisions
                        </p>
                        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                <dt class="inline font-semibold">
                                    <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                    <span class="text-white">{{ feature.name }}</span>
                                </dt>
                                {{ ' ' }}
                                <dd class="inline text-gray-100">{{ feature.description }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="flex items-start justify-end lg:order-first">
                    <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        width="2432" height="1442" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

    const features = [
        {
            name: 'Effortless Job Posting.',
            description:
                'Post your job openings on multiple platforms with just a few clicks.',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Automated Resume Screening.',
            description: 'Let our software analyze resumes and shortlist the most qualified candidates.',
            icon: LockClosedIcon,
        },
        {
            name: 'Integrated Interview Scheduling.',
            description: 'Schedule interviews seamlessly and keep everyone in the loop.',
            icon: ServerIcon,
        },
        {
            name: 'Collaborative Hiring.',
            description: 'Get input from your team with our collaborative hiring tools.',
            icon: LockClosedIcon,
        },
        {
            name: 'Data-Driven Insights.',
            description: 'Make informed decisions with powerful analytics and reporting.',
            icon: ServerIcon,
        },
    ]
</script>
