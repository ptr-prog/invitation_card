import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DB_RAILWAY, process.env.USER_RAILWAY, process.env.PASS_RAILWAY, {
    host: process.env.HOST_RAILWAY,
    port: process.env.PORT_RAILWAY,
    dialect: "mysql"
});

export default db;
