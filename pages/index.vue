<template>
  <div>
    <hero-section />
    <logo-cloud title="Powering Global Visionary Leaders" />
    <recruitment-puzzle />
    <single-dashboard />
    <can-i-try-section />
    <easiest-job />
    <identical-career-portal />

    <authority-communication />
    <interview-scheduling />
    <stats />
    <starting-today />
    <why-choose />
    <social-media />
    <discount />
    <testimonial-section />
    <pricing-faq-section title="Any Question On Mind?" subtitle="Get your answer before you begin" :center-title="true"
      :faqs="faqs" />
    <!-- <contact /> -->
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
const title = "JuggleHire | Simplifying Hiring for Busy Founders & Recruiters";
const description =
  "Welcome to JuggleHire, your trusted partner in streamlining the hiring process. Discover how our recruitment software can make hiring easy for busy founders, entrepreneurs, and small business owners.";

const faqs = [
  {
    question: "Do I Need To Pay For Future Updates?",
    answer:
      `<b>Ans:</b> Never! Every update we make will automatically adjust your current plan. You
just enjoy the latest version, yet the price will remain the same.`,
  },
  {
    question: "How Can You Guarantee My Data Security?",
    answer:
      `<b>Ans:</b> Juggle Hire constructs the most creative coding structure that secures the data
itself. As you start using our requirement software, you'll get a totally personalized
system where only you have access and who you'll approve. Even we can't access your data without your approval. Anytime you want to cancel the plan, delete it
with a single click. Otherwise, it will automatically delete after 30 days.`,
  },
  {
    question: "Can I Manage All The Hiring Process Using Only Juggle Hire?",
    answer:
      `<b>Ans:</b> Yes. We bring the most updated requirements technology on the planet earth
exits before. We're also open to taking our customers' suggestions if there is any
way we can improve your hassle-free hiring journey.`,
  },
  {
    question: "Can One Single Person Manage The Software?",
    answer:
      `<b>Ans:</b> 100%! Whether you are a tech guy or have no clue about technology, you can
still manage it. Because it's as simple as school kids can use. If you still have any
challenges with using the software, see the guideline videos or ask to the support to
become a master at it within an
hour or less.`,
  },
  {
    question: "What If I Want To Cancel The Juggle Hire?",
    answer:
      `<b>Ans:</b> Simply go to the dashboard. Click the setting under the category list. See
"Cancel My Plan". It will automatically stop your account. You don't need to talk to
anyone about this at all.`,
  },
]
onMounted(() => {
  AOS.init();
});
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const route = useRoute();
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.jugglehire.com/" + route.path,
    },
  ],
});

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
  },
  // More posts...
];
</script>
