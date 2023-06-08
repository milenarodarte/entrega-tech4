import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { Repository } from "typeorm";
import {
  IUpdateRequest,
  IClientResponse,
} from "../../interfaces/clients.interface";
import { clientSchemaResponse } from "../../schemas/users.schemas";
import { AppError } from "../../error";

const updateClientService = async (
  id: number,
  clientData: IUpdateRequest
): Promise<IClientResponse> => {
  const clientDataKeys = Object.keys(clientData);
  if (clientDataKeys.length === 0) {
    throw new AppError(
      "one of those keys must be sent: fullName, email, phone]",
      400
    );
  }
  const clientRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);
  const oldClientData = await clientRepository.findOneBy({
    id: id,
  });
  const client = clientRepository.create({
    ...oldClientData,
    ...clientData,
  });
  await clientRepository.save(clientData);
  const updatedClient = clientSchemaResponse.parse(client);
  return updatedClient;
};
