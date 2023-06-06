import { Router } from "express";
import { createClientController } from "../controllers/clients.controller";
import { listClientAppController } from "../controllers/clients.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
const contactsRoutes = Router();

contactsRoutes.post("");
contactsRoutes.get("");
contactsRoutes.delete("/id");
contactsRoutes.patch("/id");
export { contactsRoutes };
