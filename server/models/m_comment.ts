import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    author: {
      type: String,
    },
    body: {
      type: String,
    },
    likes: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment
