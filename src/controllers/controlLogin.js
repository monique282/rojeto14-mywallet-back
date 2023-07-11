// esse arquivo aqui serve para executar o ligin
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um post para faser o login

import bcrypt from 'bcrypt';
import { db } from '../dataBase/conecsao.js';
import { v4 as uuid } from 'uuid';


export async function login(req, res) {
    const { email, senha } = req.body

    try {
        // validar o usuario
        // verificar pelo email 
        const usuario = await db.collection("usuarios").findOne({ email });
        // se o usuario fornecido nao estiver no sevidor
        if (!usuario) {
            return res.status(404).send({ message: "Usuario não cadastrado" })
        };
        // vericiar se a senha esta correta
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha)
        if (!senhaCorreta) {
            return res.status(401).send({ message: "Senha incorreta" });
        };
        // token de altorização pra entrar no
        const token = uuid();

        await db.collection("sessao").insertOne({
            token,
            idUsuario: usuario._id,
            email
        })
        return res.status(200).send({ token: token, nome: usuario.nome });
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}