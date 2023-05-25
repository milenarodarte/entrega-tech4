import { Router } from "express";
import { createUSerController } from "../controllers/clients.controller";

const usersRoutes = Router();

usersRoutes.post("", createUSerController);
export { usersRoutes };
