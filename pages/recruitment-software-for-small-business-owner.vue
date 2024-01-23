<template>
    <div>
        <recruitment-pro-hero-section />
        <logo-cloud title="Powering Global Visionary Leaders" />
        <recruitment-pro-feature-section />
        <recruitment-pro-feature-section-2 />
        <recruitment-pro-feature-section-3 />
        <recruitment-pro-feature-section-4 />
        <testimonial-section />
        <recruitment-pro-feature-section-5 />
        <pricing-faq-section title="Got Question?" subtitle="Get all your questions answered before you begin"
            centerTitle="true" :faqs="faqs" />
        <recruitment-pro-feature-section-6 />
    </div>
</template>

<script setup>
const title = "JuggleHire | Simplifying Hiring for Busy Founders & Recruiters";
const description = "Welcome to JuggleHire, your trusted partner in streamlining the hiring process. Discover how our recruitment software can make hiring easy for busy founders, entrepreneurs, and small business owners.";

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


const faqs = [
    {
        question: "What Level of Customer Support Can You Guarantee?",
        answer:
            "99.95% of the time, you don't need us. Still, if you feel urgent about anything, just message us, and we'll get back to you within 24 hours or less.",
    },
    {
        question: "Can I Pay For The Full Year?",
        answer:
            "Yes, you can check the plan and get year-long access. And if you choose the full-year plan, you'll get a 29% discount instant.",
    },
    {
        question: "Can I Use The Software On The Mobile?",
        answer:
            "Surely, most of our clients are busy people, and they're unable to sit around in front of a laptop all day long. Instead, our recruitment software makes it all happen in real time over the phone.",
    },
    {
        question: "What Reporting and Analytics Capabilities Does it Have?",
        answer:
            "You'll see exactly how many candidates applied for the specific job post, candidate experience, expertise, location, and everything you need to know to become a master at hiring.",
    },
    {
        question: "How Customized Your Software Is?",
        answer:
            "You can juggle through dozens of recruitment software within an hour on the internet. But none of this is exactly designed for small businesses and medium businesses. We bring all the latest technology in one place, so you don't have to wait to become competent at hiring. Install the software, and it takes care of the rest.",
    },
    {
        question: "How useful is it for small and medium business growth?",
        answer:
            "JuggleHire is exactly designed for them. Because many recruiters have zero experience in hiring, they still need to hire the right people. They have to explore multiple tools and boring traditional manual systems. That sometimes cost their fortune. But we bring it all under the same umbrella. So you can hire like a pro even if you are new.",
    },
]
</script>
