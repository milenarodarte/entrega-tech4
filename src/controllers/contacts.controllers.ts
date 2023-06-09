import { Request, Response } from "express";
import createContactServices from "../services/contacts/createContact.service";
import listContactService from "../services/contacts/readContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import updateContactService from "../services/contacts/updateContact.service";
const createContactController = async (req: Request, res: Response) => {
  const contactData = req.body;
  const newData = await createContactServices(contactData);
  return res.status(201).json(newData);
};

const listContactContoller = async (req: Request, res: Response) => {
  const data = await listContactService();

  return res.status(200).json(data);
};

const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(Number(req.params.id));
  return res.status(204).json();
};

const updateContactController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = Number(req.params.id);
  const newData = await updateContactService(id, data);
  return res.status(200).json(newData);
};
export {
  createContactController,
  listContactContoller,
  deleteContactController,
  updateContactController,
};
