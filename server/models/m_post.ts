import * as mongoose from "mongoose";
const Comment = require("../models/m_comment");
let Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      // Add Logged-in User
      type: String,
    },
    community: {
      //Take from Form
      type: String,
    },
    comments: {
      posts: [
        {
          type: Schema.Types.ObjectId,
          ref: Comment,
          required: true,
          default: [],
        },
      ],
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("Post", postSchema);

module.exports = Post;
