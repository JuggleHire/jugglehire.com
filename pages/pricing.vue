<template>
<div>
  <pricing-section />
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