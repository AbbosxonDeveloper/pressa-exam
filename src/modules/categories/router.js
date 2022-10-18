import { Router } from "express";
import checkToken from "../../middlewares/check-token.js";
import controller from "./controller.js";

const router = Router()

router.get('/categories', controller.GET)
router.get('/categories/:category_id', controller.GET)
router.post('/categories', checkToken, controller.POST)
router.put('/categories/:category_id', checkToken, controller.PUT)
router.delete('/categories/:category_id', checkToken, controller.DELETE)

export default router