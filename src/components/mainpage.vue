<template>
  <v-container dark fluid pa-0 fill-height class="home">
    <v-row align="center" justify="center" class="d-flex flex-column">
      <v-col cols="12">
        <v-row align="center" justify="center" class="d-flex flex-column">
          <v-col cols="12" class="d-flex justify-center">
            <v-row justify="center">
              <v-col cols="12">
                <h1
                  class="dark white--text text-center"
                  style="font-size: 3.75rem; font-weight: 100 !important"
                >
                  Alex Kalaitzidis
                </h1>
              </v-col>
              <v-col cols="12">
                <h2
                  class="dark white--text text-center heading font-weight-thin ma-3"
                >
                  Front-end web developer
                </h2>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn
              v-for="contact in contact"
              :key="contact.link"
              class="ftr ma-4 white--text"
              :href="contact.link"
              icon
            >
              <v-icon>{{ contact.icon }}</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-row justify="center">
              <v-col cols="auto">
                <v-btn
                  @click="$vuetify.goTo('.projects', 500, 300)"
                  rounded
                  light
                >
                  <v-icon class="pr-2"> mdi-folder-account </v-icon>
                  My Projects
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn rounded light @click="showcv = !showcv">
                  <v-icon class="pr-2">mdi-file-document</v-icon>

                  Preview CV
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="showcv" min-width="50%" dark>
      <v-card max-height="100%">
        <v-img max-height="1000" contain src="../assets/cv.png"></v-img>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn color="green darken-1" text @click="showcv = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    contact: [
      { icon: "mdi-github", link: "http://github.com/alexkala1" },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/alex-kalaitzidis-a1386917b/",
      },
      {
        icon: "mdi-email",
        link: "mailto:alexkalaitzidis2@gmail.com",
      },
    ],
    showcv: false,
  }),
};
</script>

<style></style>
