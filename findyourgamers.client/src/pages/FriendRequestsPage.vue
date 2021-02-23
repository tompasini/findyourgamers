<template>
  <div class="FriendRequests container-fluid">
    <div class="row">
      <div class="col-12">
        <friend-request-component v-for="friendRequest in friendRequests" :key="friendRequest.id" :friend-request-prop="friendRequest" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { friendService } from '../services/FriendService'
import { AppState } from '../AppState'
import FriendRequestComponent from '../components/FriendRequestComponent.vue'
export default {
  name: 'FriendRequests',
  setup() {
    onMounted(() => {
      friendService.getUserFriendRequests()
    })
    return {
      friendRequests: computed(() => AppState.friendRequests)
    }
  },
  components: { FriendRequestComponent }
}
</script>

<style lang="scss" scoped>

</style>
