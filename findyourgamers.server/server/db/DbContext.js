import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import QuestionSchema from '../models/Question'
import AccountInfoSchema from '../models/AccountInfo'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Question = mongoose.model('Question', QuestionSchema);
  AccountInfo = mongoose.model('AccountInfo', AccountInfoSchema)
}

export const dbContext = new DbContext()
