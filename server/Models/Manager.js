import mongoose from "mongoose"

const Schema = mongoose.Schema

const Manager = new Schema({
    userName: { type: String},
    passWord: { type: String},
    email: { type: String },
    role: { type: Number, default: 0 }
    
})


export default mongoose.model("Manager", Manager)



