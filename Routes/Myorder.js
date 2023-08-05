const express = require("express");
const router = express.Router();

const Myorder = require("../models/Myorder");

router.post("/addorder", async (req, res) => {
    console.log("abhishek");
    try {
        let { Name, Img, Size, Qty, Price } = req.body;
        const myorder = new Myorder({ Name, Img, Size, Qty, Price });
        await myorder.save();
        res.status(200).json({ msg: "Order added succesfully" });
    } catch (error) {
        console.log("error");
        res.json({ sucess: false });
    }
})
router.get("/", async (req, res) => {
    try {
        let myorders = await Myorder.find();
        res.status(200).json({ myorders: myorders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong!" });
    }
})

module.exports = router;