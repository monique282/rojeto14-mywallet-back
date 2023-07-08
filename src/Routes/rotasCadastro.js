// esse arquivo serve pra chamar dentro da pasta controllers o que eu quero
// lebrando que essa pasta vai ser enviada para a pasta indexRotas

import { Router } from "express";
import { cadastro } from "../controllers/controlCadastro.js";
import { validarJoiParaTodos } from "../middlewares/validarJoi.js";
import { seTaCertoCadastro } from "../schemas/validarLoginCadastro.js";

const cadastroRouter = Router();

// fazer o cadastro
cadastroRouter.post("/cadastro", validarJoiParaTodos(seTaCertoCadastro), cadastro);

export default cadastroRouter;