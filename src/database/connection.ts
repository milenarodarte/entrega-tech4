import client from "./config";

const startDataBase = async (): Promise<void> => {
  await client.connect();
  console.log("DataBase connected");
};
export default startDataBase;
