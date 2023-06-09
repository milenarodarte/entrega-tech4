import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createClientSchema,
  UpdateClientSchema,
  multipleClientsSchemaResponse,
  clientSchemaResponse,
} from "../schemas/clients.schemas";

type IClientRequest = z.infer<typeof createClientSchema>;
type IUpdateRequest = DeepPartial<typeof UpdateClientSchema>;
type IMultipleClienteAppRequest = z.infer<typeof multipleClientsSchemaResponse>;
type IClientResponse = z.infer<typeof clientSchemaResponse>;
export {
  IClientRequest,
  IUpdateRequest,
  IMultipleClienteAppRequest,
  IClientResponse,
};
