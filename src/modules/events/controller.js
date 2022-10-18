import { AuthorizationError, ForbiddenError, ValidationError } from '../../lib/error.js'
import path from 'path'

import model from "./model.js"


const ADMINGET = async(req, res) => {
    try {
        let events = await model.ADMINGET(req.params)
        if (!events) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.send(events)
    } catch (error) {
        throw new ForbiddenError(401, "Authorization Error")
    }
}

const GET = async(req, res) => {
    try {
        let events = await model.GET(req.params, req.query)
        let getIp = await model.GETIP()
        if (!events) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        if (req.params.event_id) {
            let findIp = getIp.find(address => address.ip == req.ip)
            if (!findIp) {
                var addview = await model.ADDVIEWS(req.params)
                let addIp = await model.ADDIP(req.ip)
                events.views = addview.views
            }
        }
        return res.send(events)
    } catch (error) {
        throw new ForbiddenError(401, "Authorization Error")
    }
}

const POSTIMAGES = async(req, res) => {
    try {
        let { image } = req.files
        let filename = Math.ceil(Math.random() * 1e9) + image.name
        let images = await model.POSTIMAGES(req.params, '/static/' + image.name)
        image.mv(path.join(process.cwd(), 'uploads', filename))

        return res.status(201).json({
            status: 201,
            message: "new image",
            data: filename
        })
    } catch (error) {
        throw new ForbiddenError(401, "Authorization Error")
    }
}

const POST = async(req, res) => {
    try {
        let event = await model.POST(req.body)
        if (!event) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "new event",
            data: event
        })
    } catch (error) {
        throw new ValidationError(401, "Authorization Error")
    }
}

const PUT = async(req, res) => {
    try {
        let event = await model.UPDATE(req.body, req.params)
        if (!event) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "updated",
            data: event
        })
    } catch (error) {
        throw new ValidationError(401, "Authorization Error")
    }
}

const DELETE = async(req, res) => {
    try {
        let event = await model.DELETE(req.body)
        if (!event) {
            return res.send({
                status: 403,
                message: "forbidden"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "deleted",
            data: event
        })

    } catch (error) {
        throw new ForbiddenError(403, "Authorization Error")
    }
}

const GETIPADDRESS = async(req, res) => {
    try {
        let IP_ADDRESS = await model.GETIP()
        console.log(IP_ADDRESS);
        return res.send(IP_ADDRESS)
    } catch (error) {
        throw new ForbiddenError(403, "Authorization Error")
    }
}


export default {
    GET,

    ADMINGET,
    POST,
    PUT,
    DELETE,
    POSTIMAGES,
    GETIPADDRESS
}