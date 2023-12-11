import { repositoryDelete } from "../repositories/repositoryDelete.js";

async function delet(token) {
    const delet = await repositoryDelete.delet(token)
    return delet
}

export const serviceDelete = { delet }