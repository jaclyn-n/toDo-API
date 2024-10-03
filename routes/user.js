import { Router } from "express";
import { logIn, logOut, register } from "../controllers/user.js";

// create a router
const userRouter = Router();

// define routes
userRouter.post("/users/register", register);

userRouter.post("/users/login", logIn);

userRouter.post("/users/logout", logOut);

// export routes
export default userRouter;
