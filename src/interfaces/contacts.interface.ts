import { DeepPartial } from "typeorm";
import { Type } from "typescript";
import { z } from "zod";
import {
  createContactSchema,
  multipleContactsSchemaResponse,
  UpdateContactchema,
  contactSchemaResponse,
  multipleContactsSchemaResponseWithouClient,
  contactUpdateSchemaResponse,
} from "../schemas/contacts.schemas";

type IContactRequest = z.infer<typeof createContactSchema>;
type IContactUpdateRequest = DeepPartial<typeof UpdateContactchema>;
type IMultipleContactAppRequest = z.infer<
  typeof multipleContactsSchemaResponse
>;
type IContactResponse = z.infer<typeof contactSchemaResponse>;
type IContactUpdateResponse = z.infer<typeof contactUpdateSchemaResponse>;
type IContactResponseWithoutClient = z.infer<
  typeof multipleContactsSchemaResponseWithouClient
>;
export {
  IContactUpdateResponse,
  IContactRequest,
  IContactUpdateRequest,
  IMultipleContactAppRequest,
  IContactResponse,
  IContactResponseWithoutClient,
};
