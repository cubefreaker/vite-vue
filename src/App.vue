<script>
import { useAuth } from './composables/useAuth.js';

export default {
  name: 'App',
  setup() {
    const { user, loading } = useAuth();

    return {
      user,
      loading
    };
  }
};
</script>

<template>
  <div id="app">
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-xl">Loading...</div>
    </div>
    <router-view v-else :user="user" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
