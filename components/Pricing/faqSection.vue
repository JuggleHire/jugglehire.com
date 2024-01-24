<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl lg:max-w-7xl px-6 py-12 md:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <div>
          <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            :class="centerTitle ? 'text-center' : ''" v-text="title" />
          <p class="mt-6 text-lg leading-8 text-gray-600 text-center" v-text="subtitle" />
        </div>
        <dl class="mt-10 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900" :class="open ? 'pt-6':'py-6'">
                <span class="text-base font-semibold leading-7" v-text="faq.question" />
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="py-6 pr-12">
              <p class="text-base leading-7 text-gray-600" v-html="faq.answer" />
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: {
    type: String,
    default: 'Frequently asked questions'
  },
  subtitle: {
    type: String,
    default: 'Get your answer before you begin',
  },
  centerTitle: {
    type: Boolean,
    default: false
  },
  faqs: {
    type: Array,
    default: () => [
      {
        question: "Are there any hidden fees?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "Are there discounts for annual subscriptions?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      // More questions...
    ]
  }
})
</script>
