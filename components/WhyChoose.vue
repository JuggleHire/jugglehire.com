<template>
  <div class="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 mx-auto space-y-16">
    <div class="text-center">
      <h2 class="text-3xl text-gray-900 font-bold lg:text-4xl">
        Why
        Businesses Like
        You Choose
        <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
          Juggle Hire
        </span>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3  gap-6 lg:gap-12 flex-1" data-aos="fade-in">

      <div class="flex group" v-for="(item, index) in cardData" :key="item.title" data-aos="zoom-in"
        :data-aos-delay="100 * index">
        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>
        <div class="ms-5 sm:ms-6">
          <h3 class="text-base font-semibold leading-7 text-gray-900" v-text="item.title" />
          <p class="mt-1  text-base leading-7 text-gray-600" v-text="item.description" />
        </div>
      </div>
    </div>
  </div>
</template>
      
<script setup>
const cardData = [
  {
    title: 'Permanent Productivity Booster',
    description: '10X your time and efficiency virtually hiring from anywhere.'
  },
  {
    title: 'A to Z History Tracking',
    description: `See the candidate's repeated records as often as they apply.`
  },
  {
    title: 'Leader-style Communication',
    description: `Lead like a leader and let the candidate finds their future in your words.`
  },
  {
    title: 'Handy Support Team',
    description: `Get our tech team whenever you need to solve your hiring harassment.`
  },
  {
    title: 'Hidden Cash Flow Generator',
    description: `Hire geniuses who understand company's vision to produce unstoppable assets.`
  },
  {
    title: 'Go Recruitment To ROI',
    description: `Expertly interview, evaluate, and meet the suited talents who reflect ROI.`
  },
]
</script>