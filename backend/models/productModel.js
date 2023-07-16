const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please enter product name']
    },
    description: {
        type: String,
        require: [true, "provide product description"]
    }, 
    price:{
        type: Number,
        require: [true,"Please enter product price"],
        maxLength: [8, 'price cannot exceed 8 figure']
    },
    rating:{
        type: Number,
        default: 0
    },
    images:[{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        } 

    }
       
    ],

    category:{
        type: String,
        required: [true, "please enter product category"]
    },
    stock:{
        type: Number,
        required: [true,"Please enter stock quantity"],
        maxLength:[4, 'stock limited to 9999'],
        default: 1
    },
    numberOfReview:{
        type:Number,
        default: 0,

    },

    reviews:[
        {name:{
            type: String,
            required: true
        },
        rating:{
            type: Number,
            required: true,
        },
        comment:{
            type: String,
            required: true,
        }
    }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Product",productSchema)