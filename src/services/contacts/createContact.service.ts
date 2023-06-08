import "reflect-metadata";
import { Repository } from "typeorm";
import {
  IContactResponse,
  IContactRequest,
} from "../../interfaces/contacts.interface";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { Contact } from "../../entities/contacts.entities";
import { ClientApp } from "../../entities/clients.entities";
import { contactSchemaResponse } from "../../schemas/contacts.schemas";

const createContactServices = async (
  contactData: IContactRequest
): Promise<IContactResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const clientsRepository: Repository<ClientApp> =
    AppDataSource.getRepository(ClientApp);
  const client = await clientsRepository.findOneBy({
    id: contactData.clientAttached,
  });
  if (client === null) {
    throw new AppError("client id does not exists", 404);
  }

  const findFullName = await contactsRepository.findOne({
    where: {
      fullName: contactData.fullName,
    },
  });

  if (findFullName !== null) {
    throw new AppError(
      "another contact with the same name has already been registred"
    );
  }

  const contact = { ...contactData, clientAttached: client };

  await contactsRepository.save(contact);

  const newcontact = contactSchemaResponse.parse(contact);

  return newcontact;
};

export default createContactServices;
