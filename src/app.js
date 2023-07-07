import express from "express";
import cors from "cors";
import cadastroRouter from "./Routes/RotasCadastro.js";
import loginRouter from "./Routes/RotasLogin.js";
import tokenRouter from "./Routes/RotasToken.js";


const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
app.use(cadastroRouter);
app.use(loginRouter);
app.use(tokenRouter);
// cerve pra deixar a aplicação ligada na porta escolhida
app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))
// conexão com o banco de dados






