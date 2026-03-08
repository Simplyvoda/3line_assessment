import { Router } from "express";
import RoleController from "../controllers/RoleController.js";

const router = Router();

router.get("/api/roles", RoleController.getRoles);

export default router;