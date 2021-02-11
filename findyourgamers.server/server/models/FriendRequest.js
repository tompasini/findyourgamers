import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const FriendRequest = new Schema(
  {
    accountId: { type: ObjectId, ref: 'Account', required: true },
    requestorId: { type: ObjectId, ref: 'Account', required: true },
    accepted: { type: Boolean }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)

export default FriendRequest
