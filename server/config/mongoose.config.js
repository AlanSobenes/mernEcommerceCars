const mongoose = require('mongoose')
const DB = 'luxuryDripDB'

mongoose.connect("mongodb+srv://guest:1234@cluster0.334ak.mongodb.net/luxuryDripDB" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then( () => console.log('Established a connection to the database'))
    .catch( err => console.log('Something went wrong when connecting to the database', err))