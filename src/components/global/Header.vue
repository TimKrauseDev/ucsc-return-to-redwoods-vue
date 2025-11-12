<script setup>
import r2rLogo from '@/assets/img/logo.png';
import alumniLogo from '@/assets/img/img-alumni_logo_horizontal_white.png';
import { RouterLink } from 'vue-router';
</script>

<template>
  <header id="header">

    <RouterLink
      href="#main"
      class="skip-link"
    >Skip to main content</RouterLink>

    <div class="container">
      <div class="row">

        <div class="site-branding col col-4 mobile-col-3-4">
          <RouterLink
            class="site-logo"
            to="/"
          ><img
              :src="r2rLogo"
              width="231"
              height="126"
              alt="Return to the edwoods | UC Santa Cruz"
              title="Return to the Redwoods | UC Santa Cruz"
            ></RouterLink>
        </div><!-- .site-branding -->

        <button
          id="menu-btn"
          aria-hidden="true"
          aria-expanded="false"
          aria-controls="navigation-wrapper"
        ><span></span> <span class="text">Menu Button</span></button>

        <div
          id="navigation-wrapper"
          class="col push-4 col-8 mobile-full"
        >

          <div
            id="main-menu-wrapper"
            class="clear"
          >
            <nav
              id="main-menu"
              class="main-menu"
              aria-label="Main"
            >
              <ul
                class="menu"
                id="menu-header-primary"
              >
                <li><RouterLink to="/schedule">Schedule</RouterLink></li>
                <li><RouterLink to="/#housing">Housing</RouterLink></li>
                <li><RouterLink to="/#faqs">Faqs</RouterLink></li>
                <li><RouterLink
                    to="#"
                    data-type="popup"
                    data-id="contact"
                  >Contact</RouterLink></li>
                <li class="alumni"><a
                    class="alumni-logo"
                    to="https://alumni.ucsc.edu/"
                    target="_blank"
                    ref="noreferrer noopener"
                  ><img
                      :src="alumniLogo"
                      width="200"
                      height="126"
                      alt="UC Santa Cruz | Alumni"
                      title="UC Santa Cruz | Alumni"
                    ></a></li>
              </ul>
            </nav><!--main-menu-->
          </div><!-- main-menu-wrapper-->

        </div><!--navigation-wrapper-->

      </div><!-- .clear-->
    </div><!-- .container-->

  </header><!--End Header-->
</template>
