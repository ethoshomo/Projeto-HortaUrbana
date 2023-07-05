// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const salesSchema = new Schema(
    {     
        buyerId: {
            type: String,
            required: true
        },
        
        totalPrice: {
            type: Number,
            required: true
        },
                
        totalProduct: {
            type: Number,
            required: true
        },
        
        paymentMethod: {
            type: String,
            required: true
        },

        cardNumber: {
            type: String,
            required: true
        },

        deliveryAddress: {
            type: String,
            required: true
        },

        cart: {
            type: [Schema.Types.Mixed],
            require: true
        }
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const Sales = mongoose.model('Sales', salesSchema)

module.exports = Sales