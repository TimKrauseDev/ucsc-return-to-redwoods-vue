<script setup>
import CostToAttend from '@/components/home/CostToAttend.vue';
import FAQ from '@/components/home/FAQ.vue';
import Housing from '@/components/home/Housing.vue';
import Intro from '@/components/home/Intro.vue';
import PageBanner from '@/components/home/PageBanner.vue';
import Recap from '@/components/home/Recap.vue';
import Schedule from '@/components/home/Schedule.vue';

</script>

<template>
  <main id="main" class="home">
    <PageBanner />
    <Recap />
    <Intro />
    <Schedule />
    <Housing />
    <CostToAttend />
    <FAQ />
  </main>
</template>
