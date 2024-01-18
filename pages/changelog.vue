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

const url = 'https://www.jugglehire.com';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: `${url}/screenshots/jugglehire-ss-share.webp`
});

const changeLogs = [
    {
        id: 103,
        title: "Embracing Challenges, Igniting Potential, Soaring Towards Success.",
        description: "Get v0.10.1 - Unveiling Stunning Auto-Generated Open Graph Images for Profiles and Jobs.",
        image: "/screenshots/jugglehire-ss-share.webp",
        version: "v0.10.1",
        date: '12 January 2024',
        features: [
            {
                title: 'Auto-Generated Social Preview for Profiles and Jobs',
                description: 'Receive new social preview images for your company profile and each job.',
            },
            {
                title: 'Add Benefits to Your Company Profile',
                image: "/screenshots/jugglehire-profile-page.webp",
                description: 'Easily share and organize your company benefits in a clean and efficient manner.',
            }
        ],
        "improvements": [
            { type: "fix", description: "Updated SEO meta tags for company pages" },
            { type: "fix", description: "Improved users filter by date in admin panel" },
            { type: "chore", description: "Enhanced job SEO opengraph image" },
            { type: "fix", description: "Added replyTo email as company email & cleaned up job apply success page" },
            { type: "chore", description: "Updated company public profile design" },
            { type: "style", description: "Improved company profile description" },
        ],
    },
    {
        id: 102,
        title: "Building Momentum, Preparing for the Next Big Leap.",
        description: "Get JuggleHire v0.9.0 - Stability and Fixes Update: Resolving Bugs for a Smoother Experience",
        image: "screenshots/jugglehire-discard-darft.webp",
        version: "v0.9.0",
        date: '15 December 2023',
        features: [
            {
                title: 'Delete Draft Job',
                description: 'Simplify your experience—clean up your job board by easily removing draft jobs with just a click on the three dots.',
            },
            {
                title: 'Filter Job based on Status',
                description: 'In All Jobs Page Now you can save your time filtering OPEN, CLOSED or DRAFT jobs.',
            }
        ],
        improvements: [
            { type: 'fix', description: 'updated SEO meta tags for company pages' },
            { type: 'fix', description: 'domain verification error fixed' },
            { type: 'fix', description: 'profile image upload and save button not working' },
            { type: 'fix', description: 'domain accepts without https' },
            { type: 'fix', description: 'apply form not showing status after applied' },
            { type: 'chore', description: 'email content updated' },
            { type: 'chore', description: 'updated default preselected value from setup steps' },
            { type: 'chore', description: 'added recaptcha activation for welcoming real users' },
            { type: 'chore', description: 'responsiveness update in jobs page' },
        ]
    },
    {
        id: 101,
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
        improvements: [
            { type: 'Fixed', description: 'Enhanced job public page layout and button functionality.' },
            { type: 'Fixed', description: 'Resolved issues with the inbox.' },
            { type: 'Fixed', description: 'Notification errors & mark as seen.' },
            { type: 'Fixed', description: 'Resolved unique validation error when creating a new team.' },
            { type: 'Fixed', description: 'Styling issues with bullet and numbered lists in circular details.' },
            { type: 'Fixed', description: 'Addressed issues with job deadlines and status.' },
            { type: 'Fixed', description: 'Resolved closed job duplication status error.' },
            { type: 'Fixed', description: 'Issues with the deadline count.' },
            { type: 'Fixed', description: 'Apply form optional parameters are now truly optional.' },
            { type: 'Fixed', description: 'Domain verification issues.' },
            { type: 'Fixed', description: 'Corrected salary format mismatch on candidate listing page.' },
            { type: 'Fixed', description: 'Resolved notification errors and added test cases.' },
            { type: 'Fixed', description: 'Rescheduling error on the schedule page.' },
            { type: 'Fixed', description: 'Email layout issues & Content.' },
            { type: 'Fixed', description: 'Resolved settings page issues.' },
            { type: 'Fixed', description: 'Optimized queries and fixed dashboard count mismatch.' },
            { type: 'Fixed', description: 'Addressed issues with markings and questions.' },
            { type: 'Fixed', description: 'Fixed apply form custom question-saving issues.' },
            { type: 'Fixed', description: 'Rejected candidates are now pushed to the bottom of the list.' },
            { type: 'Fixed', description: 'Prevented applicants from different teams from searching.' },
            { type: 'Fixed', description: 'Resolved job application errors.' },
            { type: 'Fixed', description: 'Apply form issues and company profile photo CSS.' },
            { type: 'chore', description: 'Improved role description text.' },
            { type: 'chore', description: 'Updated job creation email texts.' },
            { type: 'chore', description: 'Updated candidate listing page texts.' },
            { type: 'chore', description: 'Improved page titles and text content.' },
            { type: 'chore', description: 'Ordered jobs by status.' },
            { type: 'chore', description: 'Alignment and responsive issues.' },
            { type: 'chore', description: 'Updated company setting labels.' },
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
