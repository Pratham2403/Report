import { Router } from "express";
import userRouter from "./userRoute.js";
import postRouter from "./postRoute.js";
import commentRouter from "./commentRoute.js";
import replyRouter from "./replyRoute.js";
import searchRouter from "./searchRoute.js";

const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/post", postRouter);
appRouter.use("/comment", commentRouter);
appRouter.use("/reply", replyRouter);
appRouter.use("/search", searchRouter);

export default appRouter;