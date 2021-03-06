import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uudi } from 'uuid'
@Entity("register")
class Register {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uudi()
        }
    }
}

export { Register }