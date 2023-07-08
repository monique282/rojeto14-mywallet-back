// esse arquivo serve pra chamar dentro da pasta controllers o que eu quero
// lebrando que essa pasta vai ser enviada para a pasta indexRotas

import { Router } from "express";
import { login } from "../controllers/controlLogin.js";
import { validarJoiParaTodos } from "../middlewares/validarJoi.js";
import { seTaCertoLogin } from "../schemas/validarLoginCadastro.js";

const loginRouter = Router();

// rota para fazer o login
loginRouter.post("/", validarJoiParaTodos(seTaCertoLogin), login);

export default loginRouter