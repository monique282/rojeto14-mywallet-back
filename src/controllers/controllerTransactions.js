import httpStatus from 'http-status';
import { serviceTransactions } from '../service/serviceTransactions.js';

export async function listTransactions(req, res) {
    const { token } = res.locals;
    try {
        const transaction = await serviceTransactions.listTransactions(token)
        res.status(httpStatus.CREATED).send(transaction)
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Erro interno do servidor");
    }
};

export async function outputInput(req, res) {
    const { value, description, type } = req.body;
    const { token } = res.locals;
    await serviceTransactions.outputInput(value, description, type, token);
    res.sendStatus(httpStatus.CREATED);
};