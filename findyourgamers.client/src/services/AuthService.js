import { initialize } from '@bcwdev/auth0provider-client'
import { AppState } from '../AppState'
import { audience, clientId, domain } from '../AuthConfig'
import router from '../router'
import { setBearer } from './AxiosService'
import { accountService } from './AccountService'
import { friendService } from './FriendService'

export const AuthService = initialize({
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async function() {
  setBearer(AuthService.bearer)
  await accountService.getAccount()
  AppState.user = AuthService.user
  accountService.getAllAccounts()
  friendService.getUserFriends()
  friendService.getIncomingUserFriendRequests()
  friendService.getOutgoingUserFriendRequests()
})
