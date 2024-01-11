<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 space-y-20"
      >
        <h2
          class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100*1"
        >
          CAN I TRY THE
          <span
            class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
            >JUGGLE HIRE</span
          >
          FOR FREE?
        </h2>
        <div class="flex items-center justify-center flex-wrap gap-12">
          <div class="space-y-4">
            <h4 class="text-white font-bold text-xl text-left">
              Without Juggle Hire
            </h4>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in without"
                :key="item"
                class="text-white text-left flex items-center gap-2"
                data-aos="fade-in"
                :data-aos-delay="100 * index"
              >
                <span class="text-red-500">
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
                      d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </span>

                {{ item }}
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="text-white font-bold text-xl text-left">
              With Juggle Hire
            </h4>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in withx"
                :key="item"
                class="text-white text-left flex items-center gap-2"
                data-aos="fade-in"
                :data-aos-delay="100 * index"
              >
                <span class="text-green-500">
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
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>

                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex items-center justify-center gap-x-6"
          data-aos="fade-up"
          data-aos-delay="100*3"
        >
          <a
            href="#"
            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >Get started</a
          >
          <a href="#" class="text-sm font-semibold leading-6 text-white"
            >Learn more <span aria-hidden="true">→</span></a
          >
        </div>

        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
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
