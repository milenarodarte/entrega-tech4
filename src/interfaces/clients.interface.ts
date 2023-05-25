import { Type } from "typescript";
import { z } from "zod";
import {
  createClientSchema,
  UpdateClientSchema,
} from "../schemas/users.schemas";

type IClientRequest = z.infer<typeof createClientSchema>;
type IUpdateRequest = z.infer<typeof UpdateClientSchema>;

export { IClientRequest, IUpdateRequest };
