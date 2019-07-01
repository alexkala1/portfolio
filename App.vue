<template>
  <v-app dark>
    <NavigationDrawer/>
    <v-content>
      <div id="Home">
      <parallax/>
      </div>
      <div id="About">
      <mainContainer/>
      </div>
      <div id="Experience">  
      <whoami/>
      </div>
      <div id="Projects">
      <projects/>
      </div>
      <div id="Contact">
      <contact/>
      </div>
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
import contact from "@/components/contact";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    Footer,
    mainContainer,
    whoami,
    parallax,
    projects,
    contact
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

