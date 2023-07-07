import { Router } from "express";
import { token } from "../controllers/controlToken.js";

const tokenRouter = Router();

// ver os usuarios logados
tokenRouter.get("/logado", token)

export default tokenRouter