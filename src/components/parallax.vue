<template app>
  <div class="mainContainer">
    <v-container
      align-end
      justify-center
      
      app
      fluid
      pt-5
      mt-5
      pb-5
      mb-5
    >
      <v-layout text-xs-center align-center justify-end column>
        <h1 class="display-3 font-weight-thin">Alex Kalaitzidis</h1>
        <h2 class="heading font-weight-thin">Front-end web developer</h2>
      </v-layout>
      <v-layout text-xs-center align-start justify-center pt-5 mt-5>
        <h2 class="subheading" v-for="contact in contact" :key="contact">
          <v-btn class="ftr mx-3 white--text" :href="contact.link" icon>
            <v-icon size="24px">{{contact.icon}}</v-icon>
          </v-btn>
        </h2>
      </v-layout>
      <v-layout justify-center align-center pt-3 mt-3>
        <v-btn href="#projects" round light>My Projects</v-btn>
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
        link: "http://instagram.com/alexkalalalala"
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
  background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
  height:100vh;
}

</style>

