import { AuthorizationError, ForbiddenError, ValidationError } from '../../lib/error.js'

import model from "./model.js"

const GET = async(req, res) => {
    try {
        let categories = await model.GET(req.params)
        if (!categories) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.send(categories)
    } catch (error) {
        throw new ForbiddenError(401, "Authorization Error")
    }
}

const POST = async(req, res) => {
    try {
        let category = await model.POST(req.body)
        if (!category) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "new category",
            data: category
        })
    } catch (error) {
        throw new ValidationError(401, "Authorization Error")
    }
}

const PUT = async(req, res) => {
    try {
        let category = await model.UPDATE(req.body, req.params)
        if (!category) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "updated",
            data: category
        })
    } catch (error) {
        throw new ValidationError(401, "Authorization Error")
    }
}

const DELETE = async(req, res) => {
    try {
        let category = await model.DELETE(req.body)
        if (!category) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "deleted",
            data: category
        })

    } catch (error) {
        throw new ForbiddenError(403, "Authorization Error")
    }
}

export default {
    GET,
    POST,
    PUT,
    DELETE
}