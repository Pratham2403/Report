/** @format */

import { Schema, model } from "mongoose";

const replySchema = new Schema({
	commentId: {
		type: Schema.Types.ObjectId,
		ref: "Comment",
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

const Reply = model("Reply", replySchema);
export default Reply;
