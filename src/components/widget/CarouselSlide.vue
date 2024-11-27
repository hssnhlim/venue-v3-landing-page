<template>
    <div class="w-full max-w-4xl flex flex-col items-center p-4 mt-4 md:flex-row md:items-start md:gap-x-4 md:mt-8 lg:px-0">
        <h1 class="text-center font-semibold text-2xl md:text-3xl mb-6 md:text-start mt-10 md:basis-2/5 md:flex-grow">{{ text }}</h1>
        
        <img :src="image" alt="Venue Picture" class="w-full max-h-[400px] object-cover rounded-lg shadow-lg mt-4 md:mt-0 md:basis-3/5 md:flex-grow" />
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
};
</script>