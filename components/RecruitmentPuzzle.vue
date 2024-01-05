<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="text-center" data-aos="fade-up">
      <h2
        class="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 !leading-[3.5rem]"
      >
        <span
          class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
          >Gain</span
        >
        Control
        <span
          class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
          >Over</span
        >
        Your <br />
        Recruitment
        <span
          class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
          >Puzzle</span
        >
      </h2>
      <p class="mt-2 md:mt-4 text-gray-700 font-medium">
        🚀 One-Stop Solution for All Your Hiring Operations
      </p>
    </div>

    <!-- Icon Blocks -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-16">
      <div
        class="flex border-r border-r-transparent hover:border-r-blue-400 group"
        v-for="(item, index) in cardData"
        :key="item.title"
        data-aos="zoom-in"
        :data-aos-delay="100 * index"
      >
        <svg
          class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 group-hover:text-blue-600"
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
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        <div class="ms-5 sm:ms-8">
          <h3
            class="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600"
            v-text="item.title"
          />
          <p class="mt-1 text-gray-600" v-text="item.description" />
        </div>
      </div>
    </div>
    <!-- End Icon Blocks -->
  </div>
</template>

<script setup>
const cardData = [
  {
    title: "Auto-Talent Acquisition",
    description:
      "Automatically attracts the right talents to work on your terms whenever you need.",
  },
  {
    title: "Efficient Candidate Accelerator",
    description:
      "Recruit the most competent candidates without over-promising employer branding.",
  },
  {
    title: "Comprehensive Career Portal",
    description:
      "Create hyper-personalized company profile to speed up recruitment 10X faster.",
  },
  {
    title: "Star-Performing Screening",
    description:
      "Evaluate the best candidates to meet your market-match demand today.",
  },
  {
    title: "Boundary-free Hiring",
    description:
      "Keep the countless experts on your waiting list and pick the most competent one.",
  },
  {
    title: "Build Unstoppable Team",
    description:
      "Say yes to the dynamic team building and keep the profitable candidate for business.",
  },
  {
    title: "Build Unstoppable Team",
    description:
      "Say yes to the dynamic team building and keep the profitable candidate for business.",
  },
  {
    title: "Super-optimized Workflow",
    description:
      "Create simple and effective workflows based on your current business speed.",
  },
  {
    title: "Productive Team Collaboration",
    description:
      "Expertly guide the team when producing the best output from every member.",
  },

  {
    title: "Custom Note & Tagging",
    description:
      "Headlight candidate's core capability to sort down in one place.",
  },
  {
    title: "Customize Recruit Team",
    description:
      "Build a recruit team, adding all the members you want to the interview.",
  },
  {
    title: "Visualize Proficiency",
    description: "Picture the candidate's ultimate potential before you hire.",
  },
];
</script>