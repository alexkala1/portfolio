<template app>
  <v-container app fluid pa-0 class="home">
    <v-layout text-xs-center align-center justify-center row wrap style="min-height:100vh">
      <v-flex xs12>
        <v-flex xs12>
          <h1 class="display-3 font-weight-thin">Alex Kalaitzidis</h1>
          <h2 class="heading font-weight-thin ma-3">Front-end web developer</h2>
        </v-flex>
        <v-flex xs12>
          <v-btn
            v-for="contact in contact"
            :key="contact.link"
            class="ftr ma-4 white--text"
            :href="contact.link"
            icon
          >
            <v-icon>{{contact.icon}}</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12 class="pt-3">
          <v-btn @click="$vuetify.goTo('.projects', 500, 300)" round light>My Projects</v-btn>
          <v-btn round light @click="showpdf = !showpdf">
            Preview CV
            <v-icon right>fas fa-file-alt</v-icon>
          </v-btn>
        </v-flex>
        <v-flex sm6 offset-sm3 class="pt-5">
          <div v-if="showpdf === true">
            <v-img :src="require('/home/alex/portfolio/src/components/cv.png')" height="500" />
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
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
    ],
    showpdf: false
  })
};
</script>

<style>
.cv {
  max-width: 80vw !important;
}
</style>

