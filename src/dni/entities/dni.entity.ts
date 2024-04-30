import { Column, DeleteDateColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Dni {
    @Column({ primary: true, generated: true })
    dni_id: number;

    @Column({ length: 500 })
    tipo_dni: string;
}
