<template>
  <div v-if="account.name" class="account container-fluid">
    <div class="row">
      <div class="col-6">
        <img class="img-fluid" :src="account.picture" alt="" />
        <h3>{{ account.name }}</h3>
        <button class="btn btn-info" data-toggle="modal" data-target="#accountInfoModal">
          Edit Account Info
        </button>
        <!-- Modal -->
        <div class="modal fade"
             id="accountInfoModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true"
        >
          <div class="modal-dialog modal-text" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Account Info
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editAccountInfo(account.id)">
                <div class="modal-body">
                  <div class="form-group">
                    <h5>Name:</h5>
                    <input type="text" v-model="state.accountInfo.name">
                  </div>
                  <div class="form-group">
                    <h5>Profile Picture:</h5>
                    <input type="text" v-model="state.accountInfo.picture">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <form @submit.prevent="editResponses(account.id)">
          <div class="form-group">
            <h4>What games do you like to play?</h4>
            <textarea cols="30" rows="10" v-model="state.responses.games"></textarea>
          </div>
          <div class="form-group">
            <h4>What platforms do you game on? i.e Steam</h4>
            <textarea cols="30" rows="10" v-model="state.responses.platforms"></textarea>
          </div>
          <div class="form-group">
            <h4>What TV shows and movies do you like? Anime included.</h4>
            <textarea cols="30" rows="10" v-model="state.responses.tvshowsandmovies"></textarea>
          </div>
          <div class="form-group">
            <h4>What other hobbies and interests do you have?</h4>
            <textarea cols="30" rows="10" v-model="state.responses.hobbiesandinterests"></textarea>
          </div>
          <div class="form-group">
            <h4>Anything else you want to say about yourself?</h4>
            <textarea cols="30" rows="10" v-model="state.responses.about"></textarea>
          </div>
          <div class="form-group">
            <h4>What are you looking for on this site?</h4>
            <textarea cols="30" rows="10" v-model="state.responses.lookingFor"></textarea>
          </div>
          <button type="submit" class="btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { useRouter } from 'vue-router'
export default {
  name: 'Account',
  setup() {
    const router = useRouter()
    const state = reactive({
      responses: {
        games: AppState.account.games,
        platforms: AppState.account.platforms,
        tvshowsandmovies: AppState.account.tvshowsandmovies,
        hobbiesandinterests: AppState.account.hobbiesandinterests,
        about: AppState.account.about,
        lookingFor: AppState.account.lookingFor
      },
      accountInfo: {
        name: AppState.account.name,
        picture: AppState.account.picture
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      editResponses(userId) {
        accountService.editAccount(state.responses, userId)
        router.push({ name: 'ActiveAccount', params: { id: userId } })
      },
      editAccountInfo(userId) {
        accountService.editAccount(state.accountInfo, userId)
        router.push({ name: 'ActiveAccount', params: { id: userId } })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
