import joi from "joi"

const creditCardSchema = joi.object({
    number: joi.string().required(),
    name: joi.string().required(),
    month: joi.number().required(),
    year: joi.number().required(),
    cvv: joi.number().required(),
    installment: joi.string().required()
});

export default creditCardSchema