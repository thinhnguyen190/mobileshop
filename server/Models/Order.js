import mongoose from "mongoose"

const Schema = mongoose.Schema

const Order = new Schema({
    orderUserName: { type: String },
    orderUserNumberPhone: { type: String },
    orderUserEmail: { type: String },
    listOrder: { type: Object },
    totalBill: { type: Number },
    status: {
        type: String,
        default: "Đang xác nhận"
    }
}, {
    timestamps: true,
    
})

export default mongoose.model("Order",Order)