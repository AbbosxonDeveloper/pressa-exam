import { InternalServerError } from '../../lib/error.js'
import { fetch, fetchAll } from '../../lib/postgres.js'
import { GETEVENTS, GETIMAGES, POSTEVENT, UPDATE_EVENT, DELETE_EVENT, POSTIMAGE, GET_IP, ADD_VIEWS, ADD_IP } from './query.js'

const ADMINGET = async({ event_id = '' }) => {
    try {
        let events = await fetchAll(GETEVENTS)

        if (!event_id) {
            return events
        } else {

            let findEvent = events.find(category => category.event_id == event_id)
            if (!findEvent) {
                return []
            }
            return findEvent
        }
    } catch (error) {
        throw new InternalServerError(500, 'events Error')
    }
}

const GET = async({ event_id = '' }, { limit, page }) => {
    try {
        let events = await fetchAll(GETEVENTS)
        let images = await fetchAll(GETIMAGES)
        if (limit && page) {
            events = events.splice((limit * page) - 1, limit * page)
        }

        events = events.filter(category => category.status == 'active')
        events = events.map(event => {
            event.image = images.find(image => image.event_id == event.event_id)
            return event
        })
        if (!event_id) {
            return events
        } else {


            let findEvent = events.find(category => category.event_id == event_id)
            if (!findEvent) {
                return []
            }
            return findEvent
        }
    } catch (error) {
        throw new InternalServerError(500, 'events Error')
    }
}


const POST = async({
    personality,
    company,
    full_name,
    profession,
    phone,
    extra_phone,
    category_id,
    sub_category_id,
    event_date,
    event_time,
    event_type,
    link,
    theme,
    description,
    body
}) => {
    try {
        return await fetch(POSTEVENT, [personality,
            company,
            full_name,
            profession,
            phone,
            extra_phone,
            category_id,
            sub_category_id,
            event_date,
            event_time,
            event_type,
            link,
            theme,
            description,
            body
        ])
    } catch (error) {
        throw new InternalServerError(500, 'Events Internal Server Error')
    }
}

const POSTIMAGES = async({ event_id }, image) => {
    try {
        return await fetch(POSTIMAGE, [event_id, image])
    } catch (error) {
        throw new InternalServerError(500, 'events Error')
    }
}

const UPDATE = async({ status }, { event_id }) => {
    try {
        return await fetch(UPDATE_EVENT, [status, event_id])
    } catch (error) {
        throw new InternalServerError(500, 'Events Internal Server Error')
    }
}

const DELETE = async({ event_id }) => {
    try {
        return await fetch(DELETE_EVENT, [event_id])
    } catch (error) {
        throw new InternalServerError(500, 'Events Internal Server Error')
    }
}

const GETIP = async() => {
    try {
        return await fetchAll(GET_IP)
    } catch (error) {
        throw new InternalServerError(500, 'Events Internal Server Error')
    }
}

const ADDIP = async(request) => {
    try {
        return await fetch(ADD_IP, [request])
    } catch (error) {
        throw new InternalServerError(500, 'Events Internal Server Error')
    }
}

const ADDVIEWS = async({ event_id }) => {
    try {
        return await fetch(ADD_VIEWS, [event_id])
    } catch (error) {
        throw new InternalServerError(500, 'Events Internal Server Error')
    }
}

export default {
    GET,
    ADMINGET,
    POST,
    POSTIMAGES,
    UPDATE,
    DELETE,
    GETIP,
    ADDVIEWS,
    ADDIP
}