
import bcrypt from 'bcrypt';
import { db } from '../dataBase/conecsao.js';
import joi from "joi";

export async function cadastro (req, res) {
    // pegar os dados que a pessoa colocou na tela de cadastro
    const { nome, email, senha } = req.body;

    // fazer as verificaçoes
    const seTaCerto = joi.object({
        nome: joi.string().min(1).required(),
        email: joi.string().email().required(),
        senha: joi.string().required().min(3)
    })

    const validarSeTaCerto = seTaCerto.validate(req.body, { abortEarly: false });
    // o abortEarly serve pra procurar todos os requisitos que nao passou no joi
    if (validarSeTaCerto.error) {
        const erroEspecifico = validarSeTaCerto.error.details.map(qual => qual.message);
        return res.status(422).send(erroEspecifico);
    }

    // verificar se o email ja foi castrado
    const usuario = await db.collection("usuarios").findOne({ email });
    // se o usuario fornecido estiver no sevidor
    if (usuario) {
        return res.status(409).send({message:"Já existe um usuario com este email"})
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