<template>
  <v-navigation-drawer app permanent floating>
    <v-layout column align-center>
      <v-flex class="mt-4">
        <v-avatar size="110">
          <img
            src="https://scontent.fskg1-1.fna.fbcdn.net/v/t1.0-0/p370x247/55924262_2372587406105990_3536642973955522560_n.jpg?_nc_cat=111&_nc_ht=scontent.fskg1-1.fna&oh=daf32954cc963d3ba1c7c853a0abdcb1&oe=5D98E8A7"
          />
        </v-avatar>
        <p class="subheading mt-2">Alex Kalaitzidis</p>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

      <v-list dense two-line v-for="item in items" :key="item.title">
        <a :href="'#'+item.title">
        <v-list-tile class="navdrawer">
          <v-list-tile-action>
            <v-icon size="18px" left>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title
              class="font-weight-light text-uppercase text-xs-left"
            >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </a>
      </v-list>

  </v-navigation-drawer>
</template>
/* eslint-disable */
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "fas fa-home" },
        { title: "About", icon: "fas fa-info" },
        { title: "Experience", icon: "fas fa-user-graduate" },
        { title: "Projects", icon: "fas fa-tasks" },
        { title: "Contact", icon: "fas fa-address-card" }
      ]
    };
  }
};
</script>
<style>
a {
  text-decoration: none;
  color:white !important;
}
.navdrawer:hover {
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  color: yellow;
  background-color: #666;
}
.navdrawer:active {
  color: yellow;
}

html {
  scroll-behavior: smooth !important;
}
</style>
