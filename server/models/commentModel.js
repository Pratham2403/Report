/** @format */

import { Schema, model } from "mongoose";

const commentSchema = new Schema({
	postId: {
		type: Schema.Types.ObjectId,
		ref: "Post",
		required: true,
	},
	authorId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	likes: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
	replies: [
		{
			type: Schema.Types.ObjectId,
			ref: "Reply",
		},
	],
	isDeleted: {
		type: Boolean,
		default: false,
	},
	isFlagged: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const Comment = model("Comment", commentSchema);
export default Comment;
