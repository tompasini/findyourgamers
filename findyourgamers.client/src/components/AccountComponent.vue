<template>
  <div @click.stop="getActiveAccount(account.id)" class="account-component col-md-3 pointer m-5">
    <img class="img-fluid" :src="account.picture" alt="account picture">
    <h3>{{ account.name }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'AccountComponent',
  props: {
    accountProp: Object
  },
  setup(props) {
    const router = useRouter()
    return {
      account: computed(() => props.accountProp),
      getActiveAccount(accountId) {
        router.push({ name: 'ActiveAccount', params: { id: accountId } })
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
