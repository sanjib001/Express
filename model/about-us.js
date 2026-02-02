import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required for about-us'],
        minLength: [4, 'about title should be atleast 4 character long'],
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'At least 20 character is required for description']
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
