import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn } 
from "typeorm"

@Entity('marcas_piezas')
export class MarcaPieza extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;  

  @Column()
  nombre_marca_pieza: String;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_actualizado: Date;

}