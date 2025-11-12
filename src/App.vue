<script setup>
import Header from '@/components/global/Header.vue';
import Footer from '@/components/global/Footer.vue';

import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
