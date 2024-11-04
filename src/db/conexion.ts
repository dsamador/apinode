import { DataSource } from "typeorm";
import { MarcaPiezaEntity } from "../models/MarcaPiezaEntity";
import { PiezaEntity } from "../models/PiezaEntity";
//import { Estudiante } from "../models/estudianteModel";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "david1083",
    database: "mimotico",
    logging: true,
    entities: [MarcaPiezaEntity, PiezaEntity],
    synchronize: false

});