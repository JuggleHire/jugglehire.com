<template>
  <div>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-base font-semibold leading-7 text-blue-400">Guidelines for Usage</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Terms and Conditions
          </h1>
        </div>
      </div>
    </div>
    <div class="max-w-4xl mx-auto py-8">
        <div class="bg-white p-8 shadow-lg rounded-lg mb-4">
          <p>Welcome to JuggleHire ("us," "we," or "our"). Your use of our platform is subject to the following terms and conditions. By using our services, you agree to comply with these terms. If you do not agree with these terms, please do not use our platform.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Account Registration</h2>
            <ul class="list-disc pl-8 mb-4">
              <li>When you create an account with JuggleHire, you must provide accurate and complete information.</li>
              <li>You are responsible for maintaining the security and confidentiality of your account information.</li>
            </ul>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <ul class="list-disc pl-8 mb-4">
              <li>You agree not to use our platform for any illegal or unauthorized purposes.</li>
              <li>You shall not violate any laws, regulations, or third-party rights while using our services.</li>
            </ul>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <ul class="list-disc pl-8 mb-4">
                <li>All content and materials on JuggleHire are protected by copyright and other applicable laws.</li>
                <li>You may not reproduce, distribute, modify, or republish any content from our platform without our written permission.</li>
            </ul>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4"> Privacy Policy </h2>
            <p>Your use of JuggleHire is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">Termination</h2>
            <p>You have the right to:</p>
            <ul class="list-disc pl-8 mb-4">
                <li> We reserve the right to terminate or suspend your account if you violate these terms or engage in activities that may harm our platform or other users. </li>
            </ul>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>We may update these terms as needed. Any changes will be posted on our platform.</p>
          <p>It is your responsibility to review the terms periodically.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions or concerns regarding these terms, please contact us at <strong> hello [at] jugglehire [dot] com</strong></p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-4">
          <p>Thank you for using JuggleHire. Please read and understand these terms before using our platform.</p>
        </div>
    </div>
  </div>
</template>

<script setup>
const title = "JuggleHire Terms and Conditions | Guidelines for Usage";
const description = "Read JuggleHire's terms and conditions to understand the guidelines for using our recruitment software and services.";

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
