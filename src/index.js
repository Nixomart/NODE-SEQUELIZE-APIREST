import app from "./app.js";
import { sequelize } from "../database/database.js";
import '../models/Project.js'
import '../models/Task.js'

async function main() {
  try {
    await sequelize.sync({ force: true});
    app.listen(4000);
    console.log("server in 4000");
  } catch (error) {
    console.log("error", error);
  }
}

main();
