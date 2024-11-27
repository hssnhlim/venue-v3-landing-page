<template>
    <!-- Get started part 1 -->
    <section class="w-full bg-custom-gradient-top-left">
        <div class="max-w-4xl mx-auto py-8 px-4 pb-20">
            <h1 class="text-3xl font-semibold text-primary-color mb-8">{{ $t('get-started.section1.title') }}</h1>

            <!-- Step 1 -->
            <div class="w-full flex flex-row gap-x-4 justify-start items-center text-xl">
                <!-- Bullet points -->
                <div class="">
                    <p class="bg-white w-12 h-12 flex items-center justify-center rounded-full 
                        text-primary-color border-solid border-2 border-primary-color">1</p>
                </div>
                <!-- End of bullet points -->

                <!-- Step -->
                <div>
                    {{ $t('get-started.section1.step-1') }} <span> <a class="font-medium" target="_blank"
                            href="https://play.google.com/store/apps/details?id=my.com.venue&hl=en-MY">Android</a>
                    </span> {{ $t('get-started.section1.step-1-1') }}
                    <span> <a class="font-medium" target="_blank"
                            href="https://apps.apple.com/my/app/venue-app/id6443705242">iOS</a>
                    </span>
                    {{ $t('get-started.section1.step-1-2') }}
                </div>
                <!-- End of step -->
            </div>
            <!-- End step 1 -->

            <!-- Step 2 -->
            <div class="w-full flex flex-row gap-x-4 justify-start items-center mt-8 text-xl">
                <!-- Bullet points -->
                <div class="">
                    <p class="bg-white w-12 h-12 flex items-center justify-center rounded-full 
                        text-primary-color border-solid border-2 border-primary-color">2</p>
                </div>
                <!-- End of bullet points -->

                <!-- Step -->
                <div>
                    {{ $t('get-started.section1.step-2') }}
                </div>
                <!-- End of step -->
            </div>
            <!-- End step 2 -->

            <!-- Step 3 -->
            <div class="w-full flex flex-row gap-x-4 justify-start items-center mt-8 text-xl">
                <!-- Bullet points -->
                <div class="">
                    <p class="bg-white w-12 h-12 flex items-center justify-center rounded-full 
                        text-primary-color border-solid border-2 border-primary-color">3</p>
                </div>
                <!-- End of bullet points -->

                <!-- Step -->
                <div>
                    {{ $t('get-started.section1.step-3') }}
                </div>
                <!-- End of step -->
            </div>
            <!-- End step 3 -->

            <!-- Step 4 -->
            <div class="w-full flex flex-row gap-x-4 justify-start items-center mt-8 text-xl">
                <!-- Bullet points -->
                <div class="">
                    <p class="bg-white w-12 h-12 flex items-center justify-center rounded-full 
                        text-primary-color border-solid border-2 border-primary-color">4</p>
                </div>
                <!-- End of bullet points -->

                <!-- Step -->
                <div>
                    {{ $t('get-started.section1.step-4') }}
                </div>
                <!-- End of step -->
            </div>
            <!-- End step 4 -->

            <!-- Step 5 -->
            <div class="w-full flex flex-row gap-x-4 justify-start items-center mt-8 text-xl">
                <!-- Bullet points -->
                <div class="">
                    <p class="bg-white w-12 h-12 flex items-center justify-center rounded-full 
                        text-primary-color border-solid border-2 border-primary-color">5</p>
                </div>
                <!-- End of bullet points -->

                <!-- Step -->
                <div>
                    {{ $t('get-started.section1.step-5') }}
                </div>
                <!-- End of step -->
            </div>
            <!-- End step 5 -->
        </div>
    </section>
    <!-- End of get started part 1 -->

    <!-- Get started part 2 -->
    <section class="w-full bg-white py-8 px-4">
        <div class="max-w-4xl mx-auto">
            <h1 class="w-full text-primary-color text-3xl font-semibold text-start">{{
                $t('get-started.section2.noBold.title') }}
            </h1>

            <div class="mt-10 flex flex-col justify-center items-start gap-y-10 md:gap-x-8 md:flex-row">

                <!-- Info 1 -->
                <div class="w-full h-96 flex flex-col items-start justify-start bg-white shadow-md p-5 rounded-xl">
                    <img class="w-16 h-16 object-cover" src="../assets/img/dollar-sign-icon.png" alt="Dollar sign icon">

                    <h2 class="mt-4 text-lg font-semibold">{{ $t('get-started.section2.noBold.title-1') }}</h2>

                    <p class="mt-2 flex-1">{{ $t('get-started.section2.noBold.subtitle-1') }} <strong>{{
                        $t('get-started.section2.bold[0]') }}</strong></p>
                </div>
                <!-- End of Info 1 -->

                <!-- Info 2 -->
                <div class="w-full h-96 flex flex-col items-start justify-start bg-white shadow-md p-5 rounded-xl">
                    <img class="w-11 h-11 object-cover" src="../assets/img/percent-icon.png" alt="Percent icon">

                    <h2 class="mt-9 text-lg font-semibold">{{ $t('get-started.section2.noBold.title-2') }}</h2>

                    <p class="mt-2"><strong>{{ $t('get-started.section2.bold[1]') }}</strong> {{
                        $t('get-started.section2.noBold.subtitle-2') }}
                        <strong>{{ $t('get-started.section2.bold[2]') }}</strong>
                    </p>

                    <p class="mt-4"><strong>{{ $t('get-started.section2.bold[3]') }}</strong> {{
                        $t('get-started.section2.noBold.subtitle-2-1') }} <strong>{{ $t('get-started.section2.bold[4]')
                            }}</strong></p>
                </div>
                <!-- End of Infor 2 -->

                <!-- Info 3 -->
                <div class="w-full h-96 flex flex-col items-start justify-start bg-white shadow-md p-5 rounded-xl">
                    <img class="w-16 h-16 object-cover" src="../assets/img/calendar-icon.png" alt="Dollar sign icon">

                    <h2 class="mt-4 text-lg font-semibold">{{ $t('get-started.section2.noBold.title-3') }}</h2>

                    <p class="mt-2 w-full h-full">{{ $t('get-started.section2.noBold.subtitle-3') }} <strong>{{
                        $t('get-started.section2.bold[5]') }}</strong> {{
                                $t('get-started.section2.noBold.subtitle-3-1') }}
                    </p>
                </div>
                <!-- End of Info 3 -->
            </div>

            <div class="mt-6">
                <p>
                    {{ $t('get-started.section2.last.title-1') }} <a class="underline text-primary-color" target="blank"
                        href="https://drive.google.com/file/d/1Vb9HbuQ15GjTcKLdFVEFb4HcPoBzR4Xd/view">{{ $t('get-started.section2.last.link') }}</a> {{ $t('get-started.section2.last.title-2') }}
                </p>
            </div>

            <div class="mt-10">
                <h1 class="text-xl font-medium">
                    {{ $t('get-started.section2.noBold.subtitle-4') }} <span class="font-semibold text-primary-color">{{
                        $t('get-started.section2.bold[6]') }}</span>
                </h1>
            </div>
        </div>
    </section>
    <!-- End of get started part 2 -->

    <!-- Footer -->
    <MyFooter />
    <!-- End of footer -->
</template>

<script setup>
import MyFooter from './Footer.vue';
</script>
