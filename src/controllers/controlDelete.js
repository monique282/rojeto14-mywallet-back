// esse arquivo aqui serve para excluir o token do servidor 
// esse arquivo é chamado la em Routes
// esse arquivo aqui é enviado por um delete para apagar o que eu quiser


import { db } from '../dataBase/conecsao.js';



export async function delet (req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {
       
        const deletar = await db.collection("sessao").deleteOne({ token });
    
         return res.sendStatus(200);
    } catch (erro) {
        res.status(500).send(erro.message);
    }
}