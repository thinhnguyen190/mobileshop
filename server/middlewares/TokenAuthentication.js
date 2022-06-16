import jwt from "jsonwebtoken"
import Manager from "../Models/Manager.js"

const tokenAuthen = (req, res, next) => {
    try {
        const accessToken = req.headers['x-access-token']
        //const token = accessToken.split(' ')[1]=
        if (!accessToken) return res.sendStatus(401)
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) return res.sendStatus(401).json(err)

           
            req.managerId = data._id
            next()
        })
    } catch (error) {
        console.log(error)
    }

}

export const checkManagerRole = async ( req, res, next) => {
    try {
        const manager = await Manager.findOne({ _id: req.managerId})
        if(!manager.role) return res.json("Không đủ quyền hạn để thực hiện")
        next()
    } catch (error) {
        console.log(error)
    }
}



const createNewToken = (payload) => {

    const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5s'})

    const newRefreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30000s'})

    return {
        newAccessToken,
        newRefreshToken
    }
}
export default tokenAuthen


