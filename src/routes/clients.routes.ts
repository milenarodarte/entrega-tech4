import { Router } from "express";
import {
  createClientController,
  updateClientAppController,
} from "../controllers/clients.controller";
import { listClientAppController } from "../controllers/clients.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  createClientSchema,
  UpdateClientSchema,
} from "../schemas/clients.schemas";
import { deleteClientAppControler } from "../controllers/clients.controller";
const clientsRoutes = Router();

clientsRoutes.post(
  "",
  ensureDataIsValidMiddleware(createClientSchema),
  createClientController
);
clientsRoutes.get("", listClientAppController);
clientsRoutes.delete("/:id", deleteClientAppControler);
clientsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(UpdateClientSchema),
  updateClientAppController
);
export { clientsRoutes };
