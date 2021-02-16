import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('api/accounts')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllAccounts)
      .get('/myaccount', this.getUserAccount)
      .get('/:accountId', this.getActiveAccount)
      .put('/:accountId', this.editResponses)
  }

  // get methods

  async getAllAccounts(req, res, next) {
    try {
      const accounts = await accountService.getAllAccounts()
      res.send(accounts)
    } catch (error) {
      next(error)
    }
  }

  async getActiveAccount(req, res, next) {
    try {
      const account = await accountService.getActiveAccount(req.params.accountId)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  // post, put, and delete methods

  async editResponses(req, res, next) {
    try {
      const editedAccount = await accountService.editResponses(req.body, req.params.accountId, req.userInfo.id)
      res.send(editedAccount)
    } catch (error) {
      next(error)
    }
  }
}
