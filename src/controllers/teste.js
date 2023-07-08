import { db } from '../dataBase/conecsao.js';



export async function teste(req, res) {
    const { valor, descricao } = req.body;

    // receber o email pelo body
    try {
        // validar o usuario
        // verificar pelo email 
        await db.collection("usuarios").insertOne({ valor, descricao });
        return res.sendStatus(201);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}