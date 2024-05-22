import { Curso } from "src/cursos/curso.entity";
import { Docente } from "src/docentes/entities/docente.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Horario {
    @Column({ primary: true, generated:true})
    horario_id: number;

    @Column()
    hora_inicio: Date

    @Column()
    hora_fin: Date

    @ManyToMany( () => Curso, { eager: true })
    curso: Curso;

    @ManyToMany( () => Docente, { eager: true })
    docente: Docente;
}
