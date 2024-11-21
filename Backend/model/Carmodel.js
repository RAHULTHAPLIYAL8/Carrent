const mongoose = require('mongoose');


const carModelSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    image: { type: String, required: true }, 
    carNumber: { type: String, required: true, unique: true }, 
    seat: { type: Number, required: true }, 
    airbags: { type: Number, required: true }, 
    price: { type: Number, required: true }, 
    description: { type: String, required: true } 
});


const carModel = mongoose.model('CarModel', carModelSchema);


module.exports = {carModel,carModelSchema};
