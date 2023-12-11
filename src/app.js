import express, { Router } from "express";
import cors from "cors";
import router from "./routes/indexRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`));






