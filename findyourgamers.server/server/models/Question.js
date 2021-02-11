import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Question = new Schema(
  {
    question: { type: String, required: true }
  },
  { timestamps: true, id: true, toJSON: { virtuals: true } }
)

export default Question
