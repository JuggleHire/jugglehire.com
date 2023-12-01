<template>
    <div class="bg-gray-900">
        <div class="relative isolate md:pt-14 pt-0">
            <div class="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="py-12 sm:py-32 lg:pb-40">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <h1 class="text-3xl font-bold tracking-tight text-white sm:text-6xl">
                            Your Go-To Hiring Software
                            <!-- Recruitment Software for Busy Founders & Recruiters -->
                        </h1>
                        <p class="mt-6 sm:text-xl text-base sm:leading-8 text-gray-300">
                            JuggleHire is a recruitment software solution designed to simplify the hiring process for
                            everyone. It's aimed at making the hiring journey easy and efficient, catering to
                            individuals, freelancers, small businesses, and HR professionals.
                        </p>

                        <!-- Buttons -->
                        <div class="mt-8 gap-3 flex flex-wrap justify-center">
                            <a target="_blank" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://app.jugglehire.com/register">
                                Get Beta Access
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </a>
                            <a target="_blank" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-200 hover:text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://fb.com/groups/jugglehire">
                                Join Our Community
                            </a>
                        </div>
                        <!-- End Buttons -->
                    </div>
                </div>
                <!-- Logo cloud -->
                <div class="mx-auto md:mt-36 mt-8 max-w-7xl px-6 sm:mt-36 lg:px-8">
                    <h2 class="text-center sm:text-lg text-base font-semibold sm:leading-8 text-white">The world’s most innovative companies use JuggleHire</h2>
                    <div class="mx-auto mt-10 flex justify-center flex-wrap max-w-lg items-center md:gap-8 sm:gap-5 gap-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <div class="bg-white rounded-lg px-4 py-2.5" v-for="(client, index) in clients" :key="index">
                            <img class="sm:h-8 md:h-12 h-6 w-full object-contain" :src="client.logo" :alt="client.name" width="158" height="48">
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
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
