<template>
<v-navigation-drawer app permanent floating>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title font-weight-regular text-xs-center">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list dense two-line>
      <v-list-tile class="navdrawer"
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action >
          <v-icon size="18px" left>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="font-weight-light text-uppercase text-xs-left">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
/* eslint-disable */
<script>
export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-account' },
          { title: 'About', icon: 'fas fa-info' }
        ],
        links: ['Home', 'Contacts', 'Settings'],
        mini: true,
        right: null
      }
    }
}
</script>
<style>

    .navdrawer:hover {
      transition-duration:0.1s;
            transition-timing-function: ease-in;
            color: yellow;
            background-color:#666;
    }
    .navdrawer:active{
        color:yellow;
    }

</style>
