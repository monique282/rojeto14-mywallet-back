// esse arquivo serve pra unir todos que eu estou escrevendo Rotas que esta dentro de Routes
// lebrando que todas as Rotas aqui vai pro app

import { Router } from "express";

import cadastroRouter from "./rotasCadastro.js";
import deleteRouter from "./rotasDelete.js";
import loginRouter from "./rotasLogin.js";
import transaçõesRouter from "./rotastTransações.js";



const router = Router()

router.use(cadastroRouter);
router.use(loginRouter);
router.use(transaçõesRouter);
router.use(deleteRouter)

export default router