import { dbContext } from '../db/DbContext'

class FriendService {
  // get methods

  // post, put, and delete methods

  async sendFriendRequest(userInfo, friendRequest) {
    // this will not auto populate the isAccepted value.
    friendRequest.requestorId = userInfo.id
    return await dbContext.FriendRequest.create(friendRequest)
  }
}

export const friendService = new FriendService()
