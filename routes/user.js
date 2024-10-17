import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
  getProfile,
} from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";

// create a router
const userRouter = Router();

// define routes
userRouter.post("/users/register", registerUser);
// isauthenticated approves before the a user logs out, is/ update, its checking if youre authenticated
userRouter.post("/users/login", loginUser);
userRouter.get("/users/me", isAuthenticated, getProfile);

userRouter.post("/users/logout", isAuthenticated, logoutUser);

userRouter.patch("/users/me", userAvatarUpload.single("avatar"), updateProfile);

// export routes
export default userRouter;
