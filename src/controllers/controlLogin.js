import bcrypt from 'bcrypt';
import { db } from '../dataBase/conecsao.js';
import joi from "joi";
import { v4 as uuid } from 'uuid';

export async function login(req, res) {
    const { email, senha } = req.body

    // fazer as verificaçoes
    const seTaCerto = joi.object({
        email: joi.string().email().required(),
        senha: joi.string().required().min(3)
    })
    const validarSeTaCerto = seTaCerto.validate(req.body, { abortEarly: false });
    // o abortEarly serve pra procurar todos os requisitos que nao passou no joi
    if (validarSeTaCerto.error) {
        const erroEspecifico = validarSeTaCerto.error.details.map(qual => qual.message);
        return res.status(422).send(erroEspecifico);

    };


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
            idUsuario: usuario._id
        })
        return res.status(200).send(token);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}