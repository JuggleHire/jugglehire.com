<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Recruit faster</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Niyog: Your Ultimate Hiring Solution
        </p>
        <!-- <p class="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </p> -->
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>

        <!-- // divider  -->
        <!-- <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-2 text-sm text-gray-500"> Upcoming features</span>
          </div>
        </div> -->

        <!-- <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowPathIcon, BuildingOfficeIcon, CheckCircleIcon, ClipboardDocumentListIcon, CloudArrowUpIcon, Cog6ToothIcon, EnvelopeOpenIcon, FingerPrintIcon, LockClosedIcon, MagnifyingGlassCircleIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: "Easy Company Portal Setup",
    description: " Simplify your recruitment process from the start. With Niyog's easy company portal setup, you can have your hiring platform ready to go in no time, making your recruitment journey smooth and efficient.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Custom Screening Questions",
    description: " Tailor your candidate evaluations to your precise requirements. Niyog empowers you to create custom screening questions, ensuring you identify the best fits for your team effortlessly.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Efficient Candidate Discovery",
    description: " Save valuable time and effort as Niyog's advanced tools streamline the process of discovering the most qualified candidates for your team.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "In-app Email Communication",
    description: " Streamline candidate interactions effortlessly. Niyog offers efficient communication tools that help you stay in touch with potential hires, fostering smooth and timely interactions.",
    icon: EnvelopeOpenIcon,
  },
  {
    name: "Customized Workflows",
    description: " Tailor your hiring process to match your unique needs. Create workflows that streamline evaluations, interviews, and collaboration.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Scalable Solutions",
    description: "Grow your team without the hassle. Niyog adapts to your needs, whether you're an individual freelancer or a small business owner.",
    icon: RocketLaunchIcon,
  },
  {
    name: "User-Friendly Interface",
    description: " Navigate effortlessly through your hiring journey. Our intuitive interface makes it easy for everyone, from individuals to HR professionals.",
    icon: UsersIcon,
  },
  {
    name: "Hiring Made Easy with Niyog",
    description: " Experience a hiring process that's intuitive and hassle-free. Niyog transforms the complexities of recruitment into a seamless journey, enabling you to find your ideal candidates with ease.",
    icon: CheckCircleIcon,
  },


  // {
  //   name: "Smart Sourcing",
  //   description: " Effortlessly discover the right candidates with advanced sourcing tools that save you time and help you find the best fits for your team.",
  //   icon: CloudArrowUpIcon,
  // },
  // {
  //   name: "Advance Search and Filters",
  //   description: " Effortlessly pinpoint your ideal candidates with precision. Niyog's advanced search and filtering capabilities empower you to refine your candidate search based on specific criteria, ensuring you find the perfect fit for your team.",
  //   icon: CloudArrowUpIcon,
  // },

  // {
  //   name: "Schedule Interview",
  //   description: " Seamlessly coordinate interviews within the Niyog platform. Schedule interviews hassle-free, ensuring a well-organized recruitment process that keeps both you and your candidates on track.",
  //   icon: CloudArrowUpIcon,
  // },

  // {
  //   name: "Collaborative Hiring",
  //   description: " Foster teamwork in your hiring process. Collaborate seamlessly with colleagues to ensure a well-rounded selection of candidates.",
  //   icon: CloudArrowUpIcon,
  // },
]
</script>