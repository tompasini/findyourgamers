import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FriendRequest = new Schema(
  {
    accountId: { type: String, ref: 'Account', required: true },
    accountName: { type: String, required: true },
    accountPicture: { type: String, required: true },
    requestorId: { type: String, ref: 'Account', required: true },
    requestorName: { type: String, required: true },
    requestorPicture: { type: String, required: true },
    isApproved: { type: Boolean }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)
export default FriendRequest
