import { z } from "Zod";

const createClientSchema = z.object({
  fullName: z.string().min(7).max(100),
  email: z.string().email().max(127),
  phone: z.string().max(20),
  registerDate: z.date(),
});

const UpdateClientSchema = z.object({
  fullName: z.string().min(7).max(100).optional(),
  email: z.string().email().max(127).optional(),
  phone: z.string().max(20).optional(),
  registerDate: z.date().optional(),
});

export { UpdateClientSchema, createClientSchema };
