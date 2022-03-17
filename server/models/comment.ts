
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
    likes: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

let Comment = mongoose.model("comment", commentSchema);

export default Comment
