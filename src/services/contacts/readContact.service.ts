import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { IMultipleContactAppRequest } from "../../interfaces/contacts.interface";
import { multipleContactsSchemaResponse } from "../../schemas/contacts.schemas";
const listContactService = async (): Promise<IMultipleContactAppRequest> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact[] = await contactRepository.find({
    relations: {
      client: true,
    },
  });
  console.log(contact);
  const allClients = multipleContactsSchemaResponse.parse(contact);
  console.log(allClients);

  return allClients;
};

export default listContactService;
