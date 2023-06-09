import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { Repository } from "typeorm";
import { AppError } from "../../../errors";

const deleteContactService = async (id: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepository.findOne({
    where: {
      id: id,
    },
  });
  if (oldContactData === null) {
    throw new AppError("contact nao encontrado", 404);
  }
  await contactRepository.delete(oldContactData!);
};
export default deleteContactService;
