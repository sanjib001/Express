import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required for hero-section'],
        minLength: [ 5, 'Atleast 5 character is required in hero-section title' ]
    },
    subTitle: {
        type: String,
        required: [true, 'subTitle is required for hero-section']
    },
    image: {
        type: String,
    },
    ctaText :{
        type: String,
        required: [true, 'ctaText is required for hero-section'],
    },
    ctaLink: {
        type: String,
    }
}, {timestamps: true })

const Model = mongoose.model('Hero-section', schema);
export default Model;

