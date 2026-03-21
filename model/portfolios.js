import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required for portfolio'],
        minLength: [4, 'At least 4 character is required for portfolio title']
    },
    description: {
        type: String,
        required: [true, 'description is required for portfolio'],
        minLength: [20, 'At least 20 character is required for portfolio title']
    },
    image: {
        type: String
    },
    tags: String,
    project_Link: String
}, { timestamps: true });

const Model = mongoose.model('Portfolio', schema);
export default Model;
