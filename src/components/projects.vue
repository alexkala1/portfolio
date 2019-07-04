<template app>
  <div class="projects">
    <v-container fluid mt-2 pb-5 mb-5>
      <v-layout>
        <v-flex md8 offset-md2 xs12 pb-5 mb-5>
          <h1
            class="justify-start align-center text-xs-center font-weight-thin pb-5 mb-5 display-2"
          >My Projects</h1>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="project in projects" :key="project">
              <template v-slot:header>
                <h2 class="subheading">{{project.title}}</h2>
              </template>
              <v-card color="rgba(255, 0, 0, 0.5)">
                <v-card-text>
                  <v-layout>
                    <v-flex lg8 mr-3>{{project.description}}</v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex lg4>
                      <ul>
                        <li
                          v-for="technology in project.technologies"
                          :key="technology"
                        >{{technology.name}}</li>
                      </ul>
                    </v-flex>
                  </v-layout>
                  <v-flex xs12 pt-1 align-start justify-center>
                    <v-btn round dark color="red darken-4" :href="project.code">View Code</v-btn>
                    <v-btn round dark color="red darken-4" :href="project.link">View Project</v-btn>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex text-xs-center align-center justify-center>
          <v-btn href="#app" round light>Back to top</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
          { name: "VueJS"},
          { name: "Vuetify" }
        ],
        code: "https://github.com/alexkala1/portfolio",
        link: "https://alexkala1.github.io/portfolio"
      },
      {
        title: "Thesis",
        description:
          "This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",
        technologies: [
          { name: "VueJS"},
          { name: "Vuetify" },
          { name: "NodeJS" },
          { name: "Docker" },
          { name: "MongoDB" }
        ],
        code: "https://github.com/alexkala1/fattendancepublic",
        link: ""
      }
    ]
  })
};
</script>

<style>
.projects {
  height: 130vh;
}
/* .container.fluid {
    background-repeat: repeat;

} */

.v-expansion-panel__header {
  background-color: rgba(0, 0, 0, 0.5);
}
.theme--dark.v-expansion-panel .v-expansion-panel__container {
  align-items: flex-start;
  opacity: 0.85;
}
</style>
