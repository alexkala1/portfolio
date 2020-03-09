<template>
  <v-app dark>
    <v-content>
      <mainpage />
      <projects />
    </v-content>
  </v-app>
</template>

<script>
import mainpage from "@/components/mainpage";
import projects from "@/components/projects";

export default {
  name: "App",
  components: {
    mainpage,
    projects
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
.application--wrap {
  background-image: linear-gradient(
      109deg,
      transparent 0%,
      transparent 5%,
      rgba(149, 149, 149, 0.04) 5%,
      rgba(149, 149, 149, 0.04) 38%,
      transparent 38%,
      transparent 100%
    ),
    linear-gradient(
      324deg,
      transparent 0%,
      transparent 31%,
      rgba(149, 149, 149, 0.04) 31%,
      rgba(149, 149, 149, 0.04) 99%,
      transparent 99%,
      transparent 100%
    ),
    linear-gradient(
      259deg,
      transparent 0%,
      transparent 11%,
      rgba(149, 149, 149, 0.04) 11%,
      rgba(149, 149, 149, 0.04) 57%,
      transparent 57%,
      transparent 100%
    ),
    linear-gradient(
      221deg,
      transparent 0%,
      transparent 5%,
      rgba(149, 149, 149, 0.04) 5%,
      rgba(149, 149, 149, 0.04) 37%,
      transparent 37%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0));
  margin-bottom: 0;
}
</style>

