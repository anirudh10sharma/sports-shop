const mongoose=require('mongoose');
const review= require('./review')
const productSchema= new mongoose.Schema({
    name: {type: String},
    value:{type: Number},
    type: {type: String
    },
   
    img: {type: String},
    desc: {
        type: String,
        minLength: 17,
    },
     reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }  
    ]

})
const Product=mongoose.model('Product', productSchema);

module.exports =Product;