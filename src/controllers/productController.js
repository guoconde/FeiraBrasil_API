import { ObjectId } from "mongodb";
import db from "../db.js";

export async function renderProducts(req, res) {

    try {
        const products = await db.collection('products').find().toArray()
        res.send(products)

    } catch (error) {
        res.sendStatus(error)
    }

}

export async function favoriteProduct(req, res) {

    const { id } = req.params
    const { userId } = req.body
    const { isFavorite } = req.body

    try {
        const product = await db.collection('products').findOne({ _id: new ObjectId(id) })
        const {favorites} = await db.collection('users').findOne({ _id: new ObjectId(userId)})
        
        if(isFavorite) {
            await db.collection('users').updateOne({ _id: new ObjectId(userId) }, { $set: { favorites: [...favorites, product] } })
        } else {
            const teste = favorites.filter(el => el._id != id)
            await db.collection('users').updateOne({ _id: new ObjectId(userId) }, { $set: { favorites: teste } })
        }

        res.send(favorites)
    } catch (error) {

    }

}