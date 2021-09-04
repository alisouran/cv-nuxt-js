<template>
  <div>
    <Navbar />
    <div
      class="container-md main-container"
      :class="mobile ? 'pr-8 pl-8 mt-24' : tablet ? 'pr-16 pl-16 mt-24' : ''"
    >
      <div class="row main-row">
        <div
          class="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3 route-veiw-container"
        >
          <Title :title="title" :subtitle="subtitle" :className="className" />
        </div>
        <ProfilePicture />
        <div
          class="route-veiw-container col-sm-12 col-xs-12 col-xl-9 col-md-9 col-lg-9"
        >
          <Nuxt />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import mqMixin from "@/mixins/mqMixin";
import json from "@/config.json";

export default Vue.extend({
  mixins: [mqMixin],
  computed: {
    isHome() {
      return this.$route.path === "/";
    }
  },
  data() {
    return {
      title: "",
      subtitle: "",
      className: "",
      route: ""
    };
  },
  methods: {},
  mounted() {
    if (this.$nuxt.$route.path === "/") {
      this.title = json.name.first;
      this.subtitle = json.name.last;
      this.className = "home";
    } else if (this.$nuxt.$route.path === "/about") {
      this.title = "ABOUT";
      this.subtitle = "ME";
      this.className = "about";
    } else if (this.$nuxt.$route.path === "/contact") {
      this.title = "Let's";
      this.subtitle = "Talk";
      this.className = "contact";
    }
  },
  watch: {
    $route() {
      if (this.$nuxt.$route.path === "/") {
        this.title = json.name.first;
        this.subtitle = json.name.last;
        this.className = "home";
      } else if (this.$nuxt.$route.path === "/about") {
        this.title = "ABOUT";
        this.subtitle = "ME";
        this.className = "about";
      } else if (this.$nuxt.$route.path === "/contact") {
        this.title = "Let's";
        this.subtitle = "Talk";
        this.className = "contact";
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.route-veiw-container {
  z-index: 1000;
}
.main-container {
  position: relative;
  min-height: 500px;
  @media screen and (max-width: 414px) {
    min-height: auto;
  }
}
.main-row {
  align-content: space-between;

  @media screen and (max-width: 414px) {
    min-height: 580px;
  }
  @media screen and (max-width: 375px) {
    min-height: 520px;
  }
  @media screen and (max-width: 768px) and (min-height: 740px) {
    min-height: 580px;
  }
  @media screen and (min-height: 812px) {
    min-height: 670px;
  }
  @media screen and (min-height: 1024px) {
    min-height: 780px;
  }
  @media screen and (max-width: 768px) and (min-height: 1024px) {
    min-height: 760px;
  }
  @media screen and (max-width: 320px) {
    min-height: 420px;
  }
}
</style>
