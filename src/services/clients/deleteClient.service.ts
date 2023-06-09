import { AppDataSource } from "../../data-source";
import { ClientApp } from "../../entities/clients.entities";
import { Repository } from "typeorm";
import { AppError } from "../../../errors";

const deleteClientService = async (id: number): Promise<void> => {
  const clientRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);

  const oldClientData = await clientRepository.findOne({
    where: {
      id: id,
    },
  });
  if (oldClientData === null) {
    throw new AppError("cliente nao encontrado", 404);
  }
  await clientRepository.delete(oldClientData!);
};
export default deleteClientService;
