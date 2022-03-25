import * as mongoose from "mongoose";
let Schema = mongoose.Schema;
const Post = require("./m_post");
const Community = require("./m_community");
const passportLocalMongoose = require("passport-local-mongoose");
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
    unique: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  about: {
    type: String,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: Post, default: [] }],

  communities: [{ type: Schema.Types.ObjectId, ref: Community, default: [] }],
});

userSchema.plugin(passportLocalMongoose);

let User = mongoose.model("User", userSchema);

module.exports = User;
