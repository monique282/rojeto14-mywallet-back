import { Router } from "express";
import { listaTransações, SaidaEntrada} from "../controllers/controlTransacao.js";
import { validarJoiParaTodos } from "../middlewares/validarJoi.js";
import { validarToken } from "../middlewares/validarToken.js";
import { seValorTaCerto } from "../schemas/validarLoginCadastro.js";

const transaçõesRouter = Router();

// rota para fazer o login
transaçõesRouter.get("/home", validarToken , listaTransações);
transaçõesRouter.post("/nova-transacao/:tipo", validarToken , validarJoiParaTodos(seValorTaCerto), SaidaEntrada);

export default transaçõesRouter