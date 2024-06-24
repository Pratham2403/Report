import { Router } from "express";

import {getAllUsersController} from "../controllers/userController.js";
// import { verifyToken } from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.get("/getuser", getAllUsersController);

export default userRouter;
