import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Usuario {
  @Column({ primary: true, generated: true })
  usuario_id: number;

  @Column({ length: 500 })
  nombres_usuario: string;

  @Column({ unique: true, nullable: false })
  email_usuario: string;

  @Column({ nullable: false })
  contrasena_usuario: string;

  @Column({ default: "user" })
  rol: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
