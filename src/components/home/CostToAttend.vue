<script setup></script>

<template>
  <section
    id="cost-to-attend"
    class="section cost-to-attend-section"
    aria-labelledby="cost-to-attend-title"
  >
    <div class="container">
      <div class="row">

        <div class="col col-3 mobile-full">
          <h2
            id="cost-to-attend-title"
            class="section-title"
          >Cost to Attend</h2>
        </div>

        <div class="col col-9 mobile-full">

          <!--Accordion Block-->
          <div
            class="accordion-block"
            id="event-registration-fee"
          >

            <!--Accordion Title-->
            <button
              aria-controls="event-registration-fee-content"
              aria-expanded="false"
              class="accordion-button"
              id="event-registration-fee-button"
              type="button"
            >
              <span class="accordion-title">Event Registration Fee</span>
              <span class="accordion-icon"></span>
            </button><!--End Accordion Title-->

            <!--Accordion Content-->
            <div
              aria-labelledby="event-registration-fee-button"
              class="accordion-content"
              id="event-registration-fee-content"
              role="region"
            >
              <p>Event Registration Fee: $25/adult and $0/child (17 and under)
                <br /><em>One registration fee will be waived for each on-campus housing purchase</em>
              </p>
              <h3 class="h5">What’s Included:</h3>
              <ul>
                <li>Custom Giveaways</li>
                <li>Light Breakfast on Saturday and Sunday</li>
                <li>Many Exciting Activities at No Additional Cost</li>
              </ul>
            </div><!--End Accordion Content-->

          </div><!--End Accordion Block-->

          <!--Accordion Block-->
          <div
            class="accordion-block"
            id="paid-adventure-activities-workshop"
          >

            <!--Accordion Title-->
            <button
              aria-controls="paid-adventure-activities-workshop-content"
              aria-expanded="false"
              class="accordion-button"
              id="paid-adventure-activities-workshop-button"
              type="button"
            >
              <span class="accordion-title">Paid Adventure Activities & Workshops</span>
              <span class="accordion-icon"></span>
            </button><!--End Accordion Title-->

            <!--Accordion Content-->
            <div
              aria-labelledby="paid-adventure-activities-workshop-button"
              class="accordion-content"
              id="paid-adventure-activities-workshop-content"
              role="region"
            >
              <p>Some activities are available at an additional cost. Paid activities include sunrise/sunset yoga, sailing, and more to come!</p>
            </div><!--End Accordion Content-->

          </div><!--End Accordion Block-->

          <!--Accordion Block-->
          <div
            class="accordion-block"
            id="housing-costs"
          >

            <!--Accordion Title-->
            <button
              aria-controls="housing-costs-content"
              aria-expanded="false"
              class="accordion-button"
              id="housing-costs-button"
              type="button"
            >
              <span class="accordion-title">Housing</span>
              <span class="accordion-icon"></span>
            </button><!--End Accordion Title-->

            <!--Accordion Content-->
            <div
              aria-labelledby="housing-costs-button"
              class="accordion-content"
              id="housing-costs-content"
              role="region"
            >
              <h3 class="h5">On Campus</h3>
              <ul>
                <li>Full Apartment (Sleeps 6) - $415/night</li>
                <li>
                  Traditional Residence Hall Rooms
                  <ul>
                    <li>Single Room (One Bed) - $75/night</li>
                    <li>Double Room (Two Beds) - $145/night</li>
                    <li>Triple Room (Three Beds) - $200/night</li>
                    <li>Quad Room (Four Beds) - $250/night</li>
                  </ul>
                </li>
              </ul>
              <h3 class="h5">Off Campus</h3>
              <p>Check out one of the many <a
                  href="https://www.santacruz.org/places-to-stay/"
                  target="_blank"
                  ref="noreferrer noopener"
                >local hotels</a> in Santa Cruz.</p>

            </div><!--End Accordion Content-->

          </div><!--End Accordion Block-->

        </div>

      </div>
    </div>

  </section>
</template>
