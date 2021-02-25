import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class FriendService {
  // get methods

  async getUserFriends(userId) {
    const friendConnections = await dbContext.FriendConnection.find({ accountId1: userId } || { accountId2: userId })
    const friendIds = []
    const friends = []
    for (let i = 0; i < friendConnections.length; i++) {
      if (friendConnections[i]._doc.accountId1 !== userId) {
        friendIds.push(friendConnections[i]._doc.accountId1)
      }
      if (friendConnections[i]._doc.accountId2 !== userId) {
        friendIds.push(friendConnections[i]._doc.accountId2)
      }
    }
    for (let i = 0; i < friendIds.length; i++) {
      const friend = await dbContext.Account.findById(friendIds[i])
      friends.push(friend)
    }
    return friends
  }

  async getUserFriendRequests(userId) {
    return await dbContext.FriendRequest.find({ accountId: userId, isApproved: undefined })
  }

  async getFriendRequest(friendRequestId) {
    return await dbContext.FriendRequest.findById(friendRequestId)
  }

  // post, put, and delete methods

  async sendFriendRequest(friendRequest) {
    return await dbContext.FriendRequest.create(friendRequest)
  }

  async approveFriendRequest(friendRequestId) {
    const friendRequest = await this.getFriendRequest(friendRequestId)
    if (friendRequest === null) {
      throw new BadRequest('No friend request to approve.')
    }
    const statusApproved = {
      isApproved: true
    }
    await dbContext.FriendRequest.findByIdAndUpdate(friendRequestId, statusApproved)
    return this.createFriendConnection(friendRequest)
  }

  async denyFriendRequest(friendRequestId) {
    const friendRequest = await this.getFriendRequest(friendRequestId)
    if (friendRequest === null) {
      throw new BadRequest('No friend request to deny.')
    }

    const statusDenied = {
      isApproved: false
    }
    return await dbContext.FriendRequest.findByIdAndUpdate(friendRequestId, statusDenied, { new: true })
  }

  async createFriendConnection(friendRequest) {
    const friendConnection = {
      accountId1: friendRequest.accountId,
      accountId2: friendRequest.requestorId
    }
    return await dbContext.FriendConnection.create(friendConnection)
  }
}

export const friendService = new FriendService()
