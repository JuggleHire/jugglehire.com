<template>
  <div>
    <h1>Privacy Policy</h1>
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
