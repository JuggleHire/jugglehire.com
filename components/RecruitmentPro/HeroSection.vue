<template>
    <div class="bg-white">
        <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                <div class="px-6 lg:px-0 lg:pt-4">
                    <div class="mx-auto max-w-2xl">
                        <div class="max-w-lg">
                            <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Recruitment
                                Pro</h1>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Confidently hire the right talents without
                                manual labor</p>
                            <ul role="list" class="space-y-2 sm:space-y-4 mt-12">
                                <li class="flex space-x-3">
                                    <!-- Solid Check -->
                                    <span
                                        class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <!-- End Solid Check -->

                                    <span class="text-base sm:text-lg text-gray-700">
                                        Easy To Use
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <!-- Solid Check -->
                                    <span
                                        class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <!-- End Solid Check -->
                                    <span class="text-base sm:text-lg text-gray-700">
                                        Latest Technology
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <!-- Solid Check -->
                                    <span
                                        class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-600 text-white dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <!-- End Solid Check -->

                                    <span class="text-base sm:text-lg text-gray-700">
                                        Lifetime Free Upgradable
                                    </span>
                                </li>
                            </ul>
                            <div class="mt-10 flex flex-col items-start gap-y-3">
                                <a href="#"
                                    class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Access Dashboard Free</a>
                                <p>Unlimited Resources. Manage from Everywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                    <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                        aria-hidden="true"></div>
                    <div class="shadow-lg md:rounded-3xl">
                        <div
                            class="bg-blue-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                            <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                aria-hidden="true"></div>
                            <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                    <img class="rounded-lg shadow-md" src="/hero-banner.png" alt="">
                                </div>
                                <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                                    aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
        </div>
    </div>

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
