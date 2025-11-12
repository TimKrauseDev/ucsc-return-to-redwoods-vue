<script setup>
import imgDay1 from '@/assets/img/img-day1.jpg'
import imgDay2 from '@/assets/img/img-day2.jpg'
import imgDay3 from '@/assets/img/img-day3.jpg'
import imgCalendar from '@/assets/img/calendar.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    id="schedule"
    class="section schedule-section"
    aria-labelledby="schedule-title"
  >
    <div class="container">

      <h2 id="schedule-title">Schedule</h2>

      <!--Card (Image Right)-->
      <article class="card card-horizontal-right">
        <div class="card-image-wrapper">
          <img
            :src="imgDay1"
            alt="A group of students talking together on steps"
          />
          <div class="card-image-label">
            <img
              :src="imgCalendar"
              alt=""
              width="24"
              height="24"
            />
            <span>Day 1</span>
          </div>
        </div>
        <div class="card-content-wrapper">
          <h3>Friday August 18, 2023</h3>
          <p>Settle in and celebrate your return to campus with an all-alumni sunset reception.</p>
          <p><RouterLink
              class="button button-outline"
              to="/schedule#friday"
            >View Full schedule<i class="pi pi-chevron-right" style="margin-left: .5rem"></i></RouterLink></p>
        </div>
      </article><!--End Card-->

      <!--Card (Image Left)-->
      <article class="card card-horizontal-left">
        <div class="card-image-wrapper">
          <img
            :src="imgDay2"
            alt="Man and woman talking on bleachers"
          />
          <div class="card-image-label">
            <img
              :src="imgCalendar"
              alt=""
              width="24"
              height="24"
            />
            <span>Day 2</span>
          </div>
        </div>
        <div class="card-content-wrapper">
          <h3>Saturday August 19, 2023</h3>
          <p>Choose your own adventure! Enjoy a big day of outdoor activities, campus open houses, and an exciting event at the Quarry Amphitheater.
          </p>
          <p><RouterLink
              class="button button-outline"
              to="/schedule#saturday"
            >View Full schedule<i class="pi pi-chevron-right" style="margin-left: 0.5rem;"></i></RouterLink></p>
        </div>
      </article><!--End Card-->

      <!--Card (Image Right)-->
      <article class="card card-horizontal-right">
        <div class="card-image-wrapper">
          <img
            :src="imgDay3"
            alt="Man and woman hugging outside"
          />
          <div class="card-image-label">
            <img
              :src="imgCalendar"
              alt=""
              width="24"
              height="24"
            />
            <span>Day 3</span>
          </div>
        </div>
        <div class="card-content-wrapper">
          <h3>Sunday August 20, 2023</h3>
          <p>Say farewell to friends and classmates at breakfast before checking out and heading home.</p>
          <p><RouterLink
              class="button button-outline"
              to="/schedule#sunday"
            >View Full schedule<i class="pi pi-chevron-right" style="margin-left: 0.5rem;"></i></RouterLink></p>
        </div>
      </article><!--End Card-->

    </div>
  </section>
</template>
