import { Router } from "express";
import { cadastro } from "../controllers/controlCadastro.js";

const cadastroRouter = Router();

cadastroRouter.post("/cadastro", cadastro);

export default cadastroRouter;