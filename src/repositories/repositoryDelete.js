import { db } from "../dataBase/connectionDb.js";

async function delet(token) {
    const delet = await db.collection("sessao").deleteOne({ token });
    return delet;
};

export const repositoryDelete = { delet }