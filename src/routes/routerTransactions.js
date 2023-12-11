import { Router } from "express";
import { listTransactions, outputInput } from "../controllers/controllerTransactions.js";
import { validateToken } from "../middlewares/validateToken.js";
import { validateJoiForAll } from "../middlewares/validateJoi.js";
import { correctValue } from "../schemas/validateLoginRegistes.js";

const routerTransactions = Router();

routerTransactions.get("/home", validateToken, listTransactions);
routerTransactions.post("/nova-transacao/:tipo", validateToken, validateJoiForAll(correctValue), outputInput);

export default routerTransactions