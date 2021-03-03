import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class FriendService {
  // get methods

  async getIncomingUserFriendRequests() {
    try {
      const res = await api.get('api/friends/incomingFriendRequests')
      AppState.incomingFriendRequests = res.data
    } catch (error) {
      logger(error)
    }
  }

  async getOutgoingUserFriendRequests() {
    const res = await api.get('api/friends/outgoingFriendRequests')
    AppState.outgoingFriendRequests = res.data
  }

  async getUserFriends() {
    try {
      const res = await api.get('api/friends')
      AppState.friends = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  // post, put, and delete methods

  async sendFriendRequest(activeAccountId) {
    try {
      const friendRequest = {
        accountId: activeAccountId
      }
      await api.post('api/friends', friendRequest)
    } catch (error) {
      logger.error(error)
    }
  }

  async approveFriendRequest(friendRequestId) {
    try {
      await api.put('api/friends/friendRequests/approve/' + friendRequestId)
    } catch (error) {
      logger.error(error)
    }
  }

  async denyFriendRequest(friendRequestId) {
    try {
      await api.put('api/friends/friendRequests/deny/' + friendRequestId)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const friendService = new FriendService()
