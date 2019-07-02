<template>
  <v-container>
    <v-divider></v-divider>
    <v-layout>
      <v-flex xs6>
        <h1 class="subheading pa-3 ma-3 text-xs-center">You can find me on these platforms</h1>
      </v-flex>
      <v-flex xs6>
        <ul class="ma-1 pt-5 pb-5">
          <li v-for="contact in this.contact" :key="contact.name">
            <h1 class="subheading">
              <v-icon>{{contact.icon}}</v-icon>
              <a :href="contact.link" target="_blank">{{' ' + contact.name}}</a>
            </h1>
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contact: [
      {
        name: "@ellftw",
        icon: "fab fa-github",
        link: "http://github.com/ellftw"
      },
      {
         name: "@alexkalalalala",
        icon: "fab fa-instagram",
        link: "http://instagram.com/alexkalalalala"
      }
    ]
  })
};
</script>

<style>
</style>
