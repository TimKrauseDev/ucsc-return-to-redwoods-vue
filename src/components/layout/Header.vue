<script setup>
import SkipLink from "@/components/blocks/SkipLink.vue";
import MobileMenu from "@/components/blocks/MobileMenu.vue";
import DesktopMenu from "@/components/blocks/DesktopMenu.vue";
import SiteBranding from "@/components/blocks/SiteBranding.vue";
</script>

<template>
  <header id="header">
    <SkipLink />

    <div class="container">
      <div class="row">
        <SiteBranding />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
