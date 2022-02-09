import signUpSchema from "../schemas/signUpSchema.js"
import { stripHtml } from "string-strip-html"
import signInSchema from "../schemas/signInSchema.js"

function sanitizeString(string){
    return (stripHtml(string).result).trim()
}

const schemas = {
    "/cadastrar": signUpSchema,
    "/entrar": signInSchema
}

export default async function validateSchemaMiddleware(req, res, next){
    const { body } = req
    const schema = schemas["/"+req.path.split("/")[1]]
    
    Object.keys(body).forEach( key => {
        if(typeof(body[key]) === "string") body[key] = sanitizeString(body[key])
    })

    const validation = schema.validate(body, { abortEarly: false })
    if(validation.error) return res.status(422).send(validation.error.message)

    next()
}