import { 
  BaseEntity,   
  Entity,   
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn} 
from "typeorm"

@Entity('Audit')
export class Audit extends BaseEntity {

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  fecha_actualizacion: Date;

  @DeleteDateColumn()
  fecha_eliminacion: Date

}