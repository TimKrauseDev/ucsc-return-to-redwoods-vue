<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  href: String,
  hash: String,
  external: Boolean,
  arrow: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <a
    v-if="title && external"
    class="button button-outline"
    :href
    target="_blank"
    ref="noreferrer noopener"
    >{{ title }}<i v-if="arrow" class="pi pi-chevron-right"></i>
  </a>
  <RouterLink
    v-if="title && !external"
    class="button button-outline"
    :to="`${href}${hash}`"
  >
    {{ title }}<i v-if="arrow" class="pi pi-chevron-right"></i>
  </RouterLink>
</template>

<style scoped lang="scss">
.pi-chevron-right {
  margin-left: 0.5rem;
}
</style>
