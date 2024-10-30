import { Router } from "express"
import { validate } from "../middlewares/validate.middleware"
import { CreateNewsDTO, UpdateNewsDTO } from "../dtos/news.dto"
import { createNews, deleteNews, findAllNews, findNewsById, updateNews } from "../controllers/news.controller"

const router = Router()

router.post('/', validate(CreateNewsDTO), createNews)
router.get('/', findAllNews)
router.get('/:id', findNewsById)
router.delete('/:id', deleteNews)
router.patch('/:id', validate(UpdateNewsDTO), updateNews)

export default router