<template>
  <div class="bg-gray-900">
    <div id="roadmap" data-productlift-embed="e8d875de-5428-4b70-9469-88e61087c7b1"></div>
    <!-- ProductLift SDK - Include it only once -->
  </div>
</template>

<script setup>
  import { defineComponent, h, ref } from 'vue'
  import { Dialog, DialogPanel, RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { CheckIcon } from '@heroicons/vue/20/solid'

  // Productlift Roadmap
  useHead({
    script: [
      { src: "https://jugglehire.productlift.dev/widgets_sdk", defer: true },
    ],
  });


  const title = "JuggleHire Roadmap | Our Vision for Simplified Hiring";
  const description = "Discover JuggleHire's roadmap, where we outline our vision for simplifying the hiring process. See our plans for enhancing our recruitment software to benefit small businesses.";

  useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
  });

</script>