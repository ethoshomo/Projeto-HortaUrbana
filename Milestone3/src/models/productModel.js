// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const productSchema = new Schema(
    {     
        id: {
            type: String,
            required: true
        },
        
        description: {
            type: String,
            required: true
        },
                
        price: {
            type: String,
            required: true
        },
        
        stock: {
            type: String,
            required: true
        },

        producer: {
            type: String,
            required: true
        },

        imgName: {
            type: String,
            required: true
        }
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const Product = mongoose.model('Product', productSchema)

module.exports = Product