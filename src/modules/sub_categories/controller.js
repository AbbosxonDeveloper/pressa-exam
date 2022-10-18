import { AuthorizationError, ForbiddenError, ValidationError } from '../../lib/error.js'

import model from "./model.js"

const GET = async(req, res) => {
    try {
        let sub_categories = await model.GET(req.params)
        if (!sub_categories) {
            return res.send({
                status: 403,
                message: "validation error"
            })
        }
        return res.send(sub_categories)
    } catch (error) {
        throw new ForbiddenError(401, "Authorization Error")
    }
}

const POST = async(req, res) => {
    try {
        let sub_categories = await model.POST(req.body)
        if (!sub_categories) {
            return res.send({
                status: 403,
                message: "validation error "
            })
        }
        return res.status(201).json({
            status: 201,
            message: "new sub_categories",
            data: sub_categories
        })
    } catch (error) {
        throw new ForbiddenError(401, "Authorization Error")
    }
}

const PUT = async(req, res) => {
    try {
        let sub_category = await model.UPDATE(req.params, req.body)
        if (!sub_category) {
            return res.send({
                status: 403,
                message: "validation error"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "updated",
            data: sub_category
        })
    } catch (error) {
        throw new ValidationError(401, "Validation Error")
    }
}

const DELETE = async(req, res) => {
    try {
        let sub_category = await model.DELETE(req.body, req.params)
        if (!sub_category) {
            return res.send({
                status: 403,
                message: "validation error"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "deleted",
            data: sub_category
        })

    } catch (error) {
        throw new ValidationError(403, "Validation Error")
    }
}

export default {
    GET,
    POST,
    PUT,
    DELETE
}