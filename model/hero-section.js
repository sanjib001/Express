import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5,
    },
    subTitle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    ctaText :{
        type: String,
        required: true,
    },
    ctaLink: {
        type: String,
    }
}, {timestamps: true })

const Model = mongoose.model('Hero-section', schema);
export default Model;

