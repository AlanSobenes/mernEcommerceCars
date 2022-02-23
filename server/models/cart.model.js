const mongoose = require('mongoose')

const ShoppingCartSchema = new mongoose.Schema({
    productId: String,
    make: String,
    model: String,
    color: String,
    year: Number,
    image: String,
    category: String,
    price:Number,
    miles:String
},{timestamps: true});

const Cart = mongoose.model('Cart', ShoppingCartSchema);
module.exports = Cart;