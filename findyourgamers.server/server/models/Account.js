import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Account = new Schema(
  {
    subs: [{ type: String, unique: true }],
    _id: { type: String, required: true },
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    games: { type: String, default: '' },
    platforms: { type: String, default: '' },
    tvshowsandmovies: { type: String, default: '' },
    hobbiesandinterests: { type: String, default: '' },
    about: { type: String, default: '' },
    lookingFor: { type: String, default: '' }

    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
)

export default Account
