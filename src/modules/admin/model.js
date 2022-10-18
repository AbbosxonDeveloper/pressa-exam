import { InternalServerError } from '../../lib/error.js'
import { fetch, fetchAll } from '../../lib/postgres.js'
import LOGINADMIN from './query.js'

const LOGIN = async({ username, password }) => {
    try {
        return await fetch(LOGINADMIN, [username, password])
    } catch (error) {
        throw new InternalServerError(500, 'LOGIN Error')
    }
}

export default { LOGIN }