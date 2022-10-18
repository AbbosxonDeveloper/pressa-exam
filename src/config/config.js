import dotenv from "dotenv";
dotenv.config()

const SECRET = process.env.JWT_SECRET
const PORT = process.env.PORT || 5000

const pgConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD
}

export {
    SECRET,
    pgConfig,
    PORT
}