<template>
  <v-app>
    <v-content>
      <v-container fill-height fluid>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>
