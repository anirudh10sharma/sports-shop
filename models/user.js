const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');
const Product = require('./prdoduct');

const Userschema=new mongoose.Schema({
    email:{type: 'string', required: true,unique: true
},
pros:[{
    type: mongoose.Schema.Types.ObjectId,
ref:'Product'}],

cart: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }
]

})
Userschema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",Userschema);