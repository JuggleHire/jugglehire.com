<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="flex flex-wrap gap-20">
      <div class="">
        <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl">
          <span class="text-6xl">Why</span> <br />
          Businesses Like <br />
          You <em>Choose</em> <br />
          Juggle Hire
        </h2>

        <ul class="space-y-4 mt-12">
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
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1"
        data-aos="fade-in"
      >
        <div class="flex">
          <svg
            class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path
              d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Permanent Productivity Booster
            </h3>
            <p class="mt-1 text-gray-600">
              10X your time and efficiency virtually hiring from anywhere.
            </p>
          </div>
        </div>
        <div class="flex">
          <svg
            class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path
              d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              A to Z History Tracking
            </h3>
            <p class="mt-1 text-gray-600">
              See the candidate's repeated records as often as they apply.
            </p>
          </div>
        </div>
        <div class="flex">
          <svg
            class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path
              d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Leader-style Communication
            </h3>
            <p class="mt-1 text-gray-600">
              Lead like a leader and let the candidate finds their future in
              your words.
            </p>
          </div>
        </div>
        <div class="flex">
          <svg
            class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path
              d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Handy Support Team
            </h3>
            <p class="mt-1 text-gray-600">
              Get our tech team whenever you need to solve your hiring
              harassment.
            </p>
          </div>
        </div>
        <div class="flex">
          <svg
            class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path
              d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Hidden Cash Flow Generator
            </h3>
            <p class="mt-1 text-gray-600">
              Hire geniuses who understand company's vision to produce
              unstoppable assets.
            </p>
          </div>
        </div>
        <div class="flex">
          <svg
            class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path
              d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
            />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800">
              Go Recruitment To ROI
            </h3>
            <p class="mt-1 text-gray-600">
              Expertly interview, evaluate, and meet the suited talents who
              reflect ROI.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script setup>
const leftSideList = [
  "No Hiring Headache",
  "No Data Dilemma",
  "No Talent Scarcity",
];
</script>