<template>
  <div class="bg-gray-900">
    <!-- Stats -->
    <!-- <div class="mx-auto pt-32 max-w-7xl px-6 sm:pt-56 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 class="text-base font-semibold leading-8 text-blue-400">Our track record</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by thousands of developers&nbsp;worldwide</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.id" class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">{{ stat.value }}</dd>
        </div>
      </dl>
    </div> -->

    <!-- CTA section -->
    <!-- <div class="overflow-hidden relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8"> -->
    <div class="overflow-hidden relative isolate px-6 py-32 sm:py-40 lg:px-8">
      <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="1d4240dd-898f-445f-932d-e2872fd12de3" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="0" class="overflow-visible fill-gray-800/20">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
      </svg>
      <div class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
        <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br />
          Start using JuggleHire app today.
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Experience the future of hiring with JuggleHire. Connect with like-minded professionals and stay updated on the latest in recruitment. Boost your productivity and career growth. Join our Facebook group today!
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://app.jugglehire.com/register" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Get Beta Access
          </a>
          <a href="https://fb.com/groups/jugglehire" class="text-sm font-semibold leading-6 text-white">
            Join our community <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const stats = [
  { id: 1, name: 'Developers on the platform', value: '8,000+' },
  { id: 2, name: 'Daily requests', value: '900m+' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Projects deployed', value: '12m' },
]
</script>