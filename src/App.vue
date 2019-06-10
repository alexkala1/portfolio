<template>
  <v-app dark>
    <NavigationDrawer/>
    <v-content>
      <parallax/>
      <mainContainer/>
      <whoami/>
      <projects/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer";
import Footer from "@/components/Footer";
import mainContainer from "@/components/mainContainer";
import whoami from "@/components/whoami";
import parallax from "@/components/parallax";
import projects from "@/components/projects";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    Footer,
    mainContainer,
    whoami,
    parallax,
    projects
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
</style>

