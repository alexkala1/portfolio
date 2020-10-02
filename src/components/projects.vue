<template app>
  <v-container fluid mt-2 pb-5 mb-5 class="projects">
    <v-layout justify-center align-center row style="min-height:70vh">
      <v-flex md8 xs12 pb-5 mb-5>
        <h1
          class="justify-start align-center text-xs-center font-weight-thin pb-5 mb-5 display-2"
        >My Projects</h1>
        <v-expansion-panel dark popout>
          <v-expansion-panel-content v-for="project in projects" :key="project.name">
            <template v-slot:header>
              <h2 class="subheading">{{project.title}}</h2>
            </template>
            <v-card style="background:linear-gradient(90deg, #111 60%, #333 100%);">
              <v-divider></v-divider>
              <v-card-text>
                <v-layout>
                  <v-flex lg8 mr-3>{{project.description}}</v-flex>
                  <v-divider vertical></v-divider>
                  <v-flex lg4>
                    <ul>
                      <li
                        v-for="technology in project.technologies"
                        :key="technology.name"
                      >{{technology.name}}</li>
                    </ul>
                  </v-flex>
                </v-layout>
                <v-flex xs12 pt-1 align-start justify-center>
                  <v-btn round dark color="#222" :href="project.code" target="_blank">View Code</v-btn>
                  <v-btn
                    v-if="project.link"
                    round
                    dark
                    color="#222"
                    :href="project.link"
                  >View Project</v-btn>
                  <v-btn v-else round dark color="#222" @click="dialog = true">View Project</v-btn>
                  <v-dialog v-model="dialog" width="270">
                    <v-card dark>
                      <v-card-title class="headline grey darken-2" primary-title>Project not ready</v-card-title>

                      <v-card-text>This project is either still in progress or it must be installed
                      in order to view it. Please consider checking the code on github!</v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="white" flat @click="dialog = false">OK</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex text-xs-center>
        <v-btn @click="$vuetify.goTo('.home', -500, -500)" round light>Back to top</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    projects: [
      {
        title: "This Portfolio",
        description:
          "This is what I have created in a short period of time when I had some spare time.",
        technologies: [{ name: "VueJS" }, { name: "Vuetify" }],
        code: "https://github.com/alexkala1/portfolio",
        link: "https://alexkala1.github.io/portfolio"
      },
      {
        title: "Thesis",
        description:
          "This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",
        technologies: [
          { name: "VueJS" },
          { name: "Vuetify" },
          { name: "NodeJS" },
          { name: "Docker" },
          { name: "MongoDB" }
        ],
        code: "https://github.com/alexkala1/fattendancepublic"
      },
      {
        title: "Screen Recorder",
        description: "This is an electron app that records either the entire screen or a selected window",
        technologies: [
          {name: "Electron"},
          {name: "JavaScript"},
        ],
        code: "https://github.com/alexkala1/screenrecorder"
      },
      {
        title: "PDA",
        description: "This is an ordering system for shops like restaurants, caffe etc that can create users, show available tables for customers and create orders for products depending on the shop",
        technologies: [
          {name: "Laravel"},
          {name: "Bootstrap"},
          {name: "PostgreSQL"},
        ],
        code: "https://github.com/alexkala1/pda"
      },
      {
        title: "Pizzahouse",
        description: "This project is a pizzahouse created with laravel for basic CRUD implementation",
        technologies: [
          {name: "Laravel"},
          {name: "mySQL"},
          {name: "Bootstrap"},
        ],
        code: "https://github.com/alexkala1/pizzahouse"
      },
      {
        title: "Sacchon app",
        description: "This project was created for pfizer-codehub bootcamp for software engineering. It is a diabetes management app where patients can add data to the system, doctors can diagnose their data and consult them and finally they have a reporter that monitors their activity in the system",
        technologies: [
          {name: "Angular"},
          {name: "Java"},
          {name: "Restlet"},
          {name: "MSSQL"},
        ],
        code: "https://github.com/alexkala1/pfizer-final-project"
      },

    ]
  })
};
</script>

<style lang="scss">
.projects {
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
}

.v-expansion-panel__header {
  background: linear-gradient(90deg, #111 60%, #222 100%);
}
.theme--dark.v-expansion-panel .v-expansion-panel__container {
  align-items: flex-start;
}
.v-card__text {
  min-height: 100%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
