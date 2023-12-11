
import { db } from '../dataBase/connectionDb.js';

async function login(token, id, email) {
    const login = await db.collection("sessao").insertOne({
        token,
        idUsuario: id,
        email
    })
    return login
};

export const repositoryLogin = { login }