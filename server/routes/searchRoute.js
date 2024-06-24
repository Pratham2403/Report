import { Router } from "express";
import {searchUser} from "../controllers/searchController.js";

const searchRouter = Router();

searchRouter.get("/", searchUser);

export default searchRouter;