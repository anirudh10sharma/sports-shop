const Product= require('../models/prdoduct');
const express=require('express');
const router=express.Router();
const {isLoggedIn}=require("../middleware");
const User=require("../models/user");

router.get('/products',async (req,res)=>{
    const products =await Product.find({});
    res.render(`./others/show`,{products: products});

})
router.get('/products/new/t',isLoggedIn,(req,res)=>{
    
    res.render('./others/new');
})
router.get('/products/:id',isLoggedIn,async (req,res)=>{
    //res.send("done");
   const prdouct=await Product.findById(req.params.id).populate("reviews");
    //res.send(prdouct);
   res.render('./others/single',{product: prdouct});
})
router.get('/products/:id/edit',isLoggedIn,async (req,res)=>{
    const product=await Product.findById(req.params.id);
    res.render('./others/edit',{product: product});
})


router.post('/product/new',isLoggedIn,async (req,res)=>{

 const product=await Product.create(req.body.prdoduct);
 const user=req.user;
 user.pros.push(product);
 await user.save();
 res.redirect("/products");
})
    


router.patch('/products/:id',async (req,res)=>{

    const  product=await Product.findByIdAndUpdate(req.params.id,req.body.prdoduct,{new: true});
    
    res.redirect(`/products/${product._id}`);
})

router.delete('/products/:id',async (req,res)=>{
    const user=req.user;
    if(user.pros.includes(req.params.id))
    {await Product.findByIdAndDelete(req.params.id);}
    res.redirect('/products');
})



module.exports = router;