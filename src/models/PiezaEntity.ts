import { 
  Column,
  Entity, 
  JoinTable, 
  ManyToMany,  
  PrimaryGeneratedColumn
} 
from "typeorm"
import { Audit } from "./Audit";
import { MarcaPiezaEntity } from "./MarcaPiezaEntity";

@Entity('pieza')
export class PiezaEntity extends Audit {

  @PrimaryGeneratedColumn()
  id: number;  

  @Column({
    unique: true,
    comment: "Nombre de la pieza de repuesto que va en el vehiculo",
    type:"varchar",
    length: 150
  })
  nombre_pieza: String;

  @Column({nullable: true})
  descripcion_pieza: string;

  @ManyToMany(() => MarcaPiezaEntity) 
  @JoinTable({
    name:"marcas_piezas", 
    joinColumn: {name:"marca_id"},
    inverseJoinColumn: {name:"pieza_id"}
  })
  marcas: MarcaPiezaEntity[];
  
}