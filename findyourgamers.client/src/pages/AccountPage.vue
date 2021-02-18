<template>
  <div v-if="account.name" class="account container-fluid">
    <div class="row">
      <div class="col-6">
        <img class="rounded" :src="account.picture" alt="" />
        <h3>{{ account.name }}</h3>
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
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      editResponses(userId) {
        accountService.editResponses(state.responses, userId)
        router.push({ name: 'ActiveAccount', params: { id: AppState.account.id } })
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
