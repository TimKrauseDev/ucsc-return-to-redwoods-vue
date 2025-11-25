<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink :to="{ path: '/', hash: '#main' }" class="skip-link"
    >Skip to main content</RouterLink
  >
</template>

<style scoped lang="scss"></style>
