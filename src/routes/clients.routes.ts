import { Router } from "express";
import { createClientController } from "../controllers/clients.controller";
import { listClientAppController } from "../controllers/clients.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
const clientsRoutes = Router();

clientsRoutes.post("", ensureDataIsValidMiddleware, createClientController);
clientsRoutes.get("", listClientAppController);
clientsRoutes.delete("/id");
clientsRoutes.patch("/id");
export { clientsRoutes };
