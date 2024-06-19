import { Docente } from "src/docentes/entities/docente.entity";
import { Grado } from "src/grado/entities/grado.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Curso {

     @Column({ primary: true, generated:true})
     cursos_id: number;

     @Column({ length: 500 })
     nombre_cursos: string

     @ManyToOne( () => Docente, { eager:true })
     docente: Docente;

     @ManyToOne( () => Grado, { eager:true })
     grado: Grado;
}
