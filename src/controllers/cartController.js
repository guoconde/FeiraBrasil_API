import db from "../db.js"

export async function userCart (req, res)  {
    const { user } = res.locals
    
    try {
        const userCart = await db.collection("carts").findOne({userId:user._id})
        const products = []
        
        for(const product of userCart.cart){
            products.push(await db.collection("products").findOne({_id:product}))
        }

        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function deleteProduct (req, res)  {
    const { id } = req.params
    const { user } = res.locals

    try {
        const userCart = await db.collection("carts").findOne({userId: user._id})

        const newcart = await userCart.cart.filter((product) =>  product.toString() !== id);
        await db.collection("carts").updateOne({
            userId: user._id
        },{
            $set: {cart:newcart}
        })
        return res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function confirmPurchase (req, res)  {
    const { user } = res.locals
    const { purchaseInfo, products } = req.body
    const {username, email, info} = user

    try {
        await db.collection("purchases").insertOne({
            user:{username,email,info},
            purchaseInfo,
            products
        })
        return res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)
    }
}