import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

let postSchema = new Schema({
  fullname: {
    type: String,
    required: true,
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
});

let Post = mongoose.model("post", postSchema);

module.exports = Post;
