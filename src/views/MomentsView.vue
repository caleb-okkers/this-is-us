<template>
  <div class="moments">
    <h1 class="title">All our years together</h1>
    <DateCard
      v-for="year in years"
      :key="year.year"
      :title="year.year"
      :featurePhoto="year.featurePhoto"
      @click="goToMonths(year.year)"
      :style="{ backgroundImage: `url(${year.featurePhoto})` }"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DateCard from "@/components/DateCard.vue";

export default {
  components: { DateCard },
  computed: {
    ...mapGetters("memories", ["getYears"]),
    years() {
      return this.getYears;
    },
  },
  methods: {
    goToMonths(year) {
      this.$router.push(`/year/${year}`);
    },
  },
};

</script>

<style scoped>

.title {
  font-family: "Tangerine", serif;
  color: var(--primary-dark); 
  font-size: 6rem;
  text-align: center;
  padding-top: 5rem;
  font-weight:700;
  text-shadow:
    2px 2px 0px #fff,   /* Top-Left */
    -2px -2px 0px #fff, /* Bottom-Right */
    2px -2px 0px #fff,  /* Top-Right */
    -2px 2px 0px #fff;  /* Bottom-Left */
}

</style>
