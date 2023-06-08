import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { Contact } from "../../entities/contacts.entities";
import { IMultipleClienteAppRequest } from "../../interfaces/clients.interface";
import { multipleClientsSchemaResponse } from "../../schemas/clients.schemas";

const listClientAppService = async (): Promise<IMultipleClienteAppRequest> => {
  const clientsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const clientsApp: Contact[] = await clientsRepository.find();
  console.log(clientsApp, "bbbb");
  const allClients = multipleClientsSchemaResponse.parse(clientsApp);
  console.log(allClients);
  return allClients;
};

export default listClientAppService;
