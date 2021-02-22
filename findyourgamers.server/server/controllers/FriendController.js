import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { friendService } from '../services/FriendService'

export class FriendController extends BaseController {
  constructor() {
    super('api/friends')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.sendFriendRequest)
  }

  // get methods

  // post, put, and delete methods

  async sendFriendRequest(req, res, next) {
    try {
      const friendRequest = await friendService.sendFriendRequest(req.userInfo, req.body)
      res.send(friendRequest)
    } catch (error) {
      next(error)
    }
  }
}
