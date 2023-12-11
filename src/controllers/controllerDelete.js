import httpStatus from "http-status";
import { serviceDelete } from "../service/serviceDelete.js";

export async function delet(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    await serviceDelete.delet(token)
    res.sendStatus(httpStatus.OK);
};