<template>
  <div class="home container-fluid">
    <div class="row">
      <account-component v-for="account in accounts" :key="account.id" :account-prop="account" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    return {
      accounts: computed(() => AppState.accounts)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
}
</style>
