
import joi from "joi";

export const correctLogin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(3)
});

export const correctRegister = joi.object({
    name: joi.string().min(1).required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(3)
});

export const correctValue = joi.object({
    value: joi.number().positive().precision(2).required(),
    description: joi.string().min(1).max(20).required(),
    type: joi.string().valid("entrada", "saida").required(),
});