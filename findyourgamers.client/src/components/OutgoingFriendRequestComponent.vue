<template>
  <div class="outgoing-friend-request-component col-12">
    <img class="img-fluid" :src="friendRequest.accountPicture" alt="picture">
    <h3>{{ friendRequest.accountName }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'OutgoingFriendRequestComponent',
  props: {
    friendRequestProp: Object
  },
  setup(props) {
    return {
      friendRequest: computed(() => props.friendRequestProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
