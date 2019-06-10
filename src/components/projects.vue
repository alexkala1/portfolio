<template>
  <v-container fluid >
    <v-layout column align-center justify-center>
      <v-flex >
        <h1 class="display-3 font-weight-light mb-5">My projects</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card color="black" dark flat tile>
          <v-window v-model="onboarding">
            <v-window-item v-for="n in length" :key="`card-${n}`">
              <v-card color="transparent" height="500">
                <v-layout
                  align-center
                  justify-center
                  fill-height
                >Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.</v-layout>
              </v-card>
            </v-window-item>
          </v-window>

          <v-card-actions class="justify-space-between">
            <v-item-group v-model="onboarding" text-xs-center mandatory>
              <v-item v-for="n in length" :key="`btn-${n}`">
                <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 1
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>
