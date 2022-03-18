import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    author: {
      type: String,
    },
    body: {
      type: String,
    },
    date: {
      type: Date
    },
    likes: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

let Comment = mongoose.model("Comment", commentSchema);

export default Comment;
