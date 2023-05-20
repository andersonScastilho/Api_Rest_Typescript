import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

interface JobInstace extends Model {
  id: number;
  title: string;
  description: string;
  limitDate: Date;
  companyId: number;
}
const Job = sequelize.define<JobInstace>("jobs", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  limitDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "companies",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
});

export { Job };
