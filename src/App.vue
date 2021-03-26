<template>
  <v-app dark>
    <v-main dark pa-0>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito:400,400i,700,800,800i,900i&display=swap");

.theme--light.v-application {
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
    linear-gradient(90deg, rgb(0, 0, 0), rgb(0, 0, 0)) !important;
}

#app {
  font-family: "Nunito";
}
</style>
