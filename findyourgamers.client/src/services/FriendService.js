import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class FriendService {
  // get methods
  async getUserFriendRequests() {
    try {
      const res = await api.get('api/friends/friendrequests')
      AppState.friendRequests = res.data
    } catch (error) {
      logger(error)
    }
  }

  // post, put, and delete methods
}

export const friendService = new FriendService()
