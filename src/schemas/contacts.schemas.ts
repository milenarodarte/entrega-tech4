import { z } from "zod";
import { clientSchemaResponse } from "./clients.schemas";
const createContactSchema = z.object({
  fullName: z.string().min(7).max(100),
  email: z.string().email().max(127),
  phone: z.string().max(20),
  clientAttached: z.number(),
});

const UpdateContactchema = z.object({
  fullName: z.string().min(7).max(100).optional(),
  email: z.string().email().max(127).optional(),
  phone: z.string().max(20).optional(),
});

const contactSchemaResponse = createContactSchema
  .extend({
    registrationDate: z.date(),
    id: z.number().int(),
    client: clientSchemaResponse.nullable(),
  })
  .omit({
    clientAttached: true,
  });
const contactUpdateSchemaResponse = UpdateContactchema.extend({
  registrationDate: z.date(),
  id: z.number().int(),
});

const contactSchemaResponseWithoutClient = createContactSchema.extend({
  registrationDate: z.date(),
  id: z.number().int(),
});
const multipleContactsSchemaResponse = contactSchemaResponse.array();
const multipleContactsSchemaResponseWithouClient =
  contactSchemaResponseWithoutClient.array();
export {
  contactUpdateSchemaResponse,
  UpdateContactchema,
  createContactSchema,
  multipleContactsSchemaResponse,
  contactSchemaResponse,
  multipleContactsSchemaResponseWithouClient,
};
