<template>
  <div>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-base font-semibold leading-7 text-blue-400">Your Data, Your Trust</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </div>
    </div>
    <div class="max-w-4xl mx-auto py-8">
        <div class="bg-white p-8 shadow-lg rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul class="list-disc pl-8 mb-4">
                <li>Contact Information: Name, email address, phone number.</li>
                <li>User Profile: Employment history, educational background, skills, and preferences.</li>
                <li>Communication Data: Information related to your interactions with us and other users.</li>
                <li>Usage Information: Data about how you use our services.</li>
            </ul>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>To provide and maintain our services.</li>
                <li>To improve, customize, and expand our services.</li>
                <li>To respond to your requests, comments, or questions.</li>
                <li>To communicate with you about our services.</li>
                <li>To monitor and analyze usage patterns.</li>
            </ul>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p>We may share your information under the following circumstances:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>With your consent.</li>
                <li>With our service providers who assist in delivering our services.</li>
                <li>To comply with legal obligations.</li>
                <li>To protect our rights, privacy, safety, or property, and that of our users.</li>
            </ul>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">Data Security</h2>
            <p>We take data security seriously and employ measures to protect your information. However, no method of transmission or electronic storage is entirely secure.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
            <h2 class="text-2xl font-semibold mb-4">Your Choices</h2>
            <p>You have the right to:</p>
            <ul class="list-disc pl-8 mb-4">
                <li> Access, correct, or delete your personal information. </li>
                <li> Withdraw your consent. </li>
                <li> Object to our use of your data. </li>
            </ul>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 class="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies to collect information. You can manage your preferences through your browser settings.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 class="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p>Our services may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy as needed. The latest version will be posted on our website.</p>
        </div>
        <div class="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>For any questions or concerns regarding this Privacy Policy, please contact us at <strong> hello [at] jugglehire [dot] com</strong></p>
        </div>
    </div>
  </div>
</template>

<script setup>
const title = "JuggleHire Privacy Policy | Your Data, Your Trust";
const description = "Review JuggleHire's privacy policy to understand how we handle your data and maintain your trust in our recruitment software.";

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
