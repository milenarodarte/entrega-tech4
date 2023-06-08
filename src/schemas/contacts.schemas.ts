import { z } from "zod";

const createContactSchema = z.object({
  fullName: z.string().min(7).max(100),
  email: z.string().email().max(127),
  phone: z.string().max(20),
  registerDate: z.date(),
  clientAttached: z.number(),
});

const UpdateContactchema = z.object({
  fullName: z.string().min(7).max(100).optional(),
  email: z.string().email().max(127).optional(),
  phone: z.string().max(20).optional(),
  clientAttached: z.number().optional(),
});

const contactSchemaResponse = createContactSchema.extend({
  id: z.number().int(),
  clientAtached: createContactSchema.omit({ clientAttached: true }),
});
const multipleContactsSchemaResponse = contactSchemaResponse.array();

export {
  UpdateContactchema,
  createContactSchema,
  multipleContactsSchemaResponse,
  contactSchemaResponse,
};
