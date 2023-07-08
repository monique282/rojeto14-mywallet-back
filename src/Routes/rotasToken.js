// esse arquivo serve pra acessar dentro da pasta controllers o que eu quero
// lebrando que essa pasta vai ser enviada para a pasta indexRotas

import { Router } from "express";
import { token } from "../controllers/controlToken.js";

const tokenRouter = Router();

// ver os usuarios logados
tokenRouter.get("/logado", token)

export default tokenRouter