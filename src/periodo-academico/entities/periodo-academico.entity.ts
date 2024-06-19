import { Grado } from "src/grado/entities/grado.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

export class PeriodoAcademico {

    @Column({ primary: true, generated: true })
    periodo_academico: number;

    @Column({ length: 500})
    nombre_periodo: string;

    @ManyToOne( () => Grado, {eager: true})
    grado: Grado;
}
