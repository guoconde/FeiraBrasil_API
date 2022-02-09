import bcrypt from "bcrypt"
import db from '../db.js'

export async function signUp (req, res)  {
    const user = req.body;
    
    try {
        const participant = await db.collection("users").findOne({email:user.email})
        if(participant) return res.status(409).send("Participante já cadastrado")

        await db.collection("users").insertOne({...user, password: bcrypt.hashSync(user.password, 10)})
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error)
    }
}