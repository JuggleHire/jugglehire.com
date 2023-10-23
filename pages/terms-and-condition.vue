<template>
  <div>
    <h1>Terms and Condition</h1>
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
