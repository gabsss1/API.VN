import { Seccion } from "src/seccion/entities/seccion.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Grado {

    @Column({ primary: true, generated: true})
    grados_id: number;

    @Column({ length: 500})
    nombre_grado: string;
}
