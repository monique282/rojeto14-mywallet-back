import { Router } from "express";
import { login } from "../controllers/controlLogin.js";

const loginRouter = Router();

// rota para fazer o login
loginRouter.post("/", login);

export default loginRouter