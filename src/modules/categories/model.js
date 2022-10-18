import { InternalServerError } from '../../lib/error.js'
import { fetch, fetchAll } from '../../lib/postgres.js'
import { GETCATEGORIES, POSTCATEGORY, UPDATECATEGORY, DELETECATEGORY } from './query.js'

const GET = async({ category_id = '' }) => {
    try {
        let categories = await fetchAll(GETCATEGORIES)
        categories = categories.filter(category => category.status == 'active')

        if (!category_id) {
            return categories
        }
        let findCategory = categories.find(category => category.category_id == category_id)
        if (!findCategory) {
            return []
        }
        return findCategory
    } catch (error) {
        throw new InternalServerError(500, 'Categories Error')
    }
}

const POST = async({ category_name }) => {
    try {
        return await fetch(POSTCATEGORY, [category_name])
    } catch (error) {
        throw new InternalServerError(500, 'Categories Internal Server Error')
    }
}

const UPDATE = async({ category_name }, { category_id }) => {
    try {
        return await fetch(UPDATECATEGORY, [category_name, category_id])
    } catch (error) {
        throw new InternalServerError(500, 'Categories Internal Server Error')
    }
}

const DELETE = async({ category_id }) => {
    try {
        return await fetch(DELETECATEGORY, [category_id])
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