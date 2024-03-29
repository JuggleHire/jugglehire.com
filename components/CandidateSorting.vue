<template>
  <div class="overflow-hidden bg-white pt-0 pb-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="mt-2 text-3xl leading-[3rem] font-bold tracking-tight text-gray-900 sm:text-4xl sm:!leading-[3.8rem]">Advanced
              Candidate Sorting.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Sort, analyze, and finalize the candidates, measuring the core
              competency based on your expectations. Stop overpromising, and
              never hire an incompetent candidate whatsoever.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative ">
                <dt class="flex items-center gap-2 font-semibold text-gray-900">
                  <span class="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd" />
                    </svg>

                  </span>
                  {{ feature }}
                </dt>
              </div>
            </dl>
          </div>
        </div>
        <img src="/candidate-sorting.jpg" alt="Product screenshot"
          class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432" height="1442" />
      </div>
      <div class="max-w-2xl lg:max-w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-16">
        <div class="flex group transition duration-200 ease-linear hover:scale-105" v-for="(item) in cardData"
          :key="item.title">
          <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shrink-0">
            <component :is="item.icon" class="h-6 w-6" />
          </div>
          <div class="ms-5 sm:ms-6">
            <p class="text-lg font-semibold leading-7 text-gray-900" v-text="item.title" />
            <p class="mt-1  text-base leading-7 text-gray-600" v-text="item.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ViewfinderCircleIcon, FunnelIcon, ClipboardDocumentListIcon } from '@heroicons/vue/20/solid'

const features = [
  'Automatically Summarize Data',
  'Collect Information Like Pro',
  'Pick True Talent From The Mess'
]

const cardData = [
  {
    icon: ViewfinderCircleIcon,
    title: 'Auto-Candidate Discovery',
    description: `Get only efficient candidates to join the
team using "Efficient Candidate

Discovery."`
  },
  {
    icon: FunnelIcon,
    title: 'First-track Filtering',
    description: `Filter location, skill, expertise, experience, and
everything you feel is urgent for business.`
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Candidate Scoreboard',
    description: `Using competency analyzing tools to uncover the
candidate's capabilities in a second.`
  }
]
</script>
