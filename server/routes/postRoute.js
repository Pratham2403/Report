/** @format */

import {
	deletePostController,
	flagPostController,
	getAllPostsController,
} from "../controllers/postController.js";
import { Router } from "express";

const postRouter = Router();

postRouter.get("/getAllPosts/:userId", getAllPostsController);
postRouter.patch("/flagPost/:postId", flagPostController);
postRouter.delete("/deletePost/:postId", deletePostController);

export default postRouter;
