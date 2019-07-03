<template>
  <v-app dark>
    <v-content>
      <parallax/>
      <div id="projects">
      <projects/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import parallax from "@/components/parallax";
import projects from "@/components/projects";

export default {
  name: "App",
  components: {
    parallax,
    projects,
    
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth !important;
}
.theme--dark.application {
    background: radial-gradient(white, black), url(https://images.wallpaperscraft.com/image/black_background_lines_scratches_69440_1920x1080.jpg);
    background-blend-mode: multiply !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat;
}
</style>

