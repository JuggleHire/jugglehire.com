<template>
  <div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-blue-400">{{ sectionInfo.subtitle }}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ sectionInfo.title }}</p>
            <p class="mt-6 text-lg leading-8 text-gray-300"> {{ sectionInfo.description }} </p>
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
        <img :src="sectionInfo.screenshot" alt="JuggleHire App screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const sectionInfo = {
  subtitle: "Get it Done with Ease",
  title: "Easy Job Posting",
  description: `Finding the right candidate for your job openings has never been this effortless. JuggleHire simplifies the hiring process with a comprehensive suite of features designed to streamline your recruitment journey.`,
  screenshot: "/post-job-ui.png",
  features: [
    {
      name: 'Job Information:',
      description:'Post your job openings in minutes with our user-friendly platform. Provide all the essential details to attract the best candidates.',
      icon: CloudArrowUpIcon,
    },
    {
      name:'Candidate Information:',
      description:'Collect candidate information seamlessly. JuggleHire ensures you have all the data you need to make informed hiring decisions.',
      icon: LockClosedIcon,
    },
    {
      name: 'Automated Screening:',
      description: 'Save time and eliminate unqualified candidates with our automated screening tools. Let technology do the heavy lifting so you can focus on the best fit for your team.',
      icon: ServerIcon,
    },
  ]
}
</script>
