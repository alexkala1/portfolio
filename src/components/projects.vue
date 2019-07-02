<template app>
  <v-container fluid>
    <v-layout>
      <v-flex xs8 offset-xs2 pa-3>
        <h1 class="subheading pa-3 ma-3 text-xs-center"> My Projects </h1>
        <v-expansion-panel inset>
          <v-expansion-panel-content v-for="project in projects" :key="project">
            <template v-slot:header>
              <h2 class="subheading">{{project.title}}</h2>
            </template>
            <v-card>
              <v-card-text>
                <v-layout>
                <v-flex xs8 mr-3>
                  {{project.description}}
                </v-flex>
                <v-divider vertical></v-divider>
                <v-flex xs4 ml-5>
                  <ul>
                    <li>
                      {{project.technologies}}
                    </li>
                  </ul>
                </v-flex>
                </v-layout>
                <v-flex xs6 pa-3>
                  <a :href=project.link>{{project.link}}</a>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "This Portfolio",
        description: "This is what I have created in a short period of time when I had some spare time.",
        technologies: "VueJS , Vuetify",
        link: "https://github.com/ellftw/portfolio"
      },
      {
        title: "Thesis",
        description: "This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",
        technologies: "VueJS , Vuetify , NodeJS , Docker , MongoDB",
        link: "https://github.com/ellftw/fattendancepublic"
      }
    ]
  })
};
</script>

<style>
</style>
