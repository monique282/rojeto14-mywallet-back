import { Router } from "express";
import { transações } from "../controllers/controlTransacao.js";
import { teste } from "../controllers/teste.js";
import { validarToken } from "../middlewares/validarToken.js";

const transaçõesRouter = Router();

// rota para fazer o login
transaçõesRouter.get("/home", validarToken , transações);
transaçõesRouter.post("/home", validarToken , teste);
export default transaçõesRouter