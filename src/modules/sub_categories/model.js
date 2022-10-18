import { InternalServerError } from '../../lib/error.js'
import { fetch, fetchAll } from '../../lib/postgres.js'
import { GETEVENTS, GETIMAGES } from '../events/query.js'
import { GETSUBCATEGORIES, POSTSUBCATEGORY, UPDATESUBCATEGORY, DELETESUBCATEGORY } from './query.js'

const GET = async({ sub_category_id = 0 }) => {
    try {
        let sub_categories = await fetchAll(GETSUBCATEGORIES)
        let events = await fetchAll(GETEVENTS)
        let images = await fetchAll(GETIMAGES)

        sub_categories = sub_categories.filter(subs => subs.status == 'active')
        sub_categories = sub_categories.map(subs => {
            subs.events = events.filter(event => event.sub_category_id == subs.sub_category_id)
            return subs
        })

        if (!sub_category_id) {
            return sub_categories
        }
        let findSubs = sub_categories.find(subs => subs.sub_category_id == sub_category_id)
        if (!findSubs) {
            return []
        }
        return findSubs
    } catch (error) {
        throw new InternalServerError(500, 'Sub Categories Error')
    }
}

const POST = async({ category_id, sub_category_name }) => {
    try {
        return await fetch(POSTSUBCATEGORY, [category_id, sub_category_name])
    } catch (error) {
        throw new InternalServerError(500, 'Sub Categories Internal Server Error')
    }
}

const UPDATE = async({ sub_category_id }, { category_id, sub_category_name }) => {
    try {
        return await fetch(UPDATESUBCATEGORY, [sub_category_id, category_id, sub_category_name])
    } catch (error) {
        throw new InternalServerError(500, 'Sub Categories Internal Server Error')
    }
}

const DELETE = async({ status }, { sub_category_id }) => {
    try {
        return await fetch(DELETESUBCATEGORY, [status, sub_category_id])
    } catch (error) {
        throw new InternalServerError(500, 'Categories Internal Server Error')
    }
}


export default {
    GET,
    POST,
    UPDATE,
    DELETE
}