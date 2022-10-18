import { Router } from "express";
import checkToken from "../../middlewares/check-token.js";
import controller from "./controller.js";

const router = Router()

router.get('/api', checkToken, controller.GETIPADDRESS)
router.get('/events/:event_id', controller.GET)

router.get('/admin/events/:event_id', checkToken, controller.ADMINGET)
router.post('/events', checkToken, controller.POST)
router.post('/event/images/:event_id', checkToken, controller.POSTIMAGES)
router.put('/admin/events/:event_id', checkToken, controller.PUT)
router.delete('/events/:event_id', checkToken, controller.DELETE)


export default router