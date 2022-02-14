import dayjs from "dayjs"
import db from "../db.js"

export async function userCart (req, res)  {
    const { user } = res.locals  
    
    try {
        const userCart = await db.collection("users").findOne({ _id: user._id })
        
        res.send(userCart)
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function postCart(req, res) {
    const { user } = res.locals
    const teste = req.body
    
    try {
        await db.collection('users').updateOne({ _id: user._id }, { $set: { cart: teste } })
    } catch (error) {
        res.status(500).send(error)

    }
}

export async function deleteProduct(req, res) {
    const { id } = req.params
    const { user } = res.locals

    try {
        const userCart = await db.collection("users").findOne({ _id: user._id })

        const newcart = await userCart.cart.filter((product) => product._id !== id);
        await db.collection("users").updateOne({
            _id: user._id
        }, {
            $set: { cart: newcart }
        })
        return res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function confirmPurchase(req, res) {
    const { user } = res.locals
    let { purchaseInfo, products } = req.body
    if (purchaseInfo === "bank slip") purchaseInfo = "Boleto bancário"
    else purchaseInfo = `Cartão de crédito em ${purchaseInfo.installment}`

    try {
        await db.collection("purchases").insertOne({
            userId: user._id,
            purchaseInfo,
            ...products,
            date: dayjs().format("DD/MM/YYYY")
        })
        return res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}