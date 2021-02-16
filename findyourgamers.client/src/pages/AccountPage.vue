<template>
  <div class="about text-center">
    <img class="rounded" :src="account.picture" alt="" />
    <h3>{{ account.name }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
