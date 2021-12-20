import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  dtnasc: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  funcao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
