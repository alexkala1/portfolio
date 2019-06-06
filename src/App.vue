<template>
  <v-app dark>
      
    <v-content>
<mainContainer />
    </v-content>
          <NavigationDrawer />
        <Footer />
  </v-app>
</template>

<script>


import NavigationDrawer from '@/components/NavigationDrawer'
import Footer from '@/components/Footer'
import mainContainer from '@/components/mainContainer'

export default {

  name: 'App',
  components: {
          NavigationDrawer,
          Footer,
          mainContainer

  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.application.theme--dark{
  background-image: url('https://images.wallpaperscraft.com/image/computer_keyboard_mouse_laptop_mac_apple_66734_1920x1080.jpg');
  background-position:top right;
  background-repeat:no-repeat;
}
</style>

