<template>
    <div>
        <recruitment-pro-hero-section />
        <recruitment-pro-logo-clouds />
        <recruitment-pro-feature-section />
        <recruitment-pro-feature-section-2 />
        <recruitment-pro-feature-section-3 />
        <recruitment-pro-feature-section-4 />
        <recruitment-pro-testimonial-section />
        <recruitment-pro-feature-section-5 />
        <recruitment-pro-faqs />
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


    const posts = [
        {
            id: 1,
            title: 'Boost your conversion rate',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            imageUrl:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            author: {
                name: 'Michael Foster',
                imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            },
        },
        {
            id: 2,
            title: 'How to use search engine optimization to drive sales',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            author: {
                name: 'Michael Foster',
                imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            },
        },
        {
            id: 2,
            title: 'Boost your conversion rate',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            author: {
                name: 'Michael Foster',
                imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
            },
        },
        // More posts...
    ]
</script>
