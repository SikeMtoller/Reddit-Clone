"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Comment = require("./m_comment");
let Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
    },
    body: {
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
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: Comment,
            required: true,
            default: [],
        },
    ],
    image: {
        type: String,
    },
}, { timestamps: true });
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
//# sourceMappingURL=m_post.js.map