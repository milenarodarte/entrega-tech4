import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";
import { Contact } from "./entities/contacts.entities";
import { ClientApp } from "./entities/clients.entities";
import { InitialMigration1685974449531 } from "./migrations/1685974449531-InitialMigration";
const DataSourceConfig = (): DataSourceOptions => {
  if (!process.env.DATABASE_URL)
    throw new Error("Env var DATABASE_URL does not exists");

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [Contact, ClientApp],
    migrations: [InitialMigration1685974449531],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
