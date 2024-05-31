import { Apoderado } from "src/apoderado/entities/apoderado.entity";
import { Aula } from "src/aulas/entities/aula.entity";
import { Dni } from "src/dni/entities/dni.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";


@Entity()
export class Alumno {

    @Column({ primary: true, generated: true})
    alumno_id: number;

    @Column({ length: 500 })
    nombres_alumno: string
    
    @Column({ length: 500 })
    apellidos_alumno: string

    @Column({ length: 500})
    direccion_alumno: string

    @Column({ length: 500})
    telefono_alumno: string

    @Column()
    numero_dni: number;
    
    @ManyToOne( () => Dni)
    dni: Dni;

    @ManyToOne( () => Apoderado, apoderado => apoderado.alumnos )
    apoderado: Apoderado;

    @ManyToOne( () => Aula, aula => aula.alumno)
    aula: Aula;
}
