<template>
  <div class="py-[7rem]">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-wrap gap-12">
      <ul class="flex items-start overflow-x-auto gap-10 flex-1" aria-label="Tabs" role="tablist">
        <li @click="tab = 1"
          class="  w-full flex flex-col text-start hover:bg-gray-100 text-blue-600 p-3 md:p-5 rounded-xl group cursor-pointer"
          role="tab" :class="tab === 1 ? 'bg-gray-100' : ''">
          <div class="flex items-center gap-2  group-hover:text-blue-600 transition duration-200"
            :class="tab === 1 ? 'text-blue-600' : 'text-gray-800'">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </span>
            <span class="whitespace-nowrap lg:whitespace-wrap text-2xl block font-semibold">Easiest Job Posting.</span>
          </div>

          <div class="mt-5 hidden lg:block">
            <span class="mt-2 text-gray-800"><b>Immediately find the right candidate</b> as you post a job.
              Our extensive features will excite the talent who is perfect for
              the exact position you’re hiring.</span>
          </div>
        </li>
        <li @click="tab = 2"
          class="  w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl group cursor-pointer"
          :class="tab === 2 ? 'bg-gray-100' : ''" role="tab">
          <div class="flex items-center gap-2  group-hover:text-blue-600 transition duration-200"
            :class="tab === 2 ? 'text-blue-600' : 'text-gray-800'">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </span>
            <span class="whitespace-nowrap lg:whitespace-wrap text-2xl block font-semibold">Identical Career
              Portal.</span>
          </div>

          <div class="mt-5 hidden lg:block">
            <span class="mt-2 text-gray-800"><b>Want to make an unforgettable first impression</b> by creating a
              professional signature? Separate your brand image that candidates
              find resonating.</span>
          </div>
        </li>
        <li @click="tab = 3"
          class="  w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl group cursor-pointer"
          :class="tab === 3 ? 'bg-gray-100' : ''" role="tab">
          <div class="flex items-center gap-2  group-hover:text-blue-600 transition duration-200"
            :class="tab === 3 ? 'text-blue-600' : 'text-gray-800'">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
              </svg>
            </span>
            <span class="whitespace-nowrap lg:whitespace-wrap text-2xl block font-semibold">Advanced Candidate
              Sorting.</span>
          </div>

          <div class="mt-5 hidden lg:block">
            <span class="mt-2 text-gray-800"><b>Sort, analyze, and finalize the candidates</b>, measuring the core
              competency based on your expectations</span>
          </div>
        </li>
      </ul>
      <div v-if="tab === 1" class="p-4 flex items-center">
        <easiest-job />
      </div>
      <div v-if="tab === 2" class="p-4 flex items-center">
        <career-portal />
      </div>
      <div v-if="tab === 3" class="p-4 flex items-center">
        <candidate-sorting />
      </div>
    </div>
  </div>
</template>

<script setup>
const tab = ref(1);
</script>