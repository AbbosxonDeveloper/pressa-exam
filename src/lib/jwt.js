import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export default {
    sign: (payload) => jwt.sign(payload, SECRET),
    verify: (token) => jwt.verify(token, SECRET)
}