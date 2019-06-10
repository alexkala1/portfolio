<template app>
  <v-container fluid>
    <v-layout>
      <v-flex xs8 offset-xs2 pa-3>
        You can find me on:
        <v-expansion-panel inset>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
            <template v-slot:header>
              <div>Item</div>
            </template>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
