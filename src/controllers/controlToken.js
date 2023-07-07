import { db } from '../app.js';

export async function token (req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }
    try {
        const sessao = await db.collection("sessao").findOne({ token });
        if (!sessao) {
            return res.sendStatus(401);
        }
        const usuario = await db.collection("usuarios").findOne({ _id: sessao.idUsuario });
        delete usuario.senha;
        res.send(usuario);
    } catch (err) {
        res.status(500).send(err.message);
    }

}