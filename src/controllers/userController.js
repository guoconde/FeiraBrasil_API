import db from '../db.js'

export async function infoUser(req,res){
    const { user } = res.locals
    
    res.send(user)
}

export async function saveInfo(req,res){
    const { user } = res.locals
    
    try {
        await db.collection("users").updateOne({
            _id: user._id
        },{
            $set: {info:req.body}
        })
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function getHistoric(req,res){
    const { user } = res.locals
    
    try {
        const historic = await db.collection("purchases").find({userId:user._id}).toArray()
        res.send(historic)
    } catch (error) {
        res.status(500).send(error)
    }
}