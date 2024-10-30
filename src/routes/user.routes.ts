import { Router } from "express";
import { createUser, deleteUser, findAllUsers, findUserByIdWithNews, updateUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";

const router = Router()

router.post("/", validate(CreateUserDTO), createUser)
router.get("/", findAllUsers)
router.delete("/:id", deleteUser)
router.patch("/:id", validate(UpdateUserDTO), updateUser)
router.get("/:id/news", findUserByIdWithNews)

export default router