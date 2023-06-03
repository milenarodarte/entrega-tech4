import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { clientsRoutes } from "./routes/clients.routes";
import { handleErrors } from "../errors";

const app = express();
app.use(express.json());
app.use("/clients", clientsRoutes);
app.use(handleErrors);
export default app;
