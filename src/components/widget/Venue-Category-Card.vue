<template>
    <div class="bg-white bg-opacity-50 shadow-sm mt-8 p-8 space-y-4 flex flex-col items-center justify-center rounded-xl min-h-48">
        <img :src="image" alt="Venue category icon" class="w-14 h-14">
        <p class="text-center line-clamp-2 font-normal">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>