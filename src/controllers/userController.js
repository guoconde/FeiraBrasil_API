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
    } catch (error) {
        res.status(500).send(error)
    }
    res.sendStatus(200)
}