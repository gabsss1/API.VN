// import { DocumentoIdentidad } from "src/documento_identidad/entities/documento_identidad.entity";
import { Alumno } from "src/alumnos/entities/alumno.entity";
import { Dni } from "src/dni/entities/dni.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Apoderado {
    @Column({ primary: true, generated: true })
    apoderado_id : number;

    @Column({ length: 500 })
    nombres_apoderado: string;

    @Column({ length: 500 })
    apellidos_apoderado: string;

    @Column({ unique: true, nullable: false })
    email_apoderado: string;
    
    @Column({ length: 500 })
    telefono_apoderado: string;

    @Column({ length: 500 })
    direccion_apoderado: string;

    @Column()
    numero_dni: number;

    @ManyToOne(() => Dni, { eager: true })
    dni: Dni;

    @OneToMany(() => Alumno, alumno => alumno.apoderado, { eager: true} )
    alumnos: Alumno[]

    @DeleteDateColumn()
    deletedAt: Date;
}
