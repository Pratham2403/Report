/** @format */

import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";
import Reply from "../models/replyModel.js";

export const getAllPosts = async (userId) => {
	return await Post.find({ authorId: userId });
};

export const deletePost = async (postId) => {
	const post = await Post.findById(postId);
	if (post) {
		// Find all comments related to the post
		const comments = await Comment.find({ postId: postId });

		// Delete all replies related to those comments
		for (const comment of comments) {
			await Reply.deleteMany({ commentId: comment._id });
		}

		// Delete all comments related to the post
		await Comment.deleteMany({ postId: postId });

		// Delete the post itself
		await post.deleteOne();
	}
	return post;
};

export const flagPost = async (postId) => {
	return await Post.findByIdAndUpdate(
		postId,
		{ isFlagged: true },
		{ new: true }
	);
};
