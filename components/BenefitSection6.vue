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
  subtitle: "Seamless Interview",
  title: "Scheduling with JuggleHire",
  description: `Efficiently coordinating interviews is essential for a successful hiring process, and we simplifies this task. We offer you a hassle-free way to set up interviews with candidates, ensuring a smooth and productive experience.`,
  screenshot: "/interview-schedule.png",
  features: [
    {
      name: 'Calendar Integration:',
      description:
        `Sync your calendar with JuggleHire to easily see your availability and avoid double bookings or scheduling conflicts.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Automated Notifications:',
      description: `JuggleHire sends automated notifications to both the employer and the candidate to ensure that both parties are well informed.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Communication Tracking:',
      description: `The dashboard provides a clear overview of all communication with candidates, including application emails, interview invitations, status updates, and feedback.`,
      icon: ServerIcon,
    },
  ]
}
</script>
