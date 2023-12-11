import { db } from '../dataBase/connectionDb.js';
import dayjs from 'dayjs';

async function listTransactions(token) {
    const session = await db.collection("sessao").findOne({ token });
    const transaction = await db.collection("operacao").find({ email: session.email }).sort({ _id: -1 }).toArray();
    return transaction;
};

async function outputInput(value, description, type, token) {
    const session = await db.collection("sessao").findOne({ token });
    const response = await db.collection("operacao").insertOne({ value, description, type, data: dayjs().format('DD/MM'), email: session.email });
    return response;
};

export const repositpruTransactions = { listTransactions, outputInput }