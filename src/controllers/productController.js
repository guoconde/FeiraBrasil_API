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
    const { favorite } = req.body

    try {
        await db.collection('products').updateOne({ _id: new ObjectId(id) }, { $set: { favorite: favorite } })

        const product = await db.collection('products').findOne({ _id: new ObjectId(id) })

        console.log(product)
    } catch (error) {

    }

}