<script setup>
import { RouterLink } from 'vue-router';
import r2rLogo from '@/assets/img/logo.png'
import alumniLogo from '@/assets/img/img-alumni_logo.png'
</script>

<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="footer-branding col col-6 mobile-full">
            <RouterLink to="/">
              <img
                :src="r2rLogo"
                width="190"
                height="126"
                alt="Return to the Redwoods | UC Santa Cruz"
                title="Return to the Redwoods | UC Santa Cruz"
              >
              <img
                :src="alumniLogo"
                width="190"
                height="109"
                alt="UC Santa Cruz | Alumni"
                title="UC Santa Cruz | Alumni"
              >
            </RouterLink>
          </div>

          <nav
            class="footer-nav col col-6 mobile-full"
            aria-label="Footer"
          >
            <ul
              class="menu"
              id="menu-footer"
            >
              <li><RouterLink href="/schedule.php">Schedule</RouterLink></li>
              <li><RouterLink href="/#housing">Housing</RouterLink></li>
              <li><RouterLink href="/#faqs">Faqs</RouterLink></li>
              <li><RouterLink
                  href="#"
                  data-type="popup"
                  data-id="contact"
                >Contact</RouterLink></li>
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
            <p>&copy; 2025 Regents of the University of California. All Rights Reserved. </p>
          </div>
          <div class="tos col col-4 mobile-full">
            <a
              href="https://its.ucsc.edu/terms/"
              target="_blank"
              ref="noreferrer noopener"
            >Privacy Policy & Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
