<script>
import { ref } from 'vue';

export default {
  name: 'Users',
  async setup() {
    const users = ref([]);

    await fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        users.value = json.users;
      });

    return { users };
  }
};
</script>

<template>
  <ul id="users">
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
