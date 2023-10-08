<template>
  <div class="bg-gray-900">
    <div class="relative isolate pt-14">
      <div class="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="py-24 sm:py-32 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Your Go-To Hiring Software
              <!-- Simplifying Hiring for Individuals and Small Businesses -->
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              JuggleHire is a recruitment software solution designed to simplify the hiring process for everyone. It's aimed at making the hiring journey easy and efficient, catering to individuals, freelancers, small businesses, and HR professionals.
            </p>
            <!-- <div class="mt-8 mx-auto max-w-2xl p-3 rounded-lg dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2] flex-col">
              <a href="https://facebook.com/groups/useJuggleHire" target="_blank" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-8 py-5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">
                <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                join our facebook group
              </a>
            </div> -->

            <div class="mt-8 mx-auto max-w-2xl p-3 bg-transparent border rounded-lg shadow-lg bg-slate-900 border-gray-700 shadow-gray-900/[.2] flex-col">
              <div class="pb-2">
                <label for="hs-hero-name-1" class="block text-sm font-medium text-white"><span class="sr-only">Your name</span></label>
                <input type="text" id="hs-hero-name-1" class="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-transparent text-gray-400" placeholder="Your name">
              </div>
              <div class="pt-2 border-t border-gray-700">
                <label for="hs-hero-email-1" class="block text-sm font-medium text-white"><span class="sr-only">Your email address</span></label>
                <input type="email" id="hs-hero-email-1" class="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-transparent text-gray-400" placeholder="Your email address">
              </div>
              <div class="pt-2 grid">
                <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800" href="#">
                  Request Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
    import { Dialog, DialogPanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon,CheckCircleIcon } from '@heroicons/vue/24/outline'

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Public Roadmap', href: '/roadmap' },
    { name: 'Blog', href: '/blog' },
  ]

  const mobileMenuOpen = ref(false)

  // Hubspot Signup Form
  // const script = document.createElement("script");
  // script.src = "https://js.hsforms.net/forms/v2.js";
  // document.body.appendChild(script);

  // script.addEventListener("load", () => {
  //   window.hbspt.forms.create({
  //     region: "na1",
  //     portalId: "22534729",
  //     formId: "e645a13e-9b76-4b56-80ec-88d5a9c10c0a",
  //     target: "#signupForm",
  //   });
  // });
</script>
