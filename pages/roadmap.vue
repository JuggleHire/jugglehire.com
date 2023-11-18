<template>
  <div class="bg-gray-900">

    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-base font-semibold leading-7 text-blue-400">Roadmap</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Vision for Simplified Hiring
          </h1>
        </div>
      </div>
    </div>
    <div style="min-height: 500px;" id="roadmap" data-productlift-embed="e8d875de-5428-4b70-9469-88e61087c7b1"></div>
    <!-- ProductLift SDK - Include it only once -->
  </div>
</template>

<script setup>
  import { defineComponent, h, ref } from 'vue'
  import { Dialog, DialogPanel, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { CheckIcon } from '@heroicons/vue/20/solid'

  const title = "JuggleHire Roadmap | Our Vision for Simplified Hiring";
  const description = "Discover JuggleHire's roadmap, where we outline our vision for simplifying the hiring process. See our plans for enhancing our recruitment software to benefit small businesses.";

  useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
  });

  const route = useRoute()
  useHead({
    script: [
      { src: "https://jugglehire.productlift.dev/widgets_sdk", defer: true },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.jugglehire.com/' + route.path,
      },
    ],
  })

</script>