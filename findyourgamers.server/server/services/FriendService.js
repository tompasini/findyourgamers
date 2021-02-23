import { dbContext } from '../db/DbContext'

class FriendService {
  // get methods

  async getUserFriendRequests(userId) {
    return await dbContext.FriendRequest.find({ accountId: userId })
  }

  // post, put, and delete methods

  async sendFriendRequest(friendRequest) {
    // this will not auto populate the isAccepted value.
    return await dbContext.FriendRequest.create(friendRequest)
  }
}

export const friendService = new FriendService()
