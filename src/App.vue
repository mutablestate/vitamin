<script>
export default {
  name: 'App'
};
</script>

<template>
  <div class="font-sans antialiased text-center text-gray-800 mt-16">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-view></router-view>
  </div>
</template>
