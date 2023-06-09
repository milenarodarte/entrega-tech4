import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { IMultipleClienteAppRequest } from "../../interfaces/clients.interface";
import { multipleClientsSchemaResponse } from "../../schemas/clients.schemas";

const listClientAppService = async (): Promise<IMultipleClienteAppRequest> => {
  const clientsRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);

  const clientsApp: ClientApp[] = await clientsRepository.find();
  console.log(clientsApp);
  const allClients = multipleClientsSchemaResponse.parse(clientsApp);
  console.log(allClients);
  return allClients;
};

export default listClientAppService;
