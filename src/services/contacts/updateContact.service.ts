import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { Repository } from "typeorm";

import { AppError } from "../../error";
import {
  IContactUpdateRequest,
  IContactUpdateResponse,
} from "../../interfaces/contacts.interface";
import {
  contactSchemaResponse,
  contactUpdateSchemaResponse,
} from "../../schemas/contacts.schemas";

const updateContactService = async (
  id: number,
  contactData: Partial<IContactUpdateRequest>
): Promise<IContactUpdateResponse> => {
  const contactDataKeys = Object.keys(contactData);
  if (contactDataKeys.length === 0) {
    throw new AppError(
      "one of those keys must be sent: fullName, email, phone",
      400
    );
  }
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldClientData = await contactRepository.findOneBy({
    id: id,
  });

  if (!oldClientData) {
    throw new AppError("client id not found", 404);
  }
  const client = contactRepository.create({
    ...oldClientData,
    ...contactData,
  });

  const savedContact = await contactRepository.save(client);
  const updatedContactResponse =
    contactUpdateSchemaResponse.parse(savedContact);
  return updatedContactResponse;
};
export default updateContactService;
