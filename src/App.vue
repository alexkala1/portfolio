<template>
  <v-app dark>
    <v-content>
      <mainpage />
      <div id="projects">
        <projects />
      </div>
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
html {
  scroll-behavior: smooth !important;
}
.application--wrap {
background-image: linear-gradient(to right, #434343 0%, black 100%);
  background-size: 300% 300%;
  margin-bottom: 0;
  -webkit-animation: bgtransition 20s ease infinite;
  -moz-animation: bgtransition 20s ease infinite;
  -o-animation: bgtransition 20s ease infinite;
  animation: bgtransition 20s ease infinite;

  @-webkit-keyframes bgtransition {
    0% {
      background-position: 11% 0%;
    }
    50% {
      background-position: 90% 100%;
    }
    100% {
      background-position: 11% 0%;
    }
  }
  @-moz-keyframes bgtransition {
    0% {
      background-position: 11% 0%;
    }
    50% {
      background-position: 90% 100%;
    }
    100% {
      background-position: 11% 0%;
    }
  }
  @-o-keyframes bgtransition {
    0% {
      background-position: 11% 0%;
    }
    50% {
      background-position: 90% 100%;
    }
    100% {
      background-position: 11% 0%;
    }
  }
  @keyframes bgtransition {
    0% {
      background-position: 11% 0%;
    }
    50% {
      background-position: 90% 100%;
    }
    100% {
      background-position: 11% 0%;
    }
  }
}
</style>

