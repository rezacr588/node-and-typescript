import { Router } from "express";
import {
  createHandler,
  getHandler,
  updateHandler,
  deleteHandler,
} from "../controllers/todos";
const router = Router();
router.get("/", getHandler);
router.post("/", createHandler);
router.patch("/:id", updateHandler);
router.delete("/id", deleteHandler);
export default router;
