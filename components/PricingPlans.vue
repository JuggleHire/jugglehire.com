<template>
  <div>
    <div class="mt-16 flex justify-center">
      <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
        <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
        <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{ checked }">
          <div :class="[checked ? 'bg-blue-500' : '', 'cursor-pointer rounded-full px-2.5 py-1']">
            <span v-if="option.value == 'monthly'">{{ option.label }}</span>
            <span v-else>{{ option.label }} (-30%)</span>

          </div>
        </RadioGroupOption>
      </RadioGroup>
    </div>
    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div v-for="tier in tiers" :key="tier.id" :class="[tier.mostPopular ? 'bg-white/5 ring-2 ring-blue-500' : 'ring-1 ring-white/10', 'rounded-3xl p-5 sm:p-8 xl:p-10']">
        <div class="flex items-center justify-between gap-x-4">
          <h3 :id="tier.id" class="text-lg font-semibold leading-8 text-white">{{ tier.name }}</h3>
          <p v-if="tier.mostPopular" class="rounded-full bg-blue-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-300">{{ tier.description }}</p>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight text-white">{{ tier.price[frequency.value] }}</span>
          <span class="text-sm font-semibold leading-6 text-gray-300">{{ frequency.priceSuffix }}</span>
        </p>
        <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500' : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2']">
        Get Free Beta Access
        </a>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
          <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
            <CheckIcon class="h-6 w-5 flex-none text-white" aria-hidden="true" />
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/month' },
]
const tiers = [
  {
    name: 'Small Team',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: 'Free', annually: 'Free' },
    description: 'The essentials to provide your best work for clients.',
    features: [
      'Company Career Portal',
	    'Free job post',
	    'Candidate screening',
	    'Candidate sorting',
	    'Integrated email communication',
	    'Limited to 2 job post per month',
	    'Limited to 1 User',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    // price: { monthly: '$19', annually: '$13.30' },
    price: { monthly: 'Free', annually: 'Free' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'All from freelancer plan',
      'Unlimited Job Posts',
      'Custom Domain',
      'Limited to 3 users',
    ],
    mostPopular: true,
  },
  {
    name: 'Elite',
    id: 'tier-enterprise',
    href: '#',
    // price: { monthly: '$39', annually: '$27.30' },
    price: { monthly: 'Free', annually: 'Free' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'All from Startup Plan',
      'Team Collaboration',
      'Invite Upto 10 Users',
      'Send emails from company branded email',
      'Priority Customer Support',
      'Remove JuggleHire Branding',
    ],
    mostPopular: false,
  },
]

const frequency = ref(frequencies[0])
</script>
