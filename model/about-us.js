import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        min: [20, 'At least 20 character is required for description']
    },
    experienceYear :{
        type: Number
    },
    image: {
        type: String
    },
}, {timestamps: true });

const Model = mongoose.model('About-us', schema);

export default Model;
