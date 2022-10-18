import { Router } from "express";
import checkToken from "../../middlewares/check-token.js";
import controller from "./controller.js";

const router = Router()

router.get('/subcategories', controller.GET)
router.get('/subcategories/:sub_category_id', controller.GET)
router.post('/subcategories', checkToken, controller.POST)
router.put('/subcategories/:sub_category_id', checkToken, controller.PUT)
router.delete('/subcategories/:sub_category_id', checkToken, controller.DELETE)

export default router