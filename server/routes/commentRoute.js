import {deleteCommentController, flagCommentController, getCommentByPostId} from '../controllers/commentController.js';
import { Router } from "express";

const commentRouter = Router();

// Example endpoint
commentRouter.get('/getCommentsByPost/:postId', getCommentByPostId);

commentRouter.patch('/flagComment/:commentId', flagCommentController); 
commentRouter.delete('/deleteComment/:commentId', deleteCommentController);

export default commentRouter;