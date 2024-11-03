import {   
  Column,   
  Entity,    
  //OneToMany, 
  PrimaryGeneratedColumn
  } 
from "typeorm"

import { Audit } from "./Audit";

@Entity('marca_pieza')
export class MarcaPiezaEntity extends Audit {

  @PrimaryGeneratedColumn()
  id: number;  

  @Column({
    unique: true,
    comment: "Nombre de la marca que vende la pieza de reemplazo del vehiculo",
    type:"varchar",
    length: 150
  })
  nombre_marca_pieza: String;  

  /*@OneToMany(() => PiezaEntity, (pieza) => pieza.marca) 
  piezas: PiezaEntity[];*/

}