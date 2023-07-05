// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const userSchema = new Schema(
    {     
        name: {
            type: String,
            required: false
        },
        
        street: {
            type: String,
            required: false
        },
        
        district: {
            type: String,
            required: false
        },
        
        city: {
            type: String,
            required: false
        },
        
        state: {
            type: String,
            required: false
        },
        
        tel: {
            type: String,
            required: false
        },
        
        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        isAdministrator: {
            type: Boolean,
            required: true
        },

        isAdmin: {
            type: Boolean,
            required: true
        }
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const User = mongoose.model('User', userSchema)

module.exports = User