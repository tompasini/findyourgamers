<template>
  <div class="incoming-friend-request-component col-12">
    <img class="img-fluid" :src="friendRequest.requestorPicture" alt="picture">
    <h3>{{ friendRequest.requestorName }}</h3>
    <div v-if="!friendRequest.isApproved">
      <button @click.stop="approveFriendRequest(friendRequest.id)" class="btn btn-success">
        Approve
      </button>
      <button @click.stop="denyFriendRequest(friendRequest.id)" class="btn btn-danger">
        Deny
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { friendService } from '../services/FriendService'
export default {
  name: 'IncomingFriendRequestComponent',
  props: {
    friendRequestProp: Object
  },
  setup(props) {
    return {
      friendRequest: computed(() => props.friendRequestProp),
      approveFriendRequest(friendRequestId) {
        friendService.approveFriendRequest(friendRequestId)
      },
      denyFriendRequest(friendRequestId) {
        friendService.denyFriendRequest(friendRequestId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
