// esse arquivo serve para fazer a conecção com o mongo
// esse arquivo é chamado la em em todos os aquivos que presição fazer uma requisição no servido
// esse arquivo é chamado no controllers, nos aquivos que nececitão

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect()
    console.log("Mongo conectado");
} catch (err) {
    (err) => console.log(err.message)
}

export const db = mongoClient.db()