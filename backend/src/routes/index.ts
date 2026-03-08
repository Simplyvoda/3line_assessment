import { Router } from "express";
import RoleController from "../controllers/RoleController";

const router = Router();

router.get("/api/roles", RoleController.getRoles);

export default router;