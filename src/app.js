import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import joi from "joi";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port = 5000;
// cerve pra deixar a aplicação ligada na porta escolhida
app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))
// conexão com o banco de dados
const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;
mongoClient.connect()
    .then(() => db = mongoClient.db())
    .catch((err) => console.log(err.message));

// fazer cadastro
app.post("/cadastro", async (req, res) => {
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

});


// fazer o login

app.post("/", async (req, res) => {
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
            return res.status(404).send({message:"Usuario não cadastrado"})
        };
        // vericiar se a senha esta correta
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha)
        if (!senhaCorreta) {
            return res.status(401).send({message:"Senha incorreta"});
        };
        // token de altorização pra entrar no
        const token = uuid();
        const altori ={
            token,
            idUsuario: usuario._id
        }
        await db.collection("sessao").insertOne({altori})
        return res.status(200).send(token);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
})

