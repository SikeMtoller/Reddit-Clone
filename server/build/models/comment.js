"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let commentSchema = new Schema({
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
}, { timestamps: true });
let Comment = mongoose.model("Comment", commentSchema);
exports.default = Comment;
//# sourceMappingURL=comment.js.map