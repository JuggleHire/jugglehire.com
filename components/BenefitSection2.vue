<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">{{ sectionInfo.subtitle }}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ sectionInfo.title }}</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">{{ sectionInfo.description }}</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in sectionInfo.features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img :src="sectionInfo.screenshot" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
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
  description: `First impressions matter, and with JuggleHire, you'll always make a professional one. Our "Company Career Portal" offers you a polished and comprehensive platform that not only simplifies your hiring but also enhances your brand's image.`,
  screenshot: "/company-profile-ui.png",
  features: [
    {
      name: 'Everything in one place',
      description:`Streamline your recruitment process from the start. JuggleHire's "Company Career Portal" puts everything you need in one central location.Post jobs, collect candidate data, schedule interviews, and manage your hiring pipeline with ease, all within a clean and professional environment.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Company Gallery',
      description: `Showcase your brand with our "Company Gallery" feature. Display your company's culture, values, and workplace through images and media. Make a lasting impression on potential candidates and highlight what makes your organization stand out.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Open Jobs',
      description: `Keep candidates informed about your job opportunities with the "Open Jobs" section. A neatly organized list of your current openings will not only attract talent but also ensure you're always ahead of the game in your hiring process.`,
      icon: ServerIcon,
    },
  ]
}
</script>
