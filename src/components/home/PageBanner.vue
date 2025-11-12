<script setup>
import imgCampus from '@/assets/img/campus.jpg'
import video from '@/assets/img/ucsc-arial.mp4'
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
      :poster="imgCampus"
    >
      <source
        :src="video"
        type="video/mp4"
      />
      <p>Your browser does not support the video tag.</p>
    </video>

    <div class="page-banner-overlay"></div>

    <div class="container">

      <div class="row">
        <div class="col col-7 col-md-9 mobile-full">
          <h1
            id="banner-title"
            class="page-title"
          >Return to the Redwoods</h1>
          <p class="lead text-white"><em>Save the Date!</em></p>
        </div>
      </div>

      <div class="page-banner-dates">
        <div class="date-start">Fri<br /><span>Aug 16<br />2024</span></div>
        <div class="date-seperator">-</div>
        <div class="date-end">Sun<br /><span>Aug 18<br />2024</span></div>
      </div>

      <div class="row">
        <div class="col col-9 mobile-full">
          <p class="lead text-white"><em>See you next year! (Registration will open in early 2024)</em></p>
          <div
            style="height:5px"
            aria-hidden="true"
          ></div>
          <div class="page-banner-cta">
            <div>
              <a
                class="button button-secondary"
                href="https://news.ucsc.edu/2023/08/return-to-the-redwoods.html"
                target="_blank"
                ref="noreferrer noopener"
              >In the News<i class="pi pi-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col col-3 mobile-full">
          <div class="bg-video-controls">
            <button class="bg-video-playpause play">
              <span
                class="play-text"
                aria-hidden="true"
              ><i class="pi pi-play"></i>Play video</span>
              <span class="pause-text"><i class="pi pi-pause"></i>Pause Video</span>
            </button>
          </div>
        </div>
      </div>

    </div>

  </section>

</template>
