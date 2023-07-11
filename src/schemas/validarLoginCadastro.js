 // esse pasta serve para fazer as verificações valodações na hora de fazer login
 // essa pasta é chamada no arquivo middlewares dentro do arquivo validarJoi
 
 import joi from "joi";

 // fazer as verificaçoes validações LOGIN
export const seTaCertoLogin = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().required().min(3)
})

 // fazer as verificaçoes  verificações Cadastro
 export const seTaCertoCadastro = joi.object({
    nome: joi.string().min(1).required(),
    email: joi.string().email().required(),
    senha: joi.string().required().min(3)
})

export const seValorTaCerto = joi.object({
    valor: joi.number().positive().precision(2).required(),
    descricao: joi.string().min(1).max(20).required(),
    tipo: joi.string().valid("entrada", "saida").required(),
    email: joi.string().required()
   
})


