<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

const accordionItems = [
  {
    title: 'Event Registration Fee',
    content: '<p>Event Registration Fee: $25/adult and $0/child (17 and under) <br /><em>One registration fee will be waived for each on-campus housing purchase</em> </p> <p class="h5">What\'s Included:</p> <ul> <li>Custom Giveaways</li> <li>Light Breakfast on Saturday and Sunday</li> <li>Many Exciting Activities at No Additional Cost</li> </ul>'
  },
  {
    title: 'Paid Adventure Activities & Workshops',
    content: '<p>Some activities are available at an additional cost. Paid activities include sunrise/sunset yoga, sailing, and more to come!</p>'
  },
  {
    title: 'Housing',
    content: `<p class="h5">On Campus</p> <ul> <li>Full Apartment (Sleeps 6) - $415/night</li> <li> Traditional Residence Hall Rooms <ul> <li>Single Room (One Bed) - $75/night</li> <li>Double Room (Two Beds) - $145/night</li> <li>Triple Room (Three Beds) - $200/night</li> <li>Quad Room (Four Beds) - $250/night</li> </ul> </li> </ul> <p class="h5">Off Campus</p> <p>Check out one of the many <a href="https://www.santacruz.org/places-to-stay/" target="_blank" ref="noreferrer noopener" >local hotels</a> in Santa Cruz.</p>`
  }
]

</script>

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


          <Accordion
            expandIcon="pi pi-plus"
            collapseIcon="pi pi-minus"
          >
            <AccordionPanel
              class="accordion-block"
              v-for="(accordionItem, index) in accordionItems"
              :key="index"
              :value="index"
            >
              <AccordionHeader class="accordion-button">{{ accordionItem.title }}</AccordionHeader>
              <AccordionContent
                class="accordion-content"
                v-html="accordionItem.content"
              ></AccordionContent>
            </AccordionPanel>
          </Accordion>

        </div>

      </div>
    </div>

  </section>
</template>
