<template>
  <div>
    <div
      :id="loading ? '' : 'hideMe'"
      class="loading"
      :class="loading ? '' : 'loading--deactive'"
    >
      <img src="~/assets/img/icons/android-chrome-512x512.png" alt="Page Loader" />
    </div>
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
      route: "",
      loading: true
    };
  },
  methods: {},
  mounted() {
    this.loading = false;
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

.loading {
  width: 100%;
  height: 100vh;
  background-color: var(--primary--color);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: all 1s ease-in-out;
  transition-delay: 0.8s;
  overflow: hidden !important;
  & img {
    max-width: 100%;
    width: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &--deactive {
    opacity: 0;
  }
}

#hideMe {
  -moz-animation: cssAnimation 0s ease-in 1.8s forwards;
  /* Firefox */
  -webkit-animation: cssAnimation 0s ease-in 1.8s forwards;
  /* Safari and Chrome */
  -o-animation: cssAnimation 0s ease-in 1.8s forwards;
  /* Opera */
  animation: cssAnimation 0s ease-in 1.8s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
@keyframes cssAnimation {
  to {
    width: 0;
    height: 0;
    overflow: hidden;
  }
}
@-webkit-keyframes cssAnimation {
  to {
    width: 0;
    height: 0;
    visibility: hidden;
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
