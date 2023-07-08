// esse arquivo aqui serve para executar o pedido de todas as transações
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um post para pegas as transações

import { db } from '../dataBase/conecsao.js';



export async function transações(req, res) {
    const { email } = req.body;

   // receber o email pelo body
    try {
        // validar o usuario
        // verificar pelo email 
        const transacao = await db.collection("operacao").find({ email }).toArray();
       
        return res.send(transacao);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}