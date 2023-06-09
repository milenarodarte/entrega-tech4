import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { Repository } from "typeorm";
import {
  IUpdateRequest,
  IClientResponse,
} from "../../interfaces/clients.interface";
import { clientSchemaResponse } from "../../schemas/clients.schemas";
import { AppError } from "../../error";

const updateClientService = async (
  id: number,
  clientData: Partial<IUpdateRequest>
): Promise<IClientResponse> => {
  const clientDataKeys = Object.keys(clientData);
  if (clientDataKeys.length === 0) {
    throw new AppError(
      "one of those keys must be sent: fullName, email, phone",
      400
    );
  }
  const clientRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);

  const oldClientData = await clientRepository.findOneBy({
    id: id,
  });

  if (!oldClientData) {
    throw new AppError("client id not found", 404);
  }
  const client = clientRepository.create({
    ...oldClientData,
    ...clientData,
  });

  const savedClient = await clientRepository.save(client);
  const updatedClientResponse = clientSchemaResponse.parse(savedClient);
  return updatedClientResponse;
};
export default updateClientService;
