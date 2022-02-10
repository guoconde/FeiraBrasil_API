import joi from "joi"

const infoSchema = joi.object({
    cpf: joi.string().required(),
    cep: joi.string().required(),
    adress: joi.string().required()
});

export default infoSchema