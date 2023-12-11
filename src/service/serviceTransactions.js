import { repositpruTransactions } from '../repositories/repositoryTransactions.js';

async function listTransactions(token) {
    const transaction = await repositpruTransactions.listTransactions(token);
    return transaction
};

async function outputInput(value, description, type, token) {
    const response = await repositpruTransactions.outputInput(value, description, type, token)
    return response
};

export const serviceTransactions = { listTransactions, outputInput }