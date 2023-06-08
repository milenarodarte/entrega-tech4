import { Type } from "typescript";
import { z } from "zod";
import {
  createContactSchema,
  multipleContactsSchemaResponse,
  UpdateContactchema,
  contactSchemaResponse,
} from "../schemas/contacts.schemas";

type IContactRequest = z.infer<typeof createContactSchema>;
type IContactUpdateRequest = z.infer<typeof UpdateContactchema>;
type IMultipleContactAppRequest = z.infer<
  typeof multipleContactsSchemaResponse
>;
type IContactResponse = z.infer<typeof contactSchemaResponse>;
export {
  IContactRequest,
  IContactUpdateRequest,
  IMultipleContactAppRequest,
  IContactResponse,
};
