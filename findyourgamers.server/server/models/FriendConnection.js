import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FriendConnection = new Schema(
  {
    accountId1: { type: String, ref: 'Account', required: true },
    accountId2: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)

export default FriendConnection
