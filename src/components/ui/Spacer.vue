<script setup>
defineProps({
  height: Number,
});
</script>

<template>
  <div :style="`height: ${height}px`"></div>
</template>

<style scoped lang="scss"></style>
