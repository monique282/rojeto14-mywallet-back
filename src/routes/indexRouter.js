
import { Router } from "express";
import routerRegister from "./routerRegister.js";
import routerDelete from "./routerDelete.js";
import routerLogin from "./routerLogin.js";
import routerTransactions from "./routerTransactions.js";

const router = Router();

router.use(routerRegister);
router.use(routerLogin);
router.use(routerTransactions);
router.use(routerDelete);

export default router