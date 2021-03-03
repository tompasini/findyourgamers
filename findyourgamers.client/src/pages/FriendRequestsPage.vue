<template>
  <div class="FriendRequests container-fluid">
    <div class="row">
      <div class="col-12">
        <h2>Incoming Friend Requests:</h2>
      </div>
      <incoming-friend-request-component v-for="friendRequest in incomingFriendRequests" :key="friendRequest.id" :friend-request-prop="friendRequest" />
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Outgoing Friend Requests:</h2>
      </div>
      <outgoing-friend-request-component v-for="friendRequest in outgoingFriendRequests" :key="friendRequest.id" :friend-request-prop="friendRequest" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import OutgoingFriendRequestComponent from '../components/OutgoingFriendRequestComponent.vue'
export default {
  components: { OutgoingFriendRequestComponent },
  name: 'FriendRequests',
  setup() {
    return {
      incomingFriendRequests: computed(() => AppState.incomingFriendRequests),
      outgoingFriendRequests: computed(() => AppState.outgoingFriendRequests)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
