<script setup>
import ButtonLink from "@/components/ui/ButtonLink.vue";
import { RouterLink } from "vue-router";

const year = new Date().getFullYear();
</script>

<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="footer-branding col col-6 mobile-full">
            <RouterLink to="/">
              <img
                src="/images/logo.png"
                width="190"
                height="126"
                alt="Return to the Redwoods | UC Santa Cruz"
                title="Return to the Redwoods | UC Santa Cruz"
              />
              <img
                src="/images/img-alumni_logo.png"
                width="190"
                height="109"
                alt="UC Santa Cruz | Alumni"
                title="UC Santa Cruz | Alumni"
              />
            </RouterLink>
          </div>

          <nav class="footer-nav col col-6 mobile-full" aria-label="Footer">
            <ul class="menu" id="menu-footer">
              <li><RouterLink to="/schedule">Schedule</RouterLink></li>
              <li>
                <RouterLink :to="{ path: '/', hash: '#housing' }"
                  >Housing</RouterLink
                >
              </li>
              <li>
                <RouterLink :to="{ path: '/', hash: '#faqs' }">Faqs</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="container">
      <hr />
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="copyright col col-8 mobile-full">
            <p>
              &copy; {{ year }} Regents of the University of California. All
              Rights Reserved.
            </p>
          </div>
          <div class="tos col col-4 mobile-full">
            <ButtonLink
              title="Privacy Policy & Terms of Use"
              href="https://its.ucsc.edu/terms/"
              external
              :arrow="false"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
