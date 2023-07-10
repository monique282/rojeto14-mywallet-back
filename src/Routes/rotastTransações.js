import { Router } from "express";
import { listaTransações, SaidaEntrada} from "../controllers/controlTransacao.js";
import { validarToken } from "../middlewares/validarToken.js";

const transaçõesRouter = Router();

// rota para fazer o login
transaçõesRouter.get("/home", validarToken , listaTransações);
transaçõesRouter.post("/nova-transacao/:tipo", validarToken , SaidaEntrada);

export default transaçõesRouter