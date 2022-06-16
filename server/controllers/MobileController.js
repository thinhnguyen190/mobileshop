import { json, query, response } from 'express'
import Mobile from '../Models/Mobile.js'
import { checkInputSearchMobile, getAllTagMobile } from '../untils/funcHandleMobile/CheckTag.js'

const domain = "http://localhost:5000/"
class MobileController {

    async getAllMobile(req, res) {
        try {
            const brand = checkInputSearchMobile(req.query.brand,["Samsung", "Xiaomi", "Apple", "Vivo", "OPPO", "Realme", "Vsmart", "Nokia"])
            const price = checkInputSearchMobile(req.query.price,["Dưới-2-triệu", "Từ-2-4-triệu", "Từ-4-7-triệu", "Từ-7-13-triệu", "Trên-13-triệu"])
            const pin = checkInputSearchMobile(req.query.pin,["Dưới-3000-mah", "Từ-3000-4000-mah", "Trên-4000-mah"])

            const mobiles = await Mobile.aggregate([
                {
                    $match: {
                            $and: [
                                { brand: { $in: brand}},
                                { tag: { $in: price} },
                                { tag: { $in: pin}}
                            ]
                        }       
                },
                {
                    $project: {
                        specifications: 0,
                        desPost: 0,

                    }
                }

            ])
            // const mobiles = await Mobile.find({price: { $in: ["Từ-2-4-triệu","Từ-4-7-triệu","Từ-7-13-triệu","Trên-13-triệu"]}})
        
            res.status(200).json(mobiles)
        } catch (error) {
            console.log(error)
        }
    }
    async addMobile(req, res) {
        try {


            const avatar = domain + req.files.avatar[0].path.replace(/\\/g, "/")
            let imgsProduct = []
            const date = new Date(req.body.saleTime)

            console.log(req.body.saleTime)
            


            for (let i = 0; i < req.files.imgsProduct.length; i++) {
                imgsProduct.push(domain + req.files.imgsProduct[i].path.replace(/\\/g, "/"))
            }

            console.log(req.files.imgsUnbox.length)
            let imgsUnbox = []
            for (let i = 0; i < req.files.imgsUnbox.length; i++) {
                imgsUnbox.push(domain + req.files.imgsUnbox[i].path.replace(/\\/g, "/"))
            }
            const imgs = {
                avatar: avatar,
                imgsProduct: imgsProduct,
                imgsUnbox: imgsUnbox
            }

            const tag = getAllTagMobile(req.body.nameProduct, req.body.brand, req.body.priceProduct, req.body.PIN)

            const data = {
                name: req.body.nameProduct,
                brand: req.body.brand,
                price: req.body.priceProduct,
                salePrice: req.body.salePrice,
                saleTime: req.body.saleTime,
                specifications: {
                    screen: req.body.screen,
                    rearCamera: req.body.rearCamera,
                    selfieCamera: req.body.selfieCamera,
                    RAM: req.body.RAM,
                    memory: req.body.memory,
                    CPU: req.body.CPU,
                    GPU: req.body.GPU,
                    PIN: req.body.PIN,
                    SIM: req.body.SIM,
                    OS: req.body.OS
                },
                desPost: req.body.desPost,
                imgs: imgs,
                tag: tag
            }

            const mobile = new Mobile(data)

            await mobile.save()

            res.json("ok bạn ơi")
        } catch (err) {
            console.log(err)
        }

    }

    async getMobile(req, res) {
        try {
            const mobile = await Mobile.findOne({ _id: req.params.id })
            res.status(200).json(mobile)
        } catch (err) {
            console.log(err)
        }
    }
    async updateMobile(req, res){
        try {
            let avatar 
            if(req.body.avatar){
                avatar = req.body.avatar
            }else{
                avatar = domain + req.files.avatar[0].path.replace(/\\/g, "/")
            } 
            let imgsProduct = []
            const date = new Date(req.body.saleTime)

            
            if(req.body.imgsProduct){
                imgsProduct = [
                    ...req.body.imgsProduct
                ]

            }else{
                for (let i = 0; i < req.files.imgsProduct.length; i++) {
                    imgsProduct.push(domain + req.files.imgsProduct[i].path.replace(/\\/g, "/"))
                }
            }
            console.log(imgsProduct)

            

            let imgsUnbox = []
            
            if(req.body.imgsUnbox){
                imgsUnbox = [
                    ...req.body.imgsUnbox
                ]
            }else{
                for (let i = 0; i < req.files.imgsUnbox.length; i++) {
                    imgsUnbox.push(domain + req.files.imgsUnbox[i].path.replace(/\\/g, "/"))
                }
            }
            
            const imgs = {
                avatar,
                imgsProduct,
                imgsUnbox
            }

            const tag = getAllTagMobile(req.body.nameProduct, req.body.brand, req.body.priceProduct, req.body.PIN)

            const data = {
                name: req.body.nameProduct,
                brand: req.body.brand,
                price: req.body.priceProduct,
                salePrice: req.body.salePrice,
                saleTime: req.body.saleTime,
                specifications: {
                    screen: req.body.screen,
                    rearCamera: req.body.rearCamera,
                    selfieCamera: req.body.selfieCamera,
                    RAM: req.body.RAM,
                    memory: req.body.memory,
                    CPU: req.body.CPU,
                    GPU: req.body.GPU,
                    PIN: req.body.PIN,
                    SIM: req.body.SIM,
                    OS: req.body.OS
                },
                desPost: req.body.desPost,
                imgs: imgs,
                tag: tag
            }

            console.log(data)
            await Mobile.updateOne({ _id: req.params.id }, data)

            res.json("ok bạn ơi")
        } catch (error) {
            
        }
    }

    async deleteMobile(req, res){
        await Mobile.deleteOne({ _id: req.query.id })
        res.status(200)
    }

    async getMobileByManager( req, res){
        const keySearch = req.query.keySearch
        const mobiles = await Mobile.aggregate([
            {
                $match: {
                        $or: [
                            { name: { $regex: '.*' + keySearch + '.*', $options: 'i' }}
                        ]
                    }       
            },
            {
                $project: {
                    specifications: 0,
                    desPost: 0,

                }
            }

        ])
        res.json(mobiles)
    }

    async getNewMobile(req, res){
        try {

            const mobile = await Mobile.find({}).sort({ 'timestamp': -1}).limit(5)
            res.json(mobile)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new MobileController
