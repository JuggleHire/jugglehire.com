<template>
  <div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">{{ sectionInfo.subtitle }}</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{{ sectionInfo.title }}</p>
            <p class="mt-6 text-lg leading-8 text-gray-300"> {{ sectionInfo.description }} </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              <div v-for="feature in sectionInfo.features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-white">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img :src="sectionInfo.screenshot" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const sectionInfo = {
  subtitle: "Find Quicker",
  title: "Efficient Candidate Discovery",
  description: `When time is of the essence, finding the right candidates swiftly is crucial. JuggleHire's "Efficient Candidate Discovery" feature empowers you to do just that. Here are three essential highlighting points that make your recruitment process faster and more effective:`,
  screenshot: "/candidate-listing-ui.png",
  features: [
    {
      name: 'Smart Candidate Matching:',
      description:`Our advanced algorithms and intelligent matching capabilities ensure that you find candidates that perfectly fit your job requirements. Say goodbye to endless scrolling through resumes – JuggleHire does the heavy lifting for you, presenting you with the best-matched candidates instantly.`,
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Streamlined Search Filters',
      description: `With a range of powerful search filters at your disposal, you can pinpoint your ideal candidates with precision. Filter by skills, experience, location, and more, narrowing down your candidate pool to a manageable list of top prospects in a matter of seconds.`,
      icon: LockClosedIcon,
    },
    {
      name: 'Instant Notifications',
      description: `Don't wait for candidates to come to you; let JuggleHire notify you as soon as a matching candidate applies. Receive real-time alerts to stay ahead in the recruitment game, ensuring you reach out to the best candidates promptly.`,
      icon: ServerIcon,
    },
  ]
}
</script>
