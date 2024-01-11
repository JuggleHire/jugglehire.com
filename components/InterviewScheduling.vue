<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid md:grid-cols-2 gap-12">
      <div class="space-y-3">
        <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
          Simplest Interview Scheduling.
        </h2>
        <p class="text-gray-800">
          Effortlessly coordinate interviews whenever you need. Shorten the
          hiring process when getting the best to boost your bottom-line
          productivity.
        </p>
        <ul class="space-y-4">
          <li
            v-for="(item, index) in leftSideList"
            :key="item"
            data-aos="fade-up"
            :data-aos-delay="50 * index"
            class="flex items-center gap-2 text-gray-800 font-bold text-base"
          >
            <span class="text-blue-600">
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
      <div class="space-y-6 lg:space-y-10">
        <div class="flex group" data-aos="zoom-in" data-aos-delay="50*1">
          <span
            class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 group-hover:border-gray-800 transition duration-200 bg-white text-gray-800 shadow-sm mx-auto"
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
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
          </span>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Integrated Calendar
            </h3>
            <p class="mt-1 text-gray-600">
              Easily sync the calendar to double your interview booking and
              scheduling.
            </p>
          </div>
        </div>
        <div class="flex group" data-aos="zoom-in" data-aos-delay="50*2">
          <!-- Icon -->
          <span
            class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 group-hover:border-gray-800 transition duration-200 bg-white text-gray-800 shadow-sm mx-auto"
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
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
          </span>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Stay Updated
            </h3>
            <p class="mt-1 text-gray-600">
              Set up automated notifications for both employers and candidates
              to stay informed.
            </p>
          </div>
        </div>
        <div class="flex group" data-aos="zoom-in" data-aos-delay="50*3">
          <!-- Icon -->
          <span
            class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 group-hover:border-gray-800 transition duration-200 bg-white text-gray-800 shadow-sm mx-auto"
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
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
          </span>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Communication Tracking
            </h3>
            <p class="mt-1 text-gray-600">
              Track everything, from the beginning of the contact to the final
              feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script setup>
const leftSideList = [
  "Save Countless Hours",
  "Maintain Transparency Everywhere",
  "Errorless Data-Based Decision",
];
</script>