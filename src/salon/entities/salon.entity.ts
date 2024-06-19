import { Seccion } from "src/seccion/entities/seccion.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Salon {
    @Column({ primary: true, generated: true })
    salon_id: number;

    @Column({ length: 500})
    numero_salon: string;

    @Column({ length: 500 })
    piso: string;

    @ManyToOne( () => Seccion, { eager:true })
     seccion: Seccion;
}
