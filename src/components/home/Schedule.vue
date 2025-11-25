<script setup>
import Card from "@/components/blocks/Card.vue";
</script>

<template>
  <section
    id="schedule"
    class="section schedule-section"
    aria-labelledby="schedule-title"
  >
    <div class="container">
      <h2 id="schedule-title">Schedule</h2>

      <Card
        heading="Friday August 18, 2023"
        href="/schedule"
        hash="#friday"
        imgSrc="/images/home/img-day1.jpg"
        imgAlt="A group of students talking together on steps"
        imageRight
      >
        <template #imageLabel>Day 1</template>
        <template #content>
          <p>
            Settle in and celebrate your return to campus with an all-alumni
            sunset reception.
          </p>
        </template>
      </Card>

      <Card
        heading="Saturday August 19, 2023"
        href="/schedule"
        hash="#saturday"
        imgSrc="/images/home/img-day2.jpg"
        imgAlt="Man and woman talking on bleachers"
      >
        <template #imageLabel>Day 2</template>
        <template #content>
          <p>
            Choose your own adventure! Enjoy a big day of outdoor activities,
            campus open houses, and an exciting event at the Quarry
            Amphitheater.
          </p>
        </template>
      </Card>

      <Card
        heading="Sunday August 20, 2023"
        href="/schedule"
        hash="#sunday"
        imgSrc="/images/home/img-day3.jpg"
        imgAlt="Man and woman hugging outside"
        imageRight
      >
        <template #imageLabel>Day 3</template>
        <template #content>
          <p>
            Say farewell to friends and classmates at breakfast before checking
            out and heading home.
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>
