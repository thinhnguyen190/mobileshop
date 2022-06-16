import mongoose from 'mongoose'

async function connectDb(){

    try{
        await mongoose.connect("mongodb+srv://ntthinh:thinhdeptrai@cluster0.5ufg3.mongodb.net/MyMobileShop?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
        })
        console.log("connect successfully!!!")

    }catch(error) {
        console.log(error)
        console.log("connect fail!!!")
    }
}

export default connectDb