<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24">
        <div class="lg:max-w-max ">
          <h2 class="mt-2 text-2xl leading-[3rem] lg:text-4xl font-bold tracking-tight text-gray-900  lg:leading-[4rem]">
            <span class="text-[3rem] lg:text-[4.45rem]">Why</span> <br>
            <span> Businesses Like</span> <br>
            <span class="text-3xl lg:text-5xl"> <strong>You</strong></span> <em>Choose</em> <br>
            <span class="text-blue-600 text-3xl lg:text-5xl">JuggleHire</span>
          </h2>
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
        <div class="grid grid-cols-1 lg:grid-cols-2  gap-6 lg:gap-12 mt-16 flex-1">
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
  </div>
</template>

<script setup>
import { BarsArrowUpIcon, MagnifyingGlassPlusIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, CurrencyDollarIcon, CubeIcon } from '@heroicons/vue/20/solid';
const features = [
  'No Hiring Headache',
  'No Data Dilemma',
  'No Talent Scarcity'
]
const cardData = [
  {
    title: 'Permanent Productivity Booster',
    description: '10X your time and efficiency virtually hiring from anywhere.',
    icon: BarsArrowUpIcon
  },
  {
    title: 'A to Z History Tracking',
    description: `See the candidate's repeated records as often as they apply.`,
    icon: MagnifyingGlassPlusIcon
  },
  {
    title: 'Leader-style Communication',
    description: `Lead like a leader and let the candidate finds their future in your words.`,
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    title: 'Handy Support Team',
    description: `Get our tech team whenever you need to solve your hiring harassment.`,
    icon: UserGroupIcon,
  },
  {
    title: 'Hidden Cash Flow Generator',
    description: `Hire geniuses who understand company's vision to produce unstoppable assets.`,
    icon: CurrencyDollarIcon
  },
  {
    title: 'Go Recruitment To ROI',
    description: `Expertly interview, evaluate, and meet the suited talents who reflect ROI.`,
    icon: CubeIcon
  },
]
</script>
