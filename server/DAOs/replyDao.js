
import Reply from "../models/replyModel.js";

export const deleteReply = async (replyId) => {
	return await Reply.findByIdAndDelete(replyId);
};

export const flagReply = async (replyId) => {
	return await Reply.findByIdAndUpdate(replyId, { isFlagged: true });
};

