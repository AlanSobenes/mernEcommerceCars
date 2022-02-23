const Car = require('../controllers/car.controller')
const Cart = require('../controllers/cart.controller')

module.exports = (app) => {
    app.get('/api/cars', Car.getCars)
    app.get('/api/car/:id', Car.getOneCar )
    app.post('/api/car', Car.createCar)
    app.put('/api/car/:id', Car.updateCar )
    app.delete('/api/car/:id', Car.deleteCar)
    app.get('/api/cars/:category/:make', Car.findByCatAndMake)
    app.get('/api/cars/:make', Car.findAllByMake)
    app.get('/api/search', Car.getCarsBySearch)


    app.get('/api/cart', Cart.getItems)
    app.get('/api/cart/:id', Cart.getOneItem)
    app.post('/api/cart', Cart.createItem)
    app.put('/api/cart/:id', Cart.updateItem)
    app.delete('/api/cart/:id', Cart.deleteItem)
    
}