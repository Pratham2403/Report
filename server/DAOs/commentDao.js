/** @format */

import Comment from "../models/commentModel.js";
import Reply from "../models/replyModel.js";

export const deleteComment = async (commentId) => {
	const comment = await Comment.findById(commentId);
	if (comment) {
		await Reply.deleteMany({ commentId: commentId });
		await comment.deleteOne();
	}
	return comment;
};

export const flagComment = async (commentId) => {
	return await Comment.findByIdAndUpdate(commentId, { isFlagged: true });
};

export const getCommentsByPostId = async (postId) => {
	try {
		const comments = await Comment.find({ postId }).populate("replies");
		return comments;
	} catch (error) {
		throw new Error("Error fetching comments");
	}
};
