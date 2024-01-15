<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Authority Communication.
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Build a positive, memorable experience with every candidate. Keep
              them informed every step ahead. Let every talent feel like they're
              already part of your vibrant team.
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
                  <component
                    :is="feature.icon"
                    class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Automated Email Sender",
    description: `After getting an application, automatically
reply with "Application Received" through a single click.`,
    icon: CloudArrowUpIcon,
  },
  {
    name: "Respectable Rejection",
    description: `Use auto "Rejection Email" from our custom-
build template for the incompetent talents.`,
    icon: LockClosedIcon,
  },
  {
    name: "Real-time Application.",
    description: `Share what's happening inside and update the hiring process with the candidate.`,
    icon: ServerIcon,
  },
];
</script>
    
