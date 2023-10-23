<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-blue-600">{{ sectionInfo.subtitle }}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ sectionInfo.title }}</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">{{ sectionInfo.description }}</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in sectionInfo.features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img :src="sectionInfo.screenshot" alt="JuggleHire App screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'


const sectionInfo = {
  subtitle: "Look professional",
  title: "Company Career Portal",
  description: `First impressions matter, and now you'll always make a professional one. Juggle Hire is a polished and comprehensive platform that not only simplifies your hiring but also enhances your brand's image.`,
  screenshot: "/company-profile-ui.png",
  features: [
    {
      name: 'Everything in one place:',
      description:`Post jobs, collect candidate data, schedule interviews, and manage your hiring pipeline with ease, all within a clean and professional environment.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Company Gallery:',
      description: `Showcase your company's culture, values, and workplace through visuals. Leave a lasting impression on potential candidates and highlight your organization's unique qualities.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Open Jobs:',
      description: `A neatly organised list of your current openings will not only attract talent but also ensure you're always ahead of the game in your hiring process.`,
      icon: ServerIcon,
    },
  ]
}
</script>
