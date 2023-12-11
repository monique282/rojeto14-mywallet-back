
import { Router } from "express";
import { delet } from "../controllers/controllerDelete.js";
import { validateToken } from "../middlewares/validateToken.js";

const routerDelete = Router();

routerDelete.delete("/home", validateToken, delet);

export default routerDelete;