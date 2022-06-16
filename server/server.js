import express from "express";
import route from "./routers/index.js";
import connectDb from "./config/db.js";
import { Server } from "socket.io"
import { createServer } from "http"
import cors from "cors"
import Mobile from "./Models/Mobile.js";
import mongoose from "mongoose";
import 'dotenv/config'

const app = express()

const httpServer = createServer(app)
const port = process.env.PORT || 5000

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    }

})




//connect DB
connectDb()





// io.on("connection", (socket)) => {

// }


app.use('/uploads', express.static('uploads'))
//body parse 
app.use(express.json())

app.use(cors())



route(app)



io.on("connection", (socket) => {
    console.log(socket.id, " connect!")
    socket.on("disconnect", () => {
        console.log(socket.id, " out")
    })

    socket.on("join_mobileProduct", async id => {
        socket.join(id)
        const mobile = await Mobile.findById(id)
        io.in(id).emit("commentMobile", mobile.comments)



    })

    socket.on("left_mobileProduct", id => socket.leave(id))

    socket.on("send_comment", async (data) => {

        console.log(data.productId)
        /// query product trong db
        const mobile = await Mobile.findById(data.productId)


        // handle data ( thêm dữ liệu nhận được từ client vào product)
        const time = new Date()

        if (!data.id) {
            mobile.comments.unshift({
                id: Math.floor(Math.random() * 19999999999999),
                name: data.name,
                email: data.email,
                content: data.content,
                createTime: time
            })
        } else {
            for (let i = 0; i < mobile.comments.length; i++) {
                if (mobile.comments[i].id === data.id) {
                    if (mobile.comments[i].childrenComment) {
                        mobile.comments[i].childrenComment.push({
                            id: data.id,
                            name: data.name,
                            email: data.email,
                            content: data.content,
                            createTime: time,
                            type: "childrenComment"

                        })
                    } else {
                        console.log("aloalo")
                        mobile.comments[i].childrenComment = []
                        mobile.comments[i].childrenComment.push({
                            id: data.id,
                            name: data.name,
                            email: data.email,
                            content: data.content,
                            createTime: time,
                            type: "childrenComment"
                        })

                    }
                }
            }
        }

        io.in(data.productId).emit("commentMobile", mobile.comments)

        mobile.markModified("comments")

        // lưu lại thay đổi sau khi cập nhật
        await mobile.save()

        //sắp xếp lại theo 
        // await Mobile.updateOne(
        //     {
        //     _id: mongoose.Types.ObjectId(data.productId)
        // },
        // {
        //     $push: {
        //         comments: {
        //             $each: [],
        //             $sort: {
        //                 createTime: -1
        //             }
        //         }
        //     }
        // }
        // )
        // const newMobile = await Mobile.findById(data.productId)

        

        
        
    })

})


httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

