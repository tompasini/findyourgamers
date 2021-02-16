<template>
  <div class="activeAccount container-fluid">
    <div class="row">
      <div class="col-12">
        <img :src="activeAccount.picture" alt="account picture">
        <h1>{{ activeAccount.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { accountService } from '../services/AccountService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'ActiveAccount',
  setup() {
    const route = useRoute()
    onMounted(() => {
      accountService.getActiveAccount(route.params.id)
    })
    return {
      activeAccount: computed(() => AppState.activeAccount)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
