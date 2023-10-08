<template>
  <div class="bg-white py-24 sm:py-32">

    <!-- Feature section -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Recruit faster</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          JuggleHire: Your Ultimate Hiring Solution
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
      </div>
    </div>
    <div class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <img src="/jugglehire-app.png" alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" width="2432" height="1442" />
        <div class="relative" aria-hidden="true">
          <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
        </div>
      </div>
    </div>
    <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        <!-- <div v-for="feature in features" :key="feature.name" class="relative pl-9">
          <dt class="inline font-semibold text-gray-900">
            <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
            {{ feature.name }}
          </dt>
          {{ ' ' }}
          <dd class="inline">{{ feature.description }}</dd>
        </div> -->
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
    </div>
  </div>
</template>

<script setup>
import { ArrowPathIcon, BuildingOfficeIcon, CheckCircleIcon, ClipboardDocumentListIcon, CloudArrowUpIcon, Cog6ToothIcon, EnvelopeOpenIcon, FingerPrintIcon, LockClosedIcon, MagnifyingGlassCircleIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: "Easy Company Career Portal",
    description: " Simplify your recruitment process from the start. With JuggleHire's easy Company Career Portal, you can have your hiring platform ready to go in no time, making your recruitment journey smooth and efficient.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Custom Screening Questions",
    description: " Tailor your candidate evaluations to your precise requirements. JuggleHire empowers you to create custom screening questions, ensuring you identify the best fits for your team effortlessly.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Efficient Candidate Discovery",
    description: " Save valuable time and effort as JuggleHire's advanced tools streamline the process of discovering the most qualified candidates for your team.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "In-app Email Communication",
    description: " Streamline candidate interactions effortlessly. JuggleHire offers efficient communication tools that help you stay in touch with potential hires, fostering smooth and timely interactions.",
    icon: EnvelopeOpenIcon,
  },
  {
    name: "Customized Workflows",
    description: " Tailor your hiring process to match your unique needs. Create workflows that streamline evaluations, interviews, and collaboration.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Custom Domain",
    description: "Grow your team without the hassle. JuggleHire adapts to your needs, whether you're an individual freelancer or a small business owner.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Team Collaboration",
    description: "Grow your team without the hassle. JuggleHire adapts to your needs, whether you're an individual freelancer or a small business owner.",
    icon: RocketLaunchIcon,
  },
  {
    name: "User-Friendly Interface",
    description: " Navigate effortlessly through your hiring journey. Our intuitive interface makes it easy for everyone, from individuals to HR professionals.",
    icon: UsersIcon,
  },
  {
    name: "Hiring Made Easy with JuggleHire",
    description: " Experience a hiring process that's intuitive and hassle-free. JuggleHire transforms the complexities of recruitment into a seamless journey, enabling you to find your ideal candidates with ease.",
    icon: CheckCircleIcon,
  },


  // {
  //   name: "Smart Sourcing",
  //   description: " Effortlessly discover the right candidates with advanced sourcing tools that save you time and help you find the best fits for your team.",
  //   icon: CloudArrowUpIcon,
  // },
  // {
  //   name: "Advance Search and Filters",
  //   description: " Effortlessly pinpoint your ideal candidates with precision. JuggleHire's advanced search and filtering capabilities empower you to refine your candidate search based on specific criteria, ensuring you find the perfect fit for your team.",
  //   icon: CloudArrowUpIcon,
  // },

  // {
  //   name: "Schedule Interview",
  //   description: " Seamlessly coordinate interviews within the JuggleHire platform. Schedule interviews hassle-free, ensuring a well-organized recruitment process that keeps both you and your candidates on track.",
  //   icon: CloudArrowUpIcon,
  // },

  // {
  //   name: "Collaborative Hiring",
  //   description: " Foster teamwork in your hiring process. Collaborate seamlessly with colleagues to ensure a well-rounded selection of candidates.",
  //   icon: CloudArrowUpIcon,
  // },
]
</script>