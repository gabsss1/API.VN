import { Column, DeleteDateColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Seccion {
    @Column({ primary: true, generated: true})
    seccion_id: number

    @Column({ length:500 })
    nombre_seccion: string;
}
