

import { Alumno } from "src/alumnos/entities/alumno.entity";
import { Apoderado } from "src/apoderado/entities/apoderado.entity";
import { Grado } from "src/grado/entities/grado.entity";
import { Seccion } from "src/seccion/entities/seccion.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Matricula {
    @Column({ primary: true, generated: true})
    matricula_id: number;

    @Column({ length: 500})
    periodo_academico: string;

    @Column({ length: 500})
    numero_matricula: string;

    @Column({ length: 500})
    observaciones: string;

    @ManyToOne( () => Alumno, { eager:true })
    alumno: Alumno;

    @ManyToOne( () => Apoderado, { eager:true })
    apoderado: Apoderado;

    @ManyToOne(() => Seccion, { eager: true })
    seccion: Seccion;

    @ManyToOne(() => Grado, { eager: true })
    grado: Grado;
}
