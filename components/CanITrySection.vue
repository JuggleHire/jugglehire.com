
<template>
  <div class="mt-0 md:mt-24 relative  isolate  overflow-hidden bg-white px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true">
      <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true">
      <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div class="px-6 py-12 md:py-24 sm:px-6 lg:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center space-y-12">
        <h2 class="mt-2 text-2xl !leading-[2.5rem] font-bold tracking-tight text-gray-900 sm:text-4xl  sm:!leading-[3.8rem]">
          Can I Try <br>
          <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-blue-600 text-transparent">JuggleHire</span>
          For Free?
        </h2>
        <a href="https://app.jugglehire.com/register"
          class="rounded-md bg-blue-600 px-3.5 py-2.5 text-base inline-flex items-center justify-center gap-3 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Get Started for Free
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </a>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div class="space-y-4">
            <h4 class="text-left text-lg font-semibold leading-8 text-gray-900">
              Without JuggleHire
            </h4>
            <ul class="space-y-6">
              <li v-for="(item, index) in without" :key="item"
                class="text-gray-900 font-medium text-left flex items-center gap-2" data-aos="fade-in"
                :data-aos-delay="100 * index" data-aos-once="true">
                <span class="text-red-500  shrink-0 inline-flex items-center justify-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clip-rule="evenodd" />
                  </svg>

                </span>

                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-left text-lg font-semibold leading-8 text-gray-900">
              With JuggleHire
            </h4>
            <ul class="space-y-6">
              <li v-for="(item, index) in withx" :key="item"
                class=" text-left flex items-start  gap-2 text-base font-semibold leading-7 text-gray-900"
                data-aos="fade-in" :data-aos-delay="100 * index" data-aos-once="true">
                <span class="text-green-600 mt-1 inline-flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd" />
                  </svg>


                </span>

                {{ item }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>




<script setup>
import { XMarkIcon } from '@heroicons/vue/20/solid'
const without = [
  "Searching countless tools",
  "Poor communication",
  "Future Dilemma",
  "Collaboration confusion",
  "Fight to manage massive data",
  "Hard to find talent",
];

const withx = [
  "One stop solution",
  "Act like a leader",
  "100% tracking clarity",
  "Collaborate with other hiring team members",
  "1-Click operation",
  "Keep a poll of talents on the waiting list",
];
</script>
