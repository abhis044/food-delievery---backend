const express = require("express");
const router = express.Router();
const Order=require("../models/Order");
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date},{Order_amount:req.body.order_amount});
    let email=req.body.email
    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ email: email })    
    console.log("abhishek",data);
    console.log(email);
    if (eId===null) {
        try {
            await Order.create({
                email: email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
});
router.post("/getorder",async(req,res)=>{
    let email=req.body.email;
    console.log(email);
    let orders= await Order.findOne({email:email});
    res.status(200).json({orders:orders},);;
})
module.exports = router;