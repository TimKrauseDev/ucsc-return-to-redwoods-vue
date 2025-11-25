<script setup>
import { onMounted, ref } from "vue";

const videoRef = ref(null);
const isPaused = ref(false);

const toggleVideoPlayPause = () => {
  videoRef.value.paused ? videoRef.value.play() : videoRef.value.pause();
  isPaused.value = videoRef.value.paused;
};

onMounted(() => {
  isPaused.value = videoRef.value?.paused;
});
</script>

<template>
  <section
    id="banner-section"
    class="page-banner page-banner-home"
    aria-labelledby="banner-title"
  >
    <video
      loop
      autoplay
      muted
      class="bg-video"
      ref="videoRef"
      poster="/images/home/campus.jpg"
    >
      <source src="/images/home/ucsc-arial.mp4" type="video/mp4" />
      <p>Your browser does not support the video tag.</p>
    </video>

    <div class="page-banner-overlay"></div>

    <div class="container">
      <div class="row">
        <div class="col col-7 col-md-9 mobile-full">
          <h1 id="banner-title" class="page-title">Return to the Redwoods</h1>
          <p class="lead text-white"><em>Save the Date!</em></p>
        </div>
      </div>

      <div class="page-banner-dates">
        <div class="date-start">
          Fri<br /><span>Aug 16<br />2024</span>
        </div>
        <div class="date-seperator">-</div>
        <div class="date-end">
          Sun<br /><span>Aug 18<br />2024</span>
        </div>
      </div>

      <div class="row">
        <div class="col col-9 mobile-full">
          <p class="lead text-white">
            <em>See you next year! (Registration will open in early 2024)</em>
          </p>
        </div>
        <div class="col col-3 mobile-full">
          <div class="bg-video-controls">
            <button
              class="bg-video-playpause play"
              @click="toggleVideoPlayPause"
            >
              <span class="pauseplay-text">
                <span v-show="isPaused">
                  <i class="pi pi-play"></i>Play video
                </span>
                <span v-show="!isPaused">
                  <i class="pi pi-pause"></i>Pause video
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
