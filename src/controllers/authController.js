import bcrypt from "bcrypt"
import db from '../db.js'
import jwt from 'jsonwebtoken';

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

export async function signIn(req, res) {
    const user = req.body
    
    try {
        const participant = await db.collection("users").findOne({email:user.email})
        
        if(participant && bcrypt.compareSync(user.password, participant.password)){
            let session = await db.collection("sessions").findOne({userId: participant._id})

            if(!session){
                await db.collection("sessions").insertOne({
                    userId: participant._id
                })
                session = await db.collection("sessions").findOne({userId: participant._id})
            }
            
            const data = { session: session._id };
            const chaveSecreta = process.env.JWT_SECRET;
            const token = jwt.sign(data, chaveSecreta);

            return res.status(200).send({token, username:participant.username, userId: participant._id});
        }else{
            return res.status(401).send("Participante não existe")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}