"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const Post_1 = require("./Post");
let communityScehma = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    posts: {
        type: [Post_1.default],
        required: true
    },
    about: {
        type: String,
        required: true
    },
    numberOfMembers: {
        type: Number,
        required: true
    },
}, { timestamps: true });
let Community = mongoose.model("Community", communityScehma);
exports.default = Community;
//# sourceMappingURL=community.js.map