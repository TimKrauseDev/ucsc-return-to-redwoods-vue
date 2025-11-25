<script setup>
import Card from "@/components/blocks/Card.vue";

defineProps({
  time: String,
  imgSrc: String,
  imgAlt: String,
});
</script>

<template>
  <div class="event-wrapper">
    <div class="event-time-wrapper">
      <div class="event-time">
        <em>{{ time }}</em>
      </div>
      <div class="event-vertical-line"></div>
    </div>

    <Card :imgSrc :imgAlt vertical>
      <template #content>
        <slot />
      </template>
    </Card>
  </div>
</template>

<style scoped lang="scss"></style>
