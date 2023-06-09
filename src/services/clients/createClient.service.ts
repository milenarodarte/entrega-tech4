import "reflect-metadata";
import { Repository } from "typeorm";
import {
  IClientResponse,
  IClientRequest,
} from "../../interfaces/clients.interface";
import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { AppError } from "../../../errors";
import { clientSchemaResponse } from "../../schemas/clients.schemas";

const createClientServices = async (
  clientData: IClientRequest
): Promise<IClientResponse> => {
  const clientsRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);
  const findFullName = await clientsRepository.findOneBy({
    fullName: clientData.fullName,
  });

  if (findFullName !== null) {
    throw new AppError("fullName already exists", 409);
  }
  const clientFull = { ...clientData, registrationDate: new Date() };

  const client = clientsRepository.create(clientFull);

  await clientsRepository.save(client);

  const newClient = clientSchemaResponse.parse(client);

  return newClient;
};

export default createClientServices;
