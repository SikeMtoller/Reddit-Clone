import * as mongoose from "mongoose";
import Comment from "./comment";
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    comments: [{ type: Comment }],
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;
