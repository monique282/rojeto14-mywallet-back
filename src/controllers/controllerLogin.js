import { serviceLogin } from '../service/serviceLogin.js';
import httpStatus from "http-status";

export async function login(req, res) {
    const { email, password } = req.body
    try {
        const login = await serviceLogin.login(email, password);
        res.status(httpStatus.OK).send(login);
    } catch (error) {
        if (error.status) {
            res.status(error.status).send(error.message);
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno do servidor");
        }
    };
};