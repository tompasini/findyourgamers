<template>
  <div class="activeAccount container-fluid">
    <div class="row">
      <div class="col-6">
        <img class="img-fluid" :src="activeAccount.picture" alt="account picture">
        <h1>{{ activeAccount.name }}</h1>
        <div @click="refreshPage">
          <button v-if="!currentFriend && (!outgoingFriendRequest && !incomingFriendRequest)" @click="sendFriendRequest" class="btn btn-primary">
            Add Friend
          </button>
        </div>
        <button v-if="outgoingFriendRequest || incomingFriendRequest" disabled class="btn btn-primary">
          Pending
        </button>
      </div>
      <div class="col-6">
        <h4>What games do you like to play?</h4>
        <p>{{ activeAccount.games }}</p>
        <h4>What platforms do you game on? i.e Steam</h4>
        <p>{{ activeAccount.platforms }}</p>
        <h4>What TV shows and movies do you like? Anime included.</h4>
        <p>{{ activeAccount.tvshowsandmovies }}</p>
        <h4>What other hobbies and interests do you have?</h4>
        <p>{{ activeAccount.hobbiesandinterests }}</p>
        <h4>Anything else you want to say about yourself?</h4>
        <p>{{ activeAccount.about }}</p>
        <h4>What are you looking for on this site?</h4>
        <p>{{ activeAccount.lookingFor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { accountService } from '../services/AccountService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { friendService } from '../services/FriendService'
export default {
  name: 'ActiveAccount',
  setup() {
    const route = useRoute()
    onMounted(() => {
      accountService.getActiveAccount(route.params.id)
    })
    return {
      activeAccount: computed(() => AppState.activeAccount),
      friends: computed(() => AppState.friends),
      currentFriend: computed(() => AppState.friends.find(friend => friend.id === AppState.activeAccount.id)),
      outgoingFriendRequest: computed(() => AppState.outgoingFriendRequests.find(request => request.accountId === AppState.activeAccount.id)),
      incomingFriendRequest: computed(() => AppState.incomingFriendRequests.find(request => request.requestorId === AppState.activeAccount.id)),
      sendFriendRequest() {
        friendService.sendFriendRequest(route.params.id)
      },
      refreshPage() {
        window.location.reload()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>
