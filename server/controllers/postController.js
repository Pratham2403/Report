/** @format */

import { getAllPosts, deletePost, flagPost } from "../DAOs/postDao.js";

export const getAllPostsController = async (req, res) => {
	const { userId } = req.params;
	try {
		const posts = await getAllPosts(userId);
		if (!posts) {
			return res
				.status(404)
				.json({ message: "No posts found from PostController" });
		}
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({
			message: "getAllPostController mein Dikkat ho gayi",
		});
	}
};

export const deletePostController = async (req, res) => {
	const { postId } = req.params;
	try {
		const post = await deletePost(postId);
		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}
		res.json(post);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const flagPostController = async (req, res) => {

	const { postId } = req.params;

	try {
		const post = await flagPost(postId);
		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}
		res.json(post);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
