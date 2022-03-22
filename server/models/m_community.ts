import { ObjectId } from "mongodb";
import * as mongoose from "mongoose";
let Schema = mongoose.Schema;
const Post = require("./m_post");

const communitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    posts: [
      { type: Schema.Types.ObjectId, ref: Post, required: true, default: [] },
    ],

    about: {
      type: String,
      required: true,
    },
    numberOfMembers: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
