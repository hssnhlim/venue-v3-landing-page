<template>
    <footer class="w-full bg-custom-gradient-top-left">
        <div class="max-w-4xl mx-auto flex flex-col justify-center py-8 px-4">
            <!-- Here display grid for lg view -->
            <div class="md:grid md:grid-cols-2">
                <!-- First part -->
                <div class="flex flex-col justify-center items-start">
                    <!-- Venue logo -->
                    <img class="h-10 mb-8" src="../assets/img/brand-logo/logo.png" alt="Venue logo">

                    <!-- Social media account -->
                    <div class="flex flex-col justify-center items-start gap-y-4">
                        <div class="flex flex-row justify-center items-center space-x-4">
                            <img class="h-5" src="../assets/img/brand-logo/SOSMED-20.png" alt="Venue WhatsApp">
                            <p class="">017-690 6342</p>
                        </div>

                        <div class="flex flex-row justify-center items-center space-x-4">
                            <img class="h-4" src="../assets/img/brand-logo/SOSMED-22.png" alt="Venue Email">
                            <p class="">admin@venue.com.my</p>
                        </div>

                        <div class="flex flex-row justify-center items-center space-x-4">
                            <a href="https://www.facebook.com/venue.com.my/" target="blank">
                                <button>
                                    <img class="h-5" src="../assets/img/brand-logo/SOSMED-21.png" alt="Venue FaceBook">
                                </button>
                            </a>
                            <a href="https://www.instagram.com/venue.com.my/" target="blank">
                                <button>
                                    <img class="h-5" src="../assets/img/brand-logo/SOSMED-19.png" alt="Venue Instagram">
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- End of first part -->

                <!-- Second part -->
                <div class="flex flex-row mt-16 gap-x-4 md:mt-0 justify-center items-center">
                    <!-- Store button -->
                    <a href="https://apps.apple.com/my/app/venue-app/id6443705242" target="blank">
                        <button>
                            <img class="h-12" src="../assets/img/brand-logo/store-logo-10.png" alt="Apple Store">
                        </button>
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=my.com.venue&hl=en-MY" target="blank">
                        <button>
                            <img class="h-12" src="../assets/img/brand-logo/store-logo-08.png" alt="Google Play Store">
                        </button>
                    </a>
                </div>
                <!-- End of second part -->
            </div>

            <!-- Third part -->
            <div class="flex flex-col justify-center items-center mt-16 text-sm">
                <p class="text-center">{{ $t('footer.title-1') }}
                    <span><strong>·</strong></span>
                    <a class="px-2" href="https://drive.google.com/file/d/1ZeXdIEekq4lrIl24WuYrKu4hQ362glpm/view" target="blank">
                        {{ $t('footer.link-1') }} </a>
                    <strong>·</strong>
                    <a class="px-2" href="https://drive.google.com/file/d/1Y9VkORatAGAH0-8-D60FlCiEFS9Axgyf/view" target="blank">
                        {{ $t('footer.link-2') }} </a>
                </p>
            </div>
            <!-- End of third part -->
        </div>
    </footer>
</template>

<script setup>

</script>