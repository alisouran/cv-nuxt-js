<template>
  <Home />
</template>

<script lang="ts">
import Vue from "vue";
import Home from "@/components/home/index.vue";

export default Vue.extend({
  components: { Home },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - Alireza Souran'
  }
});
</script>
