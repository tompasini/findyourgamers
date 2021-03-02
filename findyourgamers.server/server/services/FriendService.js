import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class FriendService {
  // get methods

  async getUserFriends(userId) {
    // finds the user's friend connections
    const friendConnections = await dbContext.FriendConnection.find({ accountId1: userId } || { accountId2: userId })
    // creates collections for the the friendIds, and friends which will store the friend accounts
    const friendIds = []
    const friends = []
    // iterates through the friend connections, and pushes all accountId1's and accountId2's that aren't the user's id into the friendIds array. In other words, their friends.
    for (let i = 0; i < friendConnections.length; i++) {
      if (friendConnections[i]._doc.accountId1 !== userId) {
        friendIds.push(friendConnections[i]._doc.accountId1)
      }
      if (friendConnections[i]._doc.accountId2 !== userId) {
        friendIds.push(friendConnections[i]._doc.accountId2)
      }
    }
    // iterates through the friendIds array, finds the account by each id, and pushes that account into the friends array. The friends array is then returned, ending the function.
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
