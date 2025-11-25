<script setup>
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";

const accordionItems = [
  {
    title: "Who is invited to Return to the Redwoods?",
    content:
      " <p> All UC Santa Cruz alumni and their families, children, friends, and more are encouraged to enjoy this new tradition that is anticipated to become the largest alumni gathering of the year. Whether you just graduated or are celebrating a milestone reunion, bring a whole group for a weekend on the hill! </p> ",
  },
  {
    title: "Does Return to the Redwoods replace Alumni Weekend?",
    content:
      " <p> Alumni Weekend has evolved into two separate events - Alumni Reunion Weekend (April 13-15, 2023) and Return to the Redwoods (August 18-20, 2023). Return to the Redwoods encourages alumni from all decades to stay on campus for a residential experience, Alumni Reunion Weekend focuses on celebrating the classes who graduated 50+ years ago. You can learn more and register for Alumni Reunion Weekend <a href='https://alumniweekend.ucsc.edu/' target='_blank' ref='noreferrer noopener' >here</a >. </p>",
  },
  {
    title:
      "Is this event family-friendly? Can I bring any non-alumni friends? What about pets?",
    content:
      '<p> All alumni, family, and friends are welcome to join in the fun! Domestic animals that are not service animals as defined by the <a href="https://www.ada.gov/resources/service-animals-2010-requirements/" target="_blank" ref="noreferrer noopener" >Americans with Disabilities Act</a > are prohibited on all UC Santa Cruz property unless specifically exempted by the <a href="https://policy.ucsc.edu/policies/BAS/BAS-002.html" target="_blank" ref="noreferrer noopener" >UC Santa Cruz Non-Research Animal Policy</a >. Please see the policy for guidelines and regulations for exempted animals. <a href="https://policy.ucsc.edu/policies/student-affairs/dss-0003.html" target="_blank" ref="noreferrer noopener" >Service Animals</a > are always permitted. </p>',
  },
  {
    title: "What overnight accommodations are available?",
    content:
      '<p> On-campus housing will be available for purchase in the Cowell/Stevenson apartments and the Stevenson traditional dorms. Housing is designed to accommodate groups of 1-6 individuals. Off-campus housing options include local hotels and short-term rental properties, like those found <a href="https://www.santacruz.org/places-to-stay/" target="_blank" ref="noreferrer noopener" >here</a >. </p>',
  },
  {
    title: "Will I be able to stay with my friends?",
    content:
      " <p> On-campus housing will be sold on a unit-by-unit basis, so yes! If you purchase a unit for your group, you decide how many beds you will have and who stays in your unit. </p>",
  },
  {
    title:
      "Will I be able to make a special request to stay in a specific room?",
    content:
      "<p> Due to competitive demand, we are unable to guarantee that any special requests will be accommodated for this event. </p>",
  },
  {
    title: "Are ADA accessible rooms available on campus?",
    content:
      '<p> Yes! If you have any questions about accessibility, please reach out to us at <a href="mailto:alumni@ucsc.edu">alumni@ucsc.edu</a>. </p>',
  },
  {
    title: "Do I have to participate in the scheduled activities?",
    content:
      "<p> While we have an exciting itinerary to offer, you are welcome to choose your own adventure for the weekend. Feel free to participate as little or as much as you would like in the organized activities. </p>",
  },
  {
    title:
      "Do I have to stay on campus in order to participate in the scheduled activities?",
    content:
      " <p> No! If you are local or prefer to stay in local off-campus accommodations, you are still welcome to register and participate in Return to the Redwoods. General registration for RtR is $25 per guest - which includes parking, giveaways, and some campus activities. </p>",
  },
  {
    title: "What does the $25 registration fee include?",
    content:
      "<p> General registration for Return to the Redwoods is $25 per guest - which includes continental breakfast (Saturday and Sunday), exclusive merchandise giveaways, and a variety of activities and experiences throughout the weekend. One registration fee will be waived for each on-campus housing purchase. </p>",
  },
  {
    title: "Are there any COVID-19 protocols in place for visitors?",
    content:
      '<p> Please visit the <a href="https://healthcenter.ucsc.edu/services/covid-19/" target="_blank" ref="noreferrer noopener" >UCSC Covid-19 page</a > to learn about all campus safety protocols. </p>',
  },
  {
    title: "Are walk-ups accommodated?",
    content:
      "<p> We strongly encourage participants to register in advance. There is no guarantee that walk-in registrations will be accepted. </p>",
  },
];
</script>

<template>
  <section id="faqs" class="section faq-section" aria-labelledby="faq-title">
    <div class="container">
      <div class="row">
        <div class="col col-3 mobile-full">
          <h2 id="faq-title" class="section-title">FAQs</h2>
        </div>

        <div class="col col-9 mobile-full">
          <Accordion expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionPanel
              class="accordion-block"
              v-for="(accordionItem, index) in accordionItems"
              :key="index"
              :value="index"
            >
              <AccordionHeader class="accordion-button">{{
                accordionItem.title
              }}</AccordionHeader>
              <AccordionContent
                class="accordion-content"
                v-html="accordionItem.content"
              ></AccordionContent>
            </AccordionPanel>
          </Accordion>

          <div style="height: 15px" aria-hidden="true"></div>

          <p>
            <a
              class="button button-outline"
              href="http://alumni.ucsc.edu/events/rtr-faq"
              target="_blank"
              ref="noreferrer noopener"
              >View Full List of FAQs<i
                class="pi pi-chevron-right"
                style="margin-left: 0.5rem"
              ></i
            ></a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
