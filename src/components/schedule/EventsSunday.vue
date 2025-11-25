<script setup>
import Event from "@/components/blocks/Event.vue";
</script>

<template>
  <Event
    time="8:00 a.m. - 10:00 a.m."
    imgSrc="/images/schedule/img-continental-breakfast.jpg"
    imgAlt="A nicely decorated box of a dozen donuts"
  >
    <p class="card-title">
      <strong>Continental Breakfast</strong>
      <br />
      <em>Cowell Courtyard</em>
    </p>
    <p>Enjoy a light breakfast while taking in the view of Monterey Bay.</p>
    <p><strong>Cost:</strong> Included with Registration Fee</p>
  </Event>

  <Event time="9:00 a.m. - 1:00 p.m.">
    <p class="card-title">
      <strong>Check Out & Key Return</strong>
      <br />
      <em>Slug Central</em>
    </p>
    <p>
      Double check under your bed, and make sure you've got everything! Head to
      the Conference Services table at Slug Central to return your key before
      heading out. We can't wait to see you again next year!
    </p>
  </Event>
</template>

<style scoped lang="scss"></style>
