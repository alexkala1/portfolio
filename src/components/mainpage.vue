<template app>
  <div class="mainContainer">
    <v-container align-end justify-center app fluid pt-5 pb-5 mb-5>
      <v-layout text-xs-center align-center justify-end column pt-5 mt-5>
        <h1 class="display-3 font-weight-thin">Alex Kalaitzidis</h1>
        <h2 class="heading font-weight-thin ma-3">Front-end web developer</h2>
      </v-layout>

      <v-layout text-xs-center align-start justify-center pt-3 mt-3>
        <h2 class="subheading" v-for="contact in contact" :key="contact">
          <v-btn class="ftr mx-4 white--text" :href="contact.link" icon>
            <v-icon>{{contact.icon}}</v-icon>
          </v-btn>
        </h2>
      </v-layout>
      <v-layout justify-center align-center pt-3 mt-3>
        <v-btn href="#projects" round light>My Projects</v-btn>
        <v-btn
          round
          light
          href="https://docs.google.com/document/d/1PV8KTkLlsdp4QhYkIKrUaEMZtqbnQTukfQJ26IQPEjk/edit?usp=sharing"
          target="_blank"
        >
          Preview CV
          <v-icon right small>fas fa-file-alt</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    contact: [
      { icon: "fab fa-github", link: "http://github.com/alexkala1" },
      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/alex-kalaitzidis-a1386917b/"
      },
      {
        icon: "far fa-envelope",
        link: "mailto:alexkalaitzidis2@gmail.com"
      }
    ]
  })
};
</script>

<style>
.ftr:hover {
  transition-timing-function: ease;
  background: #888;
}
.mainContainer {
  height: 100vh;
}
</style>

