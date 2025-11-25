<script setup>
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Spacer from "@/components/ui/Spacer.vue";
</script>

<template>
  <section
    id="recap"
    class="section recap-section"
    aria-labelledby="recap-title"
  >
    <div class="container">
      <h2 id="recap-title" class="text-center">Relive the Weekend</h2>

      <div class="row">
        <div class="col col-8 push-2 mobile-full">
          <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rf6_HQ1WUZw?si=PpqSxvNR2DlyrO5j"
              title="YouTube video player"
              frameborder="0"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
            ></iframe>
          </div>
        </div>
      </div>

      <Spacer :height="60" />

      <div class="btn-group">
        <ButtonLink
          title="View All Event Photos"
          href="https://www.flickr.com/photos/ucsantacruz/sets/72177720310842359/"
          external
        />
        <ButtonLink
          title="Upload Your Photos"
          href="https://dropevent.com/ReturnToTheRedwoods/upload"
          external
        />
      </div>
    </div>
  </section>
</template>
