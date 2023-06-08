import { Request, Response } from "express";
import listClientAppService from "../services/clients/readClient.service";
import createClientServices from "../services/clients/createClient.service";
import deleteClientService from "../services/clients/deleteClient.service";
const createClientController = async (req: Request, res: Response) => {
  const clientsData = req.body;
  const newData = await createClientServices(clientsData);
  return res.status(201).json("usuario criado");
};

const listClientAppController = async (req: Request, res: Response) => {
  const data = await listClientAppService();

  return res.status(200).json(data);
};

const deleteClientAppControler = async (req: Request, res: Response) => {
  await deleteClientService(Number(req.params.id));
};
export { createClientController, listClientAppController };
