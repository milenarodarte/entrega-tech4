import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { Repository } from "typeorm";

const deleteClientService = async (id: number): Promise<void> => {
  const clientRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);

  const oldClientData = await clientRepository.findOne({
    where: {
      id: id,
    },
  });

  await clientRepository.delete(oldClientData!);
};
export default deleteClientService;
