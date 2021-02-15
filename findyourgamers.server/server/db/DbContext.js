import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import FriendConnectionSchema from '../models/FriendConnection'
import FriendRequestSchema from '../models/FriendRequest'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  FriendConnection = mongoose.model('FriendConnection', FriendConnectionSchema)
  FriendRequest = mongoose.model('FriendRequest', FriendRequestSchema)
}

export const dbContext = new DbContext()
