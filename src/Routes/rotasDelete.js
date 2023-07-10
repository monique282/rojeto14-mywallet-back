// esse arquivo serve pra chamar dentro da pasta controllers o que eu quero
// lebrando que essa pasta vai ser enviada para a pasta indexRotas

import { Router } from "express";
import { delet } from "../controllers/controlDelete.js";
import { validarToken } from "../middlewares/validarToken.js";


const deleteRouter = Router();

// fazer o cadastro
deleteRouter.delete("/home", validarToken, delet);

export default deleteRouter;