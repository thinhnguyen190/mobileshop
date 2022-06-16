import routerManager from "./manager.js"
import routerMobile from "./mobile.js"
import routerOrder from "./order.js"

function route(app){
    app.use('/mobile', routerMobile)
    app.use('/api/manage', routerManager)
    app.use('/api/order', routerOrder)
}

export default route