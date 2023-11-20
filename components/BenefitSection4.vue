<template>
  <div class="overflow-hidden bg-white py-16 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-blue-600">{{ sectionInfo.subtitle }}</h2>
            <p class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ sectionInfo.title }}</p>
            <p class="mt-6 sm:text-lg text-base sm:leading-8 text-gray-600">{{ sectionInfo.description }}</p>
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
          <img :src="sectionInfo.screenshot" alt="JuggleHire App screenshot" class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem]" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'


const sectionInfo = {
  subtitle: "Best-fit candidates",
  title: "Easy-to-use Candidate Sorting",
  description: `The "Easy-to-Use Candidate Sorting" feature offered by JuggleHire simplifies and speeds up the candidate selection process, making it easier to identify the most suitable candidates.`,
  screenshot: "/candidate-sorting-ui.png",
  features: [
    {
      name: 'Intuitive Sorting Interface:',
      description:`Quickly identify top performers, promising talent, and other categories relevant to your hiring needs, saving you time and effort during the decision-making process.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Customized Filters:',
      description: `Customize your sorting criteria to fit your needs. Use filters to find specific skills, qualifications, or attributes for your open positions.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Streamlined Collaboration:',
      description: `Discuss and evaluate candidates, considering their strengths and potential concerns within the platform, to ensure informed and collaborative hiring decisions.`,
      icon: ServerIcon,
    },
  ]
}
</script>
