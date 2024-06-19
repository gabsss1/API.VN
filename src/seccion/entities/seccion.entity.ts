import { Alumno } from "src/alumnos/entities/alumno.entity";
import { Docente } from "src/docentes/entities/docente.entity";
import { Grado } from "src/grado/entities/grado.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Seccion {
    @Column({ primary: true, generated: true})
    seccion_id: number

    @Column({ length:500 })
    nombre_seccion: string;

    @Column()
    capacidad: number;
    
    @ManyToOne( () => Docente, { eager:true })
    docente: Docente;

    @ManyToOne( () => Grado, {eager: true})
    grado: Grado;

    @OneToMany(() => Alumno, alumno => alumno.seccion, { eager: true})
    alumno: Alumno[]
}
