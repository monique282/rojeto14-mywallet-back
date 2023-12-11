import { db } from '../dataBase/connectionDb.js';

export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }
    try {
        const session = await db.collection("sessao").findOne({ token });
        if (!session) {
            return res.sendStatus(401);
        }
        res.locals.token = token
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}
