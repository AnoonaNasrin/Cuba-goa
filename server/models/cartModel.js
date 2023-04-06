const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    prperties:[
        {
        roomId:{
            type
        }
        }
    ]
})

module.exports = mongoose.model(cartModel , cartSchema)