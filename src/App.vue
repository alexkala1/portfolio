<template>
  <v-app dark>
    <v-content>
      <parallax />
      <div id="projects">
        <projects />
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
  background: linear-gradient(
    109.6deg,
    rgba(14, 11, 56, 1) 11.2%,
    rgba(239, 37, 37, 1) 91.1%
  );
  background-size: 150% 150%;
  margin-bottom: 0;
  -webkit-animation: bgtransition 30s ease infinite;
  -moz-animation: bgtransition 30s ease infinite;
  -o-animation: bgtransition 30s ease infinite;
  animation: bgtransition 30s ease infinite;

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

