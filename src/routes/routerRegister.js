import { Router } from "express";
import { register } from "../controllers/controllerRegister.js";
import { validateJoiForAll } from "../middlewares/validateJoi.js";
import { correctRegister } from "../schemas/validateLoginRegistes.js";

const routerRegister = Router();

routerRegister.post("/cadastro",validateJoiForAll(correctRegister), register);

export default routerRegister;