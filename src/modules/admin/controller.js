import { AuthorizationError } from '../../lib/error.js'
import jwt from '../../lib/jwt.js'
import model from './model.js'

const LOGIN = async(req, res) => {
    try {
        let admin = await model.LOGIN(req.body)
        if (admin) {
            return res.status(200).json({
                status: 201,
                message: "ok",
                token: jwt.sign({ adminId: admin.admin_id })
            })

        }
        return res.status(401).json({
            status: 401,
            message: "authorization error",
            token: null
        })
    } catch (error) {
        throw new AuthorizationError("Authorization Error")
    }
}

export default {
    LOGIN
}