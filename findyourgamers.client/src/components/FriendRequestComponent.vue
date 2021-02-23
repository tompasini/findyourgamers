<template>
  <div class="friend-request-component col-12">
    <img class="img-fluid" :src="friendRequest.requestorPicture" alt="picture">
    <h3>{{ friendRequest.requestorName }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'FriendRequestComponent',
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
