<script setup>
import Card from "@/components/blocks/Card.vue";
</script>

<template>
  <section
    id="housing"
    class="section housing-section"
    aria-labelledby="housing-title"
  >
    <div class="topography-overlay"></div>
    <div class="treeline-overlay"></div>
    <div class="container">
      <h2 id="housing-title" class="housing-title">Housing Options</h2>
      <p class="lead">
        Alumni and their guests are invited to stay on campus overnight or find
        local accommodations. While we have the most beautiful campus in
        America, be advised that dorm living is basic with limited amenities.
        But, who needs amenities when you have that view?
      </p>

      <!--Row Of Cards-->
      <div class="row card-row">
        <!--Single Card Column-->
        <div class="col col-4 mobile-full">
          <Card
            heading="Premium On-Campus Housing: Full Apartment (Sleeps 6) - $415/night"
            imgSrc="/images/home/img-premium_housing.jpg"
            imgAlt="Large white apartment building with red and white trees"
            vertical
            small
          >
            <template #content>
              <p>
                Bring your whole family or friend group with these four-room
                apartments in Cowell or Stevenson. Apartments include shared
                common areas including living and dining rooms, a kitchen, and a
                bathroom. Four linen packages are provided with the purchase of
                a full apartment.
              </p>
              <p><strong>On-Campus Housing is now closed.</strong></p>
            </template>
          </Card>
        </div>
        <!--End Single Card Column-->

        <!--Single Card Column-->
        <div class="col col-4 mobile-full">
          <Card
            heading="Standard On-Campus Housing: Traditional Dorm (Sleeps 1-4)"
            imgSrc="/images/home/img-standard_housing.jpg"
            imgAlt="Looking out a window towards a white apartment building, grassy area and ocean in background"
            vertical
            small
          >
            <template #content>
              <p>
                Rent one (or more) double rooms in a traditional dorm in
                Stevenson!
              </p>
              <table class="card-table">
                <tbody>
                  <tr>
                    <td>Single Room<br />(One Bed)</td>
                    <td class="text-right">$75/night</td>
                  </tr>
                  <tr>
                    <td>Double Room<br />(Two Beds)</td>
                    <td class="text-right">$145/night</td>
                  </tr>
                  <tr>
                    <td>Triple Room<br />(Three Beds)</td>
                    <td class="text-right">$200/night</td>
                  </tr>
                  <tr>
                    <td>Quad Room<br />(Four Beds)</td>
                    <td class="text-right">$250/night</td>
                  </tr>
                </tbody>
              </table>
              <p><strong>On-Campus Housing is now closed.</strong></p>
            </template>
          </Card>
          <!--End Card-->
        </div>
        <!--End Single Card Column-->

        <!--Single Card Column-->
        <div class="col col-4 mobile-full">
          <!--Card (Vertical and Small)-->

          <Card
            heading="Local Off-Campus Accommodations"
            imgSrc="/images/home/img-off_campus_housing.jpg"
            imgAlt="High-altitude photo of a theme park and the surrounding city and landscape"
            href="https://www.santacruz.org/places-to-stay/"
            buttonTitle="View Options"
            external
            vertical
            small
          >
            <template #content>
              <p>
                Seeking a more luxurious overnight stay? Check out some of the
                many local off-campus accommodations including hotels and
                short-term rental properties.
              </p>
            </template>
          </Card>
        </div>
        <!--End Single Card Column-->
      </div>
      <!--End Row of Cards-->
    </div>
  </section>
</template>
