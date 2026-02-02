import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be given of the company'],
        min: [4, 'at least 4 character Neede for name ']
    },
    logo: {
        type: String
    },
    website: {
        type: String
    }
}, { timestamps: true })

const Model = mongoose.model('Partner', schema);
export default Model;