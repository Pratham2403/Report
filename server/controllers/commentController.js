/** @format */

import {
	deleteComment,
	flagComment,
	getCommentsByPostId,
} from "../DAOs/commentDao.js";

export const deleteCommentController = async (req, res) => {
	const { commentId } = req.params;
	try {
		const comment = await deleteComment(commentId);
		res.json(comment);
	} catch (err) {
		res.status(500).json({ message: "Error deleting comment from deleteCommentController"});
	}
};

export const flagCommentController = async (req, res) => {

	const { commentId } = req.params;

	try {
		const comment = await flagComment(commentId);
		console.log(comment);
		res.json(comment);
	} catch (err) {
		res.status(500).json({ message: "Error flagging comment from flagCommentController"});
	}
};

export const getCommentByPostId = async (req, res) => {

	const { postId } = req.params;
	try {
		const comments = await getCommentsByPostId(postId);
		res.status(200).send(comments);
	} catch (error) {
		console.error("Error fetching comments:", error);
		res.status(500).send({message: "Failed to fetch comments" });
	}

};
