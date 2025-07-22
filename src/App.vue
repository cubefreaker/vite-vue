<script>
import { useAuth } from './composables/useAuth.js';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const { user, loading } = useAuth();
    const router = useRouter();

    // Watch for user authentication state changes
    watch(user, (newUser) => {
      if (newUser) {
        // User is logged in, redirect to dashboard
        router.push('/dashboard');
      } else {
        // User is not logged in, redirect to login
        router.push('/');
      }
    });

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
