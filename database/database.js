import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("node_example", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
