import { Aula } from "src/aulas/entities/aula.entity";
import { Docente } from "src/docentes/entities/docente.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Curso {

     @Column({ primary: true, generated:true})
     cursos_id: number;

     @Column({ length: 500 })
     nombre_cursos: string

     @ManyToOne( () => Docente, { eager:true })
     docente: Docente;

     @ManyToOne( () => Aula, { eager:true })
     aula: Aula;
}
