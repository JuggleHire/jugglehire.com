<template>
    <!-- Hero -->
    <div
        class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element-dark.svg')]">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">

            <!-- Title -->
            <div class="mt-5">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-8xl dark:text-gray-200">
                    Recruitment Pro
                </h1>
            </div>
            <!-- End Title -->

            <div class="mt-5 max-w-3xl">
                <p class="text-xl text-gray-600 dark:text-gray-400">Confidently Hire The Right Talents without Manual
                    Labor</p>
            </div>
            <!-- List -->
            <ul role="list" class="space-y-2 sm:space-y-4 mt-12">
                <li class="flex space-x-3">
                    <!-- Solid Check -->
                    <span
                        class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                    <!-- End Solid Check -->

                    <span class="text-base sm:text-xl text-gray-500">
                        <span class="font-bold">Less routine</span> – more creativity
                    </span>
                </li>

                <li class="flex space-x-3">
                    <!-- Solid Check -->
                    <span
                        class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                    <!-- End Solid Check -->

                    <span class="text-base sm:text-xl text-gray-500">
                        Hundreds of thousands saved
                    </span>
                </li>

                <li class="flex space-x-3">
                    <!-- Solid Check -->
                    <span
                        class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                    <!-- End Solid Check -->

                    <span class="text-base sm:text-xl text-gray-500">
                        Scale budgets <span class="font-bold">efficiently</span>
                    </span>
                </li>
            </ul>
            <!-- End List -->

            <!-- Announcement Banner -->
            <div class="mt-8">
                <a class="text-base inline-flex items-center gap-x-2 bg-blue-600 border border-blue-100 hover:bg-blue-500 text-white p-2 px-5 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
                    href="#">
                    Access Dashboard Free
                    <span class="flex items-center gap-x-1">
                        <span class="border-s ps-2 border-blue-200 text-white">Let Me In</span>
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </span>
                </a>
                <p class="text-base mt-3">Unlimited Resources.Manage From Everywhere.</p>
            </div>
            <!-- End Announcement Banner -->

            <!-- partner section -->
            <div class="mt-24">
                <!-- Grid -->
                <div class="flex justify-center flex-wrap gap-8">
                    <div v-for="(client, index) in clients" :key="index">
                        <img class="h-8 w-full object-contain grayscale" :src="client.logo" :alt="client.name"
                            width="158" height="48">
                    </div>
                </div>
                <!-- End Grid -->
            </div>
        </div>
    </div>
    <!-- End Hero -->
</template>
<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import { Dialog, DialogPanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

    const navigation = [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Public Roadmap', href: '/roadmap' },
        { name: 'Blog', href: '/blog' },
    ]

    const mobileMenuOpen = ref(false)

    const clients = [
        {
            name: 'Dorik - JuggleHire Client',
            logo: '/clients/dorik.svg'
        },
        {
            name: 'Xgenious - JuggleHire Client',
            logo: '/clients/xgenious.svg'
        },
        {
            name: 'Blinto - JuggleHire Client',
            logo: '/clients/blinto.svg'
        },
        {
            name: 'Lomeyo - JuggleHire Client',
            logo: '/clients/lomeyo.svg'
        },
        {
            name: 'Pixency - JuggleHire Client',
            logo: '/clients/pixency.png'
        },
        {
            name: 'BitByte Technology - JuggleHire Client',
            logo: '/clients/bitbyte-technology.svg'
        },
        {
            name: 'Microters - JuggleHire Client',
            logo: '/clients/microters.png'
        },
    ]
</script>
