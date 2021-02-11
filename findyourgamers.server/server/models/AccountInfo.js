import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const AccountInfo = new Schema(
  {
    questionId: { type: ObjectId, ref: 'Question', required: true },
    accountId: { type: ObjectId, ref: 'Account', required: true },
    respone: { type: String, required: false }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)

export default AccountInfo
