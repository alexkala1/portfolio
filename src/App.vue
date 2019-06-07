<template>
  <v-app dark>
<NavigationDrawer />

    <v-content>
    <parallax />
      <mainContainer />
      <whoami />
        <Footer />
    </v-content>

        
  
  </v-app>
</template>

<script>


import NavigationDrawer from '@/components/NavigationDrawer'
import Footer from '@/components/Footer'
import mainContainer from '@/components/mainContainer'
import whoami from '@/components/whoami'
import parallax from '@/components/parallax'


export default {

  name: 'App',
  components: {
          NavigationDrawer,
          Footer,
          mainContainer,
          whoami,
          parallax

  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
/* .application.theme--dark{
  background-image: url('https://images.wallpaperscraft.com/image/computer_keyboard_mouse_laptop_mac_apple_66734_1920x1080.jpg');
  background-position:cover;
} */
</style>

