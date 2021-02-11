import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const FriendConnection = new Schema(
  {
    accountId1: { type: ObjectId, ref: 'Account', required: true },
    accountId2: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)

export default FriendConnection
