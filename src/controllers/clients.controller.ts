import { Request, Response } from "express";
import listClientAppService from "../services/clients/readClient.service";
import createClientServices from "../services/clients/createClient.service";
import deleteClientService from "../services/clients/deleteClient.service";
import updateClientService from "../services/clients/updateClient.service";

const createClientController = async (req: Request, res: Response) => {
  const clientsData = req.body;
  const newData = await createClientServices(clientsData);
  return res.status(201).json(newData);
};

const listClientAppController = async (req: Request, res: Response) => {
  const data = await listClientAppService();

  return res.status(200).json(data);
};

const deleteClientAppControler = async (req: Request, res: Response) => {
  await deleteClientService(Number(req.params.id));
  return res.status(204).json();
};

const updateClientAppController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = Number(req.params.id);
  const newData = await updateClientService(id, data);
  return res.status(200).json(newData);
};
export {
  createClientController,
  listClientAppController,
  deleteClientAppControler,
  updateClientAppController,
};
