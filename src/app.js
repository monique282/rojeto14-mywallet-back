import express, { Router } from "express";
import cors from "cors";
import router from "./Routes/indexRotas.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)


const port = process.env.PORT || 5000
// cerve pra deixar a aplicação ligada na porta escolhida
app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`));






