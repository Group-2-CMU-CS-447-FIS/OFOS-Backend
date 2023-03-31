import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
    try {
        const {token, amount} = req.body;

        const charge = await stripe.charges.create({
            amount: amount,
            currency: "usd",
            source: token,
            description: "Example charge",
        });

        res.json({
            message: "Payment success",
        });
    } catch (error) {
        throw Error("Payment error!!");
    }
});

router.get("/", async (req, res) => {
    res.json({publicKey: process.env.STRIPE_PUBLIC_KEY});
});

export default router;
