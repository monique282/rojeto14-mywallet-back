import { registerService } from '../service/serviceRegister.js';
import httpStatus from "http-status";

export async function register(req, res) {
    const { name, email, password } = req.body;

    try {
        await registerService.register(name, email, password);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        if (error.status) {
            res.status(error.status).send(error.message);
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno do servidor");
        }
    }
};
