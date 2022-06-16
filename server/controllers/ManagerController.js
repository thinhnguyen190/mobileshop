import jwt from "jsonwebtoken"
import Manager from "../Models/Manager.js"


class ManagerController {

    async managerLogin(req, res) {
        try {
            //const accessToken = jwt.sign(req.body,"jwtntt")
            const { userName, passWord } = req.body



            const manager = await Manager.findOne({ userName: userName })

            if (!manager) return res.status(203).json({ msg: "Tài khoản không tồn tại" })



            if (manager.passWord !== passWord) return res.status(203).json({ msg: "Sai mật khẩu" })

            const accessToken = jwt.sign({ _id: manager._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5000s' })

            const refreshToken = jwt.sign({ _id: manager._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3000d' })

            const message = {
                msg: "Login successful!",
                status: 200,
                inforManager: {
                    userName: manager.userName,
                    role: manager.role
                },
                accessToken,
                refreshToken
            }

            res.status(200).json(message)

            //res.json({accessToken})
        } catch (error) {
            console.log(error)
        }

    }

    async getInforManager(req, res) {
        try {
            const manager = await Manager.findOne({ _id: req.managerId })

            res.json({
                userName: manager.userName,
                email: manager.email,
                role: manager.role
            })
        } catch (error) {
            console.log(error)
        }

    }
    async refreshToken(req, res) {
        console.log("aloalo")
        const refreshToken = req.body.refreshToken
        jwt.verify(req.body.refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {

            if (err) return res.sendStatus(401)


            const newAccessToken = jwt.sign({_id: data._id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5000s' })

            const newRefreshToken = jwt.sign({_id: data._id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3000d' })

            res.json({
                newAccessToken,
                newRefreshToken
            })
        })
    }



}


export default new ManagerController

