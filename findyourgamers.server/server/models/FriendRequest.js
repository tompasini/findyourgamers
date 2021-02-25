import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FriendRequest = new Schema(
  {
    accountId: { type: String, ref: 'Account', required: true },
    requestorId: { type: String, ref: 'Account' },
    requestorName: { type: String },
    requestorPicture: { type: String },
    isApproved: { type: Boolean }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)
export default FriendRequest
