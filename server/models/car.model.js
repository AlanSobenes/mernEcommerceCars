const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    color: String,
    year: String,
    image: String,
    interiorImage: String,
    otherImage: String,
    otherImage2: String,
    description: String,
    price: Number,
    category: String,
    quantity: Number,
    condition: String,
    miles: String
}, { timestamps: true })




const Car = mongoose.model('Car', CarSchema)
module.exports = Car