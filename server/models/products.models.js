import { Schema, model } from "mongoose";

let productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["food", "toys", "accessories"]
    },
    animalType: {
        type: String,
        required: true,
        enum: ["dogs", "cats", "fish", "birds"]

    },
    price: {
        type: Number,
        required: true,

    },
    imageUrl: {
        type: String,
        required: true
    }

},
    { timeStamps: true })

export let productsModel = model('product', productsSchema)
