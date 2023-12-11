import { repositoryregister } from "../repositories/repositoryRegister.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { repositoryLogin } from "../repositories/repositoryLogin.js";

async function login(email, password) {
    try {
        const user = await repositoryregister.verificationUser(email);
        if (!user) {
            throw { status: 404, message: "Usuário não cadastrado" };
        }
        const correctPassword = bcrypt.compareSync(password, user.encryptedPassword);

        if (!correctPassword) {
            throw { status: 401, message: "Senha incorreta" };
        }
        const token = uuid();
        await repositoryLogin.login(token, user._id, email);
        return { token, name: user.name };
    } catch (error) {
        throw error;
    }
};

export const serviceLogin = { login };
