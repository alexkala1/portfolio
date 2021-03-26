<template>
  <v-container fluid fill-height pa-0>
    <Mainpage style="height: 100vh" />
    <Projects />
  </v-container>
</template>

<script>
import Mainpage from "../components/mainpage";
import Projects from "../components/projects";
export default {
  components: {
    Mainpage,
    Projects,
  },
};
</script>

<style></style>
