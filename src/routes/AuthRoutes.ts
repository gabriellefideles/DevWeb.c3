import { Router } from "express";
import * as AuthController from "../controllers/AuthController";

const AuthRouter = Router();

AuthRouter.post("/signup", AuthController.registerUser);
AuthRouter.post("/signin", AuthController.loginUser);

export default AuthRouter;
