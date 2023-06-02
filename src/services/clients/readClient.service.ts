import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import ClientApp from "../../entities/clients.entities";
import { IMultipleClienteAppRequest } from "../../interfaces/clients.interface";
import { multipleClientsSchemaResponse } from "../../schemas/users.schemas";

const listClientAppService = async (): Promise<IMultipleClienteAppRequest> => {
  const clientsRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);
  const clientsApp = await clientsRepository.find({
    order: {
      id: "ASC",
    },
  });
  const allClients = multipleClientsSchemaResponse.parse(clientsApp);
  return allClients;
};

export default listClientAppService;
