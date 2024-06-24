/** @format */
import { Router } from "express";

import {
	deleteReplyController,
	flagReplyController,
} from "../controllers/replyController.js";

const replyRouter = Router();

replyRouter.patch("/flagReply/:replyId", flagReplyController);
replyRouter.delete("/deleteReply/:replyId", deleteReplyController);

export default replyRouter;
