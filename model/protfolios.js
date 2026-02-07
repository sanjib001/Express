import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required for protfolio'],
        minLength: [4, 'At least 4 character is required for protfolio title']
    },
    description: {
        type: String,
        required: [true, 'description is required for protfolio'],
        minLength: [20, 'At least 20 character is required for protfolio title']
    },
    image: {
        type: String
    },
    tags: String,
    project_Link: String
}, { timestamps: true });

const Model = mongoose.model('Protfolio', schema);
export default Model;
