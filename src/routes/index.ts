import { Router } from "express";
import userRoutes from "./user.routes"
import newsRoutes from "./news.routes"

const router = Router()

router.use("/users", userRoutes)
router.use("/news", newsRoutes)

export default router