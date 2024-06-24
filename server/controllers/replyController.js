/** @format */

import { deleteReply, flagReply } from "../DAOs/replyDao.js";

export const deleteReplyController = async (req, res) => {
	const { replyId } = req.params;

	try {
		const reply = await deleteReply(replyId);
		res.json(reply);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const flagReplyController = async (req, res) => {
	const { replyId } = req.params;
	try {
		const reply = await flagReply(replyId);
		res.json(reply);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
