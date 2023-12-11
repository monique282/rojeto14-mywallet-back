import { db } from '../dataBase/connectionDb.js';

async function register(name, email, encryptedPassword) {
    const register = await db.collection("usuarios").insertOne({ name, email,encryptedPassword });
    return register
};

async function verificationUser(email) {
    const user = await db.collection("usuarios").findOne({ email });
    return user
};

export const repositoryregister = { register, verificationUser }