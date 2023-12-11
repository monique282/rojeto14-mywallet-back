
import { Router } from "express";
import { login } from "../controllers/controllerLogin.js";
import { validateJoiForAll } from "../middlewares/validateJoi.js";
import { correctLogin } from "../schemas/validateLoginRegistes.js";

const routerLogin = Router();

routerLogin.post("/", validateJoiForAll(correctLogin), login);

export default routerLogin