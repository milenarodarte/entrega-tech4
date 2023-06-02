import { Router } from "express";
import { createClientController } from "../controllers/clients.controller";
import { listClientAppController } from "../controllers/clients.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
const usersRoutes = Router();

usersRoutes.post("", ensureDataIsValidMiddleware, createClientController);
usersRoutes.get("", ensureDataIsValidMiddleware, listClientAppController);
export { usersRoutes };
