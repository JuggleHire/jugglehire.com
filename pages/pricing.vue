<template>
  <div>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-base font-semibold leading-7 text-blue-400">Pricing</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing plans for teams of&nbsp;all&nbsp;sizes</h1>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
        <pricing-plans />
      </div>
    </div>
    <pricing-faq-section />
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from 'vue'
import { Dialog, DialogPanel, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'

const title = "JuggleHire Pricing | Affordable Plans for Every Small Business";
const description = "Explore JuggleHire's pricing options designed to meet the needs of small businesses. Find the perfect plan to simplify your hiring process while keeping costs in check.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const route = useRoute()
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.jugglehire.com/' + route.path,
    },
  ],
})
</script>