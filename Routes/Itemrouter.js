const express = require("express");
const router = express.Router();

const Item=require("../models/Item");

router.post("/additem",async(req,res)=>{
    try {
        let {CategoryName,name,img,option}=req.body;
        const item=new Item({CategoryName,name,img,option});
        console.log(option);
        await item.save();
        res.status(200).json({ msg: "Item added succesfully" });
    } catch (error) {
        console.log("error");
      res.json({ sucess: false });
    }
})
router.get("/",async(req,res)=>{
    try{
     let cartitems= await Item.find();
     res.status(200).json({cartitems:cartitems});
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: "Something went wrong!" });
    }
})
router.delete("/:itemId",async(req,res)=>{
    try{
       await Item.findByIdAndRemove(req.params.itemId);
       res.status(200).json({msg:"Item deleted successfulyy"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({ msg: "Something went wrong!" });
    }
})
module.exports=router;