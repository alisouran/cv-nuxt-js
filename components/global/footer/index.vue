<template>
  <footer>
    <div
      class="container-md d-flex"
      :class="mobile || tablet ? 'justify-content-center' : ''"
    >
      <div>
        <a target="_blank" href="https://blog.alisouran.ir">
          <div class="d-inline-flex align-center">
            <img
              class="mw-100"
              src="~/assets/img/icons/virgool.svg"
              :alt="blogAlt"
            />
            <span class="social-text ml-8">BLOG</span>
          </div>
        </a>
        <a target="_blank" href="https://github.com/alisouran">
          <div class="d-inline-flex align-center ml-16">
            <img
              class="mw-100"
              src="~/assets/img/icons/github.svg"
              :alt="githubAlt"
            />
            <span class="social-text ml-8">GITHUB</span>
          </div>
        </a>
        <!-- <a v-if="!mobile" target="_blank" href="https://github.com/alisouran">
          <div class="d-inline-flex align-center ml-16">
            <img class="mw-100" src="~/assets/img/icons/dribbble.svg" />
            <span class="social-text ml-8">DRIBBBLE</span>
          </div>
        </a> -->
        <a target="_blank" href="https://www.linkedin.com/in/alisouran/">
          <div class="d-inline-flex align-center ml-16">
            <img
              class="mw-100"
              src="~/assets/img/icons/linkedin.svg"
              :alt="linkedinAlt"
            />
            <span class="social-text ml-8">LINKEDIN</span>
          </div>
        </a>
      </div>
      <!-- <span class="float-right">ALIREZA SOURAN</span> -->
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import mqMixin from "@/mixins/mqMixin";
import json from "@/config.json";

export default Vue.extend({
  name: "Footer",
  mixins: [mqMixin],
  data: () => {
    return {
      blogAlt: `${json.name.first} ${json.name.last}'s Blog`,
      githubAlt: `${json.name.first} ${json.name.last}'s Github`,
      linkedinAlt: `${json.name.first} ${json.name.last}'s LinkedIn`
    };
  }
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: 46px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 16px;
  }
}
.social-text {
  font-size: 1em;
  color: var(--secondary--color);
  @media screen and (max-width: 768px) and (min-height: 1024px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.82em;
  }
}
</style>
