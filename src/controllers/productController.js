import db from "../db.js";

export async function renderProducts(req, res) {

    try {
        const products = await db.collection('products').find().toArray()
        console.log(products)
        res.send(products)

    } catch (error) {
        res.sendStatus(error)
    }

}