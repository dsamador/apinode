import { DataSource } from "typeorm";
//import { Estudiante } from "../models/estudianteModel";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "david1083",
    database: "mimotico",
    logging: true,
    entities: ["../models/*.ts"],
    synchronize: true

});