import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  // get methods

  async getAllAccounts() {
    try {
      const res = await api.get('api/accounts')
      AppState.accounts = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveAccount(accountId) {
    try {
      const res = await api.get('api/accounts/' + accountId)
      AppState.activeAccount = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getAccount() {
    try {
      const res = await api.get('api/accounts/myaccount')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  // post, put, and delete methods
}

export const accountService = new AccountService()
