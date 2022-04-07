import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('categories')
export class Category {

    
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    
    
    constructor() {
        if(!this.id)
            this.id = uuid();
    }
}