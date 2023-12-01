<template>
    <div class="sm:flex">
        <!-- Left Side -->
        <slot name="version"></slot>

        <!-- End Left Side -->

        <!-- Right Side -->
        <div class="relative sm:w-3/4 pb-12 sm:pb-20 ps-8 md:ps-12">
            <div
                class="absolute -top-20 sm:top-0 bottom-0 start-0 sm:end-0 w-px -me-px sm:me-0 sm:-ms-px bg-blue-200 dark:bg-slate-400">
            </div>

            <div>
                <slot></slot>
            </div>
        </div>
        <!-- End Right Side -->
    </div>
</template>