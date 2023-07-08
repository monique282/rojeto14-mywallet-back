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
