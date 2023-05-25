import app from "./app";
import { startDataBase } from "./database";
app.listen(3000, () => {
  startDataBase();
  console.log("server is running");
});
