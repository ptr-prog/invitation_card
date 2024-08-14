import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TransactionModel = sequelize.define('birthdays', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAttending: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  food: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  drink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default TransactionModel;