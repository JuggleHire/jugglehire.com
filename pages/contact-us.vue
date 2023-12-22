<template>
  <div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Connect with us effortlessly—your gateway to seamless communication and a smoother hiring experience.
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>Mohammadpur,<br />Dhaka, Bangladesh</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+880 1625 592-566</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-gray-900" href="mailto:hello@jugglehire.com">hello@jugglehire.com</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <form action="#" method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-lg space-y-16">
          <div class="flex gap-x-6">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
              <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-base font-semibold leading-7 text-gray-900">Feature Spotlight</h3>
              <p class="mt-2 leading-7 text-gray-600">Discover the latest features and enhancements that make JuggleHire your go-to solution for streamlined recruitment.</p>
              <p class="mt-4">
                <a href="/changelog" class="text-sm font-semibold leading-6 text-blue-600">Explore Features <span aria-hidden="true">&rarr;</span></a>
              </p>
            </div>
          </div>
          <div class="flex gap-x-6">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
              <HeartIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-base font-semibold leading-7 text-gray-900">User Success Stories</h3>
              <p class="mt-2 leading-7 text-gray-600">Hear from others who have found success with JuggleHire and learn how it transformed their hiring processes.</p>
              <p class="mt-4">
                <a href="/wall-of-love" class="text-sm font-semibold leading-6 text-blue-600">Read Success Stories <span aria-hidden="true">&rarr;</span></a>
              </p>
            </div>
          </div>
          <div class="flex gap-x-6">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
              <MapIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 class="text-base font-semibold leading-7 text-gray-900">Product Roadmap</h3>
              <p class="mt-2 leading-7 text-gray-600">Stay ahead of the curve! Explore our product roadmap to see the exciting features and improvements we have in store for JuggleHire</p>
              <p class="mt-4">
                <a href="/roadmap" class="text-sm font-semibold leading-6 text-blue-600">View Roadmap <span aria-hidden="true">&rarr;</span></a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { MapIcon, HeartIcon, SparklesIcon, BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const title = "Contact JuggleHire | Get in Touch for Recruitment Solutions";
const description = "Contact JuggleHire to get in touch with our team and explore recruitment solutions that simplify hiring for small businesses.";

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
