import mongoose from "mongoose"

const Schema = mongoose.Schema

const Mobile = new Schema({
    name: { type: String },
    brand: { type: String },
    price: { type: Number },
    salePrice: { type: String },
    saleTime: { type: String },
    specifications: { type: Object},
    desPost: { type: String },
    imgs: { type: Object},
    tag: { type: Array},
    comments: {type: Array}

}, {
    timestamps: true,
    strict: false,
    
})

export default mongoose.model("Mobile",Mobile)