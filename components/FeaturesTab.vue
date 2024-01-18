<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-wrap gap-12">
    <div v-if="tab === 1">
      <easiest-job />
    </div>
    <div v-if="tab === 2">
      <career-portal />
    </div>
    <div v-if="tab === 3">
      <candidate-sorting />
    </div>
    <ul class="flex items-start overflow-x-auto gap-10 flex-1" aria-label="Tabs" role="tablist">
      <li v-for="item in cardData" :key="item.title" @click="tab = item.tab" role="tab"
        :class="tab === item.tab ? 'bg-gray-100' : ''"
        class="flex items-start p-4 hover:bg-gray-100 rounded transition duration-200 ease-linear">
        <div v-html="item.icon"
          class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shrink-0">
        </div>
        <div class="ms-5 sm:ms-6">
          <h3 class="text-base font-semibold leading-7 text-gray-900" v-text="item.title" />
          <p class="mt-1  text-base leading-7 text-gray-600 hidden lg:inline-block" v-html="item.description" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const tab = ref(1);

const cardData = [
  {
    tab: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>`,
    title: 'Easiest Job Posting.',
    description: `<b>Immediately find the right candidate</b> as you post a job. Our extensive features will excite the talent who is perfect for the exact position you’re hiring.`
  },
  {
    tab: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>`,
    title: 'Identical Career',
    description: `<b>Want to make an unforgettable first impression</b> by creating a
            professional signature? Separate your brand image that candidates
            find resonating.`
  },
  {
    tab: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
            </svg>`,
    title: 'Advanced Candidate Sorting.',
    description: `<b>Sort, analyze, and finalize the candidates</b>, measuring the core
            competency based on your expectations`
  },
]
</script>