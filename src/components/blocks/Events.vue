<script setup>
import { ref } from "vue";

import EventsFriday from "@/components/schedule/EventsFriday.vue";
import EventsThursday from "@/components/schedule/EventsThursday.vue";
import EventsSaturday from "@/components/schedule/EventsSaturday.vue";
import EventsSunday from "@/components/schedule/EventsSunday.vue";

const activeTab = ref("thursday");

const tabs = [
  {
    name: "thursday",
    view: EventsThursday,
  },
  {
    name: "friday",
    view: EventsFriday,
  },
  {
    name: "saturday",
    view: EventsSaturday,
  },
  {
    name: "sunday",
    view: EventsSunday,
  },
];
</script>

<template>
  <section id="events-section" class="section events-section">
    <div class="tabs-block">
      <!--Tab titles-->
      <div class="tab-titles" role="tablist">
        <button
          v-for="{ name } in tabs"
          :key="name"
          id="tab"
          class="tab-title"
          :class="activeTab === name ? 'active' : ''"
          :data-id="`${name}-content`"
          role="tab"
          :aria-expanded="activeTab === name"
          @click="activeTab = name"
        >
          {{ name }}
        </button>
      </div>
      <!--End Tab Titles-->

      <!--Tab Content-->
      <div class="tab-content-wrapper" id="event-tabs">
        <div class="topography-overlay"></div>

        <div v-for="{ name, view } in tabs" :key="name">
          <div v-if="activeTab === name" class="tab-block">
            <div class="tab-content" :id="`${name}-content`" role="tabpanel">
              <div class="container">
                <component :is="view" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Tab Content-->
    </div>
    <!--End Tabs Block-->
  </section>
</template>
