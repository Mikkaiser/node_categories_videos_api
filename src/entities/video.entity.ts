import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Category } from "./category.entity";

@Entity('videos')
export class Video {

    constructor() {
        if(!this.id)
            this.id = uuid();
    }

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column({name: 'category_id'})
    categoryId: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
}