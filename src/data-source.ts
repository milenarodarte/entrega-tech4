import { DataSource, DataSourceOptions } from "typeorm";
import path from "node:path";
import "dotenv/config";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js, ts}");
  const migratonsPath = path.join(__dirname, "migrations/**.{js}");

  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migratonsPath],
  };
};

const AppDataSouce: DataSource = new DataSource(DataSourceConfig());

export { AppDataSouce };
