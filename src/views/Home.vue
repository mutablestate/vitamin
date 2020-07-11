<script>
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import Users from './Users.vue';

export default {
  name: 'Home',
  components: { Users },
  setup() {
    const store = useStore();
    const { t } = useI18n();

    const handleStoreIncrement = () => store.commit('increment');

    return {
      t,
      store,
      handleStoreIncrement
    };
  }
};
</script>

<template>
  <Suspense>
    <template #default>
      <h1 class="text-teal-600">Home</h1>
      <p>{{ t('hello') }}</p>
      <p>Count: {{ store.state.count }}</p>
      <button class="btn btn-blue" type="button" @click="handleStoreIncrement">
        Increment Count
      </button>

      <Users />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style lang="postcss">
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
