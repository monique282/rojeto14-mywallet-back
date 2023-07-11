// esse arquivo aqui serve para executar o pedido de todas as transações
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um post para pegas as transações

import { db } from '../dataBase/conecsao.js';
import dayjs from 'dayjs';



export async function listaTransações(req, res) {

    const { token } = res.locals;
    

    // receber o email pelo body
    try {

        const sessao = await db.collection("sessao").findOne({token});
        // verificar pelo token 
        const transacao = await db.collection("operacao").find({email: sessao.email }).sort({ _id: -1 }).toArray();

        return res.send(transacao);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}

export async function SaidaEntrada(req, res) {
    const { valor, descricao, tipo, email } = req.body;

    try { 

        await db.collection("operacao").insertOne({ valor, descricao, tipo, data: dayjs().format('DD/MM'), email });
        return res.sendStatus(201);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}