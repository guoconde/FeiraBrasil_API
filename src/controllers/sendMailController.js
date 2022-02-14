import db from "../db.js";
import nodemailer from 'nodemailer';
import sendgridTransport from "nodemailer-sendgrid-transport";
import { ObjectId } from "mongodb";

const email = process.env.MAILADRESS

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)

export async function sendEmail(req, res) {

    const { userId } = req.body

    try {

        const user = await db.collection('users').findOne({ _id: new ObjectId(userId) })

        const message = {
            from: email,
            to: user.email,
            subject: 'Confirmação de compra',
            html: `
                <h1>Sua compra foi realizada com sucesso!</h1>
                <br/>
                <p><strong>Agradecemos a preferência</strong></p>
            `

        }

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Message sent', info)
            }
        })
    } catch (error) {
        res.sendStatus(500)
    }
}