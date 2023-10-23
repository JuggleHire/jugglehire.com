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
  subtitle: "Keep your candidate updated",
  title: "Send email is 1 click away",
  description: `Effective communication with candidates is essential for a positive recruitment experience. JuggleHire will allow you to easily keep your candidates informed at every stage.`,
  screenshot: "/rejection-email-ui.png",
  features: [
    {
      name: 'Application received email:',
      description:
        `Send an "Application Received" email as soon as a candidate applies to show professionalism and commitment to a transparent process.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Rejection email:',
      description: `The "Rejection Email" function allows you to send rejection notices quickly and with professionalism, helping you maintain a positive brand reputation.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Application status:',
      description: `Stay transparent and keep your candidates in the loop by sending "Application Status Updates" in real-time.`,
      icon: ServerIcon,
    },
  ]
}
</script>
