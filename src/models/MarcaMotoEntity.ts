import {   
  Column,   
  Entity,    
  PrimaryGeneratedColumn
  } 
from "typeorm"

import { Audit } from "./Base/Audit";

@Entity('marca_moto')
export class MarcaMotoEntity extends Audit {

  @PrimaryGeneratedColumn()
  id: number;  

  @Column({
    unique: true,
    comment: "Nombre de la marca de la moto",
    type:"varchar",
    length: 150
  })
  nombre_marca_moto: String;
}