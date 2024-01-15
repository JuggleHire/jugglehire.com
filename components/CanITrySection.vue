
<template>
  <div class="bg-white">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center space-y-12">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Can I Try
          <span
            class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
            >JUGGLE HIRE</span
          >
          For Free?
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div class="space-y-4">
            <h4 class="text-gray-900 font-bold text-xl text-left">
              Without Juggle Hire
            </h4>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in without"
                :key="item"
                class="text-gray-900 font-medium text-left flex items-center gap-2"
                data-aos="fade-in"
                :data-aos-delay="100 * index"
              >
                <span
                  class="text-red-500 bg-red-50 h-8 w-8 rounded-full shrink-0 inline-flex items-center justify-center text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>

                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-gray-900 font-bold text-xl text-left">
              With Juggle Hire
            </h4>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in withx"
                :key="item"
                class="text-gray-900 font-medium text-left flex items-center gap-2"
                data-aos="fade-in"
                :data-aos-delay="100 * index"
              >
                <span
                  class="text-green-500 bg-green-50 inline-flex items-center justify-center h-8 w-8 rounded-full shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>

                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <a
          href="#"
          class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm md:text-xl font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4"
          >Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>


  

<script setup>
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
