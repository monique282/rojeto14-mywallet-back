// esse arquivo aqui serve para executar todas as funções que eu preciso
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um post para faser o cadastro


import bcrypt from 'bcrypt';
import { db } from '../dataBase/conecsao.js';


export async function cadastro(req, res) {
    // pegar os dados que a pessoa colocou na tela de cadastro
    const { nome, email, senha } = req.body;

    // verificar se o email ja foi castrado
    const usuario = await db.collection("usuarios").findOne({ email });
    // se o usuario fornecido estiver no sevidor
    if (usuario) {
        return res.status(409).send({ message: "Já existe um usuario com este email" })
    };

    // se tudo estiver certo 
    // cripitografas a senha 
    const senhaSegura = bcrypt.hashSync(senha, 2);
    try {
        // enviar os dados pro servidor pra quando o cadastro der certo
        await db.collection("usuarios").insertOne({ nome, email, senha: senhaSegura });
        return res.sendStatus(201);
    } catch (erro) {
        res.status(500).send(erro.message);
    }

};