import * as mongoose from "mongoose";
let Schema = mongoose.Schema;
const Post = require("./m_post");

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  posts: [
    { type: Schema.Types.ObjectId, ref: Post, required: true, default: [] },
  ],
  
});

let User = mongoose.model("User", userSchema);

module.exports = User;
