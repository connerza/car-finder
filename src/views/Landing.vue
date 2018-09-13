<template>
  <v-layout text-xs-center column align-center justify-space-around>
    <section class="mt-5">
      <h1 class="font-italic display-4">Hey, there!</h1>
      <h2 class="mt-5 headline text-xs-center">Need help choosing a new car?</h2>
    </section>
    <router-link :to="{name: 'survey', params: {stage: 1}}">
      <v-btn outline large color="accent" class="mb-5">Let's Get Started</v-btn>
    </router-link>
  </v-layout>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>