import Order from "../Models/Order.js"

class OrderController {


    async addOrder(req, res) {
        try {
            const productOrdered = []

            // for(let i = 0 ; i < req.body.order.length ; i++){
            //     productOrdered.push({

            //     })
            // }
            const listOrder = []
            const cart = [
                ...req.body.order
            ]
            for (let i = 0; i < cart.length; i++) {
                listOrder.push({
                    id: cart[i].id,
                    name: cart[i].name,
                    price: cart[i].salePrice ? cart[i].salePrice : cart[i].price,
                    amount: cart[i].amount
                })
            }
            const data = {
                orderUserName: req.body.inforUser.userName,
                orderUserNumberPhone: req.body.inforUser.userNumberPhone,
                orderUserEmail: req.body.inforUser.userEmail,
                listOrder: listOrder,
                totalBill: req.body.totalBill,
            }

            const order = new Order(data)

            await order.save()

            res.status(200).json("successful!")
        } catch (error) {
            console.log(error)
        }
    }

    async getOrders(req, res) {
        try {
            const order = await Order.find({})
            res.json(order)
        } catch (error) {
            console.log(error)
        }
    }

    async getOrder(req, res) {
        try {
            const order = await Order.findById(req.params.id)
            res.json(order)
        } catch (error) {
            console.log(error)
        }
    }

    async updateOrder(req, res) {
        try {
            await Order.updateOne(
                {
                    _id: req.body.id
                },
                {
                    $set: {
                        status: req.body.newStatus
                    }
                }
            )
            res.status(200).json("successfull!!")

        } catch (error) {
            console.log(error)
        }

    }

    async delOrder(req, res) {
        try {
            await Order.deleteOne({ _id: req.body.id })
            res.status(200).json(1)
        } catch (error) {
            console.log(error)
        }

        
    }

    async getTopMobileBestSell(req, res) {
        try {
            const result = await Order.aggregate([
                {
                    $project: {
                        orderUserName: 0,
                        orderUserEmail: 0,
                        orderUserNumberPhone: 0,
                        totalBill: 0,
                        
                    }
    
    
                },
                {
                    $unwind: "$listOrder"
                },
    
                {
                    $group: {
                        _id: '$listOrder.id',
                        name: { "$first": '$listOrder.name'},
                        amount: { $sum: '$listOrder.amount'}
                    }
                }
            ])
            res.json(result)
        } catch (error) {
            console.log(error)
        }
        
    }

}

export default new OrderController