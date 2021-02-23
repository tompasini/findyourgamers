import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { friendService } from '../services/FriendService'

export class FriendController extends BaseController {
  constructor() {
    super('api/friends')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/friendrequests', this.getUserFriendRequests)
      .post('', this.sendFriendRequest)
  }

  // get methods

  async getUserFriendRequests(req, res, next) {
    try {
      const friendRequests = await friendService.getUserFriendRequests(req.userInfo.id)
      res.send(friendRequests)
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
      const friendRequest = await friendService.sendFriendRequest(req.body)
      res.send(friendRequest)
    } catch (error) {
      next(error)
    }
  }
}
