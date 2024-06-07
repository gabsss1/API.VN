import { Alumno } from "src/alumnos/entities/alumno.entity";
import { Seccion } from "src/seccion/entities/seccion.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Aula {
    @Column({ primary: true, generated: true })
    aulas_id: number;

    @Column({ length: 500 })
    numero_aula: string;

    @Column()
    capacidad: number;

    @Column({ length: 500 })
    piso: string;

    @ManyToOne(() => Seccion, { eager: true })
    @JoinColumn()
    seccion: Seccion;

    @OneToMany(() => Alumno, alumno => alumno.aula, { eager: true})
    alumno: Alumno[]
}

