<script setup>
import imgCheckin from '@/assets/img/img-checkin.jpg';
</script>

<template>
  <section
    id="events-section"
    class="section events-section"
  >
    <div class="tabs-block">

      <!--Tab titles-->
      <div
        class="tab-titles"
        role="tablist"
      >
        <button
          id="thursday"
          aria-controls="thursday-content"
          aria-expanded="true"
          class="tab-title active"
          data-id="thursday-content"
          role="tab"
        >Thursday</button>
        <button
          id="friday"
          aria-controls="friday-content"
          aria-expanded="false"
          class="tab-title"
          data-id="friday-content"
          role="tab"
        >Friday</button>
        <button
          id="saturday"
          aria-controls="saturday-content"
          aria-expanded="false"
          class="tab-title"
          data-id="saturday-content"
          role="tab"
        >Saturday</button>
        <button
          id="sunday"
          aria-controls="sunday-content"
          aria-expanded="false"
          class="tab-title"
          data-id="sunday-content"
          role="tab"
        >Sunday</button>
      </div><!--End Tab Titles-->

      <!--Tab Content-->
      <div
        class="tab-content-wrapper"
        id="event-tabs"
      >
        <div class="topography-overlay"></div>

        <!--Thursday Tab Content-->
        <div class="tab-block">
          <div
            class="tab-content"
            id="thursday-content"
            role="tabpanel"
          >
            <div class="container">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>3:00 p.m. - 6:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Check-In station at Slug Central"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Early Bird Check-In & Welcome at Slug Central</strong>
                      <br />
                      <em>Founders Glen (Cowell Circle)</em>
                    </p>
                    <p>We can't wait to see you back on campus!</p>
                    <p>
                      First things first, you gotta check in and grab your keys! Stop by the Founders Glen (that lawn right near the entrance of the
                      Cowell Circle) and get everything you need to start off the weekend. You'll check in at the main table, grab your name tag and a
                      program, and then go over to the Conference Services table to get parking permits and everything you need for on-campus housing.
                    </p>
                    <p>
                      Don't worry, we'll have some 20 minute parking so that you can check in and unload all of your stuff before parking your car.
                    </p>
                    <p><em>Please note that Early Bird Check-In is only available for registrants who purchased Thursday night housing on-campus.</em>
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>6:00 p.m. - 8:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Woodstock pizza and beer on a table"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Earlybird Welcome at Woodstock's</strong>
                      <br />
                      <em>Woodstock's Pizza</em>
                    </p>
                    <p>Heading into town on Thursday? After you settle into your housing, join us downtown at Woodstock's Pizza!</p>
                    <p><em>Alumni will receive 15% off (available all weekend long), and get to start off the weekend with a college staple: pizza and
                        beer!</em></p>
                  </div>
                </div>
              </article><!--End Event Item-->


            </div>
          </div>
        </div><!--End Thursday Tab Content-->

        <!--Friday Tab Content-->
        <div class="tab-block">
          <div
            class="tab-content hide"
            id="friday-content"
            role="tabpanel"
          >
            <div class="container">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>11:00 a.m. - 6:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Check-In station at Slug Central"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Check-In & Welcome at Slug Central</strong>
                      <br />
                      <em>Founders Glen (Cowell Circle)</em>
                    </p>
                    <p>We can't wait to see you back on campus!</p>
                    <p>
                      First things first, you gotta check in and grab your keys! Stop by the Founders Glen (that lawn right near the entrance of the
                      Cowell Circle) and get everything you need to start off the weekend. You'll check in at the main table, grab your name tag and a
                      program, and then go over to the Conference Services table to get parking permits and everything you need for on-campus housing.
                    </p>
                    <p>
                      Don't worry, we'll have some 20 minute parking so that you can check in and unload all of your stuff before parking your car.
                      Showing up after 6? No problem! Staff will be available to check people in as late as 8 p.m.
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>6:00 p.m. - 8:30 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="String band playing in courtyard"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Back to the Woods: A Welcome Back to UC Santa Cruz</strong>
                      <br />
                      <em>Cowell Courtyard</em>
                    </p>
                    <p>
                      Join your fellow Banana Slugs for the kickoff event of the weekend. Enjoy one of the most magical views on campus as you sip
                      some local beverages and enjoy heavy hors d'oeuvres. Sit back and relax, you're home!
                    </p>
                    <p>
                      <strong>Cost:</strong> Cash Bar
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>8:30 p.m. - 11:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Group of people making smores at campfire"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Stars & S'mores</strong>
                      <br />
                      <em>East Field</em>
                    </p>
                    <p>
                      All are welcome to spend our first night under the stars. Gaze up into the Santa Cruz night sky and reflect on the magic of this
                      special place. Enjoy some campfire treats and learn from UCSC's finest about the wonders of our solar system.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>

                  </div>
                </div>
              </article><!--End Event Item-->

            </div>
          </div>
        </div><!--End Friday Tab Content-->

        <!--Saturday Tab Content-->
        <div class="tab-block">
          <div
            class="tab-content hide"
            id="saturday-content"
            role="tabpanel"
          >
            <div class="container">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>7:00 a.m. - 8:00 a.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Sunrise Yoga</strong>
                      <br />
                      <em>East Field</em>
                    </p>
                    <p>
                      Start your day with a little serenity and exercise out on the east field. Yoga mats and water station provided.
                    </p>
                    <p>
                      <strong>Cost:</strong> $5/person
                      <br><em>Advanced registration required, space is limited</em>
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>8:00 a.m. - 4:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Check-In station at Slug Central"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Check-In & Welcome at Slug Central</strong>
                      <br />
                      <em>Founders Glen (Outside Cowell)</em>
                    </p>
                    <p>
                      Stop by the Founders Glen (that lawn right near the entrance of the Cowell Circle) and get everything you need to start off the
                      weekend. You'll check in at the main table, grab your name tag and a program, and then go over to Conference Services to get
                      parking permits and everything you need for on-campus housing.
                    </p>
                    <p>
                      Don't worry, we'll have some 20 minute parking so that you can check in and unload all of your stuff before parking your car.
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>8:00 a.m. - 10:00 a.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="A group of students walking together on an outdoor path"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Continental Breakfast</strong>
                      <br />
                      <em>Cowell Courtyard</em>
                    </p>
                    <p>
                      Enjoy a light breakfast while taking in the breathtaking view of Monterey Bay.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <h3 class="mb-0">Morning Activities Block</h3>
              <p class="mt-0 header-font"><em>10:00 a.m. - 12:00 p.m.</em></p>
              <hr class="hr-event">


              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>10:00 a.m. - 12:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Forest Talk: Puppets and Performing Objects: Animism, Indigeneity, and the Anthropocene Puppets with Professor Kathy
                        Foley</strong>
                      <br />
                      <em>Stevenson 150</em>
                    </p>
                    <p>
                      "New Materialism", "Thing Theory", and "Ecocriticism" are affecting current Western performance and lead to productions that
                      often focus on animals and things qua subject, allowing puppetry and performing objects larger focus and providing contrast to
                      the human centric locus of more traditional American theatrical realism. While on Broadway the figures may be anthropomorphized
                      animals (as in <em>War Horse</em>, <em>Lion King</em>, <em>Life of Pi</em>) a growing attention to the animal and material world
                      as vibrant and having rights is being quickly embraced in the thing-centric art of puppetry in the U.S. and Europe. As climate
                      change accelerates, younger artists embrace themes of the "Anthropocene" and "Post-human" and turn to puppetry as a medium
                      arguing for a "New Animism" that can respond to climate change can help audiences rethink healthy human relations to animals,
                      the environment and the material world.
                    </p>
                    <p>
                      For contrast we will introduce ideas of how masks and puppetry traditionally played prime role in indigenous, Saivite, Buddhist,
                      and Sufistic theaters of Southeast Asia to communicate conceptions of a world where the human, while important, is de-centered.
                      Traditional performers, often solo puppeteers have used masks and puppets to get beyond a locus on humanized subjects,
                      incorporating important figures like the tree of life, living/volcanic mountain, and oceans into their praxis. Goddesses and
                      Gods clash in masked forms like <em>Calonarang</em> in Bali to tell of how the divine materializes to create/destroy our world.
                      In tales humans morph to/from objects in ways that are rarely found in Judeo-Christian cultures. If the puppeteer decenters ego
                      to collaborate with the material world qua puppet in creating story, does working with the materials world as "living" impact
                      artistically, philosophically, and politically to tell stories that allow greater agency to the non-human, the past and the
                      present?
                    </p>
                    <p>
                      Some refections on past UCSC mask productions from the <em>Pancatantra</em> (Indian Animal Tales), to the <em>Buddhist
                        Jataka</em>, to an American Bread and Puppet Circus style offering will be cited as some examples.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>10:00 a.m. - 12:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Woman organizing bouquet of flowers"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Campus Farm Tour & Flower Arrangement Workshop</strong> <span class="sold-out">SOLD OUT!</span>
                      <br />
                      <em>Campus Farm</em>
                    </p>
                    <p>
                      Drop by the farm to check out all of the incredible work the <a
                        href="https://agroecology.ucsc.edu/about/index.html"
                        target="_blank"
                        ref="noreferrer noopener"
                      >Center for Agroecology</a> is doing to impact student food security and change the way we look at agricultural education.
                      Following a guided tour, guests will have the opportunity to build their own flower arrangement using farm grown florals.
                    </p>
                    <p>
                      <strong>Cost:</strong> $25/person
                      <br><em>Advanced registration required, space is limited</em>
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>10:00 a.m. - 12:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Group on guided hike"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Guided Campus Hike</strong> <span class="sold-out">SOLD OUT!</span>
                      <br />
                      <em>Meet at Slug Central</em>
                    </p>
                    <p>
                      Join our outdoor education team for a guided hike through campus and down to the arboretum. Learn about the local flora and
                      fauna while taking in the fresh mountain air.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>10:00 a.m. - 12:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Guided Pogonip Hike</strong> <span class="sold-out">SOLD OUT!</span>
                      <br />
                      <em>Meet at Slug Central</em>
                    </p>
                    <p>
                      Join our outdoor education team for a guided hike through campus and through the <a
                        href="https://www.cityofsantacruz.com/government/city-departments/parks-recreation/parks-beaches-open-spaces/open-spaces/pogonip"
                        target="_blank"
                        ref="noreferrer noopener"
                      >Pogonip Open Space</a>. Learn about the local flora and fauna while taking in the fresh mountain air.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>10:00 a.m. - 12:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Sailing Excursion</strong> <span class="sold-out">SOLD OUT!</span>
                      <br />
                      <em>Meet at Santa Cruz Harbor</em>
                    </p>
                    <p>
                      Take a short break from the beauty of the redwoods, and head out for a sailing excursion on the Monterey Bay. Capacity is
                      extremely limited for this experience, so book quickly to secure your spot!
                    </p>
                    <p>
                      <strong>Cost:</strong> $100/person
                      <br><em>Advanced registration required, space is limited</em>
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <hr class="hr-event hr-event-end">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>12:00 p.m. - 2:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Lunch On Your Own</strong>
                    </p>
                    <p>
                      Head out to your favorite spot in Santa Cruz to grab lunch or purchase lunch at the dining hall for a more nostalgic experience.
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <h3 class="mb-0">Afternoon Activities Block</h3>
              <p class="mt-0 header-font"><em>2:00 p.m. - 4:00 p.m.</em></p>
              <hr class="hr-event">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>2:00 p.m. - 4:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Forest Talk: Forecasting the Future of a Changing Ocean with Professor Raphe Kudela</strong>
                      <br />
                      <em>Stevenson 150</em>
                    </p>
                    <p>
                      A weekend back in college wouldn’t be complete without a lecture… but don’t worry, there’s no homework or exam for this class!
                      Join us for a lecture from one of UCSC’s world renowned faculty.
                    </p>
                    <p>
                      Professor Kudela will address how California’s coastal ecosystems, from marine fisheries impacted by harmful algal blooms to
                      California’s iconic kelp forests, may change in the future.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>2:00 p.m. - 4:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Guided Pogonip Hike</strong> <span class="sold-out">SOLD OUT!</span>
                      <br />
                      <em>Meet at Slug Central</em>
                    </p>
                    <p>
                      Join our outdoor education team for a guided hike through campus and through the <a
                        href="https://www.cityofsantacruz.com/government/city-departments/parks-recreation/parks-beaches-open-spaces/open-spaces/pogonip"
                        target="_blank"
                        ref="noreferrer noopener"
                      >Pogonip Open Space</a>. Learn about the local flora and fauna while taking in the fresh mountain air.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>2:00 p.m. - 4:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Sailing Excursion</strong> <span class="sold-out">SOLD OUT!</span>
                      <br />
                      <em>Meet at Santa Cruz Harbor</em>
                    </p>
                    <p>
                      Take a short break from the beauty of the redwoods, and head out for a sailing excursion on the Monterey Bay. Capacity is
                      extremely limited for this experience, so book quickly to secure your spot!
                    </p>
                    <p>
                      <strong>Cost:</strong> $100/person
                      <br><em>Advanced registration required, space is limited</em>
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <h3 class="mb-0">Identity Gatherings</h3>
              <p class="mt-0 header-font"><em>4:00 p.m. - 6:00 p.m.</em></p>
              <hr class="hr-event">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>4:00 p.m. - 6:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Latino Alumni Network (LAN) Meetup</strong>
                      <br />
                      <em>Cowell Fireside Lounge</em>
                    </p>
                    <p>
                      Join us for an exciting LAN Meetup as we celebrate the revamped UCSC Latino Alumni Network! This event is a fantastic
                      opportunity to connect with fellow Latino alumni, engage in inspiring discussions, and be part of the thriving LAN community.
                      Don't miss out on the fun!
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>4:00 p.m. - 6:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>African American Resource & Cultural Center (AARCC) Hospitality Room</strong>
                      <br />
                      <em>Cowell Library</em>
                    </p>
                    <p>
                      Pop by the AARCC hospitality space in the residences and meet the Center staff. Connect with fellow African, Black & Caribbean
                      identified alumni who are on campus. This casual space is open to any and will be hosted in the AARCC Apartment.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>4:00 p.m. - 6:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Asian American & Pacific Islander (AA/PI) Network Reception</strong>
                      <br />
                      <em>Stevenson Fireside Lounge</em>
                    </p>
                    <p>
                      We are delighted to extend a warm invitation to join fellow Asian American/Pacific Islander alumni on campus. This event
                      provides an excellent opportunity for you to reconnect with fellow alumni, make new connections, and reminisce about your time
                      at UC Santa Cruz. Whether you graduated recently or several years ago, your presence and unique experiences will enrich our
                      network and inspire our community.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <hr class="hr-event hr-event-end">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>6:00 p.m. - 7:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Dinner On Your Own</strong>
                    </p>
                    <p>
                      Head into town to grab a bite with friends, stop by the dining hall, or try out one of the food trucks that will be on campus.
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>7:00 p.m. - 8:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Sunset Yoga</strong>
                      <br />
                      <em>East Field</em>
                    </p>
                    <p>
                      Close out your day with a little serenity and yoga exercise on the east field. Yoga mats and water station provided.
                    </p>
                    <p>
                      <strong>Cost:</strong> $5/person
                      <br><em>Advanced registration required, space is limited</em>
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>7:00 p.m. - 8:30 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="UCSC mascot taking photo with group of people"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Gather in the Grove</strong>
                      <br />
                      <em>Quarry Amphitheater</em>
                    </p>
                    <p>
                      Join us in the Quarry Plaza for a family-friendly evening of music, food, games, and more!
                    </p>
                    <p>
                      <strong>Cost:</strong> Cash Bar
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>8:30 p.m. - 10:30 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="Quarry Ampitheater showing movie at night"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>
                        Redwood Reels: A Movie in the Quarry Amphitheatre
                        <br />
                        Showing: The Lost Boys
                      </strong>
                      <br />
                      <em>Quarry Amphitheater</em>
                    </p>
                    <p>
                      Gather with your friends into the Quarry Amphitheater for an evening movie! Enjoy popcorn and other treats while we watch a
                      Santa Cruz classic: <em>The Lost Boys</em>.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

            </div>
          </div>
        </div><!--End Saturday Tab Content-->

        <!--Sunday Tab Content-->
        <div class="tab-block">
          <div
            class="tab-content hide"
            id="sunday-content"
            role="tabpanel"
          >
            <div class="container">

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>8:00 a.m. - 10:00 a.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-image-wrapper">
                    <img
                      :src="imgCheckin"
                      alt="A nicely decorated box a dozen donuts"
                    />
                  </div>
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Continental Breakfast</strong>
                      <br />
                      <em>Cowell Courtyard</em>
                    </p>
                    <p>
                      Enjoy a light breakfast while taking in the view of Monterey Bay.
                    </p>
                    <p>
                      <strong>Cost:</strong> Included with Registration Fee
                    </p>
                  </div>
                </div>
              </article><!--End Event Item-->

              <!--Event Item-->
              <article class="event-wrapper">
                <div class="event-time-wrapper">
                  <div class="event-time">
                    <em>9:00 a.m. - 1:00 p.m.</em>
                  </div>
                  <div class="event-vertical-line"></div>
                </div>
                <div class="card card-vertical-lg">
                  <div class="card-content-wrapper">
                    <p class="card-title">
                      <strong>Check Out & Key Return</strong>
                      <br />
                      <em>Slug Central</em>
                    </p>
                    <p>
                      Double check under your bed, and make sure you've got everything! Head to the Conference Services table at Slug Central to
                      return your key before heading out. We can't wait to see you again next year!
                    </p>
                  </div>
                  </div>
              </article><!--End Event Item-->

            </div>
          </div>
        </div><!--End Sunday Tab Content-->

      </div><!--End Tab Content-->
    </div><!--End Tabs Block-->
  </section>
</template>
