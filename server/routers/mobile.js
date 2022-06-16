import express from "express";
import MobileController from "../controllers/MobileController.js";
import multer from "multer";
const routerMobile = express.Router()

const storage = multer.diskStorage({
    destination: ( req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, "img" + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage})
const cpUpload = upload.fields([
    {
        name: 'avatar',
        maxCount: 1
    },
    {
        name: 'imgsProduct',
        maxCount: 20,
    },
    {
        name: 'imgsUnbox',
        maxCount: 5,
    }
])

routerMobile.get('/getNewMobile', MobileController.getNewMobile)

routerMobile.get('/getByManager', MobileController.getMobileByManager)

routerMobile.delete('/delMobile', MobileController.deleteMobile)

routerMobile.put('/updateMobile/:id', cpUpload, MobileController.updateMobile)

routerMobile.get('/:id', MobileController.getMobile)

routerMobile.get('/', MobileController.getAllMobile)

routerMobile.post('/addMobile', cpUpload, MobileController.addMobile)


export default routerMobile