<template>
    <div class="bg-gray-900">
        <div class="relative isolate pt-14">
            <div class="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="py-24 sm:py-32 lg:pb-40">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Your Go-To Hiring Software
                            <!-- Simplifying Hiring for Individuals and Small Businesses -->
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-300">
                            JuggleHire is a recruitment software solution designed to simplify the hiring process for
                            everyone. It's aimed at making the hiring journey easy and efficient, catering to
                            individuals, freelancers, small businesses, and HR professionals.
                        </p>

                        <form @submit.prevent="formSubmit"
                            class="mt-8 mx-auto max-w-2xl p-3 bg-transparent border rounded-lg shadow-lg bg-slate-900 border-gray-700 shadow-gray-900/[.2] flex-col">
                            <div class="pb-2">
                                <label for="hs-hero-name-1" class="block text-sm font-medium text-white"><span
                                        class="sr-only">Your name</span></label>
                                <input type="text" id="hs-hero-name-1" v-model="name"
                                    class="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-transparent text-gray-400"
                                    placeholder="Your name">
                            </div>
                            <div class="pt-2 border-t border-gray-700">
                                <label for="hs-hero-email-1" class="block text-sm font-medium text-white"><span
                                        class="sr-only">Your email address</span></label>
                                <input type="email" id="hs-hero-email-1" v-model="email"
                                    class="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-transparent text-gray-400"
                                    placeholder="Your email address">
                            </div>
                            <div class="pt-2 grid">
                                <button type="submit"
                                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800"
                                    href="#">
                                    Request Access
                                </button>
                            </div>
                        </form>
                        <div class="p-3 border border-green-500 my-4" v-if="success">
                            <p class="text-green-500 font-semibold">Thanks! We'll be in touch!</p>
                        </div>
                        <div class="p-3 border border-red-500 my-4" v-if="error">
                            <p class="text-red-500 font-semibold"> Oops! Something went wrong, please try again</p>
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
    const success = ref(false);
    const error = ref(false);
    const name = ref('');
    const email = ref('');

    const isEmailValid = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(emailPattern.test(email.value))
        return emailPattern.test(email.value);
    };

    const formSubmit = () => {
        if (!isEmailValid()) {
            error.value = true;
            success.value = false;
            return alert('Please put a correct e-mail address!');
        }
        else {
            const formBody = "userGroup=&email=" + email.value + ".com&name=" + name.value;
            const loopsAPI = 'https://app.loops.so/api/newsletter-form/clm7wkpc90041ms0o3s526r0n';

            axios.post(loopsAPI, formBody)
                .then(response => {
                    console.log('Response from the server:', response.data);
                    success.value = true;
                    error.value = false;
                    // Construct the dynamic URL with name and email
                    const dynamicUrl = `https://app.jugglehire.com/register?name=${name.value}&email=${email.value}`;

                    // Redirect the user to the dynamic URL after success
                    window.location.href = dynamicUrl;
                    name.value = '';
                    email.value = '';
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                    error.value = true;
                    success.value = false;
                });
        }
    };
</script>
