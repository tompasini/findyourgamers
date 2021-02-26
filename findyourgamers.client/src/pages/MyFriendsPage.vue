<template>
  <div class="myfriends container-fluid">
    <div class="row">
      <account-component v-for="account in friends" :key="account.id" :account-prop="account" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { friendService } from '../services/FriendService'
import { AppState } from '../AppState'
export default {
  name: 'MyFriends',
  setup() {
    onMounted(() => {
      friendService.getUserFriends()
    })
    return {
      friends: computed(() => AppState.friends)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
