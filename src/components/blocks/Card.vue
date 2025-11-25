<script setup>
import ButtonLink from "@/components/ui/ButtonLink.vue";

const props = defineProps({
  cardImageLabel: String,
  heading: String,
  buttonTitle: {
    type: String,
    default: "View Full Schedule",
  },
  href: String,
  hash: String,
  external: Boolean,
  imgSrc: String,
  imgAlt: String,
  imageRight: Boolean,
  vertical: Boolean,
  small: Boolean,
});

const { vertical, imageRight, small } = props;

const filteredClasses = (arr = []) => arr.filter(Boolean).join(" ");

const cardClasses = filteredClasses([
  "card",
  !vertical && !imageRight ? "card-horizontal-left" : "",
  !vertical && imageRight ? "card-horizontal-right" : "",
  vertical && small ? "card-vertical-sm" : "",
  vertical && !small ? "card-vertical-lg" : "",
]);
</script>

<template>
  <article :class="cardClasses">
    <div class="card-image-wrapper">
      <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" />
      <div v-if="!vertical" class="card-image-label">
        <img src="/images/home/calendar.png" alt="" width="24" height="24" />
        <span>
          <slot name="imageLabel" />
        </span>
      </div>
    </div>
    <div class="card-content-wrapper">
      <h3 v-if="heading">{{ heading }}</h3>
      <slot name="content" />
      <p v-if="href">
        <ButtonLink :title="buttonTitle" :href :hash :external />
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss"></style>
