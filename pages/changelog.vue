<template>
    <div class="max-w-4xl mx-auto py-10 dark:bg-gray-800">
        <div class="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <span
                class="inline-block mb-2 py-[.3125rem] px-2.5 rounded-full text-xs uppercase tracking-wide font-medium bg-white border border-gray-200 text-gray-800 dark:border-gray-700">
                <span class="block mt-0.5">Updates</span>
            </span>
            <h2 class="text-3xl font-bold dark:text-white">Changelog</h2>
            <p class="mt-2 md:text-lg text-gray-800 dark:text-gray-400">Stay in the Loop and See What's New Added, Fixed,
                Improved or Updated.!</p>
        </div>
        <div class="ps-4 sm:ps-0">

            <template v-for="(change, i) in changeLogs" :key="i">
                <!-- Step Item -->
                <changelog-step>
                    <template #version>
                        <changelog-version :date="change.date" :version="change.version"></changelog-version>
                    </template>

                    <template #default>
                        <changelog-title :id="change.version.replace('.', '_')">
                            {{ change.title }}
                            <template #description>
                                {{ change.description }}
                            </template>
                        </changelog-title>

                        <template v-if="change.image">
                            <changelog-image :src="change.image"></changelog-image>
                        </template>

                        <!-- New Examples pages -->
                        <changelog-features :features="change.features"></changelog-features>
                        <!-- New Examples pages -->

                        <!-- Fixes and Improvements -->
                        <changelog-fixing :improvements="change.improvements"></changelog-fixing>
                    </template>
                </changelog-step>
                <!-- End Step Item -->
            </template>
        </div>
    </div>
</template>

<script setup>
const title = "JuggleHire Changelog | Stay Updated with Our Latest Features and Improvements";
const description = "Explore the JuggleHire changelog to discover our latest updates, features, and improvements. Stay informed about the advancements we've made to enhance your experience on our platform. Keep track of our commitment to continuous improvement.";

useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
});

const changeLogs = [
    {
        id: 110,
        title: "Continuous improvement for standard & stability",
        description: "Meet JuggleHire v0.7.0 - daily updates making us more confident, we have 4 new features and regular improvements",
        version: "v0.7.0",
        date: '12 December 2023',
        image: "screenshots/jugglehire-v0.7.0.webp",
        features: [
            {
                title: 'Multiple Email Invitations',
                description: 'Enhanced collaboration with the introduction of multiple email invitations.',
            },
            {
                title: 'Onboarding Checklist',
                description: 'Implemented a checklist to guide new users through the platform setup.',
            },
            {
                title: 'Product Tour Guide Integration',
                description: 'Integrated a Product Tour Guide to assist users in navigating the platform.',
            },
            {
                title: 'Invitation Reminders',
                description: 'Implemented reminders for non-signed-up users within the next 3 days.',
            }
        ],
        // improvements: [
        //     { type: 'Improved', description: 'Bullet list or numbered list styling in circular details.' },
        //     { type: 'Resolved', description: 'Unique validation error when creating new teams.' },
        //     { type: 'Enhanced', description: 'Admin section functionalities.' },
        //     { type: 'Quick fixes', description: 'For markings, checklist, and notifications.' },
        //     { type: 'Enhanced', description: 'Inbox functionality.' },
        //     { type: 'Improved', description: 'Job application bugs.' },
        //     { type: 'Rearranged', description: 'Side link position for better navigation.' },
        //     { type: 'Updated', description: 'Candidate listing page texts.' },
        //     { type: 'Improved', description: 'Contacts page functionalities.' },
        //     { type: 'Updated', description: 'Email template page text for clarity.' },
        //     { type: 'Enhanced', description: 'Role description text.' },
        //     { type: 'Improved', description: 'Job public page layout and button functionality.' },
        //     { type: 'Resolved', description: 'Login issues and access errors.' },
        //     { type: 'Fixed', description: 'Contact page redirection issue and added more test cases for settings pages.' },
        //     { type: 'Resolved', description: 'Team and profile page 500 errors due to file loading issues.' },
        //     { type: 'Fixed', description: 'Phone number component modifications and other minor issues.' },
        //     { type: 'Refactored', description: 'Tel input styles for better consistency.' },
        //     { type: 'Unit tests and refactoring', description: 'For user-related functionalities.' },
        //     { type: 'Added', description: 'Domain verification tests for stability.' },
        //     { type: 'Added', description: 'Default CSS to enhance overall styling.' },
        //     { type: 'Improved', description: 'Overall testing duration and process.' },
        // ]
        improvements: [
            { type: 'Fixed', description: 'Enhanced job public page layout and button functionality.' },
            { type: 'Fixed', description: 'Resolved issues with the inbox.' },
            { type: 'Fixed', description: 'Fixed notification errors.' },
            { type: 'Fixed', description: 'Quick fixes for markings and checklist.' },
            { type: 'Fixed', description: 'Admin section improvements by Zakir Vai.' },
            { type: 'Fixed', description: 'Resolved unique validation error when creating a new team.' },
            { type: 'Fixed', description: 'Fixed styling issues with bullet and numbered lists in circular details.' },
            { type: 'Fixed', description: 'Improved test performance and intentionally paused tests on each PR.' },
            { type: 'Fixed', description: 'Addressed issues with job deadlines and status.' },
            { type: 'Fixed', description: 'Resolved closed job duplication status error.' },
            { type: 'Fixed', description: 'Fixed issues with the deadline count.' },
            { type: 'Fixed', description: 'Removed disturbing notices.' },
            { type: 'Fixed', description: 'Apply form optional parameters are now truly optional.' },
            { type: 'Fixed', description: 'Fixed domain verification issues.' },
            { type: 'Fixed', description: 'Corrected salary format mismatch on candidate listing page.' },
            { type: 'Fixed', description: 'Resolved notification errors and added test cases.' },
            { type: 'Fixed', description: 'Fixed rescheduling error on the schedule page.' },
            { type: 'Fixed', description: 'Made text corrections and addressed small issues.' },
            { type: 'Fixed', description: 'Fixed email layout issues.' },
            { type: 'Fixed', description: 'Resolved settings page issues.' },
            { type: 'Fixed', description: 'Optimized queries and fixed dashboard count mismatch.' },
            { type: 'Fixed', description: 'Addressed issues with markings and questions.' },
            { type: 'Fixed', description: 'Fixed apply form custom question-saving issues.' },
            { type: 'Fixed', description: 'Rejected candidates are now pushed to the bottom of the list.' },
            { type: 'Fixed', description: 'Prevented applicants from different teams from searching.' },
            { type: 'Fixed', description: 'Resolved job application errors.' },
            { type: 'Fixed', description: 'Fixed apply form issues and company profile photo CSS.' },
            { type: 'chore', description: 'Improved role description text.' },
            { type: 'chore', description: 'Updated job creation email texts.' },
            { type: 'chore', description: 'Clarified email template page text.' },
            { type: 'chore', description: 'Enhanced contacts page functionality.' },
            { type: 'chore', description: 'Updated candidate listing page texts.' },
            { type: 'chore', description: 'Improved side link positions.' },
            { type: 'chore', description: 'Resolved job apply bugs.' },
            { type: 'chore', description: 'Admin improvements with added components.' },
            { type: 'chore', description: 'Improved page titles and text content.' },
            { type: 'chore', description: 'Ordered jobs by status.' },
            { type: 'chore', description: 'Fixed alignment and responsive issues.' },
            { type: 'chore', description: 'Updated company setting labels.' },
            { type: 'chore', description: '"Skip this now" linked to the candidate management page.' },
            { type: 'chore', description: 'Updated dashboard content.' },
            { type: 'chore', description: 'Made text corrections and left-aligned buttons.' },
            { type: 'chore', description: 'Added job list to the dashboard.' },
            { type: 'chore', description: 'Removed pre-selected options from job create forms.' },
            { type: 'chore', description: 'Team invitation emails now include a single button.' },
            { type: 'chore', description: 'Added local environment checks, fixed typos and fonts.' }
        ]
    },
    {
        id: 100,
        title: "JuggleHire in New Heights!",
        description: "Meet JuggleHire v0.1.0 - this is our very first release with 5 new features",
        version: "v0.1.0",
        date: '24 November 2023',
        image: "screenshots/jugglehire-contact-ss.jpg",
        features: [
            {
                title: 'Custom Domain',
                description: 'You can add your own domain from the settings. To do this, you need to verify your domain name following instructions.',
            },
            {
                title: 'Custom Domain',
                description: 'You can add your own domain from the settings. To do this, you need to verify your domain name following instructions.',
            },
            {
                title: 'Contacts Page',
                description: 'In the sidebar navigation, you now have a single place to manage your contacts. You can quickly check all of your applicants\' details from this centralized location.',
            },
            {
                title: 'Demo Data Generation',
                description: 'Generate demo data for initial testing and checking, and remove it when no longer needed.',
            },
            {
                title: 'Reorder Gallery Images',
                description: 'Now, from the settings page, you have the ability to change the order of the uploaded images in the gallery. This allows you to display them on your public page exactly how you want.',
            },
            {
                title: 'Help Chat Widget',
                description: 'Get instant support from our expert team members who are always ready to help you with our application and guide you on how to get the best out of it.',
            }
        ],
        improvements: [
            { type: 'Fix', description: '500 error on the schedule page.' },
            { type: 'Fix', description: 'Generating Social Previews for Job Posts.' },
            { type: 'Fix', description: 'Refer friend feature.' },
            { type: 'Fix', description: 'Phone number input in apply page.' },
            { type: 'Improve', description: 'Icons in the job posting form builder.' },
            { type: 'Fix', description: 'Tab active state in settings page.' },
            { type: 'Fix', description: 'Individuals invited through email using the \'Refer friend\' or \'Team Member\' option will not need to validate their email again.' },
            { type: 'Fix', description: 'Ambiguous salary range in public pages.' },
        ]
    }
];
</script>
