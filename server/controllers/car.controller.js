const Car = require('../models/car.model')

module.exports = {
    getCars: (req, res) => {
        Car.find()
            .then(allCars => res.json({ cars: allCars }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },

    getOneCar: (req, res) => {
        Car.findOne({ _id: req.params.id })
            .then(oneCar => res.json({ car: oneCar }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },

    createCar: (req, res) => {
        Car.create(req.body)
            .then(newCar => res.json({ car: newCar }))
            .catch(err => res.status(400).json(err))
    },

    updateCar: (req, res) => {
        Car.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updateCar => res.json({ car: updateCar }))
            .catch(err => res.status(400).json(err))
    },

    deleteCar: (req, res) => {
        Car.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },

    findByCatAndMake: (req, res) => {
        Car.find({
            category: req.params.category,
            make: req.params.make
        })
            .then(results => res.json({ cars: results }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },
    findAllByMake: (req, res) => {
        Car.find({ make: req.params.make })
            .then(results => res.json({ cars: results }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    },
    getCarsBySearch: (req, res) => {
        const search = new RegExp(req.query.searchQuery, "i")
        Car.find({ $or: [{ make: search }, { model: search }, { color: search }, { condition: search }, { category: search }, { year: search }] })
            .then(results => res.json({ cars: results }))
            .catch(err => res.json({ message: "Something went Wrong", error: err }))
    }

}