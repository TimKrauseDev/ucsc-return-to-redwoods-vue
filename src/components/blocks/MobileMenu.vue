<script setup>
import { Drawer } from "primevue";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

const activeMobileMenu = ref(false);

const closeMenu = () => {
  activeMobileMenu.value = false;
};

const handleResize = () => {
  if (window.innerWidth > 774) activeMobileMenu.value = false;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <button
    id="menu-btn"
    aria-hidden="true"
    aria-expanded="false"
    aria-controls="navigation-wrapper"
    @click="activeMobileMenu = true"
  >
    <span></span> <span class="text">Menu Button</span>
  </button>
  <nav>
    <Drawer :visible="activeMobileMenu" header="Menu" position="right">
      <ul>
        <li>
          <RouterLink to="/schedule" @click="closeMenu">Schedule</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ path: '/', hash: '#housing' }" @click="closeMenu"
            >Housing</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ path: '/', hash: '#faqs' }" @click="closeMenu"
            >Faqs</RouterLink
          >
        </li>
      </ul>
    </Drawer>
  </nav>
</template>

<style>
.p-drawer {
  --p-drawer-background: #003c6c;
  --p-drawer-color: #fff;

  ul {
    list-style: none;
    margin-left: 0;
  }

  li {
    padding: 0.75rem 0 !important;
  }

  a {
    color: #fff !important;
    text-decoration: none;
  }
}
</style>
