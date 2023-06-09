import { z } from "zod";

const createClientSchema = z.object({
  fullName: z.string().min(7).max(100),
  email: z.string().email().max(127),
  phone: z.string().max(20),
});

const UpdateClientSchema = z
  .object({
    fullName: z.string().min(7).max(100),
    email: z.string().email().max(127),
    phone: z.string().max(20),
  })
  .partial();
const clientSchemaResponse = createClientSchema.extend({
  id: z.number().int(),
  registrationDate: z.date(),
});
const multipleClientsSchemaResponse = clientSchemaResponse.array();

export {
  UpdateClientSchema,
  createClientSchema,
  multipleClientsSchemaResponse,
  clientSchemaResponse,
};
