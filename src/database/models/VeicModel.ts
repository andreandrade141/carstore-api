import { DataTypes } from "sequelize";
import { db } from "../db";

export const VeicModel = db.define("veic", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  km: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
