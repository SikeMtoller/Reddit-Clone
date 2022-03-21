"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const m_comment_1 = require("./m_comment");
let Schema = mongoose.Schema;
let postSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    comments: [{ type: m_comment_1.default }],
}, { timestamps: true });
let Post = mongoose.model("post", postSchema);
exports.default = Post;
//# sourceMappingURL=Post.js.map