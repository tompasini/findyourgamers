import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { friendService } from '../services/FriendService'
import { accountService } from '../services/AccountService'

export class FriendController extends BaseController {
  constructor() {
    super('api/friends')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserFriends)
      .get('/incomingFriendRequests', this.getIncomingUserFriendRequests)
      .get('/outgoingFriendRequests', this.getOutgoingUserFriendRequests)
      .post('', this.sendFriendRequest)
      .put('/friendRequests/approve/:friendRequestId', this.approveFriendRequest)
      .put('/friendRequests/deny/:friendRequestId', this.denyFriendRequest)
  }

  // get methods

  async getUserFriends(req, res, next) {
    try {
      const friends = await friendService.getUserFriends(req.userInfo.id)
      res.send(friends)
    } catch (error) {
      next(error)
    }
  }

  async getIncomingUserFriendRequests(req, res, next) {
    try {
      const incomingFriendRequests = await friendService.getIncomingUserFriendRequests(req.userInfo.id)
      res.send(incomingFriendRequests)
    } catch (error) {
      next(error)
    }
  }

  async getOutgoingUserFriendRequests(req, res, next) {
    try {
      const outgoingFriendRequests = await friendService.getOutgoingUserFriendRequests(req.userInfo.id)
      res.send(outgoingFriendRequests)
    } catch (error) {
      next(error)
    }
  }

  // post, put, and delete methods

  async sendFriendRequest(req, res, next) {
    try {
      req.body.requestorId = req.userInfo.id
      req.body.requestorName = req.userInfo.nickname
      req.body.requestorPicture = req.userInfo.picture
      const account = await accountService.getActiveAccount(req.body.accountId)
      req.body.accountName = account.name
      req.body.accountPicture = account.picture
      const friendRequest = await friendService.sendFriendRequest(req.body)
      res.send(friendRequest)
    } catch (error) {
      next(error)
    }
  }

  async approveFriendRequest(req, res, next) {
    try {
      const approved = await friendService.approveFriendRequest(req.params.friendRequestId)
      res.send(approved)
    } catch (error) {
      next(error)
    }
  }

  async denyFriendRequest(req, res, next) {
    try {
      const denied = await friendService.denyFriendRequest(req.params.friendRequestId)
      res.send(denied)
    } catch (error) {
      next(error)
    }
  }
}
