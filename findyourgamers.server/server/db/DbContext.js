import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import QuestionSchema from '../models/Question'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Question = mongoose.model('Question', QuestionSchema);
}

export const dbContext = new DbContext()
