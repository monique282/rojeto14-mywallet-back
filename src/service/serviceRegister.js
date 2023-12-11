import bcrypt from 'bcrypt';
import { repositoryregister } from '../repositories/repositoryRegister.js';

async function register(name, email, password) {
    try {
        const user = await repositoryregister.verificationUser(email);
        if (user) {
            throw { status: 409, message: "Já existe um usuário com este email" };
        }
        const encryptedPassword = bcrypt.hashSync(password, 2);
        const register = await repositoryregister.register(name, email, encryptedPassword);

        return register;
    } catch (error) {
        throw error;
    }
}

export const registerService = { register };
