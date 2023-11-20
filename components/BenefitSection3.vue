<template>
  <div class="overflow-hidden bg-gray-900 py-16 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-blue-400">{{ sectionInfo.subtitle }}</h2>
            <p class="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">{{ sectionInfo.title }}</p>
            <p class="mt-6 sm:text-lg text-base sm:leading-8 text-gray-300"> {{ sectionInfo.description }} </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              <div v-for="feature in sectionInfo.features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img :src="sectionInfo.screenshot" alt="JuggleHire App screenshot" class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 lg:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const sectionInfo = {
  subtitle: "Find Quicker",
  title: "Efficient Candidate Discovery",
  description: `JuggleHire's "Efficient Candidate Discovery" feature helps you find the right candidates quickly, saving time and making your recruitment process more effective.`,
  screenshot: "/candidate-listing-ui.png",
  features: [
    {
      name: 'Smart Candidate Matching:',
      description:`Our algorithms and matching capabilities help you find candidates that meet your job requirements, saving you time reviewing resumes.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Streamlined Search Filters:',
      description: `You can use various search filters to find your ideal candidates. These filters include skills, experience, location, and more.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Instant Notifications:',
      description: `Receive real-time alerts to stay ahead in the recruitment game, ensuring you reach out to the best candidates promptly.`,
      icon: ServerIcon,
    },
  ]
}
</script>
