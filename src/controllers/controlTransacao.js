// esse arquivo aqui serve para executar o pedido de todas as transações
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um post para pegas as transações

import { db } from '../dataBase/conecsao.js';
import dayjs from 'dayjs';



export async function listaTransações(req, res) {
    const { email } = req.query;

    // receber o email pelo body
    try {

        // verificar pelo email 
        const transacao = await db.collection("operacao").find({ email }).sort({ _id: -1 }).toArray();

        return res.send(transacao);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}

export async function SaidaEntrada(req, res) {
    const { valor, descricao, tipo } = req.body;

    // receber o email pelo body
    try {
        // validar o usuario
        // verificar pelo email 
        await db.collection("operacao").insertOne({ valor, descricao, tipo, data: dayjs().format('DD/MM') });
        return res.sendStatus(201);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}