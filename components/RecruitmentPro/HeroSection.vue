<template>
    <!-- Hero -->
    <div
        class="relative overflow-hidden dark:bg-gray-900 before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element-dark.svg')]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">


            <div class="flex lg:flex-row flex-col lg:items-center gap-8">
                <div class="w-full">
                    <div class="mx-auto max-w-3xl">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Recruitment Pro
                            <!-- Recruitment Software for Busy Founders & Recruiters -->
                        </h1>
                        <p class="mt-6 sm:text-xl text-base sm:leading-8 text-gray-600 dark:text-gray-300">
                            Confidently hire the right talents without
                            manual labor
                        </p>
                        <ul role="list" class="space-y-2 sm:space-y-4 mt-12">
                            <li class="flex space-x-3">
                                <!-- Solid Check -->
                                <span
                                    class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-800/30 dark:text-blue-500">
                                    <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <!-- End Solid Check -->

                                <span class="text-base sm:text-lg text-gray-600">
                                    <span class="font-medium">Less routine</span> – more creativity
                                </span>
                            </li>

                            <li class="flex space-x-3">
                                <!-- Solid Check -->
                                <span
                                    class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-800/30 dark:text-blue-500">
                                    <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <!-- End Solid Check -->

                                <span class="text-base sm:text-lg text-gray-600">
                                    Hundreds of thousands saved
                                </span>
                            </li>

                            <li class="flex space-x-3">
                                <!-- Solid Check -->
                                <span
                                    class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-800/30 dark:text-blue-500">
                                    <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                <!-- End Solid Check -->

                                <span class="text-base sm:text-lg text-gray-600">
                                    Scale budgets <span class="font-medium">efficiently</span>
                                </span>
                            </li>
                        </ul>
                        <!-- Buttons -->
                        <div class="mt-8 flex flex-col gap-2 items-start justify-start">
                            <a target="_blank"
                                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="https://app.jugglehire.com/register">
                                Access Dashboard Free
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                            <p class="text-base text-gray-600 dark:text-gray-300">Unlimited Resources.Manage From
                                Everywhere.</p>
                        </div>
                        <!-- End Buttons -->
                    </div>

                </div>
                <div class="w-full">
                    <img class="rounded-lg shadow-md" src="/hero-banner.png" alt="">
                </div>
            </div>

            <!-- partner section -->
            <div class="mt-24">
                <!-- Grid -->
                <div class="flex justify-center flex-wrap gap-5">
                    <div class="bg-white rounded-lg px-4 py-2.5" v-for="(client, index) in clients" :key="index">
                        <img class="h-6 w-full object-contain" :src="client.logo" :alt="client.name" width="158"
                            height="48">
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
