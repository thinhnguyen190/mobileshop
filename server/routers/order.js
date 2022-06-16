import express from "express";
import OrderController from "../controllers/OrderController.js";
import tokenAuthen from "../middlewares/TokenAuthentication.js";

const routerOrder = express.Router()



routerOrder.post("/addOrder", OrderController.addOrder)

routerOrder.get("/getOrders",  OrderController.getOrders)

routerOrder.get("/getOrder/:id", OrderController.getOrder)

routerOrder.delete("/delOrder", OrderController.delOrder)

routerOrder.post("/updateStatus", OrderController.updateOrder)

routerOrder.get("/getMobileBestSell", OrderController.getTopMobileBestSell)
export default routerOrder