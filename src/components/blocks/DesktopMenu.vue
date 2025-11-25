<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="navigation-wrapper" class="col push-4 col-8 mobile-full">
    <div id="main-menu-wrapper" class="clear">
      <nav id="main-menu" class="main-menu" aria-label="Main">
        <ul class="menu" id="menu-header-primary">
          <li>
            <RouterLink to="/schedule">Schedule</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ path: '/', hash: '#housing' }"
              >Housing</RouterLink
            >
          </li>
          <li><RouterLink to="/#faqs">Faqs</RouterLink></li>
          <li class="alumni">
            <a
              class="alumni-logo"
              to="https://alumni.ucsc.edu/"
              target="_blank"
              ref="noreferrer noopener"
              ><img
                src="/images/img-alumni_logo_horizontal_white.png"
                width="200"
                height="126"
                alt="UC Santa Cruz | Alumni"
                title="UC Santa Cruz | Alumni"
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
