import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import QuestionSchema from '../models/Question'
import AccountInfoSchema from '../models/AccountInfo'
import FriendRequestSchema from '../models/FriendRequest'
import FriendConnectionSchema from '../models/FriendConnection'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Question = mongoose.model('Question', QuestionSchema);
  AccountInfo = mongoose.model('AccountInfo', AccountInfoSchema)
  FriendRequest = mongoose.model('FriendRequest', FriendRequestSchema)
  FriendConnection = mongoose.model('FriendConnection', FriendConnectionSchema)
}

export const dbContext = new DbContext()
