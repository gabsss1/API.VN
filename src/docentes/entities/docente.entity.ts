
import { Dni } from "src/dni/entities/dni.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Docente {

    @Column({ primary: true, generated: true })
    docente_id: number;

    @Column({ length: 500 })
    nombre_docente: string;

    @Column({ length: 500 })
    apellido_docente: string;

    @Column({ length: 500 })
    direccion_docente: string;

    @Column({ unique: true, nullable: false })
    email_docente: string;

    @Column({ length: 500})
    telefono_docente: string;

    @Column()
    numero_dni: number;

    @ManyToOne( () => Dni, { eager:true })
    dni: Dni;

    @DeleteDateColumn()
    deletedAt: Date;
}
