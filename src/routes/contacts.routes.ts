import { Router } from "express";
import { createClientController } from "../controllers/clients.controller";
import { listClientAppController } from "../controllers/clients.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  createContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import {
  createContactSchema,
  UpdateContactchema,
} from "../schemas/contacts.schemas";
import {
  listContactContoller,
  deleteContactController,
} from "../controllers/contacts.controllers";
const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(createContactSchema),
  createContactController
);
contactsRoutes.get("", listContactContoller);
contactsRoutes.delete("/:id", deleteContactController);
contactsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(UpdateContactchema),
  updateContactController
);
export { contactsRoutes };
