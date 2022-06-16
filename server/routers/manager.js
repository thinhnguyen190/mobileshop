import express from "express"
import ManagerController from "../controllers/ManagerController.js"
import tokenAuthen from "../middlewares/TokenAuthentication.js"


const routerManager = express.Router()

routerManager.post("/managerLogin", ManagerController.managerLogin)

routerManager.post("/refreshToken", ManagerController.refreshToken)

routerManager.get("/getInforManager", tokenAuthen, ManagerController.getInforManager)

export default routerManager 