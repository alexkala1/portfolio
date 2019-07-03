<template app>
  <div class="projects">
    <v-container fluid pt-5 mt-5 pb-5 mb-5>
      <v-layout>
        <v-flex md8 offset-md2 pt-5 mt-5 pb-5 mb-5>
          <h1
            class="justify-start align-center text-xs-center font-weight-thin pb-5 mb-5 display-2"
          >My Projects</h1>
          <v-expansion-panel inset>
            <v-expansion-panel-content v-for="project in projects" :key="project">
              <template v-slot:header>
                <h2 class="subheading">{{project.title}}</h2>
              </template>
              <v-card color="rgba(255, 0, 0, 0.5)">
                <v-card-text>
                  <v-layout>
                    <v-flex xs8>{{project.description}}</v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex xs4>
                      <ul>
                        <li>{{project.technologies}}</li>
                      </ul>
                    </v-flex>
                  </v-layout>
                  <v-flex xs6 pa-3>
                    <v-btn round dark color="red darken-4" :href="project.code">View Code</v-btn>
                    <v-btn round dark color="red darken-4" :href="project.link">View Project</v-btn>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
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
        technologies: "VueJS , Vuetify",
        code: "https://github.com/alexkala1/portfolio",
        link: "https://alexkala1.github.io/portfolio"
      },
      {
        title: "Thesis",
        description:
          "This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",
        technologies: "VueJS , Vuetify , NodeJS , Docker , MongoDB",
        code: "https://github.com/alexkala1/fattendancepublic",
        link: ""
      }
    ]
  })
};
</script>

<style>
.projects {
  height: 100vh;
}

.v-expansion-panel__header {
  background-color: rgba(0, 0, 0, 0.5);
}
.theme--dark.v-expansion-panel .v-expansion-panel__container {
  opacity: 0.85;
}
</style>
