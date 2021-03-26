<template app>
  <v-container dark fill-height class="projects">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <h1
          class="text-center white--text font-weight-light display-3 pa-5 my-5"
        >
          Projects
        </h1>
        <v-expansion-panels dark>
          <v-expansion-panel v-for="(project, index) in projects" :key="index">
            <v-expansion-panel-header style="font-size: 18px">
              {{ project.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card dark>
                <v-card-text>
                  <v-row justify="space-between" align="center">
                    <v-col cols="12" md="8">
                      <v-card-text class="pa-0">
                        {{ project.description }}
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-card-title class="justify-center">
                        Technologies
                      </v-card-title>

                      <v-card-title
                        class="subtitle pa-0 font-weight-light"
                        v-for="(technology, index) in project.technologies"
                        :key="index"
                      >
                        <v-icon class="pr-2">
                          {{ technology.icon }}
                        </v-icon>
                        {{ technology.name }}
                      </v-card-title>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-row
                    :justify="$vuetify.breakpoint.mdAndUp ? 'start' : 'center'"
                  >
                    <v-col cols="auto">
                      <v-btn text :href="project.code" target="_blank">
                        <v-icon class="pr-2"> mdi-code-braces </v-icon>
                        View Code
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn text>
                        <v-icon class="pr-2">mdi-link</v-icon>
                        view project
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="text-center">
          <v-btn @click="$vuetify.goTo('.home', -500, -500)" rounded light>
            Back to top
            <v-icon class="pl-2"> mdi-chevron-up </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "This Portfolio",
        description:
          "This is what I have created in a short period of time when I had some spare time.",
        technologies: [
          { name: "VueJS", icon: "mdi-vuejs" },
          { name: "Vuetify", icon: "mdi-vuetify" },
        ],
        code: "https://github.com/alexkala1/portfolio",
        link: "https://alexkala1.github.io/portfolio",
      },
      {
        title: "Thesis",
        description:
          "This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",
        technologies: [
          { name: "VueJS", icon: "mdi-vuejs" },
          { name: "Vuetify", icon: "mdi-vuetify" },
          { name: "NodeJS", icon: "mdi-nodejs" },
          { name: "Docker", icon: "mdi-docker" },
          { name: "MongoDB", icon: "mdi-database" },
        ],
        code: "https://github.com/alexkala1/fattendancepublic",
      },
      {
        title: "Screen Recorder",
        description:
          "This is an electron app that records either the entire screen or a selected window",
        technologies: [
          { name: "Electron", icon: "mdi-electron-framework" },
          { name: "JavaScript", icon: "mdi-language-javascript" },
        ],
        code: "https://github.com/alexkala1/screenrecorder",
      },
      {
        title: "PDA",
        description:
          "This is an ordering system for shops like restaurants, caffe etc that can create users, show available tables for customers and create orders for products depending on the shop",
        technologies: [
          { name: "Laravel", icon: "mdi-laravel" },
          { name: "Bootstrap", icon: "mdi-bootstrap" },
          { name: "PostgreSQL", icon: "mdi-database" },
        ],
        code: "https://github.com/alexkala1/pda",
      },
      {
        title: "Pizzahouse",
        description:
          "This project is a pizzahouse created with laravel for basic CRUD implementation",
        technologies: [
          { name: "Laravel", icon: "mdi-laravel" },
          { name: "mySQL", icon: "mdi-database" },
          { name: "Bootstrap", icon: "mdi-bootstrap" },
        ],
        code: "https://github.com/alexkala1/pizzahouse",
      },
      {
        title: "Sacchon app",
        description:
          "This project was created for pfizer-codehub bootcamp for software engineering. It is a diabetes management app where patients can add data to the system, doctors can diagnose their data and consult them and finally they have a reporter that monitors their activity in the system",
        technologies: [
          { name: "Angular", icon: "mdi-angular" },
          { name: "Java", icon: "mdi-language-java" },
          { name: "Restlet", icon: "mdi-api" },
          { name: "MSSQL", icon: "mdi-database" },
        ],
        code: "https://github.com/alexkala1/pfizer-final-project",
      },
      {
        title: "UNO clone",
        description:
          "This is a proof of concept that started with working with web sockets in mind",
        technologies: [
          { name: "Socket.io", icon: "mdi-power-socket-eu" },
          { name: "VueJS", icon: "mdi-vuejs" },
          { name: "Vuetify", icon: "mdi-vuetify" },
          { name: "ExpressJS", icon: "mdi-server" },
        ],
        code: "https://github.com/alexkala1/socket-io-game",
      },
      {
        title: "Machine learning image labeling",
        description:
          "This is a project that was created for the master that I follow. It is an admin panel that creates labels and datasets with user input and it has a feature to accept or reject an image according to the coordinates of the given dataset or the dataset/label name. The image and the dataset as well as the label comes from the mobile app that was created for the project as well.",
        technologies: [
          { name: "Flutter", icon: "mdi-cellphone-android" },
          { name: "MongoDB", icon: "mdi-database" },
          { name: "VueJS", icon: "mdi-vuejs" },
          { name: "Vuetify", icon: "mdi-vuetify" },
          { name: "NuxtJS", icon: "mdi-nuxt" },
          { name: "ExpressJS", icon: "mdi-server" },
        ],
        code: "https://github.com/alexkala1/ml-image-label",
      },
      {
        title: "Ethereum pattern recognition",
        description:
          "This is a web application that was created in the master. It allows the user to search within blocks of the ethereum blockchain and find similarities and patterns in smart contracts or transactions. User can see the decompiled binary into solidity code as well as all the information that has to do with a transaction.",
        technologies: [
          { name: "VueJS", icon: "mdi-vuejs" },
          { name: "Vuetify", icon: "mdi-vuetify" },
          { name: "ExpressJS", icon: "mdi-server" },
          { name: "web3.js", icon: "mdi-ethereum" },
        ],
        code: "https://github.com/alexkala1/ethereum-client",
      },
    ],
  }),
};
</script>

<style lang="scss">
.projects {
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
